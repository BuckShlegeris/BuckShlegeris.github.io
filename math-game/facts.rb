real_analysis = Topic.define do |t|
  t.strictly_ascending_chain("constant,linear,polynomial,analytic,smooth,"
    "continuously differentiable,differentiable,continuous,piecewise continuous")

  t.strictly_ascending_chain("identity,linear")
  t.strictly_ascending_chain("linear,Lipschitz,continuous")

  t.object "λx → sin(x)", member_of: ["analytic", "Lipschitz"]
  t.object "λx → cos(x)", member_of: ["analytic", "Lipschitz"]
  t.object "λx → tan(x)", member_of: ["piecewise continuous"]
end
