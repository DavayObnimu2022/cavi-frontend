import { useState } from 'react'
import defaultImage from '../assets/default-image.svg'
import defaultVideo from '../assets/default-video.mp4'

interface ServiceMediaProps {
  imageUrl?: string
  videoUrl?: string
  title: string
  variant: 'feed' | 'grid'
}

export default function ServiceMedia({ imageUrl, videoUrl, title, variant }: ServiceMediaProps) {
  const [imageSrc, setImageSrc] = useState(imageUrl || defaultImage)
  const [videoSrc, setVideoSrc] = useState(videoUrl || defaultVideo)

  if (variant === 'grid') {
    return (
      <img
        className="service-media-image"
        src={imageSrc}
        alt={title}
        onError={() => setImageSrc(defaultImage)}
      />
    )
  }

  return (
    <video
      className="service-media-video"
      src={videoSrc}
      poster={imageSrc}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setVideoSrc(defaultVideo)}
    />
  )
}
