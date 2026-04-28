export type Project = {
  title: string;
  category: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: "portrait" | "square" | "landscape";
};

export const projects: Project[] = [
  {
    title: "KwonKalture Identity",
    category: "Brand Strategy",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=2200&q=90",
    imageAlt: "Bold textile-inspired branding artwork",
    aspectRatio: "portrait"
  },
  {
    title: "Lagos Cultural Summit",
    category: "Creative Direction",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2200&q=90",
    imageAlt: "Festival crowd illuminated by vibrant stage lighting",
    aspectRatio: "landscape"
  },
  {
    title: "AfroFuture Campaign",
    category: "Creative Production",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=2200&q=90",
    imageAlt: "High-fashion portrait with expressive color styling",
    aspectRatio: "square"
  }
];
