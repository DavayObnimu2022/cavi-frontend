import type { FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'

export interface ServiceFilterValues {
  minAge: number
  maxAge: number
}

interface ServiceFilterProps {
  values: ServiceFilterValues
  onChange: (values: ServiceFilterValues) => void
  onApply: () => void
}

export default function ServiceFilter({ values, onChange, onApply }: ServiceFilterProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onApply()
  }

  return (
    <Form className="filter-card" onSubmit={handleSubmit}>
      <div className="filter-labels">
        Возраст: <span>{values.minAge}</span> – <span>{values.maxAge}</span>
      </div>

      <div className="slider-row">
        <span className="slider-label">От</span>
        <Form.Range
          min={0}
          max={100}
          step={1}
          value={values.minAge}
          aria-label="Минимальный возраст"
          onChange={(event) =>
            onChange({
              ...values,
              minAge: Math.min(Number(event.target.value), values.maxAge),
            })
          }
        />
        <span className="slider-value">{values.minAge}</span>
      </div>

      <div className="slider-row">
        <span className="slider-label">До</span>
        <Form.Range
          min={0}
          max={100}
          step={1}
          value={values.maxAge}
          aria-label="Максимальный возраст"
          onChange={(event) =>
            onChange({
              ...values,
              maxAge: Math.max(Number(event.target.value), values.minAge),
            })
          }
        />
        <span className="slider-value">{values.maxAge}</span>
      </div>

      <div className="filter-actions">
        <Button type="submit" className="filter-btn">
          Применить
        </Button>
      </div>
    </Form>
  )
}
