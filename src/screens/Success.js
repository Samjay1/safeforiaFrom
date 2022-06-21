
const Success = () => {

    return ( 
        <div className="main-body d-flex flex-column min-vh-100 bg-white rounded">
        <div className="mb-5 pb-3">
             {/* <!-- LOGO --> */}
             <div className="text-center mt-3">
                <img className="logo-image" src={process.env.PUBLIC_URL+"/logo.jpeg"} alt="Ghana customer service logo"/>
            </div>
            {/* <!-- END LOGO --> */}
            {/* <!-- SECTOR HEAD --> */}
            <div className=" animate__animated animate__bounceIn">
                <div className=" mt-4 pl-4 pr-4 bg-white pt-4 pb-2 text-center">
                    <h4>SAFEFORIA SAMPLE RECEPTION FORM</h4>
                    <div className='mt-4 pt-4 border-top text-success'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-svg text-success" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span>
                        <h2 className='primary-text'>Form submitted</h2>
                        <p className='text-secondary text-left mr-3 '>Thank you. For more information please email <a href="mailto:info@safeforia.com">info@safeforia.com</a></p>
                    </div>
                </div>
                <div className="mt-3">
                <a  href="https://safeforia.com" className="mybtn bg-white rounded p-2 pl-3 pr-3 ml-4">
                   Home
                </a>
                </div>
            </div>
            {/* <!-- END SECTOR HEAD --> */}
        </div>  

      </div>
     );
}
 
export default Success;

