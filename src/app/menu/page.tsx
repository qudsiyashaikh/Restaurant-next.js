
export default function MenuPage() {
  const menu = [
    {
       name: ' Biryani',
      description: "Hyderabadi Biryani , Chicken Dum Biryani ,  " ,
      list:" Mutton Biryani ,  Egg Biryani  , Fish Biryani  " ,
      l1:"Veg Biryani , Paneer Biryani , Keema Biryani ",

    },
    {
      name: 'Butter Chicken',
     description:"Butter Chicken Tikka , Butter Chicken Masala",
     list:"Boneless Butter Chicken , Creamy Butter Chicken"
    },
    {
      name: 'Paneer ',
      description: "Shahi Paneer , Kadai Paneer , Handi Paneer  " ,
      list:" Palak Paneer ,  Paneer Tikka  , Paneer Korma  " ,
    },
    {
      name: 'Noodles Varieties',
      description: "Chicken Hakka Noodles , Egg Noodles, Schezwan Noodles" ,
      list:" Chicken Schezwan Noodles ,  Garlic Noodles  , Paneer Garlic Noodles " ,
    },
    {
      name: 'Chicken Manchurian Dishes',
      description: "Chicken Manchurian Dry , Chicken Manchurian Gravy , Chicken Manchurian Balls " ,
      list:" Tandoori Chicken Manchurian , Garlic Chicken Manchurian" ,
    },
   
    {
      name: ' Roti',
      description: "Garlic Naan, Tandoori Roti , Laccha Paratha  "  ,
      list:" Butter Naan ,   Plain Chapati , Alo paratha  " ,
      
    },
  ];

  return (
    <main className="p-4 lg:px-20 xl:px-40  min-h-screen   flex flex-col md:flex-row items-center bg-amber-200">
      <h1 className="text-8xl font-bold text-center mb-8 text-green-800">Our Menu</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((item) => (
          <div key={item.name} className="border rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-600">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="mt-3  text-gray-600">{item.list}</p>
            <p className="mt-3  text-gray-600">{item.l1}</p>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
