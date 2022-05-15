import * as React from 'react';

import Scroll from '../../images/scroll.svg';
import Separator_1 from '../../images/separator-1.svg';
import Separator_2 from '../../images/separator-2.svg';
import Illustration from '../../images/illustration.svg';
import LogoAlbm from '../../images/logo_albm.webp';
import Profil from '../../images/pp.png';
import './home.scss';
import { CardAsso } from '../Components/CardAsso/cardAsso';

export interface IHomeprops {
}

export default function Home(props: IHomeprops) {
	return (
		<>
			<section className='landing' >
				<div className="landing__title">
					<h1>Bienvenue sur le site de la Licence Bio—MAD</h1>
				</div>
				<Scroll className='scrollDown' />
				<Separator_1 className="separator" />
			</section>
			<section className='about'>
				<h2 className="about__title">
					Une licence en 2 parties
				</h2>
				<div className="about__content">
					<p className="about__content__text" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus tellus imperdiet tellus pharetra. Vulputate tempor volutpat feugiat aliquet vestibulum cras ultricies ut eu. Amet aenean dapibus bibendum in pellentesque nisi sapien interdum. Consequat ut congue iaculis varius at tincidunt pretium sed pellentesque. Eget eget diam faucibus nulla tempus risus, mauris, viverra nulla. In id neque bibendum quam lectus. Orci arcu, nulla at nibh amet rhoncus, feugiat eleifend. Vivamus odio quis nunc, consequat et pretium sed augue. Felis sit risus in aliquam senectus fames cursus. Enim, duis donec ultricies sed. Egestas ornare facilisis sem sed eu viverra eros ornare. Ornare placerat sagittis viverra at rutrum.
					</p>
					<Illustration className="about__content__illustration" />
				</div>
			</section>
			<section className='albm'>
				<Separator_2 className="separator" />
				<h2 className="albm__title">
					L’association :
				</h2>
				<div className="albm__content">
					<img src={LogoAlbm} alt="Logo ALBM" />
					<div className="albm__content__container" >
						<div className="albm__content__container__item">
							<p className="albm__content__text" >
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus tellus imperdiet tellus pharetra. Vulputate tempor volutpat feugiat aliquet vestibulum cras ultricies ut eu. Amet aenean dapibus bibendum in pellentesque nisi sapien interdum. Consequat ut congue iaculis varius at tincidunt pretium sed pellentesque. Eget eget diam faucibus nulla tempus risus, mauris, viverra nulla.
							</p>
						</div>
						<div className="albm__content__container__item">
							<CardAsso name="Tanguy BERNARD" role="Président" image={Profil} />
							<CardAsso name="Léo MEYER" role="Vice-président" image={Profil} />
							<CardAsso name="Enora CORRE" role="Secrétaire" image={Profil} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
