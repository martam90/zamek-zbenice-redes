interface navProps {
  html: HTMLElement;
  body: HTMLElement;
  navDropdown: HTMLElement | null;
  summary: HTMLElement | null;
  detailsNav: HTMLDetailsElement | null;
  init(): void;
  handleEsc(): void;
  handleOverlay(): void;
  handleAria(): void;
  handleFocus(): void;
}

const NAV: navProps = {
  html: document.documentElement,
  body: document.body,
  navDropdown: document.getElementById("nav"),
  detailsNav: document.getElementById("details-nav") as HTMLDetailsElement,
  summary: document.getElementById("summary-nav") as HTMLElement,

  handleOverlay() {
    if (this.body) {
      this.detailsNav?.addEventListener("toggle", () => {
        this.body.classList.toggle("nav-overlay");
        this.html.classList.toggle("js-is-open");
      });
    }
  },

  handleAria() {
    if (this.navDropdown) {
      this.detailsNav?.addEventListener("toggle", () => {
        if (this.detailsNav?.hasAttribute("open")) {
          this.navDropdown?.setAttribute("aria-expanded", "true");
        } else {
          this.navDropdown?.setAttribute("aria-expanded", "false");
        }
      });
    }
  },

  handleEsc() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.detailsNav?.removeAttribute("open");
      }
    });
  },

  handleFocus() {
    this.detailsNav?.addEventListener("toggle", () => {
      const focusableElems = this.navDropdown?.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) as NodeListOf<HTMLAnchorElement>;

      if (this.detailsNav?.open) {
        focusableElems[0]?.focus();
      } else {
        this.summary?.focus();
      }
    });
  },

  init() {
    this.handleOverlay();
    this.handleAria();
    this.handleEsc();
    this.handleFocus();
  },
};

NAV.init();
