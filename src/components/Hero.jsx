import Button from "./Button"
import bg from '../image/coffee.png'

const Hero = () => {
    
    const hello = "helol";

    return <main className="bg-primary w-full h-full px-20 relative overflow-hidden">
                <div className="bg-blur absolute right-0">

                </div>
                <div className="absolute right-2 bottom-0">
                    <img src={bg} alt="" className="h-[720px]"/>
                 </div>
             <div className="flex flex-col gap-y-1">
             <div className="flex flex-col flex-wrap w-100">
                <h1 className="text-secondary font-bold text-[60px] pt-48 tracking-wide leading-snug">
                    Expresso yourself and have a <br/> caffienated day ahead</h1>

                <p className="text-secondary font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque voluptatem, <br /> aliquid ducimus deleniti obcaecati fugit delectus sint in officia eveniet sed nobis voluptatum. <br /> Tempore provident veniam facere placeat maiores.
                </p>
           </div>
       </div>

       <Button label="Learn More" onclick={() => alert("Thank you for visiting us")} />
       <Button label="Visit Us" onclick={() => alert("hello")} />


    </main>

}

export default Hero

