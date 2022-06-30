"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{6596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(3117),n=(a(7294),a(3905)),r=a(7689);const i={title:"Datatypes",sidebar_position:8},o=void 0,l={unversionedId:"Datatypes",id:"Datatypes",title:"Datatypes",description:"Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.",source:"@site/docs/08 - Datatypes.md",sourceDirName:".",slug:"/Datatypes",permalink:"/rise4fun/docs/Datatypes",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/08 - Datatypes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Datatypes",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/rise4fun/docs/arrays"},next:{title:"test",permalink:"/rise4fun/docs/test"}},c={},d=[{value:"Records",id:"records",level:3},{value:"Scalars (enumeration types)",id:"scalars-enumeration-types",level:3},{value:"Recursive datatypes",id:"recursive-datatypes",level:3},{value:"Mutually recursive datatypes",id:"mutually-recursive-datatypes",level:3},{value:"Z3 will not prove inductive facts",id:"z3-will-not-prove-inductive-facts",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures."),(0,n.kt)("h3",{id:"records"},"Records"),(0,n.kt)("p",null,"A record is specified as a datatype with a single constructor and as many arguments as record elements. The number of arguments to a record are always the same. The type system does not allow to extend records and there is no record subtyping."),(0,n.kt)("p",null,"The following example illustrates that two records are equal only if all the arguments are equal. It introduces the parametric type Pair, with constructor mk-pair and two arguments that can be accessed using the selector functions first and second."),(0,n.kt)(r.Z,{input:{code:"(declare-datatypes (T1 T2) ((Pair (mk-pair (first T1) (second T2)))))\n(declare-const p1 (Pair Int Int))\n(declare-const p2 (Pair Int Int))\n(assert (= p1 p2))\n(assert ( (second p1) 20))\n(check-sat)\n(get-model)\n(assert (not (= (first p1) (first p2))))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,n.kt)("h3",{id:"scalars-enumeration-types"},"Scalars (enumeration types)"),(0,n.kt)("p",null,"A scalar sort is a finite domain sort. The elements of the finite domain are enumerated as distinct constants. For example, the sort S is a scalar type with three values A, B and C. It is possible for three constants of sort S to be distinct, but not for four constants."),(0,n.kt)(r.Z,{input:{code:"(declare-datatypes () ((S A B C)))\n(declare-const x S)\n(declare-const y S)\n(declare-const z S)\n(declare-const u S)\n(assert (distinct x y z))\n(check-sat)\n(assert (distinct x y z u))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,n.kt)("h3",{id:"recursive-datatypes"},"Recursive datatypes"),(0,n.kt)("p",null,"A recursive datatype declaration includes itself directly (or indirectly) as a component. A standard example of a recursive data-type is the one of lists. A parametric list can be specified in Z3 as"),(0,n.kt)(r.Z,{input:{code:"(declare-datatypes (T) ((Lst nil (cons (hd T) (tl Lst)))))\n(declare-const l1 (Lst Int))\n(declare-const l2 (Lst Bool))"},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"The List recursive datatype is builtin in Z3. The empty list is nil, and the constructor insert is used to build new lists. The accessors head and tail are defined as usual."),(0,n.kt)(r.Z,{input:{code:"(declare-const l1 (List Int))\n(declare-const l2 (List Int))\n(declare-const l3 (List Int))\n(declare-const x Int)\n(assert (not (= l1 nil)))\n(assert (not (= l2 nil)))\n(assert (= (head l1) (head l2)))\n(assert (not (= l1 l2)))\n(assert (= l3 (insert x l2)))\n(assert ( x 100))\n(check-sat)\n(get-model)\n(assert (= (tail l1) (tail l2)))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"In the example above, we also assert that l1 and l2 are not nil. This is because the interpretation of head and tail is underspecified on nil. So then head and tail would not be able to distinguish nil from (insert (head nil) (tail nil))."),(0,n.kt)("h3",{id:"mutually-recursive-datatypes"},"Mutually recursive datatypes"),(0,n.kt)("p",null,"You can also specify mutually recursive datatypes for Z3. We list one example below."),(0,n.kt)(r.Z,{input:{code:"; declare a mutually recursive parametric datatype\n(declare-datatypes (T) ((Tree leaf (node (value T) (children TreeList)))\n                        (TreeList nil (cons (car Tree) (cdr TreeList)))))\n(declare-const t1 (Tree Int))\n(declare-const t2 (Tree Bool))\n; we must use the 'as' construct to distinguish the leaf (Tree Int) from leaf (Tree Bool)\n(assert (not (= t1 (as leaf (Tree Int)))))\n(assert ( (value t1) 20))\n(assert (not (is-leaf t2)))\n(assert (not (value t2)))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"In the example above, we have a tree of Booleans and a tree of integers. The leaf constant must return a tree of a specific sort. To specify the result sort, we use the qualified identifier (as leaf (Tree Int)). Note that, we do not need to use a qualified identifer for value, since Z3 can infer the intended declaration using the sort of the argument."),(0,n.kt)("h3",{id:"z3-will-not-prove-inductive-facts"},"Z3 will not prove inductive facts"),(0,n.kt)("p",null,"The ground decision procedures for recursive datatypes don't lift to establishing inductive facts. Z3 does not contain methods for producing proofs by induction. This may change in the future. In particular, consider the following example where the function p is true on all natural numbers, which can be proved by induction over Nat. Z3 enters a matching loop as it attempts instantiating the universally quantified implication."),(0,n.kt)(r.Z,{input:{code:"(set-option timeout 2000)\n(declare-datatypes () ((Nat zero (succ (pred Nat)))))\n(declare-fun p (Nat) Bool)\n(assert (p zero))\n(assert (forall ((x Nat)) (implies (p (pred x)) (p x))))\n(assert (not (forall ((x Nat)) (p x))))\n(check-sat)\n(get-info all-statistics)"},mdxType:"Z3CodeBlock"}))}p.isMDXComponent=!0}}]);