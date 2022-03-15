interface IRoomsData {
  title: string
  price: number
  address: string
  description: string
  district: string
  transport: string
  coords?: any
  images: string[]
  moveInDate: string
}

export const roomsData: IRoomsData[] = [
  {
    title: 'Habitación con cama doble en una Warehouse reformada en Brick Lane',
    price: 1050,
    address: '53b Hanbury Street, E1 5JP',
    description: `Habitación doble en una piso muy amplio situado en un edificio donde  antiguamente eran unos almacenes y ahora están convertidos en pisos.
    Decorado con un estilo moderno y desenfadado la casa tiene todas las comodidades que puedas necesitar.

    Desde la azotea puedes disfrutar de unas vistas espectaculares de la City asi como de los dias soleados para celebrar barbacoas y reuniones con los amigos, o simplemente relajarte del stress de la rutina diaria.
    Brick Lane es uno de los barrios mas famosos de Londres por su movida alternativa, mercados de ropa y comida, actuaciones en directo en la calle y los famosos murales en la paredes del barrio. 
    
    Tambien puedes encontrar todo tipo de restaurantes, clubs, tiendas vintage, etc.
    En cuanto a los transportes mas cercanos tienes las estaciones de metro de Aldgate East, WHitechapel o incluso Liverpool Street.. Tambien tienes autobuses con conexion a los puntos mas centricos de la ciudad y lineas 24h.
    `,
    district: 'Brick Lane',
    transport: 'Liverpool Street/Whitechapel',
    coords: {},
    moveInDate: 'Available now',
    images: [
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/08/49/7f/142530040.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/e9/c6/3b/142530056.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/19/44/f0/142530045.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/79/e2/f6/142530057.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/c0/07/5b/148375882.jpg',
    ],
  },
  {
    title: 'Double bed in Liverpool Street',
    price: 1350,
    address: '3B, Liverpool Street',
    description: `Habitación doble en una piso muy amplio situado en un edificio donde  antiguamente eran unos almacenes y ahora están convertidos en pisos.
    Decorado con un estilo moderno y desenfadado la casa tiene todas las comodidades que puedas necesitar.
    Desde la azotea puedes disfrutar de unas vistas espectaculares de la City asi como de los dias soleados para celebrar barbacoas y reuniones con los amigos, o simplemente relajarte del stress de la rutina diaria.
    Brick Lane es uno de los barrios mas famosos de Londres por su movida alternativa, mercados de ropa y comida, actuaciones en directo en la calle y los famosos murales en la paredes del barrio. Tambien puedes encontrar todo tipo de restaurantes, clubs, tiendas vintage, etc.
    En cuanto a los transportes mas cercanos tienes las estaciones de metro de Aldgate East, WHitechapel o incluso Liverpool Street.. Tambien tienes autobuses con conexion a los puntos mas centricos de la ciudad y lineas 24h.
    `,
    district: 'Liverpool Street',
    transport: 'Liverpool Street/Whitechapel',
    coords: {},
    moveInDate: 'Available now',
    images: [
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/6d/86/ab/146681146.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/91/85/4b/146681140.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-P/90/id.pro.pt.image.master/46/f4/2b/146681070.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/f6/3c/bc/146681147.jpg',
    ],
  },
  {
    title: 'Cozzy modern studio in city center',
    price: 940,
    address: '53b Hanbury Street, E1 5JP',
    description: `Habitación doble en una piso muy amplio situado en un edificio donde  antiguamente eran unos almacenes y ahora están convertidos en pisos.
    Decorado con un estilo moderno y desenfadado la casa tiene todas las comodidades que puedas necesitar.
    Desde la azotea puedes disfrutar de unas vistas espectaculares de la City asi como de los dias soleados para celebrar barbacoas y reuniones con los amigos, o simplemente relajarte del stress de la rutina diaria.
    Brick Lane es uno de los barrios mas famosos de Londres por su movida alternativa, mercados de ropa y comida, actuaciones en directo en la calle y los famosos murales en la paredes del barrio. Tambien puedes encontrar todo tipo de restaurantes, clubs, tiendas vintage, etc.
    En cuanto a los transportes mas cercanos tienes las estaciones de metro de Aldgate East, WHitechapel o incluso Liverpool Street.. Tambien tienes autobuses con conexion a los puntos mas centricos de la ciudad y lineas 24h.
    `,
    district: 'SouthBank',
    transport: 'Liverpool Street/Whitechapel',
    coords: {},
    moveInDate: 'Available now',
    images: [
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/c3/80/d4/123119136.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/84/cc/f3/123119220.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/d5/05/08/123119137.jpg',
      'https://img3.idealista.pt/blur/WEB_DETAIL-L-L/0/id.pro.pt.image.master/0a/dc/d9/123119138.jpg',
    ],
  },
]
