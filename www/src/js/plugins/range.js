
'use strict';

let my_instance;

class MyRange {
  constructor() {
  }
  static newInstance() {
    if (my_instance === undefined)
    {
        my_instance = new MyRange();
    }
    return my_instance;
  }
  run() {
		var range = {
			init: function () {
				var cur = 0;
				var range_state = true;
				var num = $("ul.range_type li").size();
				var pagecur = 0;
				$(".range_box").eq(0).addClass("pt-page-current");
				$("ul.range_type li").each(function (index, element) {
					$(this).attr("data-num", index);
				});
				$("ul.range_type li").click(function () {
					if ($(this).hasClass("itemcur")) {} else {
						if (range_state == true) {
							range_state = false;
							var prev_num = $(".itemcur").attr("data-num");
							var click_num = $(this).attr("data-num");
							pagecur = click_num;
							var inclass;
							var outclass;
							if (click_num > prev_num) {
								inclass = "a_page_moveFromBottom pt-page-current pt-page-ontop";
								outclass = "a_page_scaleDown";
							} else {
								inclass = "a_page_moveFromTop pt-page-current pt-page-ontop";
								outclass = "a_page_scaleDown";
							}
							$(".range_type li").removeClass("itemcur");
							$(".range_type li").eq(click_num).addClass("itemcur");
							$(".range_box").eq(prev_num).addClass(outclass);
							$(".range_box").eq(click_num).addClass(inclass);
							setTimeout(function () {
								$(".range_box").eq(prev_num).attr("class", "range_box");
								$(".range_box").eq(click_num).attr("class", "range_box pt-page-current");
								range_state = true;
							}, 1000);
						}
					}
				});
				$('.range_cont').bind('mousewheel', function (event, delta) {
					event.preventDefault();
					if (delta > 0) {
						if (range_state == true && pagecur > 0) {
							pagecur--;
							$("ul.range_type li").eq(pagecur).click();
						}
					} else {
						if (range_state == true && pagecur < num-1) {
							pagecur++;
							$("ul.range_type li").eq(pagecur).click();
						}
					}
				});
			}
		}
		range.init();
  }
}

module.exports = MyRange;
