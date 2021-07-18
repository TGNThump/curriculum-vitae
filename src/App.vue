<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Benjamin Pilgrim</h1></aside>
      <main style="display: flex; flex-direction: column; text-align: right">
        <div>ben@pilgrim.me.uk</div>
        <div>07950 365848</div>
        <div>TGNThump</div>
      </main>
    </section>
    <section>
      <div class="row">
        <aside><h2>Employment</h2></aside>
      </div>
      <div class="row">
        <aside>2019 - Present</aside>
        <main>
          <header>
            <a href="https://www.htk.co.uk/">HTK</a> - Software Engineer
          </header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 5px">
              Worked as the technical owner, technical designer and developer of
              a distributed event-driven customer journey automation
              application.
            </li>
            <li style="margin-bottom: 5px">
              As part of a team, developed Spring Boot services and worked on
              internal and external APIs.
            </li>
            <li style="margin-bottom: 5px">
              Guided junior developers on new technologies and code quality via
              pair-programming and code reviews.
            </li>
            <li style="margin-bottom: 5px">
              Assisted the operations team with investigating and resolving
              production incidents.
            </li>
            <li style="margin-bottom: 5px">
              Designed and developed frontend user interface pages, including a
              complex promotion builder with a drag-n-drop nested rule/segment
              editor.
            </li>
          </ul>
          <ul class="tech-list">
            <li style="--color: #b07219">Java</li>
            <li style="--color: #f1e05a">JavaScript</li>
            <li style="--color: #ff9900">AWS</li>
            <li style="--color: #80ea6e">Spring</li>
            <li style="--color: #25a162">JUnit</li>
            <li style="--color: #ff6804">Maven</li>
            <li style="--color: #34495e">Vue.js</li>
            <li style="--color: #e535ab">GraphQL</li>
            <li style="--color: #cea328; grid-column: span 2">
              Tomcat & Jakarta Servlets
            </li>
            <li style="--color: #363d3f">Kafka</li>
            <li style="--color: #328fbf">Storm</li>
            <li style="--color: #f98200; grid-column: span 2">
              Jakarta Server Faces
            </li>
            <li style="--color: #0067b8">T-SQL</li>
            <li style="--color: #13aa52; grid-column: span 2">
              MongoDB & DocumentDB
            </li>
            <li style="--color: #d24939">Jenkins</li>
            <li style="--color: #93b0da">SVN</li>
            <li style="--color: #844fba">Terraform</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2018 - 2019</aside>
        <main>
          <header>
            <a href="https://www.liverpoolguild.org/"
              >Liverpool Guild of Students</a
            >
            - Student Staff Theatre Technician
          </header>
          <p>
            Student Staff Lighting Operator at Liverpool Guild of Students,
            working with student societies and other organisations on musicals
            and events.
          </p>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Personal Projects</h2></aside>
      </div>
      <div class="row">
        <aside>ActivityStreams4J</aside>
        <main>
          <p>
            A work-in-progress Java library consisting of DTOs for the W3C
            ActivityStreams 2.0 specification, along with the ActivityPub
            extension.
          </p>
          <ul class="tech-list">
            <li style="--color: #b07219">Java</li>
            <li style="--color: #25a162">JUnit</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>scribbled.by</aside>
        <main>
          <p>
            A collaborative note-taking web application designed and developed
            as part of my University Final Year Project.
          </p>
          <ul class="tech-list">
            <li style="--color: #026e00">Node.js</li>
            <li style="--color: #e535ab">GraphQL</li>
            <li style="--color: #34495e">Vue.js</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>hub.pilgrim.me.uk</aside>
        <main>
          <p>
            Personal home-lab with 20+ services, deployed by an infrastructure
            as code stack. Services are listed on an open-sourced start-page
            that dynamically discovers services exposed through Traefik reverse
            proxy via the docker API.
          </p>
          <ul class="tech-list">
            <li style="--color: #0db7ed">Docker</li>
            <li style="--color: #d24939">Jenkins</li>
            <li style="--color: #110325">Traefik</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>EV3 SDK</aside>
        <main>
          <p>
            A software development kit for the EV3 Mindstorm Robots that
            facilitates the study of mobile computing problems, such as odometry
            tracking, sensor data modeling and multi-agent systems.
          </p>
          <ul class="tech-list">
            <li style="--color: #b07219">Java</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>OneReset</aside>
        <main>
          <p>
            A self-service password reset kiosk system for One sixth form. The
            kisok application allows a student at One to reset their active
            directory password using their NFC ID card.
          </p>
          <ul class="tech-list">
            <li style="--color: #178600">C#</li>
            <li style="--color: #4f5d95">PHP</li>
          </ul>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Education</h2></aside>
      </div>
      <div class="row">
        <aside>2016 - 2019</aside>
        <main>
          <header>
            <a href="https://www.liverpool.ac.uk/">University of Liverpool</a> -
            BSc (Hons) Computer Science (Class I)
          </header>
          <small>
            Modules include: Programming in Java, Database Development,
            Operating Systems, Human-Centric Computing, Algorithms, Professional
            Skills, Software Engineering, Artificial Intelligence,Multi-Agent
            Systems, Mobile Computing, Robotics
          </small>
        </main>
      </div>
      <div class="row">
        <aside>2014 - 2016</aside>
        <main>
          <header>
            <a href="https://www.suffolkone.ac.uk/">One Sixth Form</a>
          </header>
          <small>
            A Levels: Computing (B), Electronics (A), Mathematics (D)
          </small>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Volunteering</h2></aside>
      </div>
      <div class="row">
        <aside>2017 - 2019</aside>
        <main>
          <header>
            <a href="https://www.liverpoolguild.org/groups/lgbt-society-4419"
              >LGBT+ Society</a
            >
            at Liverpool Guild of Students
          </header>
          <p>Co-President (2018 - 2019) and Social Secretary (2017-2018)</p>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Benjamin Pilgrim - Curriculum Vitae",
      bodyAttrs: {
        class: "A4",
      },
    });
  },
  mounted() {
    this.$nextTick(() => document.body.dispatchEvent(new Event("view-ready")));
  },
};
</script>

<style lang="scss">
$primary: #3a446e;

@import "~normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import "~paper-css/paper.css";

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@page {
  size: A4;
}

body {
  @media print {
    zoom: 122.5%;
    background: white;
  }
  @media screen {
    background: #484349 !important;
  }
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

a,
a:hover {
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  font-style: normal;
}

.sheet,
section {
  display: flex;
  flex-direction: column;

  > *:last-child {
    flex-grow: 1;
  }
}

.row {
  display: grid;
  grid-template-columns: 27% auto;
}

aside,
main {
  padding: 0.7em 1em 0 15px;

  > * {
    padding-bottom: 0.6em;
  }
}

aside {
  background: #3a446e;
  color: #ffffff;
  text-align: right;
  padding-right: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0.2em 0 0;
}

h1 {
  padding-top: 0.4em;
  padding-bottom: 0.2em;
  line-height: 2.4rem;
  font-size: 2rem;
}

.tech-list {
  display: grid;
  list-style: none;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-flow: dense;

  li {
    flex-shrink: 0;
  }

  li::before {
    display: block;
    content: " ";
    background-color: var(--color);
    height: 0.9em;
    width: 0.9em;
    border-radius: 100%;
    margin: 0.1em 0.5em 0.1em 0.1em;
    float: left;
  }
}
</style>
