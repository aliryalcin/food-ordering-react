import Image from "next/image"
import Title from "./ui/Title"
import {MdShoppingCart} from "react-icons/md"


const CampaingItem = () => {
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center
        gap-x-4">
            <div className="relative sm:w-40 sm:h-40 w-36 h-36 content-[''] border-[5px] border-primary
             rounded-full overflow-hidden">
                <Image src="/images/burger.jpg" alt="" layout="fill"
                className="hover:scale-110 transition-all"/>
            </div>
            <div className="text-white">
                <Title addClass="text-2xl">Hamburger</Title>
                <div className="font-dancing my-1">
                    <span className="text-[40px]">20%</span>
                    <span className="text-sm inline-block ml-1">Off</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2">
                    Order Now <MdShoppingCart size={20}/>
                </button>
            </div>

        </div>

    )
}


const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
        <CampaingItem/>
        <CampaingItem/>
    </div>
  )
}

export default Campaigns