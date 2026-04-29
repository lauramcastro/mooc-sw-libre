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
      <Rect ref={background} width={1280} height={720} fill={'#f8fafc'} />

      {/* Title */}
      <Txt
        ref={title}
        y={-100}
        fontSize={40}
        fill={'#E1306C'}
        fontWeight={800}
        letterSpacing={2}
        opacity={0}
        scale={0.9}
        cache
      >
          Concepto de Software Libre
      </Txt>

      <Img
        ref={tap}
        src={tapPNG}
        width={150}
        opacity={0}
        x={-90}
        y={-40}
        scale={0.8}
      />

      <Img
        ref={bucket}
        src={bucketPNG}
        width={150}
        opacity={0}
        x={-40}
        y={110}
        offsetY={-1}
        scale={0.8}
      />
    
      <Img
        ref={bottle}
        src={bottlePNG}
        width={110}
        opacity={0}
        x={-32}
        y={65}
        offsetY={-1}
        scale={0.8}
      />
    
      <Img
        ref={bathtub}
        src={bathtubPNG}
        width={350}
        opacity={0}
        x={0}
        y={50}
        offsetY={-1}
        scale={0.8}
      />
    
      <Rect
        ref={water}
        width={25}
        height={0}
        x={-50}
        y={0}
        offsetY={-1}
        fill={'#4aa3df'}
        opacity={0.9}
      />

      <Img
        ref={bwater}
        src={bwaterPNG}
        width={90}
        opacity={0}
        x={0}
        y={-50}
        scale={0.8}
      />
    
      <Img
        ref={bwater2}
        src={bwaterPNG}
        width={90}
        opacity={0}
        x={250}
        y={-50}
        scale={0.8}
      />

      <Img
        ref={bwater3}
        src={bwaterPNG}
        width={90}
        opacity={0}
        x={-250}
        y={-50}
        scale={0.8}
      />
    
      <Img
        ref={plant}
        src={plantPNG}
        height={200}
        opacity={0}
        x={-35}
        y={100}
        scale={0.8}
      />

      <Txt
        ref={caption}
        y={275}
        fontSize={30}
        fill={'#8a8b8a'}
        opacity={0.9}
        textAlign={'center'}
      />

    </>
  )

  // Title appearance
  yield* all(title().opacity(1, 2), title().scale(1, 2, easeOutBack))

  yield* waitFor(1)

  yield* title().y(-250, 1, easeInOutCubic)

  yield* waitFor(1)

  // Scene 1: Faucet appears, water flows down
  yield* all(
    tap().opacity(1, 2),
    water().height(133, 2, easeInOutCubic),
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
    bucket().x(-300, 1, easeInOutCubic),
    bottle().opacity(1, 2),
    water().width(15, 0.1),
    water().height(200, 2, easeInOutCubic),
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
    bottle().x(300, 1, easeInOutCubic),
    bathtub().opacity(1, 2),
    water().width(30, 0.1),
    water().height(117, 2, easeInOutCubic),
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
    tap().opacity(0, 1),
    bwater().opacity(1, 2),
    caption().text("Pensa agora na auga embotellada.", 2)
  )

  yield* waitFor(3)

  // Scene 8: 
  yield* caption().text("Podes ver algunha diferenza?", 2)

  yield* waitFor(3)

  // Scene 9: Items disappear
  yield* all(
    bucket().opacity(0, 2),
    caption().text("Vén nun envase que non podes elixir.", 2)
  )

  yield* waitFor(3)

  yield* all(
    bottle().opacity(0, 2),
    bwater2().opacity(1, 1),
    caption().text("Vén en tamaños xa establecidos.", 2)
  )

  yield* waitFor(3)

  yield* all(
    bathtub().opacity(0, 2),
    bwater3().opacity(1, 1),
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
    water().width(10, 0.1),
    water().height(120, 2, easeInOutCubic),
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
