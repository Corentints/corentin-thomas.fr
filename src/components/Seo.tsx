import Head from 'next/head'

export function Seo() {
  const title = 'Corentin Thomas | Portfolio'
  const description =
    'Corentin THOMAS, développeur web freelance à Metz. Création ou refonte de site internet, intégration, réferencement, développement mobile, ...'

  const bannerUrl = `https://corentin-thomas.fr/banner.png`

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" key="favicon" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={'https://corentin-thomas.fr'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bannerUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={'https://corentin-thomas.fr'} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bannerUrl} />
    </Head>
  )
}
