export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Laptops',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://happycredit.in/cloudinary_opt/blog/best-laptop-in-india-e18oj.webp',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Trending',
            href: '/',
            imageSrc: 'https://zebronics.com/cdn/shop/files/Laptop_Banner_800_X_1067_Mobile.jpg?v=1695446880&width=800',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Types',
            items: [
              { name: 'Ultra books', id:"top", href: `{women/clothing/tops}` },
              { name: 'Gaming Laptops', id:"women_dress", href: '#' },
              { name: 'Business Laptops', id: 'women_jeans' },
              { name: 'two in one', id: 'lengha_choli' },
              { name: 'Cromebooks', id: 'sweater' },
              { name: 'Workstation Laptop', id: 't-shirt' },
              { name: 'Budget Laptops', id: 'jacket' },
              { name: 'Rugged Laptops', id: 'gouns' },
              { name: 'Thin n light', id: 'saree' },
              { name: 'Student Laptops', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Brands',
            items: [
              { name: 'HP', id: 'watch' },
              { name: 'Apple', id: 'wallet' },
              { name: 'Dell', id: 'bag' },
              { name: 'ASUS', id: 'sunglasse' },
              { name: 'Lenovo', id: 'hat' },
              { name: 'Michrosoft', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Features',
            items: [
              { name: 'Touch Screen', id: '#' },
              { name: 'High speed', id: '#' },
              { name: 'compact', id: '#' },
              { name: 'Gaming', id: '#' },
              { name: 'foldable', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Audio',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://cdn.windowsreport.com/wp-content/uploads/2018/11/FIX-There-might-be-a-problem-with-your-audio-device-886x590.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Trends',
            id: '#',
            imageSrc: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/airpodspro2-1-6-920x614.jpeg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'speakers',
            items: [
              { name: 'Echo 457', id: 'mens_kurta' },
              { name: 'Sony', id: 'shirt' },
              { name: 'BoAt rockers', id: 'men_jeans' },
              { name: 'portable', id: '#' },
              { name: 'Bluetooth', id: 't-shirt' },
              { name: 'wired', id: '#' },
              { name: 'party', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Types',
            items: [
              { name: 'Wireless', id: '#' },
              { name: 'Wired', id: '#' },
              { name: 'assistant', id: '#' },
              { name: 'High base', id: '#' },
              { name: 'Noice canclation', id: '#' },
              
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Sony', id: '#' },
              { name: 'Hammer', id: '#' },
              { name: 'Ptron', id: '#' },
              { name: 'BoAt', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'women',
        name: 'SmartPhones',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-jDY8LRyeWdlRrdigguGeRbQpjCiQKti1Kx2DBztazZUNrKIslUxVn4EtDaW_t-Y7ts&usqp=CAU',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Trending',
            href: '/',
            imageSrc: 'https://motorolaroe.vtexassets.com/arquivos/ids/157367-800-auto?width=800&height=auto&aspect=true',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'accessories',
            name: 'Brands',
            items: [
              { name: 'Motorola', id: 'watch' },
              { name: 'Samsung', id: 'wallet' },
              { name: 'Realme', id: 'bag' },
              { name: 'OnePlus', id: 'sunglasse' },
              { name: 'Xiomi', id: 'hat' },
              { name: 'Apple', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'feature',
            items: [
              { name: 'Foldable', id: '#' },
              { name: 'Battery life', id: '#' },
              { name: 'large screen', id: '#' },
              { name: 'Gaming', id: '#' },
              { name: 'Camera', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Contact', href: '/contact' },
      { name: 'About', href: '/about' },
    ],
  }