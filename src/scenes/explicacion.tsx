import { makeScene2D } from '@motion-canvas/2d'
import { Layout, Rect, Txt } from '@motion-canvas/2d/lib/components'
import { all, waitFor } from '@motion-canvas/core/lib/flow'
import { easeInOutCubic, easeOutBack } from '@motion-canvas/core/lib/tweening'
import { createRef } from '@motion-canvas/core/lib/utils'

export default makeScene2D(function* (view) {
  const background = createRef<Rect>()
  const container = createRef<Rect>()
  const title = createRef<Txt>()
  const contentContainer = createRef<Layout>()
  const primeira = createRef<Layout>()
  const segunda = createRef<Layout>()
  const terceira = createRef<Layout>()
  const cuarta = createRef<Layout>()

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
        gap={70}
        width={1000}
        height={600}
        fill={'white'}
        stroke={'#e2e8f0'}
        lineWidth={2}
        radius={20}
        shadowColor={'rgba(0, 0, 0, 0.1)'}
        shadowOffset={[0, 10]}
        shadowBlur={40}
        opacity={0}
        scale={0.8}
      >
        {/* Title */}
        <Txt
          ref={title}
          fontSize={40}
          fill={'#E1306C'}
          fontWeight={800}
          letterSpacing={2}
          opacity={0}
          scale={0.9}
          cache
        >
          As catro liberdades do software libre
        </Txt>

        {/* Content Section */}
        <Layout
          ref={contentContainer}
          direction="column"
          alignItems="center"
          gap={50}
          opacity={0}
          y={50}
        >

          {/* Content Grid */}
          <Layout direction="row" alignItems="center" gap={80}>
            {/* Primeira: liberdade de uso */}
            <Layout
              ref={primeira}
              direction="column"
              alignItems="center"
              gap={15}
              opacity={0}
              scale={0.8}
            >
              <Rect size={90} fill={'#02abffff'} radius={20}>
                <Txt fontSize={100} fill={'white'} fontWeight={700} cache textAlign={'center'}>
                  1
                </Txt>
              </Rect>
              <Txt
                fontSize={20}
                fill={'#64748b'}
                fontWeight={500}
                cache
                textAlign={'center'}
              >
                Usalo para o que queiramos
              </Txt>
            </Layout>

            {/* Segunda: liberdade de estudar o código */}
            <Layout
              ref={segunda}
              direction="column"
              alignItems="center"
              gap={15}
              opacity={0}
              scale={0.8}
            >
              <Rect size={90} fill={'#ff9100c0'} radius={20}>
                <Txt fontSize={100} fill={'white'} fontWeight={700} cache textAlign={'center'}>
                  2
                </Txt>
              </Rect>
              <Txt
                fontSize={20}
                fill={'#64748b'}
                fontWeight={500}
                cache
                textAlign={'center'}
              >
                Estudar o seu código e mudalo
              </Txt>
            </Layout>
          </Layout>

          <Layout direction="row" alignItems="center" gap={80}>
            {/* Terceira: liberdade de compartir */}
            <Layout
              ref={terceira}
              direction="column"
              alignItems="center"
              gap={15}
              opacity={0}
              scale={0.8}
            >
              <Rect size={90} fill={'#00ff15ff'} radius={20}>
                <Txt fontSize={100} fill={'white'} fontWeight={700} cache textAlign={'center'}>
                  3
                </Txt>
              </Rect>
              <Txt
                fontSize={20}
                fill={'#64748b'}
                fontWeight={500}
                cache
                textAlign={'center'}
              >
                Compartilo con outras persoas
              </Txt>
            </Layout>

            {/* Cuarta: liberdade de compartir modificacións */}
            <Layout
              ref={cuarta}
              direction="column"
              alignItems="center"
              gap={15}
              opacity={0}
              scale={0.8}
            >
              <Rect size={90} fill={'#ff0000c0'} radius={20}>
                <Txt fontSize={100} fill={'white'} fontWeight={700} cache textAlign={'center'}>
                  4
                </Txt>
              </Rect>
              <Txt
                fontSize={20}
                fill={'#64748b'}
                fontWeight={500}
                cache
                textAlign={'center'}
              >
                Compartir as nosas modificacións
              </Txt>
            </Layout>
          </Layout>
        </Layout>

        {/* Bottom tagline */}
        <Txt
          fontSize={34}
          fill={'#64748b'}
          fontWeight={400}
          fontStyle={'italic'}
          opacity={0}
          cache
        >
         Free as in freedom, not as in beer! 
        </Txt>
      </Rect>
    </>
  )

  // Animation sequence
  yield* all(
    container().opacity(1, 0.8, easeInOutCubic),
    container().scale(1, 0.8, easeOutBack)
  )

  yield* waitFor(0.3)

  yield* all(title().opacity(1, 0.8), title().scale(1, 1, easeOutBack))

  yield* waitFor(0.5)

  yield* all(
    contentContainer().opacity(1, 0.8),
    contentContainer().y(0, 0.8, easeInOutCubic)
  )

  yield* waitFor(0.2)

  // Animate social media icons sequentially
  yield* primeira().opacity(1, 0.4)
  yield* primeira().scale(1, 0.4, easeOutBack)
  yield* waitFor(0.15)

  yield* segunda().opacity(1, 0.4)
  yield* segunda().scale(1, 0.4, easeOutBack)
  yield* waitFor(0.15)

  yield* terceira().opacity(1, 0.4)
  yield* terceira().scale(1, 0.4, easeOutBack)
  yield* waitFor(0.15)

  yield* cuarta().opacity(1, 0.4)
  yield* cuarta().scale(1, 0.4, easeOutBack)

  yield* waitFor(0.5)

  yield* container().children()[2].opacity(1, 0.6)

  yield* waitFor(1)

  // Final pulse effect
  yield* all(
    title().scale(1.05, 0.4).to(1, 0.4),
    primeira().children()[0].scale(1.1, 0.3).to(1, 0.3),
    segunda().children()[0].scale(1.1, 0.3).to(1, 0.3),
    terceira().children()[0].scale(1.1, 0.3).to(1, 0.3),
    cuarta().children()[0].scale(1.1, 0.3).to(1, 0.3)
  )

  yield* waitFor(2)
})
