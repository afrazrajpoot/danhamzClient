import React from "react";
import { Icon } from "@iconify/react";

export const topbar = [
  {
    path: "/",
    icon: <Icon icon="fa-solid:phone" />,
    phone: "0113 204 2900",
    links: [
      {
        path: "/coming-soon",
        title: "tenants",
      },
      {
        path: "/coming-soon",
        title: "landlords",
      },
      {
        path: "/news-and-blogs",
        title: "news & blogs",
      },
      {
        path: "/coming-soon",
        title: "about us",
      },
      {
        path: "/contact",
        title: "contact us",
      },
      {
        path: "/maintenance-request",
        title: "report a repair",
      },
    ],
  },
];

export const navbar = [
  {
    icon: <Icon icon="uiw:home" />,
    link: "/",
    title: "Home",
    lists: [
      {
        link: "/lettings", // path /lettings commented by me
        title: "Lettings",
        type: "select",
        options: [
          {
            title: "Professionals",
            link: "/professionals",
            icon: <Icon icon="healthicons:city-worker-outline" />,
          },
          {
            title: "Students",
            link: "/students",
            icon: <Icon icon="mdi:account-student-outline" />,
          },
          {
            title: "Auction",
            link: "/auction",
            icon: <Icon icon="mdi:account-student-outline" />,
          },
          {
            title: "Landlords",
            link: "/landlords",
            icon: <Icon icon="healthicons:city-worker-outline" />,
          },
          {
            title: "Let OR Sell",
            link: "/let-or-sell",
            icon: <Icon icon="pepicons-pencil:key" />,
          },
          {
            title: "Refer A Friend",
            link: "/refer-a-friend",
            icon: <Icon icon="fluent:chat-32-regular" />,
          },
        ],
      },
      {
        link: "/sales", // path /sales commented by me
        title: "Sales",
        type: "select",
        options: [
          {
            title: "Investment Sales",
            link: "/investments-sales",
            icon: <Icon icon="gis:home" />,
          },
          {
            title: "Buy A BTL",
            link: "/buy-a-btl",
            icon: <Icon icon="gis:home" />,
          },
          {
            title: "Mortgages",
            link: "/mortgages",
            icon: <Icon icon="pepicons-pencil:key" />,
          },
          {
            title: "Auctions",
            link: "/auction",
            icon: <Icon icon="mingcute:auction-line" />,
          },
          {
            title: "Value My Property",
            link: "/value-my-property",
            icon: <Icon icon="teenyicons:search-property-solid" />,
          },
        ],
      },
      {
        link: "https://danhamz.pattinson.co.uk/",
        title: "Auction",
        type: "select",
        options: [
          {
            title: "Auction",
            link: "https://danhamz.pattinson.co.u",
            icon: <Icon icon="gis:home" />,
          },
        ],
      },
      {
        link: "https://www.quick-nests.com",
        title: "Nightly Lets",
        type: "select",
        options: [
          {
            title: "Professionals",
            link: "/professionals",
            icon: <Icon icon="healthicons:city-worker-outline" />,
          },
          {
            title: "Students",
            link: "/students",
            icon: <Icon icon="mdi:account-student-outline" />,
          },
          {
            title: "Landlords",
            link: "/landlords",
            icon: <Icon icon="healthicons:city-worker-outline" />,
          },
        ],
      },
      {
        link: "/refurbishment",
        title: "Refurbishments",
        type: "select",
        options: [
          {
            title: "Refubs",
            link: "/invest-refubs",
            icon: <Icon icon="solar:paint-roller-line-duotone" />,
          },
          {
            title: "Overview",
            link: "/invest-overview",
            icon: <Icon icon="bi:piggy-bank" />,
          },
          {
            title: "Sourcing",
            link: "/invest-sourcing",
            icon: <Icon icon="cil:search" />,
          },
          {
            title: "Invest In Leeds",
            link: "/invest-in-leeds",
            icon: <Icon icon="lets-icons:dimond-alt-light" />,
          },
          {
            title: "Investment Sales",
            link: "/invest-sales",
            icon: <Icon icon="uiw:home" />,
          },
          {
            title: "Danhamz Investor Club",
            link: "/invest-investor-club",
            icon: <Icon icon="uiw:home" />,
          },
        ],
      },

      {
        link: "/block-management",
        title: "Block Management",
        type: "select",
        options: [
          {
            title: "Block management",
            link: "/",
            icon: <Icon icon="mingcute:building-3-line" />,
          },
          {
            title: "Case Studies",
            link: "/",
            icon: <Icon icon="octicon:pencil-24" />,
          },
          {
            title: "Referral Scheme",
            link: "/",
            icon: <Icon icon="fluent:chat-32-regular" />,
          },
        ],
      },
      {
        link: '/sell-for-free',
        title: 'Sell for Free',
      }, 
      {
        link: "/maintenance",
        title: "Maintenance",
        type: "select",
        options: [
          {
            title: "Developments & maintenance",
            link: "/invest-development",
            icon: <Icon icon="et:tools" />,
          },
        ],
      },
    ],
  },
];

// home page content

export const rentContainer = [
  {
    noOfbeds: "How many bedrooms do you need?",
    name: "bedrooms",
    quantity: [
      { count: "1", value: "1" },
      { count: "2", value: "2" },
      { count: "3", value: "3" },
      { count: "4", value: "4" },
      { count: "5", value: "5" },
      { count: "6", value: "6" },
      { count: "7", value: "7" },
      { count: "8", value: "8" },
      { count: "9", value: "9" },
      { count: "10", value: "10" },
    ],
    container: [
      {
        title: "What is your budget?",
        type: "select",
        name: "maxPrice",
        options: [
          {
            title: "No Preferences",
            value: null,
          },
          {
            title: "Less than $1000",
            value: 1000,
          },
          {
            title: "$1000 - $2000",
            value: 2500,
          },
          {
            title: "$2000 - $3000",
            value: 3000,
          },
        ],
      },
      {
        title: "Location (tick all that apply)",
        type: "checkbox",
        options: [
          { title: "No Preferences", value: "no Preferences" },
          { title: "Armley", value: "Armley" },
          { title: "Beeston", value: "Beeston" },
          { title: "Bradford", value: "Bradford" },
          { title: "Bramley", value: "Bramley" },
          { title: "City Center", value: "City Center" },
          { title: "East End Park", value: "East End Park" },
          { title: "Farsley", value: "Farsley" },
          { title: "Gildersome", value: "Gildersome" },
          { title: "Horsforth", value: "Horsforth" },
          { title: "Leeds", value: "Leeds" },
          { title: "Meanwood", value: "Meanwood" },
          { title: "Morley", value: "Morley" },
          { title: "Northgate House", value: "Northgate House" },
          { title: "Pudsey", value: "Pudsey" },
          { title: "Stanningley", value: "Stanningley" },
          { title: "Wortley", value: "Wortley" },
          { title: "Wyke", value: "Wyke" },
        ],
      },
    ],
  },
];

export const buyContainer = [
  {
    price: [
      {
        type: "select",
        name: "minPrice",
        options: [
          {
            title: "Min Price",
          },
          {
            title: "$100000",
            value: 100000,
          },
          {
            title: "$200000",
            value: 200000,
          },
          {
            title: "$300000",
            value: 300000,
          },
          {
            title: "$400000",
            value: 400000,
          },
          {
            title: "$600000",
            value: 600000,
          },
        ],
      },
      {
        type: "select",
        name: "maxPrice",
        options: [
          {
            title: "Max Price",
          },
          {
            title: "$300000",
            value: 300000,
          },
          {
            title: "$500000",
            value: 500000,
          },
          {
            title: "$700000",
            value: 700000,
          },
          {
            title: "$900000",
            value: 900000,
          },
          {
            title: "$1200000",
            value: 1200000,
          },
        ],
      },
    ],
    beds: [
      {
        type: "select",
        name: "minBedrooms",
        options: [
          { count: "Min beds", value: null },
          { count: "1", value: 1 },
          { count: "2", value: 2 },
          { count: "3", value: 3 },
          { count: "4", value: 4 },
          { count: "5", value: 5 },
          { count: "6", value: 6 },
          { count: "7", value: 7 },
          { count: "8", value: 8 },
          { count: "9", value: 9 },
        ],
      },
      {
        type: "select",
        name: "maxBedrooms",
        options: [
          { count: "Max beds", value: null },
          { count: "1", value: 1 },
          { count: "2", value: 2 },
          { count: "3", value: 3 },
          { count: "4", value: 4 },
          { count: "5", value: 5 },
          { count: "6", value: 6 },
          { count: "7", value: 7 },
          { count: "8", value: 8 },
          { count: "9", value: 9 },
          { count: "10", value: 10 },
        ],
      },
    ],
    Type: [
      {
        type: "select",
        name: "location",
        options: [
          { title: "City Center", value: "City Center" },
          { title: "Organization", value: "Organization" },
          { title: "Parley", value: "Parley" },
          { title: "Armley", value: "Armley" },
        ],
      },
      {
        type: "select",
        name: "propertyType",
        options: [
          { title: "Home", value: "Home" },
          { title: "Appartment", value: "Appartment" },
          { title: "Bungalow", value: "Bunglow" },
          { title: "Cater", value: "Cater" },
          { title: "Combined", value: "Combined" },
        ],
      },
    ],
  },
];

export const banner = [
  {
    title:
      "Your one-stop destination for comprehensive property solutions. Whether you're looking to rent, buy, refurbish, maintain, or manage your property, we have the expertise and dedication to meet all your property needs. ",
    info: "Previously known as Let Leeds, you can now call us Danhamz. Whether you’re a buyer, seller, tenant, landlord, investor or developer, our friendly team is here to help. We offer a range of property services that include Lettings, Sales & Block Management all under one roof.",
    para: "Couples, families, investors, buyers, and sellers all know they can depend on our highly experienced team to protect their best interests while finding the property that is just right for them. We are also big believers in value and specialise in helping our clients get the most from every pound they spend.",
  },
];

export const home_services = [
  {
    title: "Lettings",
    img: "/images/Lettings.jpg",
    height: false,
    para: "Looking for the perfect rental property? Our extensive portfolio features a wide range of homes, apartments, and commercial spaces. Our team is committed to finding the ideal property that suits your lifestyle and budget",
  },
  {
    title: "Nightly Lettings",
    img: "/images/Nightlets.jpg",
    height: false,
    para: "Experience the convenience and comfort of nightly lettings with us. Whether you're a traveller in search of a short-term stay or a property owner looking to maximize returns, our nightly letting services cater to your needs.",
  },
  {
    title: "Sales",
    img: "/images/Sales.jpg",
    height: false,
    para: "Ready to make a move? Our experienced sales team will guide you through the process, ensuring a smooth and successful transaction. Whether you're selling your home or looking to invest, we're here to make the journey seamless.",
  },
  {
    title: "Refurbishment",
    height: false,
    img: "/images/Refurbishments.jpg",
    para: "Enhance the appeal and value of your property with our refurbishment services. Our skilled team of professionals specializes in transforming spaces, creating modern and stylish interiors that reflect your taste and preferences.",
    // number: 3,
    // icon: <Icon icon="solar:paint-roller-outline" />,
  },
  {
    title: "Maintenance",
    img: "/images/Maintenance.jpg",
    height: false,
    para: "Your property deserves the best care. Our maintenance services cover everything from routine repairs to emergency fixes. We prioritize the longevity and functionality of your property, ensuring it remains a comfortable and secure space",
    // number: 4,
    // icon: <Icon icon="ic:round-home-repair-service" />,
  },
  {
    title: "Block Management",
    img: "/images/Block.jpg",
    height: false,
    para: "For property owners and landlords with multiple units, our block management services streamline operations, ensuring the smooth running of communal spaces. From financial management to maintenance coordination, we've got it all covered.",
    // number: 5,
    // icon: <Icon icon="fluent-mdl2:account-management" />,
  },
];

export const categories = [
  {
    img: "/images/Leeds.jpg",
    title: "Leeds",
    url: "/",
  },
  {
    img: "/images/Liverpool.jpg",
    title: "Liverpool",
    url: "/",
  },
  {
    img: "/images/Halifax.jpg",
    title: "Halifax",
    url: "/",
  },
  {
    img: "/images/Huddersfield.jpg",
    title: "Huddersfield",
    url: "/",
  },
  {
    img: "/images/Bradford.jpg",
    title: "Bradford",
    url: "/",
  },
  {
    img: "/images/London.jpg",
    title: "London",
    url: "/",
  },
  {
    img: "/images/Manchester.jpg",
    title: "Manchester",
    url: "/",
  },
  {
    img: "/images/Nottingham.jpg",
    title: "Nottingham",
    url: "/",
  },
  {
    img: "/images/Wakefield.jpg",
    title: "Wakefield",
    url: "/",
  },
];

export const approach = [
  {
    title: "A fresh approach to sales",
    info: "If you are looking to sell a property in Leeds, then we’re here to make the whole process as smooth and stress-free as possible.",
    para: "Whether you are selling your home, or an investment property, our friendly team at Danhamz will be with you every step of the way, from initial valuation through to final completion.",
    video:
      "https://www.youtube.com/watch?v=lbqll5HUPog&pp=ygUMaG91c2UgZGVzaWdu",
  },
];

export const properties = [
  {
    img: "/images/img1.jpg",
    tag: "Solt TCS",
    price: "$1000",
    location: "London Lovel park Heels 109",
    pics: [
      {
        icon: <Icon icon="ion:camera-outline" />,
        quantity: "1",
      },
    ],
    bed_rooms: "1 bedrooms",
    icon: <Icon icon="uil:bed" />,
  },
  {
    img: "/images/img2.jpg",
    tag: "Solt TCS",
    price: "$1000",
    location: "London Lovel park Heels 109",
    pics: [
      {
        icon: <Icon icon="ion:camera-outline" />,
        quantity: "1",
      },
    ],
    bed_rooms: "2 bedrooms",
    icon: <Icon icon="uil:bed" />,
  },
  {
    img: "/images/img3.jpg",
    tag: "Solt TCS",
    price: "$1000",
    location: "London Lovel park Heels 109",
    pics: [
      {
        icon: <Icon icon="ion:camera-outline" />,
        quantity: "4",
      },
    ],
    bed_rooms: "6 bedrooms",
    icon: <Icon icon="uil:bed" />,
  },
  {
    img: "/images/img5.jpg",
    tag: "Solt TCS",
    price: "$1000",
    location: "London Lovel park Heels 109",
    pics: [
      {
        icon: <Icon icon="ion:camera-outline" />,
        quantity: "1",
      },
    ],
    bed_rooms: "1 bedrooms",
    icon: <Icon icon="uil:bed" />,
  },
];

export const ratings = [
  {
    icon: <Icon icon="uis:star" />,
    para: "Danhamz limited are an amazing housing agency. They are very kind and understanding towards their tenants and also very quick to attend to any problem. I will highly recommend their agency to anyone who is looking for a warm and comfortable house to live in that is ran by friendly, approacable people",
    name: "Mary O.",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "Had a very pleasant experience when dealing with Danhamz, especially when I required short notice accomodation. Very easy to deal with, lovely team, happy to sort out any issues. Well deserved 5 star rating, keep up the good work!",
    name: "andreeatoma91",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "For over two years, I rented my current property with Danhamz Ltd. This is the second time I rented property from them. It was because I had pleasant experience in the first instant that made me to choose Danhamz Ltd again. Danhamz is a good renting agent. They promptly attend to issues when informed regardless of time.",
    name: "Lawrence Onyeji",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "Lived in their property it was a great experience to be a guest of danhamz management is really compromising and understanding especially Mos & Irena they both were very polite to me & their all tenants",
    name: "Asad Ali",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "This company offered me a house when there was nothing left available anywhere else, the renting process was smooth and easy, staff was always nice and helpful, especially Irena who's always happy to help ☺️ Been living in two properties offered by danhamz and never had any issues. Deposit was returned at short time after the check out inspection. Highly recommend them.",
    name: "Mihai Neagu",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "Was looking to for a place to rent in Leeds and I was advised to go with Danhamz from a friend. The process was quick and easy and now I have my dream home. The staff were lovely in particular Melissa my letting agent, who was helpful every step of the way and provided me with some excellent advice. Can’t fault them.",
    name: "Kurtis Shipley",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "I recently came from London to study at Leeds university and I was looking to rent a house near my cousin house, I couldn't find any good estate rental agency that would rent me a house near them so I asked my friend to find me one. So my friend told me about you guys and I was very pleased with the service that I was given. The staff was very friendly and helpful to me.",
    name: "Mirza",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "Great service very professional highly recommended 👍🏽😊",
    name: "Tahi Noor",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "Exceptional company with top-notch services and outstanding management.  Highly recommended.",
    name: "Arbaz balouch",
  },
  {
    icon: <Icon icon="uis:star" />,
    para: "",
    name: "Patrik",
  },
];



export const studentHomes = [
  {
    // bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url, icon
    icon: <Icon icon="mdi:lightbulb-on-30" />,
    title: "Why choose Danhamz? ",
    img: "/images/img_focus.jpg",
    title_color: "text-yellow-600",
    lists: [
      "Expertise: Our team comprises seasoned professionals with in-depth knowledge of the real estate industry. We stay updated on market trends and legalities to provide you with the best advice. ",
      "Client-Centric Approach: Your satisfaction is our priority. We take the time to understand your unique requirements, tailoring our services to meet your specific needs. ",
      "Transparent Communication: We believe in open and transparent communication. You'll be kept informed at every step of the process, ensuring a hassle-free experience. ",
      "Comprehensive Solutions: Whether you're a tenant, buyer, seller, or property owner, we offer a complete range of services under one roof, making us your go-to partner for all things property-related. ",
    ],
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    // button:"Find out more",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    bg_color: "bg-white",
  },
];


