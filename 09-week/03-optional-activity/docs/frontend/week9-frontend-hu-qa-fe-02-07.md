# Week 9 - Frontend (HU-QA-FE-02 y HU-QA-FE-07)

## Contexto
En esta semana, el alcance de frontend se concentró en dos historias QA documentadas en `doc/`:
- `HU-QA-FE-02 - Autenticación - Inicio de Sesión`
- `HU-QA-FE-07 - Movimientos - Historial de Inventario`

Repositorio: <https://github.com/Temenico/FarmaExpres-Frontend>

## HU-QA-FE-02 - Autenticación (Login)

### Logros principales
- Se validó interfaz de inicio de sesión con campos de correo y contraseña.
- Se implementaron validaciones de formulario (obligatoriedad y formato de correo).
- Se integró autenticación con `POST /auth/login`.
- Se registró token en `localStorage` y contexto de usuario autenticado.
- Se estableció redirección posterior a login exitoso hacia `/medicines`.
- Se confirmó protección de rutas privadas con sesión basada en token.

### Evidencias QA reportadas
- Render del login.
- Validación de campos vacíos.
- Validación de formato de correo.
- Error por credenciales inválidas.
- Flujo de acceso exitoso.
- Visualización de nombre/rol en sidebar.
- Mensaje de recuperación de contraseña.

## HU-QA-FE-07 - Movimientos (Historial)

### Logros principales
- Se habilitó vista de historial de movimientos para roles autorizados.
- Se consolidó tabla con campos operativos clave (fecha, hora, tipo, medicamento, cantidad, motivo, usuario, rol, estado).
- Se añadieron filtros por tipo, fechas y usuario.
- Se validó acción de limpiar filtros y recarga del listado general.
- Se verificó control de acceso por rol (Administrador y Auditor).
- Se registró diferenciación visual de entradas/salidas y manejo de estado marcado.

### Evidencias QA reportadas
- Acceso al módulo por roles permitidos.
- Render de tabla con columnas completas.
- Diferenciación de tipo y signo en cantidades.
- Aplicación de filtros múltiples.
- Restablecimiento al limpiar filtros.
- Restricción de acceso para roles no autorizados.
- Visualización de estado marcado.
- Normalización de usuario técnico del sistema.
- Consistencia de fecha/hora en zona local.

## Estado General de Frontend en Week 9
- Se avanzó con cierre funcional y validación QA de autenticación y trazabilidad de movimientos.
- La documentación incluye checklist, flujo de usuario y evidencia visual por caso de prueba.
- El alcance de la semana en frontend se limitó a estas dos HU QA.

## Issues y Referencias
- Issues del frontend: <https://github.com/Temenico/FarmaExpres-Frontend/issues>
- Documento HU-QA-FE-02: <https://github.com/Temenico/FarmaExpres-Frontend/blob/Develop/doc/HU-QA-FE-02%20-%20Autenticaci%C3%B3n%20-%20Inicio%20de%20Sesi%C3%B3n.md>
- Documento HU-QA-FE-07: <https://github.com/Temenico/FarmaExpres-Frontend/blob/Develop/doc/HU-QA-FE-07%20-%20Movimientos%20-%20Historial%20de%20Inventario.md>
