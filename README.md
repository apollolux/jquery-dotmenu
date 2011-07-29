# Preamble

This is a [jQuery](http://www.jquery.com) plugin for transforming an unordered list of links into a stylized circular fan menu! The plugin's default settings are optimized for integration with [jQuery-UI](http://www.jqueryui.com). I call the plugin jqDot, though jqDotMenu can also be a common name for it as well.

The original non-jQuery Dot Menu can be found at http://web.archive.org/web/20090525042418/http://www.dhtmlcentral.com/script/script26_demo.html .

# Installation

0. Get the latest jQuery (and optionally, jQuery-UI); this was developed using 1.6.2, but there may possibly be ways to make it work in an earlier version. If you feel like making that happen, fork it and send me a request!
1. Get the JS file and the default CSS file that goes with it. Put them in a location that's accessible by your intended webpage.
2. Reference the files in your page.
3. Follow the usage instructions below!

# Usage

The plugin is designed to operate on an unordered list of links, marked up like the following:

	<ul class='jqdm'>
		<li>
			<a href='#'>Root Node</a>
			<ul>
				<li><a href='somepage.html'>Leaf, goes somewhere</a></li>
				<li>
					<a href='#'>Branch, has more leaves</a>
					<ul>
						<!-- etc, etc, etc -->
					</ul>
				</li>
			</ul>
		</li>
	</ul>

The recommended class for your root `UL` element is `jqdm`, as the default stylesheet uses that as its selector, though as long as your stylesheet contains the necessary transformations (ie, change `.jqdm` to your new selector in your CSS file) it could be whatever you want/need it to be. Also, by default jqDot uses jQuery-UI friendly class names for node icons, so ideally you'd include jQuery-UI into your webpage as well; these are configurable, though make sure the chosen classes are styled.

Call the menu in your `$(document).ready` like the following:

	$(function(){
		// ... stuff before ...
		$(yourMenuSelector).dotMenu(options);
		// ... stuff after
	});

`yourMenuSelector` is a jQuery selector to the menu's root `UL` element. `options` is an object containing any or all of the options defined below.

# Options

<dl>
	<dt>int radius</dt>
		<dd>the starting radius of the fan menu in pixels; default is 400</dd>
	<dt>float angle</dt>
		<dd>the starting rotation angle of the root menu in degrees; default is 90</dd>
	<dt>int speed</dt>
		<dd>the speed of the menu's animations in milliseconds; default is 300, and lower values = faster animations</dd>
	<dt>string/function easing</dt>
		<dd>the easing function to use for the menu's animations; default is 'swing' and accepts any easing values predefined in jQuery-UI or the jQuery Easing plugin (may possibly accept custom easing functions, but I haven't tried that myself)</dd>
	<dt>function click(selector, targetElement)</dt>
		<dd>an extra function that executes on clicking a leaf before navigation happens; default is an empty function</dd>
	<dt>string caption</dt>
		<dd>the class name to assign to dynamically replaced text captions; default is 'jqdm-cap'</dd>
	<dt>string hover</dt>
		<dd>the class name to assign to hovered menu elements; default is the jQuery-UI friendly class name 'ui-state-hover'</dd>
	<dt>string leaf</dt>
		<dd>the class name to assign to the icon of menu elements that do not have any sub-menus; default is the jQuery-UI friendly class name 'ui-icon-document'</dd>
	<dt>string open</dt>
		<dd>the class name to assign to the icon of active menu elements that have sub-menus; default is the jQuery-UI friendly class name 'ui-icon-folder-open'</dd>
	<dt>string closed</dt>
		<dd>the class name to assign to the icon of inactive menu elements that have sub-menus; default is the jQuery-UI friendly class name 'ui-icon-folder-collapsed'</dd>
</dl>
