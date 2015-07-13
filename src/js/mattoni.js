var Mattoni;
(function (Mattoni) {
    var Common;
    (function (Common) {
        var Scrollbar = (function () {
            function Scrollbar() {
            }
            Scrollbar.init = function () {
                var _this = this;
                var tags = document.querySelectorAll('[href*="#"]');
                console.log(tags);
                for (var i = 0; i < tags.length; i++) {
                    tags[i].addEventListener('click', function (event) {
                        var clicked = event.target;
                        event.preventDefault();
                        var target = document.querySelector(clicked.hash);
                        console.log(target);
                        _this.scrollTo(target);
                    });
                }
            };
            Scrollbar.scrollTo = function (tag, duration) {
                if (duration === void 0) { duration = 600; }
                var offset = tag.getBoundingClientRect();
                var start = document.body.scrollTop;
                var change = offset.top - start;
                var currentTime = 0;
                var increment = 20;
                var easeInOutQuad = function (t, b, c, d) {
                    t /= d / 2;
                    if (t < 1)
                        return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };
                var animateScroll = function () {
                    currentTime += increment;
                    document.body.scrollTop = easeInOutQuad(currentTime, start, change, duration);
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }
                };
                animateScroll();
            };
            return Scrollbar;
        })();
        Common.Scrollbar = Scrollbar;
    })(Common = Mattoni.Common || (Mattoni.Common = {}));
})(Mattoni || (Mattoni = {}));
var Mattoni;
(function (Mattoni) {
    var Common;
    (function (Common) {
        function init() {
            Common.Scrollbar.init();
        }
        Common.init = init;
        init();
    })(Common = Mattoni.Common || (Mattoni.Common = {}));
})(Mattoni || (Mattoni = {}));
//grunt-start
/// <reference path="Scrollbar/Scrollbar.ts" />
//grunt-end
/// <reference path="Init.ts" />
