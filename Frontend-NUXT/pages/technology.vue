<template>
  <div class="body">
    <NavHeader />
    <ChapterHeader :chapter="intro">
      <Slider :pics="pics" />
    </ChapterHeader>
    <div class="topic_section" id="topic_1">
      <div class="topic_block" id="page_greeting">
        <h1>Technology</h1>

        <video width="330" height="180" autoplay controls>
          <source src="images/technology/tech.mp4" type="video/mp4" />
        </video>

        <div class="items-center">
          <p class="txt-center">
            Technology is the development over time of systematic techniques for
            making and doing things. The term technology, a combination of the
            Greek technē, “art, craft,” with logos, “word, speech,” meant in
            Greece a discourse on the arts, both fine and applied.
          </p>
        </div>
      </div>

      <div class="topic_block" id="">
        <h1>HISTORY OF TECHNOLOGY</h1>

        <iframe
          width="560"
          height="515"
          src="https://www.youtube.com/embed/sY7KaezrKXM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br /><br />
        <div class="items-center">
          <p>
            When technology first appeared in English in the 17th century, it
            was used to mean a discussion of the applied arts only, and
            gradually these “arts” themselves came to be the object of the
            designation. By the early 20th century the term embraced a growing
            range of means, processes, and ideas in addition to tools and
            machines. By mid-century technology was defined by such phrases as
            “the means or activity by which man seeks to change or manipulate
            his environment.”
          </p>
        </div>

        <img src="images/technology/computers.jpg" />

        <h1>Computers</h1>

        <div class="two_column">
          <p>
            A computer is a programmable device that stores, retrieves, and
            processes data. The term "computer" was originally given to humans
            (human computers) who performed numerical calculations using
            mechanical calculators, such as the abacus and slide rule. The term
            was later given to mechanical devices as they began replacing human
            computers.
          </p>
          <img src="images/technology/charles.jpg" />
        </div>

        <div class="topic_section" id="topic_1">
          <div class="items-center">
            <p class="txt-center">
              Charles Babbage KH FRS was an English polymath. A mathematician,
              philosopher, inventor and mechanical engineer, Babbage originated
              the concept of a digital programmable computer. Babbage is
              considered by some to be "father of the computer".
            </p>
          </div>

          <img src="images/technology/firstcom.jpg" />
        </div>

        <div class="topic_section" id="topic_1">
          <div class="topic_block">
            <h1>TYPES OF COMPUTERS</h1>

            <img src="images/technology/types-of-computer.png" />
            <div class="items-center">
              <p>
                A specialized computer is like a general-purpose computer but is
                designed only to perform one or a few different tasks. See our
                specialized computer for further information and examples of
                these computers. When talking about a computer or a "PC," you're
                usually referring to a desktop computer found in a home or
                office. However, the lines of what makes these computers are
                blurring. Below are different examples of what's considered a
                computer today.

                <br /><br />
                Supercomputers are very expensive and very fast. They are the
                most powerful computers we have in the world. Mainframe
                computers are large and expensive computers that are capable of
                supporting thousands of users simultaneously. Minicomputers are
                mid-sized computers. In terms of size and power, they are ranked
                below mainframes.A microcomputer, also known as a personal
                computer, is designed to be used by one user at a time.
              </p>
            </div>
          </div>

          <br /><br />
          <br /><br />

          <div class="topic_section" id="topic_2">
            <div class="topic_block">
              <h1>INTERNET</h1>

              <img src="images/technology/internet.jpg" />
              <div class="items-center">
                <p>
                  Internet is a global computer network providing a variety of
                  information and communication facilities, consisting of
                  interconnected networks using standardized communication
                  protocols. The Internet started in the 1960s as a way for
                  government researchers to share information. Computers in the
                  '60s were large and immobile and in order to make use of
                  information stored in any one computer, one had to either
                  travel to the site of the computer or have magnetic computer
                  tapes sent through the conventional postal system.
                </p>
              </div>

              <h2>HISTORY OF INTERNET</h2>

              <p>
                ARPANET adopted TCP/IP on January 1, 1983, and from there
                researchers began to assemble the “network of networks” that
                became the modern Internet. The online world then took on a more
                recognizable form in 1990, when computer scientist Tim
                Berners-Lee invented the World Wide Web. While it’s often
                confused with the internet itself, the web is actually just the
                most common means of accessing data online in the form of
                websites and hyperlinks.
              </p>
              <br /><br />
              <iframe
                width="560"
                height="560"
                src="https://www.youtube.com/embed/Dxcc6ycZ73M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <br />

              <h2>MICROSOFT</h2>

              <p>
                Microsoft Corporation is an American multinational technology
                corporation which produces computer software, consumer
                electronics, personal computers, and related services.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2W0T2qGZ9Dc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="topic_section" id="topic_3">
              <div class="topic_block">
                <h2>THERE'S MORE</h2>

                <p>
                  <!-- There's so much to learn about technology and the topic involves
                  that we couldn't possibly cover it all, so to send you off,
                  here is a video from Bozeman! -->
                </p>

                <iframe src="https://www.youtube.com/embed/XTlWNWeencw">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EndChapter currentChapter="TECHNOLOGY" nextChapter="" />
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.state.mode.mode
    },
  },
  data() {
    return {
      intro: {
        no: 6,
        title: 'TECHNOLOGY',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
      },
      pics: [
        '/images/technology/firstcom.jpg',
        '/images/technology/hand.jpg',
        '/images/technology/phones.jpg',
        '/images/technology/turbine.jpg',
        '/images/technology/firstcom.jpg',
      ],
    }
  },
  mounted() {
    if (this.mode == '') this.$router.push('/get-started')
  },
}
</script>

<style scoped>
@import '~/assets/css/astronomy.css';
.txt-center {
  text-align: center;
}
.items-center {
  display: flex;
  justify-content: center;
}
.topic_block iframe {
  height: 400px !important;
}
</style>