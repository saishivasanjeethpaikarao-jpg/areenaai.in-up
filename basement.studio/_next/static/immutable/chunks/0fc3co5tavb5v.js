;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="3ed321fc-a55c-e558-207e-23a0e273248b")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,561528,e=>{"use strict";var t,r=e.i(136746),o=e.i(178896),i=e.i(119447),s=e.i(865439),n=e.i(282970),a=e.i(665677),l=e.i(870590),c="dismissableLayer.update",d=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=r.forwardRef((e,s)=>{let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:v,onInteractOutside:m,onDismiss:x,...w}=e,y=r.useContext(d),[b,S]=r.useState(null),C=b?.ownerDocument??globalThis?.document,[,z]=r.useState({}),P=(0,i.useComposedRefs)(s,e=>S(e)),E=Array.from(y.layers),[k]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),j=E.indexOf(k),T=b?E.indexOf(b):-1,D=y.layersWithOutsidePointerEventsDisabled.size>0,R=T>=j,A=function(e,t=globalThis?.document){let o=(0,a.useCallbackRef)(e),i=r.useRef(!1),s=r.useRef(()=>{});return r.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let r=function(){u("dismissableLayer.pointerDownOutside",o,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",s.current),s.current=r,t.addEventListener("click",s.current,{once:!0})):r()}else t.removeEventListener("click",s.current);i.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",s.current)}},[t,o]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...y.branches].some(e=>e.contains(t));R&&!r&&(g?.(e),m?.(e),e.defaultPrevented||x?.())},C),L=function(e,t=globalThis?.document){let o=(0,a.useCallbackRef)(e),i=r.useRef(!1);return r.useEffect(()=>{let e=e=>{e.target&&!i.current&&u("dismissableLayer.focusOutside",o,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,o]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;![...y.branches].some(e=>e.contains(t))&&(v?.(e),m?.(e),e.defaultPrevented||x?.())},C);return!function(e,t=globalThis?.document){let o=(0,a.useCallbackRef)(e);r.useEffect(()=>{let e=e=>{"Escape"===e.key&&o(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[o,t])}(e=>{T===y.layers.size-1&&(h?.(e),!e.defaultPrevented&&x&&(e.preventDefault(),x()))},C),r.useEffect(()=>{if(b)return f&&(0===y.layersWithOutsidePointerEventsDisabled.size&&(t=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(b)),y.layers.add(b),p(),()=>{f&&1===y.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=t)}},[b,C,f,y]),r.useEffect(()=>()=>{b&&(y.layers.delete(b),y.layersWithOutsidePointerEventsDisabled.delete(b),p())},[b,y]),r.useEffect(()=>{let e=()=>z({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.jsx)(n.Primitive.div,{...w,ref:P,style:{pointerEvents:D?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.composeEventHandlers)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,o.composeEventHandlers)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,o.composeEventHandlers)(e.onPointerDownCapture,A.onPointerDownCapture)})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function u(e,t,r,{discrete:o}){let i=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),o?(0,n.dispatchDiscreteCustomEvent)(i,s):i.dispatchEvent(s)}f.displayName="DismissableLayer",r.forwardRef((e,t)=>{let o=r.useContext(d),s=r.useRef(null),a=(0,i.useComposedRefs)(t,s);return r.useEffect(()=>{let e=s.current;if(e)return o.branches.add(e),()=>{o.branches.delete(e)}},[o.branches]),(0,l.jsx)(n.Primitive.div,{...e,ref:a})}).displayName="DismissableLayerBranch";var h=e.i(282734),g=e.i(475932),v=e.i(688094),m=r.forwardRef((e,t)=>{let{children:r,width:o=10,height:i=5,...s}=e;return(0,l.jsx)(n.Primitive.svg,{...s,ref:t,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:(0,l.jsx)("polygon",{points:"0,0 30,0 15,10"})})});m.displayName="Arrow";var x=e.i(526191),w=e.i(670604),y="Popper",[b,S]=(0,s.createContextScope)(y),[C,z]=b(y),P=e=>{let{__scopePopper:t,children:o}=e,[i,s]=r.useState(null);return(0,l.jsx)(C,{scope:t,anchor:i,onAnchorChange:s,children:o})};P.displayName=y;var E="PopperAnchor",k=r.forwardRef((e,t)=>{let{__scopePopper:o,virtualRef:s,...a}=e,c=z(E,o),d=r.useRef(null),f=(0,i.useComposedRefs)(t,d);return r.useEffect(()=>{c.onAnchorChange(s?.current||d.current)}),s?null:(0,l.jsx)(n.Primitive.div,{...a,ref:f})});k.displayName=E;var j="PopperContent",[T,D]=b(j),R=r.forwardRef((e,t)=>{let{__scopePopper:o,side:s="bottom",sideOffset:c=0,align:d="center",alignOffset:f=0,arrowPadding:p=0,avoidCollisions:u=!0,collisionBoundary:h=[],collisionPadding:m=0,sticky:y="partial",hideWhenDetached:b=!1,updatePositionStrategy:S="optimized",onPlaced:C,...P}=e,E=z(j,o),[k,D]=r.useState(null),R=(0,i.useComposedRefs)(t,e=>D(e)),[A,L]=r.useState(null),O=(0,w.useSize)(A),N=O?.width??0,$=O?.height??0,_="number"==typeof m?m:{top:0,right:0,bottom:0,left:0,...m},W=Array.isArray(h)?h:[h],M=W.length>0,H={padding:_,boundary:W.filter(F),altBoundary:M},{refs:X,floatingStyles:Y,placement:V,isPositioned:U,middlewareData:G}=(0,g.useFloating)({strategy:"fixed",placement:s+("center"!==d?"-"+d:""),whileElementsMounted:(...e)=>(0,v.autoUpdate)(...e,{animationFrame:"always"===S}),elements:{reference:E.anchor},middleware:[(0,g.offset)({mainAxis:c+$,alignmentAxis:f}),u&&(0,g.shift)({mainAxis:!0,crossAxis:!1,limiter:"partial"===y?(0,g.limitShift)():void 0,...H}),u&&(0,g.flip)({...H}),(0,g.size)({...H,apply:({elements:e,rects:t,availableWidth:r,availableHeight:o})=>{let{width:i,height:s}=t.reference,n=e.floating.style;n.setProperty("--radix-popper-available-width",`${r}px`),n.setProperty("--radix-popper-available-height",`${o}px`),n.setProperty("--radix-popper-anchor-width",`${i}px`),n.setProperty("--radix-popper-anchor-height",`${s}px`)}}),A&&(0,g.arrow)({element:A,padding:p}),I({arrowWidth:N,arrowHeight:$}),b&&(0,g.hide)({strategy:"referenceHidden",...H})]}),[q,J]=B(V),K=(0,a.useCallbackRef)(C);(0,x.useLayoutEffect)(()=>{U&&K?.()},[U,K]);let Q=G.arrow?.x,Z=G.arrow?.y,ee=G.arrow?.centerOffset!==0,[et,er]=r.useState();return(0,x.useLayoutEffect)(()=>{k&&er(window.getComputedStyle(k).zIndex)},[k]),(0,l.jsx)("div",{ref:X.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:U?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:et,"--radix-popper-transform-origin":[G.transformOrigin?.x,G.transformOrigin?.y].join(" "),...G.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,l.jsx)(T,{scope:o,placedSide:q,onArrowChange:L,arrowX:Q,arrowY:Z,shouldHideArrow:ee,children:(0,l.jsx)(n.Primitive.div,{"data-side":q,"data-align":J,...P,ref:R,style:{...P.style,animation:U?void 0:"none"}})})})});R.displayName=j;var A="PopperArrow",L={top:"bottom",right:"left",bottom:"top",left:"right"},O=r.forwardRef(function(e,t){let{__scopePopper:r,...o}=e,i=D(A,r),s=L[i.placedSide];return(0,l.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,l.jsx)(m,{...o,ref:t,style:{...o.style,display:"block"}})})});function F(e){return null!==e}O.displayName=A;var I=e=>({name:"transformOrigin",options:e,fn(t){let{placement:r,rects:o,middlewareData:i}=t,s=i.arrow?.centerOffset!==0,n=s?0:e.arrowWidth,a=s?0:e.arrowHeight,[l,c]=B(r),d={start:"0%",center:"50%",end:"100%"}[c],f=(i.arrow?.x??0)+n/2,p=(i.arrow?.y??0)+a/2,u="",h="";return"bottom"===l?(u=s?d:`${f}px`,h=`${-a}px`):"top"===l?(u=s?d:`${f}px`,h=`${o.floating.height+a}px`):"right"===l?(u=`${-a}px`,h=s?d:`${p}px`):"left"===l&&(u=`${o.floating.width+a}px`,h=s?d:`${p}px`),{data:{x:u,y:h}}}});function B(e){let[t,r="center"]=e.split("-");return[t,r]}var N=e.i(834383);r.forwardRef((e,t)=>{let{container:o,...i}=e,[s,a]=r.useState(!1);(0,x.useLayoutEffect)(()=>a(!0),[]);let c=o||s&&globalThis?.document?.body;return c?N.default.createPortal((0,l.jsx)(n.Primitive.div,{...i,ref:t}),c):null}).displayName="Portal";var $=e.i(182615),_=e.i(852468),W=e.i(150061),M=r.forwardRef((e,t)=>(0,l.jsx)(n.Primitive.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));M.displayName="VisuallyHidden";var[H,X]=(0,s.createContextScope)("Tooltip",[S]),Y=S(),V="TooltipProvider",U="tooltip.open",[G,q]=H(V),J=e=>{let{__scopeTooltip:t,delayDuration:o=700,skipDelayDuration:i=300,disableHoverableContent:s=!1,children:n}=e,[a,c]=r.useState(!0),d=r.useRef(!1),f=r.useRef(0);return r.useEffect(()=>{let e=f.current;return()=>window.clearTimeout(e)},[]),(0,l.jsx)(G,{scope:t,isOpenDelayed:a,delayDuration:o,onOpen:r.useCallback(()=>{window.clearTimeout(f.current),c(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>c(!0),i)},[i]),isPointerInTransitRef:d,onPointerInTransitChange:r.useCallback(e=>{d.current=e},[]),disableHoverableContent:s,children:n})};J.displayName=V;var K="Tooltip",[Q,Z]=H(K),ee=e=>{let{__scopeTooltip:t,children:o,open:i,defaultOpen:s=!1,onOpenChange:n,disableHoverableContent:a,delayDuration:c}=e,d=q(K,e.__scopeTooltip),f=Y(t),[p,u]=r.useState(null),g=(0,h.useId)(),v=r.useRef(0),m=a??d.disableHoverableContent,x=c??d.delayDuration,w=r.useRef(!1),[y=!1,b]=(0,W.useControllableState)({prop:i,defaultProp:s,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(U))):d.onClose(),n?.(e)}}),S=r.useMemo(()=>y?w.current?"delayed-open":"instant-open":"closed",[y]),C=r.useCallback(()=>{window.clearTimeout(v.current),v.current=0,w.current=!1,b(!0)},[b]),z=r.useCallback(()=>{window.clearTimeout(v.current),v.current=0,b(!1)},[b]),E=r.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{w.current=!0,b(!0),v.current=0},x)},[x,b]);return r.useEffect(()=>()=>{v.current&&(window.clearTimeout(v.current),v.current=0)},[]),(0,l.jsx)(P,{...f,children:(0,l.jsx)(Q,{scope:t,contentId:g,open:y,stateAttribute:S,trigger:p,onTriggerChange:u,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?E():C()},[d.isOpenDelayed,E,C]),onTriggerLeave:r.useCallback(()=>{m?z():(window.clearTimeout(v.current),v.current=0)},[z,m]),onOpen:C,onClose:z,disableHoverableContent:m,children:o})})};ee.displayName=K;var et="TooltipTrigger",er=r.forwardRef((e,t)=>{let{__scopeTooltip:s,...a}=e,c=Z(et,s),d=q(et,s),f=Y(s),p=r.useRef(null),u=(0,i.useComposedRefs)(t,p,c.onTriggerChange),h=r.useRef(!1),g=r.useRef(!1),v=r.useCallback(()=>h.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),(0,l.jsx)(k,{asChild:!0,...f,children:(0,l.jsx)(n.Primitive.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...a,ref:u,onPointerMove:(0,o.composeEventHandlers)(e.onPointerMove,e=>{"touch"!==e.pointerType&&(g.current||d.isPointerInTransitRef.current||(c.onTriggerEnter(),g.current=!0))}),onPointerLeave:(0,o.composeEventHandlers)(e.onPointerLeave,()=>{c.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.composeEventHandlers)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:(0,o.composeEventHandlers)(e.onFocus,()=>{h.current||c.onOpen()}),onBlur:(0,o.composeEventHandlers)(e.onBlur,c.onClose),onClick:(0,o.composeEventHandlers)(e.onClick,c.onClose)})})});er.displayName=et;var[eo,ei]=H("TooltipPortal",{forceMount:void 0}),es="TooltipContent",en=r.forwardRef((e,t)=>{let r=ei(es,e.__scopeTooltip),{forceMount:o=r.forceMount,side:i="top",...s}=e,n=Z(es,e.__scopeTooltip);return(0,l.jsx)($.Presence,{present:o||n.open,children:n.disableHoverableContent?(0,l.jsx)(ed,{side:i,...s,ref:t}):(0,l.jsx)(ea,{side:i,...s,ref:t})})}),ea=r.forwardRef((e,t)=>{let o=Z(es,e.__scopeTooltip),s=q(es,e.__scopeTooltip),n=r.useRef(null),a=(0,i.useComposedRefs)(t,n),[c,d]=r.useState(null),{trigger:f,onClose:p}=o,u=n.current,{onPointerInTransitChange:h}=s,g=r.useCallback(()=>{d(null),h(!1)},[h]),v=r.useCallback((e,t)=>{let r,o=e.currentTarget,i={x:e.clientX,y:e.clientY},s=function(e,t){let r=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(r,o,i,s)){case s:return"left";case i:return"right";case r:return"top";case o:return"bottom";default:throw Error("unreachable")}}(i,o.getBoundingClientRect());d(((r=[...function(e,t,r=5){let o=[];switch(t){case"top":o.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":o.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":o.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":o.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return o}(i,s),...function(e){let{top:t,right:r,bottom:o,left:i}=e;return[{x:i,y:t},{x:r,y:t},{x:r,y:o},{x:i,y:o}]}(t.getBoundingClientRect())].slice()).sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:1*!!(e.y>t.y)),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let o=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(o.y-r.y)>=(e.y-r.y)*(o.x-r.x))t.pop();else break}t.push(o)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let o=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(o.y-t.y)>=(e.y-t.y)*(o.x-t.x))r.pop();else break}r.push(o)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(r))),h(!0)},[h]);return r.useEffect(()=>()=>g(),[g]),r.useEffect(()=>{if(f&&u){let e=e=>v(e,u),t=e=>v(e,f);return f.addEventListener("pointerleave",e),u.addEventListener("pointerleave",t),()=>{f.removeEventListener("pointerleave",e),u.removeEventListener("pointerleave",t)}}},[f,u,v,g]),r.useEffect(()=>{if(c){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},o=f?.contains(t)||u?.contains(t),i=!function(e,t){let{x:r,y:o}=e,i=!1;for(let e=0,s=t.length-1;e<t.length;s=e++){let n=t[e].x,a=t[e].y,l=t[s].x,c=t[s].y;a>o!=c>o&&r<(l-n)*(o-a)/(c-a)+n&&(i=!i)}return i}(r,c);o?g():i&&(g(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[f,u,c,p,g]),(0,l.jsx)(ed,{...e,ref:a})}),[el,ec]=H(K,{isInside:!1}),ed=r.forwardRef((e,t)=>{let{__scopeTooltip:o,children:i,"aria-label":s,onEscapeKeyDown:n,onPointerDownOutside:a,...c}=e,d=Z(es,o),p=Y(o),{onClose:u}=d;return r.useEffect(()=>(document.addEventListener(U,u),()=>document.removeEventListener(U,u)),[u]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;t?.contains(d.trigger)&&u()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,u]),(0,l.jsx)(f,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:e=>e.preventDefault(),onDismiss:u,children:(0,l.jsxs)(R,{"data-state":d.stateAttribute,...p,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,l.jsx)(_.Slottable,{children:i}),(0,l.jsx)(el,{scope:o,isInside:!0,children:(0,l.jsx)(M,{id:d.contentId,role:"tooltip",children:s||i})})]})})});en.displayName=es;var ef="TooltipArrow",ep=r.forwardRef((e,t)=>{let{__scopeTooltip:r,...o}=e,i=Y(r);return ec(ef,r).isInside?null:(0,l.jsx)(O,{...i,...o,ref:t})});ep.displayName=ef,e.s(["Arrow",0,ep,"Content",0,en,"Provider",0,J,"Root",0,ee,"Trigger",0,er],561528)},670604,e=>{"use strict";var t=e.i(136746),r=e.i(526191);e.s(["useSize",0,function(e){let[o,i]=t.useState(void 0);return(0,r.useLayoutEffect)(()=>{if(e){i({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let s=t[0];if("borderBoxSize"in s){let e=s.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;i({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}i(void 0)},[e]),o}])},331111,e=>{"use strict";var t=e.i(870590),r=e.i(922329),o=e.i(136746),i=e.i(551360);let s=`
vec3 random3(vec3 c) {
  float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));
  vec3 r;
  r.z = fract(512.0 * j);
  j *= .125;
  r.x = fract(512.0 * j);
  j *= .125;
  r.y = fract(512.0 * j);
  return r - 0.5;
}

float getNoise(vec2 uv, float screenWidth) {
  vec2 scaledUV = uv * screenWidth;
  vec3 seed = vec3(scaledUV, mod(scaledUV.x + scaledUV.y, screenWidth));
  vec3 noise = random3(seed);
  return noise.x * 0.3 + noise.y * 0.3 + noise.z * 0.4;
}
`,n=`
totalIntersecting = grid.filter((point) => point.isIntersecting).length;
offscreenCanvas.shader(shaderProgram);
`,a=`
shaderProgram.setUniform("uTexture", offscreenBuffer);
shaderProgram.setUniform("wSize", p.width);
shaderProgram.setUniform("hSize", p.height);
offscreenCanvas.beginShape();
offscreenCanvas.vertex(-1, -1, 0, 0);
offscreenCanvas.vertex(1, -1, 1, 0);
offscreenCanvas.vertex(1, 1, 1, 1);
offscreenCanvas.vertex(-1, 1, 0, 1);
offscreenCanvas.endShape(p.CLOSE);

const sizeVec = p.createVector(p.width, p.height).mult(resultScale);
p.image(offscreenCanvas, 0, p.height - sizeVec.y, sizeVec.x, sizeVec.y);

p.fill(255,77,0);
p.noStroke();
const posBottom = p.height - (p.height - samplerPos.y) * resultScale;
p.ellipse(samplerPos.x * resultScale, posBottom, 4);
`,l=({samplerType:e})=>`
  let samplerPos = { x: 0, y: 0 };
  let dragging = false;
  let offsetX, offsetY;

  let grid = [];
  let totalIntersecting = 0;

  ${"grid"===e?`
  const gridSize = 15;
  const gridDivisions = 4;
  `:`
  const diskSize = 80;
  const diskSamples = 100;
  `}


  ${"grid"===e?`
  const createSampler = () => {
    for (let i = -gridDivisions; i <= gridDivisions; i++) {
      for (let j = -gridDivisions; j <= gridDivisions; j++) {
        if(i === 0 && j === 0) continue;
        grid.push({
          position: { x: i * gridSize, y: j * gridSize },
          size: 0,
          isIntersecting: false,
        });
      }
    }
  };`:`
  const createSampler = () => {
    // vogel disk sampling
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

    for (let i = 1; i <= diskSamples; i++) {
      const r = diskSize * Math.sqrt(i / diskSamples);
      const theta = i * goldenAngle;

      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);

      grid.push({
        position: { x: x, y: y },
        size: 0,
        isIntersecting: false,
      });
    }
  };`}



  // Star position and size
  const starSize = 150;
  let starPos = { x: 0, y: 0 };

  // Rectangle position and size
  const rectSize = { width: 180, height: 180 };
  let rectPos = { x: 0, y: 0 };

  let offscreenBuffer, shaderProgram, offscreenCanvas;

  const calculateRectPos = (canvasWidth, canvasHeight) => {
    return { x: canvasWidth / 2 - rectSize.width / 2 + 200, y: canvasHeight / 2 - rectSize.height / 2 + 120 };
  };

  const calculateStarPos = (canvasWidth, canvasHeight) => {
    return { x: canvasWidth / 2 - 100, y: canvasHeight / 2 - 100 };
  };

  const resultScale = 1/3;
  const shaderScale = 1;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    offscreenBuffer = p.createGraphics(p.windowWidth, p.windowHeight);
    offscreenCanvas = p.createGraphics(p.windowWidth * shaderScale, p.windowHeight * shaderScale, p.WEBGL);
    shaderProgram = offscreenCanvas.createShader(vertexShader, fragmentShader);
    samplerPos = { x: p.width / 2, y: p.height / 2 };
    rectPos = calculateRectPos(p.width, p.height);
    starPos = calculateStarPos(p.width, p.height);
    createSampler();
  };

  p.mousePressed = () => {
    dragging = true;
    samplerPos = { x: p.mouseX, y: p.mouseY };
    offsetX = samplerPos.x - p.mouseX;
    offsetY = samplerPos.y - p.mouseY;
  };

  p.mouseDragged = () => {
    if (dragging) {
      samplerPos = { x: p.mouseX + offsetX, y: p.mouseY + offsetY };
    }
  };

  p.mouseReleased = () => {
    dragging = false;
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    offscreenBuffer.resizeCanvas(p.windowWidth, p.windowHeight);
    offscreenCanvas.resizeCanvas(p.windowWidth * shaderScale, p.windowHeight * shaderScale);
    samplerPos = { x: p.width / 2, y: p.height / 2 };
    rectPos = calculateRectPos(p.width, p.height);
    starPos = calculateStarPos(p.width, p.height);
  };

  const shapeFill = (buffer, opacity, isShadowBuffer) => {
    const c = opacity * 255;
    buffer.fill(c, isShadowBuffer ? 255 : c, c)
  }

  const drawShapes = ({ buffer, fill, stroke, shadow = false }) => {
    // Draw shapes to the off-screen buffer
    buffer.background(0);
    buffer.noStroke();

    // Draw star to the buffer
    buffer.push();
    fill ? shapeFill(buffer, 0.15, shadow) : buffer.noFill();
    stroke ? buffer.stroke(255, 70) : buffer.noStroke();

    buffer.translate(starPos.x, starPos.y);
    buffer.beginShape();
    for (let i = 0; i < 5; i++) {
      buffer.vertex(starSize * Math.cos((p.TWO_PI * i) / 5), starSize * Math.sin((p.TWO_PI * i) / 5));
      buffer.vertex(starSize / 2 * Math.cos((p.TWO_PI * (i + 0.5)) / 5), starSize / 2 * Math.sin((p.TWO_PI * (i + 0.5)) / 5));
    }
    buffer.endShape(p.CLOSE);
    buffer.pop();

    // Draw rectangle to the buffer
    fill ? shapeFill(buffer, 0.95, shadow) : buffer.noFill();
    stroke ? buffer.stroke(255) : buffer.noStroke();
    buffer.rectMode(p.CORNER);
    buffer.rect(rectPos.x, rectPos.y, rectSize.width, rectSize.height);
  }

  // Draw draggable square
  const drawSampler = () => {
    p.rectMode(p.CENTER);
    p.fill(
      offscreenCanvas.get(samplerPos.x * shaderScale, samplerPos.y * shaderScale)[0],
    );
    p.stroke(255, 77, 0);
    p.strokeWeight(2);
    p.rect(samplerPos.x, samplerPos.y, 20, 20, 2);
  }


  const drawGrid = ({onlyWhenIntercepting = false} = {}) => {
    p.noStroke();
    const interceptedPoints = grid.filter((point) => point.isIntersecting);
    const nonInterceptedPoints = grid.filter((point) => !point.isIntersecting);
    if(!onlyWhenIntercepting) {
      nonInterceptedPoints.forEach((point) => {
        const circleX = samplerPos.x + point.position.x;
        const circleY = samplerPos.y + point.position.y;
        point.size > 10 ? p.fill(200, 20) : p.fill(255, 100);
        p.ellipse(circleX, circleY, point.size);

      });
    }
    interceptedPoints.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      point.size > 10 ? p.fill(0, 255, 0, point.size > 170 ? 10 : 50) : p.fill(0, 255, 0, 255);
      p.ellipse(circleX, circleY, point.size);
    });

    p.noFill();
    interceptedPoints.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      p.stroke(0, 50);
      p.ellipse(circleX, circleY, point.size);
    });
  }
`,c=`
precision mediump float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  gl_Position = vec4(aPosition, 1.0);
}
`,d=`
precision highp float;
uniform sampler2D uTexture;
uniform highp float wSize;
uniform highp float hSize;

varying vec2 vTexCoord;

const float pi = 3.1415926535897932384626433832795;
const float goldenAngle = pi * (3.0 - sqrt(5.0)); // Golden angle in radians
const float diskSize = 80.0;
const int diskSamples = 100;
const float minSize = 20.;
const float maxSize = 300.;

vec3 rand(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  int shadowCounter = 0;
  float shadowInfluence = 0.0;
  float noiseSample = rand(uv).x;

  float angle = noiseSample * pi;
  float cosAngle = cos(angle);
  float sinAngle = sin(angle);

  for (int i = 1; i <= diskSamples; i++) {
    float r = diskSize * sqrt(float(i) / float(diskSamples));
    float theta = float(i) * goldenAngle;

    vec2 offset;
    offset.x = r * cos(theta);
    offset.y = r * sin(theta);

    vec2 rotatedOffset;
    rotatedOffset.x = cosAngle * offset.x - sinAngle * offset.y;
    rotatedOffset.y = sinAngle * offset.x + cosAngle * offset.y;

    vec4 color = texture2D(uTexture, uv + rotatedOffset / vec2(wSize, hSize));
    if (color.r > 0.0 && color.g == 1.0) {
      float dist = length(offset);
      float size = color.r;
      size = (size * (maxSize - minSize)) + minSize;

      if (size / 2.0 >= dist) {
        shadowInfluence += mix(8.0, 0.5, size / maxSize);
        shadowCounter++;
      }
    }
  }

  float shadowFactor = shadowInfluence / float(diskSamples);
  shadowFactor = clamp(shadowFactor, 0.0, 0.8);
  vec3 color = vec3(1.0 - shadowFactor);

  gl_FragColor = vec4(color, 1.0);
}
`,f=`export const sketch = (p) => {
  const vertexShader = \`${c}\`;
  const fragmentShader = \`${d}\`;

  ${l({samplerType:"vogel"})}
  p.draw = () => {
    ${n}
    drawShapes({
      buffer: offscreenBuffer,
      fill: true,
      stroke: false,
      shadow: true
    })

    drawShapes({
      buffer: p,
      fill: true,
      stroke: true,
      shadow: false
    })


    grid.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      const sampledColor = offscreenBuffer.get(circleX, circleY);
      const minSize = 20
      const maxSize = 300
      if (sampledColor[0] > 0 && sampledColor[1] === 255) {
        let size = sampledColor[0] / 255;
        size = size * (maxSize - minSize) + minSize;

        point.size = size;
        point.isIntersecting = size/2 >= Math.hypot(circleX - samplerPos.x, circleY - samplerPos.y);
      } else {
        point.size = 5;
        point.isIntersecting = false;
      }
    });

    drawGrid()
    drawSampler()
    ${a}
  };
};
`,p=`
precision highp float;
uniform sampler2D uTexture;
uniform highp float wSize;
uniform highp float hSize;

varying vec2 vTexCoord;

const int gridSize = 15;
const int gridDivisions = 4;

const float minSize = 20.;
const float maxSize = 300.;

${s}

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  vec3 finalColor = vec3(0.0);

  int shadowCounter = 0;
  float shadowInfluence = 0.0;
  float noiseSample = getNoise(uv, wSize);

  float angle = noiseSample * 3.14159265;
  float cosAngle = cos(angle);
  float sinAngle = sin(angle);

  for (int i = -gridDivisions; i <= gridDivisions; i++) {
    for (int j = -gridDivisions; j <= gridDivisions; j++) {
      vec2 offset = vec2(float(i * gridSize), float(j * gridSize));

      vec2 rotatedOffset;
      rotatedOffset.x = cosAngle * offset.x - sinAngle * offset.y;
      rotatedOffset.y = sinAngle * offset.x + cosAngle * offset.y;

      vec4 color = texture2D(uTexture, uv + rotatedOffset / vec2(wSize, hSize));
      if (color.r > 0.0 && color.g == 1.) {
        float dist = length(offset);
        float size = color.r;
        size = (size * (maxSize - minSize)) + minSize;

        if (size / 2. >= dist) {
          shadowInfluence += mix(8., 0.5, size / maxSize);
          shadowCounter++;
        }
      }
    }
  }

  float shadowFactor = shadowInfluence / float(gridDivisions * 2 + 1) / float(gridDivisions * 2 + 1);
  shadowFactor = clamp(shadowFactor, 0.0, 0.8);
  vec3 color = vec3(1. - shadowFactor);

  gl_FragColor = vec4(color, 1.0);
}
`,u=`export const sketch = (p) => {
  const vertexShader = \`${c}\`;
  const fragmentShader = \`${p}\`;

  ${l({samplerType:"grid"})}
  p.draw = () => {
    ${n}
    drawShapes({
      buffer: offscreenBuffer,
      fill: true,
      stroke: false,
      shadow: true
    })

    drawShapes({
      buffer: p,
      fill: true,
      stroke: true,
      shadow: false
    })


    grid.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      const sampledColor = offscreenBuffer.get(circleX, circleY);
      const minSize = 20
      const maxSize = 300
      if (sampledColor[0] > 0 && sampledColor[1] === 255) {
        let size = sampledColor[0] / 255;
        size = size * (maxSize - minSize) + minSize;

        point.size = size;
        point.isIntersecting = size/2 >= Math.hypot(circleX - samplerPos.x, circleY - samplerPos.y);
      } else {
        point.size = 5;
        point.isIntersecting = false;
      }
    });

    drawGrid()
    drawSampler()
    ${a}
  };
};
`,h=`
precision mediump float;
uniform sampler2D uTexture;
uniform float wSize;
uniform float hSize;

varying vec2 vTexCoord;

const int gridSize = 15;
const int gridDivisions = 4;

${s}

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  float noiseSample = getNoise(uv, wSize);

  float angle = noiseSample * 3.14159265;
  float cosAngle = cos(angle);
  float sinAngle = sin(angle);

  int shadowCounter = 0;
  for (int i = -gridDivisions; i <= gridDivisions; i++) {
    for (int j = -gridDivisions; j <= gridDivisions; j++) {
      vec2 offset = vec2(i * gridSize, j * gridSize);

      vec2 rotatedOffset;
      rotatedOffset.x = cosAngle * offset.x - sinAngle * offset.y;
      rotatedOffset.y = sinAngle * offset.x + cosAngle * offset.y;

      vec4 color = texture2D(uTexture, uv + rotatedOffset / vec2(wSize, hSize));

      if (color.r > 0.0 && color.g == 1.) {
        shadowCounter++;
      }
    }
  }

  float shadowFactor = float(shadowCounter) / float((gridDivisions * 2 + 1) * (gridDivisions * 2 + 1));
  vec3 color = vec3(1. - shadowFactor);

  gl_FragColor = vec4(color, 1.0);
}
`,g=`export const sketch = (p) => {
  const vertexShader = \`${c}\`;
  const fragmentShader = \`${h}\`;

  ${l({samplerType:"grid"})}
  p.draw = () => {
    ${n}
    drawShapes({
      buffer: offscreenBuffer,
      fill: true,
      stroke: false,
      shadow: true
    })

    drawShapes({
      buffer: p,
      fill: true,
      stroke: true,
      shadow: false
    })


    grid.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      const sampledColor = offscreenBuffer.get(circleX, circleY);
      if (sampledColor[0] > 0 && sampledColor[1] === 255) {
        point.size = 5;
        point.isIntersecting = true;
      } else {
        point.size = 5;
        point.isIntersecting = false;
      }
    });

    drawGrid()
    drawSampler()
    ${a}
  };
};
`,v=`
precision mediump float;
uniform sampler2D uTexture;
uniform float wSize;

varying vec2 vTexCoord;

const int gridSize = 15;
const int gridDivisions = 4;

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  int shadowCounter = 0;
  for (int i = -gridDivisions; i <= gridDivisions; i++) {
    for (int j = -gridDivisions; j <= gridDivisions; j++) {
      vec2 offset = vec2(i * gridSize, j * gridSize);
      vec4 color = texture2D(uTexture, uv + offset / wSize);
      if (color.r > 0.0 && color.g == 1.) {
        shadowCounter++;
      }
    }
  }

  float shadowFactor = float(shadowCounter) / float((gridDivisions * 2 + 1) * (gridDivisions * 2 + 1));
  vec3 color = vec3(1. - shadowFactor);

  gl_FragColor = vec4(color, 1.0);
}
`,m=`export const sketch = (p) => {
  const vertexShader = \`${c}\`;
  const fragmentShader = \`${v}\`;

  ${l({samplerType:"grid"})}
  p.draw = () => {
    ${n}
    drawShapes({
      buffer: offscreenBuffer,
      fill: true,
      stroke: false,
      shadow: true
    })

    drawShapes({
      buffer: p,
      fill: true,
      stroke: true,
      shadow: false
    })


    grid.forEach((point) => {
      const circleX = samplerPos.x + point.position.x;
      const circleY = samplerPos.y + point.position.y;
      const sampledColor = offscreenBuffer.get(circleX, circleY);
      if (sampledColor[0] > 0 && sampledColor[1] === 255) {
        point.size = 5;
        point.isIntersecting = true;
      } else {
        point.size = 5;
        point.isIntersecting = false;
      }
    });

    drawGrid()
    drawSampler()
    ${a}
  };
};
`,x=`export const sketch = (p) => {

  const vertexShader = \`${c}\`;
  const fragmentShader = \`${v}\`;

  ${l({samplerType:"grid"})}
  p.draw = () => {
    ${n}
    drawShapes({
      buffer: offscreenBuffer,
      fill: true,
      stroke: false
    })

    drawShapes({
      buffer: p,
      fill: true,
      stroke: true
    })
  };
};
`;var w=e.i(582935);let y={name:"p5",dependencies:{p5:"1.9.4"},extends:"react",...r.REACT_TEMPLATE,editableFiles:["sketch.js","app.css","App.js"],activeFile:"sketch.js",files:{...r.REACT_TEMPLATE.files,"app.css":{code:"body { margin: 0; padding: 0; overflow: hidden;}"},"App.js":{code:`import './app.css';
import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import { sketch } from './sketch';

const App = () => {
  const sketchRef = useRef();
  

  useEffect(() => {
    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default App;
      `},"sketch.js":{code:""}}},b=Object.keys(r.SANDBOX_TEMPLATES),S={w1:"#E6E6E6",w2:"#C4C4C4",g1:"#757575",g2:"#2E2E2E",k:"#000000",o:"#FF4D00",o2:"#FF2B00",r:"#E60002",r2:"#FF4D4D",y:"#FFCD1A",g:"#00FF9B"},C={colors:{surface1:S.k,surface2:S.g2,surface3:S.g2,clickable:S.w2,base:S.g1,disabled:S.g2,hover:S.w1,accent:S.w1,error:S.o,errorSurface:S.k},syntax:{plain:S.w1,comment:{color:S.g1,fontStyle:"italic"},keyword:S.g,tag:S.o,punctuation:S.g,definition:S.o,property:S.o,static:S.o,string:S.w2},font:{size:"0.75rem",body:"var(--font-geist-sans)",mono:"var(--font-geist-mono)"}};var z=e.i(561528);let P=({activeTab:e,setActiveTab:o})=>{let{dispatch:s}=(0,r.useSandpack)(),{reset:n}=(0,r.useSandpackConsole)({resetOnPreviewRestart:!1,showSyntaxError:!0}),a=[{id:"refresh",label:"Refresh",icon:E.refresh,onClick:()=>{s({type:"refresh"})}},{id:"clear-console",label:"Clear console",icon:E.clearConsole,onClick:()=>{n()}}];return(0,t.jsxs)("div",{className:"flex h-full items-center justify-between border-b border-brand-w2/20 px-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,t.jsx)("button",{className:(0,i.cn)("!text-f-p-mobile text-brand-g1 lg:!text-f-p","preview"===e&&"text-brand-w1"),onClick:()=>o("preview"),children:"Preview"}),(0,t.jsx)("button",{className:(0,i.cn)("!text-f-p-mobile text-brand-g1 lg:!text-f-p","console"===e&&"text-brand-w1"),onClick:()=>o("console"),children:"Console"})]}),(0,t.jsx)(z.Provider,{delayDuration:500,skipDelayDuration:500,children:(0,t.jsxs)("div",{className:"flex items-center gap-x-1.5",children:[(0,t.jsxs)(z.Root,{children:[(0,t.jsx)(z.Trigger,{asChild:!0,children:(0,t.jsx)(r.UnstyledOpenInCodeSandboxButton,{className:"rounded-sm border border-brand-g2 p-1 text-f-p-mobile text-brand-g1 transition-colors duration-300 hover:bg-brand-g2/50 lg:text-f-p",children:E.openInCodeSandbox})}),(0,t.jsx)(z.Content,{side:"top",sideOffset:12,className:"rounded-md border border-brand-g2 bg-brand-k px-2 py-1 text-f-p-mobile text-brand-w2 lg:text-f-p",children:(0,t.jsx)("p",{children:"Open in CodeSandbox"})})]},"open-in-code-sandbox"),a.map(e=>(0,t.jsxs)(z.Root,{children:[(0,t.jsx)(z.Trigger,{asChild:!0,children:(0,t.jsx)("button",{className:"rounded-sm border border-brand-g2 p-1 text-f-p-mobile text-brand-g1 transition-colors duration-300 hover:bg-brand-g2/50 lg:text-f-p",onClick:e.onClick,"aria-label":e.label,children:e.icon},e.id)}),(0,t.jsx)(z.Content,{side:"top",sideOffset:12,className:"rounded-md border border-brand-g2 bg-brand-k px-2 py-1 text-f-p-mobile text-brand-w2 lg:text-f-p",children:(0,t.jsx)("p",{children:e.label})})]},e.id))]})})]})},E={openInCodeSandbox:(0,t.jsxs)("svg",{className:"size-4",fill:"none",viewBox:"0 0 17 16",children:[(0,t.jsx)("g",{clipPath:"url(#clip0_4283_20378)",children:(0,t.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M.5 5.251V4.25l.463-.192 7.25-3L8.5.938l.287.12 7.25 3 .463.19v1.003l-.463.192-7.25 3-.287.119-.287-.119-7.25-3zm0 3.207V6.835l.537.222L8.5 10.145l7.463-3.088.537-.222v1.623L8.787 11.65l-.287.119-.287-.119zm0 3.25v-1.623l.537.222L8.5 13.395l7.463-3.088.537-.222v1.623L8.787 14.9l-.287.119-.287-.119zm8-4.77L3.212 4.75 8.5 2.562l5.289 2.188z",clipRule:"evenodd"})}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_4283_20378",children:(0,t.jsx)("path",{fill:"currentColor",d:"M.5 0h16v16H.5z"})})})]}),clearConsole:(0,t.jsx)("svg",{className:"size-4",fill:"none",viewBox:"0 0 17 16",children:(0,t.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"m12.97 13.53.53.53L14.56 13l-.53-.53L9.56 8l4.47-4.47.53-.53-1.06-1.06-.53.53L8.5 6.94 4.03 2.47l-.53-.53L2.44 3l.53.53L7.44 8l-4.47 4.47-.53.53 1.06 1.06.53-.53L8.5 9.06z",clipRule:"evenodd"})}),refresh:(0,t.jsxs)("svg",{className:"size-4",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",children:[(0,t.jsx)("path",{d:"m17 1 4 4-4 4"}),(0,t.jsx)("path",{d:"M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"}),(0,t.jsx)("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]})};e.s(["default",0,function({keyName:e}){let[s,n]=(0,o.useState)("preview"),a=(e=>{switch(e){case"daylight-shapes":return{files:{"sketch.js":x},template:"p5"};case"daylight-grid":return{files:{"sketch.js":m},template:"p5"};case"daylight-grid-noise":return{files:{"sketch.js":g},template:"p5"};case"daylight-grid-scale":return{files:{"sketch.js":u},template:"p5"};case"daylight-vogel-scale":return{files:{"sketch.js":f},template:"p5"};default:return null}})(e);if(!a)return null;let l=b.includes(a?.template),c=l?void 0:function(e){if("p5"===e)return y;throw Error(`Unknown template: ${e}`)}(a?.template);return(0,t.jsx)("div",{className:"custom-block w-full",children:(0,t.jsx)(r.SandpackProvider,{template:l?a?.template:c?.extends,customSetup:l?void 0:c,options:{autoReload:!0,autorun:!0,classes:{"sp-tab-container":w.default.tabContainer,"cm-scroller":w.default.scroller},visibleFiles:c?.editableFiles||void 0,activeFile:c?.activeFile||void 0},files:{...c?.files,...a?.files},theme:C,children:(0,t.jsxs)(r.SandpackLayout,{className:"!grid !h-[640px] w-full grid-rows-2 lg:!grid-cols-2 lg:grid-rows-1",children:[(0,t.jsxs)("div",{className:"grid h-full grid-rows-[42px_1fr] bg-brand-k",children:[(0,t.jsx)(P,{activeTab:s,setActiveTab:n}),(0,t.jsxs)("div",{className:"relative h-full flex-1 overflow-x-hidden",children:[(0,t.jsx)(r.SandpackPreview,{className:(0,i.cn)("!absolute !inset-0","console"===s&&"!hidden"),showOpenInCodeSandbox:!1,showRefreshButton:!1,showRestartButton:!1}),(0,t.jsx)(r.SandpackConsole,{className:(0,i.cn)("!absolute !inset-0","preview"===s&&"!hidden")})]})]}),(0,t.jsx)("div",{className:"relative h-full overflow-auto",children:(0,t.jsx)(r.SandpackCodeEditor,{closableTabs:!1,showLineNumbers:!0,showTabs:!0,initMode:"user-visible",className:"!h-full"})})]})})})}],331111)},232354,function(e){e.n(e.i(331111))},582935,e=>{e.v({codeEditor:"sandbox-module__-w6JmW__codeEditor",scroller:"sandbox-module__-w6JmW__scroller",tabContainer:"sandbox-module__-w6JmW__tabContainer"})}]);

//# debugId=3ed321fc-a55c-e558-207e-23a0e273248b