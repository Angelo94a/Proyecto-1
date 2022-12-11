import '../style/global.css'
import Navbar from '../components/Navbar'
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
};
