import Link from 'next/link';

export default function Page() {
    let photos = Array.from({length: 6}, (_, i) => i + 1);
    return (
      <section className="cards-container">
        {photos.map((id) => (
          <Link className="card hover:scale-110 active:scale-100 transition-all" key={id} href={`/photos/${id}`} passHref>
            {id}
          </Link>
        ))}
      </section>
    );
}
