import React, { MouseEventHandler } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


type HeaderHamburgerProps = {
    onClick?: MouseEventHandler;
};

export default function HeaderHamburger(props: HeaderHamburgerProps) {
    return (
        <div onClick={props.onClick} className='hamburger'>
            <GiHamburgerMenu />
        </div>
    );
}
