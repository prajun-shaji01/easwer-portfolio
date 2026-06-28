export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize narrative storytelling and cinematic visuals, working closely with clients to bring their vision to life.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Specializing in high-end commercial advertisements and event celebration.",
    description: "",
    className: "lg:col-span-2 md:col-span-2 text-sm md:row-span-2",
    imgClassName: "",
    // Added 'text-sm' to make it smaller and 'line-clamp-3' to force 3 lines
    titleClassName: "justify-start -mt-4 text-sm line-clamp-3",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My editing suite",
    description: "Tools of the trade",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A visual artist with a passion for color, light, and movement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently editing a new batch of high-energy cinematic reels.",
    description: "Behind the Lens",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg", // <--- Change this to match your new file name (e.g., .png or .jpg)
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to shoot your next project? Let's collaborate.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ceramic Pro Calicut",
    des: "A cinematic showcase of precision detailing. This project highlights the flawless finish and protective quality of Ceramic Pro coatings through dynamic lighting and close-up detail work.",
    img: "/project1.jpeg", // Make sure to point this to the correct image/thumbnail
    link: "https://www.instagram.com/reel/DX_qibEzKsc/", // Use the Instagram link here
  },
  {
    id: 2,
    title: "Hive Honey Cake",
    des: "Capturing the golden essence of artisan honey cake. A focus on texture, slow-motion pours, and the rich, authentic process behind every Hive creation.",
    img: "/hive.jpeg", // Ensure this points to your project thumbnail
    link: "https://www.instagram.com/reel/DSmoysKD_XL/",
  },
  {
    id: 3,
    title: "Ayma Jewellery",
    des: "A cinematic spotlight on Ayma Jewellery. Meticulously captured to emphasize the intricate craftsmanship, brilliance, and timeless elegance of each piece.",
    img: "/ayma.jpeg", // Ensure this points to your project thumbnail
    link: "https://www.instagram.com/reel/DYE8H0UykQM/",
  },
  {
    id: 4,
    title: "BSTYU Fashion",
    des: "Capturing the modern edge of BSTYU Fashion. A high-energy sequence highlighting brand identity through fluid transitions, sharp styling, and a contemporary aesthetic.",
    img: "/bstyu.jpeg", // Ensure this points to your project thumbnail
    link: "https://www.instagram.com/reel/DWWTsI2E0Ng/",
  },
];

export const testimonials = [
  {
    quote:
      "Easwer's ability to capture the precision of our ceramic coatings in motion is unmatched. He understands our brand quality.",
    name: "Ceramic Pro Calicut",
    title: "Automotive Detailing Partner",
    profilePic: "/cermp1.jpg",
  },
  {
    quote:
      "The way Easwer captures the textures and details of our cakes makes our customers crave them instantly. Fantastic work.",
    name: "Hive Honey Cake India",
    title: "Culinary Lifestyle Partner",
    profilePic: "/hivep1.jpg",
  },
  {
    quote:
      "Easwer brings an elegance to our jewellery shoots that is hard to find. His lighting and editing are truly world-class.",
    name: "Ayma Signature Jewels",
    title: "Luxury Jewellery Partner",
    profilePic: "/aymap1.jpg",
  },
  {
    quote:
      "From runway highlights to collection teasers, Easwer knows how to make our fashion line look modern and bold.",
    name: "Bstyu Fashion",
    title: "Fashion & Lifestyle Partner",
    profilePic: "/bstyup1.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Video Editor",
    desc: "Produced and edited digital advertisements and high-energy celebration videos using professional post-production software.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Freelance Videographer",
    desc: "Managed end-to-end video production from storyboarding and location scouting to final delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg", // Make sure this is your Instagram icon
    link: "https://www.instagram.com/__eas__wer__/", // Direct link to his profile
  },
  {
    id: 2,
    img: "/whatsapp.svg", // WhatsApp icon
    link: "https://wa.me/919946803731", // The official WhatsApp click-to-chat link
  },
];
