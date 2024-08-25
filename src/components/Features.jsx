import { GiCoffeeBeans } from "react-icons/gi";
import Tag from './Tag';
import Card from './Card'

const Feature = () => {
    return (
        <div className="w-full h-full bg-secondary py-20 px-20">
            <Tag/>

            <div className="text-center w-[500px] m-auto">
                <span className="text-[25px] font-bold">Relax and have a sip with us</span>
                <p className="leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab reiciendis est asperiores nemo. Facere expedita dolorum sed tempore laboriosam minima consectetur veritatis error quidem recusandae, dolore fugit repellendus. Rerum.</p>

            </div>
            
            <div className="mt-20 flex justify-evenly">
               <Card title="Good coffee and food"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab reiciendis est asperiores nemo. Facere expedita dolorum sed tempore laboriosam minima consectetur veritatis error quidem recusandae, dolore fugit repellendus. Rerum." />
               <Card title="Cozy Place"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab reiciendis est asperiores nemo. Facere expedita dolorum sed tempore laboriosam minima consectetur veritatis error quidem recusandae, dolore fugit repellendus. Rerum."/> 
               <Card title="Friendly Staff"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab reiciendis est asperiores nemo. Facere expedita dolorum sed tempore laboriosam minima consectetur veritatis error quidem recusandae, dolore fugit repellendus. Rerum."/>
               <Card title="Good Food"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab reiciendis est asperiores nemo. Facere expedita dolorum sed tempore laboriosam minima consectetur veritatis error quidem recusandae, dolore fugit repellendus. Rerum."/>
            </div>
        </div>
    )
}

export default Feature