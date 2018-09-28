EASPM123 (Email Anti-Spam 123) 
============================== 
by Joan Alba Maldonado (joanalbamaldonadoNO_SPAM_PLEASE AT gmail DOT com, without NO_SPAM_PLEASE)

An Easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

Version: 1.0 
- Date: 10th November 2015 (approximately)


## Description

An easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

It works in any browser with JavaScript support, even old ones (including Internet Explorer 5.0), offers different security options (very configurable) and it is just 2.57 KiB minified. If you want, you can easily configure it to be used with many languages at the same time.

Despite of this, this script should consider as a way to improve safety against spambots but not the unique method. A good anti-spam for your email (server or client) is still always recommended.


## Basic idea

The basic idea is to disguise the email address by modifying it using a text that will be removed by the script when the desired JavaScript events are fired (or, if desired, automatically when the document is loaded).

Most spambots will not fire those JavaScript events or, even if they did it, many of the times will not catch the email address after doing it but the previously-shown email address  (so they will end with a non-valid email address which includes the text that should have been removed).

The text to be removed should be human-understandable so that a human being could figure out the real email in the case that JavaScript was disabled or something failed. Under these circumstances, to help any human-being to figure out the real email address, this script uses the so-called "_without-no-spam_" elements which are elements containing the instructions that the human-being should follow to get the real email address. These "_without-no-spam_" elements will be removed automatically by the script if JavaScript is available.

As nowadays many spambots can already translate "_AT_" and "_DOT_" to _"@"_ and _"."_ respetively, to improve safety this script provides a way to translate any desired text to the _AT_ (_@_) symbol. The key here is to use a non-so-famous text that no spambot will understand at all.

There are different ways to use this script detailed below, some safer than others. Please, continue reading.



## Usage

The behaviour can be configured easily through the main (and unique) object the script uses (for more information, you can read the instructions in [README.htm](README.html)). But if you are lazy, although it would be less safe, you just need to include the .js file in your website and change the class name (or add to the current classes a new one) of the **&lt;a&gt;** elements containing the links to the emails (the class name should be "easpm123" by default).

In order to start using this API, the ".js" file you choose (for example, [easpm123_min.js](easpm123_min.js) which is already minified) must be included in your document. The most common way to do this is by using a **&lt;script&gt;** tag:
```html
<script src="easpm123_min.js" type="text/javascript" language="javascript"></script>
```

If we decide to use the main (and unique) object, this is how it looks like:

```javascript
EASPM123
(
	autoLoad,
	//Next values can be set to null to force using default ones or use
	//an empty array if you do not want any value at all:
	linkClasses,
	withoutNoSpamElementClasses,
	linkIDs,
	withoutNoSpamElementIDs,
	textsToClear,
	atSymbolAliases,
	eventNames
);
```	

The parameters accepted are the following ones:

| Parameter							| Type				| Default value							| Mandatory?| Description																																																																	|
| ---------------------------------	| ----------------- |-------------------------------------- | --------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **autoLoad**						| boolean			| true									| No		| If it is set to true, the script will be loaded automatically (the **run** method will not be needed to be called) when the document is ready. If it is set to false, all the rest of parameters will be ignored and they will need to be used in the **run** method instead.	|
| **linkClasses**					| array of strings	| ["easpm123"]							| No		| Class names used by the **&lt;a&gt;** tags (which contain a link to an email address) that will be affected.																																									|
| **withoutNoSpamElementClasses**	| array of strings	| ["easpm123_label"]					| No		| Class names of the "_without-no-spam_" elements that will be removed.																																																			|
| **linkIDs**						| array of strings	| ["easpm123"]							| No		| IDs used by the **&lt;a&gt;** tags (which contain a link to an email address) that will be affected.																																											|
| **withoutNoSpamElementIDs**		| array of strings	| ["easpm123_label"]					| No		| IDs used by the "_without-no-spam_" elements that will be removed.																																																			|
| **textsToClear**					| array of strings	| ["NO_SPAM_WELCOME"]					| No		| Texts to be removed (case sensitive) from the email address.																																																					|
| **atSymbolAliases**				| array of strings	| ["{*AT_HERE*}"]						| No		| Texts that will be replaced by the _AT_ (_@_) symbol.																																																							|
| **eventNames**					| array of strings	| ["mouseover", "click", "touchstart"]	| No		| Events that will fire the script. Those events will be attached to all affected **&lt;a&gt;** tags (which contain a link to an email address) and also to all the affected "_without-no-spam_" elements.  Use an empty array to run the script automatically without events.	|

