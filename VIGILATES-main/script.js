window.onscroll = function() {smallFunction(), hideArrowFunction(), blurFunction() };

function smallFunction() {

    if (document.body.scrollTop > 100) {
      document.getElementById("logo").style.width = "20%";
      document.getElementById("logo").style.height = "10%";
      document.getElementById("logo").style.paddingTop = "0%";
      document.getElementById("home").style.height = "10%";
      document.getElementById("home").style.width = "3%";
    } else {
      document.getElementById("logo").style.width = "30%";
      document.getElementById("logo").style.height = "20%";
      document.getElementById("logo").style.paddingTop = "0%";
      document.getElementById("home").style.height = "20%";
      document.getElementById("home").style.width = "4%";
    }

}