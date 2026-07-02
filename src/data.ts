import category1 from "./assets/category1.png";
import category2 from "./assets/category2.png";
import category3 from "./assets/category3.png";
import { categoryDataModel } from "./../src/utils/index"


export const categoryData: categoryDataModel[] = [
  {
    id: 1,
    title: "men's clothing",
    image: category1,
  },
  {
    id: 2,
    title: "women's clothing",
    image: category2,
  },
  {
    id: 3,
    title: "jewelery",
    image: category3,
  },
];
export const faqData = [
  {
    id: 1,
    title: "How long does shipping take?",
    text: "Standard shipping takes 3-5 business days. Express shipping is available at checkout for 1-2 business days."
  },
  {
    id: 2,
    title: "What is your return policy?",
    text: "We offer 30-day hassle-free returns. Items must be unworn and in original packaging.",
  },{
    id: 3,
    title: "Are your products authentic?",
    text:"Yes, all Vesta products are 100% authentic and quality checked before shipping."
  },
  {
    id: 4,
    title: "Do you ship internationally?",
    text: "Yes, we ship to over 50 countries worldwide. International shipping takes 7-14 business days."
  },
  {
    id: 5,
    title: "How do I track my order?",
    text: "Once your order ships, you'll receive a tracking number via email to monitor your delivery in real time."
  },
];

