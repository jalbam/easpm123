EASPM123 (Email Anti-Spam 123) 
============================== 
by Joan Alba Maldonado (joanalbamaldonadoNO_SPAM_PLEASE AT gmail DOT com, without NO_SPAM_PLEASE)

An Easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

Version: 1.0 
- Date: 10th November 2015 (approximately)


## Description

An Easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

It works in any browser with JavaScript support, even old ones (including Internet Explorer 5.0), offers different security options (very configurable) and it is just 2.57 KiB minified. If you want, you can easily configure it to be used with many languages at the same time.


## Basic idea
Those elements are normally used to show instructions saying the text that needs to be removed (useful when JavaScript does not work)
the "_without-no-spam_" elements that will be removed



## Usage

The behaviour can be configured easily through the main (and unique) object the script uses (read the instructions in [README.htm](README.html)). But if you are lazy, although it would be less safe, you just need to include the .js file in your website and change the class name (or add to the current classes a new one) of the A elements containing the links to the emails (the class name should be "easpm123" by default).

In order to start using this API, the ".js" file you choose (for example, [easpm123_min.js](easpm123_min.js)) must be included in your document. The most common way, by using a **<SCRIPT>** tag:
	```
	<script src="easpm123_min.js" type="text/javascript" language="javascript"></script>
	```

If we decide to use the main (and unique) object (recommended for improving safety), this is how it looks like:

```javascript
EASPM123
(
	autoLoad
	//Note: Next values can be set to null for default or use [] if you don't want any:
	linkClasses:strings_array,
	withoutNoSpamLabelClasses:strings_array,
	linkIDs:strings_array,
	withoutNoSpamLabelIDs:strings_array,
	textsToClear:strings_array,
	atSymbolAliases:strings_array,
	eventNames:strings_array //.
);
```	

The parameters accepted are the following ones:

| Parameter					| Type				| Default value							| Mandatory?| Description																																|
| --------------------------| ----------------- |-------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| autoLoad					| boolean			| true									| No		| If set to true, the script will be loaded automatically (the **run** method will not be needed to be called) when the document is ready.	|
| linkClasses				| array of strings	| ["easpm123"]							| No		| Class names used by the **<a>** tags (which contain a link to an email address) that will be affected.									|
| withoutNoSpamLabelClasses	| array of strings	| ["easpm123_label"]					| No		| Class names of the "_without-no-spam_" elements that will be removed.																		|
| linkIDs					| array of strings	| ["easpm123"]							| No		| IDs used by the **<a>** tags (which contain a link to an email address) that will be affected.											|
| withoutNoSpamLabelIDs		| array of strings	| ["easpm123_label"]					| No		| IDs used by the "_without-no-spam_" elements that will be removed.																		|
| textsToClear				| array of strings	| ["NO_SPAM_WELCOME"]					| No		| Texts to be cleared (case sensitive).																										|
| atSymbolAliases			| array of strings	| ["{*AT_HERE*}"]						| No		| Texts that will be replaced by the _AT_ (_@_) symbol.																						|
| eventNames				| array of strings	| ["mouseover", "click", "touchstart"]	| No		| Events that will fire the script. Use an empty array to do it automatically without events.												|

Note that, except for the first parameter (**autoLoad**), all the rest of parameter can accept the **null** value if we want to use their default value or can also accept an empty array (**[]** value) in the case that we do not want any value at all. In the case of the last parameter (**eventNames**), using an empty array will force the script to run its magic automatically (without having to fire any event).

If the **autoLoad** parameter is set to false, the **run** method will have to be called manually when desired. This method accepts the same parameters as the main object except the first one. Read below to see an example showing how to use it.

	
### Example 1 - Easiest way (not so safe), with just HTML: 

This way, any **<a>** tag whose **id** or **class** property is **easpm123**, will be affected. The default text to remove from the email will be "NO_SPAM_WELCOME" and the "{*AT_HERE*}" will be replaced by the _AT_ (_@_) symbol.

The text inside of the elements whose **id** or **class** property is **easpm123_label** will be removed automatically when the page loads.

The real email address will be shown when the user is over or click or taps the email link (the **<a>** tag described above).


#### HTML:
```html
	<a id="easpm123" href="mailto:email{*AT_HERE*}NO_SPAM_WELCOMEexample.com">email{*AT_HERE*}<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>example.com</a>
	<span id="easpm123_label">(without NO_SPAM_WELCOME)</span>
	(PUT THE MOUSE CURSOR OVER THE EMAILS OR CLICK/TAP THEM!)
```


### Example 2 - Very easy way (safer), with HTML and a bit of JavaScript:

#### HTML:

		

	


## Final comments

Following the instructions and some guidelines (included inside the package), the email addresses should be human-understandable even when JavaScript is disabled.

If you are tired of being spammed, you should try this little script (with an email address which spambots don't know yet!).


## License

Forbidden to use without keeping the author's name and copyright clauses. For non-commercial purposes only (unless you contact me and pay for a license).