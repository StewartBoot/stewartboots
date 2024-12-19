import { ArrowUpRight, Footprints, Handshake, PencilRuler, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { HomePageArticle } from "./home/components/HomePageArticle";
import Link from "next/link";
import { Testimonial } from "./home/components/Textimonial";

export default function Home() {
  return (
    <div className="py-10 w-full flex flex-col gap-10">
      <h3 className="font-light text-xl md:text-3xl text-center">Footware designed to the proper care of your feet</h3>

      <article
        className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between items-center"
      >
        <main className="flex flex-col gap-2 justify-between p-4 md:p-10">
          <h2 className="text-4xl font-extrabold tracking-widest">Our new location</h2>
          <p>You can call us to make an order and take care of your feet.</p>
          <div className="flex justify-between gap-4">
            <Button trailingIcon={<ArrowUpRight />} className="flex flex-1 items-center justify-between gap-2">Go to maps</Button>
            <Button variant="secondary" trailingIcon={<Phone />} className="flex flex-1 items-center justify-between gap-2">Call us</Button>
          </div>
        </main>
        <figure className="w-screen md:w-auto">
          <Image
            className="w-full h-full object-cover"
            src="/new-location.png"
            width={600}
            height={300}
            alt="Stewart Boots new location"
          />
        </figure>
      </article>

      <section
        className="w-full flex flex-col items-center justify-between gap-5"
      >
        <header className="flex flex-col items-center">
          <h6 className="font-roboto text-xs">OUR SERVICE</h6>
          <h2 className="text-xl md:text-3xl font-extrabold">Why choose Stewart Boot?</h2>
        </header>
        <main className="w-full flex flex-col md:flex-row justify-between pt-4">
          <ul className="flex flex-col md:flex-row justify-between w-full gap-4 pl-5">
            <li>
              <HomePageArticle
                title="The perfect fit"
                content="We ensure your comfort by custom-fitting the boot to your foot, measuring and adapting it so you experience results from the very first step."
                Icon={PencilRuler}
              />
            </li>
            <li className="self-end">
              <HomePageArticle
                title="Foot Problems"
                content={<>We offer solutions for 15 of the most common foot problems, including <strong>bunions</strong>, <strong>hammertoes</strong>, and <strong>heel spurs</strong>.</>}
                Icon={Footprints}
              />

            </li>
            <li>
              <HomePageArticle
                title="Maturity"
                content="With over 50 years of experience, we specialize in treating these foot problems and delivering thoughtfully designed solutions that prioritize comfort and performance."
                Icon={Handshake}
              />

            </li>
          </ul>
          <figure>
            <Image
              className="w-full h-full object-cover"
              src="/boot-rope.png"
              width={1000}
              height={700}
              alt="Boot with a rope"
            />
            <figcaption className="text-xs float-end">
              Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
            </figcaption>
          </figure>
        </main>
        <footer>
          <Link href="/" className="text-sm underline">Discover more foot conditions we treat</Link>
        </footer>
      </section>

      <hr className="border-backgroundSecondary mx-8" />

      <section className="flex flex-col items-center gap-10 px-6">
        <header className="flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-3xl font-extrabold">Testimonials</h2>
          <p className="text-center">See how we&apos;ve made a difference for our customers. Their experiences speak to the care, comfort, and quality we deliver every day.</p>
        </header>

        <main className="mt-6">
          <ul className="flex flex-col md:flex-row gap-6">

            <li>
              <Testimonial
                name="Customer name"
                date="1980"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </li>
            <li>
              <Testimonial
                name="Customer name"
                date="1980"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </li>
            <li>
              <Testimonial
                name="Customer name"
                date="1980"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </li>
          </ul>
        </main>
      </section>
    </div>
  );
}
