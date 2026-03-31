<template>
  <metainfo />
  <div ref="pageShell" class="page-shell">
    <div ref="sheet" class="sheet sheet-content">
      <section class="row header">
        <aside><h1>Benjamin Pilgrim</h1></aside>
        <main class="header-meta">
          <links/>
        </main>
      </section>
      <section>
        <role-block>
        <template #date>Feb 2024 - Present</template>
        <template #header>
          <b><a href="https://www.risqcapital.com/">RISQ Research</a></b>
          <span>Senior DevOps Engineer</span>
        </template>
        <ul>
          <li>
            Developed a custom
            <acronym title="Continuous Integration / Continuous Delivery">CI/CD</acronym>
            framework in Python for fast, reproducible local and GitHub Actions builds and
            deployments, instrumented with OpenTelemetry, underpinned by open-source libraries.
            <repo-link href="https://github.com/risqcapital/pyhcl2">pyhcl2</repo-link>
            <repo-link href="https://github.com/risqcapital/pyagnostics">pyagnostics</repo-link>
          </li>
          <li>
            Delivered a custom <acronym title="Amazon Web Services">AWS</acronym> Well-Architected
            landing zone, leveraging account isolation boundaries for security and compliance
            controls using Terraform and AWS Organizations.
          </li>
          <li>
            Designed <acronym title="Identity and Access Management">IAM</acronym> architecture for
            humans, workloads, pipelines, and cloud and co-located on-premises instances, enforcing
            least privilege through <acronym title="Attribute-Based Access Control">ABAC</acronym>,
            <acronym title="OpenID Connect">OIDC</acronym>, and permission boundaries.
          </li>
          <li>
            Planned, implemented and administered RISQ Group's Information Security Management
            System, to comply with external standards within a regulated industry.
          </li>
          <li>
            Architected RISQ's global hybrid network using Cloud WAN,
            <acronym title="IP Address Manager">IPAM</acronym>,
            <acronym title="Virtual Private Network">VPN</acronym>s, and Route 53 for DNS,
            connecting cloud and co-located environments.
          </li>
          <li>
            Defined reusable Terraform modules implementing consistent patterns for golden-path
            building blocks. These include short-lived scheduled and event-driven workloads managed
            through Step Functions and <acronym title="Elastic Container Service">ECS</acronym>, as
            well as stateful persistent low-latency trading systems run as systemd services,
            deployed via custom <acronym title="Systems Manager">SSM</acronym> associations.
          </li>
          <li>
            Built a data platform for batch and streaming time-series market data, with
            metadata-driven integrity and retry handling.
          </li>
          <li>
            Monitored trading infrastructure using CloudWatch and Grafana, with structured logs
            centralised to S3 and metrics dashboards providing operational visibility.
          </li>
          <li>
            Designed and developed a customer facing gaming web application using React and Convex
            under tight timelines.

            <!--            come back to this, seems underselling-->
          </li>
          <li>
            Saved £20,000+ in <acronym title="Amazon Web Services">AWS</acronym> spend through
            infrastructure and workload cost optimisation.
          </li>
          <li>
            Designed and supervised
            <Acronym title="Extract, Transform, Load">ETL</Acronym> pipelines managing weekly
            transactions worth over £6,000,000 with human-in-the-loop approval.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Mar 2022 - Nov 2023</template>
        <template #header>
          <b><a href="https://www.mmtdigital.co.uk/">MMT Digital</a></b>
          <span>Cloud Systems Engineer</span>
          <b><a href="https://careers.vodafone.co.uk/digital-consumer">Vodafone</a></b>
          <span>Senior DevOps Engineer</span>
        </template>
        <ul>
          <li>
            One of nine finalists for
            <a
              href="https://web.archive.org/web/20231210083101/https://event.computing.co.uk/digitaltechnologyleaderswards2023/en/page/2023-finalists"
              >Young Digital Professional of the Year</a
            >
            in the 2023 Computing Digital Technology Leaders Awards.
          </li>
          <li>
            Drafted into a hand-selected specialist team to drive strategy and resolve key blockers
            on a global Internal Developer Platform.
          </li>
          <li>
            Led development of control-plane interfaces for the platform, built on serverless
            technologies.
          </li>
          <li>
            Led design, prototyping, and development of an Azure DevOps Pipelines framework for
            standardised multi-environment service delivery, deploying Terraform infrastructure and
            Helm charts to Kubernetes clusters.
          </li>
          <li>
            Reduced time to first deployment for new services by 95%+, enabling teams to provision
            secure-by-design parameterised repository templates including pipeline definitions,
            Terraform infrastructure, Helm charts, and baseline application code.
          </li>
          <li>
            Maintained globally adopted Terraform modules for
            <acronym title="Amazon Web Services">AWS</acronym> components, including API Gateway and
            static site hosting, driving efficiency through reuse.
          </li>
          <li>
            Used Datadog to investigate and resolve production issues across the platform, spanning
            metrics, distributed traces, and logs.
          </li>
          <li>
            Improved team code quality through adoption of automated testing, linting and
            type-checking, and mentored junior engineers through pair programming and code reviews.
          </li>
          <li>
            Operated in a multicloud environment including
            <acronym title="Google Cloud Platform">GCP</acronym>, resolving production client
            onboarding issues in Apigee API Gateway.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Jul 2019 - Mar 2022</template>
        <template #header>
          <b><a href="https://www.htk.co.uk/">HTK</a></b>
          <span>Software Engineer</span>
        </template>
        <ul>
          <li>
            Contributed as a backend engineer to distributed systems including a real-time
            transaction and promotion rules engine and a multi-tenant loyalty and marketing
            automation platform.
          </li>
          <li>
            Developed third-party integrations and
            <acronym title="Extract, Transform, Load">ETL</acronym> pipelines for customer
            transaction data, including <acronym title="Point of Sale">POS</acronym> systems.
          </li>
          <li>
            Delivered a multi-account <acronym title="Amazon Web Services">AWS</acronym> landing
            zone proof-of-concept in Terraform for a greenfield data lake-house platform, expanding
            my skill-set into AWS and cloud technologies.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #header>
          <b>Consulting &<br />Personal Projects</b>
        </template>
        <ul>
          <li>
            Consulted on cloud architecture for a
            <Acronym title="Anti-money laundering">AML</Acronym> transaction monitoring platform.
          </li>
          <li>
            Built open-source components for managing VYoS routers at scale.
            <repo-link href="https://github.com/TGNThump/terraform-provider-vyos"
              >terraform-provider-vyos</repo-link
            >
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #header>
          <b><a href="https://www.liverpool.ac.uk/">University of Liverpool</a></b>
        </template>
        <ul>
          <li>BSc (Hons) Computer Science (First Class)</li>
        </ul>
        </role-block>
      </section>
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Acronym from './components/Acronym.vue'
import Links from './components/Links.vue'
import RepoLink from './components/RepoLink.vue'
import RoleBlock from './components/RoleBlock.vue'

