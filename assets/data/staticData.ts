import LazeezSpice from '@/assets/images/products/product_lazeez_spice2.webp';
import TebaloiCrunch from '@/assets/images/products/product_tebaloi_crunch2.webp';
import SagokPearl from '@/assets/images/products/product_sagok_pearl2.webp';
import Blackpeppermint from '@/assets/images/products/product_blackpepper_mint2.webp';
import TiongDelite from '@/assets/images/products/product_tiong_delite2.webp';
import DubaiChewyCookies from '@/assets/images/products/dubai_chewy_cookies.jpg';
import BeHisPralineChocolate from '@/assets/images/products/behis_praline_chocolate.jpg';
import ChocolateDatesWithAlmond from '@/assets/images/products/chocolate_dates_with_almond.jpg';
import { Award, Heart, Sparkles } from 'lucide-react';

export const staticData = {
  header: {
    navLinks: [
      { name: 'About', url: '#about' },
      { name: 'Products', url: '#products' },
      { name: 'Contact', url: '#contact' },
    ]
  },
  jumbotron: {
    name: 'Chelum',
    shortDesc: 'Crafted for your desire',
    quickDesc: "Handcrafted chocolate inspired by Sarawak's rich heritage and bold flavors.",
  },
  about: {
    paragraphs: [
      "CHELUM represents the pinnacle of Malaysian chocolate craftsmanship, where traditional flavors meet modern chocolate artistry. Our name reflects our commitment to excellence and our deep respect for local ingredients and heritage.",
      "Each of our five signature creations tells a unique story, blending premium chocolate with distinctive Malaysian flavors. From the crunch of traditional Tebaloi to the warmth of spices, we celebrate the rich tapestry of Malaysian taste in every bar.",
      "Our master chocolatiers source only the finest ingredients, working with sustainable local farms to create chocolate that honors both tradition and innovation. Every bar is a testament to our dedication to quality and authenticity.",
    ],
  },
  features: [
    {
      icon: Heart,
      title: "Passion & Craft",
      description: "Every creation is made with love and dedication by our master chocolatiers",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized globally for excellence in chocolate artistry and innovation",
    },
    {
      icon: Sparkles,
      title: "Premium Ingredients",
      description: "Only the finest single-origin cacao beans from sustainable farms worldwide",
    },
  ],
  products: [
    {
      featured: true,
      title: 'Lazeez Spice',
      description: 'An exotic blend of aromatic spices meets rich chocolate, inspired by traditional Malaysian flavors. A bold and warming experience.',
      imgUrl: LazeezSpice,
      price: 6.3,
    },
    {
      featured: true,
      title: 'Tebaloi Crunch',
      description: 'A delightful fusion of traditional Malaysian Tebaloi biscuits with premium dark chocolate, creating a perfect balance of crunch and smoothness.',
      imgUrl: TebaloiCrunch,
      price: 6.3,
    },
    {
      featured: true,
      title: 'Sagok Pearl',
      description: 'Infused with delicate sago pearls, this creation offers a unique texture that celebrates Malaysian heritage with every bite.',
      imgUrl: SagokPearl,
      price: 6.3,
    },
    {
      featured: true,
      title: 'Blackpeppermint',
      description: "A sophisticated combination of black pepper's subtle heat and refreshing peppermint, balanced with smooth chocolate for an unforgettable taste.",
      imgUrl: Blackpeppermint,
      price: 6.3,
    },
    {
      featured: true,
      title: 'Tiong Delite',
      description: 'A luxurious Sarawak chocolate creation that embodies the essence of Malaysian craftsmanship with rich, indulgent flavors.',
      imgUrl: TiongDelite,
      price: 6.3,
    },
    {
      featured: false,
      title: 'Dubai Chewy Cookies',
      description: 'The most viral soft chewy crunchy with Pistachio filling “Melt-in-your-mouth”. Brings another level of sensation as you eat this cookie especially with your beloved ones.',
      imgUrl: DubaiChewyCookies,
      price: 9,
      piece: true,
    },
    {
      featured: false,
      title: 'BeHis Praline Chocolate',
      description: "Inspired by the Land of the Hornbill's history and mythical legends, BeHis is a reminder to the lasting cultural legacy that has shaped Sarawak to this day. Yummy taste.",
      imgUrl: BeHisPralineChocolate,
      price: 30,
    },
    {
      featured: false,
      title: 'Chocolate Dates with Almond',
      description: "Dates with almond filling and coated with CHELUM signature chocolate. Handcrafted perfectly with consistent and bold flavor that would satisfy your apetite.",
      imgUrl: ChocolateDatesWithAlmond,
      price: 6.3,
    }
  ],
  contact: {
    preTitle: "04. What's Next?",
    title: 'Get In Touch',
    paragraph: "Let us know each other and create a new journey together with our premium-quality handcrafted chocolate taste!",
    buttonText: 'Say Hello',
    buttonUrl: 'mailto:chelumlazeez8808@gmail.com'
  }
};
