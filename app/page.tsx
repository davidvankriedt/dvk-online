import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <section className="flex flex-col h-screen items-center my-5">
      <Marquee
        className="md:text-[100px] lg:text-[150px] text-[30px] no-scrollbar"
        direction="left"
        speed={200}
        >
          david van kriedt
      </Marquee>
      <div className="flex justify-between w-3xs my-5">
        <a href="https://open.spotify.com/artist/5qO2KqO0ypwGgoLP6PrrUe?si=giTAOfsTTtqI8jz0Rnbmzw">music</a>
        <a href="https://github.com/davidvankriedt">github</a>
        <a href="https://davidvankriedt.github.io/notes/">notes</a>
      </div>
      <video className="w-96 md:w-3/4 lg:w-1/2" autoPlay muted playsInline loop>
        <source src="/gnomes.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
