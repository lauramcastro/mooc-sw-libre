import { makeScene2D } from '@motion-canvas/2d'
import { Img, Layout, Rect, Txt } from '@motion-canvas/2d/lib/components'
import { all, waitFor } from '@motion-canvas/core/lib/flow'
import { easeInOutCubic, easeOutBack } from '@motion-canvas/core/lib/tweening'
import { createRef } from '@motion-canvas/core/lib/utils'

import logoUDC from '../images/03_Simbolo_logo_cor.svg'; // Attribution: https://www.udc.es/identidadecorporativa/

export default makeScene2D(function* (view) {
  const background = createRef<Rect>()
  const container  = createRef<Rect>()
  const logo       = createRef<Img>()
  const courseName = createRef<Txt>()
  const tagline    = createRef<Txt>()

  yield view.add(
    <>
      {/* Light Background */}
      <Rect ref={background} width={1280} height={720} fill={'#f8fafc'} />

      {/* Main container */}
      <Rect
        ref={container}
        layout
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={50}
        opacity={0}
        scale={0.8}
      >
        {/* Logo */}
        <Img ref={logo} src={logoUDC} width={500} opacity={0} scale={0} />

        {/* Course Name */}
        <Layout direction="column" alignItems="center" gap={20}>
          <Txt
            ref={courseName}
            fontSize={56}
            fill={'#1e293b'}
            fontWeight={800}
            letterSpacing={2}
            opacity={0}
            y={50}
            cache
            textAlign={'center'}
          >
            Software libre para mentes abertas
          </Txt>

          <Txt
            ref={tagline}
            fontSize={32}
            fill={'#64748b'}
            fontWeight={400}
            fontStyle={'italic'}
            opacity={0}
            cache
          >
            Un MOOC da Universidade da Coruña
          </Txt>
        </Layout>

      </Rect>
    </>
  )

  // Animation sequence
  yield* container().opacity(1, 0.6, easeInOutCubic)
  yield* waitFor(0.5)

  yield* all(logo().opacity(1, 0.8), logo().scale(1, 2, easeOutBack))

  yield* waitFor(0.5)

  yield* all(
    courseName().opacity(1, 0.8),
    courseName().y(0, 0.8, easeInOutCubic)
  )

  yield* waitFor(0.5)

  yield* tagline().opacity(1, 0.6)

  yield* waitFor(1)

  // Gentle logo pulse
  yield* logo().scale(1.25, 0.5).to(1, 0.5)

  yield* waitFor(1)
})
