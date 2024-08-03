import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function LoadingComponent() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				minHeight: '100%',
				margin: 'auto',
				position: 'fixed',
				background: `linear-gradient(
          0deg,
          rgba(1, 29, 56, 1) 0%,
          rgba(0, 68, 133, 1) 100%
        )`,
				top: 0,
				left: 0,
			}}
		>
			<CircularProgress />
		</Box>
	);
}