export const lettingProperties = [
  {
    icon: <Icon icon="uil:bed" />,
    quantity: "1",
    weekPrice: "$1000",
    location: "London Lovel park Heels 109",
    monthPrice: "$1000",
    bedRooms: "1 bedrooms",
    img: "/images/img1.jpg",
    bed_icon: <Icon icon="uil:bed" />,
    available: "Available",
    furnished_icon: <Icon icon="la:couch" />,
    furnished: "Furnished",
    bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
    bills: "Bills Included",
    date: "01 Jul",
  },
  {
    icon: <Icon icon="uil:bed" />,
    quantity: "1",
    weekPrice: "$1000",
    location: "London Lovel park Heels 109",
    monthPrice: "$1000",
    bedRooms: "1 bedrooms",
    img: "/images/img4.jpg",
    bed_icon: <Icon icon="uil:bed" />,
    available: "Available",
    furnished_icon: <Icon icon="la:couch" />,
    furnished: "Furnished",
    date: "01 Jul",
  },
  {
    icon: <Icon icon="uil:bed" />,
    quantity: "1",
    weekPrice: "$1000",
    location: "London Lovel park Heels 109",
    monthPrice: "$1000",
    bedRooms: "1 bedrooms",
    img: "/images/img3.jpg",
    bed_icon: <Icon icon="uil:bed" />,
    available: "Available",
    furnished_icon: <Icon icon="la:couch" />,
    furnished: "Furnished",
    bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
    bills: "Bills Included",
    date: "01 Jul",
  },
  {
    icon: <Icon icon="uil:bed" />,
    quantity: "1",
    weekPrice: "$1000",
    location: "London Lovel park Heels 109",
    monthPrice: "$1000",
    bedRooms: "1 bedrooms",
    img: "/images/img1.jpg",
    bed_icon: <Icon icon="uil:bed" />,
    available: "Available",
    furnished_icon: <Icon icon="la:couch" />,
    furnished: "Furnished",
    date: "01 Jul",
  },
];

export const welcome = [
  {
    title: "Welcome to the Home of Property",
    info: "The housing stock in Leeds is large and varied. You will find homes to buy, let or buy-to-let here from every historical period of the last 200 years. Whether you’re looking for a terraced house, an interwar semi-detached home or a new postmodern detached house, Leeds is the place for you.",
    para: "Of course, finding the best properties to buy, let or invest in means partnering with estate agents that know the local market inside and out. That’s Danhamz to a T!",
    video: "https://www.youtube.com/watch?v=0Dg6VM6Lal8&pp=ygUFaG9tZXM%3D",
  },
];


export const footer = [
    {
        title: "Contact Us",
        Links: [
            {icon: <Icon icon="ic:baseline-email" />, title: "lettings@danhamzltd.co.uk", url:"mailto:lettings@danhamzltd.co.uk"},
            {icon: <Icon icon="fa-solid:phone" />, title: "0113 204 2900", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="mdi:location" />, title: "13 The Crescent, Woodhouse, Leeds LS6 2NW, United Kingdom", url:"http://www.danhamz.co.uk"},
            
        ],
        find: "Find us on social media",
        social: [
            {icon: <Icon icon="devicon:facebook" />, title: "Danhamz on Facebook", url:"https://www.facebook.com/Danhamz"},
            {icon: <Icon icon="mdi:instagram" />, title: "@danhamz_sales", url:"https://www.instagram.com/danhamz_1"},
            {icon: <Icon icon="logos:twitter" />, title: "Follow us on Twitter", url:"https://twitter.com/Danhamzleedsltd"},
            {icon: <Icon icon="ri:linkedin-fill" />, title: "Connect on LinkedIn", url:"https://www.linkedin.com/company/19620881/admin/feed/posts/"},
        ]
    }, 
   
    {
        title: "Customer links",
        Links: [
            {title: "About Danhamz", url:"/coming-soon"},
            {title: "Lettings", url:"/lettings"},
            {title: "Nightly Lets", url:"https://www.quick-nests.com"},
            {title: "Sales", url:"/sales"},
            {title: "Refurbishments", url:"/refurbishment"},
            {title: "maintenance", url:"/maintenance"},
            {title: "Block Management", url:"/coming-soon"},
            {title: "Report A Repair", url:"/maintenance-request"},
            {title: "Contact Us", url:"/contact"},
            {title: "Careers at Danhamz", url:"/coming-soon"},
            {title: "News & Blogs", url:"/news-and-blogs"},
        ]
    },
    {
        title: "Legal Policies",
        Links: [
            {title: "Terms & Conditions", url: "/terms-and-conditions"},
            {title: "Privacy Policy", url: "/privacy-policy"},
            {title: "Cookies Policy", url: "/cookie-policy"},
        ]
    },

]


export const doings = [
  {
    title: "Danhamz Lettings",
    info: "Helping find the right tenants for your properties",
    para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
    question: "Letting a property in Leeds?",
    desc: "Student, HMO and Professional Tenant Find",
    icon: "tick ka ixom",
  },
  {
    title: "Danhamz Sales",
    info: "Helping homeowners in Leeds to buy and sell their homes.",
    para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
    question: "Selling your home?",
    desc: "Residential Sales",
  },
  {
    title: "Danhamz Investments",
    info: "Helping landlords invest in BTL property across Leeds.",
    para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
    question: "Read more about Danhamz Investments",
    desc: "Property Sourcing",
  },
  {
    title: "Danhamz Block Management",
    info: "Hands-on asset management tailored to you.",
    para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
    question: "Read more about Danhamz Block Management",
    desc: "Block Management",
  },
];


export const ourTeam = [
  {
    title: "Meet the Team",
    info: "Everyone at Danhamz has an important part of play in making it such a brilliant place to work.",
    team: [
      {
        img: "/images/emp1.jpg",
        name: "Abi",
        title: "Commercial Director",
      },
      {
        img: "/images/emp3.jpg",
        name: "Christian Bale",
        title: "Model",
      },
      {
        img: "/images/emp4.jpg",
        name: "Hannah White",
        title: "Human Resource Manager",
      },
      {
        img: "/images/emp5.jpg",
        name: "Zao Ch",
        title: "Technical Recruiter",
      },
      {
        img: "/images/emp6.jpg",
        name: "James Bond",
        title: "Martial Arts",
      },
      {
        img: "/images/emp7.jpg",
        name: "Chris Bond",
        title: "Singer",
      },
      {
        img: "/images/emp8.jpg",
        name: "Pitt Bull",
        title: "Musician",
      },
      {
        img: "/images/emp9.jpg",
        name: "Aylis Al",
        title: "Tel correspond",
      },
      {
        img: "/images/emp10.jpg",
        name: "Mia Zyan",
        title: "Research Engineer",
      },
      {
        img: "/images/emp11.jpg",
        name: "Ray wong",
        title: "Software Engineer",
      },
    ],
  },
];

// about page
export const about_award = [
  {
    title: "An Award-Winning Agent",
    info: "At HOP,  we offer Sales, Lettings, Block Management and Investments all under one roof, to deliver a completely holistic property service. Whether you are looking rent, buy, sell, invest or have an entire block of apartments to take care of, our friendly experts are here to help.",
    img: "/images/awards.png",
    button: "Get in touch",
    bg_color: "bg-purple-500",
    url: "#",
    title_color: "text-white",
    info_color: "text-white",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
  },
];

export const about_story = [
  {
    title: "Our Story",
    info: "In 2009, we started out as a ‘Let Leeds’ a pure lettings agency offering property management across Leeds. From the outset, our goal was to offer a more dynamic and innovative service to the tenants and landlords of Leeds. At the start, Let Leeds was the perfect name for us and we soon became the leading independent Letting Agency in Leeds. Over time, we expanded our offering and the name ‘Let Leeds’ no longer embodied everything we do. In 2020, we changed our name to HOP, which stands for the Home of Property.  As HOP, we bringing that same fresh and personal approach we’re renowned for across a wider range of property services to customers in Leeds and beyond. As HOP, we also now offer Sales and Block Management, and Investments alongside our award-winning Lettings service.0 Creating happy homes is still at the heart of our business. Whether it’s a property to rent, a home to buy, an investment to purchase, or ensuring the efficient management of a block, every move matters to HOP.",
    img: "/images/coffee.jpg",
    bg_color: "bg-gray-200",
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    button: "Learn More",
    btn_text: "text-white",
    btn_bg: "bg-pink-300",
  },
];

export const partnerBanner = [
  {
    img: "/images/partner-1.jpg",
  },
  {
    img: "/images/partner-2.jpg",
  },
  {
    img: "/images/partner-3.jpg",
  },
  {
    img: "/images/partner-4.jpg",
  },
  {
    img: "/images/partner-5.jpg",
  },
  {
    img: "/images/partner-6.jpg",
  },
];

export const letting_awards = [
  {
    img: "/images/awards1.jpg",
    title: "2015: Best Single Northern Office – Gold",
    info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
  },
  {
    img: "/images/awards2.jpg",
    title: "2014: Northern Letting Agent of the Year - Silver",
    info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
  },
  {
    img: "/images/awards3.jpg",
    title: "2013: Yorkshire & Humber ESTAS Award – Gold",
    info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
  },
  {
    img: "/images/awards4.jpg",
    title: "2016: Best Small Northern Lettings Agency of the Year - Silver",
    info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
  },
  {
    img: "/images/awards5.jpg",
    title: "2012: Best Northern Single Letting Agency - Silver",
    info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
  },
  {
    img: "/images/awards6.jpg",
    title:
      "2013: Sunday Times Letting Agency of the Year, Northern Office - Gold",
    info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
  },
  {
    img: "/images/awards1.jpg",
    title: "2015: Best Single Northern Office – Gold",
    info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
  },
  {
    img: "/images/awards4.jpg",
    title: "2014: Northern Letting Agent of the Year - Silver",
    info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
  },
  {
    img: "/images/awards1.jpg",
    title: "2015: Best Single Northern Office – Gold",
    info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
  },
  {
    img: "/images/awards2.jpg",
    title: "2014: Northern Letting Agent of the Year - Silver",
    info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
  },
  {
    img: "/images/awards3.jpg",
    title: "2013: Yorkshire & Humber ESTAS Award – Gold",
    info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
  },
];
// about page

// instant valuation page
export const instantValuation = [
  {
    img: "/images/bg-valu.jpg",
    title: "Danhamz",
    online: "Free Instant Online Valuation",
    info: "Enter the property postcode below to receive your instant online valuation from HOP. One of our team will then be in touch to arrange a full market appraisal.",
    icon: <Icon icon="mdi:location" />,
    location: "Find Address",
    address: {
      type: "input",
    },
    choose: [
      {
        noOfbeds: "How many bedrooms do you need?",
        quantity: [
          { count: "Number Of Bedrooms", value: "" },
          { count: "Studio", value: "Studio" },
          { count: "1", value: "1" },
          { count: "2", value: "2" },
          { count: "3", value: "3" },
          { count: "4", value: "4" },
          { count: "5", value: "5" },
          { count: "6", value: "6" },
        ],
      },
      {
        noOfbeds: "Property Type",
        quantity: [
          { count: "Property Type", value: "" },
          { count: "Flat", value: "Flat" },
          { count: "Terraced House", value: "Terraced House" },
          { count: "Semi Detatched House", value: "Semi Detatched House" },
          { count: "Detatched House", value: "Detatched House" },
          { count: "Detatched Bunglow", value: "Detatched Bunglow" },
        ],
      },
    ],
    typeOfval: [
      {
        noOfbeds: "Type of Valuation",
        quantity: [
          { count: "Type of Valuation", value: "" },
          {
            count: "Sales And Letting Valuation",
            value: "Sales And Letting Valuation",
          },
          { count: "Sales Valuation", value: "Sales Valuation" },
          { count: "Lettings Valuation", value: "Lettings Valuation" },
          { count: "Detatched House", value: "Detatched House" },
          { count: "Detatched Bunglow", value: "Detatched Bunglow" },
        ],
      },
    ],
  },
];

export const timings = [
  {
    title: "Leeds",
    info: [
      {
        icon: <Icon icon="iconoir:phone" />,
        title: "0113 204 2900",
      },
      {
        icon: <Icon icon="mdi:location" />,
        title:
          "The Crescent, 13 The Crescent, Woodhouse, Leeds LS6 2NW, United Kingdom",
      },
    ],
    detail: [
      {
        title: "Opening Hours",
        timimngs: [
          {
            day: "Monday - Thursday",
            time: "10:00am - 6:00pm",
          },
          {
            day: "Friday",
            time: "10:00am - 6:00pm",
          },
          {
            day: "Saturday",
            time: "11:00am - 2:00pm",
          },
        ],
      },
      {
        title: "Viewing Hours",
        timimngs: [
          {
            day: "Monday - Thursday",
            time: "10:30am - 5:30pm",
          },
          {
            day: "Friday",
            time: "10:30am - 5:30pm",
          },
          {
            day: "Saturday",
            time: "11:30am - 1:30pm",
          },
        ],
      },
    ],
  },
];

// report page
export const report_nav = [
    {
        title:"Need to report a repair?",
        info: "Use our 24 hour automated system.",
        img: "/images/clock_1.png",
        info2: "Whether you're a tenant of ours or not, we offer maintenance services to anyone who needs them. At Danhamz, we utilize a fully automated online reporting system for property repairs and maintenance.",
        para: `We extend our maintenance services beyond just our tenants to anyone in need. If you're a new client and report a repair through our automated system, we'll promptly contact you to discuss the details and offer a quote for the required work. Just click on the  “Report a Repair" box and fill out the brief maintenance request form. This will allow us to quickly reach out to you and offer assistance. `,
        para2: `To expedite assistance, Danhamz operates a fully automated online reporting system for repairs and maintenance, available 24/7. Through this system, we swiftly diagnose issues, log and schedule maintenance tasks, closely monitor our contractors, and promptly dispatch the appropriate professionals to address your needs. `,
        para3: `Please note that until a request is logged through our online system, we're unable to dispatch assistance. However, once your issue is logged, we'll promptly get in touch to discuss the next steps and, if necessary, arrange for a contractor to visit your location. `
    }
]

export const report_article = [
    {
        info:`We prioritize offering a maintenance service that is fast, reliable, and trustworthy. It's essential to utilize our online portal for logging any maintenance and repair issues as we can only address requests once they are logged in the system. `,
        title: `Logging maintenance requests through our portal typically results in quicker resolution compared to reporting via telephone or email. Additionally, all emergencies should be reported through the portal. `,
        info2: `In the event of an out-of-hours emergency, please log your issue as usual. Once logged, please call our number at 0113 2042900 and select the maintenance department. Your call will then be directed to our out-of-hours maintenance services for assistance. `
    },
    {
        title: "We prioritize offering a maintenance service that is fast, reliable, and trustworthy. It's essential to utilize our online portal for logging any maintenance and repair issues as we can only address requests once they are logged in the system. ",
        info: "Once the job is logged, we will prioritize tasks and provide you with an estimated timeframe. Please be aware: we can only commit to the mentioned timescales once the maintenance request has been logged online. If our contractors are unable to complete the task within the agreed timescales, please notify your Property Manager promptly. ",
        img: "/images/priority.png",
        info2: "In some cases, significant works may require quoting, and boiler replacements might take longer due to parts ordering.  Here's an approximate timeline they strive to adhere to whenever feasible: ",
    }
]

// report page

// login page

export const login = [
  {
    name: "email",
    label: "Email Address",
    placeholder: "Email address",
    type: "email",
    icon: <Icon icon="ic:round-email" />,
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    icon: <Icon icon="ic:outline-lock" />,
    rules: {
      message: "Password is required",
    },
  },
];
export const signup = [
  {
    name: "username",
    label: "Name",
    placeholder: "enter your name",
    type: "text",
    icon: <Icon icon="ic:round-account" />,
    rules: {
      required: "name is required",
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: "Enter a valid name",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Email address",
    type: "email",
    icon: <Icon icon="ic:round-email" />,
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    icon: <Icon icon="ic:outline-lock" />,
    rules: {
      required: "Password is required",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        message: "please enter a strong password",
      },
    },
  },
];
// login page

export const signup_content = [
  {
    title: "So what is PropertyFile?",
    info: "PropertyFile is an online platform designed to keep you informed & updated on your properties whether you’re selling, letting or renting.",
    content: [
      {
        img: "/images/rent_img.png",
        title: "Landlords",
        info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
      },
      {
        img: "/images/key_img.png",
        title: "Tenants",
        info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
      },
    ],
  },
];

export const download_app = [
  {
    title: "Download our tenant app",
    info: "Our tenant app keeps you notified throughout your tenancy with notifications for important events. Also report problems at your property and track their progress.",
    img: "/images/timeline.jpg",
  },
];
// signup page

