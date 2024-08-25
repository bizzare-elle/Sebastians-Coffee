import Products from './Products';

const TopProducts = () => {
    return (
        <div className='section py-20 px-20'>
            <h1 className='text-secondary text-center font-bold text-[25px] py-10'>Top Products</h1>
                <div className='flex justify-evenly py-10'>
                    <Products name="Cafe Ala Mode"/>
                    <Products name="Spanish Latte"/>
                    <Products name="Matcha Latte"/>
                </div>
        </div>
    )
}

export default TopProducts