export default {
  components: { Acronym, Links, RepoLink, RoleBlock },
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
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Montserrat&display=swap');
@import 'paper-css/paper.css';

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
}

@page {
  size: A4;
}

body.A4 .sheet {
  height: 297mm !important;
}

.sheet-content {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #3a446e 0, #3a446e 27%, #ffffff 27%, #ffffff 100%);
}

body {
  @media print {
    background: white;
  }
  @media screen {
    background: #484349 !important;
  }
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

@media screen {
  html,
  body {
    overflow: auto;
  }

  body {
    padding: 0;
  }

  .page-shell {
    width: max(100vw, calc(210mm + 16px));
    min-width: max-content;
    margin: 8px 0 20px;
    padding: 0 8px;
  }

  .page-shell > .sheet-content {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 auto !important;
  }
}

@media print {
  .page-shell {
    padding: 0;
  }
}

a,
a:hover {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  font-style: normal;
}

abbr[title] {
  text-decoration: none;
  border-bottom: 0;
  cursor: inherit;
}

@media screen {
  abbr[title]:hover {
    cursor: help;
    text-decoration: underline dotted rgba(58, 68, 110, 0.35);
    text-underline-offset: 0.12em;
  }
}

.repo-pill,
.repo-pill:hover {
  display: inline-flex;
  align-items: center;
  gap: 0.28em;
  vertical-align: baseline;
  margin: 0 0.12em 0 0;
  padding: 0.01em 0.28em;
  border: 1px solid rgba(58, 68, 110, 0.1);
  border-radius: 999px;
  background: rgba(58, 68, 110, 0.02);
  color: inherit;
  font-size: 0.88em;
  white-space: nowrap;
}

.repo-pill > i {
  font-size: 0.76em;
  line-height: 1;
  color: #2b3559;
  opacity: 1;
}

.muted {
  opacity: 0.75;
}

.sheet,
section {
  display: flex;
  flex-direction: column;

  > *:last-child {
    flex-grow: 1;
  }
}

.row:not(.header) {
  margin-bottom: 1.4em;
}

.row {
  display: grid;
  grid-template-columns: 27% auto;
}

.header {
  align-items: start;
  margin-bottom: 0.9em;
}

.header > aside,
.header > main {
  padding-top: 1.15rem;
  padding-bottom: 1.15rem;
}

.header > aside {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem;
}

.header-meta {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 0;
}

//section:last-of-type > .row:not(:last-child) main {
//  padding-bottom: 1em;
//}

aside,
main {
  padding: 0 15px 0 15px;

  > * {
    padding-bottom: 0.5em;
  }
}

//.sheet-content > .row:first-child aside,
//.sheet-content > .row:first-child main {
//  padding-top: $header-gap;
//}

aside {
  background: transparent;
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
  font-family: 'Manrope', sans-serif;
  padding: 0;
  line-height: 2rem;
  font-size: 1.8rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  padding-left: 0;
  margin-bottom: 5px;
}

main > header b {
  font-weight: 600;
  color: inherit;
}
</style>
