import { Link } from "@inertiajs/inertia-react";
import React, { MouseEventHandler } from "react";
import { RiSettings4Line } from "react-icons-all-files/ri/RiSettings4Line";
import { RiUserLine } from "react-icons-all-files/ri/RiUserLine";
import { MdLogout } from "react-icons-all-files/md/MdLogout";

type HeaderDropdownProps = {
	open: boolean;
};

export default function HeaderDropdown(props: HeaderDropdownProps) {
	return (
		<div className="dropdown" style={{display: !props.open ? 'none' : ''}}>
			<ul className="dropdown__content">
				<li className="dropdown__content__item">
					<Link className="dropdown__link" href="/user/settings">
						<RiSettings4Line/> Settings
					</Link>
				</li>
				<li className="dropdown__content__item">
					<Link className="dropdown__link" href="/user/profil">
							<RiUserLine/> Mon profil
					</Link>
				</li>
				<li className="dropdown__content__item">
					<Link className="dropdown__link" href="/logout">
							<MdLogout/> Logout
					</Link>
				</li>
			</ul>
		</div>
	);
}
