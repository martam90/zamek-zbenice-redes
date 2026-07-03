export interface galleryItem {
  alt: string;
  src: string;
  class?: string;
}

export const galleryData: galleryItem[] = [
  {
    src: "img-1.webp",
    alt: "Zámek Zbenice - pohled z venku",
    class: "md:col-span-2 md:row-span-2",
  },
  {
    src: "img-2.webp",
    alt: "Zámek Zbenice - erb",
  },
  {
    src: "img-3.webp",
    alt: "Zámek Zbenice - ložnice",
    class: "md:row-span-2",
  },
  {
    src: "img-4.webp",
    alt: "Zámek Zbenice - schodiště",
  },
  {
    src: "img-5.webp",
    alt: "Zámek Zbenice - sbírka porcelánu",
    class: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "img-6.webp",
    alt: "Zámek Zbenice - interiér",
    class: "col-span-2 sm:col-span-1",
  },
  {
    src: "img-7.webp",
    alt: "Zámek Zbenice - most",
  },
  {
    src: "img-8.webp",
    alt: "Zámek Zbenice - hodiny",
  },
  {
    src: "img-9.webp",
    alt: "Zámek Zbenice - fotoaparát",
  },
];
