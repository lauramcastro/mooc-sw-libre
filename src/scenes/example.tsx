import { makeScene2D } from '@motion-canvas/2d'
import { Layout, Rect, Txt } from '@motion-canvas/2d/lib/components'
import { all, waitFor } from '@motion-canvas/core/lib/flow'
import { easeInOutCubic, easeOutBack } from '@motion-canvas/core/lib/tweening'
import { createRef } from '@motion-canvas/core/lib/utils'

export default makeScene2D(function* (view) {
  const background = createRef<Rect>()
  const container = createRef<Rect>()
  const header = createRef<Layout>()
  const main = createRef<Layout>()
  const footer = createRef<Layout>()

  yield view.add(
    <>
      {/* Background */}
      <Rect ref={background} width={1920} height={1080} fill={'#0f172a'} />

      {/* Main container */}
      <Rect
        ref={container}
        layout
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={60}
        width={1600}
        height={900}
        fill={'#1e293b'}
        radius={20}
        shadowColor={'rgba(0, 0, 0, 0.3)'}
        shadowOffset={[0, 10]}
        shadowBlur={40}
        opacity={0}
        scale={0.8}
      >
        {/* Header Section */}
        <Layout
          ref={header}
          direction="column"
          alignItems="center"
          gap={20}
          opacity={0}
          y={-50}
        >
          <Txt
            fontSize={52}
            fill={'#fbbf24'}
            fontWeight={600}
            letterSpacing={4}
            cache
          >
            UNIVERSITY OF INNOVATION
          </Txt>
          <Rect width={500} height={4} fill={'#fbbf24'} radius={2} />
        </Layout>

        {/* Main Content */}
        <Layout
          ref={main}
          direction="column"
          alignItems="center"
          gap={40}
          opacity={0}
          scale={0.9}
        >
          <Txt
            fontSize={84}
            fill={'white'}
            fontWeight={900}
            letterSpacing={2}
            cache
          >
            SPECIAL LECTURE
          </Txt>

          <Layout direction="column" alignItems="center" gap={20}>
            <Txt fontSize={64} fill={'#3b82f6'} fontWeight={700} cache>
              Dr. Sarah Martinez
            </Txt>
            <Txt
              fontSize={42}
              fill={'#cbd5e1'}
              fontWeight={400}
              fontStyle={'italic'}
              textAlign={'center'}
              cache
            >
              Artificial Intelligence in Healthcare
            </Txt>
          </Layout>
        </Layout>

        {/* Footer Section */}
        <Layout
          ref={footer}
          direction="row"
          alignItems="center"
          gap={80}
          opacity={0}
          y={50}
        >
          <Rect
            layout
            fill={'rgba(251, 191, 36, 0.1)'}
            stroke={'#fbbf24'}
            lineWidth={3}
            radius={15}
            padding={30}
          >
            <Txt fontSize={48} fill={'#fbbf24'} fontWeight={700} cache>
              Friday, March 17th
            </Txt>
          </Rect>

          <Rect
            layout
            fill={'rgba(59, 130, 246, 0.1)'}
            stroke={'#3b82f6'}
            lineWidth={3}
            radius={15}
            padding={30}
          >
            <Txt fontSize={48} fill={'#3b82f6'} fontWeight={700} cache>
              7:00 PM
            </Txt>
          </Rect>
        </Layout>

        {/* Location at bottom */}
        <Txt fontSize={52} fill={'white'} fontWeight={600} opacity={0} cache>
          📍 Auditorium Hall B-203
        </Txt>
      </Rect>
    </>
  )

  // Animation sequence
  yield* all(
    container().opacity(1, 0.8, easeInOutCubic),
    container().scale(1, 0.8, easeOutBack)
  )

  yield* waitFor(0.2)

  yield* all(header().opacity(1, 0.6), header().y(0, 0.6, easeInOutCubic))

  yield* waitFor(0.3)

  yield* all(main().opacity(1, 0.8), main().scale(1, 0.8, easeOutBack))

  yield* waitFor(0.4)

  yield* all(footer().opacity(1, 0.6), footer().y(0, 0.6, easeInOutCubic))

  yield* waitFor(0.3)

  yield* container().children()[3].opacity(1, 0.6)

  yield* waitFor(1.5)

  // Highlight important info
  yield* all(
    footer().scale(1.05, 0.4).to(1, 0.4),
    container().children()[3].scale(1.03, 0.3).to(1, 0.3)
  )

  yield* waitFor(2)
})
