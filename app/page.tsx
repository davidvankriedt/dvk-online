import Marquee from 'react-fast-marquee';
import ModelViewer from './components/ModelViewer';

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen items-center my-5">
      <Marquee
        className="md:text-[100px] lg:text-[150px] text-[30px] no-scrollbar"
        direction="left"
        speed={200}
        >
        david van kriedt
      </Marquee>
      <div className="flex flex-col gap-4 my-5 mx-auto items-center md:flex-row md:w-64">
        <a className="text-2xl md:text-xl" href="https://distrokid.com/hyperfollow/davidvankriedt/afraid?ref=release">music</a>
        <a className="text-2xl md:text-xl" href="https://github.com/davidvankriedt">github</a>
        <a className="text-2xl md:text-xl" href="https://davidvankriedt.github.io/notes/">notes</a>
      </div>
     
      <div className="w-full max-w-3xl mx-auto my-8 aspect-video">
          <iframe 
            className="w-full h-full rounded-lg border-0 block"
            src="https://www.youtube.com/embed/T8vqC--nP04?si=zCLN4WI1xUrtY-CD"
            title="David Van Kriedt - AFRAID (Official Music Video)" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
      </div>

      <ModelViewer />

    </section>
  );
}
