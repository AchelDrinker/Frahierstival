import React, { Component } from "react"
import Head from "next/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
            isMuted: false,
            lang: 'fr'
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.toggleMute = this.toggleMute.bind(this)
        this.setLang = this.setLang.bind(this)
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        // Language detection
        const userLang = navigator.language || navigator.userLanguage; 
        if (!userLang.startsWith('fr')) {
            this.setState({ lang: 'en' });
        }

        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
        document.addEventListener('keydown', this.handleKeyDown)

        const video = this.videoRef.current;
        if (video) {
            video.volume = 0.3;
            video.muted = false;
            video.play().catch(error => {
                // Autoplay with sound failed, fallback to muted
                console.log("Autoplay with sound blocked, falling back to muted");
                video.muted = true;
                video.play();
                this.setState({ isMuted: true });
            });
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown(event) {
        if (event.key === 'Escape' && this.state.isArticleVisible) {
            this.handleCloseArticle()
        }
    }

    toggleMute() {
        const video = this.videoRef.current;
        if (video) {
            video.muted = !video.muted;
            this.setState({ isMuted: video.muted });
        }
    }

    setLang(lang) {
        this.setState({ lang })
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })
        
        if (!this.state.isArticleVisible) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 350)
        }

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`} onClick={(e) => {
                if (this.state.isArticleVisible && !e.target.closest('article')) {
                    this.handleCloseArticle();
                }
            }}>
                <div>
                    <Head>
                        <title>Frahier'stival - 14 & 15 Août 2026</title>
                        <meta name="description" content="Le Frahier’stival est un festival de musique convivial à Frahier (70). Concerts, animations et bonne humeur les 14 et 15 août 2026. Venez vibrer avec nous !" />
                        <meta name="keywords" content="festival, musique, frahier, concert, haute-saone, 2026, aout, evenement, culture, belfort, montbeliard" />
                        <meta name="author" content="Frahier'stival" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        
                        {/* Open Graph / Facebook */}
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Frahier'stival - 14 & 15 Août 2026" />
                        <meta property="og:description" content="Le Frahier’stival est un festival de musique convivial à Frahier (70). Concerts, animations et bonne humeur les 14 et 15 août 2026." />
                        <meta property="og:image" content="/static/images/Frahierstival_feu_artifice.jpg" />

                        {/* Twitter */}
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:title" content="Frahier'stival - 14 & 15 Août 2026" />
                        <meta property="twitter:description" content="Le Frahier’stival est un festival de musique convivial à Frahier (70). Concerts, animations et bonne humeur les 14 et 15 août 2026." />
                        <meta property="twitter:image" content="/static/images/Frahierstival_feu_artifice.jpg" />
                    </Head>

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} lang={this.state.lang} />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                            lang={this.state.lang}
                        />
                        <Footer timeout={this.state.timeout} lang={this.state.lang} />
                    </div>

                    <div className="sound-control" onClick={(e) => { e.stopPropagation(); this.toggleMute(); }}>
                        <FontAwesomeIcon icon={this.state.isMuted ? faVolumeMute : faVolumeUp} />
                    </div>

                    <div id="bg">
                        <video ref={this.videoRef} autoPlay loop playsInline>
                            <source src="/static/video/FRAHIERSTIVAL_720p.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexPage
