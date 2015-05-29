;(function ($) {

	'use strict';

	$.metalPagination = function(el, options) {

		var base = this;		
		
		base._o  = $.extend({}, $.metalPagination.defaults, options);
		base._$e = $(el);
		base._e  = el;

		//base.selector = base._e.selector;
		console.log(base._$e);
		// get child element to paginate
		// if did't provide, then get its children
		// if provided, then find the children 
		// by using selector provided in
		// option base._o.pagingElement
		// !!!!!!! must check either class only acceptable !!! after thisss
		base.pagingElement = (base._o.pagingElement === 'null') ? base._$e.children() : base._$e.find(base._o.pagingElement);


		var arrElement = [];
		var pagingNumberWrapper = $('<div/>');



		base._$e.data('metalPagination', base);

		base.init = function() {
			
			if (base.checkLimit()) {
				console.log("Option Name : limit, To solve : Change value into integer");
				return true;
			}


		}

		base.checkLimit = function() {

			var typeOfLimit = base._o.limit.toString().match(/[.]/);
			return (typeOfLimit) ? true : false;
		}
			
		base.countChild = function() {

			var totalToDisplay;
			var isFloat;
			
			totalToDisplay = (base._$e.children().length/base._o.limit);
			isFloat = totalToDisplay.toString().match(/[.]/);
			
			if (isFloat) {
				var numberToString = totalToDisplay.toString();
				var numBeforeDot   = +numberToString.charAt(0);
				var numAfterDot    = +numberToString.substr(isFloat.index + 1, 1);
				
				if (numAfterDot < 5)
					totalToDisplay = numBeforeDot + 1;
				else
					totalToDisplay = Math.round(totalToDisplay);
			} else {
				totalToDisplay = 1;
			}
			
			return totalToDisplay;
		}

		base.cacheElement = function() {


		}
			
	};

	$.metalPagination.defaults = {

		limit : 5,
		pagingElement : 'null',
		pagingNumberPosition : 'null'
	}

	$.fn.metalPagination = function(options) {

		return this.each(function() {

			var mp = new $.metalPagination(this, options);

			// if init function returned true,
			// then stop execution of code
			// To solve : change the limit into number
			if(mp.init()) return;

			
			
		});
	};
})(jQuery);