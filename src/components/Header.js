// import './logo.jpeg';
import '../logo.jpeg'
const Header = ()=>{
    return( 
        <>
            <div className="text-center animate__animated animate__flipInY bg-white header pt-3">
                <img src={process.env.PUBLIC_URL+"/logo.jpeg"} alt='Safeforia Logo' className='logo-image'/>
                <h2 className='mt-2'>SAFEFORIA- SAMPLE RECEPTION FORM</h2>
                <div className='m-3 text-left'>
                <p className='text-justify m-0'>Safeforia is a food quality and safety consultancy. We bring you complete, 
                    focused, sustainable and cost-effective solutions to all your food quality
                     and food safety needs.</p>
                <p>Choose Safeforia as your food safety partner to build food safety capacity of your
                     employees and assist you with our diverse range of services that comes conveniently 
                     packaged to meet your company needs.</p>
                </div>
            </div>
        </>
    )

}

export default Header;