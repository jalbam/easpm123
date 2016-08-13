//
//	(c) Copyright - EASPM123 (Email Anti-Spam 123) 1.0 by Joan Alba Maldonado
//		- Email: joanalbamaldonadoNO_SPAM_WELCOME{*AT*}gmail{*DOT*}com (without "NO_SPAM_WELCOME")
//		- Forbidden to use without keeping the author's name and copyright clauses
//		- For non-commercial purposes only (unless you contact me and pay for a license)
//
//* Using classes (to use more than one class at the same time, separate them by a blank space):
//
//	<a href="mailto:emailNO_SPAM_WELCOME@example.com" class="easpm123">
//		email<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>{*AT_HERE*}example.com
//	</a>
//	<!-- The following is optional but recommended (just in case JavaScript is disabled): -->
//	<span class="easpm123_label">
//		(without NO_SPAM_WELCOME and replacing {*AT_HERE*} by @)
//		<!-- Note: any text, image or content can be used. JavaScrpt will hidde it. -->
//	</span>
//
//
//* Using IDs (remember that every ID should be unique):
//
//	<a href="mailto:emailNO_SPAM_WELCOME@example.com" id="easpm123">
//		email<del style="text-decoration:line-through;"><s>NO_SPAM_WELCOME</s></del>{*AT_HERE*}example.com
//	</a>
//	<!-- The following is optional but recommended (just in case JavaScript is disabled): -->
//	<span id="easpm123_label">
//		(without NO_SPAM_WELCOME and replacing {*AT_HERE*} by @)
//		<!-- Note: any text, image or content can be used. JavaScrpt will hidde it. -->
//	</span>
//
//* NOTE: Classes, IDs and NO_SPAM_WELCOME text can be modified altering the corresponding arrays.
//* NOTE 2: NO_SPAM_WELCOME text can be placed anywhere, but at the beginning or at the end is not recommended.
//* NOTE 3: The use of DEL, S or STRIKE tag is optional (for maximum protection, use CSS line-through instead ONLY).
//* NOTE 4: Some old browsers are case sensitive so use always lower case letters for both IDs and class names.
//* NOTE 5:	To be safer, use NO_SPAM_WELCOME text (or any you desire) in the user part (not in the server one).
//			To be even safer, use a different text in both parts (user and domain):
//				exampleDELETE_THIS@NO_SPAM_WELCOME.com
//			It is recommended to change NO_SPAM_WELCOME text for another one which is personalized.
//* NOTE 6: Do not forget to translate NO_SPAM_WELCOME_TEXT, AT_TEXTS and labels to support all languages.
//
//* JavaScript main object usage (all parameters are arrays of strings):
//	EASPM123([autoLoad], [emailClasses], [labelClasses], [emailIds], [labelIds], [noSpamTexts], [atTexts], [events]);
//
//* JavaScript main method usage (all parameters are arrays of strings):
//	EASPM123.run([emailClasses], [labelClasses], [emailIds], [labelIds], [noSpamTexts], [atTexts], [events]);
//


