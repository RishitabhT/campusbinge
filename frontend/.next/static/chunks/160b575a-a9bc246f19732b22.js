"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{277:(t,e,i)=>{i.d(e,{dH:()=>h});var a=i(5155);i(2115);var r=i(4992);let s="#4fa94d",n={"aria-busy":!0,role:"progressbar"};(0,r.Ay).div`
  display: ${t=>t.$visible?"flex":"none"};
`;let o=(0,r.i7)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,r.Ay).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${o} ${1.6}s linear infinite;
`;let d=(0,r.i7)`
to {
   transform: rotate(360deg);
 }
`;(0,r.Ay).svg`
  animation: ${d} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,r.Ay).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let l=(0,r.i7)`
to {
   stroke-dashoffset: 136;
 }
`;(0,r.Ay).polygon`
  stroke-dasharray: 17;
  animation: ${l} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,r.Ay).svg`
  transform-origin: 50% 65%;
`;let h=({color:t=s,width:e="100",visible:i=!0})=>i?(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100","data-testid":"falling-lines",...n,children:[(0,a.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:t,"data-testid":"falling-lines-rect-1",children:[(0,a.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",repeatCount:"indefinite"}),(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:t,children:[(0,a.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:t,"data-testid":"falling-lines-rect-2",children:[(0,a.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"})]})]}):null}}]);