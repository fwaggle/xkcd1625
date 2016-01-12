walk(document.body);

function walk(node) 
{
	// Stolen from cloud-to-butt, also here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var words={
		'debate': 'dance-off',
		'self driving': 'Uncontrollably swerving',
		'self-driving': 'Uncontrollably swerving',
		'poll': 'Psychic reading',
		'candidate': 'Airbender',
		'drone': 'Dog',
		'vows to': 'probably won\'t',
		'at large': 'very large',
		'successfully': 'suddenly',
		'expands': 'physically expands',
		'first-degree': 'friggin\' awful',
		'second-degree': 'friggin\' awful',
		'third-degree': 'friggin\' awful',
		'an unknown number': 'like hundreds',
		'front runner': 'blade runner',
		'frontrunner': 'blade runner',
		'global': 'spherical',
		'years': 'minutes',
		'no indication': 'lots of signs',
		'urged restraint by': 'drunkenly egged on',
		'horsepower': 'Tons of horsemeat',
		'horse power': 'Tons of horsemeat'
	};

	for (var key in words) {
		if (words.hasOwnProperty(key)) {
			var re = new RegExp(key, 'gi');
			v = v.replace(re, words[key]);
		}
	};
	
	textNode.nodeValue = v;
}

