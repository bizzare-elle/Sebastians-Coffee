import { GiCoffeeBeans } from "react-icons/gi";


const Card = (props) => {
    
    return (
        <div className="size-[280px] bg-accent rounded-xl text-secondary text-center py-5 px-4 hover:bg-accent/90">

        <GiCoffeeBeans className="size-[50px] m-auto P-10 "/>

        <span className="font-bold tracking-wide text-[17px] leading-loose">{props.title}</span>
        <p className="text-[12px] font-light">{props.description}</p>

    </div>

    )
}

export default Card 