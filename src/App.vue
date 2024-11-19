<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Benjamin Pilgrim</h1></aside>
      <links />
    </section>
    <section>
      <div class="row">
        <aside>Feb 2024 - Present</aside>
        <main>
          <header>
            <b><a href="https://risqcapital.com">RISQ Capital</a></b> - Senior DevOps Engineer
          </header>
          <ul>
            <li>Spearheaded delivery of a DevOps Strategy focused around five key initiatives; Foundational Infrastructure, Platform, Release Engineering, Security & Compliance and Site Reliability Engineering</li>
            <li>Developed a AWS well-architected multi-account landing zone using Terraform and AWS CloudFormation, Organizations, CloudTrail and Config</li>
            <li>Ensured people, pipelines and machines can securely access AWS APIs in a least-privileged manner using IAM, Identity Center, Systems Manager and Cognito</li>
            <li>Designed and implemented a global hybrid network built around AWS Cloud WAN, connecting VPCs in multiple regions, as well as co-located networks</li>
            <li>Facilitated rapid iteration and repeatable delivery through development of a python-based CI/CD toolchain that can be ran locally for rapid development iteration and in GitHub Actions for safe production deployments</li>
            <li>Utilised AWS Systems Manager to provision and manage long-running tasks in performance-critical systems, on EC2 and managed hybrid instances and standardised architecture for scheduled and event driven tasks using containers, EventBridge, Step Functions and ECS</li>
            <li>Reduced monthly AWS spend by 5% through targeted cost optimizations</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Mar 2022 - Nov 2023</aside>
        <main>
          <header>
            <b><a href="https://www.mmtdigital.co.uk/">MMT Digital</a></b> - Cloud Systems Engineer
          </header>
          <header>
            <b><a href="https://careers.vodafone.co.uk/digital-consumer">Vodafone</a></b> - Senior DevOps
            Engineer <span style="opacity: 0.75">(via MMT Digital)</span>
          </header>
          <ul>
            <li>
              Helped to define and implement a strategy for the creation of a global Internal Developer Platform, driving internal efficiency while reducing time-to-market
            </li>
            <li>
              Delivered an end-to-end proof of concept, successfully onboarding our first local market team, demonstrating value to the wider business and providing rapid feedback to component teams
            </li>
            <li>
              Designed and lead development of serverless control plane APIs for the platform, using AWS Lambda, API Gateway, Step Functions, DynamoDB and S3
            </li>
            <li>Maintained Terraform modules for Lambda, API Gateway and CloudFront used by multiple teams across Vodafone</li>
            <li>
              Worked across team boundaries, delegating where necessary, to mitigate blockers to strategic delivery and ensure the platform was delivered on time and to a high standard
            </li>
            <li>
              Lead the design and development of an Azure Devops based CI/CD/CT framework, enabling teams to deploy their services to multiple environments with minimal configuration
            </li>
            <li>
              Developed a CLI tool and web interface for parameterised service templates, enabling deployment of new services, complete with baseline CI/CD, infrastructure and code in minutes rather than days
            </li>
            <li>
              Guided my team to improve code quality and reliability through automated testing, linting, formatting and type-checking at CI time
            </li>
            <li>
              Mentored junior and mid level engineers through pair programming, code reviews, helping to improve their
              technical skills and confidence
            </li>
            <li>Shortlisted as a finalist for <a href="https://event.computing.co.uk/digitaltechnologyleaderswards2023/en/page/2023-finalists">Young Digital Professional of the Year</a> in the 2023 Computing Digital Technology Leaders Awards</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Jul 2019 - Mar 2022</aside>
        <main>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Software Engineer
          </header>
          <ul>
            <li>Worked on a variety of services and projects, primarily as a Java backend engineer on an event-driven multi-tenant loyalty and marketing automation platform</li>
            <li>Developed a real-time transaction and promotion rules engine using Spring Boot, Kafka, Storm and DocumentDB</li>
            <li>Wrote T-SQL migration scripts and helped maintain schemas and stored procedures for multiple large databases</li>
            <li>
              Developed a proof of concept for a multi-account AWS architecture using Terraform for a greenfield data lakehouse platform, driving my interest in cloud engineering
            </li>
            <li>
              Designed and developed frontend user interface pages and components, including a
              complex promotion builder with a 'drag-n-drop' nested condition editor for use by
              customers
            </li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2016 - 2019</aside>
        <main>
          <header>
            <b><a href="https://www.liverpool.ac.uk/">University of Liverpool</a></b>
            - BSc (Hons) Computer Science (First Class)
          </header>
        </main>
      </div>
    </section>
<!--    <div class="row">-->
<!--      <aside></aside>-->
<!--      <main style="display: flex; align-items: center; justify-content: center;">-->
<!--        <img alt="Cloud Essentials" style="width: 75px;" src="https://images.credly.com/size/340x340/images/ec621e2a-c8f0-4459-806c-ae11829d372a/image.png"/>-->
<!--        <img alt="Architecting" style="width: 75px;" src="https://images.credly.com/size/340x340/images/519a6dba-f145-4c1a-85a2-1d173d6898d9/image.png"/>-->
<!--        <img alt="Serverless" style="width: 75px;" src="https://images.credly.com/size/340x340/images/e07c6cc4-b737-4d7e-8ce8-66b6b7a60367/image.png"/>-->
<!--        <img alt="Networking Core" style="width: 75px;" src="https://images.credly.com/size/340x340/images/e75f222b-7f75-4d7b-8a6a-67d68aa59d62/image.png"/>-->
<!--      </main>-->
<!--    </div>-->
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Links from './components/Links.vue'

export default {
  components: { Links },
  setup() {
    useMeta({
      title: 'Benjamin Pilgrim - Curriculum Vitae',
      bodyAttrs: {
        class: 'A4'
      }
    })
  },
  mounted() {
    this.$nextTick(() => document.body.dispatchEvent(new Event('view-ready')))
  }
}
</script>

<style lang="scss">
$primary: #3a446e;

@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import 'paper-css/paper.css';

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

body.A4 .sheet {
  height: 297mm !important;
}

body {
  @media print {
    zoom: 122.5%;
    background: white;
  }
  @media screen {
    background: #484349 !important;
  }
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

a,
a:hover {
  font-weight: inherit;
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
  font-family: 'Roboto', sans-serif;
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
    display: flex;
  }

  &.squares {
    padding-bottom: 10px;

    li::before {
      border-radius: 20%;
    }
  }

  li::before {
    display: block;
    content: ' ';
    background-color: var(--color);
    height: 0.9em;
    width: 0.9em;
    border-radius: 100%;
    margin: 0.1em 0.5em 0.1em 0.1em;
    float: left;
  }
}

ul {
  margin: 0 15px;
}

li {
  margin-bottom: 5px;
}
</style>
