import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Boots black',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/p97/10179282.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pf6/p9d/10179284.jpeg?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/pca/pa4/10179286.jpeg?format=gallery-medium'],
      description: 'Characteristics Boots black, Modelboots Upper materialartificial leather',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/botinki-30111466-733835216-1-chernyi-38-130568929/?c=750000000&hasVariants=true'
    },
    {
      id: 2,
      name: 'Ollin Professional Perfect Hair 15 in 1 cream spray 250 ml',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p20/pb5/21586296.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p03/pb5/21586297.jpg?format=gallery-medium'],
      description: 'A unique multifunctional product will replace as many as 15 hair care products.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000'
    },
    {
      id: 3,
      name: 'Food processor KENWOOD KCL95.004SI Cooking Chef XL silver',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h72/he4/63921091969054.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h6c/63921095114782.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haa/h93/63921097605150.jpg?format=gallery-medium'],
      description: 'If modern culinary equipment is not yet able to fully replace a human chef, !',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000'
    },
    {
      id: 4,
      name: 'Meat grinder Bosch MFWS420W white',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p5e/p13/11744512.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p26/p13/11744514.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ped/p12/11744516.jpg?format=gallery-medium'],
      description: 'Specifications Meat grinder Bosch MFWS420W white',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/bosch-mfws420w-belyi-131007852/?c=750000000'
    },
    {
      id: 5,
      name: 'Chair C06, 80x46x40 cm, white',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2b/3187773.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p50/p2b/3187776.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2b/3187775.jpg?format=gallery-medium'],
      description: 'Another advantage of the model is its height, which is convenient for a dining table.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000'
    },
    {
      id: 6,
      name: 'Chair Chili, 86x45x37 cm, upholstery gray velour',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h22/h5d/85982139121694.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h09/h98/85982139154462.jpg?format=gallery-medium'],
      description: 'Characteristics Chair Chili, 86x45x37 cm, upholstery gray velour',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000'
    },
    {
      id: 7,
      name: 'Lego 0107 childrens play table, 48x48x49 cm, plastic, multicolor',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5c/h12/80175235760158.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h26/h7b/80175236284446.jpg?format=gallery-medium'],
      description: 'The childrens table and chair for construction is a modern and functional set created specifically for the development of preschool children.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/lego-0107-detskii-igrovoi-stol-48x48x49-sm-plastik-mul-tikolor-109929201/?c=750000000'
    },
    {
      id: 8,
      name: 'Floor rack Abuer, 66x31x132 cm, white',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6d/he2/85358048739358.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h64/85358048804894.jpg?format=gallery-medium'],
      description: 'The floor white storage rack will create coziness not only at home, but it is also suitable for a summer house, a country house, an office.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000'
    },
    {
      id: 9,
      name: 'Round dining table, 90x90x74 cm, laminated chipboard, oak tone',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb8/h94/84785427546142.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h36/hef/84785427611678.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h55/84785427939358.jpg?format=gallery-medium'],
      description: 'Classic round dining table – stylish and practical solution for any home. Compact and at the same time roomy round table can accommodate a large company, in case of arrival of guests.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stol-obedennyi-kruglyi-90x90x74-sm-ldsp-ton-dub-110088841/?c=750000000'
    },
    {
      id: 10,
      name: 'Computer desk Loft, 110x70x75 cm, white',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/h7c/85119645319198.jpg?format=gallery-medium'],
      description: 'The table will perfectly suit any interior, because it is universal. Straight lines and geometric notes will give the room freedom of space.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/stol-komp-juternyi-loft-110h70x75-sm-belyi-108418941/?c=750000000'
    },
  ];

  shareWhatsApp(link: string) {
    window.open('https://wa.me/?text=' + encodeURIComponent(link), '_blank');
  }

  shareTelegram(link: string) {
    window.open('https://t.me/share/url?url=' + encodeURIComponent(link), '_blank');
  }
}