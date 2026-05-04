import { makeScene2D } from '@motion-canvas/2d';
import { Img, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { all, createRef, easeInOutCubic, easeOutBack, waitFor } from '@motion-canvas/core';

import bathtubPNG from '../images/bathtub.png'; // https://pixabay.com/vectors/bathtub-vintage-cartoon-isolated-304193 -- License: Free for use
import bottlePNG from '../images/bottle.png'; // https://freesvg.org/green-bottle-image -- License: Public domain
import bwaterPNG from '../images/bottled-water.png'; // https://pixabay.com/vectors/bottledwater-water-bottle-mineral-4127009 -- License: Free for use
import plantPNG from '../images/plant.png'; // https://pixabay.com/es/vectors/planta-maceta-tierno-delicado-157469 -- License: Free for use
import bucketPNG from '../images/red-bucket.png'; // https://freesvg.org/red-bucket -- License: Public domain
import tapPNG from '../images/simple_tap.png'; // https://www.pngegg.com/es/png-wiooj -- License: Non-comercial use

export default makeScene2D(function* (view) {
  const background = createRef<Rect>()
  const container  = createRef<Rect>()
  const title      = createRef<Txt>()
  const tap        = createRef<Img>()
  const water      = createRef<Rect>()
  const caption    = createRef<Txt>()
  const bucket     = createRef<Img>()
  const bottle     = createRef<Img>()
  const bathtub    = createRef<Img>()
  const bwater     = createRef<Img>()
  const bwater2    = createRef<Img>()
  const bwater3    = createRef<Img>()
  const plant      = createRef<Img>()

  yield view.add(
    <>
      {/* Light Background */}
      <Rect ref={background} width={1920} height={1080} fill={'#f8fafc'} />

      {/* Title */}
      <Txt
        ref={title}
        y={-100}
        fontSize={80}
        fontWeight={800}
        fill={'#E1306C'}
        letterSpacing={2}
        opacity={0}
        cache
      >
          Concepto de Software Libre
      </Txt>

      <Img
        ref={bucket}
        src={bucketPNG}
        width={300}
        x={-100}
        y={75}
        offsetY={-1}
        opacity={0}
      />
    
      <Img
        ref={bottle}
        src={bottlePNG}
        width={200}
        x={-59}
        y={0}
        offsetY={-1}
        opacity={0}
      />
    
      <Img
        ref={bathtub}
        src={bathtubPNG}
        width={600}
        x={0}
        y={-5}
        offsetY={-1}
        opacity={0}
      />
    
      <Rect
        ref={water}
        width={50}
        height={0}
        x={-100}
        y={-30}
        offsetY={-1}
        fill={'#4aa3df'}
        opacity={0.9}
      />

      <Img
        ref={tap}
        src={tapPNG}
        width={300}
        x={-200}
        y={-125}
        opacity={0}
      />

      <Img
        ref={bwater}
        src={bwaterPNG}
        width={125}
        x={0}
        y={-100}
        opacity={0}
      />
    
      <Img
        ref={bwater2}
        src={bwaterPNG}
        width={125}
        x={0}
        y={-100}
        opacity={0}
      />

      <Img
        ref={bwater3}
        src={bwaterPNG}
        width={125}
        x={0}
        y={-100}
        opacity={0}
      />
    
      <Img
        ref={plant}
        src={plantPNG}
        height={575}
        x={-35}
        y={100}
        opacity={0}
      />

      <Txt
        ref={caption}
        y={425}
        fontSize={60}
        fill={'#8a8b8a'}
        textAlign={'center'}
        opacity={0.9}
      />

    </>
  )

  // Title appearance
  yield* all(title().opacity(1, 2), title().scale(1, 2, easeOutBack))

  yield* waitFor(1)

  yield* title().y(-400, 1, easeInOutCubic)

  yield* waitFor(1)

  // Scene 1: Faucet appears, water flows down
  yield* all(
    tap().opacity(1, 2),
    water().height(167, 2, easeInOutCubic),
    bucket().opacity(1, 2),
    caption().text("Nas nosas casas, a auga sae da billa.", 2)
  )

  yield* waitFor(3)

  // Scene 2: Water cuts down
  yield* all(
    water().height(0, 1),
    caption().text("Consumímola con confianza, pois sabemos como se sanea.", 2)
  )

  yield* waitFor(3)

  // Scene 3: Bottle appears, bucket slides left, water reruns  
  yield* all(
    bucket().x(-650, 1, easeInOutCubic),
    bottle().opacity(1, 2),
    water().width(15, 0.1),
    water().height(337, 2, easeInOutCubic),
    caption().text("Usamos exactamente a que precisamos.", 2)
  )

  yield* waitFor(3)

  // Scene 4: Water cuts down again
  yield* all(
    water().height(0, 1),
    caption().text("E nin unha pinga máis.", 2)
  )

  yield* waitFor(3)

  // Scene 5: Bathtub appears, bottle slides right, water reruns  
  yield* all(
    bottle().x(700, 1, easeInOutCubic),
    bathtub().opacity(1, 2),
    water().width(30, 0.1),
    water().height(171, 2, easeInOutCubic),
    caption().text("Empregámola para o que queremos.", 2)
  )

  yield* waitFor(3)

  // Scene 6: Water cuts down again
  yield* all(
    water().height(0, 1),
    caption().text("Nós e calquera persoa que vén á nosa casa, claro!", 2)
  )
  
  yield* waitFor(3)

  // Scene 7: Faucet disappears, bottled waters replace other items
  yield* all(
    tap().opacity(0, 2),
    bucket().opacity(0, 2),
    bathtub().opacity(0, 2),
    bottle().opacity(0, 2),
    caption().text("Pensa agora na auga embotellada.", 2)
  )

  yield* waitFor(3)

  // Scene 8: 
  yield* all(
    bwater().opacity(1, 2),
    bwater2().opacity(1, 2),
    bwater3().opacity(1, 2),
    caption().text("Podes ver algunha diferenza?", 2)
  )

  yield* waitFor(3)

  // Scene 9: Items disappear
  yield* all(
    caption().text("Vén nun envase que non podes elixir.", 2)
  )

  yield* waitFor(3)

  yield* all(
    bwater().x(-450, 2, easeInOutCubic),
    caption().text("Vén en tamaños xa establecidos.", 2)
  )

  yield* waitFor(3)

  yield* all(
    bwater3().x(450, 2, easeInOutCubic),
    caption().text("Non está pensada para compartir.", 2)
  )

  yield* waitFor(3)

  // Scene 10: Final metaphor (i)
  yield* all(
    caption().text("A auga embotellada é como o software privativo.", 2)
  )

  yield* waitFor(3)

  // Scene 10: Final metaphor (ii)
  yield* all(
    bwater().opacity(0, 1.5),
    bwater2().opacity(0, 1.5),
    bwater3().opacity(0, 1.5),
    tap().opacity(1, 2),
    caption().text("E auga da billa é como o software libre.", 2)
  )

  yield* waitFor(3)

  yield* all(
    water().width(20, 0.1),
    water().height(225, 2, easeInOutCubic),
    plant().opacity(1, 2),
    caption().text("Tes sede de máis...?", 2)
  )

  yield* waitFor(5)

  // Clean exit
  yield* all(
    tap().opacity(0, 1),
    water().opacity(0, 1),
    title().opacity(0, 1),
    caption().opacity(0, 1)
  )

  yield* waitFor(5)

})
