"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9612],{4218:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(3117),s=(t(7294),t(3905)),r=t(504),m=t.n(r);const i={title:"Arithmetic",sidebar_position:1},l=void 0,p={unversionedId:"theories/Arithmetic",id:"theories/Arithmetic",title:"Arithmetic",description:"Z3 supports the theory of arithmetic described in the following places.",source:"@site/docs-smtlib/02 - theories/01 - Arithmetic.md",sourceDirName:"02 - theories",slug:"/theories/Arithmetic",permalink:"/z3guide/docs/theories/Arithmetic",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/01 - Arithmetic.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Arithmetic",sidebar_position:1},sidebar:"smtlibSidebar",previous:{title:"Conclusion",permalink:"/z3guide/docs/logic/Conclusion"},next:{title:"Bitvectors",permalink:"/z3guide/docs/theories/Bitvectors"}},o={},c=[{value:"Basics",id:"basics",level:2},{value:"Non-linear arithmetic",id:"non-linear-arithmetic",level:2},{value:"Division",id:"division",level:2},{value:"Algorithmic Fragments of Arithmetic",id:"algorithmic-fragments-of-arithmetic",level:2}],d={toc:c};function N(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Z3 supports the theory of arithmetic described in the following places."),(0,s.kt)("blockquote",{parentName:"admonition"},(0,s.kt)("p",{parentName:"blockquote"}," ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Ints.shtml"},(0,s.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Integers"))),(0,s.kt)("blockquote",{parentName:"admonition"},(0,s.kt)("p",{parentName:"blockquote"}," ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Reals.shtml"},(0,s.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Reals"))),(0,s.kt)("blockquote",{parentName:"admonition"},(0,s.kt)("p",{parentName:"blockquote"}," ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Reals_Ints.shtml"},(0,s.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Mixed Int Reals")))),(0,s.kt)("h2",{id:"basics"},"Basics"),(0,s.kt)("p",null,"Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)",result:{output:"",error:"",status:"z3-ran",hash:"b5db1abedc98edc902abff523622a1425f529ac9"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"After constants are declared, the user can assert.smt formulas containing these constants. The formulas contain arithmetic operators such as +, -, *, and so on. The command check-sat will instruct Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command get-model displays the model built by Z3."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< a (+ b 2)))\n(assert (= a (+ (* 2 c) 10)))\n(assert (= (+ c b) 1000))\n(assert (= d e))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun b () Int\n    670)\n  (define-fun e () Real\n    0.0)\n  (define-fun d () Real\n    0.0)\n  (define-fun a () Int\n    670)\n  (define-fun c () Int\n    330)\n)\n",error:"",status:"z3-ran",hash:"b3fd93f97e0bf1f161a479b1fc540798ce95c117"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< e (+ (to_real (+ a b)) 2.0)))\n(assert (= d (+ (to_real c) 0.5)))\n(assert (< a b))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun e () Real\n    2.0)\n  (define-fun b () Int\n    1)\n  (define-fun a () Int\n    0)\n  (define-fun c () Int\n    0)\n  (define-fun d () Real\n    (/ 1.0 2.0))\n)\n",error:"",status:"z3-ran",hash:"52dedd04c90e9e9eaa78d7a2ce8476f425f46390"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Some operators are chainable. This includes comparison operators such as ",(0,s.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<="),". "),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(assert (< a b c))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun c () Int\n    1)\n  (define-fun a () Int\n    (- 1))\n  (define-fun b () Int\n    0)\n)\n",error:"",status:"z3-ran",hash:"16d77794881e991a6d11741d6a09a63ede866cfe"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"We can use mixed constraints to ask questions on how reals behave under rounding.\nThe following query considers when the sum of two integers, x, y are above a constant ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),",\nwhile the sum of two reals are below ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),". At the same time the integers x, y are within unit distance\nto the integers. "),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const xR Real)\n(declare-const yR Real)\n(declare-const x Int)\n(declare-const y Int)\n(declare-const a Int)\n\n(assert (< (+ xR yR) a))\n(assert (> (+ x y) a))\n(assert (or (= x xR) (< x xR (+ x 1)) (< (- x 1) xR x)))\n(assert (or (= y yR) (< y yR (+ y 1)) (< (- y 1) yR y)))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun a () Int\n    0)\n  (define-fun x () Int\n    1)\n  (define-fun xR () Real\n    (/ 2.0 3.0))\n  (define-fun yR () Real\n    (- (/ 5.0 6.0)))\n  (define-fun y () Int\n    0)\n)\n",error:"",status:"z3-ran",hash:"c415595d26a3784c7d04674ea7fc02747bd49793"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"non-linear-arithmetic"},"Non-linear arithmetic"),(0,s.kt)("p",null,"We say a formula is nonlinear if it contains expressions of the form (* t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a Int)\n(assert (< (* a a) 3))\n(check-sat)\n(get-model)\n\n(echo "Z3 does not always find solutions to non-linear problems")\n(declare-const b Real)\n(declare-const c Real)\n(assert (= (+ (* b b b) (sin (* b c))) 7))\n(check-sat)\n\n(echo "yet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...")\n(declare-const x Real)\n(declare-const y Real)\n(declare-const z Real)\n(assert (= (* x x) (+ x 2.0)))\n(assert (= (* x y) x))\n(assert (= (* (- y 1.0) z) 1.0))\n(check-sat)\n\n(reset)\n(echo "When presented only non-linear polynomial constraints over reals, Z3 uses a specialized complete solver")\n(declare-const b Real)\n(declare-const c Real)\n(assert (= (+ (* b b b) (* b c)) 3.0))\n(check-sat)\n(get-model)',result:{output:"sat\n(\n  (define-fun a () Int\n    0)\n)\nZ3 does not always find solutions to non-linear problems\nunknown\nyet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...\nunsat\nWhen presented only non-linear polynomial constraints over reals, Z3 uses a specialized complete solver\nsat\n(\n  (define-fun b () Real\n    (/ 1.0 8.0))\n  (define-fun c () Real\n    (/ 1535.0 64.0))\n)\n",error:"",status:"z3-ran",hash:"23ed5af555287b881b959ae96bb8f2028fd30fd4"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"division"},"Division"),(0,s.kt)("p",null,"Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const r1 Int)\n(declare-const r2 Int)\n(declare-const r3 Int)\n(declare-const r4 Int)\n(declare-const r5 Int)\n(declare-const r6 Int)\n(assert (= a 10))\n(assert (= r1 (div a 4))) ; integer division\n(assert (= r2 (mod a 4))) ; mod\n(assert (= r3 (rem a 4))) ; remainder\n(assert (= r4 (div a (- 4)))) ; integer division\n(assert (= r5 (mod a (- 4)))) ; mod\n(assert (= r6 (rem a (- 4)))) ; remainder\n(declare-const b Real)\n(declare-const c Real)\n(assert (= b (/ c 3.0)))\n(assert (= c 20.0))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun c () Real\n    20.0)\n  (define-fun b () Real\n    (/ 20.0 3.0))\n  (define-fun r6 () Int\n    (- 2))\n  (define-fun r5 () Int\n    2)\n  (define-fun r4 () Int\n    (- 2))\n  (define-fun r3 () Int\n    2)\n  (define-fun r2 () Int\n    2)\n  (define-fun r1 () Int\n    2)\n  (define-fun a () Int\n    10)\n)\n",error:"",status:"z3-ran",hash:"4f12f5c0973e37974e76deacce86bfc0c49022f6"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"In Z3, division by zero is allowed, but the result is not specified. Division is not a partial function. Actually, in Z3 all functions are total, although the result may be under-specified in some cases like division by zero."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Real)\n; The following formula is satisfiable since division by zero is not specified.\n(assert (= (/ a 0.0) 10.0)) \n(check-sat)\n(get-model)\n\n; Although division by zero is not specified, division is still a function.\n; So, (/ a 0.0) cannot evaluated to 10.0 and 2.0.\n(assert (= (/ a 0.0) 2.0)) \n(check-sat)",result:{output:"sat\n(\n  (define-fun a () Real\n    38.0)\n  (define-fun /0 ((x!0 Real) (x!1 Real)) Real\n    10.0)\n)\nunsat\n",error:"",status:"z3-ran",hash:"59ffb6912b902387edc32f17ca55e29c1660902c"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"If you are not happy with this behavior, you may use ite (if-then-else) operator to guard every division, and assign whatever interpretation you like to the division by zero. This example uses define-fun constructor to create a new operator mydiv. This is essentially a macro, and Z3 will expand its definition for every application of mydiv."),(0,s.kt)(m(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"; defining my own division operator where x0.0 == 0.0 for every x.\n(define-fun mydiv ((x Real) (y Real)) Real\n  (if (not (= y 0.0))\n      (/ x y)\n      0.0))\n(declare-const a Real)\n(declare-const b Real)\n(assert (= (mydiv a b) 1.0))\n(assert (= b 0.0))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"ccc9fdebda92cd8ea47ebba41f8049a22323fff4"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"algorithmic-fragments-of-arithmetic"},"Algorithmic Fragments of Arithmetic"),(0,s.kt)("p",null,"Z3 contains a combination of several engines for solving arithmetic formulas.\nThe engines are invoked based on the shape of arithmetic formulas.\nFor linear real arithmetic formulas it uses dual simplex to determine feasibility.\nFor linear integer arithmetic formulas it uses thechniques from integer programming: cuts and branch and bound.\nThere are specialized solvers for different arithmetic fragments and, finally, for non-linear arithmetic\nconstraints z3 contains several small hammers that integrate Grobner basis simplificaitons, bounds propagation,\nnon-linear cylindric algebraic decomposition and reducing non-linear constraints to linear form by sampling at tangent points."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Logic"),(0,s.kt)("th",{parentName:"tr",align:null},"Fragment"),(0,s.kt)("th",{parentName:"tr",align:null},"Solver"),(0,s.kt)("th",{parentName:"tr",align:null},"Example"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LRA"),(0,s.kt)("td",{parentName:"tr",align:null},"Linear Real Arithmetic"),(0,s.kt)("td",{parentName:"tr",align:null},"Dual Simplex"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"1"),(0,s.kt)("mn",{parentName:"mfrac"},"2")),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x + \\frac{1}{2}y \\leq 3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LIA"),(0,s.kt)("td",{parentName:"tr",align:null},"Linear Integer Arithmetic"),(0,s.kt)("td",{parentName:"tr",align:null},"CutSat"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a + 3b \\leq 3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LIRA"),(0,s.kt)("td",{parentName:"tr",align:null},"Mixed Real/Integer"),(0,s.kt)("td",{parentName:"tr",align:null},"Cuts + Branch"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2265"),(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x + a \\geq 4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"IDL"),(0,s.kt)("td",{parentName:"tr",align:null},"Integer Difference Logic"),(0,s.kt)("td",{parentName:"tr",align:null},"Floyd-Warshall"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a - b \\leq 4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"RDL"),(0,s.kt)("td",{parentName:"tr",align:null},"Real Difference Logic"),(0,s.kt)("td",{parentName:"tr",align:null},"Bellman-Ford"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"UTVPI"),(0,s.kt)("td",{parentName:"tr",align:null},"Unit two-variable per inequality"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x + y \\leq 4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"NRA"),(0,s.kt)("td",{parentName:"tr",align:null},"Polynomial Real Arithmetic"),(0,s.kt)("td",{parentName:"tr",align:null},"Model based CAD"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"x"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"y"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x^2 + y^2 < 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Incremental Linearization"),(0,s.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);