Note that, except for the first parameter (**autoLoad**), all the rest of the parameters can accept the **null** value if we want to use their default value or can also accept an empty array (as for example the **[]** value) in the case that we do not want any value at all. In the case of the last parameter (**eventNames**), using an empty array will force the script to run its magic automatically without having to fire any event (not recommended as the safety would be decreased).

If the **autoLoad** parameter is set to false (not recommended), the rest of parameters will be ignored and the **run** method will have to be called manually when desired (always after the document has been loaded!). This method accepts the same parameters as the main object except the first one (it does not need the **autoLoad** parameter). Read below to see an example showing how to use it.

Have in mind that, as soon as the script is included, it will run itself once with the default options. We can run it again (through either the main object or the **run** method), if desired, after that.

The main object can only be used before the **onload** event of the **window** object is fired. If we want to run the script after that, we need to use the **run** method instead. In fact, the **run** method can only be used after the **onload** event of the **window** object is fired.

See the examples below for more information.

	
### Example #1 - Easiest way for the developer (not so safe), with just HTML: 

Note that, after the script is included, it immediately modifies the **onload** event of the **window** object (keeping any previous event, so it will not override anything) to execute itself after some milliseconds (it does not do it immediately to get rid of some spambots which will not have this into account). If, during the time between the inclusion of the script and the milliseconds (100 by default) before its executed itself, the **onload** event of the **window** object is overrided, this example will simply not work.

This way, any **&lt;a&gt;** tag whose **id** is **easpm123** or **class** property contains the **easpm123** class, will be affected. The default text to remove from the email will be "_NO_SPAM_WELCOME_" and the "{*AT_HERE*}" text will be replaced by the _AT_ (_@_) symbol.

The text inside of the elements whose **id** is **easpm123_label** or **class** property contains the **easpm123_label** class will be removed automatically when the page loads. These elements are called "_without-no-spam_" elements.

The real email address will be shown when the user is over or clicks or taps the email link (the **&lt;a&gt;** tag described above).


#### HTML:
```html
<!-- Using ID: -->
<a id="easpm123" href="mailto:email{*AT_HERE*}NO_SPAM_WELCOMEexample.com">email{*AT_HERE*}<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>example.com</a>
<span id="easpm123_label">(without NO_SPAM_WELCOME)</span>
<br />
<!-- Using class: -->
<a class="easpm123" href="mailto:email{*AT_HERE*}NO_SPAM_WELCOMEexample.com">email{*AT_HERE*}<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>example.com</a>
<span class="easpm123_label">(without NO_SPAM_WELCOME)</span>
```


### Example #2 - Easiest way for the user (very unsafe), with a bit of JavaScript and HTML:

This methods needs a little bit of JavaScript (using an empty array as the "_eventNames_" parameter) but will not need any event fired by the user. The users can be happier this way but some spambots will be too. Safety wise, this method is not recommended.

As we are using the main object, this must be run before the **onload** event of the **window** object is fired.

#### JavaScript:
```javascript
EASPM123(true, null, null, null, null, null, null, [] /* eventNames */);
```

#### HTML:
Use the same HTML code from the Example #1.


### Example #3 - Second easiest way for the user (still unsafe), with a bit of JavaScript and HTML:

This will be little bit safer than the Example #2 as we change default values by the desired ones. Different IDs and class names have been used just to show how it works.

As we are using the main object, this must be run before the **onload** event of the **window** object is fired.

#### JavaScript:
```javascript
EASPM123
(
	true, //autoLoad.
	["class_email_link", "class_email_link2"], //linkClasses.
	["class_without_no_spam_label", "class_without_no_spam_label2"], //withoutNoSpamElementClasses.
	["id_email_link", "id_email_link2"], //linkIDs.
	["id_without_no_spam_label", "id_without_no_spam_label2"], //withoutNoSpamElementIDs.
	["WITHOUT_THIS_TEXT", "TAKE_THIS_OUT"], //textsToClear
	["[PUT_AT_HERE]", "{HERE_AN_AT_SYMBOL}"], //atSymbolAliases.
	[] //eventNames.
);
```

