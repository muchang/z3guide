"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4768],{3782:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(3117),s=(t(7294),t(3905)),r=t(504),i=t.n(r);const o={title:"Lambdas",sidebar_position:16},m=void 0,l={unversionedId:"logic/Lambdas",id:"logic/Lambdas",title:"Lambdas",description:"Lambda binding is available as an extension to the theory of arrays.",source:"@site/docs-smtlib/01 - logic/16 - Lambdas.md",sourceDirName:"01 - logic",slug:"/logic/Lambdas",permalink:"/z3guide/docs/logic/Lambdas",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/01 - logic/16 - Lambdas.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Lambdas",sidebar_position:16},sidebar:"smtlibSidebar",previous:{title:"Quantifiers",permalink:"/z3guide/docs/logic/Quantifiers"},next:{title:"Recursive Functions",permalink:"/z3guide/docs/logic/Recursive Functions"}},d={},p=[{value:"Syntax and Semantics",id:"syntax-and-semantics",level:2},{value:"Inlining definitions using Lambda",id:"inlining-definitions-using-lambda",level:2},{value:"Lambdas as Arrays",id:"lambdas-as-arrays",level:2},{value:"From First-Order to limited Higher-Order",id:"from-first-order-to-limited-higher-order",level:2}],c={toc:p};function u(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Lambda binding is available as an extension to the theory of arrays."),(0,s.kt)("h2",{id:"syntax-and-semantics"},"Syntax and Semantics"),(0,s.kt)("p",null,"Lambda expressions use syntax similar to quantifiers. It is of the form:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(lambda ((x X) (y Y) (z Z)) t)\n")),(0,s.kt)("p",null,"where ",(0,s.kt)("inlineCode",{parentName:"p"},"x y z")," are lambda bound variables and ",(0,s.kt)("inlineCode",{parentName:"p"},"t")," is an expression that can contain the bound variables. "),(0,s.kt)("p",null,"The laws of lambda calculus apply.\nThe simplifier performs ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\beta")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2")))))," reduction."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(simplify (select (lambda ((x Int) (y Int) (z Int)) (+ x (* z y))) a b c))",result:{output:"(+ a (* b c))\n",error:"",status:"z3-ran",hash:"0a518188b59bb0fedf6ad393390ccf43bf3c520a"}},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Other rules ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," (renaming) and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b7")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\eta")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03b7")))))," (extensionality) are enforced by the solver."),(0,s.kt)("h2",{id:"inlining-definitions-using-lambda"},"Inlining definitions using Lambda"),(0,s.kt)("p",null,"The main utility of lambdas in Z3 is for introducing inline definitions as the following ",(0,s.kt)("inlineCode",{parentName:"p"},"memset")," example illustrates."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const m (Array Int Int))\n(declare-const m1 (Array Int Int))\n(declare-const z Int)\n(define-fun memset ((lo Int) (hi Int) (y Int) (m (Array Int Int))) \n                   (Array Int Int) \n           (lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x))))\n(assert (= m1 (memset 1 700 z m)))\n(assert (not (= (select m1 6) z)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"2eef07e89d6a29aeeb9cc1652400add8beab5b71"}},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Note that the type of ",(0,s.kt)("inlineCode",{parentName:"p"},"(lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x)))")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"(Array Int Int)"),". "),(0,s.kt)("h2",{id:"lambdas-as-arrays"},"Lambdas as Arrays"),(0,s.kt)("p",null,"Thus, the type of a lambda expression is an array where the domain of the\narray are the argument types and the range is the sort of the body of the lambda expression."),(0,s.kt)("p",null,"Thus, in z3 arrays are synonymous with function spaces. You can transition between arrays and\nfunctions using ",(0,s.kt)("inlineCode",{parentName:"p"},"as-array")," to convert a function to an array and using function macros to treat an array as a function.\nThe example also illustrates a subtle use of recursive function declarations.\nFunctions declared using ",(0,s.kt)("inlineCode",{parentName:"p"},"define-fun-rec")," are expanded on demand and therefore the function symbols are available as arguments to ",(0,s.kt)("inlineCode",{parentName:"p"},"as-array"),".\nThis contrasts functinos declared using ",(0,s.kt)("inlineCode",{parentName:"p"},"define-fun")," that are treated as macros that are expanded at parse time. Their function symbols cannot be passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"as-array"),"."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-fun f (Int) Int)\n(push)\n(assert (not (=  (select (_ as-array f) 0) (f 0))))\n(check-sat)\n(pop)\n(push)\n(declare-const a (Array Int Int))\n(define-fun-rec f2 ((x Int)) Int (select a x))\n(assert (not (= (select a 0) (select (_ as-array f2) 0))))\n(check-sat)\n(pop)",result:{output:"unsat\nunsat\n",error:"",status:"z3-ran",hash:"dfda106b4734fa42d25291252da0b55fd3f262cc"}},mdxType:"CustomCodeBlock"}),(0,s.kt)("h2",{id:"from-first-order-to-limited-higher-order"},"From First-Order to limited Higher-Order"),(0,s.kt)("p",null,"There is limited true higher order reasoning. One basic example that ",(0,s.kt)("em",{parentName:"p"},"does")," work thanks to model construction of MBQI instantiation procedure\nis establishing a second-order definition for equality."),(0,s.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(assert (forall ((q (Array Int Bool))) (= (q x) (q y))))\n(assert (not (= x y)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"5b9b1381ac4dc546a143c7bdd96a8fe5abcdad65"}},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"During instantiation, z3 determines to instantiate ",(0,s.kt)("inlineCode",{parentName:"p"},"q")," with the term ",(0,s.kt)("inlineCode",{parentName:"p"},"(lambda ((z Int)) (= x z))")," and therefore it infers the fact ",(0,s.kt)("inlineCode",{parentName:"p"},"(= (= x x) (= x y))"),".\nNote that the example illustrates using an array as a function application. We wrote ",(0,s.kt)("inlineCode",{parentName:"p"},"(q x)")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"(select q x)")," for the array ",(0,s.kt)("inlineCode",{parentName:"p"},"q"),".\nIt is a feature that is supported as a convenience: the parser performs a best-effort coercions to insert ",(0,s.kt)("inlineCode",{parentName:"p"},"select")," automatically."))}u.isMDXComponent=!0}}]);