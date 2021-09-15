import styled from "styled-components"
import { HiSearchCircle as IconHiSearchCircle } from "react-icons/hi"
import { AiFillHome as IconAiFillHome } from "react-icons/ai"
import { RiHomeHeartFill as IconRiHomeHeartFill } from "react-icons/ri"

export const HiSearchCircle = styled(IconHiSearchCircle)`
    position: absolute;
    z-index: 2;

    &.setas{
        top: 50%;
        bottom: 0;
        left: 75%;
        right: 0;
    }
`

export const AiFillHome = styled(IconAiFillHome)`
    position: absolute;
    z-index: 2;

    &.pueblo_paleta{
        top: 4%;
        bottom: 0;
        left: 77%;
        right: 0;
    }

    &.pueblo_vacio{
        top: 51%;
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

export const RiHomeHeartFill = styled(IconRiHomeHeartFill)`
position: absolute;
    z-index: 2;

    &.casa{
        top: 80%;
        bottom: 0;
        left: 22.5%;
        right: 0;
    }

`