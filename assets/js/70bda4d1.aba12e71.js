"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4508],{4944:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=i(3117),s=(i(7294),i(3905)),o=i(504),r=i.n(o);const l={title:"Recursive Functions",sidebar_position:17},a=void 0,u={unversionedId:"logic/Recursive Functions",id:"logic/Recursive Functions",title:"Recursive Functions",description:"SMTLIB2 standard: Page 62",source:"@site/docs-smtlib/01 - logic/17 - Recursive Functions.md",sourceDirName:"01 - logic",slug:"/logic/Recursive Functions",permalink:"/z3guide/docs/logic/Recursive Functions",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/01 - logic/17 - Recursive Functions.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Recursive Functions",sidebar_position:17},sidebar:"smtlibSidebar",previous:{title:"Lambdas",permalink:"/z3guide/docs/logic/Lambdas"},next:{title:"Conclusion",permalink:"/z3guide/docs/logic/Conclusion"}},c={},d=[],f={toc:d};function m(t){let{components:e,...i}=t;return(0,s.kt)("wrapper",(0,n.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"}," ",(0,s.kt)("strong",{parentName:"p"},"SMTLIB2")," standard: ",(0,s.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/papers/smt-lib-reference-v2.6-r2021-05-12.pdf"},"Page 62"))),(0,s.kt)("p",null,"You can define recursive functions"),(0,s.kt)(r(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(define-fun-rec length ((ls (List Int))) Int\n   (if ((_ is nil) ls) 0 (+ 1 (length (tail ls)))))\n\n(define-fun-rec nat-list ((ls (List Int))) Bool \n   (if ((_ is nil) ls)\n       true\n       (and (>= (head ls) 0) (nat-list (tail ls)))))\n\n(declare-const list1 (List Int))\n(declare-const list2 (List Int))\n(assert (> (length list1) (length list2)))\n(assert (not (nat-list list2)))\n(assert (nat-list list1))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun list2 () (List Int)\n    (insert (- 1) nil))\n  (define-fun list1 () (List Int)\n    (insert 0 (insert 2437 nil)))\n)\n",error:"sat\n(\n  (define-fun list2 () (List Int)\n    (insert (- 1) nil))\n  (define-fun list1 () (List Int)\n    (insert 0 (insert 2437 nil)))\n)\n",status:"z3-runtime-error",hash:"f0bfccb640136f3e2535d94a598fbe4e080711cc"}},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Z3 unfolds the definition of recursive functions incrementally by iterative deepening:\nit attempts first to establish satisfiabiltiy modulo a fixed bound on number of unfoldings;\nif the resulting formula is unsatisfiable ",(0,s.kt)("em",{parentName:"p"},"and")," the reason for unsatisfiability is due to the\nbound restriction, it increases the fixed bound incrementally. Note that this approach does not\ninvolve reasoning by induction that is often required to prove deeper properties of recursive functions.\nThis scheme allows to decide satisfiability and unsatisfiability for a limited, but often useful,\nclass of formulas."))}m.isMDXComponent=!0}}]);