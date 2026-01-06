import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
  return (
    <div className="body">
      <Head>
        <title>404 - Page Introuvable | Frahier'stival</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <div id="wrapper">
        <header id="header">
            <div className="content">
                <div className="inner">
                    <h1>404</h1>
                    <p>Oups ! Il semblerait que vous vous soyez égaré...</p>
                    <p style={{fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '2rem'}}>
                      "La musique est le seul chemin qui mène partout."
                    </p>
                    <ul className="actions" style={{justifyContent: 'center'}}>
                        <li>
                            <Link href="/" className="button">
                                Retour à l'accueil
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <footer id="footer">
            <p className="copyright">&copy; Frahier'stival.</p>
        </footer>
      </div>
      <div id="bg"></div>
    </div>
  )
}
