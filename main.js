let autofiremenu = true;

function toggleMenu($menu) {
  console.log("tok");
  let osl = $menu.offset().left;
  let ost = $menu.offset().top - window.pageYOffset;
  if ($menu.hasClass("active")) {
    // gotta hide this stuff!
    $menu.removeClass("active");
    $menu.closest(".item").removeClass("activeitem");

    setTimeout(function () {
      $menu.find("i").text("menu");
    }, 250);
  } else {
    // build an amazing menu
    var x = ($(window).width() / 2) * -1;
    var y = $(window).height() / 3;
    x = x - 100;
    y = y - 100;
    document.querySelector(":root").style.setProperty("--menux", x + "px");
    document.querySelector(":root").style.setProperty("--menuy", y + "px");
    $menu.addClass("active");
    $menu.closest(".item").addClass("activeitem");
    setTimeout(function () {
      $menu.find("i").text("close");
    }, 250);
  }
}
function loadActions() {
  $("body")
    .off("click", ".menu > i")
    .on("click", ".menu > i", function () {
      toggleMenu($(this).closest(".menu"));
    })
    .off("click", ".links a")
    .on("click", ".links a", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      var thiscolor = $(this).attr("color");
      document.querySelector(":root").style.setProperty("--bgcolor", thiscolor);
      var thisline = $(this).attr("href");
      $("section.activesection").removeClass("activesection");
      $('section[address="' + thisline + '"]').addClass("activesection");
    });
}
$(function () {
  loadActions();
  if (autofiremenu == true) {
    // remove for standard operation
    setTimeout(function () {
      toggleMenu($(".menu"));
    }, 1500);
    // remove for standard operation
  }
});
