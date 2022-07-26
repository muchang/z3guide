"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4011],{5747:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var n=i(3117),a=(i(7294),i(3905)),o=i(504),r=i.n(o);const s={title:"Arithmetical Optimization",sidebar_position:3},d=void 0,m={unversionedId:"optimization/arithmeticaloptimization",id:"optimization/arithmeticaloptimization",title:"Arithmetical Optimization",description:"Z3 extends the The SMTLIB format with the following commands for working with optimization objectives:",source:"@site/docs-smtlib/04 - optimization/03 - arithmeticaloptimization.md",sourceDirName:"04 - optimization",slug:"/optimization/arithmeticaloptimization",permalink:"/z3guide/docs/optimization/arithmeticaloptimization",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/04 - optimization/03 - arithmeticaloptimization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Arithmetical Optimization",sidebar_position:3},sidebar:"smtlibSidebar",previous:{title:"Optimization from the API",permalink:"/z3guide/docs/optimization/apioptimization"},next:{title:"Soft Constraints",permalink:"/z3guide/docs/optimization/softconstraints"}},l={},c=[{value:"Maximize and Minimize",id:"maximize-and-minimize",level:2},{value:"Unbounded Objectives",id:"unbounded-objectives",level:2},{value:"Tight Bounds",id:"tight-bounds",level:2}],u={toc:c};function p(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Z3 extends the The ",(0,a.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/"},"SMTLIB format")," with the following commands for working with optimization objectives:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(maximize t)")),(0,a.kt)("td",{parentName:"tr",align:null},"The result of ",(0,a.kt)("inlineCode",{parentName:"td"},"(check-sat)")," should seek to produce a model that ",(0,a.kt)("em",{parentName:"td"},"maximizes")," the value of ",(0,a.kt)("inlineCode",{parentName:"td"},"t"),". The expression can be integer, real or Bit-vector sort.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(minimize t)")),(0,a.kt)("td",{parentName:"tr",align:null},"The result of ",(0,a.kt)("inlineCode",{parentName:"td"},"(check-sat)")," should seek to produce a model that ",(0,a.kt)("em",{parentName:"td"},"minimizes")," the value of ",(0,a.kt)("inlineCode",{parentName:"td"},"t")," The expression can be integer, real or Bit-vector sort.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(add-soft b [:weight w] [:id id])")),(0,a.kt)("td",{parentName:"tr",align:null},"The result of ",(0,a.kt)("inlineCode",{parentName:"td"},"(check-sat)")," should seek to satisfy soft constraints. The default weigth is 1. Weights are used to give priorities. Soft constraints can be grouped in disjoint groups by tagging them with optional identifiers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(get-objectives)")),(0,a.kt)("td",{parentName:"tr",align:null},"After ",(0,a.kt)("inlineCode",{parentName:"td"},"(check-sat)")," retrieve the values of the maximize, minimize and soft constraint objectives.")))),(0,a.kt)("h2",{id:"maximize-and-minimize"},"Maximize and Minimize"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"(maximize t)")," command instructs check-sat to produce a model that maximizes the value of term t. The type of ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," must be either ",(0,a.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Real"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"BitVec"),"."),(0,a.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (< (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 2)\n)\n",error:"",status:"z3-ran",hash:"078a8b61f8d41ad3279fa74af21f89379929e11c"}},mdxType:"CustomCodeBlock"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"(minimize t)")," command instructs check-sat to produce a model that minimizes the value of term ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,a.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (> y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 4)\n)\n",error:"",status:"z3-ran",hash:"19920f55048c8d64c5bedffe3ddb5fa9b86b318a"}},mdxType:"CustomCodeBlock"}),(0,a.kt)("h2",{id:"unbounded-objectives"},"Unbounded Objectives"),(0,a.kt)("p",null,"Not all objective functions are bounded. Z3 indicates that the maxima are at infinity, and the minima are negative infinity."),(0,a.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (> (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n",result:{output:"sat\n",error:"",status:"z3-ran",hash:"7ae20d863ffb8bbf45155b64c19c710de9d58611"}},mdxType:"CustomCodeBlock"}),(0,a.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (< y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (* (- 1) oo))\n)\n",error:"",status:"z3-ran",hash:"5a3c86f37b678caacc49abed34863ddfbde4aee4"}},mdxType:"CustomCodeBlock"}),(0,a.kt)("h2",{id:"tight-bounds"},"Tight Bounds"),(0,a.kt)("p",null,"Not all finite bounds can be expressed as real numbers. Bounds obtained around strict inequalities are expressed using infinitesimals."),(0,a.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Real)\n(declare-const y Real)\n(assert (< x 4))\n(assert (< y 5))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (+ 9.0 (* (- 2.0) epsilon)))\n)\n",error:"",status:"z3-ran",hash:"0b0ba2cc37aed7385fac4d6fe31e73d31fd7f4a5"}},mdxType:"CustomCodeBlock"}))}p.isMDXComponent=!0}}]);