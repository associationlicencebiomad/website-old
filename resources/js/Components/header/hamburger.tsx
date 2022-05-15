import React, { MouseEventHandler } from "react";
import { GiHamburgerMenu } from "react-icons-all-files/gi/GiHamburgerMenu";


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
