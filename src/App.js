import "./App.css";
import Images from "./images/LOGO.svg";
import Images1 from "./images/akar-icons_arrow-right.svg";
import Images2 from "./images/Aboutimg 1.png";
import Image3 from "./images/Group (1).png";
import Image4 from "./images/rissks 1.png";
import Image5 from "./images/Rectangle.png";
import Image6 from "./images/Vector (3).png";
import Image7 from "./images/Group (2).png";
import Image8 from "./images/Group (3).png";

function App() {
  return (
    <main>
      <section className="section1">
        <div className="header1">
          <img src={Images} fil alt="yhyhh" />
          <button className="button1">GO</button>
        </div>
        <div className="body1">
          <div className="body11">
            <span className="paragraph">
              <p>World's first intuitive way to grow & Manage Funds</p>
            </span>
          </div>
          <div className="body12">
            <p>
              Growing wealth or savings is as important as <br /> having a job
              even if you have just one dollar aNames savings.
            </p>
          </div>
          <div className="body13">
            <button className="button2">
              GO
              <img src={Images1} alt="fgdhdh"></img>
            </button>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section21">
          <img src={Images2} alt="George Kimani"></img>
        </div>
        <div className="section22">
          <div className="part1">
            <p className="p1">
              <span className="minitrade">MiniTrade</span> is the ‘Web3 Amazon’
              for growing your wealth.
            </p>
          </div>
          <div className="part2">
            <p>
              Never miss savings opportunities, staking and even high-performing
              new crypto listings
            </p>
          </div>

          <div className="part3">
            <p>
              MiniTrade aggregates the best performing assets globally including
              crypto, stocks, managed portfolios, private companies (startups),
              new listings, bonds, staking & savings, and even predictions
              (gaming, betting & etc)
            </p>
          </div>
          <div className="part4">
            <button className="button3">Learn More</button>
          </div>
        </div>
      </section>
      <section className="section3">
        <p>
          MiniTrade is the ‘Web3 Amazon’ for growing your wealth. Never miss
          savings opportunities, staking and even high-performing new crypto
          listings. Web 3 aggregator of the best performing assets globally
          including crypto, stocks, managed portfolios, private companies
          (startups), new listings, bonds, staking & savings, and even
          predictions (gaming, betting & etc) ALL IN ONE WEB3 APP. Grow your
          wealth , even if it is as low as USD 1 dollar Expert team of 18
          research analysts full-time selecting the best opportunities. You
          decide your risk threshold and filter money-growing assets that fit
          your style. Kinda like, set-it and forget-it. Grow your wealth while
          you sleep with alerts that keep you ahead and on top of your money
          What’s in it for MiniTrade? We earn performance fees of 8.0% on
          profits made within the platform. What do you need? Web3 Crypto wallet
          (MetaMask, TrustWallet) topped-up with assets including: USDC, USDT,
          ETH or BNB Invest as little as USD 1 Dollar (we are radically serious
          about inclusiveness and democratization and all humanity should have
          equal opportunities to grow their wealth.
        </p>
      </section>
      <section className="section4">
        <div className="s4body1">
          <div className="s4b1start">
            <img src={Image3} alt="see me "></img>
          </div>
          <div className="s4b1end">
            <h1 span className="heading">Getting Started</h1>
            <p className="p4">
              Select Go to start using mini trade ,and make passive income with
              our preselected automated trading bots and other investment
              platforms aggregated to one place for your convenience. Grow your
              savings on mini trade with our curated savings options and rest
              assured that your assets will grow on minitrade.
            </p>
          </div>
        </div>
        <div className="s4body2">
          <div className="s4b2start">
            <h1 className="heading2">Risk Selection</h1>
            <p>
              Select your investment pln according to your risk appetite. We
              provide you with three models to invest in. You can use one or
              many. Trade however you wish.
            </p>
          </div>
          <div className="s4b2end">
            <img src={Image4} alt="see me "></img>
          </div>
        </div>
        <div className="s4body3">
          <div className="s4b3start">
            {" "}
            <img src={Image5} alt="see me "></img>
          </div>
          <div className="s4b3end">
            <h1>Selecting Timespan</h1>
            <p>
              The risk model automatically selects a time span for you but you
              can extend the time as you wish within the investment plan that
              you chose.
            </p>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="s51">
          <div className="s51start">
            <h1>Select Trading Mode</h1>
            <p>
              You want to trade by yourself like a pro? Go ahead. You want to
              copy the pros as they trade? We got you. You can Do It Yourself,
              useAutomated trading or choose from a pool of investment
              portfolios.
            </p>
          </div>
          <div className="s51end">
            <img src={Image6} alt="I love you"></img>
          </div>
        </div>
        <div className="s52">
          <div className="s52start">
            <img src={Image7} alt="I love you"></img>
          </div>
          <div className="s52end">
            <h1>Connect Your Wallet</h1>
            <p>
              After selecting your risk module and trading mode, you can go
              ahead and connect your wallet.
            </p>
          </div>
        </div>
        <div className="s53">
          <div className="s53start">
            <h1>Monitor Trade Progress & Withdraw funds</h1>
            <p>
              Watch the growth steps that your investment grow by each day
              through a nice simple animated graph that's easy to understand and
              interpret . Mini trade allows you to make more than one investment
              and you can easily switch between monitoring the different
              investments
            </p>
          </div>
          <div className="s53end">
            <img src={Image8} alt="I love you"></img>
          </div>
        </div>
        <div className="footer"></div>
      </section>
    </main>
  );
}

export default App;
