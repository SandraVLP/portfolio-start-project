import Work1 from "../../assets/images/works-1.jpg";
import Resp from "../../assets/images/resp.png";
import Ux from "../../assets/images/ux.png";
import Front from "../../assets/images/front.png"

export function Services() {
    return (
<section className="service">
<h2>What I do</h2>
<ul className="service-list">
    <li>
        <img src={Ux} alt="UX"></img>
        UX/UI Design </li>
    <li><img src={Front} alt="Front"></img>Front End Development </li>
    <li><img src={Resp} alt="Resp"></img>Responsive Design</li>
    </ul>
<div className="service-about">
    <div className="service-description">
        <span>UX/ ui design</span> 
        <h3>Research, Design, Prototype, and Animation</h3>
        <a>Learn more</a>
           </div>
           <img src={Work1} alt="Ux design"></img>
</div>


</section>
    );
}