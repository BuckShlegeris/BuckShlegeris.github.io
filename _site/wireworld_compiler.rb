myCircuit = [:gate, [:gate, [:var], [:var]], [:gate, [:var], [:var]]]

class BoardItem
  attr_accessor :x, :y
end

class Gate < BoardItem
  def initialize(direction, x, y)
    @direction = direction
    @x = x
    @y = y
  end

  def inspect
    "<gate #{@direction} (#{@x},#{@y})>"
  end
end

class Var < BoardItem
  def initialize(direction, x, y)
    @direction = direction
    @x = x
    @y = y
  end

  def inspect
    "<var #{@direction} (#{@x},#{@y})>"
  end
end

class Wire < BoardItem
  def initialize(dir1, dir2, x, y)
    @dir1 = dir1
    @dir2 = dir2
    @x = x
    @y = y
  end

  def inspect
    "<wire #{@dir1} #{@dir2} (#{@x},#{@y})>"
  end
end

def height(circuit)
  circuit.map(&:y).max - circuit.map(&:y).min + 1
end

def move(circuit, dx, dy)
  circuit.each do |component|
    component.x += dx
    component.y += dy
  end
end

def compileCircuit(circuit, direction = :down)
  case circuit.first
  when :var
    [Var.new(direction, 0, 0)]
  when :gate
    l = compileCircuit(circuit[1], :down)
    r = compileCircuit(circuit[2], :up)
    size_l = height(l)
    size_r = height(r)
    move(r, 0, size_l)

    wiringAcross = (size_l...size_l + size_r - 1).map { |x| Wire.new(:up, :down, x, 0) }
    wiringUp = (size_r...size_l + size_r - 1).map { |x| Wire.new(:down, :up, x, size_l + size_r - 1 - x) }
    finalGate = Gate.new(direction, size_l + size_r - 1, 0)
    return l + r + wiringAcross + wiringUp + [finalGate]
  end
end

size2 = [Var.new(:down, 0, 0), Var.new(:down, 0, 1), Gate.new(:down, 1, 0)]
size1 = [Var.new(:down, 0, 0)]

p compileCircuit([:gate, [:gate, [:var], [:var]], [:gate, [:var], [:var]]])
