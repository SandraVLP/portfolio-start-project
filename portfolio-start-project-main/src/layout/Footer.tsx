import styled from "styled-components";
import { Icon } from "../components/Icon";
import { myTheme } from "../styles/Theme";

export function Footer() {
    return (
<StyledFooter>
<span>Designed and developed by Rostam Sadiqi 2021</span>
<div className="icon-container">
    <Icon iconId="ball" width="22px" height="22px" viewbox="0 0 22 22"></Icon>
    <Icon iconId="be" width="22px" height="22px" viewbox="0 0 22 22"></Icon>
    <Icon iconId="in" width="22px" height="22px" viewbox="0 0 22 22"></Icon>
    <Icon iconId="inst" width="22px" height="22px" viewbox="0 0 22 22"></Icon>
</div>

</StyledFooter>
    );
}

const StyledFooter = styled.footer `
height: 10vh;
    background-color: ${myTheme.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
display: flex;
justify-content: space-between;

    }
`