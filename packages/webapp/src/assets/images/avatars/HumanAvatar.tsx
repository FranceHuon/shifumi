const HumanAvatar = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="74"
			height="74"
			fill="none"
			viewBox="0 0 74 74"
		>
			<g filter="url(#filter0_d)">
				<circle
					cx="37"
					cy="32"
					r="31"
					fill="#0A0F26"
					stroke="#0440A3"
					stroke-width="2"
				/>
				<path
					fill="#0158E6"
					fill-rule="evenodd"
					d="M17 54.416C17.807 44.111 26.426 36 36.938 36c10.513 0 19.131 8.11 19.938 18.416C51.576 59.134 44.592 62 36.938 62 29.284 62 22.3 59.134 17 54.416zM46.938 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
					clip-rule="evenodd"
				/>
				<path
					fill="#0A0F26"
					d="M32 22H36V24H32zM38 22H42V24H38zM35 28H39V30H35z"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d"
					width="74"
					height="74"
					x="0"
					y="0"
					color-interpolation-filters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="5" />
					<feGaussianBlur stdDeviation="2.5" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

export default HumanAvatar;
