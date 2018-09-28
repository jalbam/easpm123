EASPM123 (Email Anti-Spam 123) 
============================== 
by Joan Alba Maldonado (joanalbamaldonadoNO_SPAM_PLEASE AT gmail DOT com, without NO_SPAM_PLEASE)

An Easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

Version: 1.0 
- Date: 10th November 2015 (approximately)


## Description

An Easy-to-use JavaScript API that protects any email address you want to use in your website from spambots.

It works in any browser with JavaScript support, even old ones (including Internet Explorer 5.0), offers different security options (very configurable) and it is just 2.57 KiB minified. If you want, you can easily configure it to be used with many languages at the same time.


## Usage

The behaviour can be configured easily through the main (and unique) object the script uses (read the instructions). But if you are lazy, although it would be less safe, you just need to include the .js file in your website and change the class name (or add to the current classes a new one) of the A elements containing the links to the emails (the class name should be "easpm123" by default).

In order to start using this API, the ".js" file you choose (for example, [easpm123_min.js](easpm123_min.js)) must be included in your document. The most common way, by using a _<SCRIPT>_ tag:
	```
	<script src="easpm123_min.js" type="text/javascript" language="JavaScript"></script>
	```

	
### Example 1 - Easiest way (not so safe), with just HTML: 

#### HTML:
	```
		<a id="easpm123" href="mailto:email@NO_SPAM_WELCOMEexample.com">email@<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>example.com</a>
		<span id="easpm123_label">(without NO_SPAM_WELCOME)</span>
		(PUT THE MOUSE CURSOR OVER THE EMAILS OR CLICK/TAP THEM!)
	```



## Final comments

Following the instructions and some guidelines (included inside the package), the email addresses should be human-understandable even when JavaScript is disabled.

If you are tired of being spammed, you should try this little script (with an email address which spambots don't know yet!).


## License

Forbidden to use without keeping the author's name and copyright clauses. For non-commercial purposes only (unless you contact me and pay for a license).