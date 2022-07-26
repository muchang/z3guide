"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5647],{9332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(3117),o=(n(7294),n(3905)),s=n(504),r=n.n(s);const a={title:"Combining Objectives",sidebar_position:5},c=void 0,l={unversionedId:"optimization/combiningobjectives",id:"optimization/combiningobjectives",title:"Combining Objectives",description:"Many optimization problems require solving multiple objectives.",source:"@site/docs-smtlib/04 - optimization/05 - combiningobjectives.md",sourceDirName:"04 - optimization",slug:"/optimization/combiningobjectives",permalink:"/z3guide/docs/optimization/combiningobjectives",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/04 - optimization/05 - combiningobjectives.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Combining Objectives",sidebar_position:5},sidebar:"smtlibSidebar",previous:{title:"Soft Constraints",permalink:"/z3guide/docs/optimization/softconstraints"},next:{title:"A Small Case Study",permalink:"/z3guide/docs/optimization/asmallcasestudy"}},d={},u=[{value:"Lexicographic Combination",id:"lexicographic-combination",level:2},{value:"Pareto Fronts",id:"pareto-fronts",level:2},{value:"Independent Objectives",id:"independent-objectives",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many optimization problems require solving multiple objectives."),(0,o.kt)("h2",{id:"lexicographic-combination"},"Lexicographic Combination"),(0,o.kt)("p",null,"Z3 uses by default a lexicographic priority of objectives. It solves first for the objective that is declared first."),(0,o.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(assert (< x z))\n(assert (< y z))\n(assert (< z 5))\n(assert (not (= x y)))\n(maximize x)\n(maximize y)\n(check-sat)\n(get-model)\n(get-objectives)",result:{output:"sat\n(\n  (define-fun z () Int\n    4)\n  (define-fun x () Int\n    3)\n  (define-fun y () Int\n    2)\n)\n(objectives\n (x 3)\n (y 2)\n)\n",error:"",status:"z3-ran",hash:"a416049e7fe4eaf0e91c1d5337c1fbfe76211682"}},mdxType:"CustomCodeBlock"}),(0,o.kt)("p",null,"It is also possible to declare multiple classes of soft assertions. To do this, use an optional tag to differentiate classes of soft assertions.\nThe first tag group ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is given precedence over the second group ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," that is introduced later."),(0,o.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Bool)\n(declare-const b Bool)\n(declare-const c Bool)\n(assert-soft a :weight 1 :id A)\n(assert-soft b :weight 2 :id B)\n(assert-soft c :weight 3 :id A)\n(assert (= a c))\n(assert (not (and a b)))\n(check-sat)\n(get-model)\n(get-objectives)",result:{output:"sat\n(\n  (define-fun c () Bool\n    true)\n  (define-fun b () Bool\n    false)\n  (define-fun a () Bool\n    true)\n)\n(objectives\n (A 0)\n (B 2)\n)\n",error:"",status:"z3-ran",hash:"1fde7be4f3077592a448c34fbd7199099aceac97"}},mdxType:"CustomCodeBlock"}),(0,o.kt)("h2",{id:"pareto-fronts"},"Pareto Fronts"),(0,o.kt)("p",null,"To override lexicographic priorities, set the option opt.priority to Pareto."),(0,o.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (>= 5 x))\n(assert (>= x 0))\n(assert (>= 4 y))\n(assert (>= y 0))\n(minimize x)\n(maximize (+ x y))\n(minimize y)\n(set-option :opt.priority pareto)\n(check-sat)\n(get-objectives)\n(check-sat)\n(get-objectives)\n(check-sat)\n(get-objectives)\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n (x 0)\n ((+ x y) 0)\n (y 0)\n)\nsat\n(objectives\n (x 0)\n ((+ x y) 1)\n (y 1)\n)\nsat\n(objectives\n (x 0)\n ((+ x y) 2)\n (y 2)\n)\nsat\n(objectives\n (x 0)\n ((+ x y) 3)\n (y 3)\n)\n",error:"",status:"z3-ran",hash:"41e52bc2ec24a4b5ada0c0d39e08a0ce2dd92139"}},mdxType:"CustomCodeBlock"}),(0,o.kt)("h2",{id:"independent-objectives"},"Independent Objectives"),(0,o.kt)("p",null,"If we just want to find the optimal value for each objective, set the option opt.priority to box."),(0,o.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Real)\n(declare-const y Real)\n(assert (>= 5 (- x y)))\n(assert (>= x 0))\n(assert (>= 4 y))\n(assert (> y 0))\n(minimize x)\n(maximize (+ x y))\n(minimize y)\n(maximize y)\n(set-option :opt.priority box)\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n (x 0)\n ((+ x y) 4)\n (y 1)\n (y 1)\n)\n",error:"",status:"z3-ran",hash:"f6c3ec70c078a2b43c9fd8e9b14ea377edcff232"}},mdxType:"CustomCodeBlock"}))}p.isMDXComponent=!0}}]);