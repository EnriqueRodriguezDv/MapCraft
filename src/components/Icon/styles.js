import styled from "styled-components"
import { HiSearchCircle as IconHiSearchCircle } from "react-icons/hi"

export const HiSearchCircle = styled(IconHiSearchCircle)`
    position: absolute;
    z-index: 2;

    &.casa{
        top: 80%;
        bottom: 0;
        left: 22.5%;
        right: 0;
    }

    &.setas{
        top: 50%;
        bottom: 0;
        left: 75%;
        right: 0;
    }

    &.pueblo_paleta{
        top: 4%;
        bottom: 0;
        left: 77%;
        right: 0;
    }

    &.pueblo_vacio{
        top: 53%;
        bottom: 0;
        left: 1%;
        right: 0;
    }

    &.pueblo_bob{
        top: 30%;
        bottom: 0;
        left: 97%;
        right: 0;
    }
`