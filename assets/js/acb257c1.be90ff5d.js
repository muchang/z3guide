"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7186],{4227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(3117),a=(n(7294),n(3905)),i=n(504),s=n.n(i);const l={title:"Regular Expressions",sidebar_position:12},o=void 0,p={unversionedId:"theories/Regular Expressions",id:"theories/Regular Expressions",title:"Regular Expressions",description:"SMTLIB2 standard The theory of unicode strings and regular expressions",source:"@site/docs-smtlib/02 - theories/12 - Regular Expressions.md",sourceDirName:"02 - theories",slug:"/theories/Regular Expressions",permalink:"/z3guide/docs/theories/Regular Expressions",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/12 - Regular Expressions.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Regular Expressions",sidebar_position:12}},d={},m=[],u={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"SMTLIB2 standard")," ",(0,a.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml"},"The theory of unicode strings and regular expressions"))),(0,a.kt)("p",null,"The sort constructor ",(0,a.kt)("inlineCode",{parentName:"p"},"RegEx")," takes as argument a sequence type.\nThe set of regular expressions over strings is thus ",(0,a.kt)("inlineCode",{parentName:"p"},"(RegEx String)"),";\nit is synonymous with the sort ",(0,a.kt)("inlineCode",{parentName:"p"},"RegLan")," defined in the ",(0,a.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml"},"SMTLIB2 format"),"."),(0,a.kt)("h1",{id:"summary-of-operations"},"Summary of Operations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Brief Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(str.to.re s)")),(0,a.kt)("td",{parentName:"tr",align:null},"Convert string to regular expression accepting ",(0,a.kt)("inlineCode",{parentName:"td"},"s"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(str.in.re s r)")),(0,a.kt)("td",{parentName:"tr",align:null},"Determine if ",(0,a.kt)("inlineCode",{parentName:"td"},"s")," is in the language generated by ",(0,a.kt)("inlineCode",{parentName:"td"},"r"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"re.allchar")),(0,a.kt)("td",{parentName:"tr",align:null},"The regular expression accepting every string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"re.nostr")),(0,a.kt)("td",{parentName:"tr",align:null},"The regular expression rejecting every string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.range ch1 ch2)")),(0,a.kt)("td",{parentName:"tr",align:null},"The range of characters (represented as strings) between ",(0,a.kt)("inlineCode",{parentName:"td"},"ch1")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"ch2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.++ r1 r2 r3)")),(0,a.kt)("td",{parentName:"tr",align:null},"Concatenation of regular expressions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.* r)")),(0,a.kt)("td",{parentName:"tr",align:null},"Kleene star")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.+ r)")),(0,a.kt)("td",{parentName:"tr",align:null},"Kleene plus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.opt r)")),(0,a.kt)("td",{parentName:"tr",align:null},"Zero or one use of ",(0,a.kt)("inlineCode",{parentName:"td"},"r"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"((_ re.loop lo hi) r)")),(0,a.kt)("td",{parentName:"tr",align:null},"from ",(0,a.kt)("inlineCode",{parentName:"td"},"lo")," to ",(0,a.kt)("inlineCode",{parentName:"td"},"hi")," number of repetitions of ",(0,a.kt)("inlineCode",{parentName:"td"},"r"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.union r1 r2)")),(0,a.kt)("td",{parentName:"tr",align:null},"The union of regular languages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.inter r1 r2)")),(0,a.kt)("td",{parentName:"tr",align:null},"The intersection of regular languages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(seq.to.re s)")),(0,a.kt)("td",{parentName:"tr",align:null},"Convert sequence to regular expression accepting ",(0,a.kt)("inlineCode",{parentName:"td"},"s"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(seq.in.re s r)")),(0,a.kt)("td",{parentName:"tr",align:null},"Determine if sequence ",(0,a.kt)("inlineCode",{parentName:"td"},"s")," is in the language generated by ",(0,a.kt)("inlineCode",{parentName:"td"},"r"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(as re.all R)")),(0,a.kt)("td",{parentName:"tr",align:null},"The regular expression of sort ",(0,a.kt)("inlineCode",{parentName:"td"},"R")," accepting every sequence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(as re.empty R)")),(0,a.kt)("td",{parentName:"tr",align:null},"The regular expression of sort ",(0,a.kt)("inlineCode",{parentName:"td"},"R")," rejecting every sequence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.replace_re s r dst)")),(0,a.kt)("td",{parentName:"tr",align:null},"Currently not supported: replace left-most smallest occurrence matching ",(0,a.kt)("inlineCode",{parentName:"td"},"r")," in ",(0,a.kt)("inlineCode",{parentName:"td"},"s")," by ",(0,a.kt)("inlineCode",{parentName:"td"},"dst"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(re.replace_re_all s r dst)")),(0,a.kt)("td",{parentName:"tr",align:null},"Currently not supported: replace, traversing left-to-right, smallest matches, all occurrences matching ",(0,a.kt)("inlineCode",{parentName:"td"},"r")," in ",(0,a.kt)("inlineCode",{parentName:"td"},"s")," by ",(0,a.kt)("inlineCode",{parentName:"td"},"dst"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"re.range")," operator expects two strings each encoding a single character.\nFor example ",(0,a.kt)("inlineCode",{parentName:"p"},'(re.range "a" "\\u{ff}")')," is a valid range of characters,\nwhile ",(0,a.kt)("inlineCode",{parentName:"p"},'(re.range "aa" "")')," is the empty language. "),(0,a.kt)(s(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(simplify (re.range "a" "\\u{ff}"))\n(simplify (re.range "aa" ""))',result:{output:'(re.range "a" "\\u{ff}")\nre.none\n',error:"",status:"z3-ran",hash:"4388a5fcb1c70b249eb9b5606d7dd289274f6f14"}},mdxType:"CustomCodeBlock"}),(0,a.kt)("p",null,"For  compatibility with the SMTLIB2 format\nZ3 also accepts expressions of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"(re.loop r lo hi)"),".\nZ3 understands only the meaning of these terms when ",(0,a.kt)("inlineCode",{parentName:"p"},"lo, hi")," are\ninteger numerals."),(0,a.kt)("h1",{id:"what-not-to-expect-of-regular-expressions"},"What (not) to expect of regular expressions"),(0,a.kt)("p",null,"The default solver for regular expressions unfolds membership relations of regular expressions lazily.\nIt uses ",(0,a.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/abs/10.1145/3453483.3454066"},"symbolic derivatives")," .\nThis approach works for many membership and non-membership constraints, but is not a complete\nprocedure when membership constraints are combined with constraints over strings.\nNote that the syntax allows forming ",(0,a.kt)("em",{parentName:"p"},"symbolic")," regular expressions that contain uninterpreted non-terminals.\nIt also does not handle regular expressions symbolic sequences (it allows\nto express non-regular languages).\nThus, the string ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"(str.to.re s)")," should be\na string literal. You can write formulas with equalities over\nregular expressions. Z3 is a decision procedure for equalities and disequalities between non-symbolic regular expressions."),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The maximal length is 6 for a string of length 2 repeated at most 3 times."),(0,a.kt)(s(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a String)\n(push)\n(set-info :status sat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (= (str.len a) 6))\n(check-sat)\n(get-model)\n(pop)\n\n(push)\n(set-info :status unsat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (> (str.len a) 6))\n(check-sat)\n(pop)',result:{output:'sat\n(\n  (define-fun a () String\n    "ababab")\n)\nunsat\n',error:"",status:"z3-ran",hash:"4d8e37482fa4b37ef18b7eba83750d2a9d10832c"}},mdxType:"CustomCodeBlock"}))}g.isMDXComponent=!0}}]);