#### HTML:
```html
<!-- Using ID: -->
<a id="id_email_link" href="mailto:email[PUT_AT_HERE]WITHOUT_THIS_TEXTexample.com">email[PUT_AT_HERE]<del style="text-decoration:line-through;"><s>WITHOUT_THIS_TEXT</s></del>example.com</a>
<span id="id_without_no_spam_label">(without NO_SPAM_WELCOME)</span>
<br />
<a id="id_email_link2" href="mailto:email[PUT_AT_HERE]WITHOUT_THIS_TEXTexample.com">email[PUT_AT_HERE]<del style="text-decoration:line-through;"><s>WITHOUT_THIS_TEXT</s></del>example.com</a>
<span id="id_without_no_spam_label2">(without NO_SPAM_WELCOME)</span>
<br />
<!-- Using class: -->
<a class="class_email_link" href="mailto:email{HERE_AN_AT_SYMBOL}TAKE_THIS_OUTexample.com">email{HERE_AN_AT_SYMBOL}<del style="text-decoration:line-through;"><s>TAKE_THIS_OUT</s></del>example.com</a>
<span class="class_without_no_spam_label">(without NO_SPAM_WELCOME)</span>
<br />
<a class="class_email_link2" href="mailto:email{HERE_AN_AT_SYMBOL}TAKE_THIS_OUTexample.com">email{HERE_AN_AT_SYMBOL}<del style="text-decoration:line-through;"><s>TAKE_THIS_OUT</s></del>example.com</a>
<span class="class_without_no_spam_label2">(without NO_SPAM_WELCOME)</span>
```


### Example #4 - Not-so-easy way (safer), with a bit more of JavaScript and HTML:

This is like the Example #3 but only firing the script under the default events (onmouseover, onclick and ontouchstart) and not automatically.

As we are using the main object, this must be run before the **onload** event of the **window** object is fired.

#### JavaScript:
```javascript
EASPM123
(
	true, //autoLoad.
	["class_email_link", "class_email_link2"], //linkClasses.
	["class_without_no_spam_label", "class_without_no_spam_label2"], //withoutNoSpamElementClasses.
	["id_email_link", "id_email_link2"], //linkIDs.
	["id_without_no_spam_label", "id_without_no_spam_label2"], //withoutNoSpamElementIDs.
	["WITHOUT_THIS_TEXT", "TAKE_THIS_OUT"], //textsToClear
	["[PUT_AT_HERE]", "{HERE_AN_AT_SYMBOL}"], //atSymbolAliases.
);
```

#### HTML:
Use the same HTML code from the Example #3.


### Example #5 - A little-bit-more-difficult way (a bit safer), with more JavaScript and HTML:

This is like the Example #4 but using the **run** method instead of the main object. So instead of running the script automatically we will do it manually.

Note that the main object must be used before the **onload** event of the **window** object is fired but the **run** method must be run after that.

For safety purposes, the main object waits by default 100 milliseconds before it runs the script automatically. In this example we will wait a little bit more to add even more safety.


#### JavaScript:
```javascript
setTimeout
(
	function()
	{
		EASPM123.run
		(
			["class_email_link", "class_email_link2"], //linkClasses.
			["class_without_no_spam_label", "class_without_no_spam_label2"], //withoutNoSpamElementClasses.
			["id_email_link", "id_email_link2"], //linkIDs.
			["id_without_no_spam_label", "id_without_no_spam_label2"], //withoutNoSpamElementIDs.
			["WITHOUT_THIS_TEXT", "TAKE_THIS_OUT"], //textsToClear
			["[PUT_AT_HERE]", "{HERE_AN_AT_SYMBOL}"], //atSymbolAliases.
			[]
		);
	},
	300
);
```

#### HTML:
Use the same HTML code from the Example #3.		


## Improving safety

To improve the safety and get rid of the as many spambots as possible I recommend the following:

1. Do not fire the script automatically (without needing events). So, do not do as the Example #2 or Example #3.

2. Do not use the default values for the text which replaces _AT_ (_@_) symbol. Use your imagination to invent new ones. Look at the Example #4.

3. Do not use the default values for the text which should be removed from the email address. Use your imagination to invent new ones. Look at the Example #4.

4. Do not use the default values for the classes or IDs (for both, **&lt;a&gt;** elements and the "_without-no-spam_" elements) and use your own ones. Look at the Example #4.

5. Use the **run** method instead of the main object and call it some milliseconds after the **onload** event of the **window** object is fired. Look at the Example #5.

6. Images or other elements instead of text can be used inside the "_without-no-spam_" elements to make it harder for the spambots to figure out the email address.

7. You can consider about using other events instead of the default ones to fire the script that could maybe improve safety.

8. If you are paranoid enough, you can consider using different ways to obfuscate the strings in the arrays used in the optional parameters and also use other ways of obfuscating. Again, use your own imagination.


## Final comments

Following the instructions and some guidelines (included inside the package), the email addresses should be human-understandable even when JavaScript is disabled.

If you are tired of being spammed, you should try this little script (with an email address which spambots don't know yet!).


## License

Forbidden to use without keeping the author's name and copyright clauses. For non-commercial purposes only (unless you contact me and pay for a license).