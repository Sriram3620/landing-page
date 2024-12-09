import "./index.css"
import medicines from "../../images/medicines.png";
import medi from "../../images/medi.png";
import medsmall from "../../images/med-small.png";
import medbig from "../../images/medicines-big.png";

const HomeMedicines=()=>
{
    const style1={
        backgroundImage:`url(${medicines})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const medistyle={
        background:`url(${medi})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const medismall={
        backgroundImage:`url(${medsmall})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const medibig=
    {
        backgroundImage:`url(${medbig})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    console.log(medicines)
    return(
        <div className="container mt-4">
            <div className="row">
                <p className="text-center col-12 med-head">OUR BLOG</p>
                <h1 className="text-center col-12 late-news">Latest News</h1>
                <div className="col-lg-3 col-md-6">
                    <div style={medistyle} className="med-bg">
                        <div className="pt-3"> 
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2022</p>
                    </div>
                    <div style={style1} className="med-bg-2">
                        <div className="pt-3">
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2023</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div style={medismall} className="med-bg-2 med-sm order-md-0">
                       <div className="pt-3">
                         <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2023</p>
                    </div>
                    <div style={medibig}  className="med-bg med-big ">
                        
                        <p className="tag-des pt-5">The Covid-19 Epidemic In 2022</p>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6">
                    <div style={medibig} className="med-bg order-1">
                        <div className="pt-3">
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2022</p>
                    </div>
                    <div style={medistyle} className="med-bg-2">
                        <div className="pt-3">
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2023</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div style={medistyle} className="med-bg-2">
                        <div className="pt-3">
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2023</p>
                    </div>
                    <div style={medibig} className="med-bg order-md-0">
                        <div className="pt-3">
                        <p className="tag">20 Apr</p>
                        </div>
                        <p className="tag-des">The Covid-19 Epidemic In 2022</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default HomeMedicines;