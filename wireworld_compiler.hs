data BoolExp = Var | BinOpExp BinOp BoolExp BoolExp
  deriving (Show)

band = BinOpExp And

data BinOp = And | Or
  deriving (Show)

type Circuit = [(Int, Int, CircuitComponent)]

data CircuitComponent = BinOpGate BinOp Direction | Wire Direction Direction
  deriving (Show)

data Direction = Up | Down
  deriving Show

height :: Circuit -> Int
height [] = 1
height xs = 1 + (maximum $ (map (\(_,y,_) -> y)) xs)

width :: Circuit -> Int
width [] = 1
width xs = 1 + (maximum $ (map (\(x,_,_) -> x)) xs)

shiftDown :: Int -> Circuit -> Circuit
shiftDown amount = map (\(x,y,c) -> (x,y+amount,c))

compile :: BoolExp -> Circuit
compile = compile' Up

wireDown :: Int -> Circuit -> Circuit
wireDown _ x = x
-- wireDown amount thing = thing ++ [(width thing + dx,0,Wire Up Down) |
--                                    dx <- [0..amount-1]]

wireUp :: Int -> Circuit -> Circuit
wireUp _ x = x
-- wireUp amount thing = thing ++ [(width thing + dx, -dx, Wire Down Up) | dx <- [0..amount-1]]

compile' :: Direction -> BoolExp -> Circuit
compile' _ Var = []
compile' dir (BinOpExp op l r) =
      (total_size, 0, BinOpGate op dir) :
              wireDown (height r_circ) l_circ ++
                    shiftDown (height l_circ) (wireUp (height l_circ) r_circ)
  where
    l_circ = compile' Down l
    r_circ = compile' Up r
    total_size = height l_circ + height r_circ
