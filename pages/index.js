import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const IndexPage = () => {
    const [isArticleVisible, setIsArticleVisible] = useState(false)
    const [timeout, setTimout] = useState(false)
    const [articleTimeout, setArticleTimeout] = useState(false)
    const [article, setArticle] = useState("")
    const [loading, setLoading] = useState("is-loading")
    const [isMuted, setIsMuted] = useState(false)
    const [lang, setLang] = useState('fr')
    const videoRef = useRef(null)
    const timeoutRef = useRef(null)

    const handleOpenArticle = (article) => {
        setIsArticleVisible(!isArticleVisible)
        setArticle(article)
        
        if (!isArticleVisible) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 350)
        }

        setTimeout(() => {
            setTimout(!timeout)
        }, 325)

        setTimeout(() => {
            setArticleTimeout(!articleTimeout)
        }, 350)
    }

    const handleCloseArticle = () => {
        setArticleTimeout(!articleTimeout)

        setTimeout(() => {
            setTimout(!timeout)
        }, 325)

        setTimeout(() => {
            setIsArticleVisible(!isArticleVisible)
            setArticle("")
        }, 350)
    }

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    }

    useEffect(() => {
        // Language detection
        const userLang = navigator.language || navigator.userLanguage; 
        if (userLang && !userLang.startsWith('fr')) {
            setLang('en');
        }

        timeoutRef.current = setTimeout(() => {
            setLoading("")
        }, 100)

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isArticleVisible) {
                handleCloseArticle()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        const video = videoRef.current;
        if (video) {
            video.volume = 0.3;
            video.muted = false;
            // Modern browsers policy requires user interaction for unmuted autoplay
            // We try it, but we catch the error to mute it if blocked
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay with sound blocked, falling back to muted
                    console.log("Autoplay with sound blocked, falling back to muted");
                    video.muted = true;
                    video.play();
                    setIsMuted(true);
                });
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isArticleVisible]) 

    return (
        <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`} onClick={(e) => {
            if (isArticleVisible && !e.target.closest('article')) {
                handleCloseArticle();
            }
        }}>
            <div>
                <Head>
                    <title>Frahier'stival - Festival de Musique 14 & 15 Août 2026</title>
                    <meta name="description" content="Le Frahier’stival : 2 jours de concerts et convivialité à Frahier (70). Musique, animations et bonne humeur les 14 & 15 août 2026." />
                    <meta name="keywords" content="festival, musique, frahier, concert, haute-saone, 2026, aout, evenement, culture, belfort, montbeliard" />
                    <meta name="author" content="Frahier'stival" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="canonical" href="https://www.frahierstival.fr" />
                    <link rel="icon" href="/static/images/Frahierstival_guitare.jpg" />

                    {/* Schema.org Structured Data */}
                    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "Frahier'stival 2026",
                        "startDate": "2026-08-14",
                        "endDate": "2026-08-15",
                        "eventStatus": "https://schema.org/EventScheduled",
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                        "location": {
                            "@type": "Place",
                            "name": "Frahier-et-Chatebier",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Rue du Moulin",
                                "addressLocality": "Frahier-et-Chatebier",
                                "postalCode": "70400",
                                "addressCountry": "FR"
                            }
                        },
                        "image": [
                            "https://www.frahierstival.fr/static/images/Frahierstival_feu_artifice.jpg",
                            "https://www.frahierstival.fr/static/images/Frahierstival_scene.jpg"
                        ],
                        "description": "Le Frahier’stival revient les 14 et 15 août 2026 pour un week-end de musique et de fête villageoise.",
                        "organizer": {
                            "@type": "Organization",
                            "name": "Association Frahier'stival",
                            "url": "https://www.frahierstival.fr"
                        }
                    })}} />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.frahierstival.fr/" />
                    <meta property="og:title" content="Frahier'stival - Festival de Musique 14 & 15 Août 2026" />
                    <meta property="og:description" content="Le Frahier’stival : 2 jours de concerts et convivialité à Frahier (70). Musique, animations et bonne humeur les 14 & 15 août 2026." />
                    <meta property="og:image" content="https://www.frahierstival.fr/static/images/Frahierstival_feu_artifice.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content="Frahier'stival - Festival de Musique 14 & 15 Août 2026" />
                    <meta property="twitter:description" content="Le Frahier’stival : 2 jours de concerts et convivialité à Frahier (70). Musique, animations et bonne humeur les 14 & 15 août 2026." />
                    <meta property="twitter:image" content="https://www.frahierstival.fr/static/images/Frahierstival_feu_artifice.jpg" />
                </Head>

                <div id="wrapper">
                    <Header onOpenArticle={handleOpenArticle} timeout={timeout} lang={lang} />
                    <Main
                        isArticleVisible={isArticleVisible}
                        timeout={timeout}
                        articleTimeout={articleTimeout}
                        article={article}
                        onCloseArticle={handleCloseArticle}
                        lang={lang}
                    />
                    <Footer timeout={timeout} lang={lang} onOpenArticle={handleOpenArticle} />
                </div>

                <div className="sound-control" onClick={(e) => { e.stopPropagation(); toggleMute(); }}>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </div>

                <div id="bg">
                    <video ref={videoRef} autoPlay loop playsInline>
                        <source src="/static/video/FRAHIERSTIVAL_720p.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
