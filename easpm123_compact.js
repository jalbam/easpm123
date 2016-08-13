//	(c) Copyright - EASPM123 (Email Anti-Spam 123) 1.0 by Joan Alba Maldonado
//		- Email: joanalbamaldonadoNO_SPAM_WELCOME{*AT*}gmail{*DOT*}com (without "NO_SPAM_WELCOME")
//		- Forbidden to use without keeping the author's name and copyright clauses
//		- For non-commercial purposes only (unless you contact me and pay for a license)
var _E=function(a,c,k,n,y,z,b,f)
{
	var E="easpm123";
	var C=[E];
	var K=[E+"_label"];
	var N=C;
	var Y=K;
	var Z=["NO_SPAM_WELCOME"];
	var B=["{*AT_HERE*}"];
	var F=["mouseover","click","touchstart"];
	var w=null;
	var d="undefined";
	var _=document;
	if(typeof(a)===d||a===w){a=1;}
	if(a){o(window,"load",function(){setTimeout(function(){_E.run(c,k,n,y,z,b,f);},100);});}
	_E.run=function(c,k,n,y,z,b,f)
	{
		c=c||C;
		k=k||K;
		n=n||N;
		y=y||Y;
		z=z||Z;
		b=b||B;
		f=f||F;
		e(c,1,p,f,z,b);
		e(n,0,p,f,z,b);
		e(k,1,q);
		e(y,0,q);
	}
	function e(a,c,f,h,p,e)
	{
		if(typeof(h)===d||typeof(h.length)===d){h=[];}
		var b=j(a);
		var l;
		var m;
		for(var x=0;x<b;x++)
		{
			if(c)
			{
				l=u(a[x]);
				if(l!==w)
				{
					m=j(l);
					for(var y=0;y<m;y++){if(j(h)===0){f(l[y],p,e);}else{A(l[y],h,f,p,e);}}
				}
			}
			else
			{
				l=_.getElementById(a[x]);
				if(l!==w){if(j(h)===0){f(l,p,e);}else{A(l,h,f,p,e);}}
			}
		}
	}
	function A(a,h,f,c,C)
	{
		var H=j(h);
		for(var x=0;x<H;x++){o(a,h[x],function(){f(a,c,C);});}
	}
	function o(a,h,f)
	{
		h=i(v(h));
		var k=a["on"+h];
		a["on"+h]=
			function(e)
			{
				if(typeof(k)!==d){try{k(e);}catch(E){}}
				f(e);
			};
	}
	function p(e,z,j)
	{
		if(e!==w)
		{
			var b=t(g(e),z,j);
			e.href=t(e.href,z,j);
			s(e,b);
		}
	}
	function q(e){if(e!==w){e.style.visibility="hidden";e.style.display="none";}}
	function t(s,z,n)
	{
		s+="";
		var y=j(z);
		for(var x=0;x<y;x++){s=s.replace(z[x],"");}
		y=j(n);
		for(var x=0;x<y;x++){s=s.replace(n[x],"@");}
		return s;
	}
	function g(e)
	{
		if(typeof(e.textContent)!==d){return e.textContent;}
		else if(typeof(e.innerText)!==d){return e.innerText;}
		return "";
	}
	function s(e,t,a)
	{
		if(typeof(a)===d||a===w){a=0;}
		if(typeof(e)===d||e===w){return;}
		t+="";
		if(typeof(e.textContent)!==d){e.textContent=(a)?e.textContent+t:t;}
		else if(typeof(e.innerText)!==d){e.innerText=(a)?e.innerText+t:t;}
	}
	function u(c)
	{
		c=i(v(c));
		if(c===""){return [];}
		var e=[];
		if(typeof(_.getElementsByClassName)!==d&&_.getElementsByClassName!==w){e=_.getElementsByClassName(c);}
		else if(typeof(_.querySelectorAll)!==d&&_.querySelectorAll!==w){e=_.querySelectorAll("."+c);}
		else
		{
			var g=r("*");
			b=j(g);
			if(b>0)
			{
				e=[];
				var n;
				var k;
				var m;
				for(var x=0;x<b;x++)
				{
					n=g[x];
					if(n!==w)
					{
						k=n.className.split(" ");
						m=j(k);
						for(var y=0;y<m;y++)
						{
							k[y]=i(v(k[y]));
							if(k[y]===c){e[j(e)]=n;break;}
						}
					}
				}
			}
		}
		return e;
	}
	function r(t)
	{
		t=i(v(t));
		if(typeof(_.getElementsByTagName)!==d&&_.getElementsByTagName!==w)
		{
			var e=_.getElementsByTagName(t);
			if(t==="*"&&j(e)===0&&typeof(_.all)!==d&&_.all!==w){e=_.all;}
			return e;
		}
		else if(typeof(_.querySelectorAll)!==d&&_.querySelectorAll!==w){return _.querySelectorAll(t);}
		else if(typeof(_.all)!==d&&_.all!==w){if(t==="*"){return _.all;}else{return _.all.tags(t);}}
		else if(_.layers)
		{
			var a=_.layers;
			if(t==="*"){return a;}
			else
			{
				b=j(a);
				var e=[];
				var n;
				for(var x=0;x<b;x++)
				{
					n=a[x];
					if(n!==w&&typeof(n.tagName)!==d){if(i(v(n.tagName))===t){e.push(n);}}
				}
				return e;
			}
		}
		else{return [];}
	}
	function v(s)
	{
		if(typeof(s)===d||s===w||!s){s="";}
		s+="";
		if(s===""){return s;}
		while(s.substring(0,1)===" "){s=s.substring(1,j(s));}
		while(s.substring(j(s)-1,j(s))===" "){s=s.substring(0,j(s)-1);}
		return s;
	}
	function j(s){return s.length;}
	function i(s){return s.toLowerCase();}
};
_E();
var EASPM123=_E;