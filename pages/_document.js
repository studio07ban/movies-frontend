import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr" translate="no">
        <Head>

          {/* Encodage */}
          <meta charSet="utf-8" />

          {/* Responsive */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
          <meta name="format-detection" content="telephone=no" />

          {/* SEO */}
          <meta name="description" content="MovieSphere — Découvrez les derniers films, notes, avis et tendances cinéma avec une interface fluide et moderne." />
          <meta name="keywords" content="films, cinéma, critiques, avis, notes, watchlist, bande-annonce, MovieSphere" />
          <meta name="author" content="Pierre Beauchesne" />

          {/* Désactive Google Traduction */}
          <meta name="google" content="notranslate" />

          {/* Couleur du thème mobile */}
          <meta name="theme-color" content="#000000" />

          {/* Open Graph (prévisualisation réseaux sociaux) */}
          <meta property="og:title" content="MovieSphere — Films & Critiques" />
          <meta property="og:description" content="Explore les films populaires, lis les avis, donne tes notes et gère ta watchlist." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://movies-frontend-roan.vercel.app/" />
          <meta property="og:image" content="https://movies-frontend-roan.vercel.app/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MovieSphere" />
          <meta name="twitter:description" content="Découvre les nouveautés cinéma, notes et avis dans une interface fluide." />
          <meta name="twitter:image" content="https://movies-frontend-roan.vercel.app/og-image.png" />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;