interface AnimationProps {
  root: HTMLElement | null;
  rootMargin: string;
  body: HTMLElement;
  animatedElems: NodeListOf<HTMLElement>;
  timelineElems: NodeListOf<HTMLElement>;
  init(): void;
  animate(): void;
  threshold: number;
}

const ANIMATION: AnimationProps = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
  body: document.body,
  animatedElems: document.querySelectorAll("[data-animate]"),
  timelineElems: document.querySelectorAll("[data-timeline]"),

  animate() {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");

          observer.unobserve(entry.target);
        }
      });
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          entry.target.classList.add("is-visible");

          timelineObserver.unobserve(entry.target);
        }
      });
    }, options);

    this.timelineElems.forEach((elem) => timelineObserver.observe(elem));

    const observer = new IntersectionObserver(callback, options);
    this.animatedElems.forEach((elem) => observer.observe(elem));
  },

  init() {
    if (this.animatedElems.length === 0 || this.timelineElems.length === 0) {
      return;
    }

    this.animate();
  },
};

ANIMATION.init();
