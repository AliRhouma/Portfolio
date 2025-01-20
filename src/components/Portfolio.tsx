import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, SkipBack, SkipForward } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Pack Révision Mathématiques',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360358/AAAAAA_7_ejfj8a.jpg'
    ]
  },
  {
    id: 2,
    title: 'Pack Correction Concours',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360215/Pack_Math_Analyse_MP2_Module_Topologie_30_1_hzht75.jpg'
    ]
  },
  {
    id: 3,
    title: 'Explication Pile et File',
    type: 'video',
    contentType: 'Vidéo Motion',
    thumbnail: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/video/upload/v1737361877/0927_6_dvepzx.mp4'
    ]
  },
  {
    id: 4,
    title: 'Explication Informatique',
    type: 'video',
    contentType: 'Vidéo Motion',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/video/upload/v1737361641/1220_1_rautvk.mp4'
    ]
  },
  {
    id: 5,
    title: 'Parascolaire Informatique',
    type: 'image',
    contentType: 'Documents Educative',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360903/Frame_1000006201_h4m0no.png',
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360999/Frame_1000006202_fkm9cf.png',
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737361062/6_2_b35zwc.png',
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737361036/18_3_wrxv2f.png'
    ]
  },
  {
    id: 6,
    title: 'Informatique Bac Éco',
    type: 'video',
    contentType: 'Vidéo Motion',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/video/upload/v1737213541/ahnmjrdcghcaljvi9bby.mp4'
    ]
  },
  {
    id: 7,
    title: 'Pack Algèbre',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360322/Pack_Math_Analyse_MP2_Module_Topologie_17_jq0tr7.jpg'
    ]
  },
  {
    id: 8,
    title: 'Souhait de Réussite aux Étudiants',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737359994/%D8%A8%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D9%82_12_j2ac7v.jpg'
    ]
  },
  {
    id: 9,
    title: 'Publications Éducatives',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360078/Pack_Math_Analyse_MP2_Module_Topologie_84_rt5z3d.png',
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360111/Pack_Math_Analyse_MP2_Module_Topologie_83_hsndyn.png'
    ]
  },
  {
    id: 10,
    title: 'Offre Séance Individuelle',
    type: 'image',
    contentType: 'Publication Facebook',
    gallery: [
      'https://res.cloudinary.com/dceefnpod/image/upload/v1737360032/%D8%A8%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D9%82_13_bus7qz.jpg'
    ]
  }
];

function CustomVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const skipBackward = () => {
    videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
  };

  const skipForward = () => {
    videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        className="w-full rounded-lg"
        src={src}
        playsInline
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div
          ref={progressRef}
          className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-indigo-600 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            {/* Skip Backward/Forward */}
            <button
              onClick={skipBackward}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={skipForward}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Time */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Volume */}
            <button
              onClick={toggleMute}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Maximize2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600/90 text-white p-4 rounded-full hover:bg-indigo-700 transition-colors"
        >
          <Play className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
        setSelectedMedia(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 100}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const isCloudinaryVideo = (url) => url.includes('cloudinary.com') && url.endsWith('.mp4');
  const isVimeoVideo = (url) => url.includes('player.vimeo.com');

  const renderMedia = (project, media) => {
    if (project.type === 'video') {
      if (isCloudinaryVideo(media)) {
        return <CustomVideoPlayer src={media} />;
      } else if (isVimeoVideo(media)) {
        return (
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src={`${media}?autoplay=1&title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
    }
    return (
      <img
        src={media}
        alt={project.title}
        className="w-full rounded-lg"
      />
    );
  };

  const renderThumbnail = (project, media, index) => {
    if (project.type === 'video') {
      return (
        <div className="relative rounded-lg overflow-hidden aspect-square">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          <img
            src={project.thumbnail}
            alt={`${project.title} - Video ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return (
      <img
        src={media}
        alt={`${project.title} - Image ${index + 1}`}
        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
      />
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-title">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item opacity-0 transform translate-y-8 transition-all duration-500 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setSelectedMedia(project.gallery[0]);
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                <div className="relative overflow-hidden aspect-square">
                  {project.type === 'video' ? (
                    <>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 transition-colors group-hover:bg-black/50">
                        <Play className="w-16 h-16 text-white transform transition-transform group-hover:scale-110" />
                      </div>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </>
                  ) : (
                    <img
                      src={project.gallery[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full mb-2 inline-block">
                    {project.contentType}
                  </span>
                  <h3 className="text-lg font-medium mt-2 text-gray-800 line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-modal-backdrop overflow-y-auto">
            <div
              ref={modalRef}
              className="bg-white rounded-lg w-full max-w-3xl mx-auto my-8 animate-modal-content max-h-[90vh] overflow-y-auto"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full mb-2 inline-block">
                      {selectedProject.contentType}
                    </span>
                    <h3 className="text-xl font-medium mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setSelectedMedia(null);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Media */}
                <div className="relative rounded-lg overflow-hidden mb-4">
                  {renderMedia(selectedProject, selectedMedia)}
                </div>

                {/* Thumbnails */}
                {selectedProject.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {selectedProject.gallery.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedMedia(media)}
                        className={`relative rounded-lg overflow-hidden aspect-square ${
                          selectedMedia === media ? 'ring-2 ring-indigo-600' : ''
                        }`}
                      >
                        {renderThumbnail(selectedProject, media, index)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}