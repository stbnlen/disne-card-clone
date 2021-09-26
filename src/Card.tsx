// styles
import React from 'react';
import { Wrapper } from './Card.styled';

type Props = {
	logo: string;
	video: string;
};

export const Card: React.FC<Props> = ({ logo, video }) => {
	const handleMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
		e.currentTarget.play();

	const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) =>
		e.currentTarget.pause();

	return (
		<Wrapper>
			<div className='border' />
			<img src={logo} alt='logo' />
			<video
				loop
				preload='none'
				muted
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}>
				<source src={video} type='video/mp4' />
			</video>
		</Wrapper>
	);
};
