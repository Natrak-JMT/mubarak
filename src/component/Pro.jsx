
export default function Pro(props){
    return(
        <>
        <div className={props.Alldiv}>
            <div className={props.chromediv}>
                 <div className={props.imgh1p}>
                  <img src={props.pic} alt="ic" />
                  <div>
                 <h1 className={props.addh1}> {props.h1}</h1>
                 <p className={props.minimump}> {props.p}</p>
                 </div>
                </div>
               <div className={props.addbutton}>
               <div className={props.dashedline}></div>
               <button className={props.buttonstyle}>Add & Install Extension</button>
              </div>
           </div>
        </div>
        
        
        </>
    )
}