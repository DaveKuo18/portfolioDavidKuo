# Portfolio tecnico

Portfolio web para centralizar CV, proyectos, demos desplegadas y contacto.

## Editar informacion

La informacion principal esta parametrizada en:

```text
src/data/portfolio.ts
```

Ahi podes cambiar:

- Nombre, headline, ubicacion, email, telefono y links.
- Link al CV (`profile.cvUrl`). Por defecto espera un archivo `public/cv.pdf`.
- Skills por area.
- Experiencia laboral o proyectos destacados.
- Proyectos con descripcion, tecnologias, demo, repositorio e imagen.
- Servicios o tipos de trabajo que queres ofrecer.

## CV y foto

El CV ya esta enlazado desde:

```text
public/docs/David_Kuo_CV.pdf
```

La foto principal esta enlazada desde:

```text
public/images/Io.jpg
```

Ambos paths se editan en `profile` dentro de `src/data/portfolio.ts`.

## Cambiar CV PDF

Crea o reemplaza el archivo:

```text
public/docs/David_Kuo_CV.pdf
```

Si el nombre cambia, actualiza `profile.cvUrl` en `src/data/portfolio.ts`.

## Comandos

```bash
npm install
npm run dev
npm run build
```

En Windows, si PowerShell bloquea `npm.ps1`, usa:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```
