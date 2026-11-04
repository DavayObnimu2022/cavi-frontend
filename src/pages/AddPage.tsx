import { Alert, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AddPage() {
  return (
    <div className="add-wrapper">
      <div className="add-form">
        <div className="add-header">Добавление услуги</div>

        <Alert variant="info" className="add-alert">
          Добавление доступно только авторизованным пользователям. Гость может просматривать
          ленту и плитку.
        </Alert>

        <Form>
          <Form.Group className="mb-3" controlId="addTitle">
            <Form.Label>Название</Form.Label>
            <Form.Control type="text" placeholder="Введите название" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="addDescription">
            <Form.Label>Краткое описание</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Введите описание" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="addPrice">
            <Form.Label>Цена, ₽</Form.Label>
            <Form.Control type="number" placeholder="0" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="addDate">
            <Form.Label>Дата</Form.Label>
            <Form.Control type="date" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="addCategory">
            <Form.Label>Категория</Form.Label>
            <Form.Select disabled>
              <option>Кардиология</option>
              <option>Диагностика</option>
              <option>Терапия</option>
            </Form.Select>
          </Form.Group>

          <Button type="button" className="filter-btn" disabled>
            Добавить
          </Button>
        </Form>

        <Link to="/feed" className="add-back">
          Вернуться в ленту
        </Link>
      </div>
    </div>
  )
}
