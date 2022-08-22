"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1078],{6906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(3117),r=(n(7294),n(3905)),s=n(7634),o=n.n(s);const i={title:"Arrays",sidebar_position:4},l=void 0,c={unversionedId:"theories/Arrays",id:"theories/Arrays",title:"Arrays",description:"SMTLIB2 standard Arrays",source:"@site/docs-smtlib/02 - theories/04 - Arrays.md",sourceDirName:"02 - theories",slug:"/theories/Arrays",permalink:"/z3guide/docs/theories/Arrays",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/04 - Arrays.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Arrays",sidebar_position:4},sidebar:"smtlibSidebar",previous:{title:"IEEE Floats",permalink:"/z3guide/docs/theories/IEEE Floats"},next:{title:"Datatypes",permalink:"/z3guide/docs/theories/Datatypes"}},d={},u=[{value:"Select and Store",id:"select-and-store",level:3},{value:"Constant Arrays",id:"constant-arrays",level:3},{value:"Mapping Functions on Arrays",id:"mapping-functions-on-arrays",level:3},{value:"Bags as Arrays",id:"bags-as-arrays",level:3},{value:"Beyond Arrays",id:"beyond-arrays",level:3},{value:"Array models",id:"array-models",level:3}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"SMTLIB2 standard")," ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-ArraysEx.shtml"},"Arrays"))),(0,r.kt)("p",null,"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a ",(0,r.kt)("em",{parentName:"p"},"basic")," theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v."),(0,r.kt)("p",null,"Z3 contains a decision procedure for the basic theory of arrays. By default, Z3 assumes that arrays are extensional over select. In other words, Z3 also enforces that if two arrays agree on all reads, then the arrays are equal."),(0,r.kt)("p",null,"It also contains various extensions for operations on arrays that remain decidable and amenable to efficient saturation procedures (here efficient means, with an NP-complete satisfiability complexity). We describe these extensions in the following using a collection of examples. Additional background on these extensions is available in the paper ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/publication/generalized-efficient-array-decision-procedures/"},"Generalized and Efficient Array Decision Procedures"),"."),(0,r.kt)("h3",{id:"select-and-store"},"Select and Store"),(0,r.kt)("p",null,"Let us first check a basic property of arrays. Suppose a1 is an array of integers, then the constraint (and (= (select a1 x) x) (= (store a1 x y) a1)) is satisfiable for an array that contains an index x that maps to x, and when x = y (because the first equality forced the range of x to be x). We can check this constraint."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun x () Int\n    3)\n  (define-fun a1 () (Array Int Int)\n    (store ((as const (Array Int Int)) 2) 3 3))\n  (define-fun y () Int\n    3)\n  (define-fun a2 () (Array Int Int)\n    ((as const (Array Int Int)) 0))\n)\n",error:"",status:"z3-ran",hash:"9f706a74740c47c3ef352c6f304038c8a8207912"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"On the other hand, the constraints become unsatisfiable when asserting (not (= x y))."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(assert (not (= x y)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"92e39b56f726d8915b7b5ff9169c4583c1e0c8c1"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"constant-arrays"},"Constant Arrays"),(0,r.kt)("p",null,"The array that maps all indices to some fixed value can be specified in Z3 using the const construct. It takes one value from the range type of the array and creates an array. Z3 cannot infer what kind of array must be returned by the const construct by just inspecting the argument type. Thus, a qualified identifier (as const (Array T1 T2)) must be used. The following example defines a constant array containing only ones."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const all1 (Array Int Int))\n(declare-const a Int)\n(declare-const i Int)\n(assert (= all1 ((as const (Array Int Int)) 1)))\n(assert (= a (select all1 i)))\n(check-sat)\n(get-model)\n(assert (not (= a 1)))\n(check-sat)",result:{output:"sat\n(\n  (define-fun a () Int\n    1)\n  (define-fun all1 () (Array Int Int)\n    ((as const (Array Int Int)) 1))\n  (define-fun i () Int\n    0)\n)\nunsat\n",error:"",status:"z3-ran",hash:"06e5c5542bb396e23f295930b77abe1d87fe6ef2"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"mapping-functions-on-arrays"},"Mapping Functions on Arrays"),(0,r.kt)("p",null,"In the following, we will simulate basic Boolean algebra (set theory) using the array theory extensions in Z3. Z3 provides a parameterized map function on arrays. It allows applying arbitrary functions to the range of arrays. The following example illustrates how to use the map function.\nThe type constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"(Set T)")," is a macro for ",(0,r.kt)("inlineCode",{parentName:"p"},"(Array T Bool)"),"."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a (Set Int))\n(declare-const b (Set Int))\n(declare-const c (Set Int))\n(declare-const x Int)\n(push)\n(assert (not (= ((_ map and) a b) ((_ map not) ((_ map or) ((_ map not) b) ((_ map not) a))))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map and) a b) x) (not (select a x))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map or) a b) x) (not (select a x))))\n(check-sat)\n(get-model)\n(assert (and (not (select b x))))\n(check-sat)",result:{output:"unsat\nunsat\nsat\n(\n  (define-fun x () Int\n    2)\n  (define-fun b () (Set Int)\n    ((as const (Set Int)) true))\n  (define-fun a () (Set Int)\n    ((as const (Set Int)) false))\n  (define-fun c () (Set Int)\n    ((as const (Set Int)) false))\n)\nunsat\n",error:"",status:"z3-ran",hash:"8a0b36b99561233e72c5086b0e18a82c2ad93720"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"bags-as-arrays"},"Bags as Arrays"),(0,r.kt)("p",null,"We can use the parameterized map function to encode finite sets and finite bags. Finite bags can be modeled similarly to sets. A bag is here an array that maps elements to their multiplicity. Main bag operations include union, obtained by adding multiplicity, intersection, by taking the minimum multiplicity, and a dual join operation that takes the maximum multiplicity. In the following example, we define the bag-union using map. Notice that we need to specify the full signature of + since it is an overloaded operator."),(0,r.kt)(o(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(define-sort A () (Array Int Int Int))\n(define-fun bag-union ((x A) (y A)) A\n  ((_ map (+ (Int Int) Int)) x y))\n(declare-const s1 A)\n(declare-const s2 A)\n(declare-const s3 A)\n(assert (= s3 (bag-union s1 s2)))\n(assert (= (select s1 0 0) 5))\n(assert (= (select s2 0 0) 3))\n(assert (= (select s2 1 2) 4))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun s2 () (Array Int Int Int)\n    (store ((as const (Array Int Int Int)) 3) 1 2 4))\n  (define-fun s1 () (Array Int Int Int)\n    ((as const (Array Int Int Int)) 5))\n  (define-fun s3 () (Array Int Int Int)\n    (store ((as const (Array Int Int Int)) 8) 1 2 9))\n)\n",error:"",status:"z3-ran",hash:"21bcd25177554d588014f91ed53705caa1771e56"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h3",{id:"beyond-arrays"},"Beyond Arrays"),(0,r.kt)("p",null,"Z3 arrays are identified with function spaces. This choice means that z3's arrays are not literally corresponding to\na first-order models of ",(0,r.kt)("inlineCode",{parentName:"p"},"select/store")," axioms.\nThere is a construct "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(_ as-array f)\n")),(0,r.kt)("p",null,"that for a function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," creates a corresponding constant with array sort.\nFor example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," has declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(declare-fun f (Int Bool) Real)\n")),(0,r.kt)("p",null,"Then ",(0,r.kt)("inlineCode",{parentName:"p"},"(as-array f)")," has the sort ",(0,r.kt)("inlineCode",{parentName:"p"},"(Array Int Bool Real)"),", an array that takes an Integer, a Boolean and maps to a Real.\nAdmitting the ",(0,r.kt)("inlineCode",{parentName:"p"},"as-array")," function (and later on admitting ",(0,r.kt)("inlineCode",{parentName:"p"},"Lambda"),") means that the universe of interpretations for the Array\nsort includes all definable function spaces. If the theory of arrays only has functions ",(0,r.kt)("inlineCode",{parentName:"p"},"select, store, const")," the universe of interpretations for Array is wider (more formulas are satisfiable)."),(0,r.kt)("h3",{id:"array-models"},"Array models"),(0,r.kt)("p",null,"Models provide interpretations of the uninterpreted (aka free) constants and functions that appear in the satisfiable formula. An interpretation for arrays is very similar to the interpretation of a function. Z3 sometimes uses the construct (",(0,r.kt)("em",{parentName:"p"}," as-array f) to give the interpretation for arrays. If the array a is equal to (")," as-array f), then for every index i, (select a i) is equal to (f i)."))}h.isMDXComponent=!0}}]);