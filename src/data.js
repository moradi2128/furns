// === Product Data ===
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";

// === News Data ===
import NewsImg from "./assets/images/news/1.jpg";
import NewsImg2 from "./assets/images/news/2.jpg";
import NewsImg3 from "./assets/images/news/3.jpg";
// === Banner Data ===
import banner1 from "./assets/images/banner/banner1.jpg";
import banner2 from "./assets/images/banner/banner2.jpg";

// === About Img ===
import about1 from "./assets/images/about/1.jpg";
import about2 from "./assets/images/about/2.jpg";
// === Products Details Img ===
import productDetails1 from "./assets/images/product/1.jpg";
import productDetails2 from "./assets/images/product/2.jpg";
import productDetails3 from "./assets/images/product/3.jpg";
import productDetails4 from "./assets/images/product/4.jpg";

export const navItemData = [
  {
    id: 0,
    title: "home",
    subMenu: [
      { id: 0, title: "Home1", href: "/" },
      { id: 1, title: "Home2", href: "/" },
    ],
  },
  {
    id: 1,
    title: "About",
    href: "/about",
  },
  {
    id: 2,
    title: "Home Furniture",
    subMenu: [
      { id: 0, title: "Bedroom", href: "/shop" },
      { id: 1, title: "Dining", href: "/shop" },
      { id: 2, title: "Living", href: "/shop" },
    ],
  },
  {
    id: 3,
    title: "Office Furniture",
    subMenu: [
      { id: 0, title: "Lounge", href: "/shop" },
      { id: 1, title: "Office Chair", href: "/shop" },
      { id: 2, title: "Office Table", href: "/shop" },
    ],
  },
  {
    id: 4,
    title: "Hospital Furniture",
    subMenu: [
      { id: 0, title: "Hospital Bed", href: "/shop" },
      { id: 1, title: "Hospital Utility", href: "/shop" },
    ],
  },
  {
    id: 5,
    title: "CONTACT",
    href: "/contact",
  },
];

export const listProduct = [
  {
    id: 0,
    title: "Variable Product",
    price: "69.0",
    discountPrice: "119.0",
    discountPercent: "42%",
    selectOptions: "true",
    img: img3,
    imgHover: img4,
  },
  {
    id: 1,
    title: "Josefa Queen Size Bed with Storage in Natural Teak Wood Finish",
    price: "199.0",
    href: "/",
    img: img1,
  },
  {
    id: 2,
    title: "Twist Dining Table",
    price: "288.0",
    discountPercent: "16%",
    href: "/",
    stockOut: "true",
    img: img2,
  },
];

export const bannerData = [
  {
    id: 0,
    title: "Sale Furniture ",
    subTitle: " For Summer ",
    description: "Great Discounts Here",
    img: banner2,
  },
  {
    id: 1,
    title: "Office Chair   ",
    subTitle: "  For Best Offer ",
    description: "Great Discounts Here",
    img: banner1,
    left: "true",
  },
];

export const newsData = [
  {
    id: 0,
    title: "Ut enim adminim veniam, quis nostrud ",
    author: "Raju HT",
    date: "14 September, 2021",
    description:
      "Lorem ipsum dolor sit amet onsectetur elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet",
    img: NewsImg,
    href: "/",
    hrefAuthor: "/",
  },
  {
    id: 1,
    title: "Spatialize with that the furns",
    author: "Raju HT",
    date: "14 September, 2021",
    description:
      "Lorem ipsum dolor sit amet onsectetur elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet",
    img: NewsImg2,
    href: "/",
    hrefAuthor: "/",
  },
  {
    id: 2,
    title: "Eiumod tempor incididunt labore ",
    author: "Raju HT",
    date: "14 September, 2021",
    description:
      "Lorem ipsum dolor sit amet onsectetur elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet",
    img: NewsImg3,
    href: "/",
    hrefAuthor: "/",
  },
];

export const aboutPageData = [
  {
    id: 0,
    title:
      "Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.",
    description: [
      {
        id: 0,
        title: "OUR STORES",
        description:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
        img: about1,
      },
      {
        id: 1,
        title: "OUR MISSION",
        description:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
        img: about2,
      },
    ],
  },
];

export const productDetails = [
  {
    id: 0,
    title: "Variable Product",
    sku:"GXW",
    Availability:"9",
    price: "119.0",
    discountPrice: "69.0",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words, etcOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    color: "Gray,Green,Chocolate,Blue",
    size: "Semi Double, Double, Single",
    Material: "Wood, Metal, Leather",
    img: [productDetails1, productDetails2, productDetails3, productDetails4],
  },
];
