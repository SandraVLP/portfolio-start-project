import iconsSprite from "../assets/images/sprite.svg"

type IconPropsType = {
iconId: string
width?:string
height?:string
viewbox?:string
aria?: string

}

export const Icon = (props: IconPropsType) => {
    return (
        <svg aria-label={props.aria || "Icon"} width={props.width  || "120"} height={props.height || "120"} viewBox={props.viewbox ||"0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}
