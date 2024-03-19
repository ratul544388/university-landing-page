import { Events } from "./_components/events";
import { Hero } from "./_components/hero";
import { Info } from "./_components/info";
import { MeetingPlace } from "./_components/meeting-place";
import { News } from "./_components/news";
import { Nukshahtowin } from "./_components/nukshahtowin";
import { Offering } from "./_components/offering";
import { Review } from "./_components/review";
import { SelectYourPath } from "./_components/select-your-path";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Info />
      <Offering />
      <SelectYourPath />
      <Review />
      <News />
      <Events />
      <Nukshahtowin />
    </main>
  );
}
