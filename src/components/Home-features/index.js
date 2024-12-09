import "./index.css"
import vector  from "../../images/vector.png";
import leaf  from "../../images/leaf.png";
import flag from "../../images/flag.png";
import shipping from "../../images/shipping.png";
import risk from "../../images/risk.png";
import spade from "../../images/spade.png";

const lists=[
    {
        img:vector,
        head:"Clinically Studied",
        des:"All products that we offer have undergone lab and safety tests",
    },
    {
        img:leaf,
        head:"Vegetarian Friendly",
        des:"We have a wide selection of vegetarian products to meet your needs"
    },
    {
        img:flag,
        head:"Made in India",
        des:"Shop local and explore health products made right here in India"
    },
    {
        img:shipping,
        head:"Free shipping",
        des:"We deliver to your door with no shipping costs on your orders"
    },
    {
        img:risk,
        head:"No Risk",
        des:"We ensure that all products are safe and within their use-by date"
    },
    {
        img:spade,
        head:"GMO free",
        des:"Natural, no modified products and derivatives for those who need it"
    }
]

const HomeFeatures=()=>
{
    return(
        <div className="fea-bg container-fluid m-5 ">
            <div className="row">
        {
            lists.map((each)=>{
                return(
                    <div className="fea-ins-bg col-12 col-md-6 col-lg-4 p-3 ">
                <div className="icon-bg">
                <img alt='img' className="icon" src={each.img} />
                </div>
                <h1 className="clean-head p-2">{each.head}</h1>
                <p className="clean-des pr-3 pl-3">{each.des}</p>
    
            </div>
                )
            })
        }
       
         </div>
        </div>
    )
}

export default HomeFeatures;