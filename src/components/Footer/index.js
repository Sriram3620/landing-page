import "./index.css"
import phone from "../../images/phone.png"
import loco from "../../images/loco.png"
import mail from "../../images/mail.png"
import location from "../../images/location.png"

const Footer=()=>
{
    return(
        <div className="footer-bg mt-3">
            <div className="container">
                <div className="row">
                <div className="foot-contact-con  pr-2">
                    <img className="contact-icon" alt="call" src={phone}/>
                    <div className="">
                        <h1 className="ph-text">Phone Number</h1>
                        <p className="ph-num">+974 3118 1843</p>
                    </div>
                </div>
                <div className="foot-contact-con  ">
                    <img className="contact-icon" alt="call" src={mail}/>
                    <div className="">
                        <h1 className="ph-text">Email Address</h1>
                        <p className="ph-num">Elbrithcqhr@gmail.com</p>
                    </div>
                </div>
                <div className="foot-contact-con  ">
                    <img className="contact-icon" alt="call" src={location}/>
                    <div className="">
                        <h1 className="ph-text">Office Location</h1>
                        <p className="ph-num"> Ambassador Street, Zone 61,</p>
                    </div>
                </div>
                <div className="footer-img  ">
                    <img alt="footer" src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__" />
                </div>
                <div className="col-lg-5 footer-con"> 
                    <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
                </div>
                <div className="col-12">
                    <div className="f-con">
                        <img className="final-icon" alt="loco" src={loco} />
                        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
    )
}

export default Footer;