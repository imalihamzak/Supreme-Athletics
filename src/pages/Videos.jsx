import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPlay, FaVideo, FaTimes } from "react-icons/fa";

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoThumbnails, setVideoThumbnails] = useState({});
  const videoRefs = useRef({});

  // Video files - using relative paths from public or assets
  // Original 13 videos - removing videos #5 and #13 as requested
  const videos = [
    {
      id: 1,
      title: "Training Session 1",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.56.mp4",
    },
    {
      id: 2,
      title: "Training Session 2",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.57.mp4",
    },
    {
      id: 3,
      title: "Training Session 3",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.57 (1).mp4",
    },
    {
      id: 4,
      title: "Training Session 4",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.58.mp4",
    },
    // Video #5 removed: WhatsApp Video 2026-01-03 at 11.35.58 (1).mp4
    {
      id: 6,
      title: "Training Session 6",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.58 (2).mp4",
    },
    {
      id: 7,
      title: "Training Session 7",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.35.59.mp4",
    },
    {
      id: 8,
      title: "Training Session 8",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.36.00.mp4",
    },
    {
      id: 9,
      title: "Training Session 9",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.36.00 (1).mp4",
    },
    {
      id: 10,
      title: "Training Session 10",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.36.01.mp4",
    },
    {
      id: 11,
      title: "Training Session 11",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.36.01 (1).mp4",
    },
    {
      id: 12,
      title: "Training Session 12",
      src: "/videos/WhatsApp Video 2026-01-03 at 11.36.02.mp4",
    },
    // Video #13 removed: WhatsApp Video 2026-01-03 at 11.36.02 (2).mp4
  ];

  // Generate thumbnails from video first frames
  useEffect(() => {
    videos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video.src;
      videoElement.crossOrigin = "anonymous";
      videoElement.currentTime = 0.1; // Get frame at 0.1 seconds
      
      videoElement.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        
        const thumbnailUrl = canvas.toDataURL("image/jpeg");
        setVideoThumbnails((prev) => ({
          ...prev,
          [video.id]: thumbnailUrl,
        }));
      });
      
      videoElement.load();
      videoRefs.current[video.id] = videoElement;
    });

    return () => {
      Object.values(videoRefs.current).forEach((videoEl) => {
        if (videoEl) {
          videoEl.src = "";
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 pt-6 pb-12">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-500 mb-4"
            >
              <FaVideo className="text-orange-500" size={12} />
              Training Videos
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4"
            >
              Watch Our <span className="text-orange-500">Training</span> Videos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Get inspired by our training sessions. Watch our expert coaches in action and see the results our members achieve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="relative py-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-video bg-neutral-800 overflow-hidden">
                  {selectedVideo === video.id ? (
                    <>
                      <video
                        src={video.src}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setSelectedVideo(null)}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-all duration-200 z-10"
                        aria-label="Close video"
                      >
                        <FaTimes size={14} />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                        {videoThumbnails[video.id] ? (
                          <img
                            src={videoThumbnails[video.id]}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={video.src}
                            className="w-full h-full object-cover"
                            preload="metadata"
                            muted
                            onLoadedMetadata={(e) => {
                              const videoEl = e.target;
                              videoEl.currentTime = 0.1;
                              setTimeout(() => {
                                const canvas = document.createElement("canvas");
                                canvas.width = videoEl.videoWidth;
                                canvas.height = videoEl.videoHeight;
                                const ctx = canvas.getContext("2d");
                                ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
                                const thumbnailUrl = canvas.toDataURL("image/jpeg");
                                setVideoThumbnails((prev) => ({
                                  ...prev,
                                  [video.id]: thumbnailUrl,
                                }));
                              }, 100);
                            }}
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                      <button
                        onClick={() => setSelectedVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
                      >
                        <div className="w-20 h-20 rounded-full bg-orange-500/90 backdrop-blur-sm flex items-center justify-center group-hover/play:bg-orange-500 group-hover/play:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/50">
                          <FaPlay className="text-white ml-1" size={24} />
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-white/60 text-sm">Training Session</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Videos;

