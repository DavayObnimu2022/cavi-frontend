import { Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Service } from '../collections/services'
import ServiceMedia from './ServiceMedia'
import { AgeIcon, ArrowRightIcon, HeartIcon, PulseIcon, SoundIcon } from './icons'

interface FeedCardProps {
  service: Service
  liked: boolean
  onLike: () => void
  onNext: () => void
}

export default function FeedCard({ service, liked, onLike, onNext }: FeedCardProps) {
  const likes = service.likes + (liked ? 1 : 0)

  return (
    <article className="feed-card">
      <div className="video-wrapper">
        <ServiceMedia
          key={service.id}
          variant="feed"
          imageUrl={service.imageUrl}
          videoUrl={service.videoUrl}
          title={service.title}
        />

        <div className="video-top-left">
          <span className="cavi-dot">●</span>
          <span className="cavi-logo">CAVI Мониторинг</span>
        </div>

        <div className="video-top-right">
          <SoundIcon className="sound-icon" />
        </div>

        <div className="feed-actions">
          <div className="feed-params">
            <Badge className="feed-chip">
              <AgeIcon />
              <span className="feed-chip-text">
                <span className="chip-val">{service.age ?? '—'}</span>
                <span className="chip-unit">лет</span>
              </span>
            </Badge>
            <Badge className="feed-chip">
              <PulseIcon />
              <span className="feed-chip-text">
                <span className="chip-val">{service.pressure ?? '—'}</span>
                <span className="chip-unit">мм</span>
              </span>
            </Badge>
          </div>

          <Button
            type="button"
            className={liked ? 'action-circle liked' : 'action-circle'}
            onClick={onLike}
            aria-label="Поставить лайк"
          >
            <HeartIcon className="heart" />
            <span className="likes-num">{likes}</span>
          </Button>

          <Button type="button" className="action-circle" onClick={onNext} aria-label="Следующая услуга">
            <ArrowRightIcon className="arrow" />
          </Button>
        </div>

        <div className="feed-bottom">
          <div className="feed-title">{service.title}</div>
          <div className="feed-desc">{service.description}</div>
          <Link to="/grid" className="feed-more">
            Ещё
          </Link>
        </div>
      </div>
    </article>
  )
}
