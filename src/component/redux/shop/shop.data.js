const SHOP_DATA = {
  bakery: {
    id: 1,
    title: 'Bakery',
    routeName: 'bakery',
    items: [
      {
        id: 1,
        name: 'Apricot Croissant',
        imageUrl: 'https://i.ibb.co/9gcjH4m/apricot-croissant.png',
        price: 2.99
      },
      {
        id: 2,
        name: 'French Bread ( Each )',
        imageUrl: 'https://i.ibb.co/QkbtYmg/bread.png',
        price: 1.29
      },
      {
        id: 3,
        name: 'Browni Cake',
        imageUrl: 'https://i.ibb.co/Pcqw05d/browni.png',
        price: 3
      },
      {
        id: 4,
        name: 'Butter Croissant',
        imageUrl: 'https://i.ibb.co/ZhmDGH3/croissant.png',
        price: 2
      },
      {
        id: 5,
        name: 'Coockies',
        imageUrl: 'https://i.ibb.co/Bys6bbT/cookies.png',
        price: 1.99
      },
      {
        id: 6,
        name: 'Chocolate Muffin',
        imageUrl: 'https://i.ibb.co/hBnGZYn/muffin.png',
        price: 1.99
      },
      {
        id: 7,
        name: 'Pita',
        imageUrl: 'https://i.ibb.co/rGDwX1N/pita.png',
        price: 1.19
      },
      {
        id: 8,
        name: 'POM White Toast',
        imageUrl: 'https://i.ibb.co/VqT4Lj1/toast.png',
        price: 3.99
      },
      {
        id: 9,
        name: 'POM Hotdog',
        imageUrl: 'https://i.ibb.co/JH8JWcN/hotdog.png',
        price: 3.49
      },
      {
        id: 10,
        name: 'POM Hamburger',
        imageUrl: 'https://i.ibb.co/MRr8LfW/burger.png',
        price: 8.49
      }
    ]
  },
  dairy: {
    id: 2,
    title: 'Dairy',
    routeName: 'dairy',
    items: [
      {
        id: 11,
        name: 'Quebon Milk %3.25 (2L)',
        imageUrl: 'https://i.ibb.co/GHpXjkW/quebon.png',
        price: 5.99
      },
      {
        id: 12,
        name: 'Quebon Strawberry Milk (473ml)',
        imageUrl: 'https://i.ibb.co/869z7NJ/quebon-st.png',
        price: 1.99
      },
      {
        id: 13,
        name: 'Quebon Skimmed Milk (473ml)',
        imageUrl: 'https://i.ibb.co/F8g3bGp/quebon-skimmed.png',
        price: 1.49
      },
      {
        id: 14,
        name: 'Quebon Choco Milk (473ml)',
        imageUrl: 'https://i.ibb.co/6vtVWsQ/quebon-choco.png',
        price: 1.99
      },
      {
        id: 15,
        name: 'Quebon Cooking Cream (473ml)',
        imageUrl: 'https://i.ibb.co/202jj17/quebon-cc.png',
        price: 4.49
      },
      {
        id: 16,
        name: 'Puck 500g',
        imageUrl: 'https://i.ibb.co/4JjhSD5/puck.png',
        price: 11.99
      },
      {
        id: 17,
        name: 'Philadelphia Strawberry 227g',
        imageUrl: 'https://i.ibb.co/khchZzT/philadepha-st.png',
        price: 5.99
      },
      {
        id: 18,
        name: 'Philadelphia Garlic 545g',
        imageUrl: 'https://i.ibb.co/HBYF2zN/philadepha-gr.png',
        price: 8.49
      },
      {
        id: 19,
        name: 'Philadelphia Dips 227g',
        imageUrl: 'https://i.ibb.co/0cJfdK1/philadepha-dips.png',
        price: 5.99
      },
      {
        id: 20,
        name: 'Philadelphia Chedder 227g',
        imageUrl: 'https://i.ibb.co/xFQRxnw/philadepha-ch.png',
        price: 5.99
      },
      {
        id: 21,
        name: 'Kraft Cheddar Slice 22pcs',
        imageUrl: 'https://i.ibb.co/L0TQ737/kraft-ch.png',
        price: 3.99
      },
      {
        id: 22,
        name: 'Great Value Cheddar Slice 44pcs',
        imageUrl: 'https://i.ibb.co/xY25CTN/gv-chedder.png',
        price: 7.99
      }
    ]
  },
  meats: {
    id: 3,
    title: 'Meats',
    routeName: 'meats',
    items: [
      {
        id: 23,
        name: 'Beef Steak ( 1Lb )',
        imageUrl: 'https://i.ibb.co/h7r4kxg/beef.png',
        price: 8.99
      },
      {
        id: 24,
        name: 'Whole Chicken ( 1Lb )',
        imageUrl: 'https://i.ibb.co/rc9m1Jg/chicken.png',
        price: 5.99
      },
      {
        id: 25,
        name: 'Chicken Wings',
        imageUrl: 'https://i.ibb.co/YtKS2m0/wings.png',
        price: 5.99
      },
      {
        id: 26,
        name: 'Chicken Breasts ( 1Lb )',
        imageUrl: 'https://i.ibb.co/hy50BtP/breasts.png',
        price: 7.49
      },
      {
        id: 27,
        name: 'Salmon ( 1Lb )',
        imageUrl: 'https://i.ibb.co/cXZBNkw/salmon.png',
        price: 8.49
      },
      {
        id: 28,
        name: 'Shrimps ( 1Lb )',
        imageUrl: 'https://i.ibb.co/mGWN9yQ/shrimp.png',
        price: 9.99
      },
      {
        id: 29,
        name: 'Great Value Strips 800g',
        imageUrl: 'https://i.ibb.co/7V3wLGw/gv-strips.png',
        price: 5.99
      },
      {
        id: 30,
        name: 'Great Value Chicken Breasts',
        imageUrl: 'https://i.ibb.co/JrbGV3w/gv-breasts.png',
        price: 6.99
      },
      {
        id: 31,
        name: 'Great Value Nuggets 1.5Kg',
        imageUrl: 'https://i.ibb.co/PgZXh3n/gv-nuggets.png',
        price: 10.49
      },
      {
        id: 32,
        name: 'Earth Best Chicken Nuggets',
        imageUrl: 'https://i.ibb.co/8sCbtY8/eb-nuggets.png',
        price: 9.99
      },
      {
        id: 33,
        name: 'Bell & Evans nuggets 12oz',
        imageUrl: 'https://i.ibb.co/CtHdzH8/bell-nuggets.png',
        price: 7.49
      }
    ]
  },
  fruits: {
    id: 4,
    title: 'Fruits & Vegetables',
    routeName: 'fruits',
    items: [
      {
        id: 34,
        name: 'Apple ( 1Lb )',
        imageUrl: 'https://i.ibb.co/9Z5RbRX/apple.png',
        price: 1.99
      },
      {
        id: 35,
        name: 'Avocado ( 1Lb )',
        imageUrl: 'https://i.ibb.co/DWTWBgM/avocado.png',
        price: 3.99
      },
      {
        id: 36,
        name: 'Banana ( 1Lb )',
        imageUrl: 'https://i.ibb.co/0DXCLmN/banana.png',
        price: 1.29
      },
      {
        id: 37,
        name: 'Cabbage ( Each )',
        imageUrl: 'https://i.ibb.co/19VcpPc/cabbage.png',
        price: 1.99
      },
      {
        id: 38,
        name: 'Cauliflower ( Each )',
        imageUrl: 'https://i.ibb.co/WgDRStQ/cauliflower.png',
        price: 2.49
      },
      {
        id: 39,
        name: 'Carrot ( 1Lb )',
        imageUrl: 'https://i.ibb.co/yfvXWtw/carrot.png',
        price: 1.49
      },
      {
        id: 40,
        name: 'Cocomber ( 1Lb )',
        imageUrl: 'https://i.ibb.co/J2WTbkp/cocomber.png',
        price: 1.29
      },
      {
        id: 41,
        name: 'Lemon ( 4Pcs )',
        imageUrl: 'https://i.ibb.co/Th9vBF5/lemon.png',
        price: 3
      },
      {
        id: 42,
        name: 'Lettuce ( Each )',
        imageUrl: 'https://i.ibb.co/thxFZdk/lettuce.png',
        price: 1.29
      },
      {
        id: 43,
        name: 'Onion ( 1Lb )',
        imageUrl: 'https://i.ibb.co/8jHJcVH/onion.png',
        price: 1.29
      },
      {
        id: 44,
        name: 'Tomato ( 1Lb )',
        imageUrl: 'https://i.ibb.co/Y3hTsjY/tomato.png',
        price: 1.99
      },
      {
        id: 45,
        name: 'Potato ( 1Lb )',
        imageUrl: 'https://i.ibb.co/D8ZN0GH/potato.png',
        price: 1.79
      },
      {
        id: 46,
        name: 'Sweet Potato ( 1Lb )',
        imageUrl: 'https://i.ibb.co/WB1FDN4/sweet-potato.png',
        price: 1.99
      },
      {
        id: 47,
        name: 'Watermelon ( 1Lb )',
        imageUrl: 'https://i.ibb.co/DL3PbCr/watermelon.png',
        price: 1.29
      },
      {
        id: 48,
        name: 'Strawberry (1Pack)',
        imageUrl: 'https://i.ibb.co/hVSSt4y/strawberry.png',
        price: 2.49
      },
      {
        id: 49,
        name: 'Pomegranate ( 1Lb )',
        imageUrl: 'https://i.ibb.co/yNtk3yS/pomegranate.png',
        price: 1.39
      },
      {
        id: 50,
        name: 'Orange ( 1Lb )',
        imageUrl: 'https://i.ibb.co/VQM958J/orange.png',
        price: 1.99
      }
    ]
  },
  nuts: {
    id: 5,
    title: 'Nuts & Chocolate',
    routeName: 'nuts',
    items: [
      {
        id: 51,
        name: 'Twix',
        imageUrl: 'https://i.ibb.co/xsxYRY9/twix.png',
        price: .97
      },
      {
        id: 52,
        name: 'Snickers',
        imageUrl: 'https://i.ibb.co/9GM2X6J/snickers.png',
        price: .97
      },
      {
        id: 53,
        name: 'Mars',
        imageUrl: 'https://i.ibb.co/DLCySYx/mars.png',
        price: .97
      },
      {
        id: 54,
        name: 'Kitkat',
        imageUrl: 'https://i.ibb.co/GPxGM37/kitkat.png',
        price: .97
      },
      {
        id: 55,
        name: 'Hersheys',
        imageUrl: 'https://i.ibb.co/g6qHDLb/hershey-s.png',
        price: .97
      },
      {
        id: 56,
        name: 'Galaxy Milk Chocolate',
        imageUrl: 'https://i.ibb.co/MkxSmqL/galaxy.png',
        price: .97
      },
      {
        id: 57,
        name: 'Pistachio ( 1Lb )',
        imageUrl: 'https://i.ibb.co/qyNGjnh/pistachio.png',
        price: 5.99
      },
      {
        id: 58,
        name: 'Peanut ( 1Lb )',
        imageUrl: 'https://i.ibb.co/9HvTPVJ/peanut.png',
        price: 2.49
      },
      {
        id: 59,
        name: 'Almonds ( 1Lb )',
        imageUrl: 'https://i.ibb.co/xsTSxJW/almonds.png',
        price: 2.99
      }
    ]
  }
};

export default SHOP_DATA;
