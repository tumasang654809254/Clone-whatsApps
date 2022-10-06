const tl = gsap.timeline({defaults: {duration:2, ease: "power1.out"}});

tl.fromTo(".chat-message", {opacity:0, x:-850, scale:0,}, {opacity:1, x:0, scale:1,});
//tl.fromTo{".chat-sent", {opacity:0, x:500,}}

//scaling the modal image 
tl.fromTo(".modal-image", {opacity:0, scale:0}, {opacity:1, scale:1});