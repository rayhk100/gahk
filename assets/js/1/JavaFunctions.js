var da=(document.all) ? 1 : 0;
var pr=(window.print) ? 1 : 0;
var mac=(navigator.userAgent.indexOf("Mac") != -1);
function f1() {
	if (pr) // NS4, IE5
		window.print()
	else if (da && !mac) // IE4 (Windows)
		vbPrintPage()
	else // other browsers
		alert("Sorry, your browser does not support this feature.");
	return false;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function checkfilename(str) {
	var pattern="(\\w|-|\\s)+[.](\\w)+";
	str=str.substr((str.lastIndexOf("\\")+1),str.length-(str.lastIndexOf("\\")));
	str=str.substr((str.lastIndexOf("\/")+1),str.length-(str.lastIndexOf("\/")));
	var re=new RegExp(pattern);
	var m=re.exec(str);
	if (m == null) 
		{
		return false;
		} 
	else 
		{
		if (m.index==0)
			return true;
		else
			return false;
		}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue=false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

var wndPopup=null
function MM_openBrWindow(theURL,winName,features) { //v2.0
  wndPopup=window.open(theURL,winName,features);
  wndPopup.focus();
}

var win=null;
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition=(screen.width) ? (screen.width-w)/2 : 0;
TopPosition=(screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win=window.open(mypage,myname,settings)
}

function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}

function CheckNum_e(obj) { //v3.0
if (isNaN(obj.value) || (obj.value<=0))
	{
	alert("Please enter a valid number.");
	}
}


function CheckNum_b(obj) { //v3.0
if (isNaN(obj.value) || (obj.value<=0))
	{
	alert("請輸入數字. (例如: 123)");
	}
}


function CheckNum_g(obj) { //v3.0
if (isNaN(obj.value) || (obj.value<=0))
	{
	alert("请输入数字. (例如: 123)");
	}
}

function alltrim(str)
{
// left trim space
while ((str[0]==9 || str[0]==10 || str[0]==13 || str[0]==32) && str.length>0)
  {
	  if (str.length==1)
	   {
		 str="";
	   } 
	  else
		 str=str.substr(1);
  }

// right trim space
while ((str[str.length-1]==9 || str[str.length-1]==10 || str[str.length-1]==13 || str[str.length-1]==32) && str.length>0)
  {
	 if (str.length==1)
	  {
		str="";
	  }
	 else
		str=str.substr(0,str.length-1);
  }

return str;
}

function valid_email(str)
{   
// trim spaces
str=alltrim(str);

// if empty or too small (at least a@b.c)
if (str.length<5) return false;

// if exist slash
if (str.indexOf("/")>=0) return false;

// if exist spaces
if (str.indexOf(" ")>=0) return false;

// should be one and only one @
if (str.indexOf("@")!=str.lastIndexOf("@") || str.indexOf("@")==-1) return false;     
  
// should be at least one period 
if (str.indexOf(".")==-1) return false;


return true;
}

window.onerror=null;
 var bName=navigator.appName;
 var bVer=parseInt(navigator.appVersion);
 var NS4=(bName == "Netscape" && bVer >= 4);
 var IE4=(bName == "Microsoft Internet Explorer" 
 && bVer >= 4);
 var NS3=(bName == "Netscape" && bVer < 4);
 var IE3=(bName == "Microsoft Internet Explorer" 
 && bVer < 4);
 var blink_speed=200;
 var i=0;
 var x=16;
 
if (NS4 || IE4) {
 if (navigator.appName == "Netscape") {
 layerStyleRef="layer.";
 layerRef="document.layers";
 styleSwitch="";
 }else{
 layerStyleRef="layer.style.";
 layerRef="document.all";
 styleSwitch=".style";
 }
}
//BLINKING
function Blink(layerName){

 if (NS4 || IE4) { 
 if(i%2==0)
 {
 eval(layerRef+'["'+layerName+'"]'+
 styleSwitch+'.visibility="visible"');
 }
 else
 {
 eval(layerRef+'["'+layerName+'"]'+
 styleSwitch+'.visibility="hidden"');
 }
 } 
 if(i<1)
 {
 i++;
 } 
 else
 {
 i--
 }

if (x>0){
	x--;
   setTimeout("Blink('"+layerName+"')",blink_speed);
} else {
 eval(layerRef+'["'+layerName+'"]'+
 styleSwitch+'.visibility="visible"');
}
}



























function swapLang(currLang, nextLang)
{
	var currLocation=window.location.toString();
	var nextLocation=window.location.toString();
	window.location=nextLocation.replace('\/'+currLang+'\/', '\/'+nextLang+'\/');
}

