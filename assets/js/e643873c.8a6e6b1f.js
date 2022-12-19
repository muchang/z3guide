"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7454],{538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(3117),i=(n(7294),n(3905)),o=n(7634),s=n.n(o);const l={title:"Strategies",sidebar_position:3},r="Strategies",p={unversionedId:"Z3 Python - Readonly/Strategies",id:"Z3 Python - Readonly/Strategies",title:"Strategies",description:"High-performance solvers, such as Z3, contain many tightly integrated, handcrafted heuristic",source:"@site/docs-programming/02 - Z3 Python - Readonly/03 - Strategies.md",sourceDirName:"02 - Z3 Python - Readonly",slug:"/Z3 Python - Readonly/Strategies",permalink:"/z3guide/programming/Z3 Python - Readonly/Strategies",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/02 - Z3 Python - Readonly/03 - Strategies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Strategies",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Advanced Topics",permalink:"/z3guide/programming/Z3 Python - Readonly/advanced"},next:{title:"Fixedpoints",permalink:"/z3guide/programming/Z3 Python - Readonly/Fixedpoints"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Tactics",id:"tactics",level:2},{value:"Combining tactics with solvers",id:"combining-tactics-with-solvers",level:3},{value:"Using tactics to simplify benchmarks",id:"using-tactics-to-simplify-benchmarks",level:3},{value:"Probes",id:"probes",level:2}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strategies"},"Strategies"),(0,i.kt)("p",null,"High-performance solvers, such as Z3, contain many tightly integrated, handcrafted heuristic\ncombinations of algorithmic proof methods. While these heuristic\ncombinations tend to be highly tuned for known classes of problems,\nthey may easily perform very badly on new classes of problems.\nThis issue is becoming increasingly pressing\nas solvers begin to gain the attention of practitioners in diverse areas of science and engineering.\nIn many cases, changes to the solver heuristics can make a\ntremendous difference."),(0,i.kt)("p",null,"In this tutorial we show how to create custom strategies using the basic building blocks\navailable in Z3. Z3Py and Z3 implement the ideas proposed in this ",(0,i.kt)("a",{target:"_blank",href:"http://research.microsoft.com/en-us/um/people/leonardo/strategy.pdf"},"article"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'Z3 implements  a methodology for orchestrating reasoning\nengines where "big" symbolic reasoning steps are represented as\nfunctions known as ',(0,i.kt)("strong",{parentName:"p"},"tactics"),", and tactics are composed using\ncombinators known as ",(0,i.kt)("strong",{parentName:"p"},"tacticals"),". Tactics process sets of\nformulas called ",(0,i.kt)("strong",{parentName:"p"},"Goals"),"."),(0,i.kt)("p",null,"When a tactic is applied to some goal ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),", four different outcomes\nare possible. The tactic succeeds in showing ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," to be satisfiable (i.e., feasible);\nsucceeds in showing ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," to be unsatisfiable (i.e., infeasible); produces a sequence of subgoals; or fails.\nWhen reducing a goal ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," to a sequence of subgoals ",(0,i.kt)("inlineCode",{parentName:"p"},"G1"),", ...,\n",(0,i.kt)("inlineCode",{parentName:"p"},"Gn"),", we face the problem of model conversion.\nA ",(0,i.kt)("strong",{parentName:"p"},"model converter")," construct a model for ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),"\nusing a model for some subgoal ",(0,i.kt)("inlineCode",{parentName:"p"},"Gi"),". "),(0,i.kt)("p",null,"In the following example, we create a goal ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," consisting of three formulas, and a tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"\ncomposed of two built-in tactics: ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"solve-eqs"),". The tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify"),"\napply transformations equivalent to the ones found in the command ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify"),". The tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"solver-eqs"),"\neliminate variables using Gaussian elimination. Actually, ",(0,i.kt)("inlineCode",{parentName:"p"},"solve-eqs")," is not restricted only to linear arithmetic.\nIt can also eliminate arbitrary variables. Then, combinator ",(0,i.kt)("inlineCode",{parentName:"p"},"Then")," applies ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify")," to the input goal\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"solve-eqs")," to each subgoal produced by ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify"),". In this example, only one subgoal is produced."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Reals('x y')\ng  = Goal()\ng.add(x > 0, y > 0, x == y + 2)\nprint g\n\nt1 = Tactic('simplify')\nt2 = Tactic('solve-eqs')\nt  = Then(t1, t2)\nprint t(g)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"In the example above, variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is eliminated, and is not present the resultant goal."),(0,i.kt)("p",null,"In Z3, we say a ",(0,i.kt)("strong",{parentName:"p"},"clause")," is any constraint of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"Or(f_1, ..., f_n)"),".\nThe tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"split-clause")," will select a clause ",(0,i.kt)("inlineCode",{parentName:"p"},"Or(f_1, ..., f_n)")," in the input goal, and split it\n",(0,i.kt)("inlineCode",{parentName:"p"},"n")," subgoals. One for each subformula ",(0,i.kt)("inlineCode",{parentName:"p"},"f_i"),"."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Reals('x y')\ng  = Goal()\ng.add(Or(x < 0, x > 0), x == y + 1, y < 0)\n\nt = Tactic('split-clause')\nr = t(g)\nfor g in r: \n    print g",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("h2",{id:"tactics"},"Tactics"),(0,i.kt)("p",null,"Z3 comes equipped with many built-in tactics.\nThe command ",(0,i.kt)("inlineCode",{parentName:"p"},"describe_tactics()")," provides a short description of all built-in tactics."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"describe_tactics()",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"Z3Py comes equipped with the following tactic combinators (aka tacticals):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Then(t, s)")),(0,i.kt)("td",{parentName:"tr",align:null},"applies ",(0,i.kt)("inlineCode",{parentName:"td"},"t")," to the input goal and ",(0,i.kt)("inlineCode",{parentName:"td"},"s")," to every subgoal produced by ",(0,i.kt)("inlineCode",{parentName:"td"},"t"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OrElse(t, s)")),(0,i.kt)("td",{parentName:"tr",align:null},"first applies ",(0,i.kt)("inlineCode",{parentName:"td"},"t")," to the given goal, if it fails then returns the result of ",(0,i.kt)("inlineCode",{parentName:"td"},"s")," applied to the given  goal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Repeat(t)")),(0,i.kt)("td",{parentName:"tr",align:null},"Keep applying the given tactic until no subgoal is modified by it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Repeat(t, n)")),(0,i.kt)("td",{parentName:"tr",align:null},"Keep applying the given tactic until no subgoal is modified by it, or the number of iterations is greater than ",(0,i.kt)("inlineCode",{parentName:"td"},"n"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TryFor(t, ms)")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply tactic ",(0,i.kt)("inlineCode",{parentName:"td"},"t")," to the input goal, if it does not return in ",(0,i.kt)("inlineCode",{parentName:"td"},"ms")," millisenconds, it fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"With(t, params)")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply the given tactic using the given parameters.")))),(0,i.kt)("p",null,"The following example demonstrate how to use these combinators."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y, z = Reals('x y z')\ng = Goal()\ng.add(Or(x == 0, x == 1), \n      Or(y == 0, y == 1), \n      Or(z == 0, z == 1),\n      x + y + z > 2)\n\n# Split all clauses\"\nsplit_all = Repeat(OrElse(Tactic('split-clause'),\n                          Tactic('skip')))\nprint split_all(g)\n\nsplit_at_most_2 = Repeat(OrElse(Tactic('split-clause'),\n                          Tactic('skip')),\n                         1)\nprint split_at_most_2(g)\n\n# Split all clauses and solve equations\nsplit_solve = Then(Repeat(OrElse(Tactic('split-clause'),\n                                 Tactic('skip'))),\n                   Tactic('solve-eqs'))\n\nprint split_solve(g)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"In the tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"split_solver"),", the tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"solve-eqs")," discharges all but one goal.\nNote that, this tactic generates one goal: the empty goal which is trivially satisfiable (i.e., feasible) "),(0,i.kt)("p",null,"The list of subgoals can be easily traversed using the Python ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statement."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y, z = Reals('x y z')\ng = Goal()\ng.add(Or(x == 0, x == 1), \n      Or(y == 0, y == 1), \n      Or(z == 0, z == 1),\n      x + y + z > 2)\n\n# Split all clauses\"\nsplit_all = Repeat(OrElse(Tactic('split-clause'),\n                          Tactic('skip')))\nfor s in split_all(g):\n    print s",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"A tactic can be converted into a solver object using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"solver()"),".\nIf the tactic produces the empty goal, then the associated solver returns ",(0,i.kt)("inlineCode",{parentName:"p"},"sat"),".\nIf the tactic produces a single goal containing ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", then the solver returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unsat"),".\nOtherwise, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),"."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"bv_solver = Then('simplify', \n                 'solve-eqs', \n                 'bit-blast', \n                 'sat').solver()\n\nx, y = BitVecs('x y', 16)\nsolve_using(bv_solver, x | y == 13, x > y)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"In the example above, the tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"bv_solver")," implements a basic bit-vector solver using equation solving,\nbit-blasting, and a propositional SAT solver. Note that, the command ",(0,i.kt)("inlineCode",{parentName:"p"},"Tactic")," is suppressed.\nAll Z3Py combinators automatically invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"Tactic")," command if the argument is a string.\nFinally, the command ",(0,i.kt)("inlineCode",{parentName:"p"},"solve_using")," is a variant of the ",(0,i.kt)("inlineCode",{parentName:"p"},"solve")," command where the first\nargument specifies the solver to be used."),(0,i.kt)("p",null,"In the following example, we use the solver API directly instead of the command ",(0,i.kt)("inlineCode",{parentName:"p"},"solve_using"),".\nWe use the combinator ",(0,i.kt)("inlineCode",{parentName:"p"},"With")," to configure our little solver. We also include the tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"aig"),"\nwhich tries to compress Boolean formulas using And-Inverted Graphs."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"bv_solver = Then(With('simplify', mul2concat=True),\n                 'solve-eqs', \n                 'bit-blast', \n                 'aig',\n                 'sat').solver()\nx, y = BitVecs('x y', 16)\nbv_solver.add(x*32 + y == 13, x & y < 10, y > -100)\nprint bv_solver.check()\nm = bv_solver.model()\nprint m\nprint x*32 + y, \"==\", m.evaluate(x*32 + y)\nprint x & y, \"==\", m.evaluate(x & y)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"The tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"smt")," wraps the main solver in Z3 as a tactic."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y = Ints('x y')\ns = Tactic('smt').solver()\ns.add(x > y + 1)\nprint s.check()\nprint s.model()",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"Now, we show how to implement a solver for integer arithmetic using SAT. The solver is complete\nonly for problems where every variable has a lower and upper bound."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"s = Then(With('simplify', arith_lhs=True, som=True),\n         'normalize-bounds', 'lia2pb', 'pb2bv', \n         'bit-blast', 'sat').solver()\nx, y, z = Ints('x y z')\nsolve_using(s, \n            x > 0, x < 10, \n            y > 0, y < 10, \n            z > 0, z < 10,\n            3*y + 2*x == z)\n# It fails on the next example (it is unbounded)\ns.reset()\nsolve_using(s, 3*y + 2*x == z)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("h3",{id:"combining-tactics-with-solvers"},"Combining tactics with solvers"),(0,i.kt)("p",null,"Tactics can be combined with solvers. For example, we can apply a tactic to a goal, produced a set of subgoals,\nthen select one of the subgoals and solve it using a solver. The next example demonstrates how to do that, and how to\nuse model converters to convert a model for a subgoal into a model for the original goal."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"t = Then('simplify', \n         'normalize-bounds', \n         'solve-eqs')\n\nx, y, z = Ints('x y z')\ng = Goal()\ng.add(x > 10, y == x + 3, z > y)\n\nr = t(g)\n# r contains only one subgoal\nprint r\n\ns = Solver()\ns.add(r[0])\nprint s.check()\n# Model for the subgoal\nprint s.model()\n# Model for the original goal\nprint r.convert_model(s.model())",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("h3",{id:"using-tactics-to-simplify-benchmarks"},"Using tactics to simplify benchmarks"),(0,i.kt)("p",null,"You can also use tactics to transform SMTLIB problems. Some simplifications eliminate variables so they\nwill not appear in the simplified formulas."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'fml = """(declare-const x Int)\n(declare-const y Int)\n(assert (or (< (+ 3 x y) 1) (< x y)))\n(assert (= x (+ y 1)))\n"""\n\ns = Solver()\ns.from_string(fml)\ng = Goal()\ng.add(s.assertions())\nt = Then(\'simplify\', \'solve-eqs\')\nr = t(g)\ns = Solver()\ns.add(Or([g.as_expr() for g in r]))\nprint(s.sexpr())',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("h2",{id:"probes"},"Probes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Probes")," (aka formula measures) are evaluated over goals.\nBoolean expressions over them can be built using relational operators and Boolean connectives.\nThe tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"FailIf(cond)")," fails if the given goal does not satisfy the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),".\nMany numeric and Boolean measures are available in Z3Py. The command ",(0,i.kt)("inlineCode",{parentName:"p"},"describe_probes()")," provides the list of\nall built-in probes."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"describe_probes()",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"In the following example, we build a simple tactic using ",(0,i.kt)("inlineCode",{parentName:"p"},"FailIf"),". It also shows that a probe can be applied directly\nto a goal."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:'x, y, z = Reals(\'x y z\')\ng = Goal()\ng.add(x + y + z > 0)\n\np = Probe(\'num-consts\')\nprint "num-consts:", p(g)\n\nt = FailIf(p > 2)\ntry:\n    t(g)\nexcept Z3Exception:\n    print "tactic failed"\n\nprint "trying again..."\ng = Goal()\ng.add(x + y > 0)\nprint t(g)',result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,i.kt)("p",null,"Z3Py also provides the combinator (tactical) ",(0,i.kt)("inlineCode",{parentName:"p"},"If(p, t1, t2)")," which is a shorthand for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OrElse(Then(FailIf(Not(p)), t1), t2)\n")),(0,i.kt)("p",null,"The combinator ",(0,i.kt)("inlineCode",{parentName:"p"},"When(p, t)")," is a shorthand for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"If(p, t, 'skip')\n")),(0,i.kt)("p",null,"The tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"skip")," just returns the input goal.\nThe following example demonstrates how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"If")," combinator."),(0,i.kt)(s(),{input:{lang:"z3-python",highlight:"python",statusCodes:{},code:"x, y, z = Reals('x y z')\ng = Goal()\ng.add(x**2 - y**2 >= 0)\n\np = Probe('num-consts')\nt = If(p > 2, 'simplify', 'factor')\n\nprint t(g)\n\ng = Goal()\ng.add(x + x + y + z >= 0, x**2 - y**2 >= 0)\n\nprint t(g)",result:{},githubRepo:"Z3Prover/z3",editable:!1,readonly:!0,showLineNumbers:!0},mdxType:"CustomCodeBlock"}))}h.isMDXComponent=!0}}]);