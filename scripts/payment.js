(function(window) {
  'use strict';
  var FORM_SELECTOR = "[data-payment=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function thanks(data) {
    var $div = $("<div></div>", {
      id: "ex1",
      'class': "modal"
    });

    var $p = $("<p></p>");
    var $a = $("<a></a>", {
      href: "#",
      hi
      rel: "modal:close"
    });
    var thanks = "Thank you for your payment, ";
    if (data.title) {
      thanks += data.title;
    }
    thanks += " " + data.username + ". ";

    $a.append("Close");
    $p.append(thanks)
      .append($a);
    $div.append($p)
      .modal();
  });

})(window);
