const Items = () => {
  return (
    <div className="flex gap-7 ml-[80px] mt-[40px] border w-7/12 h-[250px] rounded-xl overflow-hidden object-cover">
      <div className="h-full w-4/12  ">
        <img
          src="https://images.bewakoof.com/t320/women-s-blue-oversized-t-shirt-616040-1721740142-1.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="mt-4 ">
        <h2 className="text-xl font-semibold">Product Name</h2>
        <p className="mt-2 text-lg font-medium ">Ships whit in a few days!</p>
        <div>
          <p>Size : </p>
          <p>Quantity : </p>
          <p>Price : </p>
        </div>
      </div>
    </div>
  );
};

export default Items;
