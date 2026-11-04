import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { services } from '../collections/services'
import FeedCard from '../components/FeedCard'

function findServiceIndex(serviceId: string | null) {
  if (!serviceId) {
    return 0
  }

  const index = services.findIndex((service) => service.id === serviceId)
  return index >= 0 ? index : 0
}

interface FeedState {
  requestedId: string | null
  offset: number
}

export default function FeedPage() {
  const [searchParams] = useSearchParams()
  const requestedId = searchParams.get('service')
  const [feedState, setFeedState] = useState<FeedState>(() => ({ requestedId, offset: 0 }))
  const [likedById, setLikedById] = useState<Record<string, boolean>>({})

  if (feedState.requestedId !== requestedId) {
    setFeedState({ requestedId, offset: 0 })
  }

  const baseIndex = findServiceIndex(feedState.requestedId)
  const currentIndex =
    services.length === 0 ? 0 : (baseIndex + feedState.offset) % services.length
  const currentService = services[currentIndex]

  useEffect(() => {
    document.title = currentService ? `${currentService.title} — CAVI` : 'Лента — CAVI'
  }, [currentService])

  if (!currentService) {
    return <p className="empty-state">Нет опубликованных услуг</p>
  }

  const liked = Boolean(likedById[currentService.id])

  return (
    <div className="feed-wrapper">
      <FeedCard
        service={currentService}
        liked={liked}
        onLike={() =>
          setLikedById((previous) => ({
            ...previous,
            [currentService.id]: !previous[currentService.id],
          }))
        }
        onNext={() =>
          setFeedState((previous) => ({ ...previous, offset: previous.offset + 1 }))
        }
      />
    </div>
  )
}
