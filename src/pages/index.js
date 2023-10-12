import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import style_guides from "@/styles/Guides.module.css";
import style_join from "@/styles/Join.module.css";
import style_features from "@/styles/Features.module.css";
import style_baner from "@/styles/Baner.module.css";
import footer_styles from "@/styles/Footer.module.css";
import slider_styles from "@/styles/Slides.module.css";
import Head from "@/components/Head/Head";
import Button from "@/components/Button/Button";
import AvatarStack from "@/components/AvatarStack/AvatarStack";
import detectMob from "@/utils/detectMob";
import {useEffect, useState} from "react";
import Coin from "@/components/Coin/Coin";
import scrollToBlock from "@/utils/scrollToBlock";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from 'swiper/modules';
import "swiper/css";
import {
    _
} from "@/i18n";
import 'swiper/css/effect-fade';

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(detectMob());
    }, []);

    const playVideo = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.play();
        }
    }
    const [isDarkTheme, setIsDarkTheme] = useState();
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const [language, setLanguage] = useState('en');

    const slideTo = (index) => swiper.slideTo(index);

    useEffect(() => {
        if (!localStorage.getItem('CryptoBotTheme')) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkTheme(true)
                localStorage.setItem('CryptoBotTheme', JSON.stringify(true))
            } else {
                setIsDarkTheme(false)
                localStorage.setItem('CryptoBotTheme', JSON.stringify(false))
            }
        } else {
            setIsDarkTheme(JSON.parse(localStorage.getItem('CryptoBotTheme')));
        }
    }, []);

    const setTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem('CryptoBotTheme', JSON.stringify(!isDarkTheme))
    }
    if (isDarkTheme === undefined) return
    return (
        <div className={`${isDarkTheme ? 'darkTheme' : 'lightTheme'} ${'container'}`}>
            <Head/>
            <header>
                <div className={`${styles.header} ${inter.className}`}>
                    <div className={styles.header__logo}>
                        <img src="/logo.jpeg" alt="logo"/>
                    </div>

                    <nav className={styles.header__nav}>
                        <a href="#" onClick={() => scrollToBlock("features")}>{_(language, "use-cases")}</a>
                        <a href="#" onClick={() => scrollToBlock("features")}>{_(language, "features")}</a>
                        <a href="#" onClick={() => scrollToBlock("start")}>{_(language, "how-to-start")}</a>
                    </nav>

                    <div className={styles.header__button__block}>
                        <img src={isDarkTheme ? '/theme/dark.svg' : '/theme/light.svg'} alt="theme"
                             onClick={() => setTheme()}/>
                        <button className={styles.header__button}>{_(language, "get-started")}</button>
                    </div>
                </div>
            </header>

            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.main__container}>
                    <div className={styles.left__container}>
                        <div className={styles.left__container__title}>
                            {_(language, "crypto-payments-for")} <span>{_(language, "telegram-bots")}</span>
                        </div>

                        <div className={styles.left__container__description}>
                            {_(language, "seamlessly-accept-crypto")}
                        </div>

                        <Button
                            style={{
                                marginBottom: isMobile ? "24px" : "56px",
                            }}
                        >
                            {_(language, "get-started")}
                        </Button>
                        <AvatarStack
                            images={[
                                {
                                    src: "/main/avatar1.jpeg",
                                    link: "https://t.me",
                                },
                                {
                                    src: "/main/avatar2.jpeg",
                                    link: "https://t.me",
                                },
                                {
                                    src: "/main/avatar3.jpeg",
                                    link: "https://t.me",
                                },
                                {
                                    src: "/main/avatar4.jpeg",
                                    link: "https://t.me",
                                },
                                {
                                    src: "/main/avatar5.jpeg",
                                    link: "https://t.me",
                                },
                            ]}
                        />
                        <div className={styles.left__container__avatars__description}>
                            {_(language, "popular-bots")}
                        </div>
                    </div>

                    <div className={styles.right__container}>
                        <img src={isDarkTheme ? "/main/mockup-dark.png" : "/main/mockup.png"} alt="main"/>
                    </div>
                </div>
            </main>

            <section id="slides" className={`${slider_styles.section__instant} ${inter.className}`}>

                <div className={`${slider_styles.container}`}>
                    <Swiper className="mySwiper" onSwiper={setSwiper} onSlideChange={(e) => {
                        setSwiperIndex(e.activeIndex)
                    }}
                    >
                        <SwiperSlide>
                            <div className={`${slider_styles.wrapper__instant}`}>

                                <div className={`${slider_styles.instant__block}`}>
                                    <img src="slides/1.svg" alt=""/>
                                </div>

                                <div className={`${slider_styles.instant__info}`}>
                                    <div className={`${slider_styles.instant__title}`}>
                                        <h1>{_(language, "instant-auto-sales")}</h1>
                                        <p>{_(language, "boost-conversion")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__subtitle}`}>
                                        <p>{_(language, "deliver-digital-products")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__btn}`}>
                                        <a href="#">{_(language, "open-api-docs")}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${slider_styles.wrapper__instant}`}>

                                <div className={`${slider_styles.instant__block} ${slider_styles.background1}`}>
                                    <img src="slides/2.svg" alt=""/>
                                </div>

                                <div className={`${slider_styles.instant__info}`}>
                                    <div className={`${slider_styles.instant__title}`}>
                                        <h1>{_(language, "channels-integration")}</h1>
                                        <p>{_(language, "seamless-access")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__subtitle}`}>
                                        <p>{_(language, "auto-unlock")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__btn}`}>
                                        <a href="#">{_(language, "open-api-docs")}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${slider_styles.wrapper__instant}`}>

                                <div className={`${slider_styles.instant__block} ${slider_styles.background2}`}>
                                    <img src="slides/3.svg" alt=""/>
                                </div>

                                <div className={`${slider_styles.instant__info}`}>
                                    <div className={`${slider_styles.instant__title}`}>
                                        <h1>{_(language, "endless-customization")}</h1>
                                        <p>{_(language, "with-webhooks")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__subtitle}`}>
                                        <p>{_(language, "receive-payment-notify")}</p>
                                    </div>

                                    <div className={`${slider_styles.instant__btn}`}>
                                        <a href="#">{_(language, "open-api-docs")}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    <div className={`${slider_styles.slider}`}>
                        <span className={`${slider_styles.count}`}>01</span>
                        <div onClick={() => slideTo(0)}
                             className={swiperIndex == 0 ? `${slider_styles.slider__line__active}` : `${slider_styles.slider__line}`}></div>
                        <div onClick={() => slideTo(1)}
                             className={swiperIndex == 1 ? `${slider_styles.slider__line__active}` : `${slider_styles.slider__line}`}></div>
                        <div onClick={() => slideTo(2)}
                             className={swiperIndex == 2 ? `${slider_styles.slider__line__active}` : `${slider_styles.slider__line}`}></div>
                        <span className={`${slider_styles.count}`}>03</span>
                    </div>
                </div>
            </section>

            <section id="features" className={`${style_features.features} ${inter.className}`}>
                <div className={`${style_features.features__card1}`}>
                    <div className={style_features.features__coins__image}>
                        <img src={"/features/img_currency.png"} alt="coins"/>
                    </div>
                    <div className={`${style_features.features__card1__title}`}>
                        {_(language, "accept-wide-range")}
                    </div>

                    <div className={`${style_features.features__card1__description}`}>
                        {_(language, "bill-any-1")} <b>{_(language, "bill-any-2")}</b> {_(language, "bill-any-3")}{" "}
                        <span>{_(language, "bill-any-4")}</span> {_(language, "bill-any-5")}
                    </div>

                    <div className={`${style_features.features__card1__assets}`}>
                        <Coin>ETH</Coin>
                        <Coin>USDT</Coin>
                        <Coin>TON</Coin>
                        <Coin>BTC</Coin>
                        <Coin>TRX</Coin>
                        <Coin>LTC</Coin>
                        <Coin>USDC</Coin>
                        <Coin>BNB</Coin>
                    </div>
                </div>
                <div className={style_features.blocks__container}>
                    <div className={style_features.blocks__container__minor}>
                        <div className={style_features.blocks__container__minor__block}>
                            <div className={style_features.blocks__container__minor__video__container}
                                 onMouseEnter={(e) => playVideo(e)}>
                                <video
                                    src={isDarkTheme ? "/features/dark/one-click.mp4" : "/features/light/one-click.mp4"}/>
                            </div>
                            <div className={style_features.blocks__container__minor__text__container}>
                                <div
                                    className={style_features.blocks__container__minor__text__title}>{_(language, "one-click-to-start")}
                                </div>
                                <p className={style_features.blocks__container__minor__text__descriprion}>{_(language, "open-cryptobot-1")}
                                    <span>{_(language, "open-cryptobot-2")}</span>,
                                    {_(language, "open-cryptobot-3")}
                                    <span>{_(language, "open-cryptobot-4")}</span> {_(language, "open-cryptobot-ы5")}
                                </p>
                            </div>
                        </div>
                        <div className={style_features.blocks__container__minor__block}>
                            <div className={style_features.blocks__container__minor__video__container}
                                 onMouseEnter={(e) => playVideo(e)}>
                                <video
                                    src={isDarkTheme ? "/features/dark/current.mp4" : "/features/light/current.mp4"}/>
                            </div>
                            <div className={style_features.blocks__container__minor__text__container}>
                                <div
                                    className={style_features.blocks__container__minor__text__title}>{_(language, "real-time-exchange-rates")}
                                </div>
                                <p className={style_features.blocks__container__minor__text__descriprion}>{_(language, "request-rate-1")}
                                    <span>{_(language, "request-rate-2")}</span> {_(language, "request-rate-3")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style_features.blocks__container__main__block}>
                        <div className={style_features.blocks__container__main__video__conatiner}
                             onMouseEnter={(e) => playVideo(e)}>
                            <video src={isDarkTheme ? "/features/dark/stats.mp4" : "/features/light/stats.mp4"}/>
                        </div>
                        <div className={style_features.blocks__container__minor__text__container}>
                            <div
                                className={style_features.blocks__container__minor__text__title}>{_(language, "payment-stat")}
                            </div>
                            <p className={style_features.blocks__container__minor__text__descriprion}>{_(language, "stat-open-cryptobot-1")}
                                <span>{_(language, "stat-open-cryptobot-2")}</span>, {_(language, "stat-open-cryptobot-3")}
                                <span>{_(language, "stat-open-cryptobot-4")}</span> {_(language, "stat-open-cryptobot-5")}
                                <span>{_(language, "stat-open-cryptobot-6")}</span> {_(language, "stat-open-cryptobot-7")}
                            </p>
                        </div>
                    </div>
                </div>


                <div className={style_features.blocks__bottom}>
                    <div className={style_features.blocks__bottom__main}>
                        <div className={style_features.blocks__bottom__main__video} onMouseEnter={(e) => playVideo(e)}>
                            <video src={isDarkTheme ? "/features/dark/send.mp4" : "/features/light/send.mp4"}/>
                        </div>
                        <div className={style_features.blocks__bottom__main__text}>
                            <div
                                className={style_features.blocks__container__minor__text__title}>{_(language, "send-coins-to")}</div>
                            <div className={style_features.blocks__container__minor__text__descriprion}>
                                {_(language, "automate-payouts-1")}
                                <span>{_(language, "automate-payouts-2")}</span> {_(language, "automate-payouts-3")}

                            </div>
                        </div>
                    </div>
                    <div className={style_features.blocks__bottom__minor}>
                        <div className={style_features.blocks__bottom__minor__video} onMouseEnter={(e) => playVideo(e)}>
                            <video src={isDarkTheme ? "/features/dark/payments.mp4" : "/features/light/payments.mp4"}/>
                        </div>
                        <div className={style_features.blocks__bottom__main__text}>
                            <div
                                className={style_features.blocks__container__minor__text__title}>{_(language, "anon-payments")}</div>
                            <div className={style_features.blocks__container__minor__text__descriprion}>
                                {_(language, "use-allow-1")}
                                <span>{_(language, "use-allow-2")}</span> {_(language, "use-allow-3")}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="start" className={`${style_guides.guide} ${inter.className}`}>
                <div className={style_guides.guide__header__container}>
                    Quick start using <span>Crypto Pay</span>
                </div>
                <ul className={style_guides.guide__main}>
                    <li className={style_guides.guide__main__item}>
                        <div className={style_guides.guide__main__item__text__container}>
                            <span className={style_guides.guide__main__item__number}>1</span>
                            <div className={style_guides.guide__main__item__container}>
                                <div className={style_guides.guide__main__item__container__title}>Authorizing your app
                                </div>
                                <ol className={style_guides.guide__main__item__container__list}>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        Open <span className={style_guides.guide__b}>@CryptoBot</span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        Go to <span className={style_guides.guide__b}>Crypto Pay</span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        Tap <span className={style_guides.guide__bb}>Create App</span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        Get <span className={style_guides.guide__b}>API Token</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className={style_guides.guide__main__image__container}>
                            <img
                                src="/guide/block1.svg"
                                alt=""
                                width={100}
                                height={100}
                                className={style_guides.guide__main__image}
                            />
                        </div>

                    </li>
                    <li className={style_guides.guide__main__item}>

                        <div className={style_guides.guide__main__image__container}>
                            <img
                                src="/guide/block2.svg"
                                alt=""
                                width={100}
                                height={100}
                                className={style_guides.guide__main__image}
                            />
                        </div>

                        <div className={style_guides.guide__main__item__text__container}>
                            <span className={style_guides.guide__main__item__number}>2</span>
                            <div className={style_guides.guide__main__item__container}>
                                <div className={style_guides.guide__main__item__container__title}>Crypto Pay API
                                    Request
                                </div>
                                <p className={style_guides.guide__main__item__container__description}>Requests are only
                                    served over HTTPS</p>
                                <p className={style_guides.guide__main__item__container__description}>To pass parameters
                                    use:</p>
                                <ul className={style_guides.guide__main__item__container__list__ul}>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>URL query string</span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>application/json </span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>
                                        application/x-www-form-urlencoded
                                        </span>
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>multipart/form-data</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li className={style_guides.guide__main__item}>

                        <div className={style_guides.guide__main__item__text__container}>
                            <span className={style_guides.guide__main__item__number}>3</span>
                            <div className={style_guides.guide__main__item__container}>
                                <div className={style_guides.guide__main__item__container__title}>Getting updates</div>
                                <p className={style_guides.guide__main__item__container__description}>There are two ways
                                    of receiving</p>
                                <p className={style_guides.guide__main__item__container__description}>updates for your
                                    app:</p>
                                <ul className={style_guides.guide__main__item__container__list__ul}>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>getInvoices </span>method to get a list
                                        of created invoices.
                                    </li>
                                    <li className={style_guides.guide__main__item__container__list__item}>
                                        <span className={style_guides.guide__b}>Webhooks </span>to receive updates in
                                        realtime.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={style_guides.guide__main__image__container}>
                            <img
                                src="/guide/block3.svg"
                                alt=""
                                width={100}
                                height={100}
                                className={style_guides.guide__main__image}
                            />
                        </div>

                    </li>
                </ul>
            </section>

            <section className={`${style_baner.baner} ${inter.className}`}>
                <div className={style_baner.baner__container}>
                    <div className={style_baner.baner__container__text}>
                        <div className={style_baner.baner__container__text__title}>Crypto Pay API</div>
                        <p className={style_baner.baner__container__text__description}>Explore available methods and
                            types and integrate them in any programming language.</p>
                        <button className={style_baner.baner__container__text__button}>Open API Docs</button>
                    </div>
                    <div className={style_baner.baner__container__block__1}></div>
                    <div className={style_baner.baner__container__block__2}></div>
                </div>
            </section>

            <section className={`${style_join.join} ${inter.className}`}>
                <div className={style_join.wrapper__join__dev}>
                    <div className={style_join.section__join__dev__title}>Join dev community</div>

                    <div className={style_join.section__join__dev__subtitle}>
                        Connect with bot developers and explore the possibilities our crypto
                        payments service unlocks.
                    </div>

                    <nav className={style_join.nav__join__dev__items}>
                        <div className={style_join.nav__join__dev__item}>
                            <img src="/join/js-lib.png" alt="crypto-pay-api"/>
                            <a href="#">crypto-pay-api</a>
                        </div>
                        <div className={style_join.nav__join__dev__item}>
                            <img src="/join/net-lib.png" alt="CryptoPay"/>
                            <a href="#">CryptoPay</a>
                        </div>
                        <div className={style_join.nav__join__dev__item}>
                            <img src="/join/php-lib.png" alt="crypto-pay-api"/>
                            <a href="#">crypto-pay-api</a>
                        </div>
                        <div className={style_join.nav__join__dev__item}>
                            <img src="/join/python-lib.png" alt="aiocryptopay"/>
                            <a href="#">aiocryptopay</a>
                        </div>
                        <div className={style_join.nav__join__dev__item}>
                            <img src="/join/go-lib.png" alt="cryptobot-sdk-golang"/>
                            <a href="#">cryptobot-sdk-golang</a>
                        </div>
                    </nav>

                    <div className={style_join.bnt__join__dev}>
                        <a href="#">Open Devs chat</a>
                    </div>
                </div>
            </section>

            <footer className={`${footer_styles.footer} ${inter.className}`}>
                <div className={footer_styles.footer__line}>
                    <div className={footer_styles.footer__line__logo}>
                        <img src="/logo.jpeg" alt=""/>
                    </div>
                    <nav className={footer_styles.footer__line__nav}>
                        <a href="#" onClick={() => scrollToBlock("features")}>Use cases</a>
                        <a href="#" onClick={() => scrollToBlock("features")}>Features</a>
                        <a href="#" onClick={() => scrollToBlock("start")}>How to start</a>
                    </nav>
                    <div className={footer_styles.footer__button}>
                        <a href="www.google.com">Get started</a>
                    </div>
                </div>

                <div className={footer_styles.footer__copyright}>©2023 Crypto Bot</div>
                <select className={footer_styles.footer__line__nav__select} value={language} onChange={(e) => {
                            window.location.href = `/${e.target.value}`
                        }}>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                            <option value="zh">中文</option>
                            <option value="uk">Український</option>
                            <option value="tr">Türkçe</option>
                            <option value="es">Español</option>
                            <option value="pt">Português</option>
                            <option value="de">Deutsch</option>
                            <option value="fr">Français</option>
                            <option value="it">Italiano</option>
                            <option value="ja">日本語</option>
                            <option value="id">Bahasa Indonesia</option>
                            <option value="pl">Polski</option>
                            <option value="nl">Nederlands</option>
                </select>
            </footer>
        </div>
    );
}
