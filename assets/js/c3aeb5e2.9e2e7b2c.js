"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8764],{8922:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(3117),s=(n(7294),n(3905)),i=n(7634),a=n.n(i);const r={title:"Soft Constraints",sidebar_position:4},l=void 0,d={unversionedId:"optimization/softconstraints",id:"optimization/softconstraints",title:"Soft Constraints",description:"The (assert-soft formula [id id]) command asserts a weighted soft constraint. The weight must be a positive natural number, but is optional. If omitted, the weight is set to 1.",source:"@site/docs-smtlib/04 - optimization/04 - softconstraints.md",sourceDirName:"04 - optimization",slug:"/optimization/softconstraints",permalink:"/z3guide/docs/optimization/softconstraints",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/04 - optimization/04 - softconstraints.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Soft Constraints",sidebar_position:4},sidebar:"smtlibSidebar",previous:{title:"Arithmetical Optimization",permalink:"/z3guide/docs/optimization/arithmeticaloptimization"},next:{title:"Combining Objectives",permalink:"/z3guide/docs/optimization/combiningobjectives"}},u={},c=[],f={toc:c};function m(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"(assert-soft formula [:weight numeral] [:id id])")," command asserts a weighted soft constraint. The weight must be a positive natural number, but is optional. If omitted, the weight is set to 1."),(0,s.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(define-fun a1 () Bool (> x 0))\n(define-fun a2 () Bool (< x y))\n(define-fun a3 () Bool (<= (+ y x) 0))\n(assert (= a3 a1))\n(assert (or a3 a2))\n(assert-soft a3         :weight 3)\n(assert-soft (not a3)   :weight 5) \n(assert-soft (not a1)   :weight 10)\n(assert-soft (not a2)   :weight 3)\n(check-sat)\n(get-model)\n(get-objectives)\n(eval a1)\n(eval a2)\n(eval a3)",result:{output:"sat\n(\n  (define-fun y () Int\n    1)\n  (define-fun x () Int\n    0)\n  (define-fun a3 () Bool\n    (<= (+ y x) 0))\n  (define-fun a2 () Bool\n    (< x y))\n  (define-fun a1 () Bool\n    (> x 0))\n)\n(objectives\n ( 6)\n)\nfalse\ntrue\nfalse\n",error:"",status:"z3-ran",hash:"b5f958df77a428238b80a9655a571ab9e902a1c2"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"Floating point and integer weights can be mixed; internally weights are converted into rational numbers."),(0,s.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a1 Bool)\n(declare-const a2 Bool)\n(declare-const a3 Bool)\n(assert-soft a1 :weight 0.1)\n(assert-soft a2 :weight 1.0)\n(assert-soft a3 :weight  1)\n(assert-soft (or (not a1) (not a2)) :weight 3.2)\n(check-sat)\n(get-objectives)\n(get-model)",result:{output:"sat\n(objectives\n ( (/ 1.0 10.0))\n)\n(\n  (define-fun a3 () Bool\n    true)\n  (define-fun a1 () Bool\n    false)\n  (define-fun a2 () Bool\n    true)\n)\n",error:"",status:"z3-ran",hash:"9a2dce051698e1271f22d2ac3375441a2161706f"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"You can use identifiers to group soft constraints. You can also repeat the same soft constraint. Every repetition counts independently. In the example we add the soft constrsaint ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," twice and force it to be false. The penalty for group ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is therefore 2. The penalty for group ",(0,s.kt)("inlineCode",{parentName:"p"},"y")," is because there is only one soft constraint that is impossible to satisfy."),(0,s.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Bool)\n(declare-const b Bool)\n(assert-soft false :id y)\n(assert-soft a :id x)\n(assert-soft a :id x)\n(assert-soft b :id x)\n(assert (not a))\n\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n (y 1)\n (x 2)\n)\n",error:"",status:"z3-ran",hash:"acd9443803a4ab8c89fc480b957110ea07326cde"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}m.isMDXComponent=!0}}]);