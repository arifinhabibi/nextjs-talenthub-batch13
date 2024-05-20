import Image from "next/image";

interface Cat {
  name: string;
  image: string;
}

const ItemCard = ({ name, image }: Cat) => {
  return (
    <div className="px-4 py-5">
      <Image
        src={image}
        width={200}
        height={200}
        className="w-52 h-32 rounded-t-md"
        alt={name}
      />
      <h1 className="text-center bg-white rounded-b-md text-indigo-600 font-semibold py-3">
        {name}
      </h1>
    </div>
  );
};

export default ItemCard;
