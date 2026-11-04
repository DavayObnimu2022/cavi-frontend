import { useMemo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { services } from '../collections/services'
import ServiceCard from '../components/ServiceCard'
import ServiceFilter, { type ServiceFilterValues } from '../components/ServiceFilter'

const initialFilter: ServiceFilterValues = {
  minAge: 0,
  maxAge: 100,
}

export default function GridPage() {
  const [filter, setFilter] = useState<ServiceFilterValues>(initialFilter)
  const [appliedFilter, setAppliedFilter] = useState<ServiceFilterValues>(initialFilter)

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const age = service.age ?? 0
      return age >= appliedFilter.minAge && age <= appliedFilter.maxAge
    })
  }, [appliedFilter])

  return (
    <div className="grid-page">
      <div className="grid-header">
        <h3>Плитка</h3>
        <span className="grid-count">{filteredServices.length} услуг</span>
      </div>

      <ServiceFilter
        values={filter}
        onChange={setFilter}
        onApply={() => setAppliedFilter(filter)}
      />

      <div className="grid-scroll-area">
        {filteredServices.length === 0 ? (
          <p className="empty-state">Нет услуг по выбранным фильтрам</p>
        ) : (
          <Row xs={2} className="g-3 grid-container">
            {filteredServices.map((service) => (
              <Col key={service.id}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}