var EASPM123 = function(autoLoad, emailClasses, labelClasses, emailIds, labelIds, noSpamTexts, atTexts, events)
{
	//Configuration variables (caution: some old browsers are case sensitive so use always lower case letters):
	var EMAIL_CLASSES = ["easpm123"]; //Classes used by A tags.
	var LABEL_CLASSES = ["easpm123_label"]; //Classes used by without-no-spam label tags.
	var EMAIL_IDS = ["easpm123"]; //IDs used by A tags.
	var LABEL_IDS = ["easpm123_label"]; //IDs used by without-no-spam label tags.
	var NO_SPAM_TEXTS = ["NO_SPAM_WELCOME"]; //Texts to be cleared (case sensitive).
	var AT_TEXTS = ["{*AT_HERE*}"]; //Texts that will be replaced by AT (@) symbol.
	var EVENTS = ["mouseover", "click", "touchstart"]; //Events that will fire the script (leave it empty to do it automatically without events).
	
	
	//In case we wanted, processes the script when the page loads:
	if (typeof(autoLoad) === "undefined" || autoLoad === null) { autoLoad = true; } //Auto-loads by default.
	if (autoLoad)
	{
		setEvent(
			window,
			"load",
			function()
			{
				setTimeout(
					function()
					{
						EASPM123.run(emailClasses, labelClasses, emailIds, labelIds, noSpamTexts, atTexts, events);
					}, 100); //Using a setTimeout is a bit safer (some spam bots supporting JavaScript don't wait).
			}
		);
	}

	
	//Function that processes the script:
	EASPM123.run = function(emailClasses, labelClasses, emailIds, labelIds, noSpamTexts, atTexts, events)
	{
		//If not defined, uses default parameters:
		emailClasses = emailClasses || EMAIL_CLASSES;
		labelClasses = labelClasses || LABEL_CLASSES;
		emailIds = emailIds || EMAIL_IDS;
		labelIds = labelIds || LABEL_IDS;
		noSpamTexts = noSpamTexts || NO_SPAM_TEXTS;
		atTexts = atTexts || AT_TEXTS;
		events = events || EVENTS;

		//Processes all email elements with the desired classes:
		elementsIdClass(emailClasses, true, processEmail, events, noSpamTexts, atTexts);
		
		//Processes all email elements with the desired IDs:
		elementsIdClass(emailIds, false, processEmail, events, noSpamTexts, atTexts);
		
		//Processes all label elements with the desired classes:
		elementsIdClass(labelClasses, true, processLabel);
		
		//Processes all label elements with the desired IDs:
		elementsIdClass(labelIds, false, processLabel);
	}


	//Function that returns all elements corresponding to a list of classes or IDs:
	function elementsIdClass(array, isClass, processFunction, events, parameter1, parameter2)
	{
		if (typeof(isClass) === "undefined" || isClass === null) { isClass = false; }
		if (typeof(processFunction) !== "function") { processFunction = function() {}; }
		if (typeof(events) === "undefined" || typeof(events.length) === "undefined") { events = []; }
		
		//var elements = [];
		
		var arrayLength = array.length;
		var elementsLoop;
		var elementsLoopLength;
		for (var x = 0; x < arrayLength; x++)
		{
			//If we are looking by class:
			if (isClass)
			{
				//Gets all elements with the current class and stores them:
				elementsLoop = elementsClass(array[x]);
				if (elementsLoop !== null)
				{
					elementsLoopLength = elementsLoop.length;
					for (var y = 0; y < elementsLoopLength; y++)
					{
						//elements[elements.length] = elementsLoop[y];
						if (events.length === 0)
						{
							processFunction(elementsLoop[y], parameter1, parameter2);
						}
						else
						{
							setEvents(elementsLoop[y], events, processFunction, parameter1, parameter2);
						}
					}
				}
			}
			//...otherwise, if we are looking by ID:
			else
			{
				//Gets the current element by ID and stores it:
				elementsLoop = document.getElementById(array[x]);
				if (elementsLoop !== null)
				{
					//elements[elements.length] = elementsLoop;
					if (events.length === 0)
					{
						processFunction(elementsLoop, parameter1, parameter2);
					}
					else
					{
						setEvents(elementsLoop, events, processFunction, parameter1, parameter2);
					}
				}
			}
		}
		
		//return elements;
	}

	
	//Function that sets desired events (in an array) for an element:
	function setEvents(element, events, eventFunction, parameter1, parameter2)
	{
		var eventsLength = events.length;
		for (var x = 0; x < eventsLength; x++)
		{
			setEvent(element, events[x], function() { eventFunction(element, parameter1, parameter2); });
		}
	}
	

	//Function that sets a desired event for an element:
	function setEvent(element, event, eventFunction)
	{
		event = trim(event).toLowerCase();
		var eventFunctionBackup = element["on" + event];
		element["on" + event] =
			function(e)
			{
				if (typeof(eventFunctionBackup) !== "undefined") { try { eventFunctionBackup(e); } catch (E) {} }
				eventFunction(e);
			};
	}
	
	
	//Function that processes an email element:
	function processEmail(element, noSpamTexts, atTexts)
	{
		//If the element exists:
		if (element !== null)
		{
			var textBackup = clearEmail(getText(element), noSpamTexts, atTexts); //IE fix.
			
			//Replaces the text in the HREF element (if any):
			element.href = clearEmail(element.href, noSpamTexts, atTexts);
			
			//Replaces the innerHTML text (if any):
			setText(element, textBackup);
			//element.innerHTML = textBackup;
		}
	}


	//Function that processes a label element:
	function processLabel(element)
	{
		//If the element exists:
		if (element !== null)
		{
			//Makes it disappear:
			element.style.visibility = "hidden";
			element.style.display = "none";
		}
	}


	//Strips desired texts and replaces AT texts by AT symbol (@):
	function clearEmail(string, noSpamTexts, atTexts)
	{
		//Casts the string:
		string += "";
		
		//Loops through all desired texts:
		var noSpamTextsLength = noSpamTexts.length;
		for (var x = 0; x < noSpamTextsLength; x++)
		{
			//Replaces the desired text for an empty string:
			string = string.replace(noSpamTexts[x], "");
		}

		//Loops through all desired texts:
		var atTextsLength = atTexts.length;
		for (var x = 0; x < atTextsLength; x++)
		{
			//Replaces the desired text for an empty string:
			string = string.replace(atTexts[x], "@");
		}
		
		//Returns the string:
		return string;
	}


	//Returns either textContent or innerText of an element:
	function getText(element)
	{
		if (typeof(element.textContent) !== "undefined")
		{
			return element.textContent;
		}
		else if (typeof(element.innerText) !== "undefined")
		{
			return element.innerText;
		}
		/* Commented to make it compatible with some browser extensions that disallow innerHTML usage:
		else if (typeof(element.innerHTML) !== "undefined")
		{
			return element.innerHTML;
		}
		*/
		return "";
	}


	//Replaces or adds contents to the textContent or innerText of an element:
	function setText(element, text, add)
	{
		if (typeof(add) === "undefined" || add === null) { add = false; }
		if (typeof(element) === "undefined" || element === null) { return; }
		
		text += ""; //Parses to string.
		//text = text.replace(/&nbsp;/g, " ");
	
		if (typeof(element.textContent) !== "undefined")
		{
			element.textContent = (add) ? element.textContent + text : text;
		}
		else if (typeof(element.innerText) !== "undefined")
		{
			element.innerText = (add) ? element.innerText + text : text;
		}

		/* Commented to make it compatible with some browser extensions that disallow innerHTML usage:
		else if (typeof(element.innerHTML) !== "undefined")
		{
			element.innerHTML += (add) ? element.innerHTML + text : text;
		}
		*/
	}


	//Function for those old browsers without getElementsByClassName:
	function elementsClass(className)
	{
		className = trim(className).toLowerCase();
		if (className === "") { return []; }
		
		var elements = [];
		
		if (typeof(document.getElementsByClassName) !== "undefined" && document.getElementsByClassName !== null)
		{
			elements = document.getElementsByClassName(className);
		}
		else if (typeof(document.querySelectorAll) !== "undefined" && document.querySelectorAll !== null)
		{
			elements = document.querySelectorAll("." + className);
		}
		else
		{
			var allElements = elementsTag("*");
			allElementsLength = allElements.length;
			if (allElementsLength > 0)
			{
				elements = [];
				var elementCurrent;
				var classes;
				var classesLength;
				for (var x = 0; x < allElementsLength; x++)
				{
					elementCurrent = allElements[x];
					if (elementCurrent !== null)
					{
						classes = elementCurrent.className.split(" ");
						classesLength = classes.length;
						for (var y = 0; y < classesLength; y++)
						{
							classes[y] = trim(classes[y]).toLowerCase();
							if (classes[y] === className)
							{
								elements[elements.length] = elementCurrent;
								break;
							}
						}
					}
				}
			}
		}
		
		return elements;
	}


	//Function for those old browsers without getElementsByTagName:
	function elementsTag(tagName)
	{
		//If no tag name is sent, uses "*" (all) by default:
		if (typeof(tagName) === "undefined" || tagName === null || trim(tagName) === "") { tagName = "*"; }
		tagName = trim(tagName).toLowerCase();

		if (typeof(document.getElementsByTagName) !== "undefined" && document.getElementsByTagName !== null)
		{
			var elements = document.getElementsByTagName(tagName);
			if (tagName === "*" && elements.length === 0 && typeof(document.all) !== "undefined" && document.all !== null)
			{
				elements = document.all;
			}
			return elements;
		}
		else if (typeof(document.querySelectorAll) !== "undefined" && document.querySelectorAll !== null)
		{
			return document.querySelectorAll(tagName);
		}
		else if (typeof(document.all) !== "undefined" && document.all !== null)
		{
			if (tagName === "*")
			{
				return document.all;
			}
			else
			{
				return document.all.tags(tagName);
			}
		}
		else if (document.layers)
		{
			var allElements = document.layers;
			
			//If we want all elements, then we get all of them:
			if (tagName === "*") { return allElements; }
			//...otherwise, obtains all elements with the given tag name:
			else
			{
				//If any elements were obtained, we select just the ones with the desired tag name:
				allElementsLength = allElements.length;
			
				var elements = [];
				var elementCurrent;
				for (var x = 0; x < allElementsLength; x++)
				{
					elementCurrent = allElements[x];
					if (elementCurrent !== null && typeof(elementCurrent.tagName) !== "undefined")
					{
						if (trim(elementCurrent.tagName).toLowerCase() === tagName)
						{
							elements.push(elementCurrent);
						}
					}
				}
				//elements = baseElement.layers[tagName];
				return elements;
			}
		}
		else
		{
			return [];
		}
	}


	//Trims a string:
	function trim(string)
	{
		//Changes undefined, null or false values to empty strings:
		if (typeof(string) === "undefined" || string === null || !string) { string = ""; }

		//Parses the variable to string type:
		string += "";

		//If the string is already empty, we return it:
		if (string === "") { return string; }
		
		//Trims spaces at the beginning:
		while (string.substring(0, 1) === " ")
		{
			string = string.substring(1, string.length);
		}
			
		//Trims spaces at the end:
		while (string.substring(string.length - 1, string.length) === " ")
		{
			string = string.substring(0, string.length - 1);
		}
		
		return string;
	}
};


//Loads the script automatically:
EASPM123();