// student-page
export const lettings_para1 = [
  {
    title: "A bit about Danhamz.. ",
    icon: <Icon icon="mdi:lightbulb-on-outline" />,
    lists: [
      "At the core of our business lies the mission of creating joyful homes, and there's nothing we love more than connecting tenants with their ideal living spaces. This entails understanding your unique needs and preferences when you reach out to us. Whether you seek a pet-friendly environment or proximity to your favourite local spots, we're dedicated to helping you discover a residence that perfectly suits you. ",
      "A significant portion of our tenants first engage with us during their student years, leasing their student accommodation through Danhamz. Remarkably, many opt to remain with us beyond graduation.",
      "Explore premium accommodations in Leeds and beyond with our hand-picked selection. Search easily online or visit Hyde Park branch. Enjoy hassle-free renting with all-inclusive tenancies and no fees. Rest assured with our 24/7 repair reporting and regulatory compliance. ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/img/lettings_main.jpeg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];

export const sales_para1 = [
  {
    title:
      "We're here to provide sellers & buyers with assistance and expertise.  ",
    icon: <Icon icon="mdi:lightbulb-on-outline" />,
    lists: [
      "From the initial stages, our team stands ready to assist you. Your property will receive a personalized touch as our valuer conducts an on-site visit, collaborating closely with our local experts to craft a tailored marketing strategy. Throughout the entire process, we manage inquiries, negotiate offers, and oversee your sale seamlessly, ensuring a smooth journey from acceptance to completion. ",
      "For buyers, Danhamz is your reliable companion in discovering your perfect home. Whether you’re a first-time buyer, upsizer, downsizer, or investor, we're dedicated to supporting you every step of the way. Leveraging our local knowledge, we provide a diverse selection of properties. Contact us to explore available options and make informed decisions. ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/sales3.jpg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];

export const lettings_para2 = [
  {
    title: "Rental for students ",
    lists: [
      "Ease into Student Life with Hassle-Free Lettings. ",
      "Discover the perfect student accommodation with Danhamz Lettings. With years of expertise in serving the student community, we're your go-to destination for comfortable and affordable student living in Leeds. Our wide range of properties caters to every need and budget, ensuring that you find the ideal place to call home during your academic journey. ",
      "Benefit from our extensive experience in student lettings, providing you with peace of mind and assurance throughout your tenancy. Whether you're looking for a cozy studio or a shared apartment with friends, we have options to suit every preference. ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/lettings4.jpeg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];
export const sales_para2 = [
  {
    title: "Reasons to sell with Danhamz ",
    lists: [
      "Swift market entry: Within 24 hours of appointing us, your property will be listed. ",
      "Exceptional success rate: On average, 97% of sellers achieve their desired asking price. ",
      "Extensive online exposure: Your property receives maximum visibility on our website, Rightmove, Zoopla, and OnTheMarket. ",
      "Complimentary property enhancement tips: We provide free advice to enhance your property's attractiveness. ",
      "Convenient viewing arrangements: We accommodate weekend and evening viewings tailored to your schedule. ",
      "Professional photography: Our team employs high-resolution photography to present your property in the best possible light. ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/sales4.jpg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];
export const sales_para3 = [
  {
    title: "Buying process ",
    lists: [
      "1. Property Search ",
      "Explore properties conveniently through our website's search feature. Our team is always on hand to help you and keep you informed of the latest properties available for sale ",
      "2. Property Viewings ",
      "We understand the importance of flexibility in scheduling viewings to fit your lifestyle. That's why we offer viewings six days a week, including evenings ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/sales5.jpg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];
export const sales_para4 = [
  {
    title: "",
    lists: [
      "3. Choosing a Mortgage ",
      "Navigating the myriad of available mortgages can be daunting and time-consuming. It's crucial to find one that aligns with your unique requirements. You can simply schedule an appointment with us, and we'll initiate the process for you. ",
      "4. The Offer ",
      "When you’ve found the property for you, it’s time to make your offer. Take your time when making your first offer. ",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/sales6.jpg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];

export const sales_para5 = [
  {
    title: "",
    lists: [
      "5. Valuation/Survey ",
      "Consider opting for a full structural survey, particularly for older properties, as it can uncover potential issues that may affect your mortgage approval and help you avoid costly surprises before finalizing the purchase. ",
      "6. Conveyancing  ",
      "Conveyancing is the term that is used when the ownership of your purchase property is transferred to you. You will need to instruct a conveyancing solicitor to handle the paperwork and legal work involved in this process ",
      "7. Completion",
      "Once all paperwork is completed, your mortgage offer secured, and your solicitor has received all necessary documents, it's time to proceed with exchanging contracts with the seller.",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/sales7.jpg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];

export const lettings_para3 = [
  {
    title: "Rental for families",
    lists: [
      "Discover the ideal family rental with Danhamz Lettings. Our handpicked selection of properties is tailored to meet the unique needs of families like yours. Whether you're looking for a spacious home with a garden for your little ones to play in, or proximity to top schools and amenities, we have you covered. ",
      "With our friendly and experienced team guiding you every step of the way, finding the perfect family rental has never been easier. Enjoy peace of mind with our hassle-free renting experience and rest assured that your family's needs are our top priority.",
    ],
    lists_style: false,
    lists_color: "text-black",
    img: "/images/lettings5.jpeg",
    title_color: "text-amber-500",
    info_color: "text-gray-900",
    btn_bg: "bg-[#152347]",
    btn_text: "text-white",
    button: "Find out more",
  },
];



export const our_process = [
  {
    title: "Step 1: Start the search",
    info: [
      {
        img: "/images/stu_img6.png",
        para: "Search our available student accommodation. Whether you’d prefer to browse our website, check out Rightmove or scroll through our social channels, the first step in finding your perfect student home is to take a look at our properties and see what takes your fancy. Click here for our property search or we can also send our hottest picks straight to your inbox, just register your details here.",
      },
    ],
  },
  {
    title: "Step 2: Call us to arrange a viewing",
    info: [
      {
        img: "/images/stu_img7.png",
        para: "Call us to arrange a viewing Give us a call to book in a viewing and we can match you to other suitable properties at the same time. All our staff are super friendly and will take you through the options available to you, just give the Leeds Team a call on 0113 322 9324. We’ve invested in high tech cameras and virtual tour technology so you can fully explore the property online without even leaving home.",
      },
    ],
  },
  {
    title: "Step 3: Viewings",
    info: [
      {
        img: "/images/stu_img8.png",
        para: "Viewings All our properties have virtual tours, meaning you are free to explore your potential new homes from the comfort of your sofa! If you would prefer to view in person, give us a call or click ‘book a viewing’ on your fave property to arrange an appointment and we’ll book you in. Our viewings take place with our knowledgeable student property experts who will meet you at the property, show you round and can give you the low-down on all you need to know.",
      },
    ],
  },
  {
    title: "Step 4: Reserve the property",
    info: [
      {
        img: "/images/stu_img9.png",
        para: "Reserve the propertyFallen in love with your dream student home?We’ll fill out a Pre-Tenancy Agreement with you, which details key information regarding the Tenancy.  In addition, we’ll take a Holding Deposit to take it off the market, this is usually one week’s rent.You will then have 15 days to complete your application or it goes back on the market! Holding Deposit will go towards your Deposit and transferred to a deposit account upon signing the Tenancy Agreement.",
      },
    ],
  },
  {
    title: "Step 5: Complete your application",
    info: [
      {
        img: "/images/stu_img10.png",
        para: "Complete your application Completing your application is easy using the HOP Online Application. Fill in the details and submit the required documents – all electronically! You can even do it from your phone. These details will form part of the final Tenancy Agreement that you and your housemates will need to sign at the end of the process.",
      },
    ],
  },
  {
    title: "Step 6: Guarantor paperwork",
    info: [
      {
        img: "/images/stu_img11.png",
        para: "Guarantor paperwork As a Student you will require a Guarantor who will guarantee that you will pay your rent for the duration of the Tenancy. If for some reason, you don’t pay your rent, then the Guarantor will be liable for it. A Guarantor is usually a parent or guardian earning over £25,000 p/a. As you complete your HOP Online Application with their details, the Guarantor will be emailed a link to fill in their information too and upload the relevant documents online. The Guarantor will then be referenced and credit checked as part of the application process.",
      },
    ],
  },
  {
    title: "Step 7: The property is yours!",
    info: [
      {
        img: "/images/stu_img12.png",
        para: "The property is yours! Once the application, paperwork and referencing is complete, the final Tenancy Agreement will be sent electronically to all parties to sign. Once signed, we’ll check everything is as it should be, countersign it, and the balance of the Deposit becomes due. The final, signed Tenancy Agreement will be issued with prescribed information automatically, once completed. You’ll then need to pay the remainder of your Deposit. The Holding Deposit carries forward to become part of your deposit, and the whole thing is held by the TDS (Tenancy Deposit Scheme), which holds it securely throughout your Tenancy.",
      },
    ],
  },
  {
    title: "Step 8: Pay first month's rent",
    info: [
      {
        img: "/images/stu_img13.jpg",
        para: "Pay first month’s rent As it will state in your Tenancy Agreement, 14 days before your Tenancy start date, you’ll need to pay your first rent instalment and arrange key collection dates with the HOP team. It’s important you set up a standing order to pay the initial rent payment by this deadline, as we can’t release keys until these funds are cleared. On a joint tenancy, where you are sharing with housemates, all parties will need to have paid their first rent instalment in full before the keys can be released to anyone in the group.",
      },
    ],
  },
  {
    title: "Step 9: Move in a day!",
    info: [
      {
        img: "/images/stu_img14.jpg",
        para: "Move in day! Book an appointment with the team to collect your keys and Tenancy Pack either on, or a few days after, your Tenancy start date (usually around the 1st July for students). Don’t forget that you will need to bring your passport/ID with you so we can release the keys. Then you can move in to your perfect pad and set about making it your new home!",
      },
    ],
  },
];

// property search page

export const rentContainer1 = [
  {
    title: "Min Price",
    name: "minPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Minimum", value: 400 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Max Price",
    name: "maxPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Maximum", value: 3650 },
      { title: "£450", value: 1000 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Min Beds",
    type: "select",
    name: "minBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 0 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Max Beds",
    type: "select",
    name: "maxBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Maximum", value: 11 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Property Types",
    type: "select",
    name: "propertyType",
    icon: <Icon icon="clarity:house-solid" />,
    options: [
      { title: "No Preference", value: "No Preference" },
      { title: "Detatched", value: "Detatched" },
      { title: "Share House", value: "Share House" },
      { title: "Semi Detatched", value: "Semi Detatched" },
      { title: "Tarraced", value: "Tarraced" },
      { title: "Bunglow", value: "Bunglow" },
      { title: "Appartment/Flat", value: "Flat" },
      {title: "Exclude Share House", value: "exclude-share-house"},
    ],
  },
  {
    title: "Features",
    type: "select",
    name: "features",
    icon: <Icon icon="material-symbols:feature-search" />,
    options: [
      { title: "No Preference", value: "No Preference" },
      { title: "Video Viewing", value: "Video Viewing" },
      { title: "Garden", value: "Garden" },
      { title: "Parking", value: "Parking" },
      { title: "Garage", value: "Garage" },
    ],
  },
  {
    title: "Available From",
    type: "select",
    name: "isAvailableFrom",
    icon: <Icon icon="uim:calender" />,
    options: [
      { title: "Available anytime", value: "anytime" },
      { title: "Immediately", value: "immediately" },
      { title: "Within 1 month", value: "within 1 month" },
      { title: "Within 3 months", value: "within 3 months" },
      { title: "Within 6 months", value: "within 6 months" },
      { title: "Within 1 year", value: "within 1 year" },
    ],
  },
];
export const rentContainer2 = [
  {
    title: "Min Price",
    name: "minPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Minimum", value: 400 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Max Price",
    name: "maxPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Maximum", value: 4000 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Min Beds",
    type: "select",
    name: "minBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 0 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Max Beds",
    type: "select",
    name: "maxBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 15 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Availability",
    type: "select",
    name: "isAvailableFrom",
    icon: <Icon icon="uim:calender" />,
    options: [
      { title: "Available anytime", value: "anytime" },
      { title: "Immediately", value: "immediately" },
      { title: "Within 1 month", value: "within 1 month" },
      { title: "Within 3 months", value: "within 3 months" },
      { title: "Within 6 months", value: "within 6 months" },
      { title: "Within 1 year", value: "within 1 year" },
    ],
  },
];
export const buyContainer1 = [
  {
    title: "Min Price",
    name: "minPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Minimum", value: 400 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Max Price",
    name: "maxPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Maximum", value: 3550 },
      { title: "£450", value: 1000 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Min Beds",
    type: "select",
    name: "minBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 0 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Max Beds",
    type: "select",
    name: "maxBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Maximum", value: 11 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Property Type",
    type: "select",
    name: "propertyType",
    icon: <Icon icon="clarity:house-solid" />,
    options: [
      { title: "No Preference", value: "No Preference" },
      { title: "Detatched", value: "Detatched" },
      { title: "Semi Detatched", value: "Semi Detatched" },
      { title: "Tarraced", value: "Tarraced" },
      { title: "Bunglow", value: "Bunglow" },
      { title: "Appartment/Flat", value: "Flat" },
    ],
  },
  {
    title: "Features",
    type: "select",
    name: "features",
    icon: <Icon icon="material-symbols:feature-search" />,
    options: [
      { title: "No Preference", value: "No Preference" },
      { title: "Video Viewing", value: "Video Viewing" },
      { title: "Garden", value: "Garden" },
      { title: "Parking", value: "Parking" },
      { title: "Garage", value: "Garage" },
    ],
  },
  {
    title: "Available From",
    name: "isAvailableFrom",
    type: "select",
    placeholder: "Select Availability",
    options: [
      { title: "Available anytime", value: "anytime" },
      { title: "Immediately", value: "immediately" },
      { title: "Within 1 month", value: "within 1 month" },
      { title: "Within 3 months", value: "within 3 months" },
      { title: "Within 6 months", value: "within 6 months" },
      { title: "Within 1 year", value: "within 1 year" },
    ],
  },
];

export const buyContainer2 = [
  {
    title: "Min Price",
    name: "minPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Minimum", value: 400 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Max Price",
    name: "maxPrice",
    icon: <Icon icon="bx:pound" />,
    type: "select",
    options: [
      { title: "No Maximum", value: 4000 },
      { title: "£450", value: 450 },
      { title: "£550", value: 550 },
      { title: "£650", value: 650 },
      { title: "£750", value: 750 },
      { title: "£850", value: 850 },
      { title: "£950", value: 950 },
      { title: "£1050", value: 1050 },
      { title: "£1150", value: 1150 },
      { title: "£1250", value: 1250 },
      { title: "£1350", value: 1350 },
      { title: "£1450", value: 1450 },
      { title: "£1550", value: 1550 },
      { title: "£1650", value: 1650 },
      { title: "£1750", value: 1750 },
      { title: "£1850", value: 1850 },
      { title: "£1950", value: 1950 },
      { title: "£2050", value: 2050 },
      { title: "£2150", value: 2150 },
      { title: "£2250", value: 2250 },
      { title: "£2350", value: 2350 },
      { title: "£2450", value: 2450 },
      { title: "£2500", value: 2550 },
    ],
  },
  {
    title: "Min Beds",
    type: "select",
    name: "minBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 0 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Max Beds",
    type: "select",
    name: "maxBedrooms",
    icon: <Icon icon="fa6-solid:bed" />,
    options: [
      { title: "No Minimum", value: 15 },
      { title: "1 Bedroom", value: 1 },
      { title: "2 Bedroom", value: 2 },
      { title: "3 Bedroom", value: 3 },
      { title: "4 Bedroom", value: 4 },
      { title: "5 Bedroom", value: 5 },
      { title: "6 Bedroom", value: 6 },
      { title: "7 Bedroom", value: 7 },
      { title: "8 Bedroom", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
  },
  {
    title: "Availability",
    type: "select",
    name: "isAvailableFrom",
    icon: <Icon icon="uim:calender" />,
    options: [
      { title: "Available anytime", value: "anytime" },
      { title: "Immediately", value: "immediately" },
      { title: "Within 1 month", value: "within 1 month" },
      { title: "Within 3 months", value: "within 3 months" },
      { title: "Within 6 months", value: "within 6 months" },
      { title: "Within 1 year", value: "within 1 year" },
    ],
  },
];

// property search page



// property refubs
export const propOtimisation = [
  {
    title: "Why Choose Danhamz For Your Refurbishment?",
    img: "/images/refub1.jpg",
    lists: [
      "At Danhamz, we are dedicated to ensuring your rental property performs at its peak and delivers optimal returns. ",
      "As experts in rental properties, we know what it takes to create a desirable and profitable investment. We understand tenant preferences because we listen to their feedback. From minor upgrades to full-scale project management, our skilled team ensures your asset generates the highest possible rents. Investing wisely in the right areas not only enhances the property's appeal but also achieves higher rents, attracts better tenants, and provides long-term security for your investment. Our service includes a comprehensive analysis of your rental property, with recommendations on maximizing returns and minimizing vacancy periods. ",
      "Once we've identified the key improvements for your property, we plan and execute the work with our expert contractors, transforming your property into a high-performing rental. ",
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const responseRefurbish = [
  {
    title: "How can we assist you?",
    video: "/video/refub_video.mp4",
    lists: [
      "We can help with almost anything! From minor cosmetic updates to complete refurbishments, including conversions and extensions, we work with trusted local contractors to handle all aspects of building work and property maintenance. ",
      "Our services include: ",
      "1. Minor Cosmetic Work: Painting, decorating, and minor repairs to enhance your property’s appeal. ",
      "2. Full Refurbishments: Transforming your property from top to bottom to improve its value and attractiveness. ",
      "3. Conversions and Extensions: Expanding and modifying spaces to better suit your needs and increase market value. ",
      "No job is too big or too small. You can be as involved in the process as you wish, providing as much or as little input as you prefer. "
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const howITWorks = [
  {
    title: "How does it work?",
    img: "/images/refub3.jpg",
    lists: [
      "At Danhamz, we start by thoroughly assessing your property to figure out the best ways to make it more appealing to tenants today and to make it more profitable for you. This could mean small changes like new carpets or paint, or bigger projects like redoing the kitchen or bathroom. ",
      "We're also equipped to handle larger modifications, like adding rooms, converting spaces like basements, or even changing how the property is used. We'll help you decide on the best rental strategy too, like whether to rent to multiple tenants or just one, and who to target as renters. ",
      "Understanding what tenants want and when they're looking for properties helps us make the right decisions to increase your income. So whether you're aiming for young professionals, students, or families, we'll help you come up with a plan that works for you and keeps the rent coming in steadily. ",
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const strategicApproach = [
  {
    title: "Refurbishment Made Easy ",
    img: "/images/refub_2.jpg",
    lists: [
      "Every property typically follows a lifecycle, beginning with a fresh refurbishment and eventually requiring complete renovation. ",
      "Yet, it's not just wear and tear you should consider—keeping things updated is crucial too. Rental demand, decor trends, and tenant expectations evolve, influencing occupancy rates, rent values, and the property's overall worth. ",
      "In addition to offering advice and suggesting necessary changes, we'll handle the implementation as well, utilizing our team of expertly chosen contractors. ",
    ],
    lgHeight: true,
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const hassleFreeRefub = [
  {
    title: "Adding the Final Touches ",
    img: "/images/refub5.jpg",
    lists: [
      "We believe in the power of small details. When it comes to preparing a rental property, the way it's furnished and presented matters just as much as the major features like the kitchen or bathroom.",
      "Whether your property is geared towards students or professionals, we're passionate about bringing creativity into the mix. We collaborate with a wide range of suppliers, both local and national, to ensure that your property stands out and leaves a lasting impression on potential tenants. ",
      `It's all about creating that extra "Wow!" factor that sets your property apart from the rest.`,
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const trustedTeam = [
  {
    title: "Peace of Mind ",
    img: "/images/refub7.jpg",
    lists: [
      "Our team boasts extensive expertise in property development across Leeds and its surrounding areas. Over the years, we've nurtured strong relationships with proficient teams of builders specializing in high-quality, cost-effective construction work with minimal disruption. Managed landlords benefit from exclusive rates and perks, alongside the assurance that all our contracted builders are fully insured and well-versed in current regulations. ",
      "We'd be delighted to showcase recent examples of refurbished rental properties, complete with feedback from both tenants and landlords who have been thrilled with the results. Don't hesitate to reach out for comprehensive details. We aspire to be more than just your letting agent. ",
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

// block managenet page
export const blockManagement1 = [
  {
    title: "Block Management with Danhamz ",
    img: "/images/block2.jpg",
    lists: [
      "We offer a comprehensive range of services for apartment blocks and their communal areas in Leeds and surrounding areas such as Manchester, Huddersfield, Halifax Bradford etc, ensuring that all aspects of management and maintenance are expertly handled. Our services include: ",
      "1: Day-to-Day Maintenance: We perform routine upkeep tasks to ensure that the property remains in excellent condition. This includes everything from cleaning and landscaping to minor repairs and general maintenance.  ",
      "2: Risk Assessments: Our team conducts thorough risk assessments to identify potential hazards and implement measures to mitigate them. This ensures the safety of all residents and compliance with relevant regulations. ",
      "3: Health and Safety Checks: Regular inspections are carried out to maintain a safe living environment. We ensure that all safety protocols are followed and that any issues are promptly addressed. ",
      "4: Advisory Services for Developers: We provide expert advice to developers on building design and construction. Our input helps in creating safe, functional, and aesthetically pleasing living spaces that meet all necessary standards and regulations. ",
      "By offering these services, we ensure that every aspect of apartment block management is meticulously handled, providing a safe, well-maintained, and enjoyable living environment for residents, as well as peace of mind for developers. "
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const blockManagement2 = [
  {
    title: "Property Management & Maintenance ",
    img: "/images/block3.jpg",
    lists: [
      "Facilities Management : Our Property Management Service, through our division Danhamz, offers dedicated facilities management. Our experts handle repairs and maintenance of common areas and individual units as needed. Services include cleaning, handyman work, plumbing, electrical, and carpentry, provided by our affiliate company.  ",
      "Repairs and Maintenance : We perform a wide range of tasks including cleaning, handyman work, electrical, plumbing, carpentry, and more. ",
      "Property Inspections : We conduct regular property inspections to ensure your property remains in good condition and to identify any needed repairs or maintenance.  ",
      "Utility Handling : We manage utility services between tenants, ensuring interim bills are paid on time and accurate meter readings are taken during check-out and move-in. ",
      "Health and Safety Compliance : Danhamz ensures your property complies with all health and safety regulations and handles ongoing maintenance, responding promptly to any emergencies. "
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const blockManagement3 = [
  {
    title: "Compliance and Lease Enforcement ",
    img: "/images/block4.jpg",
    lists: [
      "As part of Danhamz Block Management service, we provide comprehensive lease enforcement and compliance monitoring for both owned and leased properties. We review governing documents to understand the rights and responsibilities of unit owners and tenants as outlined in lease agreements. Collaborating closely with clients, we determine the necessary oversight to uphold all agreements.  ",
      "Key aspects of our compliance work include:  ",
      "1: Ensuring timely payment of rents and financial obligations ",
      "2: Monitoring property standards for maintenance and condition ",
      "3: Facilitating dispute resolution between owners and tenants ",
      "4: Mediating conflicts among residents ",
      "5: Overseeing maintenance during tenant move-ins and move-outs ",
      "6: Administering varying lease terms for different tenants "
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const blockManagement4 = [
  {
    title: "Health and Safety Compliance ",
    img: "/images/block5.jpg",
    lists: [
      "Our Health and Safety Compliance Services comprehensively address critical health and safety factors within both domestic and commercial properties. We manage various aspects to ensure properties meet all relevant standards and regulations, including: ",
      "1: Electrical Safety: Regular inspections and maintenance to prevent electrical hazards.  ",
      "2: Gas Safety: Ensuring gas appliances and installations are safe and compliant. ",
      "3: Plumbing: Maintaining plumbing systems to prevent leaks and contamination. ",
      "4: Risk Assessments: Conducting thorough evaluations to identify and mitigate potential hazards. ",
      "5: Hazardous Substances: Proper handling and storage of dangerous materials to prevent accidents. ",
      "6: Fire Safety: Implementing fire prevention measures, ensuring functional fire alarms, and maintaining emergency exits. ",
      "7: Accident Reporting: Establishing protocols for reporting and addressing accidents promptly. ",
      "By managing these key areas, we ensure that your properties comply with all health and safety regulations, providing a safe environment for all occupants. "
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

export const blockManagement5 = [
  {
    title: "Seamless Handover Process ",
    img: "/images/block6.jpg",
    lists: [
      "At Danhamz, we ensure a smooth transition from your current property management company at no additional cost to you in most cases. Typically, one month's notice is required by most management companies. ",
      "We uphold the highest standards of integrity for every development and location we manage. Regardless of size, all properties under our management receive unparalleled service quality. If your current development requires a new property management company, we guarantee a seamless transition with minimal involvement required from the property owner. ",
    ],
    title_color: "text-[#152347]",
    info_color: "text-gray-900",
    lists_style: false,
    url: "/",
    lists_color: "text-gray-900",
    bg_color: "bg-white",
  },
];

// propert-update form
export const propertyUpdateForm = [
  {
    label: "Property Name",
    name: "propertyName",
    type: "text",
    placeholder: "Property Name",
    rules: {
      required: "Property Name is required",
    },
  },
    //       const suggestions = ['Armley', 'Beeston', 'Bradford', 'Bramley', 'City Center', 'East End Park', 'Farsley', 'Gildersome', 'Horsforth', 'Leeds', 'Meanwood', 'Morley', 'Northgate House', 'Pudsey', 'Stanningley', 'Wortley', 'Wyke'];

  // {
  //   label: "Area Name",
  //   name: "areaName",
  //   type: "select",
  //   options: [
  //     { label: "Armley", value: "Armley" },
  //     { label: "Beeston", value: "Beeston" },
  //     { label: "Bradford", value: "Bradford" },
  //     { label: "Bramley", value: "Bramley" },
  //     { label: "City Center", value: "City Center" },
  //     { label: "East End Park", value: "East End Park" },
  //     { label: "Farsley", value: "Farsley" },
  //     { label: "Gildersome", value: "Gildersome" },
  //     { label: "Horsforth", value: "Horsforth" },
  //     { label: "Leeds", value: "Leeds" },
  //     { label: "Meanwood", value: "Meanwood" },
  //     { label: "Morley", value: "Morley" },
  //     { label: "Northgate House", value: "Northgate House" },
  //     { label: "Pudsey", value: "Pudsey" },
  //     { label: "Stanningley", value: "Stanningley" },
  //     { label: "Wortley", value: "Wortley" },
  //     { label: "Wyke", value: "Wyke" },
  //   ],
  //   placeholder: "Area Name",
  //   rules: {
  //     required: "Area Name is required",
  //   },
  // },
  {
    label: "Property Availability",
    name: "isPropertyAvailable",
    type: "select",
    placeholder: "Select Availability",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    rules: {
      required: "Availability is required",
    },
  },
  {
    label: "Property Type",
    name: "propertyType",
    type: "select",
    placeholder: "Property Type",
    options: [
      { label: "Bunglow", value: "Bunglow" },
      { label: "Share House", value: "Share House" },
      { label: "Flat/Appartment", value: "Flat" },
      { label: "Detached House", value: "Detached House" },
      { label: "Semi Detached House", value: "Semi Detached House" },
      { label: "Tarraced House", value: "Terraced House" },
    ],
    rules: {
      required: "Property Type is required",
    },
  },
  {
    label: "Share House",
    name: "shareHouse",
    type: "select",
    placeholder: "Select Type",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    rules: {
      // required: "Share House is required",
    },
  },
  {
    label: "Meta Title",
    name: "metaTitle",
    type: "text",
    placeholder: "Meta Title",
    rules: {
      // required: "Meta Title is required",
    },
  },
  {
    label: "Meta Description",
    name: "metaDescription",
    type: "textarea",
    placeholder: "Meta Description",
    rules: {
      // required: "Meta Title is required",
    },
  },
  {
    label: "Monthly Price",
    name: "pricePerMonth",
    type: "number",
    placeholder: "Monthly Price",
    rules: {
      required: "Monthly Price is required",
      pattern: {
        value: /^[0-9]*$/,
        message: "Enter a valid price",
      },
    },
  },
  {
    label: "Weekly Price",
    name: "pricePerWeek",
    type: "number",
    placeholder: "Weekly Price",
    rules: {
      required: "Weekly Price is required",
      pattern: {
        value: /^[0-9]*$/,
        message: "Enter a valid price",
      },
    },
  },
  {
    label: "Furnished/Unfurnished",
    name: "furnished",
    type: "select",
    placeholder: "Choose a category",
    options: [
      { label: "Furnished", value: "furnished" },
      { label: "Part Furnished", value: "part-furnished" },
      { label: "Unfurnished", value: "unfurnished" },
    ],
    rules: {
      required: "Furnished/Unfurnished is required",
    },
  },
  {
    label: "Bedrooms",
    name: "bedrooms",
    type: "select",
    placeholder: "Choose number of rooms",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
      { label: "6", value: 6 },
      { label: "7", value: 7 },
      { label: "8", value: 8 },
      {label: "9", value: 9},
      {label: "10", value: 10},
    ],
    rules: {
      required: "Bedrooms is required",
    },
  },
  {
    label: "Bathrooms",
    name: "bathrooms",
    type: "select",
    placeholder: "Choose number of bathrooms",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
    ],
    rules: {
      required: "Bathrooms is required",
    },
  },
  {
    label: "Bills",
    name: "bills",
    type: "select",
    placeholder: "Select a category",
    options: [
      { label: "Bills Included", value: "Bills Included" },
      { label: "Some", value: "some" },
      { label: "Bills Not Included", value: "Bills Not Included" },
    ],
    rules: {
      required: "Bills is required",
    },
  },
  {
    label: "Features",
    type: "select",
    name: "features",
    icon: <Icon icon="material-symbols:feature-search" />,
    options: [
      { label: "No Preference", value: " " },
      { label: "Video Viewing", value: "Video Viewing" },
      { label: "Garden", value: "Garden" },
      { label: "Parking", value: "Parking" },
      { label: "Garage", value: "Garage" },
    ],
    rules: {
      // required: "Features is required",
    },
  },
  {
    label: "Reception",
    name: "reception",
    type: "select",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ],
    rules: {
      required: "Reception is required",
    },
  },

  {
    label: "Deposit",
    name: "deposit",
    type: "number",
    placeholder: "Enter the details",
  },
  // {
  //   label: "Property Location",
  //   name: "location",
  //   type: "text",
  //   placeholder: "Enter the property location",
  //   rules: {
  //     required: "Property Location is required",
  //   },
  // },
  {
    label: "Property Description",
    name: "description",
    type: "textarea",
    placeholder: "Enter the details",
    rules: {
      required: "Property Description is required",
    },
  },

  {
    label: "Additional Guide",
    name: "aditionalGuide",
    type: "textarea",
    placeholder: "Enter the details",
  },
  {
    label: "Council Tax",
    name: "counselTax",
    type: "text",
    placeholder: "Enter the details",
  },
  {
    label: "Available Date",
    name: "availableDate",
    type: "date",
    placeholder: "Enter the date",
    rules: {
      required: "Available Date is required",
    },
  },
  {
    label: "Available From",
    name: "isAvailableFrom",
    type: "select",
    placeholder: "Select Availability",
    options: [
      { label: "Available anytime", value: "anytime" },
      { label: "Immediately", value: "immediately" },
      { label: "Within 1 month", value: "within 1 month" },
      { label: "Within 3 months", value: "within 3 months" },
      { label: "Within 6 months", value: "within 6 months" },
      { label: "Within 1 year", value: "within 1 year" },
    ],
  },
  {
    label: "Virtual Tour",
    name: "videoLink",
    type: "text",
    placeholder: "Enter the link",
  },
  {
    label: "Epc Link",
    name: "epc",
    type: "text",
    placeholder: "Enter the link",
  },
];
export const propertyUpdateFormSales = [
  {
    label: "Property Name",
    name: "propertyName",
    type: "text",
    placeholder: "Property Name",
    rules: {
      required: "Property Name is required",
    },
  },
  {
    label: "Property Type",
    name: "propertyType",
    type: "select",
    placeholder: "Property Type",
    options: [
      { label: "Flat/Appartment", value: "Flat" },
      { label: "Bunglow", value: "Bunglow" },
      { label: "Flat", value: "Flat" },
    ],
    rules: {
      required: {
        value: true,
        message: "Property Type is required",
      },
    },
  },
  {
    label: "Meta Title",
    name: "metaTitle",
    type: "text",
    placeholder: "Meta Title",
    rules: {
      // required: "Meta Title is required",
    },
  },
  {
    label: "Meta Description",
    name: "metaDescription",
    type: "textarea",
    placeholder: "Meta Description",
    rules: {
      // required: "Meta Title is required",
    },
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Price",
    rules: {
      required: {
        value: true,
        message: "Price is required",
      },
    },
  },
  {
    label: "Furnished/Unfurnished",
    name: "furnished",
    type: "select",
    placeholder: "Choose a category",
    options: [
      { label: "Furnished", value: "furnished" },
      { label: "Unfurnished", value: "unfurnished" },
    ],
    rules: {
      required: {
        value: true,
        message: "This field is required",
      },
    },
  },
  {
    label: "Bedrooms",
    name: "bedrooms",
    type: "select",
    placeholder: "Choose number of rooms",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
      { label: "6", value: 6 },
      { label: "7", value: 7 },
      { label: "8", value: 8 },
      { title: "9 Bedroom", value: 9 },
      { title: "10 Bedroom", value: 10 },
    ],
    rules: {
      required: {
        value: true,
        message: "Bedrooms is required",
      },
    },
  },
  {
    label: "Bathrooms",
    name: "bathrooms",
    type: "select",
    placeholder: "Choose number of bathrooms",
    options: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
    ],
    rules: {
      required: {
        value: true,
        message: "Bathrooms is required",
      },
    },
  },
  {
    label: "Bills",
    name: "bills",
    type: "select",
    placeholder: "Select a category",
    options: [
      { label: "Bills Included", value: "Bills Included" },
      { label: "Bills Not Included", value: "Bills Not Included" },
    ],
    rules: {
      required: {
        value: true,
        message: "Bills is required",
      },
    },
  },
  {
    label: "Features",
    type: "select",
    name: "features",
    icon: <Icon icon="material-symbols:feature-search" />,
    options: [
      { label: "No Preference", value: "" },
      { label: "Video Viewing", value: "Video Viewing" },
      { label: "Garden", value: "Garden" },
      { label: "Parking", value: "Parking" },
      { label: "Garage", value: "Garage" },
    ],
    rules: {
      required: {
        value: true,
        message: "Features is required",
      },
    },
  },
  {
    label: "Reception",
    name: "reception",
    type: "select",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ],
    rules: {
      required: {
        value: true,
        message: "Reception is required",
      },
    },
  },
  {
    label: "Deposit",
    name: "deposit",
    type: "number",
    placeholder: "Enter the details",
  },
  {
    label: "Property Location",
    name: "location",
    type: "text",
    placeholder: "Enter the property location",
    rules: {
      required: {
        value: true,
        message: "Property Location is required",
      },
    },
  },
  {
    label: "Property Description",
    name: "description",
    type: "textarea",
    placeholder: "Enter the details",
    rules: {
      required: {
        value: true,
        message: "Property Description is required",
      },
    },
  },

  {
    label: "Additional Guide",
    name: "aditionalGuide",
    type: "textarea",
    placeholder: "Enter the details",
  },
  {
    label: "Council Tax",
    name: "counselTax",
    type: "text",
    placeholder: "Enter the details",
  },
  {
    label: "Available Date",
    name: "availableDate",
    type: "date",
    placeholder: "Enter the date",
    rules: {
      required: {
        value: true,
        message: "Available Date is required",
      },
    },
  },
  {
    label: "Virtual Tour",
    name: "videoLink",
    type: "text",
    placeholder: "Enter the link",
  },
  {
    label: "Epc Link",
    name: "epc",
    type: "text",
    placeholder: "Enter the link",
  },
];
// propert-update form

export const emailForm = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    rules: {
      required: {
        value: true,
        message: "Email is required",
      },
    },
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "number",
    placeholder: "Enter your phone number",
    rules: {
      required: {
        value: true,
        message: "Phone number is required",
      },
    },
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Enter your phone message",
    rules: {
      required: {
        value: true,
        message: "Message is required",
      },
    },
  },
];
export const valuationForm = [
  {
    label: "Your address",
    name: "address",
    type: "text",
    placeholder: "Enter your address",
    rules: {
      required: {
        value: true,
        message: "first line address is required",
      },
    },
  },
  {
    label: "City/Town",
    name: "town",
    type: "text",
    placeholder: "Enter your city/town",
    rules: {
      required: {
        value: true,
        message: "city/town is required",
      },
    },
  },
  {
    label: "Postal Code",
    name: "postalCode",
    type: "text",
    placeholder: "Enter your postal code",
    rules: {
      required: {
        value: true,
        message: "postal code is required",
      },
    },
  },
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    rules: {
      required: {
        value: true,
        message: "Email is required",
      },
    },
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "number",
    placeholder: "Enter your phone number",
    rules: {
      required: {
        value: true,
        message: "Phone number is required",
      },
    },
  },
  {
    label: "Message (optional)",
    name: "message",
    type: "textarea",
    placeholder: "Enter your phone message",
  },
];

export const repaiReport = [
  {
    id: "bathroom and toilet",
    icon: "/icons/mainIcons/public-toilet.png",
    name: "bathroom and toilet",
    title: "Bathroom and Toilet",
    value: "bathroom and toilet",
    childFault: [
      {
        id: "basin",
        icon: "/icons/childIcons/basin.png",
        name: "basin",
        title: "Basin",
        value: "basin",
        subChildFault: [
          {
            name: "basin_on_brackets",
            title: "Basin on Brackets",
            value: "basin_on_brackets",
            icon: "/icons/subChild/basinonBrackets.png",
            specificFault: [
              {
                name: "basin_blocked",
                title: "basin Blocked",
                value: "Basin blocked",
              },
              {
                name: "brokenBasinBracket",
                title: "broken Basin Bracket",
                value: "Broken basin bracket",
              },
              {
                name: "brokenCrackedBasin",
                title: "broken cracked basin",
                value: "Broken or cracked basin on brackets",
              },
              {
                name: "loseBasinBracket",
                title: "lose Basin Bracket",
                value: "Lose basin bracket",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "basin_on_padestal",
            title: "Basin on Padestal",
            value: "basin_on_padestal",
            icon: "/icons/subChild/basinOnPadestal.png",

            specificFault: [
              {
                name: "basinBlocked",
                title: "basin Blocked",
                value: "Basin blocked",
              },
              {
                name: "brokenBasinBracket",
                title: "broken Basin Bracket",
                value: "Broken basin bracket",
              },
              {
                name: "brokenCrackedBasin",
                title: "broken cracked basin",
                value: "Broken or cracked basin on brackets",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "between_basin_and_wall",
            title: "Between Basin and Wall",
            value: "between_basin_and_wall",
            icon: "/icons/subChild/basinbetweenWall.png",

            specificFault: [
              {
                name: "sealant_discoloured",
                title: "sealant discoloured",
                value: "Sealant discoloured or mouldy",
              },
              {
                name: "water_leaking",
                title: "water leaking",
                value: "Water leaking between basin and wall",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },

          {
            name: "pipe_leaking",
            title: "Pipe Leaking",
            value: "pipe_liking",
            icon: "/icons/subChild/pipeLeaking.png",
            specificFault: [
              {
                name: "pipe_leaking",
                title: "pipe leaking",
                value: "Pipe leaking and basin is on brackets",
              },
              {
                name: "pipe_leaking_behind_padestal",
                title: "pipe leaking behind padestal",
                value: "Pipe leaking behind a padestal",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "plug_hole",
            title: "Plug hole",
            value: "plug_hole",
            icon: "/icons/subChild/plugHole.png",
            specificFault: [
              {
                name: "plug_hole_blocked",
                title: "plug hole blocked",
                value: "Plug hole blocked",
              },
              {
                name: "plug_hole_grill_broken",
                title: "plug hole grill broken",
                value: "Plug hole broken",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "plug_chain",
            title: "Plug Chain",
            value: "plug_chain",
            icon: "/icons/subChild/plugChain.png",
            specificFault: [
              {
                name: "plug_chain_needed",
                title: "plug chain needed",
                value: "Plug chain needed",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "tap",
            title: "Tap",
            value: "tap",
            icon: "/icons/subChild/tap.png",
            specificFault: [
              {
                name: "tap_needed",
                title: "tap_needed",
                value: "Tap needed",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "tiles",
            title: "Tiles",
            value: "tiles",
            icon: "/icons/subChild/tile.png",
            specificFault: [
              {
                name: "tiles_broken",
                title: "Tiles broken",
                value: "tiles_broken",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "bath",
        icon: "/icons/childIcons/bathtub.png",
        name: "bath",
        title: "Bath",
        value: "bath",
        subChildFault: [
          {
            name: "between_bath_and_wall",
            title: "Between Bath and Wall",
            value: "between_bath_and_wall",
            icon: "/icons/subChild/basinbetweenWall.png",
            specificFault: [
              {
                name: "unclean_bath",
                title: "Unclean bath",
                value: "unclean_bath",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            name: "pipes",
            title: "Pipes",
            value: "pipes",
            icon: "/icons/subChild/pipeLeaking.png",

            specificFault: [
              {
                name: "pipes_leak",
                title: "Pipes leak",
                value: "pipes_leak",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            name: "plug_hole",
            title: "Plug hole",
            value: "plug_hole",
            icon: "/icons/subChild/plugHole.png",
            specificFault: [
              {
                name: "plug_hole_broken",
                title: "Plug hole broken",
                value: "plug_hole_broken",
              },
              {
                name: "plug_hole_loose",
                title: "Plug hole loose",
                value: "plug_hole_loose",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            name: "plug_chain",
            title: "Plug Chain",
            value: "plug_chain",
            icon: "/icons/subChild/plugChain.png",
            specificFault: [
              {
                name: "plug_chain_broken",
                title: "Plug chain broken",
                value: "plug_chain_broken",
              },
              {
                name: "plug_chain_loose",
                title: "Plug chain loose",
                value: "plug_chain_loose",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },

          {
            name: "tap",
            title: "Tap",
            value: "tap",
            icon: "/icons/subChild/tap.png",

            specificFault: [
              {
                name: "tap_broken",
                title: "tap broken",
                value: "Tap broken",
              },
              {
                name: "tap_dripping",
                title: "tap dripping",
                value: "Tap dripping",
              },

              {
                name: "tap_lose",
                title: "tap lose",
                value: "Tap lose",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "electric_shower",
        icon: "/icons/childIcons/electric-shower.png",
        name: "electric_shower",
        title: "Electric Shower",
        value: "Electric Shower",
        specificFault: [
          {
            name: "no_hot_water",
            title: "no hot water",
            value: "No hot water",
          },
          {
            name: "no_working_at_all",
            title: "no working at_all",
            value: "No working at all",
          },
          {
            name: "other",
            title: "other",
            value: "Other",
          },
        ],
      },
      {
        id: "extractor_fan",
        icon: "/icons/childIcons/extractor.png",
        name: "extractor_fan",
        title: "Extractor Fan",
        value: "extractor_fan",
        specificFault: [
          {
            name: "not_working",
            title: "not_working",
            value: "Not working",
          },
          {
            name: "other",
            title: "other",
            value: "Other",
          },
        ],
      },
      {
        id: "shower",
        icon: "/icons/childIcons/shower.png",

        name: "shower",
        title: "Shower",
        value: "Shower",
        subChildFault: [
          {
            name: "mixer",
            title: "Mixer",
            value: "mixer",
            icon: <Icon icon="guidance:showers" />,
            specificFault: [
              {
                name: "shower_switch_broken",
                title: "shower switch broken",
                value: "Shower switch broken",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "no_water",
            title: "No Water",
            value: "no_water",
            icon: <Icon icon="guidance:no-drinking-water" />,
            specificFault: [
              {
                name: "no_cold_water",
                title: "no cold water",
                value: "No cold water from shower",
              },
              {
                name: "no_hot_water",
                title: "no hot water",
                value: "No hot water from shower",
              },
              {
                name: "no_water_at_all_shower",
                title: "no water at all shower",
                value: "No water at all from shower",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "plug_hole",
            title: "Plug Hole",
            value: "plug_hole",
            icon: <Icon icon="arcticons:flutterhole" />,
            specificFault: [
              {
                name: "plug_hole_blocked",
                title: "plug hole blocked",
                value: "Plug hole blocked",
              },
              {
                name: "plug_hole_grill_broken",
                title: "plug hole grill broken",
                value: "Plug hole grill broken",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "seal_sealant",
            title: "Seal/sealant",
            value: "seal_sealant",
            icon: <Icon icon="ph:toilet-thin" />,
            specificFault: [
              {
                name: "sealant_discoloured",
                title: "sealant discoloured",
                value: "Sealant discoloured or mouldy",
              },
              {
                name: "water_leaking",
                title: "water leaking",
                value: "Water leaking out of shower",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "shower_curtain_or_screen",
            title: "Shower Curtain or Screen",
            value: "shower_curtain_or_screen",
            icon: <Icon icon="ic:twotone-curtains-closed" />,
            specificFault: [
              {
                name: "shower_curtain_demaged",
                title: "shower curtain demaged",
                value: "Shower curtain demaged",
              },
              {
                name: "shower_screen_demaged",
                title: "shower screen demaged",
                value: "Shower screen demaged",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "shower_head",
            title: "Shower Head",
            value: "shower_head",
            icon: <Icon icon="emojione-monotone:shower" />,
            specificFault: [
              {
                name: "no_move",
                title: "no move",
                value: "Does not move",
              },
              {
                name: "no_stay",
                title: "no stay",
                value: "Does not stay in place",
              },
              {
                name: "fully_blocked",
                title: "fully blocked",
                value: "Fully blocked",
              },
              {
                name: "partially_blocked",
                title: "partially blocked",
                value: "Partially blocked",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "shower_hose",
            title: "Shower Hose",
            value: "shower_hose",
            icon: <Icon icon="game-icons:shower" />,
            specificFault: [
              {
                name: "shower_hose_broken",
                title: "shower hose broken",
                value: "Shower hose broken or leaking",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "shower_tray",
            title: "Shower Tray",
            value: "shower_tray",
            icon: <Icon icon="ion:file-tray-full-outline" />,
            specificFault: [
              {
                name: "shower_tray_blocked",
                title: "shower tray blocked",
                value: "Shower tray blocked",
              },
              {
                name: "tray_ceramic_cracked",
                title: "tray cracked",
                value: "Tray ceramic cracked or broken",
              },
              {
                name: "tray_plastic_cracked",
                title: "tray plastic cracked",
                value: "Tray plastic cracked or broken",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            name: "waste_pipe",
            title: "Waste Pipe",
            value: "waste_pipe",
            icon: <Icon icon="tabler:test-pipe-off" />,
            specificFault: [
              {
                name: "waste_pipe_blocked",
                title: "waste_pipe_blocked",
                value: "Waste pipe blocked",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "wc_toilet",
        icon: "/icons/childIcons/toilet.png",

        name: "wc_toilet",
        title: "WC/Toilet",
        value: "WC/Toilet",
        subChildFault: [
          {
            id: "cistern",
            icon: "/icons/subChild/cistern.png",

            name: "cistern",
            title: "Cistern",
            value: "cistern",
            specificFault: [
              {
                name: "cistern_constantly_flowing",
                title: "cistern constantly flowing",
                value: "Cistern constantly flowing",
              },
              {
                name: "cistern_fixed_wall",
                title: "cistern fixed wall",
                value: "Cistern need to be refixed walls",
              },
              {
                name: "cistern_not_filling_water",
                title: "cistern not filling water",
                value: "Cistern not filling with water",
              },
              {
                name: "cistern_not_flushing",
                title: "cistern not flushing",
                value: "Cistern not flushing",
              },
              {
                name: "cistern_overflowing",
                title: "cistern overflowing",
                value: "Cistern overflowing",
              },
              {
                name: "cracked_high_cistern",
                title: "cracked high cistern",
                value: "Cracked-high level cistern",
              },
              {
                name: "cracked_low_cistern",
                title: "cracked low cistern",
                value: "Cracked low level cistern",
              },
              {
                name: "major_leak",
                title: "major leak",
                value: "Major leak that can not be stoped",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "handle_chain",
            icon: "/icons/subChild/handleChain.png",

            name: "handle_chain",
            title: "Handle Chain",
            value: "handle_chain",
            specificFault: [
              {
                name: "chain_broken",
                title: "chain broken",
                value: "Chain broken",
              },
              {
                name: "handle_broken",
                title: "handle broken",
                value: "Handle broken",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "macerator",
            icon: "/icons/subChild/macerator.png",

            name: "macerator",
            title: "Macerator",
            value: "macerator",
            specificFault: [
              {
                name: "macerator_broken",
                title: "macerator broken",
                value: "Macerator broken",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "pipes",
            icon: "/icons/subChild/pipe.png",

            name: "pipes",
            title: "Pipes",
            value: "pipes",
            specificFault: [
              {
                name: "pipes_blocked",
                title: "pipes_blocked",
                value: "Flush pipe blocked",
              },
              {
                name: "flush_pipe_leaking",
                title: "flush_pipe_leaking",
                value: "Flush pipe leaking",
              },
              {
                name: "flush_pipe_leaking_at_joint",
                title: "flush_pipe_leaking_at_joint",
                value: "Flush pipe leaking at joint with pan",
              },
              {
                name: "toilet_blocked",
                title: "toilet_blocked",
                value: "Toilet blocked",
              },
              {
                name: "waste_pipe_leaking",
                title: "waste_pipe_leaking",
                value: "Waste pipe leaking",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "toilet_seat",
            icon: "/icons/subChild/toiletSeat.png",

            name: "toilet_seat",
            title: "Toilet Seat",
            value: "toilet_seat",
            specificFault: [
              {
                name: "toilet_bowl_cracked",
                title: "toilet_bowl_cracked",
                value: "Toilet bowl blocked",
              },
              {
                name: "toilet_bowl_leaking",
                title: "toilet_bowl_leaking",
                value: "Toilet bowl leaking",
              },
              {
                name: "toilet_refixed",
                title: "toilet_refixed",
                value: "Toilet needs to be refixed to the floor",
              },
              {
                name: "toilet_seat_broken",
                title: "toilet_seat_broken",
                value: "Toilet seat broken",
              },
              {
                name: "toilet_seat_lose",
                title: "toilet_seat_lose",
                value: "Toilet seat loose",
              },
              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },

      {
        id: "other",
        icon: "/icons/mainIcons/question.png",
        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "other",
            value: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    icon: "/icons/mainIcons/kitchen-set.png",
    name: "kitchen",
    title: "Kitchen",
    value: "kitchen",
    childFault: [
      {
        id: "appliances",
        icon: "/icons/childIcons/appliances.png",
        name: "appliances",
        title: "Appliances",
        value: "appliances",
        subChildFault: [
          {
            id: "dishwasher",
            icon: "/icons/subChild/dishwasher.png",

            name: "dishwasher",
            title: "dishwasher",
            value: "dishwasher",
            specificFault: [
              {
                name: "dishwasher_not_turn",
                title: "dishwasher_not_turn",
                value: "Dishwasher does not turn on",
              },
              {
                name: "dishwasher_not_work",
                title: "dishwasher_not_work",
                value: "Dishwasher does not work correctly",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "freezer",
            icon: "/icons/subChild/freezer.png",

            name: "freezer",
            title: "Freezer",
            value: "freezer",
            specificFault: [
              {
                name: "freezer_not_turn",
                title: "freezer_not_turn",
                value: "Freezer does not turn on",
              },
              {
                name: "freezer_not_work",
                title: "freezer_not_work",
                value: "Freezer does not work correctly",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "fridge",
            icon: "/icons/subChild/fridge.png",

            name: "fridge",
            title: "Fridge",
            value: "fridge",
            specificFault: [
              {
                name: "fridge_not_turn",
                title: "fridge_not_turn",
                value: "Fridge does not turn on",
              },
              {
                name: "fridge_not_work",
                title: "fridge_not_work",
                value: "Fridge does not work correctly",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "grill",
            icon: "/icons/subChild/grill.png",

            name: "grill",
            title: "Grill",
            value: "grill",
            specificFault: [
              {
                name: "grill_electric_not_turn",
                value: "grill_electric_not_turn",
                title: "Grill electric does not turn on",
              },
              {
                name: "grill_electric_not_work",
                value: "grill_electric_not_work",
                title: "Grill electric does not work correctly",
              },
              {
                name: "grill_gas_not_turn",
                value: "grill_gas_not_turn",
                title: "Grill gas does not turn on",
              },
              {
                name: "grill_gas_not_work",
                value: "grill_gas_not_work",
                title: "Grill gas does not work correctly",
              },
              {
                name: "grill_switch_broken",
                value: "grill_switch_broken",
                title: "Grill switch broken",
              },
              {
                name: "ventilator_not_work",
                value: "ventilator_not_work",
                title: "Ventilator/fan not work",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "hob",
            icon: "/icons/subChild/hob.png",

            name: "hob",
            title: "Hob",
            value: "hob",
            specificFault: [
              {
                name: "hob_electric_not_turn",
                value: "hob_electric_not_turn",
                title: "Hob electric does not turn on",
              },
              {
                name: "hob_electric_not_work",
                value: "hob_electric_not_work",
                title: "Hob electric does not work correctly",
              },
              {
                name: "hob_gas_not_turn",
                value: "hob_gas_not_turn",
                title: "Hob gas does not turn on",
              },
              {
                name: "hob_gas_not_work",
                vlaue: "hob_gas_not_work",
                title: "Hob gas does not work correctly",
              },
              {
                name: "hob_switch_broken",
                value: "hob_switch_broken",
                title: "Hob switch broken",
              },
              {
                name: "ventilator_not_work",
                value: "ventilator_not_work",
                title: "Ventilator/fan not work",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "laundry",
            icon: "/icons/subChild/laundry.png",

            name: "laundry",
            title: "Laundry",
            value: "laundry",
            specificFault: [
              {
                name: "washing_machine_not_work",
                title: "washing_machine_not_work",
                value: "washing machine not work correctly",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "microwave",
            icon: "/icons/subChild/microwave-oven.png",

            name: "microwave",
            title: "Microwave",
            value: "microwave",
            specificFault: [
              {
                name: "microwave_not_work",
                title: "microwave_not_work",
                value: "Microwave not work correctly",
              },
              {
                name: "microwave_not_turn",
                title: "microwave_not_turn",
                value: "Microwave not work turn on",
              },

              {
                name: "other",
                title: "other",
                value: "Other",
              },
            ],
          },
          {
            id: "oven",
            icon: "/icons/subChild/oven.png",

            name: "oven",
            title: "Oven",
            value: "oven",
            specificFault: [
              {
                name: "oven_electric_not_turn",
                value: "oven_electric_not_turn",
                title: "Oven electric does not turn on",
              },
              {
                name: "oven_electric_not_work",
                value: "oven_electric_not_work",
                title: "Oven electric does not work correctly",
              },
              {
                name: "oven_gas_not_turn",
                value: "oven_gas_not_turn",
                title: "Oven gas does not turn on",
              },
              {
                name: "oven_gas_not_work",
                vlaue: "oven_gas_not_work",
                title: "Oven gas does not work correctly",
              },
              {
                name: "oven_switch_broken",
                value: "oven_switch_broken",
                title: "Oven switch broken",
              },
              {
                name: "ventilator_not_work",
                value: "ventilator_not_work",
                title: "Ventilator/fan not work",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "vacuum",
            icon: "/icons/subChild/vacuum.png",

            name: "vacuum",
            title: "Vacuum",
            value: "vacuum",
            specificFault: [
              {
                name: "broken_part",
                value: "broken_part",
                title: "Broken part",
              },
              {
                name: "poor_suction",
                value: "poor_ssuction",
                title: "Poor suction",
              },
              {
                name: "doesnot_turn_on",
                value: "doesnot_turn_on",
                title: " Does not turn on",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "extractor_fan",
        icon: "/icons/childIcons/extractor.png",
        name: "extractor_fan",
        title: "Extractor Fan",
        value: "extractor_fan",
        specificFault: [
          {
            name: "fan_faulty",
            value: "fan_faulty",
            title: "Fan faulty",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "kitchen_unit",
        icon: "/icons/childIcons/kitchenUnit.png",

        name: "kitchen_unit",
        title: "Kitchen unit",
        value: "kitchen_unit",
        subChildFault: [
          {
            id: "base_floor_unit",
            icon: "/icons/subChild/baseFloor.png",

            name: "base_floor_unit",
            title: "Base Floor Unit",
            value: "base_floor_unit",
            specificFault: [
              {
                name: "corner_base_broken",
                value: "corner_base_broken",
                title: "Corner base floor unit broken",
              },
              {
                name: "corner_base_loose",
                value: "corner_base_loose",
                title: "Corner base floor unit loose",
              },
              {
                name: "door_base_broken",
                value: "door_base_broken",
                title: "Door base floor unit broken",
              },
              {
                name: "door_base_loose",
                value: "door_base_loose",
                title: "Door base floor unit loose",
              },
              {
                name: "double_base_broken",
                value: "double_base_broken",
                title: "Double base floor unit broken",
              },
              {
                name: "double_base_loose",
                value: "double_base_loose",
                title: "Double base floor unit loose",
              },
              {
                name: "hinge_handle",
                value: "hinge_handle",
                title:
                  "Hinge handle or catch broken (specify which in fault detail)",
              },
              {
                name: "shelf_base_broken",
                value: "shelf_base_broken",
                title: "Shelf of base/ floor unit broken",
              },
              {
                name: "single_door_broken",
                value: "single_door_broken",
                title: "Single door base/ floor unit broken",
              },
              {
                name: "single_door_broken",
                value: "single_door_broken",
                title: "Single door base/ floor unit broken",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "drawers",
            icon: "/icons/subChild/drawers.png",

            name: "drawers",
            title: "Drawers",
            value: "drawers",
            specificFault: [
              {
                name: "drawer_bottom_broken",
                value: "drawer_bottom_broken",
                title: "Drawer bottom broken",
              },
              {
                name: "drawer_broken",
                value: "drawer_broken",
                title: "Drawer broken",
              },
              {
                name: "drawer_not_slide",
                value: "drawer_not_slide",
                title: "Drawer does not slide open or closed correctly",
              },
              {
                name: "drawer_front_broken",
                value: "drawer_front_broken",
                title: "Drawer front broken",
              },
              {
                name: "drawer_handle_broken",
                value: "drawer_handle_broken",
                title: "Drawer handle broken",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "larder",
            icon: "/icons/subChild/larder.png",

            name: "larder",
            title: "Larder",
            value: "larder",
            specificFault: [
              {
                name: "larder_door_broken",
                value: "larder_door_broken",
                title: "Larder door broken",
              },
              {
                name: "larder_door_lose",
                value: "larder_door_lose",
                title: "Larder door lose",
              },
              {
                name: "larder_unit_broken",
                value: "larder_unit_broken",
                title: "Larder unit broken",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "wall_unit",
            icon: "/icons/subChild/wallUnit.png",

            name: "wall_unit",
            title: "Wall Unit",
            value: "wall_unit",
            specificFault: [
              {
                name: "corner_wall_unit_broken",
                value: "corner_wall_unit_broken",
                title: "Corner wall unit broken",
              },
              {
                name: "corner_wall_unit_lose",
                value: "corner_wall_unit_lose",
                title: "Corner wall unit lose",
              },
              {
                name: "door_unit_broken",
                value: "door_unit_broken",
                title: "Door of wall unit broken",
              },
              {
                name: "double_door_unit_broken",
                value: "double_door_unit_broken",
                title: " Sdouble door of wall unit broken",
              },
              {
                name: "double_door_unit_lose",
                value: "double_door_unit_lose",
                title: " Sdouble door of wall unit lose",
              },
              {
                name: "hinge_handle_broken",
                value: "hinge_handle_broken",
                title: "Hinge handle or catch broken",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "sink_tab",
        icon: "/icons/childIcons/sinkTap.png",

        name: "sink_tab",
        title: "Sinks and Tab",
        value: "sink_tab",
        subChildFault: [
          {
            id: "leaks_blockages",
            icon: "/icons/subChild/pipeLeaking.png",

            name: "leaks_blockages",
            title: "Leaks or Blockages",
            value: "leaks_blockages",
            specificFault: [
              {
                name: "pipe_leaking_under_sink",
                value: "pipe_leaking_under_sink",
                title: "Pipe leaking under sink",
              },
              {
                name: "sink_blocked",
                value: "sink_blocked",
                title: "Sink blocked",
              },
              {
                name: "washingMachine_blocked",
                value: "washingMachine_blocked",
                title: "Washing machine blocked",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "plug_hole",
            icon: "/icons/subChild/plugHole.png",

            name: "plug_hole",
            title: "Plug Hole",
            value: "plug_hole",
            specificFault: [
              {
                name: "plug_hole_blocked",
                value: "plug_hole_blocked",
                title: "Plug hole blocked",
              },
              {
                name: "plug_hole_grill_broken",
                value: "plug_hole_grill_broken",
                title: "Plug hole grill broken",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "plug_chain",
            icon: "/icons/subChild/plugChain.png",

            name: "plug_chain",
            title: "Plug chain",
            value: "plug_chain",
            specificFault: [
              {
                name: "new_plug_chain_needed",
                value: "new_plug_chain_needed",
                title: "New plug chain needed",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "sink",
            icon: "/icons/childIcons/sinkTap.png",

            name: "sink",
            title: "Sink",
            value: "sink",
            specificFault: [
              {
                name: "sink_top_lose",
                value: "sink_top_lose",
                title: "Sink top lose",
              },
              {
                name: "sink_unit_lose",
                value: "sink_unit_lose",
                title: "Sink unit lose",
              },
              {
                name: "water_leaking_sink",
                value: "water_leaking_sink",
                title: "Water liking between sink and wall",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tap",
            icon: "/icons/subChild/tap.png",

            name: "tap",
            title: "Tap",
            value: "tap",
            specificFault: [
              {
                name: "mixer_tap_broken",
                value: "mixer_tap_broken",
                title: "Mixer tap broken",
              },
              {
                name: "mixer_tap_liking",
                value: "mixer_tap_liking",
                title: "Mixer tap liking",
              },
              {
                name: "mixer_tap_lose",
                value: "mixer_tap_lose",
                title: "Mixer tap lose",
              },
              {
                name: "single_tap_broken",
                value: "single_tap_broken",
                title: "Single tap  broken",
              },
              {
                name: "single_tap_leaking",
                value: "single_tap_leaking",
                title: "Single tap  leaking",
              },
              {
                name: "single_tap_loose",
                value: "single_tap_loose",
                title: "Single tap  loose",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tiles",
            icon: "/icons/subChild/tile.png",

            name: "tiles",
            title: "Tiles",
            value: "tiles",
            specificFault: [
              {
                name: "broken_tiles",
                value: "broken_tiles",
                title: "Broken tiles",
              },

              {
                name: "loose_tiles",
                value: "loose_tiles",
                title: "Loose tiles",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "work_top",
        icon: "/icons/childIcons/workTop.png",

        name: "work_top",
        title: "Work Top",
        value: "work_top",
        specificFault: [
          {
            name: "work_top_broken",
            value: "work_top_broken",
            title: "Work top broken",
          },

          {
            name: "work_top_demaged",
            value: "work_top_demaged",
            title: "Work top demaged",
          },
          {
            name: "work_top_loose",
            value: "work_top_loose",
            title: "Work top loose",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "heating_boiler",
    icon: "/icons/mainIcons/heating.png",
    name: "heating_boiler",
    title: "Heating and Boiler",
    value: "heating_boiler",
    childFault: [
      {
        id: "electric_boiler_heater",
        icon: "/icons/childIcons/heatingBoiler.png",

        name: "electric_boiler_heater",
        title: "Electric or Boiler heater",
        value: "electric_boiler_heater",
        subChildFault: [
          {
            id: "electric_boiler",
            icon: "/icons/subChild/electricBoiler.png",

            name: "electric_boiler",
            title: "Electric Boiler",
            value: "electric_boiler",
            specificFault: [
              {
                name: "boiler_leaking",
                value: "boiler_leaking",
                title: "boiler leaking",
              },
              {
                name: "boiler_noisy",
                value: "boiler_noisy",
                title: "Boiler noisy",
              },
              {
                name: "boiler_not_working",
                value: "boiler_not_working",
                title: "Boiler not working",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "electric_heater",
            icon: "/icons/subChild/electricHeater.png",

            name: "electric_heater",
            title: "Electric Heater",
            value: "electric_heater",
            specificFault: [
              {
                name: "bar_not_work",
                value: "bar_not_work",
                title: "Bar on electrical heater not work",
              },
              {
                name: "electric_heater_loose",
                value: "electric_heater_loose",
                title: "Electrical heater loose",
              },
              {
                name: "electrical_heater_not_working",
                value: "electrical_heater_not_working",
                title: "Electrical heater not working",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "gas_boiler_heater",
        icon: "/icons/childIcons/gasBoiler.png",

        name: "gas_boiler_heater",
        title: "Gas Boiler Heater",
        value: "gas_boiler_heater",
        subChildFault: [
          {
            id: "gas_boiler",
            icon: "/icons/subChild/gasBoiler.png",
            name: "gas_boiler",
            title: "Gas Boiler",
            value: "gas_boiler",
            specificFault: [
              {
                name: "boiler_leaking",
                value: "boiler_leaking",
                title: "Boiler leaking",
              },
              {
                name: "boiler_noisy",
                value: "boiler_noisy",
                title: "Boiler noisy",
              },
              {
                name: "boiler_not_work",
                value: "boiler_not_work",
                title: "Boiler not work",
              },
              {
                name: "boiler_pressure_high",
                value: "boiler_pressure_high",
                title: "Boiler pressuer high",
              },
              {
                name: "boiler_pressure_low",
                value: "boiler_pressure_low",
                title: "Boiler pressuer low",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "gas_fire",
            icon: "/icons/subChild/gasFire.png",

            name: "gas_fire",
            title: "Gas Fire",
            value: "gas_fire",
            specificFault: [
              {
                name: "gas_fire_loose",
                value: "gas_fire_loose",
                title: "Gas fire loose",
              },
              {
                name: "gas_fire_not_work",
                value: "gas_fire_not_work",
                title: "Gas fire not working",
              },
              {
                name: "radiants_broken",
                value: "radiants_broken",
                title: "Radiants in fire are broken",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "oil_boiler_heater",
        icon: "/icons/childIcons/oilBoiler.png",

        name: "oil_boiler_heater",
        title: "Oil Boiler Heater",
        value: "oil_boiler_heater",

        specificFault: [
          {
            name: "oil_heater_leaking",
            value: "oil_heater_leaking",
            title: "Oil heater leaking",
          },
          {
            name: "oil_heater_not_working",
            value: "oil_heater_not_working",
            title: "Oil heater not working",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "coal_heater",
        icon: "/icons/childIcons/coalHeating.png",

        name: "coal_heater",
        title: "Coal Heater",
        value: "coal_heater",
        subChildFault: [
          {
            id: "fireplace",
            icon: "/icons/subChild/fire-place.png",

            name: "fireplace",
            title: "Fire place",
            value: "fireplace",
            specificFault: [
              {
                name: "chimney_need_sweeping",
                value: "chimney_need_sweeping",
                title: "Chimney need sweeping",
              },
              {
                name: "fire_not_work",
                value: "fire_not_work",
                title: "Fire not working",
              },
              {
                name: "glass_strips_replace",
                value: "glass_strips_replace",
                title: "Glass strips in door need replacing",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tiles",
            icon: "/icons/subChild/tile.png",

            name: "tiles",
            title: "Tiles",
            value: "tiles",
            specificFault: [
              {
                name: "broken_tiles",
                value: "broken_tiles",
                title: "Broken tiles need new",
              },
              {
                name: "loose_tiles",
                value: "loose_tiles",
                title: "Loose tiles can be fixed",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "heating_control",
        icon: "/icons/childIcons/heatingControl.png",

        name: "heating_control",
        title: "Heating control",
        value: "heating_control",
        specificFault: [
          {
            name: "heating_program_not_work",
            title: "heating_program_not_work",
            value: "Heating program not work",
          },
          {
            name: "room_thermostat_not_work",
            title: "room_thermostat_not_work",
            value: "Room thermostat not working",
          },
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
      {
        id: "radiator",
        icon: "/icons/childIcons/radiator.png",

        name: "radiator",
        title: "Radiator",
        value: "radiator",
        specificFault: [
          {
            name: "no_heating",
            title: "no_heating",
            value: "No heating but hot water working",
          },
          {
            name: "no_hot_water",
            title: "no_hot_water",
            value: "No heating or hot water",
          },
          {
            name: "radiator_leaking",
            title: "radiator_leaking",
            value: "Radiator leaking",
          },
          {
            name: "radiator_loose",
            title: "radiator_loose",
            value: "Radiator loose",
          },
          {
            name: "radiator_valve_leaking",
            title: "radiator_valve_leaking",
            value: "Radiator valve leaking",
          },
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
      {
        id: "under_floor_heating",
        icon: "/icons/childIcons/underFloorHeating.png",

        name: "under_floor_heating",
        title: "Under Floor Heating",
        value: "under_floor_heating",
        specificFault: [
          {
            name: "leak",
            title: "leak",
            value: "Leak",
          },
          {
            name: "other",
            title: "other",
            value: "Other",
          },
        ],
      },
      {
        id: "shared_heating",
        icon: "/icons/childIcons/sharedHeating.png",

        name: "shared_heating",
        title: "Shared Heating",
        value: "shared_heating",
        specificFault: [
          {
            name: "common_parts_heating_not_work",
            title: "common_parts_heating_not_work",
            value: "Common parts heating not work",
          },
          {
            name: "shared_boiler_not_work",
            title: "shared_boiler_not_work",
            value: "Heating from shared boiler not work",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "doors_grage",
    icon: "/icons/mainIcons/doorknob.png",
    name: "doors_grage",
    title: "Doors Grages and Locks",
    value: "doors grages",
    childFault: [
      {
        id: "door_bell",
        icon: "/icons/childIcons/doorBell.png",

        name: "door_bell",
        title: "Door Bell",
        value: "door_bell",
        specificFault: [
          {
            name: "battery_not_work",
            title: "battery_not_work",
            value: "Battery powered not work",
          },
          {
            name: "wired_not_work",
            title: "wired_not_work",
            value: "Wired powered not work",
          },
          {
            name: "door_knocker",
            title: "door_knocker",
            value: "Door knocker not work",
          },

          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
      {
        id: "external_door",
        icon: "/icons/childIcons/externalDoor.png",

        name: "external_door",
        title: "External Door",
        value: "external_door",
        specificFault: [
          {
            name: "door_loose",
            title: "door_loose",
            value: "Door loose",
          },
          {
            name: "frame_split",
            title: "frame_split",
            value: "Frame split",
          },
          {
            name: "hinge_broken",
            title: "hinge_broken",
            value: "Hinge broken",
          },
          {
            name: "pvc_door_sticking",
            title: "pvc_door_sticking",
            value: "PVC door sticking",
          },
          {
            name: "water_leaking",
            title: "water_leaking",
            value: "Water leaking",
          },
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
      {
        id: "grage_door",
        icon: "/icons/childIcons/garage.png",

        name: "grage_door",
        title: "Grage Door",
        value: "grage_door",
        specificFault: [
          {
            name: "door_sticking",
            title: "door_sticking",
            value: "Door sticking",
          },
          {
            name: "frame_loose",
            title: "frame_loose",
            value: "Frame loose",
          },
          {
            name: "lock_not_work",
            title: "lock_not_work",
            value: "Lock not work",
          },
          {
            name: "lock_bar_broken",
            title: "lock_bar_broken",
            value: "Lock bar broken",
          },
          {
            name: "runners_sticking",
            title: "runners_sticking",
            value: "Runners sticking",
          },
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },

      {
        id: "entry_phone",
        icon: "/icons/childIcons/entryPhone.png",

        name: "entry_phone",
        title: "Entry Phone",
        value: "entry_phone",
        specificFault: [
          {
            name: "phone_not_work",
            title: "Phone not work",
            value: "phone_not_work",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "internal_door",
        icon: "/icons/mainIcons/floor.png",
        name: "internal_door",
        title: "Internal door",
        value: "internal_door",
        specificFault: [
          {
            name: "door_loose",
            title: "door_loose",
            value: "Door loose",
          },
          {
            name: "frame_split",
            title: "frame_split",
            value: "Frame split",
          },
          {
            name: "hinge_broken",
            title: "hinge_broken",
            value: "Hinge broken",
          },
          {
            name: "pvc_door_sticking",
            title: "pvc_door_sticking",
            value: "PVC door sticking",
          },
          {
            name: "water_leaking",
            title: "water_leaking",
            value: "Water leaking",
          },
          {
            name: "other",
            title: "Other",
            value: "Other",
          },
        ],
      },
      {
        id: "locks_key",
        icon: "/icons/childIcons/loksKey.png",

        name: "locks_key",
        title: "Loacks key",
        value: "locks_key",
        subChildFault: [
          {
            id: "back_door",
            icon: "/icons/subChild/backDoor.png",

            name: "back_door",
            title: "Back Door",
            value: "back_door",
            specificFault: [
              {
                name: "door_handle_broken",
                title: "door_handle_broken",
                value: "Door handle broken",
              },
              {
                name: "motice_lock_not_work",
                title: "motice_lock_not_work",
                value: "Mortice lock not work",
              },
              {
                name: "yale_lock_not_work",
                title: "yale_lock_not_work",
                value: "Yale lock not work",
              },

              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
          {
            id: "front_door",
            icon: "/icons/subChild/frontDoor.png",

            name: "front_door",
            title: "Front Door",
            value: "front_door",
            specificFault: [
              {
                name: "door_handle_broken",
                title: "door_handle_broken",
                value: "Door handle broken",
              },
              {
                name: "key_stuck_in_lock",
                title: "key_stuck_in_lock",
                value: "Key stuck in lock",
              },
              {
                name: "motice_lock_not_work",
                title: "motice_lock_not_work",
                value: "Mortice lock not work",
              },
              {
                name: "yale_lock_not_work",
                title: "yale_lock_not_work",
                value: "Yale lock not work",
              },

              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
          {
            id: "grage_door",
            icon: "/icons/subChild/grageDoor.png",

            name: "grage_door",
            title: "Grage Door",
            value: "grage_door",
            specificFault: [
              {
                name: "grage_door_not_work",
                title: "grage_door_not_work",
                value: "Grage door not work",
              },

              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
          {
            id: "garden_gate",
            icon: "/icons/subChild/gardenGate.png",

            name: "garden_gate",
            title: "Garden Gate",
            value: "garden_gate",
            specificFault: [
              {
                name: "lock_not_working",
                value: "lock_not_working",
                title: "Lock not working",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "key_lost",
            icon: "/icons/subChild/keyLost.png",

            name: "key_lost",
            title: "Key Lost",
            value: "key_lost",
            specificFault: [
              {
                name: "key_lost",
                value: "key_lost",
                title: "Key lost and property can be accessed",
              },
              {
                name: "key_lost_not_accessed_property",
                value: "key_lost_not_accessed_property",
                title: "Key lost and property cannot be accessed",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "internal_floors",
    icon: "/icons/mainIcons/floor.png",
    name: "internal_floors",
    title: "Internal Floors",
    value: "internal_floors",
    childFault: [
      {
        id: "ceilling",
        icon: "/icons/childIcons/ceiling.png",

        name: "ceilling",
        title: "Ceilling",
        value: "ceilling",
        subChildFault: [
          {
            id: "ceilling_tiles",
            icon: "/icons/subChild/tile.png",

            name: "ceilling_tiles",
            title: "Ceilling Tiles",
            value: "ceilling_tiles",
            specificFault: [
              {
                name: "broken_ceilling_tiles",
                value: "broken_ceilling_tiles",
                title: "Broken ceilling tiles",
              },
              {
                name: "loose_ceilling_tiles",
                value: "loose_ceilling_tiles",
                title: "Loose ceilling tiles",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "Damp_patches",
            icon: "/icons/subChild/dampPatches.png",

            name: "damp_patches",
            title: "Damp Patches appearing",
            value: "damp patches",
            specificFault: [
              {
                name: "related_not_leaks",
                value: "related_not_leaks",
                title: "You do not think that it is related to a leak",
              },
              {
                name: "related_leaks",
                value: "related_leaks",
                title: "You think that it is related to a leak",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "mould_appearing",
            icon: "/icons/subChild/mould.png",

            name: "mould_appearing",
            title: "Mould Appearing",
            value: "mould_appearing",
            specificFault: [
              {
                name: "damp_hummid",
                value: "damp_hummid",
                title: "In a dampp hummid room such as bathroom or kitchen",
              },
              {
                name: "in_dry_room",
                value: "in_dry_room",
                title: "In a dry room",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "plaster",
            icon: "/icons/subChild/plasterBoard.png",

            name: "plaster",
            title: "Plaster Board",
            value: "plaster",
            specificFault: [
              {
                name: "ceilling_plaster_cracked",
                value: "ceilling_plaster_cracked",
                title: "Ceilling plaster cracked",
              },
              {
                name: "ceilling_plaster_demaged",
                value: "ceilling_plaster_demaged",
                title: "Ceilling plaster demaged",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "floors",
        icon: "/icons/childIcons/floors.png",

        name: "floors",
        title: "Floors",
        value: "floors",
        specificFault: [
          {
            name: "carpet_loose",
            value: "carpet_loose",
            title: "Carpet loose",
          },
          {
            name: "carpet_ripped",
            value: "carpet_ripped",
            title: "Carpet ripped or demaged",
          },
          {
            name: "floor_tiles_broken",
            value: "floor_tiles_broken",
            title: "Floor tiles broken",
          },
          {
            name: "floor_tiles_loose",
            value: "floor_tiles_loose",
            title: "Floor tiles loose",
          },
          {
            name: "floorboard_tiles_broken",
            value: "floorboard_tiles_broken",
            title: "Floor board tiles broken",
          },
          {
            name: "floorboard_tiles_loose",
            value: "floorboard_tiles_loose",
            title: "Floor board tiles loose",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "walls",
        icon: "/icons/childIcons/walks.png",

        name: "walls",
        title: "Walls",
        value: "walls",
        specificFault: [
          {
            name: "wall_paint",
            title: "Wall paint paches",
            value: "wall_paint",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "lightning",
    icon: "/icons/mainIcons/hanging-lamp.png",
    name: "lightning",
    title: "Lightnings",
    value: "lightning",
    childFault: [
      {
        id: "external_lightning",
        icon: "/icons/childIcons/externalLightnings.png",

        name: "external_lightning",
        title: "External Lightnings",
        value: "external_lightning",
        subChildFault: [
          {
            id: "external_light",
            icon: "/icons/childIcons/externalLightnings.png",
            name: "external_light",
            title: "External Light",
            value: "external_light",
            specificFault: [
              {
                name: "broken",
                title: "Broken",
                value: "broken",
              },
              {
                name: "loose",
                title: "Loose",
                value: "loose",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "external_light_switch",
            icon: "/icons/subChild/externalLightSwitch.png",

            name: "external_light_switch",
            title: "External Light Switch",
            value: "external_light_switch",
            specificFault: [
              {
                name: "broken_switch",
                title: "Broken",
                value: "broken_switch",
              },
              {
                name: "loose_switch",
                title: "Loose",
                value: "loose_switch",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "internal_lightning",
        icon: "/icons/childIcons/internalLightnings.png",

        name: "internal_lightning",
        title: "Internal Lightnings",
        value: "internal_lightning",
        subChildFault: [
          {
            id: "batten_holder",
            icon: <Icon icon="mage:light-bulb-fill" />,
            name: "batten_holder",
            title: "Batten Holder",
            value: "batten_holder",
            specificFault: [
              {
                name: "broken_bulb",
                title: "Broken bulb",
                value: "broken_bulb",
              },
              {
                name: "loose_bulb",
                title: "Loose bulb",
                value: "loose_bulb",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "flourescent_light_tube",
            icon: <Icon icon="mdi:lightbulb-cfl" />,
            name: "flourescent_light_tube",
            title: "Flourescent Light Tube",
            value: "flourescent_light_tube",
            specificFault: [
              {
                name: "broken_tube",
                title: "Broken Tube",
                value: "broken_tube",
              },
              {
                name: "flickring",
                title: "Flickring",
                value: "flickring",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "lamp",
            icon: <Icon icon="solar:lamp-broken" />,
            name: "lamp",
            title: "Lamp",
            value: "lamp",
            specificFault: [
              {
                name: "broken_lamp",
                title: "Broken Lamp",
                value: "broken_lamp",
              },
              {
                name: "loose_lamp",
                title: "Loose lamp",
                value: "loose_lamp",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "light_bulb",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "light_bulb",
            title: "Light Bulb",
            value: "light_bulb",
            specificFault: [
              {
                name: "broken_light_bulb",
                title: "Broken light bulb",
                value: "broken_light_bulb",
              },
              {
                name: "flickring_light_bulb",
                title: "Flickring light bulb",
                value: "flickring_light_bulb",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "light_fitting",
            icon: <Icon icon="cbi:bulb-lightguide-oval" />,
            name: "light_fitting",
            title: "Light Fitting",
            value: "light_fitting",
            specificFault: [
              {
                name: "broken_fitting_bulb",
                title: "Broken Fitting bulb",
                value: "broken_fitting_bulb",
              },
              {
                name: "loose_fitting_bulb",
                title: "Loose fitting bulb",
                value: "loose_fitting_bulb",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "light_switch",
            icon: <Icon icon="ri:switch-line" />,
            name: "light_switch",
            title: "Light Switch",
            value: "light_switch",

            specificFault: [
              {
                name: "broken_light_switch",
                title: "Broken light switch",
                value: "broken_light_switch",
              },
              {
                name: "loose_light_switch",
                title: "Loose light switch",
                value: "loose_light_switch",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "pull_cord_light",
            icon: <Icon icon="mdi:lightbulb-spot-off" />,
            name: "pull_cord_light",
            title: "Pull Cord for Light",
            value: "pull_cord_light",
            specificFault: [
              {
                name: "broken_pull_cord",
                title: "Broken pull cord",
                value: "broken_pull_cord",
              },
              {
                name: "loose_pull_cord",
                title: "Loose pull cord",
                value: "loose_pull_cord",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "other",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "window",
    icon: "/icons/mainIcons/window.png",
    name: "window",
    title: "Window",
    value: "window",
    childFault: [
      {
        id: "blinds",
        icon: "/icons/mainIcons/blinds.png",

        name: "blinds",
        title: "Blinds",
        value: "blinds",
        specificFault: [
          {
            name: "blinds_broken",
            title: "Blinds broken",
            value: "blinds_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "broken_glass",
        icon: "/icons/mainIcons/brokenGlass.png",

        name: "broken_glass",
        title: "Broken glass",
        value: "broken_glass",
        specificFault: [
          {
            name: "ground_floor_doubleglazed",
            title: "Above ground floor level-double glazed",
            value: "ground_floor_doubleglazed",
          },
          {
            name: "ground_floor_singleglazed",
            title: "Above ground floor level-single glazed",
            value: "ground_floor_singleglazed",
          },
          {
            name: "ground_floor_doubleglazed",
            title: " Ground floor level-double glazed",
            value: "ground_floor_doubleglazed",
          },
          {
            name: "ground_floor_singleglazed",
            title: " Ground floor level-single glazed",
            value: "ground_floor_singleglazed",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "curtains",
        icon: "/icons/mainIcons/curtains.png",

        name: "curtains",
        title: "Curtains",
        value: "curtains",
        specificFault: [
          {
            name: "curtain_demaged",
            title: "Curtain demaged",
            value: "curtain_demaged",
          },
          {
            name: "curtain_pole",
            title: "Curtain pole",
            value: "curtain_pole",
          },

          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "window_frame",
        icon: "/icons/mainIcons/windowFrame.png",

        name: "window_frame",
        title: "Problem with window frames",
        value: "window frame",
        subChildFault: [
          {
            id: "metal_window_frame",
            icon: "/icons/mainIcons/metalWindowFrame.png",

            name: "metal_window_frame",
            title: "Metal Window Frame",
            value: "metal_window_frame",
            specificFault: [
              {
                name: "bottom_handle_broken",
                title: "Bottom handle broken",
                value: "bottom_handle_broken",
              },
              {
                name: "side_handle_broken",
                title: "Side handle broken",
                value: "side_handle_broken",
              },
              {
                name: "window_not_open",
                title: "Window does not open or close ",
                value: "window_not_open",
              },
              {
                name: "window_frame_loose",
                title: "Window frame loose ",
                value: "window_frame_loose",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "pvc_window",
            icon: "/icons/mainIcons/pvcWindow.png",

            name: "pvc_window",
            title: "PVC/window",
            value: "pvc_window",
            specificFault: [
              {
                name: "pvc_window_frame_loose",
                title: "Pvc Window frame loose ",
                value: "pvc_window_frame_loose",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "sash_cord",
            icon: "/icons/mainIcons/sashCord.png",

            name: "sash_cord",
            title: "Sash Cord",
            value: "sash_cord",
            specificFault: [
              {
                name: "sash_window_broken",
                title: "Sash window broken",
                value: "sash_window_broken",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "wooden_window",
            icon: "/icons/mainIcons/woodenWindow.png",

            name: "wooden_window",
            title: "Wooden window frame",
            value: "wooden_window_frame",
            specificFault: [
              {
                name: "wooden_window",
                title: "Wooden window not working",
                value: "wooden_window",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
        ],
      },
      {
        id: "window_lock",
        icon: "/icons/mainIcons/windowLock.png",

        name: "window_lock",
        title: "Window lock",
        value: "window_lock",
        specificFault: [
          {
            name: "window_lock_broken",
            title: "Window lock broken",
            value: "window_lock_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "exterior_garden",
    icon: "/icons/mainIcons/house.png",
    name: "exterior_garden",
    title: "Exterior Garden",
    value: "exterior_garden",
    childFault: [
      {
        id: "decking",
        icon: "/icons/mainIcons/decking.png",

        name: "decking",
        title: "Decking",
        value: "decking",
        specificFault: [
          {
            name: "decking_boken",
            title: "Decking broken",
            value: "decking_boken",
          },
          {
            name: "decking_loose",
            title: "Decking loose",
            value: "decking_loose",
          },
          {
            name: "rooten",
            title: "Rooten",
            value: "rooten",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "in_garden",
        icon: "/icons/mainIcons/inGarden.png",

        name: "in_garden",
        title: "In garden",
        value: "in_garden",
        subChildFault: [
          {
            id: "septic_tank",
            icon: "/icons/mainIcons/septic-tank.png",

            name: "septic_tank",
            title: "Septic tank",
            value: "septic_tank",
            specificFault: [
              {
                name: "cesspite_blocked",
                title: "Cesspite blocked",
                value: "cesspite_blocked",
              },
              {
                name: "septic_tank_blocked",
                title: "Septic tank blocked",
                value: "septic_tank_blocked",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "fencing",
            icon: "/icons/mainIcons/fencing.png",

            name: "fencing",
            title: "Fencing",
            value: "fencing",
            specificFault: [
              {
                name: "concrete_fence_broken",
                title: "Concrete fence  post broken",
                value: "concrete_fence_broken",
              },
              {
                name: "concrete_fence_loose",
                title: "Concrete fence  post loose",
                value: "concrete_fence_loose",
              },
              {
                name: "fence_not_timber_loose",
                title: "Fence not timber loose",
                value: "fence_not_timber_loose",
              },
              {
                name: "fence_not_timber_broken",
                title: "Fence not timber broken",
                value: "fence_not_timber_broken",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "garden_gate",
            icon: "/icons/mainIcons/gardenGate.png",

            name: "garden_gate",
            title: "Garden gate",
            value: "garden_gate",
            specificFault: [
              {
                name: "gate_broken",
                title: "Gate broken",
                value: "gate_broken",
              },
              {
                name: "lock_not_work",
                title: "Lock not working",
                value: "lock_not_work",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "manholes",
            icon: "/icons/mainIcons/manhole.png",

            name: "manholes",
            title: "Manholes",
            value: "manholes",

            specificFault: [
              {
                name: "manholes_cover_broken",
                title: "Man holes cover broken",
                value: "manholes_cover_broken",
              },
              {
                name: "manholes_overflowing",
                title: "Man holes overflowing",
                value: "manholes_overflowing",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "path",
            icon: "/icons/mainIcons/path.png",

            name: "path",
            title: "Path",
            value: "path",
            specificFault: [
              {
                name: "brick_path_loose",
                title: "Brick path loose",
                value: "brick_path_loose",
              },
              {
                name: "brick_path_broken",
                title: "Brick path broken",
                value: "brick_path_broken",
              },
              {
                name: "concrete_path_broken",
                title: "Concrete path broken",
                value: "concrete_path_broken",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "paving",
            icon: "/icons/mainIcons/paving.png",

            name: "paving",
            title: "Paving",
            value: "paving",
            specificFault: [
              {
                name: "flag_loose",
                title: "Flag loose",
                value: "flag_loose",
              },
              {
                name: "rectangular_flag_broken",
                title: "Rectanglar flag broken",
                value: "rectangular_flag_broken",
              },
              {
                name: "square_flag_broken",
                title: "Square flag broken",
                value: "square_flag_broken",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "steps",
            icon: "/icons/mainIcons/steps.png",

            name: "steps",
            title: "Steps",
            value: "steps",
            specificFault: [
              {
                name: "brick_step_broken",
                title: "Brick srep broken",
                value: "brick_step_broken",
              },
              {
                name: "brick_step_loose",
                title: "Brick step loose",
                value: "brick_step_loose",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "walls",
            icon: "/icons/mainIcons/walls.png",

            name: "walls",
            title: "Walls",
            value: "walls",
            specificFault: [
              {
                name: "boundary_wall_broken",
                title: "Boundary walls broken",
                value: "boundary_wall_broken",
              },
              {
                name: "boundary_wall_loose",
                title: "Boundary wall loose",
                value: "boundary_wall_loose",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
        ],
      },
      {
        id: "on_property",
        icon: "/icons/mainIcons/onProperty.png",

        name: "on_property",
        title: "On property",
        value: "on_property",
        subChildFault: [
          {
            id: "drain_pipe",
            icon: "/icons/mainIcons/drainPipe.png",

            name: "drain_pipe",
            title: "Drain pipe",
            value: "drain pipe",
            specificFault: [
              {
                name: "drainpipe_blocked",
                title: "Drain pipe blocked",
                value: "drainpipe_blocked",
              },
              {
                name: "drainpipe_broken",
                title: "Drain pipe broken",
                value: "drainpipe_broken",
              },
              {
                name: "drainpipe_refixing",
                title: "Drain pipe refixing",
                value: "drainpipe_refixing",
              },
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "drains",
            icon: "/icons/mainIcons/drains.png",

            name: "drains",
            title: "Drains",
            value: "drains",
            specificFault: [
              {
                name: "blocked",
                title: "Blocked",
                value: "blocked",
              },
              {
                name: "grate_broken",
                title: "Grate broken",
                value: "grate_broken",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "gutters",
            icon: "/icons/mainIcons/gutters.png",

            name: "gutters",
            title: "Gutters",
            value: "gutters",
            specificFault: [
              {
                name: "gutter_metal_blocked",
                title: "Gutter metal blocked",
                value: "gutter_metal_blocked",
              },
              {
                name: "gutter_metal_broken",
                title: "Gutter metal broken",
                value: "gutter_metal_broken",
              },
              {
                name: "gutter_metal_refixing",
                title: "Gutter metal refixing",
                value: "gutter_metal_refixing",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "soil_pipe",
            icon: "/icons/mainIcons/soilPipe.png",

            name: "soil_pipe",
            title: "Soil pipe",
            value: "soil_pipe",
            specificFault: [
              {
                name: "soil_pipe_blocked",
                title: "Soil pipe blocked",
                value: "soil_pipe_blocked",
              },
              {
                name: "soil_pipe_broken",
                title: "Soil pipe broken",
                value: "soil_pipe_broken",
              },
              {
                name: "soil_pipe_leaking",
                title: "Soil pipe leaking",
                value: "soil_pipe_leaking",
              },

              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                title: "Other",
                value: "other",
              },
            ],
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },

  {
    id: "laundry",
    icon: "/icons/mainIcons/washing-machine.png",
    name: "laundry",
    title: "Laundary",
    value: "laundry",
    childFault: [
      {
        id: "tumble_dryer",
        icon: "/icons/mainIcons/tumbleDrayer.png",

        name: "tumble_dryer",
        title: "Tumble Drayer",
        value: "tumble_dryer",
        specificFault: [
          {
            name: "tumbledrayer_not_work",
            title: "Tumble drayer not work",
            value: "tumbledrayer_not_work",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "washing_machine",
        icon: "/icons/mainIcons/washingMachine.png",

        name: "washing_machine",
        title: "Washing maschine",
        value: "washing_machine",
        specificFault: [
          {
            name: "washing_machine_not_work",
            title: "Washing machine drayer not work",
            value: "washing_machine_not_work",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",

        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "furniture",
    icon: "/icons/mainIcons/furnitures.png",
    name: "furniture",
    title: "Furniture",
    value: "furniture",
    childFault: [
      {
        id: "bed",
        icon: "/icons/mainIcons/bed.png",

        name: "bed",
        title: "Bed",
        value: "bed",
        specificFault: [
          {
            name: "bed_broken",
            title: "Bed broken",
            value: "bed_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "beside_table",
        icon: "/icons/mainIcons/table.png",

        name: "beside_table",
        title: "Beside table",
        value: "beside_table",
        specificFault: [
          {
            name: "beside_broken",
            title: "Beside table broken",
            value: "beside_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "book_case",
        icon: "/icons/mainIcons/bookCase.png",

        name: "book_case",
        title: "Book case",
        value: "book_case",
        specificFault: [
          {
            name: "bookcase_broken",
            title: "Book case table broken",
            value: "bookcase_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "chest_drawers",
        icon: "/icons/mainIcons/drawers.png",

        name: "chest_drawers",
        title: "Chest of Drawers",
        value: "chest_drawers",
        specificFault: [
          {
            name: "chestdrawer_broken",
            title: "Chest drawer broken",
            value: "chestdrawer_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "sofa",
        icon: "/icons/mainIcons/sofa.png",

        name: "sofa",
        title: "Sofa",
        value: "sofa",
        specificFault: [
          {
            name: "sofa_broken",
            title: "sofa broken",
            value: "sofa_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "table",
        icon: "/icons/mainIcons/table.png",

        name: "table",
        title: "Table",
        value: "table",
        specificFault: [
          {
            name: "table_broken",
            title: "Table broken",
            value: "table_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "wardrobe",
        icon: "/icons/mainIcons/wardRobe.png",

        name: "wardrobe",
        title: "Wardrobe",
        value: "wardrobe",
        specificFault: [
          {
            name: "wardrobe_broken",
            title: "Ward robe broken",
            value: "wardrobe_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "hot_water",
    icon: "/icons/mainIcons/hot-water.png",
    name: "hot_water",
    title: "Hot water",
    value: "hot_water",
    childFault: [
      {
        id: "immersion_heater",
        icon: "/icons/mainIcons/immersionHeater.png",

        name: "immersion_heater",
        title: "Immersion heater",
        value: "immersion_heater",
        specificFault: [
          {
            name: "cylinder_leak",
            title: "Cylinder leak",
            value: "cylinder_leak",
          },
          {
            name: "not_hot_water",
            title: "Not hot water",
            value: "not_hot_water",
          },
          {
            name: "switch_broken",
            title: "Switch Broken",
            value: "switch_broken",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "water_heated_electricity",
        icon: "/icons/mainIcons/waterHeatedByElectricity.png",

        name: "water_heated_electricity",
        title: "Water heated by electricity",
        value: "water_heated_electricity",
        subChildFault: [
          {
            id: "no_hot_water",
            icon: "/icons/mainIcons/water-heater.png",

            name: "no_hot_water",
            title: "No hot water",
            value: "no_hot_water",
            specificFault: [
              {
                name: "water_heated_by_electricity",
                value: "water_heated_by_electricity",
                title: "Water heated by electricity",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "water_heated_gas",
        icon: "/icons/mainIcons/gasHeater.png",

        name: "water_heated_gas",
        title: "water heated by gas",
        value: "water_heated_gas",
        subChildFault: [
          {
            id: "no_hot_water",
            icon: "/icons/mainIcons/hot-water.png",

            name: "no_hot_water",
            title: "No hot water",
            value: "no_hot_water",
            specificFault: [
              {
                name: "water_heated_by_gas",
                value: "water_heated_by_gas",
                title: "i dont have gas",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: "/icons/mainIcons/question.png",

            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "water_heated_oil",
        icon: "/icons/mainIcons/oilHeater.png",

        name: "water_heated_oil",
        title: "Water heated by oil",
        value: "water_heated_oil",
        specificFault: [
          {
            name: "water_heated_by_oil",
            value: "water_heated_by_oil",
            title: "I dont have oil",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",

        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "alarm_smoke_detector",
    icon: "/icons/mainIcons/alarm.png",
    name: "alarm_smoke_detector",
    title: "Alarm and smoke detector",
    value: "alarm_smoke_detector",
    childFault: [
      {
        id: "carbonmonoxide_alarm",
        icon: "/icons/mainIcons/carbonAlarm.png",
        name: "carbonmonoxide_alarm",
        title: "Carbonmonoxide alarm",
        value: "carbonmonoxide_alarm",
        specificFault: [
          {
            name: "carbonmonoxide_alarm_faulty",
            title: "Carbonmonoxide alarm faulty",
            value: "carbonmonoxide_alarm_faulty",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "property_alarm",
        icon: "/icons/mainIcons/propertyAlarm.png",
        name: "property_alarm",
        title: "Property alarm",
        value: "property_alarm",

        specificFault: [
          {
            name: "property_alarm_not_work",
            title: "Property alarm not working",
            value: "property_alarm_not_work",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "smoke_alarm",
        icon: "/icons/mainIcons/smoke.png",
        name: "smoke_alarm",
        title: "Smoke alarm",
        value: "smoke_alarm",
        specificFault: [
          {
            name: "smoke_alarm_loose",
            title: "Smoke alarm loose",
            value: "smoke_alarm_loose",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "other",
        icon: "/icons/mainIcons/question.png",
        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "pets_vermin",
    icon: "/icons/mainIcons/pest-control.png",
    name: "pets_vermin",
    title: "Pests vermin",
    value: "pets_vermin",
    childFault: [
      {
        id: "insects",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "insects",
        title: "Insects",
        value: "insects",
        specificFault: [
          {
            name: "ants",
            title: "Ants",
            value: "ants",
          },
          {
            name: "bed_bugs",
            title: "Bed bugs",
            value: "bed_bugs",
          },
          {
            name: "bees",
            title: "Bees",
            value: "bees",
          },
          {
            name: "cockroaches",
            title: "Cockroaches",
            value: "cockroaches",
          },
          {
            name: "fleas",
            title: "Fleas",
            value: "fleas",
          },
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "rodents",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "rodents",
        title: "Rodents",
        value: "Rodents",
        specificFault: [
          {
            name: "mice",
            title: "Mice",
            value: "mice",
          },
          {
            name: "rats",
            title: "Rats",
            value: "rats",
          },
          {
            name: "rodents",
            title: "Rodents",
            value: "rodents",
          },

          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
      {
        id: "other",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            title: "Other",
            value: "other",
          },
        ],
      },
    ],
  },
  {
    id: "roof",
    icon: "/icons/mainIcons/roof.png",
    name: "roof",
    title: "Roof",
    value: "roof",
    childFault: [
      {
        id: "chimney",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "chimney",
        title: "Chimney",
        value: "chimney",
        subChildFault: [
          {
            id: "chimney_pot",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "chimney_pot",
            title: "Chimney pot",
            value: "chimney_pot",
            specificFault: [
              {
                name: "chimney_pot_missing",
                value: "chimney_pot_missing",
                title: "Chimney pot missing",
              },
              {
                name: "chimney_pot_demaged",
                value: "chimney_pot_demaged",
                title: "Chimney pot demaged",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "chimney_stack",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "chimney_stack",
            title: "Chimney stack",
            value: "chimney_stack",
            specificFault: [
              {
                name: "chimney_stack_missing",
                value: "chimney_stack_missing",
                title: "Chimney stack missing and shared with neighbours",
              },
              {
                name: "chimney_stack_missing",
                value: "chimney_stack_missing",
                title:
                  "Chimney stack missing and do not shared with neighbours",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "flashing",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "flashing",
            title: "Flashing",
            value: "flashing",
            specificFault: [
              {
                name: "flashing_missing",
                value: "flashing_missing",
                title: "Flashing missing",
              },
              {
                name: "flashing_loose",
                value: "flashing_loose",
                title: "flashing loose",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "flat_roof",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "flat_roof",
        title: "Flat roof",
        value: "flat_roof",
        specificFault: [
          {
            name: "roof_demaged",
            value: "roof_demaged",
            title: "Roof demaged",
          },
          {
            name: "roof_leaking",
            value: "roof_leaking",
            title: "Roof leaking",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "tiled_roof",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "tiled_roof",
        title: "Tiled roof",
        value: "tiled_roof",
        subChildFault: [
          {
            id: "roof_leaking",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "roof_leaking",
            title: "Roof Leaking",
            value: "roof_leaking",
            specificFault: [
              {
                name: "tiled_roof_demaged",
                value: "tiled_roof_demaged",
                title: "Tiled roof demaged",
              },
              {
                name: "tiled_roof_leaking",
                value: "tiled_roof_leaking",
                title: "Tiled roof leaking",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tiles_on_edge",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "tiles_on_edge",
            title: "Tiles on edge of roof",
            value: "tiles_on_edge",
            specificFault: [
              {
                name: "tiled_demaged",
                value: "tiled_roof_demaged",
                title: "Tiles demaged",
              },
              {
                name: "tiled_leaking",
                value: "tiled_leaking",
                title: "Tiles leaking",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tiles_on_hip",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "tiles_on_hip",
            title: "Tiles on hip of roof",
            value: "tiles_on_hip",
            specificFault: [
              {
                name: "tiled_demaged",
                value: "tiled_roof_demaged",
                title: "Tiles demaged",
              },
              {
                name: "tiled_missing",
                value: "tiled_missing",
                title: "Tiles missing",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tiles_on_ridge",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "tiles_on_ridge",
            title: "Tiles on ridge of roof",
            value: "tiles_on_ridge",
            specificFault: [
              {
                name: "tiled_demaged",
                value: "tiled_roof_demaged",
                title: "Tiles demaged",
              },
              {
                name: "tiled_leaking",
                value: "tiled_leaking",
                title: "Tiles leaking",
              },
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "other",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "communal_shared_facilities",
    icon: "/icons/mainIcons/building.png",
    name: "communal_shared_facilities",
    title: "Communal/Shared facilities",
    value: "communal_shared_facilities",
    childFault: [
      {
        id: "air_conditioning",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "air_conditioning",
        title: "Air conditioning",
        value: "air_conditioning",
        specificFault: [
          {
            name: "not_work",
            value: "not_work",
            title: "Ac not work",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "bin_store",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "bin_store",
        title: "Bin store",
        value: "bin_store",
        specificFault: [
          {
            name: "bin_store_overloaded",
            value: "bin_store_overloaded",
            title: "Bin store overloaded",
          },
          {
            name: "bin_store_collected",
            value: "bin_store_collected",
            title: "Bin store not collected",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "communal_doors",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "communal_doors",
        title: "Communal doors",
        value: "communal_doors",
        specificFault: [
          {
            name: "door_loose_handle",
            value: "door_loose_handle",
            title: "Door loose handle",
          },
          {
            name: "door_broke_handle",
            value: "door_broke_handle",
            title: "Door broke handle",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "electric_gate",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "electric_gate",
        title: "Electric gate",
        value: "electric_gate",
        specificFault: [
          {
            name: "electric_gate_not_work",
            value: "electric_gate_not_work",
            title: "Electric gate not work",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "entry_phone",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "entry_phone",
        title: "Entry phone",
        value: "entry_phone",
        specificFault: [
          {
            name: "entery_phone_not_work",
            value: "entery_phone_not_work",
            title: "Entry phone not work",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "stairwells",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "stairwells",
        title: "Landing/Stairwells",
        value: "stairwells",
        specificFault: [
          {
            name: "lightning_not_work",
            value: "lightning_not_work",
            title: "Lightning not work",
          },
          {
            name: "unclean",
            value: "unclean",
            title: "Unclean",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "lift",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "lift",
        title: "Lift",
        value: "lift",
        specificFault: [
          {
            name: "lightning_not_work",
            value: "lightning_not_work",
            title: "Lightning not work",
          },
          {
            name: "unclean",
            value: "unclean",
            title: "Unclean",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "parking",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "parking",
        title: "Parking",
        value: "parking",
        specificFault: [
          {
            name: "lightning_not_work",
            value: "lightning_not_work",
            title: "Lightning not work",
          },
          {
            name: "unclean",
            value: "unclean",
            title: "Unclean",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "postboxes",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "postboxes",
        title: "Post boxes",
        value: "postboxes",
        specificFault: [
          {
            name: "lightning_not_work",
            value: "lightning_not_work",
            title: "Lightning not work",
          },
          {
            name: "unclean",
            value: "unclean",
            title: "Unclean",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "shared_heating",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "shared_heating",
        title: "shared_heating",
        value: "Shared heating/Hot water",
        specificFault: [
          {
            name: "shared_heating_loose",
            value: "shared_heating_loose",
            title: "Share heating loose",
          },

          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "other",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "other",
        title: "Other",
        value: "Other",
        specificFault: [
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "audio_visual",
    icon: "/icons/mainIcons/audio-visual.png",
    name: "audio_visual",
    title: "Audio visual",
    value: "audio_visual",
    specificFault: [
      {
        name: "TV_broken",
        value: "TV_broken",
        title: "Television broken",
      },
      {
        name: "other",
        value: "other",
        title: "Other",
      },
    ],
  },
  {
    id: "utility_meters",
    icon: "/icons/mainIcons/meter.png",
    name: "utility_meters",
    title: "Utility meters",
    value: "utility_meters",
    specificFault: [
      {
        name: "electricity_meter_broken",
        value: "electricity_meter_broken",
        title: "Electricity meter broken",
      },
      {
        name: "gas_meter_broken",
        value: "gas_meter_broken",
        title: "Gas meter broken",
      },
      {
        name: "other",
        value: "other",
        title: "Other",
      },
    ],
  },
  {
    id: "internet",
    icon: "/icons/mainIcons/wireless-router.png",
    name: "internet",
    title: "Internet",
    value: "internet",
    specificFault: [
      {
        name: "internet_not_working",
        value: "internet_not_working",
        title: "Interet not working",
      },

      {
        name: "other",
        value: "other",
        title: "Other",
      },
    ],
  },
  {
    id: "stairs",
    icon: "/icons/mainIcons/stairs.png",
    name: "stairs",
    title: "Stairs",
    value: "stairs",
    childFault: [
      {
        id: "external_stairs",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "external_stairs",
        title: "External stairs",
        value: "external_stairs",
        subChildFault: [
          {
            id: "balustrade",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "balustrade",
            title: "Balustrade",
            value: "balustrade",
            specificFault: [
              {
                name: "balustrade_broken",
                value: "balustrade_broken",
                title: "Balustrade broken",
              },
              {
                name: "balustrade_loose",
                value: "balustrade_loose",
                title: "Balustrade loose",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "handrail",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "handrail",
            title: "Handrail",
            value: "handrail",
            specificFault: [
              {
                name: "handrail_bracket_broken",
                value: "handrail_bracket_broken",
                title: "Hand rail bracket broken",
              },
              {
                name: "handrail_bracket_loose",
                value: "handrail_bracket_loose",
                title: "Hand rail bracket loose",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "newel_post",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "newel_post",
            title: "Centrel post/Newel post",
            value: "newel_post",
            specificFault: [
              {
                name: "post_broken",
                value: "post_broken",
                title: "Post broken",
              },
              {
                name: "post_loose",
                value: "post_loose",
                title: "Post loose",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "tread_or_riser",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "tread_or_riser",
            title: "Tread or Riser",
            value: "tread_or_riser",
            specificFault: [
              {
                name: "tread_broken",
                value: "tread_broken",
                title: "Tread broken",
              },
              {
                name: "tread_loose",
                value: "tread_loose",
                title: "Tread loose",
              },

              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
          {
            id: "other",
            icon: <Icon icon="iconamoon:question-mark-circle-light" />,
            name: "other",
            title: "Other",
            value: "Other",
            specificFault: [
              {
                name: "other",
                value: "other",
                title: "Other",
              },
            ],
          },
        ],
      },
      {
        id: "internal_stairs",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "internal_stairs",
        title: "Internal stairs",
        value: "internal_stairs",
        specificFault: [
          {
            name: "internal_stairs_unclean",
            value: "internal_stairs_unclean",
            title: "Internal stairs unclean",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
      {
        id: "private_lift",
        icon: <Icon icon="iconamoon:question-mark-circle-light" />,
        name: "private_lift",
        title: "Private lift",
        value: "private_lift",
        specificFault: [
          {
            name: "private_lift_unclean",
            value: "private_lift_unclean",
            title: "Private lift unclean",
          },
          {
            name: "other",
            value: "other",
            title: "Other",
          },
        ],
      },
    ],
  },
  {
    id: "property_services",
    icon: "/icons/mainIcons/property.png",
    name: "property_services",
    title: "Property services",
    value: "property_services",
    specificFault: [
      {
        name: "annual_inspection",
        value: "annual_inspection",
        title: "Annual inspection",
      },
      {
        name: "check_in",
        value: "check_in",
        title: "Check in",
      },
      {
        name: "check_out",
        value: "check_out",
        title: "Check out",
      },
      {
        name: "other",
        value: "other",
        title: "Other",
      },
    ],
  },
  {
    id: "other",
    icon: "/icons/mainIcons/question.png",
    name: "other",
    title: "Other",
    value: "Other",
    specificFault: [
      {
        name: "other",
        value: "other",
        title: "Other",
      },
    ],
  },
];

export const reportDataForm = [
  {
    name: "address",
    type: "textarea",
    label: "Address",
    placeholder: "Enter your first line address",
    rules: {
      required: "first line address is required",
    },
  },
  {
    name: "town",
    type: "text",
    label: "Town",
    placeholder: "Enter your town",
    rules: {
      required: "town is required",
    },
  },
  {
    name: "postalCode",
    type: "text",
    label: "Postal Code",
    placeholder: "Enter your postal code",
    rules: {
      required: "postal code is required",
    },
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
    rules: {
      required: " Name is required",
    },
  },
  {
    name: "phoneNumber",
    type: "number",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    rules: {
      required: "phone number is required",
      minLength: {
        value: 10,
        message: "Enter a valid phone number",
      },
      pattern: {
        value: /^[0-9]*$/,
        message: "Enter a valid phone number",
      },
    },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    rules: {
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Enter a valid email",
      },
      required: "email is required",
    },
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Enter your message",

  },
  
];


export const blogsForm = [
  {
      name: "metaTitle",
      lable: "Meta Title",
      placeholder: "enter the meta title",
      type: "text",
      rules: {
        required: "meta title is required",
        pattern: {
          message: "meta title is required",
        }
      }
     
  },
  {
      name: "metaDescription",
      lable: "Meta Description",
      placeholder: "enter the meta description",
      type: "text",
      rules: {
        required: "meta description is required",
        pattern: {
          message: "meta description is required",
        }
      }
  },
  {
    name: "keywords",
    type: "text",
    lable: "Perma Link",
    placeholder: "enter the perma link",
    rules: {
      // required: "perma link is required",
      pattern: {
        value: /^\S+$/,
        message: "Enter a valid keyword (no spaces allowed)",
      }
    }
  },  
  {
      name: "heading1",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image1",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info1",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading2",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image2",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info2",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading3",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image3",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info3",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading4",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image4",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info4",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading5",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image5",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info5",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading6",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image6",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info6",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading7",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image7",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info7",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading8",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image8",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info8",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading9",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image9",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info9",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
      name: "heading10",
      lable: "Heading",
      type: "text",
    
  },
  {
      name: "image10",
      lable: "Image",
      type: "file",
    
  },
  {
      name: "info10",
      lable: "Description",
      placeholder: "enter the description",
      type: "textarea",
    
  },
  {
    name: "heading11",
    lable: "Heading",
    type: "text",
  
},
{
    name: "image11",
    lable: "Image",
    type: "file",
  
},
{
    name: "info11",
    lable: "Description",
    placeholder: "enter the description",
    type: "textarea",
  
},
{
  name: "heading12",
  lable: "Heading",
  type: "text",

},
{
  name: "image12",
  lable: "Image",
  type: "file",

},
{
  name: "info12",
  lable: "Description",
  placeholder: "enter the description",
  type: "textarea",

},
{
  name: "heading13",
  lable: "Heading",
  type: "text",

},
{
  name: "image13",
  lable: "Image",
  type: "file",

},
{
  name: "info13",
  lable: "Description",
  placeholder: "enter the description",
  type: "textarea",

},
{
  name: "heading14",
  lable: "Heading",
  type: "text",

},
{
  name: "image14",
  lable: "Image",
  type: "file",

},
{
  name: "info14",
  lable: "Description",
  placeholder: "enter the description",
  type: "textarea",

},
{
  name: "heading15",
  lable: "Heading",
  type: "text",

},
{
  name: "image15",
  lable: "Image",
  type: "file",

},
{
  name: "info15",
  lable: "Description",
  placeholder: "enter the description",
  type: "textarea",

},
  {
      name: "name",
      lable: "Name",
      placeholder: "enter your name",
      type: "text"
  },
]