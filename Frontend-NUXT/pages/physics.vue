<template>
  <div class="body">
    <NavHeader />
    <ChapterHeader :chapter="intro">
      <Slider :pics="pics" />
    </ChapterHeader>
    <div class="topic_section" id="topic_1">

		<div class="topic_block" id="page_greeting">

			<h1>WHAT IS PHYSICS</h1>

			<iframe src="https://www.youtube.com/embed/Y-NQOJ3Uz4w">
			</iframe>

			<p>Physics is all about everything. Human mind is filled with insatiable thoughts that they even wanted
				to discover even the hidden treausures in the Universe. Later on, their focus developed Physics into
				nature.
				Physics is a Greek word that means "Knowledge of Nature" that deals with almost everything that
				surrounds us.
				Solid, Gas, Liquid, Energies and their relationship. Physics taught us the fundamental occurence of
				natural objects
				in universe.
			</p>

		</div>

		<div class="topic_block" id="">

			<h1>FATHER OF PHYSICS</h1>

			<div class="two_column">
				<p>
					Italian scientist, astronomer, physicist, and an engineer, Galileo Galilei, considered as the father
					of
					modern science and made huge contributions in fields of physics, astronomy, mathematics and even in
					Philosophy.
				</p>
				<img src="/images/physics/Galileo Galilei.jpg">
			</div>

			<p>Galileo Galilei was born in Pisa in 1564,
				the first of six children of Vincenzo Galilei, a musician and scholar.
				In 1581 he entered the University of Pisa at age 16 to study medicine,
				but was soon sidetracked by mathematics.</p>

			<div class="two_column">
				<p>In 1609 Galileo built his first telescope, improving upon a Dutch design. In addition,
					on this year, 1609, he also demonstrated his first telescope to Venetian lawmakers, including
					Leonardo Donato,
					the Doge (ruler) of Venice. At the time, Galileo taught geometry, mechanics
					and astronomy at the University of Padua. January of 1610, he published his discoveries entitled,
					"Siderius Nuncius" (The Starry Messenger).</p>
				<img src="/images/physics/Telescope.jpg">
			</div>

		</div>
	</div>

	<div class="topic_section" id="topic_2">

		<div class="topic_block">

			<h1>MOTION</h1>

			<video width="530" height="380" autoplay muted>
				<source src="/images/physics/motionPeople.mp4" type="video/mp4">
			</video>

			<h1>WHO IS SIR ISAAC NEWTON ?</h1>

			<img style="width: 650px auto; height: 650px auto;" src="/images/physics/Isaac Newton.jpg">

			<p>Isaac Newton, in full Sir Isaac Newton, (born December 25, 1642 [January 4, 1643, New Style],
				Woolsthorpe,
				Lincolnshire, England—died March 20 [March 31], 1727, London), English physicist and mathematician,
				who was the culminating figure of the Scientific Revolution of the 17th century. In mechanics,
				his three laws of motion, the basic principles of modern physics,
				resulted in the formulation of the law of universal gravitation.</p>

			<h2>3 LAWS OF MOTION</h2>

			<p>
			<h3>
				<ol>
					<li>FIRST LAW OF MOTION<small> = It states that a body at uniform motion or rest will remain in its
							original state until and unless an external force applies to it.
							The <em>First Law of Motion</em> states,
							"A body at rest will remain at rest, and a body in motion will remain in motion unless it is
							acted upon by an external force."
							This simply means that things cannot start, stop, or change direction all by themselves. It
							takes some force acting on them from the outside to cause such a change.
							This property of massive bodies to resist changes in their state of motion is sometimes
							called inertia.
						</small></li><br>
					<li>SECOND LAW OF MOTION <small>= states that force is directly proportional to the product of the
							mass of the body and its acceleration.</small></li><br>
					<img src="/images/physics/fma.png" alt="">
					<img src="/images/physics/FMA.jpg">
					<h3>What is NETFORCE ?</h3>
					<ul>
						<li>A net force ΣF is the sum of all forces acting on a body. More precisely, it is the vector
							sum of all forces acting on a body.</li>
					</ul>
					<img src="/images/physics/netforce.png" alt="">


					<p>Consider two forces of magnitude 30 N and 20 N that are exerted to the right and left,
						respectively on the horse shown in the picture.
						If we assume the rightward direction as positive, then the net force on the horse can be
						calculated as follows:<br>
						<br>
						∑F=30N−20N=10N<br>
						∑F=30N−20N=10N<br>
						∑F=10Ntotheright
					</p><br>
					<li>THIRD LAW OF MOTION<small> = There is an identical and reverse reaction for every action. The
							<em>Third Law of Motion</em> states,
							"For every action, there is an equal and opposite reaction." This law describes what happens
							to a body when it exerts a force on another body.
							Forces always occur in pairs, so when one body pushes against another, the second body
							pushes back just as hard.
							For example, when you push a cart, the cart pushes back against you; when you pull on a
							rope, the rope pulls back against you; when gravity pulls you down against the ground,
							the ground pushes up against your feet; and when a rocket ignites its fuel behind it, the
							expanding exhaust gas pushes on the rocket causing it to accelerate.</small></li>
				</ol>
			</h3>
			</p>
      
      


			<!--div class="img-slider">
			  <div class="slide active">
				<img src="/images/Astronomy/nebulae.jpg" alt="">
				<div class="info">
					<h2>Nebulous Beginnings</h2>
					<p>Birth takes place inside hydrogen-based dust clouds called nebulae. Over the course of thousands of years, gravity causes pockets of dense matter inside the nebula to collapse under their own weight. After enough time has past a Protostar will eventually emerge.</p>
				</div>
			  </div>
			  <div class="slide">
				<img src="/images/Astronomy/protostar.jpg" alt="">
				<div class="info">
					<h2>Protostars</h2>
					<p>A protostar is a very young star that is still gathering mass from its parent molecular cloud. The protostellar phase is the earliest one in the process of stellar evolution and represents a star’s nascent phase. </p>	        	
				</div>
			  </div>
			  <div class="slide">
				<img src="/images/Astronomy/main_sequence.png" alt="">
				<div class="info">
					<h2>Main Sequence Star</h2>
					<p>Millions of years later, when the core temperature climbs to about 27 million degrees Fahrenheit, nuclear fusion begins, igniting the core and setting off the next—and longest—stage of a star’s life, known as its main sequence. Most of the stars in our galaxy, including the sun, are categorized as main sequence stars.</p>
				</div>
			  </div>
			  <div class="slide">
				<img src="/images/Astronomy/red_giant.jpg" alt="">
				<div class="info">
					<h2>Red Giant/Supergiant</h2>
					<p>Once a star that has exhausted the supply of hydrogen in its core and has begun thermonuclear fusion of hydrogen in a shell surrounding the core it will become a Red Giant, it get its name from their rapid expandsion and characteristic red hue.</p>
				</div>
			  </div>
			  <div class="slide">
				<img src="/images/Astronomy/supernova.jpg" alt="">
				<div class="info">
					<h2>Supernova</h2>
					<p>After a star finally exhausts the last of its fuel it finally erupts in a massive explosion of matter and light know as a Supernova, which can be so bright as to outshine galaxies. After this the star will turn into either a Neutron star, White dwarf or a Black hole.  </p>	        	
				</div>
			  </div>
			  <div class="navigation">
				<div class="btn active"></div>
				<div class="btn"></div>
				<div class="btn"></div>
				<div class="btn"></div>
				<div class="btn"></div>
			  </div>
		</div-->



		</div>
	</div>

	<div class="topic_section" id="topic_3">

		<div class="topic_block">

			<h1>ENERGY</h1>

			<h2>WHAT IS ENERGY ALL ABOUT ?</h2>

			<img src="/images/physics/energy (3).jpg" alt="">

			<h3>
				<p>Capacity to be able to perform work. It can neither be created nor destroyed.</p>

				<p>Unit of energy: Energy is generally defined as the potential to do work or produce heat.
					This definition causes the SI unit for energy is the same as the unit of work – the joule (J).
					Joule is a derived unit of energy and it is named in honor of James Prescott Joule and his
					experiments on the
					mechanical equivalent of heat. In more fundamental terms, 1 joule is equal to: </p>
			</h3>

			<img style="weight: 50px; height: 50px;" src="/images/physics/joule.png" alt="">

			<h2>FORM OF ENERGY</h2>

			<p>
			<h3>
				<ol>
					<li>Mechanical Energy</li>
					<li>Chemical Energy</li>
					<li>Sound Energy</li>
					<li>Thermal Energy</li>
					<li>Kinetic Energy</li>
					<li>Potential Energy</li>
				</ol>
			</h3>
			</p>

			<h2>1. MECHANICAL ENERGY</h2>

			<img src="/images/physics/mechanicalenergy.jpg" alt="">
			<p>
			<h3>
				<ul>
					<li>The energy of motion, or the energy of an object that moves.</li>
					<li>Sun of kinetic and potential energy.</li>

				</ul>
			</h3>
			</p>

			<h2>2. CHEMICAL ENERGY</h2>

			<img src="/images/physics/chemicalenergy.jpg" alt="">
			<p>
			<h3>
				<ul>
					<li> A form of potential energy found within chemical bonds, atoms, and subatomic particles.</li>
					<li> It is a n energy that can change its course in a period of time.</li>
					<li> energy stored within chemicals, which makes its energy inside atoms and molecules.</li>

				</ul>
			</h3>
			</p>

			<h2>3. SOUND ENERGY</h2>

			<img src="/images/physics/soundmusic.jpg" alt="">
			<p>
			<h3>
				<ul>
					<li> The result when a force, either sound or pressure, makes an object or substance vibrate.</li>

				</ul>
			</h3>
			</p>

			<h2>4. THERMAL ENERGY</h2>

			<img src="/images/physics/Fire.jpg" alt="">
			<img src="/images/physics/Flame.jpg" alt="">
			<p>
			<h3>
				<ul>
					<li> energy contained within a system that is responsible for its temperature.</li>

				</ul>
			</h3>
			</p>

			<h3>3 TYPES OF HEAT TRANSFER AND THEIR SAMPLE</h3>

			<p>
			<h3>
				<ol>
					<li>Conduction</li>
					<video width="530" height="380" autoplay muted>
						<source src="/images/physics/ConductionThermal.mp4" type="video/mp4">
					</video>
					<li>Convection</li>
					<video width="530" height="380" autoplay muted>
						<source src="/images/physics/ConvectionThermal.mp4" type="video/mp4">
					</video>
					<li>Radiation</li>
					<img src="/images/physics/radiation.jpg">
				</ol>
			</h3>
			</p>


			<h2>5. KINETIC ENERGY</h2>

			<video width="530" height="380" autoplay muted>
				<source src="/images/physics//kineticenergy.mp4" type="video/mp4">
			</video>
			<p>
			<h3>
				<ul>
					<li> the energy possessed by an object due to its motion or movement.</li>
					li> Energy of motion.</li>
					</li>
					<li>Sun of kinetic and potential energy.</li>

				</ul>
			</h3>
			</p>

			<h2>6. POTENTIAL ENERGY</h2>

			<img src="/images/physics/mechanicalenergy.jpg" alt="">
			<p>
			<h3>
				<ul>
					<li>The energy of motion, or the energy of an object that moves.</li>
					<li>Sun of kinetic and potential energy.</li>

				</ul>
			</h3>
			</p>

			<p>
			<h3>TYPES OF POTENTIAL ENERGY
				<ol>
					<li>Gravitational Potential Energy<small> – it is a potential energy of an object with its distance
							from earth caused by the pull of gravity.</small></li>
					<li>Elastic Potential Energy <small>– energy stored in stretched or compressed elastic
							materials.</small></li>
				</ol>

			</h3>

			</p>


			<h2>THERE'S MORE</h2>

			<p>There's so much to learn about our home and it companion that we couldn't possibly cover it all, so to
				send you off is once again our friends from Kurzgesagt!</p>

			<iframe src="https://www.youtube.com/embed/JGXi_9A__Vc">
			</iframe>

		</div>

	</div>
	<EndChapter currentChapter="PHYSICS" nextChapter="technology" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: {
        no: 6,
        title: 'PHYSICS',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
      },
      pics: [
        '/images/physics/ball.jpg',
        '/images/physics/car.jpg',
        '/images/physics/pen.jpg',
        '/images/physics/skydive.jpg',
        '/images/physics/ball.jpg',
      ],
    }
  },
  computed: {
    mode() {
      return this.$store.state.mode.mode
    },
  },
  mounted() {
    if (this.mode == '') this.$router.push('/get-started')
  },
}
</script>

<style scoped>
@import '~/assets/css/astronomy.css';
</style>