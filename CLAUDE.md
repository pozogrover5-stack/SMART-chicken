# Smart Chicken — Contexto de marca y proyecto

Web de **Smart Chicken**, pollería a la brasa **SOLO delivery y recojo en
tienda** (sin salón para comer, concepto tipo "dark kitchen"). Proyecto web
nuevo e independiente.

## Marca
- **Nombre:** Smart Chicken
- **Rubro:** Pollería a la brasa.
- **Modelo:** SOLO delivery y recojo en tienda (no hay salón).
- **Frase / tagline:** "Pollos a la brasa".
- **Tono:** moderno, fresco, juvenil.

## Identidad visual (OFICIAL — manual de identidad)
### Paleta (códigos exactos)
- **Naranja/amarillo principal:** `#F29F06`
- **Marrón oscuro** (texto y logo): `#250101`
- **Naranja quemado** (acento): `#B84D10`
- **Beige/dorado** (detalles): `#C3A277`
- Más blanco/crema de apoyo. **Nunca rojo puro ni amarillo chillón.**

### Tipografía (oficial + alternativa web usada)
- **Títulos / "SMART CHICKEN":** oficial *Berlin Sans FB Demi Bold*. No está
  en Google Fonts → en la web se usa **Fredoka** (sans geométrica gruesa y
  redondeada, la más parecida).
- **"POLLOS A LA BRASA" / acento decorativo:** oficial *Dark Poetry*
  (manuscrita) → en la web se usa **Caveat** (manuscrita) como alternativa.

### Logo
- Wordmark "SMART CHICKEN" con ícono de pollo y bajada "POLLOS A LA BRASA"
  (marrón `#250101` sobre fondo naranja `#F29F06`). Isotipo (solo el pollo)
  existe en versión beige `#C3A277`.
- Archivos fuente: `LOGO SMART.png`, `LOGO 1SMART.png`, `Mesa de trabajo
  10.png` (logo completo, idénticos) y `Mesa de OPCION 217.png` (isotipo
  beige). En el repo, procesados en `web/assets/brand/`:
  `logo.png` (fondo naranja), `logo-trans.png` (fondo transparente),
  `chicken.png` / `chicken-trans.png` (isotipo).

## Estrategia de marca (del manual)
- **Visión:** ser la pollería más reconocida y preferida de la región, con
  un toque especial familiar; la primera opción para compartir momentos.
- **Misión:** pollos a la brasa y complementos con insumos frescos y toque
  familiar, precios accesibles y servicio conveniente (delivery o llevar).
- **Valores:** respeto, accesibilidad, compromiso con mejorar, tradición
  familiar.
- **Tono:** moderno. **Objetivos del rebranding:** incrementar ventas y
  captar nuevos clientes.
- **Referencias del rubro que le gustan:** Don Tito, Villa Chicken,
  Don Cirilo, Tori Pollería. (Recordar: SOLO delivery.)

## Datos del negocio (CORRECTOS — usar siempre estos)
- **Dirección:** Av. Los Lirios 211, Urb. Entel, San Juan de Miraflores (SJM).
  A una cuadra del Mall del Sur.
- **Horario:** 12:00 del mediodía a 11:30 pm.
- **WhatsApp:** 949 240 863 (+51 949 240 863).
- **Pagos:** efectivo, tarjetas, Yape / Plin (QR).

> ⚠️ Hay material gráfico antiguo con datos DESACTUALIZADOS (dirección "209"
> y teléfono "933 568 171"). NO usar esos datos: los correctos son los de
> arriba (211 / 949 240 863).

## Público objetivo
- Familias del barrio.
- Trabajadores de la zona.
- Organizadores de eventos pequeños.
- Jóvenes y estudiantes (productos gancho: mostritos y salchipapas).

## Lineamientos de la web
- **Mobile-first**, tipo catálogo.
- Pedidos **por WhatsApp** (sin carrito de pago, sin pasarela).
- Objetivo central: que el cliente **pida por WhatsApp** de forma rápida.

### REGLA 1 — La carta no va desplegada
La carta NO se muestra desplegada como listado en la web. Va como un
**botón para ver / descargar el archivo de la carta** (referencia:
dontito.pe y panchita.pe), de modo que sea **compartible por WhatsApp**.

### REGLA 2 — Fotos que el cliente irá sumando
Las fotos (de productos y del personal) las irá subiendo el cliente con el
tiempo. El diseño debe **contemplar espacios/placeholders para fotos** que
se irán agregando, sin romper el layout cuando falten o se sumen.

## Recursos disponibles en la carpeta
- `CARTA/CARTA_POLLOS.png` — carta oficial (datos correctos). Base para el
  archivo de carta descargable de la web.
- `FOTOS Y VIDEOS/` — fotos de pollo a la brasa generadas por IA (DALL·E,
  `.webp`), placeholders temporales; archivos fuente de diseño (`ÑÑÑ.pdf`,
  `ÑÑÑ.psd`).
- `FOTOS_PARA_REHACER/` — flyer con datos ANTIGUOS (rehacer con datos
  correctos).

> Nota: las fotos DALL·E son temporales. El cliente reemplazará con fotos
> reales (ver REGLA 2). Los `.psd` están excluidos del repo vía `.gitignore`
> (binarios pesados de diseño), pero siguen en disco.

### Material oficial de marca (fuera del repo)
El manual de identidad, logos y `.ai`/`.docx` están en
`Desktop/Pagina WEB/SMART_CHICKEN/` y en un zip en `Downloads/`. De ahí se
copiaron e integraron el logo (`web/assets/brand/`) y la info de marca.
- `INFORMACIÒN SMART CHICKEN_.docx` — brief oficial (visión/misión/FODA).
- `IDENTIDAD SMART 2025.ai` — fuente vectorial de la identidad.

> ⚠️ **Pendiente:** aún NO hay fotos reales de producto/personal. Las únicas
> fotos disponibles siguen siendo las de IA (placeholders). Cuando el cliente
> entregue fotos reales, reemplazar en hero, destacados y galería (REGLA 2).
