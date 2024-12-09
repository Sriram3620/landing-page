import "./index.css"
import HomeFeatures from "../Home-features"
import HomeIngredients from "../Home-ingredients";
import HomeMedicines from "../Home-Medicines";
const functions=[
    {
        img:"",
        hed:"Vitamins",
        des:"Increased Vitamins and minerals in your diet"
    },
    {
        img:"",
        hed:"Weight Loss",
        des:" Weight Loss Find scientifically proven solutions"
    },
    {
        img:"",
        hed:"Functional Foods",
        des:"Functional Foods From protein powers to baby formula"
    }
]

const HomeMain=()=>
{
   

    return(
        <> 
            <h1 className="main-head ">Essential Vitamins</h1>
            <div className="content-bg">
                <div className="m-4">
                    <p className="online-med">Online Medical Supplies</p>
                    <h1 className="get-vitamins">Get your Vitamins & Minerals</h1>
                    <button className="explore-btn">Explore</button>
                </div>
                <div className="med-img-bg m-4 ">
                    <img className="medicine-img" alt="medicine" src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21VVDmU7JxcRB76OOhoAt9ZJzhck8hR9U3L1UvokjwzK916BF2uOVElrkcxN5YP-si~qFGW9mXybipDrvdR9inQNdWLrDUUFadDcDwhwDJ4adJ0UfkwYRnZT-0b2Y9w29vguT4lAW1HMCi344hAaPojIhdUTUnuzzFnqR8X2VtFZXtBgZJYDWU5w5bRDHt1Nlxenbc59CkLE-RpPwl-8Wt6uz8rwl5~X6nDY-R0fyUzHYIp51B4LQF2W32WHBANFHGkAREYP66qtVWdYPpqIVAoba2zRrWozjVW~~unoMkhN0MSl-kap8oS2~IXt2HMzEYndt7tu2DsSbjQue1p9g__"/>
                </div>
                <div className="ml-5 mt-3 ">
                    {functions.map((each)=>
                    {
                        return(
                            <div className="functions-bg">
                            <img alt="fun-img" className="fun-img" src="https://s3-alpha-sig.figma.com/img/1d76/fc2a/470ec862c44115964979f90b5cb3a94e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8br3l5hvS1vnQy3WMDDXmvwBbAoZGBF~14OpoaLciq8S325-GN8~oF56m4ULopQlNJDHShbY78MmUGsjZKiZYOrAbdXVyr3HUSNpFdJtbKkVtYhvAUvHp6ghUpHNKNf2H0EhxgXQAdX5jDhFvmlnt6~wcvCWsUCjPhetY5usDdwSlgaddrZxhaKIuaDy8aQ9FqvG5MWZKQTnkBeWZlih89WfilN3Vkv0Iu6w2x8TmzehqQWS-GJFBXyOBMB1X-NSi2AkO4VTnN6MfPeNS-P8DlWm6JYTg4RHFY2CqAtNMenk5f9jmbl4lN-RE-Zn8XYlohyzBU~XMQB~2rnXotnfw__"/>
                            <div className="fun-inside-bg">
                                <p className="fun-vita">Vitamins</p>
                                <p className="fun-des">Increased Vitamins and
                                minerals in your diet</p>
                            </div>
                        </div>
                        )
                    })}
                  
                </div>
            </div>
            <div className="home-fea-bg">
            <HomeFeatures/>
            <HomeIngredients/>
            <HomeMedicines/>
            </div>
        </>
    
    )
}

export default HomeMain