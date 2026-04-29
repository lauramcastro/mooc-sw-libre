# Animación de contidos en vídeo

Este repositorio recolle a animación de contidos en vídeo producidos para o MOOC _Software Libre para Mentes Abertas_
da Universidade da Coruña.

É un _fork_ do repositorio [GPUL Schools Video Generator](https://github.com/gpul-org/schools-video).

## Obxectivo

Este repositorio é un proxecto de [Motion Canvas](https://github.com/motion-canvas/motion-canvas) para crear vídeos nos
que o contido é animado a partir dunha descrición programada.

En concreto, o contido deste proxecto contén animacións que ilustran o **concepto de software libre** e as
**4 liberdades do software libre**.

## Estrutura

```
src/
├── audio/              # Sons empregados nas escenas
├── images/             # Imaxes empregadas nas escenas
├── scenes/             # Escenas animadas
│   ├── intro.tsx       # Scene: Introdución do MOOC
│   ├── corpo.tsx       # Scene: Concepto de software libre
│   └── explicacion.tsx # Scene: As 4 liberdades do software libre
└── project.ts          # Guión principal
```

## Reproducir, reutilizar, adaptar

### Prerequisitos

- Node.js 16+
- pnpm (recommended) ou npm

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar o servidor de desenvolvemento
pnpm start
```
