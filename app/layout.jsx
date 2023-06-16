import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Home",
    description: 'Discover & Share Food',
    icons: {
      icon: [
        '/favicon/favicon.ico',
      ],
      apple: [
        '/favicon/apple-touch-icon.png?v=2',
      ],
      shortcut: [
        '/favicon/apple-touch-icon.png'
      ]
    },
    manifest: '/site.webmanifest'
}
const Roolayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
               <div className="gradient" /> 
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>

    </html>
  )
}

export default Roolayout