type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      {/* Testnew de tim kiem trong render page.test.tsx */}
      <p>Testnew2</p>
      <p>Welcome to TV</p>
    </>
  )

  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Textnew</p>
      <p>Welcome to TV</p>
    </>
  )
}
