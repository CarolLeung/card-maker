// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/form.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}