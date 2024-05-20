import { useState ,useEffect } from "react";
import NFt2 from "assets/img/nfts/Nft2.png"; // KEEP THIS IMPORT
import NFt4 from "assets/img/nfts/Nft4.png"; // KEEP THIS IMPORT
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png"; // KEEP THIS IMPORT
import NFt6 from "assets/img/nfts/Nft6.png"; // KEEP THIS IMPORT

// Components Used in the Applicaiton
import NftCard from "components/card/NftCard";
import ServiceProfile from "./components/HistoryCard";
import ServiceCreate from "./components/TableTopCreators";

import {getAllMaterials, deleteMaterial} from 'data/api';


// Base Component of this file
const Customer = () => {
  const serviceListImage = [NFt2, NFt4, NFt3, NFt5, NFt6];
  const [materials, setMaterials] = useState([]);
  const [selectedNft, setSelectedNft] = useState({
    _id: '',
    name: '',
    unit: '',
    amount: 0
  });

  useEffect(() => {
    getAllMaterials().then(response => {
      setMaterials(response);
    })
  },[]);

  // Callback function to update selectedNft
  const handleNftCardClick = (data) => {
      const selectedHistoryData = {
        _id: data._id,
        name: data.name,
        amount: data.amount,
        unit: data.unit,
      }
      setSelectedNft(selectedHistoryData);
  };

  const handleNftCardDelete = async (data) => {
    deleteMaterial(data._id);
    setTimeout(() => {
      getAllMaterials().then(response => {
        setMaterials(response);
      })
    }, 500);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Materials List
          </h4>
        
        </div>

        {/* Service card */}
        <div className="z-20 grid grid-cols-1 p-4 gap-5 md:grid-cols-3" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          {materials.map((materials, index) => (
            <NftCard
              key={index}
              bidders={materials.bidders}
              title={materials.name}
              author={materials.unit}
              price={materials.amount}
              id={materials._id}
              image={serviceListImage[Math.floor(Math.random() * serviceListImage.length)]}
              onCardClick={() => handleNftCardClick(materials)}
              onCardDelete={() => handleNftCardDelete(materials)}
            />
          ))}
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-[24vw] right-10 rounded-xl 2xl:col-span-1 fixed">
        <ServiceCreate data={selectedNft} renderMaterials={setMaterials} />
        <ServiceProfile data={selectedNft} renderServices={setMaterials} />
      </div>
    </div>
  );
};

export default Customer;
