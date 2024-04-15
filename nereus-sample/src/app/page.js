import Image from "next/image";
import logo from '../../public/logomark-white.png';
import arrow from '../../public/icon-park-outline_down.png';
import banner from '../../public/Frame 35.png';
import card2text from '../../public/textl1.png';
import star from '../../public/Group 526.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0c0c0c]">
      <div id='hero-page' className="w-full h-screen bg-hero bg-cover relative">
        <div id='navbar' className="w-full h-fit flex flex-row absolute">
          {/* top bar */}
          <Image 
            src={logo}
            width={64}
            className="mt-[16px] ml-[40px] mb-[16px]"
          />
          <div className="ml-auto flex flex-row gap-[88px] items-center mr-[40px]"> 
            <div className="w-fit">Solutions</div>
            <div className="w-fit">FAQ</div>
            <div className="w-fit h-fit px-[24px] py-[10px] border rounded-3xl  ">Get in touch</div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full h-screen'>
          {/* Hero */}
          <div className="mt-auto mb-auto relative">
            <div className="font-helvetica text-[136px] text-wrap text-center w-full -mb-24">UNLOCK YOUR</div>
            <div className="font-helvetica text-[136px] text-wrap text-center w-full -mt-24">FULL POTENTIAL</div>
            <div className="bg-[#5ad5ef] text-black text-[24px] font-sans font-medium text-center w-fit px-8 py-2 rounded-[32px] transition-all duration-300 hover:scale-125 absolute top-4 left-[50%] drop-shadow-2xl">Move.</div>
            <div className="bg-[#5ad5ef] text-black text-[24px] font-sans font-medium text-center w-fit px-8 py-2 rounded-[32px] transition-all duration-300 hover:scale-125 absolute top-[32%] -left-10 drop-shadow-2xl">Mend.</div>
            <div className="bg-[#5ad5ef] text-black text-[24px] font-sans font-medium text-center w-fit px-8 py-2 rounded-[32px] transition-all duration-300 hover:scale-125 absolute bottom-[70px] -right-10 drop-shadow-2xl">Master.</div>
            <div className="w-full text-center font-semibold text-xl">Bringing the pulse of clinical testing</div>
            <div className="w-full text-center font-semibold text-xl">straight to the heart of the action.</div>
          </div>
          <Image 
              src={arrow}
              width={32}
              className="ml-auto mr-auto mb-10"
            />
        </div>
      </div>
      <div className="w-full h-fit bg-[#0c0c0c]">
        {/* banner*/}
        <Image 
          src={banner}
          width={1440}
          height={248}
          className="bg-cover ml-auto mr-auto"
        />
      </div>
      <div className="bg-[#0c0c0c] w-full h-screen px-64 py-24">
        {/* bento */}
        <div className="w-full h-full columns-3 p-2">
          <div className="w-full h-1/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-[#5ad5ef] px-8 text-black relative">
              <div className="font-helvetica absolute bottom-16 text-[48px]">ANALYSE</div>
              <div className="font-semibold absolute bottom-6 text-[16px] text-wrap max-w-[75%]">Real time vitals, performance and limb assessment data.</div>
            </div>
          </div>
          <div className="w-full h-2/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-card1 bg-cover relative">
              <div className="bg-[#5ad5ef] h-[34px] w-[117px] rounded-2xl absolute top-6 right-6 animate-pulse"></div>
            </div>
          </div>
          <div className="w-full h-2/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-card2 bg-cover flex flex-row items-center relative">
              <Image 
                src={card2text}
                width={296}
                className="mb-auto mt-auto ml-auto mr-auto"
              />
              <Image 
                src={star}
                width={92}
                className="absolute top-[138px] right-[70px] animate-spin-slow"
              />
              <div className="border-solid border-4 rounded-3xl border-[#5ad5ef] w-[155px] h-[36px] absolute left-[90px] top-[104px]"></div>
              <div className="border-solid border-4 rounded-3xl border-[#5ad5ef] w-[120px] h-[36px] bg-[#5ad5ef] absolute left-[60px] bottom-[56px]"></div>
            </div>
          </div>
          <div className="w-full h-1/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-[#5ad5ef]">
              <div className="w-full h-full rounded-2xl bg-[#5ad5ef] px-8 text-black relative">
                <div className="font-helvetica absolute right-8 bottom-12 text-[48px]">OPTIMISE</div>
                <div className="font-semibold absolute right-8 bottom-8 text-[16px] text-wrap max-w-[75%]">Training and coaching strategies.</div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-card3 bg-cover relative">
              <div className="bg-[#5ad5ef] rounded-full w-[34px] h-[34px] absolute bottom-6 right-6 animate-big-bounce"></div>
            </div>
          </div>
          <div className="w-full h-1/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-[#5ad5ef]">
              <div className="w-full h-full rounded-2xl bg-[#5ad5ef] px-8 text-black relative">
                <div className="font-helvetica absolute top-4 text-[48px]">OVERCOME</div>
                <div className="font-semibold absolute top-20 text-[16px] text-wrap max-w-[75%]">Injury and performance hurdles</div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 p-2 py-3 transition-all duration-300 hover:scale-105">
            <div className="w-full h-full rounded-2xl bg-card4 bg-cover relative">
            <Image 
                src={star}
                width={52}
                className="absolute bottom-[16px] left-[16px] animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
