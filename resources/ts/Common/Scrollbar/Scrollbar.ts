module Mattoni.Common {

    export class Scrollbar {

        public static init() {
            var tags = document.querySelectorAll('[href*="#"]');
            console.log(tags);
            for(var i = 0; i < tags.length; i++) {
                tags[i].addEventListener('click', (event: MouseEvent) => {
                    var clicked = <HTMLAnchorElement> event.target;
                    event.preventDefault();
                    var target = document.querySelector(clicked.hash);
                    console.log(target);
                    this.scrollTo(<HTMLElement> target);
                });
            }
        }

        public static scrollTo(tag: HTMLElement, duration: number = 600) {
            var offset = tag.getBoundingClientRect();
            var start = document.body.scrollTop;
            var change = offset.top - start;
            var currentTime = 0;
            var increment = 20;

            //t = current time
            //b = start value
            //c = change in value
            //d = duration
            var easeInOutQuad = function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            };

            var animateScroll = () => {
                currentTime += increment;
                document.body.scrollTop = easeInOutQuad(currentTime, start, change, duration);
                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };

            animateScroll();
        }

    }

}