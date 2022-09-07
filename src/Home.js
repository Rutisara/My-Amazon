import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt="/"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="Star Projector, Rossetta Galaxy Projector for Bedroom, Bluetooth Speaker and White Noise Aurora Projector, Night Light Projector for Kids Adults Gaming Room, Home Theater, Ceiling, Room Decor (Black) "
          price={39.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81sgaKbVJ9L.__AC_SY445_SX342_QL70_FMwebp_.jpg"
        />
        <Product
          id="1234"
          title=" Interchangeable Seasonal Welcome Sign Front Door Decoration, Rustic Round Wood Wreaths Wall Hanging Outdoor, Farmhouse, Porch, for Spring Summer Fall All Seasons Holiday Halloween Christmas."
          price={19.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81zwoUuAsLL._AC_UL320_.jpg"
        />

        <Product
          id="12341"
          title="Flameless Candles, Flickering Moving Flameless LED Candles Set of 3 Pillars, Battery Operated Candles with Remote and Timers, Grey for Home Decor "
          price={17.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ZpYvoNeAL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345"
          title="Leicofay Ceramic Hollow Donut Vase Set of 2, Off White Vases for Decor Nordic Minimalism Style Decor for Wedding Dinner Table Party Living Room Office Bedroom (L9”*W8” Bottle Mouth 1 inch) "
          price={39.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61lRkA4GtDL._AC_UL320_.jpg"
        />
        <Product
          id="123456"
          title="ODOM Artificial Plants - 3 Pcs Small Potted Fake Plants for Home Office Decor - Colorful Faux Plants Plastic Grass Greenery for Bathroom Farmhouse Wedding Desk House Shelf Indoor Decorations "
          price={21.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81YOqFz9ouL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="1234567"
          title="Walker Edison Glenwood Rustic Farmhouse Glass Door Highboy Fireplace TV Stand for TVs up to 65 Inches, 58 Inch, Brown "
          price={339.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/810aUpYfU8L._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345678"
          title="CWI Gifts Wooden Candy Corn Shelf Sitters 3/Set, Multi"
          price={19.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81xC-JDtVUL._AC_UL320_.jpg"
        />
        <Product
          id="123456781"
          title="Ecoprsio Console Table with 3 Drawers, 47'' Industrial Sofa Table Entryway Table Narrow Long with Storage Shelves for Entryway, Front Hall, Hallway, Sofa, Living Room, Kitchen, 47 Inch, Rustic Brown "
          price={15.26}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71kT0m-wm6L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456783"
          title="Ecoprsio Console Table with 3 Drawers, 47'' Industrial Sofa Table Entryway Table Narrow Long with Storage Shelves for Entryway, Front Hall, Hallway, Sofa, Living Room, Kitchen, 47 Inch, Rustic Brown"
          price={114.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81qbDWblYwS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456784"
          title="Dolonm Swivel Accent Barrel Chair Modern Sofa Lounge Club Round Chair Linen Fabric for Living Room Hotel with 3 Pillows (Orange-Linen) "
          price={687.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81kMBrKJBxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456785"
          title="Queen Size Sheet Set - 6 Piece Set - Hotel Luxury Bed Sheets - Extra Soft - Deep Pockets - Easy Fit - Breathable & Cooling Sheets - Wrinkle Free - Comfy - White Bed Sheets - Queens Sheets - 6 PC "
          price={49.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61l7FSSDpwL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home