import ROASLogo from '@/app/ui/acme-logo';
import ROASLogo1 from '@/app/ui/roaslogo';
import { ArrowRightIcon,EnvelopeIcon, PhoneIcon,GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { CardWithForm } from './ui/calcul-form';
import Image from 'next/image';
import { CardSpotlight } from "@/components/ui/card-spotlight";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Logo */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#312C58] p-4 md:h-52">
        <ROASLogo />
      </div>
      {/*Welcome*/}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>Welcome to ROAS Master,</strong> your online tool dedicated to optimizing advertising performance with{' '}
            <a href="https://en.m.wikipedia.org/wiki/Roas" className=" text-[#5B559B] hover:text-blue-500">
              Return On Advertising Spend.
            </a>
            Our goal is to provide you with an intuitive dashboard so you can maximize the effectiveness of your advertising spend
          </p>
          <Link
            href="#roas-form" 
            scroll={true}
            className="flex items-center gap-5 self-start rounded-lg bg-[#312C58] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Calculate ROAS</span> <ArrowRightIcon className="w-3 md:w-4" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-3 md:w-3/5 md:px-10 md:py-12">
          <Image
          src="/Roas.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
          />
           <Image
          src="/Roas2.png"
          width={500}
          height={600}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      {/*Presentation*/}
      <div className="flex grow flex-col gap-4 md:flex-row justify-center items-center p-5 mt-10">
        <div className="grid grid-flow-col grid-rows-2">
          <div className="grid grid-flow-row grid-cols-2">
              <div>
                <p className="font-bold text-xl text-[#5B559B]">What is ROAS ?</p>
                <p className="text-md mt-4"> 
                  <strong>ROAS</strong> stands for <i>Return on Advertising Spend. </i>
                  <br />As its full name suggests, it is an important metric in digital marketing that measures advertising investment. 
                  It is a marketing performance measurement tool that helps assess the profitability of advertising campaigns, compare the performance of different campaigns, and optimize advertising budgets by focusing on the most profitable initiatives. 
                  <br />The goal is to increase the relevance of the advertising campaign because the more relevant the ad, the more revenue it generates.
                </p>
              </div>
              <div>
                <Image 
                    src="/Illustration1.png"
                    alt='ROAS Definition illustration'
                    width={800}
                    height={400}
                />
              </div>
          </div>
          <div className="grid grid-flow-row grid-cols-2 mt-8">
              <div>
                <Image 
                  src="/Illustration2.png"
                  alt='ROAS Definition illustration'
                  width={800}
                  height={400}
                />
              </div>
              <div>
                <p className="font-bold text-xl text-[#5B559B]">How does it work ?</p>
                <p className="mt-4">
                  ROAS works by measuring the revenue generated for every dollar spent on advertising. 
                  <br />It helps marketers understand the effectiveness of their advertising efforts. 
                  <br />The formula to calculate ROAS is:
                </p>
                <div className="text-center mt-4">
                  <strong>ROAS = Revenue from ads / Cost of ads</strong>
                </div>
                <p className="mt-4">
                  For example, if you spend $100 on ads and generate $500 in revenue, your ROAS would be 5, meaning you earned $5 for every dollar spent.
                  ROAS provides valuable insights into which campaigns or strategies are delivering the best return, allowing marketers to allocate their budget more effectively. 
                  <br />A higher ROAS indicates that the advertising spend is yielding more revenue, while a lower ROAS may suggest the need for optimization or reconsideration of the campaign.
                </p>
              </div>
          </div>
        </div>
      </div>
      {/*SMART*/}
      <div className="flex grow flex-col gap-4 md:flex-row  justify-center items-center mt-10">
        <section className="text-center">
          <h2  className="font-bold text-xl text-[#5B559B]"> Roas and the SMART Method </h2>
          <p className="text-md  text-center mt-4">
            The SMART method and ROAS complement each other to optimize advertising campaigns. 
          </p>
          {/* Grid layout for SMART columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center mt-4">
            
            {/* S */}
            <CardSpotlight className="hover:font-bold">
              <div>
                <h3 className="text-3xl font-bold text-[#312C58] text-center">Specific</h3>
                <div className="h-32 w-32 mx-auto mb-4 flex justify-center items-center">
                  
                    <Image
                      src="/Specific.png"
                      alt='Specific'
                      width={100}
                      height={100}
                    />
                  
                </div>
                <p>
                  The goal must be precise. For example, Increase the ROAS of the advertising campaign for product X.
                </p>
              </div>
            </CardSpotlight>
            {/* M */}
            <CardSpotlight className="hover:font-bold">
              <div>
                <h3 className="text-3xl font-bold text-[#312C58] text-center">Measurable</h3>
                <div className="h-32 w-32 mx-auto mb-4 flex justify-center items-center">
                    <Image
                      src="/Measurable.png"
                      alt='Specific'
                      width={100}
                      height={100}
                    />
                </div>
                <p>
                  The goal must be quantifiable. Here, ROAS is measured to track how it evolves after optimization.
                </p>
              </div>
            </CardSpotlight>
            {/* A */}
            <CardSpotlight className="hover:font-bold">
            <div>
              <h3 className="text-3xl font-bold text-[#312C58] text-center">Achievable</h3>
              <div className="h-32 w-32 mx-auto mb-4 flex justify-center items-center">
                  <Image
                    src="/Achievable.png"
                    alt='Specific'
                    width={100}
                    height={100}
                  />
              </div>
              <p>
                The goal must be realistic. It is important to set reasonable expectations based on the current ROAS situation.
              </p>
            </div>
            </CardSpotlight >
            {/* R */}
            <CardSpotlight className="hover:font-bold">
            <div>
              <h3 className="text-3xl font-bold text-[#312C58] text-center">Relevant</h3>
              <div className="h-32 w-32 mx-auto mb-4 flex justify-center items-center">
                  <Image
                    src="/Relevant.png"
                    alt='Specific'
                    width={100}
                    height={100}
                  />
              </div>
              <p>
                The goal should align with the company s overall objectives. 
                For instance, a ROAS target should fit the broader strategy of maximizing sales while maintaining a good advertising return on investment.
              </p>
            </div>
            </CardSpotlight>
            {/* T */}
            <CardSpotlight className="hover:font-bold">
            <div>
              <h3 className="text-3xl font-bold text-[#312C58] text-center">Time-bound</h3>
              <div className="h-32 w-32 mx-auto mb-4 flex justify-center items-center">
                  <Image
                    src="/TimeRelated.png"
                    alt='Specific'
                    width={100}
                    height={100}
                  />
              </div>
              <p>
                The goal must have a specific deadline. For example, Increase the ROAS by 20% by the end of the quarter.
              </p>
            </div>
            </CardSpotlight>
          </div>
        </section>
      </div>
      {/*Formulaire*/}
      <div className="mt-10 flex grow flex-col gap-4 md:flex-row  justify-center items-center p-5 bg-[#312C58]">
        <div className="md:grid grid-flow-row grid-cols-2">
          <div className="md:w-3/4">
            <p className=" text-xl md:text-2xl font-bold text-white justify-start">ROAS Calculating</p>
            <p className="text-md text-white mt-4">Put your trust on ROAS Master a performant tools, totally free and reliable.</p>
          </div>
          <div className="md:w-[-3/4]">
            <CardWithForm/>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-10 flex grow flex-col gap-4 md:flex-row justify-center items-center p-2">
        <div className="md:grid grid-flow-row grid-cols-3 gap-6 mb-5">
            <div className="flex h-20 shrink-0 items-center rounded-lg p-2 mr-10">
              <Link href="#">
                <ROASLogo1 />
              </Link>
            </div>
            <div className="">
              <p className="font-bold text-lg mb-2 text-[#312C58]">Contact</p>
              <p>roasmastermdg@gmail.com</p>
              <p>+261 34 00 000 00</p>
              <p>Lot XX, Blablabla City</p>
              <p>Antananarivo, 101</p>
            </div>
            <div className="ml-10">
              <p className="font-bold text-lg text-[#312C58] mb-4">Follow us</p>
              <div className="grid grid-flow-row grid-cols-3 gap-3">
                <div>
                  <Link href="#">
                    <EnvelopeIcon className="w-6 md:w-8 hover:text-blue-500" />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <GlobeAltIcon className="w-6 md:w-8 hover:text-blue-500" />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <PhoneIcon className="w-6 md:w-8 hover:text-blue-500" />
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="items-end text-center text-sm">copyright © 2024, Fanilo Rabemanantsoa. All rights reserved</div>
    </main>
  );
}
