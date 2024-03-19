import Image from "next/image";
import SmilingGirlImage from "@/../public/girl-smiling.webp";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/container";
import { BlinkButton } from "@/components/blink-button";

export const Offering = () => {
  return (
    <div className="relative bg-[#D2D2D2] py-20 overflow-hidden">
      <Container className="relative flex flex-col max-w-screen-xl lg:flex-row items-center gap-8 z-10">
        <Image src={SmilingGirlImage} alt="image" width={300} height={350} />
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-bold text-blue_dark text-center">
            Open your options with online offerings at Fundomia University
          </h2>
          <Separator className="my-10" />
          <div className="flex flex-col xs:flex-row gap-8">
            <Statistic
              label="more than"
              amount="94%"
              description="of our alumni are satisfied with the quality of their AU education  "
            />
            <Statistic
              label="more than"
              amount="92%"
              description="of AU alumni say they are in a job related to their field of study "
            />
            <Statistic
              label="over"
              amount="50k"
              description="50,000 program and course alumni from over 100 countries.  "
            />
          </div>
          <BlinkButton
            className="mt-10"
            href="#"
            label="What makes AU unique?"
          />
        </div>
      </Container>
      <span className="bg-white w-[800px] top-[35%] lg:top-[75%] -left-12 -rotate-45 origin-left h-[100px] absolute blur-xl" />
      <span className="bg-white w-[800px] left-1/2 -rotate-45 h-[100px] absolute blur-xl" />
      <span className="bg-white w-[1500px] -left-[60%] lg:-left-[20%] -rotate-45 h-[100px] absolute blur-xl" />
    </div>
  );
};

const Statistic = ({
  label,
  amount,
  description,
}: {
  label: string;
  amount: string;
  description: string;
}) => {
  return (
    <div>
      <p className="text-sm font-bold text-orange">{label}</p>
      <h2 className="font-extrabold text-blue_dark text-5xl">{amount}</h2>
      <p className="text-text_light mt-4">{description}</p>
    </div>
  );
};
