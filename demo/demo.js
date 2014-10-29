/**
 * Demo JS for fontIconPicker
 */
jQuery(document).ready(function($) {

	/**
	 * Example 4
	 * Load from INPUT text field with categorized source
	 */
	$('.vc-iconpicker').vcFontIconPicker({
		iconsPerPage: 50,
		iconDownClass: 'fa fa-arrow-down',
		iconUpClass: 'fa fa-arrow-up',
		iconLeftClass: 'fa fa-arrow-left',
		iconRightClass: 'fa fa-arrow-right',
		iconSearchClass: 'fa fa-search',
		iconCancelClass: 'fa fa-remove',
		iconBlockClass: 'fa fa-minus-circle'
	});

});
