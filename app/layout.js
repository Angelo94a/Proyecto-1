import '../style/global.css'
import Navbar from '../components/Navbar'
export default function RootLayout({ children }) {
  return (
		<html lang="es">
			<head />
			<body>
				<Navbar />
				{children}
				<script
					type="module"
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				></script>
				<script
					nomodule
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
				></script>
			</body>
		</html>
	)
};
