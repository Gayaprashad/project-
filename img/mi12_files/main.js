/* HPL_WWD_P13677_TonerValue_FirstAlwayColor_300x250 */

/**** Preloader ****/
if (window.attachEvent) {
	window.attachEvent('onload', thisWindowLoaded);
}
else if (window.addEventListener) {
	window.addEventListener('load', thisWindowLoaded, false);
}
else {
	document.addEventListener('load', thisWindowLoaded, false);
}

/* ================== */
/* == button hover == */
/* ================== */

function over()
{
	/*document.getElementById("cta-container").style.position = 'absolute';
	document.getElementById("cta-container").style.top = 126 + 'px';
	document.getElementById("cta-container").style.left = 13 + 'px';*/
}
function out()
{
	/*document.getElementById("cta-container").style.position = 'absolute';
	document.getElementById("cta-container").style.top = 125 + 'px';
	document.getElementById("cta-container").style.left = 12 + 'px';*/
}

var tl = new TimelineLite();

/**** Animation Scenes ****/
function showScene1() {
    TweenLite.to("#copy-1", 0.5, {opacity: 1});
    TweenLite.to("#copy-2", 0.5, {opacity: 1});
    TweenLite.to("#copy-3a", 0.5, {opacity: 1});
    TweenLite.to("#copy-4", 0.5, {opacity: 1});
    TweenLite.to("#printer", 0.5, {opacity: 1});
    tl.to("#paper-1", 0.5, {y:325, rotation: 0, ease: Quad.easeIn, delay: .75});
    tl.to("#paper-1", 0.75, {x: -135, y: 300, rotation: -335, ease: Quad.easeOut});
    tl.to("#paper-2", 0.5, {y:325, rotation: 0, ease: Quad.easeIn, delay: 1});
    tl.to("#paper-2", 0.75, {x: -75, y: 310, rotation: -350, ease: Quad.easeOut});
    TweenLite.delayedCall(3.5, showScene2);
}

function showScene2() {
    tl.to("#paper-3", 0.5, {y:345, rotation: 0, ease: Quad.easeIn, delay: 1});
    tl.to("#paper-3", 0.75, {x: 3, y: 325, rotation: 5, ease: Quad.easeOut});
    TweenLite.to("#copy-2", 0.25, {x: -8, ease: Quad.easeInOut});
    TweenLite.to("#copy-4", 0.25, {x: 10, ease: Quad.easeInOut});
    TweenLite.to("#copy-3a", 0.25, {opacity: 0, y: 50, ease: Quad.easeIn});
    TweenLite.to("#copy-3b", 0.5, {opacity: 1});


    TweenLite.delayedCall(2.25, showScene3);
}

function showScene3() {
    TweenLite.to("#copy-2", 0.25, {x: -1, ease: Quad.easeInOut});
    TweenLite.to("#copy-4", 0.25, {x: 2, ease: Quad.easeInOut});
    TweenLite.to("#copy-3b", 0.25, {opacity: 0, y: 50, ease: Quad.easeIn});
    TweenLite.to("#copy-3c", 0.5, {opacity: 1});
    tl.to("#paper-4", 0.5, {y: 345, rotation: 0, ease: Quad.easeIn, delay: 1});
    tl.to("#paper-4", 0.75, {x: 75, y: 320, rotation: 350, ease: Quad.easeOut});
    TweenLite.delayedCall(2.5, showScene4);
}

function showScene4() {
    tl.to("#paper-1b", 0.65, {y: 400, rotation: 0, ease: Quad.easeIn, delay: 0.25});
    tl.to("#paper-2b", 0.65, {y: 400, rotation: 0, ease: Quad.easeIn, delay: 0.5});
    tl.to("#paper-3b", 0.65, {y: 400, rotation: 0, ease: Quad.easeIn, delay: 0.75});
    tl.to("#paper-4b", 0.65, {y: 400, rotation: 0, ease: Quad.easeIn, delay: 1});
    TweenLite.set("#paper-5a", {x: -100, y: 100});
    TweenLite.to("#paper-5a", 5, {opacity: 1, x: 0, y: 0, ease: Quad.easeOut});
    TweenLite.set("#paper-5b", {x: 100, y: 100});
    TweenLite.to("#paper-5b", 5, {opacity: 1, x: 0, y: 0, ease: Quad.easeOut});
    TweenLite.to("#copy-2", 0.25, {opacity: 0, x: 15, ease: Quad.easeInOut});
    TweenLite.to("#copy-2b", 0.25, {opacity: 1, x: 15, ease: Quad.easeInOut});
    TweenLite.to("#copy-4", 0.25, {x: -15, ease: Quad.easeInOut});
    TweenLite.to("#copy-3c", 0.25, {opacity: 0, y: 50, ease: Quad.easeIn});
    TweenLite.to("#copy-3d", 0.5, {opacity: 1});
    TweenLite.delayedCall(6.5, showEndframe);
}

function showEndframe() {
    TweenLite.to("#copy-1", 0.5, {opacity: 0});
    TweenLite.to("#copy-2b", 0.5, {opacity: 0});
    TweenLite.to("#copy-3d", 0.5, {opacity: 0});
    TweenLite.to("#copy-4", 0.5, {opacity: 0});
    TweenLite.to("#printer", 0.5, {opacity: 0});
    TweenLite.to("#paper-1", 0.5, {opacity: 0});
    TweenLite.to("#paper-2", 0.5, {opacity: 0});
    TweenLite.to("#paper-3", 0.5, {opacity: 0});
    TweenLite.to("#paper-4", 0.5, {opacity: 0});
    TweenLite.to("#paper-5a", 0.5, {opacity: 0});
    TweenLite.to("#paper-5b", 0.5, {opacity: 0});
    TweenLite.set("#copy-header", {x: 50});
    TweenLite.set("#copy-subhead1", {x: 50});
    TweenLite.set("#copy-subhead2", {x: 50}); 
    TweenLite.to("#copy-header", 0.75, {opacity: 1, x: 0, ease: Quad.easeOut});
    TweenLite.to("#copy-subhead1", 0.75, {opacity: 1, x: 0, ease: Quad.easeOut, delay: 1});
    TweenLite.to("#copy-subhead2", 0.75, {opacity: 1, x: 0, ease: Quad.easeOut, delay: 2});
    TweenLite.set("#ef", {x: 10, y: -10, scaleX: .9, scaleY: .9});
    TweenLite.to("#ef", 1.5, {opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, delay: .5});
    TweenLite.to("#partner-logo", .5, {opacity: 1, delay: 1});
    TweenLite.to("#cta-container", .5, {opacity: 1, delay: 2.5});
    TweenLite.to("#more-details", .5, {opacity: 1, delay: 2.5});

}

/**** Initialize Banner ****/ 
function thisWindowLoaded() {
    showScene1();
    //setupCta();
}