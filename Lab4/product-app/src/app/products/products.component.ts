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
    images: ['assets/1.1.jpeg', 'assets/1.2.jpeg', 'assets/1.3.jpeg'],
    description: 'Characteristics Boots black, Modelboots Upper materialartificial leather',
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/botinki-30111466-733835216-1-chernyi-38-130568929/?c=750000000&hasVariants=true'
    },
    {
      id: 2,
      name: 'Ollin Professional Perfect Hair 15 in 1 cream spray 250 ml',
      images: ['assets/2.1.jpg', 'assets//2.2.jpg', 'assets/2.3.jpg'],
      description: 'A unique multifunctional product will replace as many as 15 hair care products.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000'
    },
    {
      id: 3,
      name: 'Food processor KENWOOD KCL95.004SI Cooking Chef XL silver',
      images: ['assets/3.1.jpg', 'assets/3.2.jpg', 'assets/3.3.jpg'],
      description: 'If modern culinary equipment is not yet able to fully replace a human chef, !',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000'
    },
    {
      id: 4,
      name: 'Meat grinder Bosch MFWS420W white',
      images: ['assets/4.1.jpg', 'assets/4.2.jpg', 'assets/4.3.jpg'],
      description: 'Specifications Meat grinder Bosch MFWS420W white',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/bosch-mfws420w-belyi-131007852/?c=750000000'
    },
    {
      id: 5,
      name: 'Chair C06, 80x46x40 cm, white',
      images: ['assets/5.1.jpg', 'assets/5.2.jpg', 'assest/5.3.jpg', 'assets/5.4.jpg'],
      description: 'Another advantage of the model is its height, which is convenient for a dining table.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000'
    },
  
    {
      id: 6,
      name: 'Chair Chili, 86x45x37 cm, upholstery gray velour',
      images: ['assets/6.1.jpg', 'assets/6.2.jpg', 'assets/6.3.jpg'],
      description: 'Characteristics Chair Chili, 86x45x37 cm, upholstery gray velour',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000'
    },
    {
      id: 7,
      name: 'Lego 0107 childrens play table, 48x48x49 cm, plastic, multicolor',
      images: ['assets/7.1.jpg', 'assets/7.2.jpg'],
      description: 'The childrens table and chair for construction is a modern and functional set created specifically for the development of preschool children.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/lego-0107-detskii-igrovoi-stol-48x48x49-sm-plastik-mul-tikolor-109929201/?c=750000000'
    },
    {
      id: 8,
      name: 'Floor rack Abuer, 66x31x132 cm, white',
      images: ['assets/8.1.jpg', 'assets/8.2.jpg', 'assets/8.3.jpg'],
      description: 'The floor white storage rack will create coziness not only at home, but it is also suitable for a summer house, a country house, an office.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000'
    },
    {
      id: 9,
      name: 'Round dining table, 90x90x74 cm, laminated chipboard, oak tone',
      images: ['assets/9.1.jpg', 'assets/9.2.jpg', 'assets/9.3.jpg', 'assets/9.4.jpg'],
      description: 'Classic round dining table – stylish and practical solution for any home. Compact and at the same time roomy round table can accommodate a large company, in case of arrival of guests.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/stol-obedennyi-kruglyi-90x90x74-sm-ldsp-ton-dub-110088841/?c=750000000'
    },
    {
      id: 10,
      name: 'Computer desk Loft, 110x70x75 cm, white',
      images: ['assets/10.1.jpg'],
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