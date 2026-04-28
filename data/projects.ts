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
    title: "Upgrade Your Salary Campaign",
    category: "PostBank",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382468/Poster_1_dfgf07.png",
    imageAlt: "Upgrade Your Salary campaign poster for PostBank",
    aspectRatio: "portrait"
  },
  {
    title: "Lagos Cultural Summit",
    category: "Creative Direction",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382470/Poster_3_copy_pjdi6d.png",
    imageAlt: "Poster artwork for Lagos Cultural Summit",
    aspectRatio: "landscape"
  },
  {
    title: "AfroFuture Campaign",
    category: "Creative Production",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382503/Happy_Women_s_Day_v4_rrywgu.png",
    imageAlt: "Happy Women's Day campaign poster artwork",
    aspectRatio: "square"
  }
];
