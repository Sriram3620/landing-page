import "./index.css"

const HomeIngredients=()=>
{
   
const lists=[
    {
        head:"Vitamin C",
        des:"Vitamin C as ascorbic acid",
        bg:"card1",
        col:"col-lg-4",
        card:"ingre-card"
    },
    {
        head:"Vitamin B3",
        des:"Niacin for healthy gut and skin",
        bg:"card2",
        col:"col-lg-4",
         card:"ingre-card"
    },
    {
        head:"Magnesium",
        des:"Boost energy and support muscle function",
        bg:"card3",
        col:"col-lg-3",
         card:"ingre-card2"
    },
    {
        head:"Hyaluronic Acid",
        des:"For smooth, supple and soft skin!",
        bg:"card4",
        col:"col-lg-3",
         card:"ingre-card2"
    },
    {
        head:"Lactobacillus",
        des:"Invigorate your gut microbiome",
        bg:"card5",
        col:"col-lg-3",
         card:"ingre-card2"
    },
    
];


    return(
        <div className="container-fluid ingre-bg"> 
            <div className="d-flex flex-wrap">
                <div className="box-1 mr-1">
                     <p className="ingre-topic">INGREDIENTS</p>
                     <h1 className="ingre-head">Better Ingredients</h1>
                     <p className="ingre-des">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
                </div>
                {lists.map((each)=>{
                    return(
                        <div className={`${each.card}  ${each.bg}  mr-1`}>
                    <div>
                        <h1 className="card-head">{each.head}</h1>
                        <p className="card-des">{each.des}</p>
                    </div>
                      <a href="/" className="see-more">SEE MORE</a>
                </div>
                    )
                })}
               <div>
                <img className="mt-3 ml-4" alt="ingre" src="https://s3-alpha-sig.figma.com/img/481a/5bc5/e968343e02ead9caa7924ddcbe67f484?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isHNUtnP5iIEQWpnfbALi3y6aLrgERKb5Jo9BlfDcZMLikAan6qx3FmvvhjLxt2HklkM34YOzzohwue9BMYB9e~lx1~1TExqAA4HfvKu4wIR2E8N5EUZC00LM-05L33X1syt9lgfWPMXt6GUGuoGsXyHSxqcKF7ROPhAuQdK16-STlHtmz1JNfQ~4K4Fl0vNY~ScS-zuNfRzcUh9i04WnyzRj2mihDJXfImFvhNlIhxfTVLizrwKz48kQ-JfFlsxt2l~XZZf~vOYZmtvO-UJ8leBND8avmNv9fD9Eo7ybk1XUWm1-0EntuUdrkmijRvTG2dz4VixIsROa95bYFCe8w__" />
               </div>
            </div>
        </div>
    )
}

export default HomeIngredients;