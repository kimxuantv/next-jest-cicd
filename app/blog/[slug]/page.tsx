type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  {/* Testnew de tim kiem trong render page.test.tsx */}
  <p>Test new</p>
  <p>Welcome to TV</p>
  </>
}
