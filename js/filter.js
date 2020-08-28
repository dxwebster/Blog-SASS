$(window).load(function () {
    var a = $(".animate-grid .gallary-thumbs");
    
    a.isotope({ filter: "*", transitionDuration: "0.6s" }),
        
        $(".animate-grid .categories a").click(function () {
            $(".animate-grid .categories .active").removeClass("active"), $(this).addClass("active");
            var b = $(this).attr("data-filter");
            return a.isotope({ filter: b }), !1;
        });
});
