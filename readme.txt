(c) Copyright - EASPM123 (Email Anti-Spam 123) 1.0 by Joan Alba Maldonado
	- Email: joanalbamaldonadoNO_SPAM_WELCOME{*AT*}gmail{*DOT*}com (without "NO_SPAM_WELCOME")
	- Forbidden to use without keeping the author's name and copyright clauses
	- For non-commercial purposes only (unless you contact me and pay for a license)


* Using classes (to use more than one class at the same time, separate them by a blank space):

	<a href="mailto:emailNO_SPAM_WELCOME@example.com" class="easpm123">
		email<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>{*AT_HERE*}example.com
	</a>
	<!-- The following is optional but recommended (just in case JavaScript is disabled): -->
	<span class="easpm123_label">
		(without NO_SPAM_WELCOME and replacing {*AT_HERE*} by @)
		<!-- Note: any text, image or content can be used. JavaScrpt will hidde it. -->
	</span>


* Using IDs (remember that every ID should be unique):

	<a href="mailto:emailNO_SPAM_WELCOME@example.com" id="easpm123">
		email<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>{*AT_HERE*}example.com
	</a>
	<!-- The following is optional but recommended (just in case JavaScript is disabled): -->
	<span id="easpm123_label">
		(without NO_SPAM_WELCOME and replacing {*AT_HERE*} by @)
		<!-- Note: any text, image or content can be used. JavaScrpt will hidde it. -->
	</span>

* NOTE: Classes, IDs and NO_SPAM_WELCOME text can be modified altering the corresponding arrays.
* NOTE 2: NO_SPAM_WELCOME text can be placed anywhere, but at the beginning or at the end is not recommended.
* NOTE 3: The use of DEL, S or STRIKE tag is optional (for maximum protection, use CSS line-through instead ONLY).
* NOTE 4: Some old browsers are case sensitive so use always lower case letters for both IDs and class names.
* NOTE 5:	To be safer, use NO_SPAM_WELCOME text (or any you desire) in the user part (not in the server one).
			To be even safer, use a different text in both parts (user and domain):
				exampleDELETE_THIS@NO_SPAM_WELCOME.com
			It is recommended to change NO_SPAM_WELCOME text for another one which is personalized.
* NOTE 6: Do not forget to translate NO_SPAM_WELCOME_TEXT, AT_TEXTS and labels to support all languages.

* JavaScript main object usage (all parameters are arrays of strings):
	EASPM123([autoLoad], [emailClasses], [labelClasses], [emailIds], [labelIds], [noSpamTexts], [atTexts], [events]);

* JavaScript main method usage (all parameters are arrays of strings):
	EASPM123.run([emailClasses], [labelClasses], [emailIds], [labelIds], [noSpamTexts], [atTexts], [events]);