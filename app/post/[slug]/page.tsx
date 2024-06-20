export default function PostDetails({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }