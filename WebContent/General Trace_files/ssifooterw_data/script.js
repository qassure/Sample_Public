// JavaScript Document

<!-- BEGIN UID Input box focus script -->

var loop11_key = "93487cfc8e4eef7011beebcc76e45159c04a58f2"; 
document.write(unescape("%3cscript src='//cdn.loop11.com/my/loop11.js' type='text/javascript'%3e%3c/script%3e"));

  function setFocus() {
 document.login.USERID.focus();
}

<!-- END UID Input box focus script -->

<!-- BEGIN Tracking Input box focus script -->
   
  function setTrackingFocus() {
 document.tracksingle.TRACE.focus();
 document.tracksingle.TRACE.select(0,document.tracksingle.TRACE.length);
}

<!-- END Tracking Input box focus script -->

<!-- BEGIN COPYRIGHT SCRIPT -->
COPYRIGHT = "Copyright &copy; ";

   function writeCopyright()
   {
      document.write(COPYRIGHT, new Date().getFullYear(), " APL Limited. All rights reserved.");
   }
<!-- END COPYRIGHT SCRIPT -->

<!-- BEGIN FLASH POPUP WINDOW SCRIPT -->
function flashpopup(mylink, windowname, parameters)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'resizable=yes,scrollbars=yes,width=700,height=500,top=50,left=50');
return false;
}
<!-- END FLASH POPUP WINDOW SCRIPT -->

<!-- BEGIN DEMO POPUP WINDOW SCRIPT -->
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
<!-- END DEMO POPUP WINDOW SCRIPT --> 

<!-- BEGIN LARGE POPUP WINDOW SCRIPT -->
function largepopup(mylink, windowname, parameters)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, 'largepopup', 'location=yes,resizable=yes,scrollbars=yes,width=650,height=450,top=50,left=50');
return false;
}
<!-- END LARGE POPUP WINDOW SCRIPT --> 

<!-- BEGIN SMALL POPUP WINDOW SCRIPT -->
function smallpopup(mylink, windowname, parameters)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, 'smallpopup', 'location=yes,resizable=yes,scrollbars=yes,width=350,height=450,top=50,left=50');
return false;
}
<!-- END SMALL POPUP WINDOW SCRIPT --> 

<!-- BEGIN EXTERNAL POPUP WINDOW SCRIPT -->
function externalpopup(mylink, windowname, parameters)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'location=yes,resizable=yes,scrollbars=yes,width=650,height=450,top=50,left=50');
return false;
}
<!-- END EXTERNAL POPUP WINDOW SCRIPT -->

 <!-- BEGIN CONTACTS POPUP SCRIPT -->

function myOpen(page,width,height) {
str = new String(page);
str = new String(page);
var xMax = 640, yMax=480; // default
var m=0;
        
    if(str.indexOf("NULL")<0) {         
            if (navigator.appName == 'Netscape') {
                adjWidth = width + 20;
                adjHeight = height + 30;
                xMax = window.outerWidth; 
            yMax = window.outerHeight;
            m=50;
            }
            else {
                adjWidth = width + 50;
                adjHeight = height + 50;
                xMax = screen.width; 
            yMax = screen.height;
            m=90;
            }
            var xOffset = xMax-width-m, yOffset = 20;
     
            msgWindow = window.open('','newWin','width='+adjWidth+',height='+adjHeight+',toolbar=no,screenX='+xOffset+',screenY='+yOffset+',top='+yOffset+',left='+xOffset+',menubar=no,scrollbars=yes,status=yes,resizable=yes');
            msgWindow.location=page;
            msgWindow.focus();      
    }
 }
 
 <!-- END CONTACTS POPUP SCRIPT -->

<!-- BEGIN WINDOW FOCUS SCRIPT -->
{
window.focus();
}
<!-- END WINDOW FOCUS SCRIPT -->


// begin header ssi javascript
// begin section 1 of script
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
// end section 1 script-->co

// begin section 2 of script 
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
// end section 2 of script -->

<!-- begin section 3 of script
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
// end section 3 of script
// end header ssi script



// Begin rotate images on the index page
// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

// theImages[0] = 'images/mainimage.gif'
// theImages[1] = 'images/mainimage02.gif'


// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){

}

//  End -->

