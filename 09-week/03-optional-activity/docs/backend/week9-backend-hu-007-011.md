# Week 9 - Backend (HU-007 a HU-011)

## Contexto
Durante la Week 9 se consolidó la documentación funcional y técnica de las historias `HU-007` a `HU-011` en la rama `Develop` del repositorio backend, dentro de `docs/Changes/`.

Repositorio: <https://github.com/jose6668/FarmaExpres_Backend>

## Historias de Usuario Incluidas

### HU-007 - Consulta de movimientos por categoría
- Microservicio: `inventory-service`
- Enfoque: separación de consultas por tipo de movimiento (`Entrance`, `Exit`, `Updated`).
- Estado documentado: `Planeada`.
- Endpoints planteados:
  - `GET /api/movements/entries`
  - `GET /api/movements/exits`
  - `GET /api/movements/adjustments`

### HU-008 - Alertas por rango de vencimiento
- Microservicio: `alert-service`
- Enfoque: alertas para productos próximos a vencer en rangos de `16-30` y `31-60` días.
- Estado documentado: `En progreso`.
- Endpoints planteados:
  - `GET /api/alerts/expiring-half-month`
  - `GET /api/alerts/expiring-month`

### HU-009 - Resumen de stock activo y valor total
- Microservicio: `inventory-service`
- Enfoque: resumen consolidado de inventario activo (`totalStock` y `totalInventoryValue`).
- Estado documentado: `Planeada`.
- Endpoint base documentado:
  - `GET /api/products/active-summary`
- Nota registrada: inclusión de `GET /api/products/fefo-snapshot` como optimización para frontend.

### HU-010 - DTO para tabla de inventario activo
- Microservicio: `inventory-service`
- Enfoque: salida especializada para tabla (`code`, `name`, `stock`, `unitPrice`, `totalValue`).
- Estado documentado: `Planeada`.
- Endpoint planteado:
  - `GET /api/products/active-table`

### HU-011 - Filtro de movimientos por usuario
- Microservicio: `inventory-service`
- Enfoque: consulta de movimientos con filtro opcional por `userId`.
- Estado documentado: `Planeada`.
- Endpoint planteado:
  - `GET /api/movements/filter-by-user`

## Estado General de Backend en Week 9
- Se dejó trazabilidad formal de alcance, contratos esperados y criterios de aceptación para HU-007 a HU-011.
- Se definieron endpoints objetivo para exposición vía `api-gateway`.
- Se identificaron componentes técnicos a modificar por HU (`Controller`, `Service`, `Repository`, DTO y pruebas).
- Parte del trabajo quedó en fase de definición/avance, por lo que continúa su implementación y validación en los siguientes ciclos.

## Issues y Referencias
- Issues del backend: <https://github.com/jose6668/FarmaExpres_Backend/issues>
- Documento HU-007: <https://github.com/jose6668/FarmaExpres_Backend/blob/Develop/docs/Changes/HU-007-movements-by-category.md>
- Documento HU-008: <https://github.com/jose6668/FarmaExpres_Backend/blob/Develop/docs/Changes/HU-008-alerts-by-expiration-range.md>
- Documento HU-009: <https://github.com/jose6668/FarmaExpres_Backend/blob/Develop/docs/Changes/HU-009-active-stock-total.md>
- Documento HU-010: <https://github.com/jose6668/FarmaExpres_Backend/blob/Develop/docs/Changes/HU-010-active-inventory-table-dto.md>
- Documento HU-011: <https://github.com/jose6668/FarmaExpres_Backend/blob/Develop/docs/Changes/HU-011-movements-filter-by-user.md>
