import styled from "styled-components";
import { Icon } from "../components/Icon";
import { myTheme } from "../styles/Theme";

export function Footer() {
    return (
<StyledFooter>
<span>Designed and developed by Rostam Sadiqi 2021</span>
<div className="icon-container">
    <Icon iconId="ball"></Icon>
    <Icon iconId="be"></Icon>
    <Icon iconId="in"></Icon>
    <Icon iconId="inst"></Icon>
</div>

</StyledFooter>
    );
}

const StyledFooter = styled.footer `
    background-color: ${myTheme.secondary};
    display: flex;
    justify-content: space-between;
`