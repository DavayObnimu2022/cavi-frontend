import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Service } from '../collections/services'
import ServiceMedia from './ServiceMedia'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="grid-card">
      <Link to={`/feed?service=${service.id}`} className="grid-card-link">
        <ServiceMedia
          variant="grid"
          imageUrl={service.imageUrl}
          videoUrl={service.videoUrl}
          title={service.title}
        />
        <Card.Body className="card-info">
          <Card.Title as="h4">{service.title}</Card.Title>
          <div className="meta">
            <span>Возраст: {service.age ?? '—'}</span>
            <span className="likes">❤ {service.likes}</span>
          </div>
        </Card.Body>
      </Link>
    </Card>
  )
}
