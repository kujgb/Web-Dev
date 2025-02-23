import { Component } from '@angular/core';
import { Products } from './products';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ProductListComponent],
  standalone: true
})
export class AppComponent {
  categories: Category[] = [
    {
      name: 'Washing Machines',
      products: [
        {
          id: 1,
          name: 'Washing machine Leadbros XQG60-1017P black',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h1c/84375220912158.jpg?format=gallery-medium',
          description: 'The Leadbros washing machine is the perfect solution for your home.',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/leadbros-xqg60-1017p-chernyi-112420396/?c=750000000&sr=1&qid=a640dc0d009c4d767580434ce9dfc440&ref=shared_link',
          likes: 0
        },
        {
          id: 2,
          name: 'Washing machine Haier HWD120-B1558U white',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcd/63778648883230.jpg?format=gallery-medium',
          description: 'The DUO series washer-dryer with two drums holds up to 12 kg',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/haier-hwd120-b1558u-belyi-3601454/?c=750000000&sr=2&qid=a640dc0d009c4d767580434ce9dfc440&ref=shared_link',
          likes: 0
        },
        {
          id: 3,
          name: 'Washing machine Samsung WW60AG4S00CELD white',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h11/82896148693022.jpg?format=gallery-medium',
          description: 'Specifications Washing machine Samsung WW60AG4S00CELD white',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/samsung-ww60ag4s00celd-belyi-112618357/?c=750000000&sr=4&qid=a640dc0d009c4d767580434ce9dfc440&ref=shared_link',
          likes: 0
        },
        {
          id: 4,
          name: 'Washing machine Toshiba TW-BL70A2UZ(WK) white',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h62/80732616261662.jpg?format=gallery-medium',
          description: 'The classic Toshiba TW-BL70A2UZ washing machine   is created as a tribute to the Japanese spirit of "takumi',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/toshiba-tw-bl70a2uz-wk-belyi-110273322/?c=750000000&sr=7&qid=a640dc0d009c4d767580434ce9dfc440&ref=shared_link',
          likes: 0
        },
        {
          id: 5,
          name: 'Washing machine LG F2M5HS6S silver',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/86929964859422.jpg?format=gallery-medium',
          description: 'The LG F2M5HS6S washing machine in a black and silver case will be an ideal choice for a large family due to the ability to wash up to 7 kg of laundry per cycle.',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000&sr=10&qid=a640dc0d009c4d767580434ce9dfc440&ref=shared_link',
          likes: 0
        }
      ]
    },
    {
      name: 'Smart Home ',
      products: [
        {
          id: 6,
          name: 'Smart Home Kit CCTV Camera',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/he8/85846247014430.jpg?format=gallery-medium',
          description: 'Video call with outdoor video surveillance camera.',
          rating: 0,
          link: 'https://kaspi.kz/shop/p/kamera-videonabljudenija-118769504/?c=750000000&sr=1&qid=83665eaabb9366848bc9d4db72ad18fb&ref=shared_link',
          likes: 0
        },
        {
          id: 7,
          name: 'Tuya Smart Home Kit Motion Sensor, Opening Sensor, Remote Control, Siren, Control Center',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/hbb/79805948985374.jpg?format=gallery-medium',
          description: 'Features Tuya Smart Home Kit Motion Sensor, Opening Sensor, Remote Control, Siren, Control Center',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/tuya-datchik-dvizhenija-datchik-otkrytija-pul-t-upravlenija-sirena-tsentr-upravlenija-109755651/?c=750000000&sr=2&qid=83665eaabb9366848bc9d4db72ad18fb&ref=shared_link',
          likes: 0
        },
        {
          id: 8,
          name: 'Tuya Smart Home Kit Wireless Switch Ball Valve Manipulator',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h6f/85269230813214.jpg?format=gallery-medium',
          description: 'Color black, material metal-plastic. Purpose valve overlap.',
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/tuya-besprovodnoi-vykljuchatel-manipuljator-sharovogo-krana-116949314/?c=750000000&sr=7&qid=83665eaabb9366848bc9d4db72ad18fb&ref=shared_link',
          likes: 0
        },
        {
          id: 9,
          name: 'HomeStoreez cold light light sensor, ecosystem: not supported',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h12/86393113640990.png?format=gallery-medium',
          description: 'A lamp with a motion sensor is designed for automatic illumination of a room in an apartment or house, as well as a closet or kitchen in the dark, it is very convenient and comfortable if you do not want to turn on the general light or the switch is far from you. ',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/datchik-osveschenija-homestoreez-cold-light-ekosistema-ne-podderzhivaetsja-108586470/?c=750000000&sr=10&qid=83665eaabb9366848bc9d4db72ad18fb&ref=shared_link',
          likes: 0
        },
        {
          id: 10,
          name: 'Aqara control center HM-G01D',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/hcb/86422258548766.jpg?format=gallery-medium',
          description: 'AQARA Hub M3 Control Center (HM-G01D)HM-G01D.',
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgnd3-100797576/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      name: 'Beauty equipment and technology',
      products: [
        {
          id: 11,
          name: 'Dyson HS08 Airwrap Complete Long Styler 1300W',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p6a/10175056.jpg?format=gallery-medium',
          description: 'With attachments for medium-length hair. ',
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/dyson-hs08-airwrap-complete-long-stailer-1300-vt-130567812/?c=750000000&m=30360681&sr=1&qid=f3fc083789c6e8db9916a350d2ad4329&isPromoted=true&ref=shared_link',
          likes: 0
        },
        {
          id: 12,
          name: 'Dyson HS05 Airwrap Complete Long Styler 1300W',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h4d/83906343763998.jpg?format=gallery-medium',
          description: 'The Dyson Airwrap HS05 Complete Long styler is suitable for girls with long hair.',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-vt-110086766/?c=750000000&sr=1&qid=f3fc083789c6e8db9916a350d2ad4329&ref=shared_link',
          likes: 0
        },
        {
          id: 13,
          name: 'Dyson Airwrap HS05 Long with cosmetic bag and combs styler 1300 W',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-medium',
          description: 'The most complete set, including in addition to the styler and 6 attachments',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-kosmetichkoi-i-rascheskami-stailer-1300-vt-119489111/?c=750000000&sr=3&qid=f3fc083789c6e8db9916a350d2ad4329&ref=shared_link',
          likes: 0
        },
        {
          id: 14,
          name: 'Borman BM831 professional 8-in-1 hair dryer styler with attachments 1400W',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pe8/20252582.jpg?format=gallery-medium',
          description: 'Meet the updated model of the 8-in-1 hair dryer-styler from the BORMAN brand',
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/borman-bm831-professional-nyi-8-v-1-fen-stailer-s-nasadkami-1400w-118886204/?c=750000000&sr=2&qid=1dbf9141407e43b1247a8aa5357783a5&ref=shared_link',
          likes: 0
        },
        {
          id: 15,
          name: 'DREAME Pocket hair dryer 1300 W',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h12/86752620773406.jpg?format=gallery-medium',
          description: '300 million negative ions per cm³ 110,000 rpm motor',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/dreame-pocket-fen-1300-vt-119933445/?c=750000000&m=Bestprice&sr=4&qid=1dbf9141407e43b1247a8aa5357783a5&isPromoted=true&ref=shared_link',
          likes: 0
        }
      ]
    },
    {
      name: 'Large home appliances',
      products: [
        {
          id: 16,
          name: 'Kitchen stove Artel APETITO 01-E gray',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h30/63790832877598.jpg?format=gallery-medium',
          description: 'The ARTEL APETITO 01-E stove is equipped with a hob with 4 gas burners of different power with electric ignition by a button.',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/artel-apetito-01-e-seryi-2602155/?c=750000000&sr=9&qid=066da5486905e7a5c059c906edb4045c&ref=shared_link',
          likes: 0
        },
        {
          id: 17,
          name: 'Hood Hansa OTP6233BH black',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h4d/64032683261982.jpg?format=gallery-medium',
          description: 'The black OTP6233BH telescopic hood is suitable for installation in a standard kitchen module.',
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/hansa-otp6233bh-chernyi-100571156/?c=750000000',
          likes: 0
        },
        {
          id: 18,
          name: 'Refrigerator Samsung RB31FERNDSA silver',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h87/85529393266718.jpg?format=gallery-medium',
          description: 'Specifications Refrigerator Samsung RB31FERNDSA silver',
          rating: 4.7,
          link: 'https://kaspi.kz/shop/p/samsung-rb31ferndsa-serebristyi-117760200/?c=750000000',
          likes: 0
        },
        {
          id: 19,
          name: 'Oven Midea MO11000GB black',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pc9/pcb/26062568.jpg?format=gallery-medium',
          description: 'Specifications Oven Midea MO11000GB black',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/midea-mo11000gb-chernyi-121355200/?c=750000000',
          likes: 0
        },
        {
          id: 20,
          name: 'Refrigerator Indesit DS 4180 W white',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/haf/63759042183198.jpg?format=gallery-medium',
          description: 'Specifications Refrigerator Indesit DS 4180 W white',
          rating: 4.7,
          link: 'https://kaspi.kz/shop/p/indesit-ds-4180-w-belyi-2701650/?c=750000000',
          likes: 0
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}