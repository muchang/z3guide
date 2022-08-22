"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4626],{7454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>h});var i=r(3117),s=(r(7294),r(3905)),o=r(7634),a=r.n(o);const n={title:"Unicode Characters",sidebar_position:9},c=void 0,d={unversionedId:"theories/Characters",id:"theories/Characters",title:"Unicode Characters",description:"The Unicode sort ranges over unicode characters.",source:"@site/docs-smtlib/02 - theories/09 - Characters.md",sourceDirName:"02 - theories",slug:"/theories/Characters",permalink:"/z3guide/docs/theories/Characters",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/09 - Characters.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Unicode Characters",sidebar_position:9},sidebar:"smtlibSidebar",previous:{title:"Regular Expressions",permalink:"/z3guide/docs/theories/Regular Expressions"},next:{title:"Special Relations",permalink:"/z3guide/docs/theories/Special Relations"}},l={},h=[],u={toc:h};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"Unicode")," sort ranges over unicode characters."),(0,s.kt)("p",null,"A few operations are supported over characters."),(0,s.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Unicode)\n(declare-const b Unicode)\n(simplify (char.<= a b))\n(simplify (char.<= (_ Char 1) (_ Char 2)))\n(simplify (char.to_int (_ Char 1)))\n(simplify (char.is_digit (_ Char 1)))\n(simplify (char.is_digit (_ Char 49))) ; it is the digit 1",result:{output:"(char.<= a b)\ntrue\n1\nfalse\ntrue\n",error:"",status:"z3-ran",hash:"b7c04c6068a7b84b131cf3db0f6ede7af2143970"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,s.kt)("p",null,"While Unicode is the default you can set the encoding of characters to ASCII (8 bit) or Bmp (16 bit)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(set-option :encoding unicode)\n(set-option :encoding ascii)\n(set-option :encoding bmp)\n")))}p.isMDXComponent=!0}}]);