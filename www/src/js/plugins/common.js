
'use strict';

let my_instance;

class MyCommon {
  constructor() {
  };
  static newInstance() {
    if (my_instance === undefined)
    {
        my_instance = new MyCommon();
    }
    return my_instance;
  };
  home_run() {
    var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var b = parseInt(a)-65;
    $(".about_us").height(b);
    $(".about_us .container").height(b);
    $(".comparss-opcity").height(b);
    $(".service").height(b);

  };
  about_run(){
    var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var b=parseInt(a)-65;
    $(".about-us").height(b);
  }
  contact_run(){
    var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var b=parseInt(a)-65;
    $(".contact-us-cont").height(b);
  }
  hidden_overflow() {
    $(document.body).css("overflow","hidden");
  };
  auto_overflow_y() {
    $(document.body).css("overflow-y","auto");
  };
}

module.exports = MyCommon;
