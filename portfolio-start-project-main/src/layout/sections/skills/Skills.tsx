import styled from "styled-components";
import { Icon } from "../../../components/Icon";

export function Skills() {
    return (
<section className="Skills">
<h2>Skills</h2>

<StyledGrid className="skills-grid">
    <Icon iconId="redux"></Icon>
    <Icon iconId="react-js"></Icon>
    <Icon iconId="react-nat"></Icon>
    <Icon iconId="html"></Icon>
    <Icon iconId="mongo"></Icon>
    <Icon iconId="express"></Icon>
    <Icon iconId="js"></Icon>
    <Icon iconId="git"></Icon>
    <Icon iconId="styled-comp"></Icon>
    <Icon iconId="typescript"></Icon>
</StyledGrid>
</section>
    );
}

const StyledGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
    justify-content: space-around;

`