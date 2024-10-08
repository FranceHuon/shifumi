import { Tag, Heading, HeadingProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type BoxHeadingProps = PropsWithChildren & HeadingProps;

const BoxHeading = ({ children, ...rest }: BoxHeadingProps) => {
	return (
		<Tag
			borderRadius="full"
			opacity={1}
			height={35}
			padding={5}
			width="100%"
			bg="primary.nightBlue"
		>
			<Heading
				fontWeight={900}
				fontSize={16}
				color="secondary.lightBlue"
				textAlign="center"
				width="100%"
				{...rest}
			>
				{children}
			</Heading>
		</Tag>
	);
};

export default BoxHeading;
