import * as React from 'react';
import bannerImg from './components/imgs/1200x380.png';

export interface buttonTypes {
    closeText: string;
    openText: string;
    class: string;
}

export interface classTypes {
    closed: string;
    closing: string;
    opened: string;
    opening: string;
}
interface IProps  {
    openAtStart: boolean | number;
    autoToggle: boolean;
    transition: boolean;
    button: buttonTypes;
    classs: classTypes;
    ref: any;
    style: string;
    transitions:string;
}

const Banner2:React.FC<IProps> = props => {
    const {openAtStart, autoToggle, transition, button,classs} = props;
    const [isOpen, click] = React.useState(openAtStart)
    const [bannerClass,changeClass] = React.useState(openAtStart? classs.opened:classs.closed);
    //處理click
    const submit = () =>{
        click(!isOpen)
        changeClass(isOpen? classs.closing:classs.opening)
        setTimeout(()=>changeClass(isOpen? classs.closed:classs.opened),transition ? 2000 : 0)
    }

    React.useEffect(()=>{
        //處理autoToggle及transition的效果
        if(typeof autoToggle === 'number')
        {
            setTimeout(()=>{click(isOpen => !isOpen);changeClass(isOpen? classs.closing:classs.opening)} ,autoToggle)
            setTimeout(()=>changeClass(isOpen? classs.closed:classs.opened), transition ? autoToggle+1500:autoToggle )
        }
        else if (autoToggle)
        {
            setTimeout(()=>{click(isOpen => !isOpen);changeClass(isOpen? classs.closing:classs.opening)}, 2000)
            setTimeout(()=>changeClass(isOpen? classs.closed:classs.opened), transition ? 3500:2000)
        }
    },[autoToggle])

    return (
        <div  
        style={{transition: transition ? "all 2s" : "all 0s"}}
        className={`banner 
        ${bannerClass}
        `}>
            <img className="img" src={bannerImg} alt="輸入廣告促銷說明文字"/>
            <button className={button.class} onClick={submit}>{isOpen ? button.closeText:button.openText}</button>
        </div>
    )
} 

export default Banner2;