import type { Photo } from "react-photo-album";

const photos = [
  {
    asset: "/src/images/1.jpg",
    width: 1080,
    height: 780,
    alt: "wed1",
  },
  {
    asset: "/src/images/1.1.jpg",
    width: 1080,
    height: 780,
    alt: "wed1",
  },
  {
    asset: "/src/images/2.jpg",
    width: 1080,
    height: 1620,
    alt: "wed2",
  },
  {
    asset: "/src/images/2.1.jpg",
    width: 1080,
    height: 1620,
    alt: "wed2",
  },
  {
    asset: "/src/images/3.jpg",
    width: 1080,
    height: 720,
    alt: "wed3",
  },
  {
    asset: "/src/images/3.1.jpg",
    width: 1080,
    height: 720,
    alt: "wed3",
  },
  {
    asset: "/src/images/4.jpg",
    width: 1080,
    height: 720,
    alt: "wed4",
  },
  {
    asset: "/src/images/4.1.jpg",
    width: 1080,
    height: 720,
    alt: "wed4",
  },
  {
    asset: "/src/images/6.jpg",
    width: 1080,
    height: 607,
    alt: "wed6",
  },
  {
    asset: "/src/images/6.1.jpg",
    width: 1080,
    height: 607,
    alt: "wed6",
  },
  {
    asset: "/src/images/7.jpg",
    width: 1080,
    height: 608,
    alt: "wed7",
  },
  {
    asset: "/src/images/7.1.jpg",
    width: 1080,
    height: 608,
    alt: "wed7",
  },
  {
    asset: "/src/images/8.jpg",
    width: 1080,
    height: 720,
    alt: "wed8",
  },
  {
    asset: "/src/images/8.1.jpg",
    width: 1080,
    height: 720,
    alt: "wed8",
  },
  {
    asset: "/src/images/10.jpg",
    width: 1080,
    height: 720,
    alt: "wed10",
  },
  {
    asset: "/src/images/10.1.jpg",
    width: 1080,
    height: 694,
    alt: "wed11",
  },
  {
    asset: "/src/images/11.jpg",
    width: 1080,
    height: 694,
    alt: "wed11",
  },
  {
    asset: "/src/images/11.1.jpg",
    width: 1080,
    height: 694,
    alt: "wed11",
  },
  {
    asset: "/src/images/12.jpg",
    width: 1080,
    height: 1620,
    alt: "wed12",
  },
  {
    asset: "/src/images/12.1.jpg",
    width: 1080,
    height: 1620,
    alt: "wed12",
  },
  {
    asset: "/src/images/13.jpg",
    width: 1080,
    height: 720,
    alt: "wed13",
  },
  {
    asset: "/src/images/14.jpg",
    width: 1080,
    height: 1440,
    alt: "wed14",
  },
  {
    asset: "/src/images/15.jpg",
    width: 1080,
    height: 1620,
    alt: "wed15",
  },
  {
    asset: "/src/images/15.1.jpg",
    width: 1080,
    height: 810,
    alt: "wed16",
  },
  {
    asset: "/src/images/17.jpg",
    width: 1080,
    height: 595,
    alt: "wed17",
  },
  {
    asset: "/src/images/18.jpg",
    width: 1080,
    height: 160,
    alt: "wed18",
  },
  {
    asset: "/src/images/18.1.jpg",
    width: 1080,
    height: 160,
    alt: "wed18",
  },
  {
    asset: "/src/images/19.jpg",
    width: 1080,
    height: 810,
    alt: "wed19",
  },
  {
    asset: "/src/images/20.jpg",
    width: 1080,
    height: 720,
    alt: "wed20",
  },
  {
    asset: "/src/images/20.1.jpg",
    width: 1080,
    height: 720,
    alt: "wed20",
  },
  {
    asset: "/src/images/21.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/22.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/22.1.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/22.2.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/22.3.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/24.1.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/24.2.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/24.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
  {
    asset: "/src/images/27.jpg",
    width: 1080,
    height: 1440,
    alt: "wed21",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height
    }) as Photo,
);

export default photos;
