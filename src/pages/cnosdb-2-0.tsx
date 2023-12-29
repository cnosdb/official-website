import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './cnosdb-2-0.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout
      title={`CnosDB 2.0 - CnosDB`}
      description="CnosDB | A high-performance, highly-compressed, highly available distributed cloud-native time-series database - At the time-series database level, it supports: strong scalability; compute/storage separation; balanced storage performance and cost; vectorized query support; support for multiple time-series protocols; and external full ecosystem support. At the cloud-native level, it supports: high availability; multi-tenancy with pay-as-you-go pricing; Change Data Capture (CDC); configurable requirements; cloud-edge coordination; and cloud-native ecosystem integration.">
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.innerContainer}>
            <h1 className={styles.headerTitle}>Cloud Native Time-Series Database <br />CnosDB 2.0 <span className={styles.spacerInner}></span></h1>
          </div>
        </div>
        <div className={clsx(styles.innerContainer, styles.cardBox, styles.flexbox)}>
          <div className={styles.widgetWrap}>
            <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/community-4.svg" title="community-4.svg" alt="community-4.svg" />
            <div className={styles.widgetContainer}>
              <h2 className={styles.cardHeadingTitle}>Community Edition</h2>
              <h3 className={styles.cardHeadingSubTitle}>Free, open source, eco-friendly</h3>
            </div>

            <ul className={styles.iconList}>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>A fully open source product based on the Rust language, integrating with the existing time-series ecosystem</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Use distributed clusters for free with no functional limitations</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Rapid product iteration prioritizes ultimate product features</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Supported by a wide range of open source community users and developer communities</span>
              </li>
            </ul>
            <div className={styles.flexbox}>
              <a href="https://github.com/cnosdb/cnosdb" target="_blank" className={styles.buttonLink}>
                View Source Code
              </a>
              <Link to="/download" className={clsx(styles.buttonLink, styles.buttonLinkPrimary, styles.ml20)} >
                Download
              </Link>
            </div>

          </div>
          <div className={styles.widgetWrap}>
            <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/enterprise-3.svg" title="enterprise-3.svg" alt="enterprise-3.svg" />
            <div className={styles.widgetContainer}>
              <h2 className={styles.cardHeadingTitle}>Enterprise Edition</h2>
              <h3 className={styles.cardHeadingSubTitle}>Private cloud, expert support</h3>
            </div>

            <ul className={styles.iconList}>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Cloud-native friendly, supports various server and container environments</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>High-performance, high-availability distributed clusters with customizable management and operation tools</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Product fault support with up to 7x24 response time</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Flexible pricing model, low-cost access to Enterprise Edition</span>
              </li>
            </ul>
            <div className={styles.flexbox}>
              <a className={clsx(styles.buttonLink, styles.buttonLinkPrimary)} onClick={handleShow} >
                Contact Us
              </a>
            </div>

          </div>
          <div className={styles.widgetWrap}>
            <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/CnosDB-Cloud.svg" title="CnosDB-Cloud.svg" alt="CnosDB-Cloud.svg" />
            <div className={styles.widgetContainer}>
              <h2 className={styles.cardHeadingTitle}>CnosDB Cloud</h2>
              <h3 className={styles.cardHeadingSubTitle}>Serverless, Out-of-the-box</h3>
            </div>

            <ul className={styles.iconList}>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Cloud-native serverless, fully leveraging the convenience of cloud infrastructure and integrating seamlessly into cloud-native ecosystems</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Out-of-the-box, elastic scaling support, supporting bidirectional resource expansion of storage and computing</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Native multi-tenant and pay-as-you-go models for lower costs</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Liberate operations engineers from heavy workloads and easily manage cloud services</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Integrated with cloud-native OLAP/CIoudAl data ecosystem</span>
              </li>
            </ul>
            <div className={styles.flexbox}>
              <a href="https://www.cnosdb.com/cnosdb-cloud-waitlist/" target="_blank" className={clsx(styles.buttonLink, styles.buttonLinkPrimary)} >
                Learn More
              </a>
            </div>

          </div>
          <div className={styles.widgetWrap}>
            <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/CnosDB-Embeded.svg" title="CnosDB-Embeded.svg" alt="CnosDB-Embeded.svg" />
            <div className={styles.widgetContainer}>
              <h2 className={styles.cardHeadingTitle}>CnosDB-Embedded</h2>
              <h3 className={styles.cardHeadingSubTitle}>A collaborative embedded time-series database for cloud and edge</h3>
            </div>

            <ul className={styles.iconList}>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Ultra-light kernel for embedded devices</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Supports deployment on ARM/Raspberry Pi and other edge architectures</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Truly achieves a cloud-edge integrated data model</span>
              </li>
              <li className={styles.iconListItem}>
                <img className={styles.correctImg} src="/img/correct.svg" alt="" />
                <span className={styles.iconListText}>Collaboration between cloud and edge with multi-level storage for cost control</span>
              </li>
            </ul>
            <div className={styles.flexbox}>
              <a className={clsx(styles.buttonLink, styles.buttonLinkPrimary, styles.mt56)} onClick={handleShow} >
                Contact Us
              </a>
            </div>

          </div>
        </div>
        <div className={styles.innerContainer}>
          <h2 className={styles.cardHeadingTitle}>Product advantages</h2>
          <div className={styles.flexbox}>
            <div className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2023/02/icon_High-performance-1.svg" alt="" />
              <h3>High Performance</h3>
              <p className={styles.productText}>CnosDB addresses the issue of time-series data expansion and theoretically supports unlimited time-series data. It supports aggregate queries along the timeline, including queries divided by equal intervals, queries divided by enumeration values of a column, and queries divided by the length of the time interval between adjacent time-series records. It also has caching capabilities for the latest data and the cache space can be configured for fast access to the latest data.</p>
            </div>
            <div className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2023/02/icon_easy-to-use.svg" alt="" />
              <h3>Easy to use</h3>
              <p className={styles.productText}>CnosDB provides clear and simple interfaces, easy configuration options, standard SQL support, seamless integration with third-party tools, and convenient data access functions. It supports schema-less writing mode and supports historical data supplement(including out of order writing).</p>
            </div>
            <div className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2022/11/icon_yys.svg" alt="" />
              <h3>Cloud Native</h3>
              <p className={styles.productText}>CnosDB has a native distributed design, data sharding and partitioning, separation of storage and computing, Quorum mechanism, Kubernetes deployment and complete observability, ensuring final consistency. It can be deployed in public clouds, private clouds, and hybrid clouds. t also supports multi-tenancy and has role-based permission control. The computing and storage nodes support horizontal scaling.</p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.innerContainer, styles.my80)}>
          <h2 className={styles.cardHeadingTitle}>Architecture</h2>
          <img className={clsx(styles.archImg)} src="https://cnosdb.com/wp-content/uploads/2023/02/cnosdb_arch-1.png" alt="" />
        </div>
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <iframe
              id="JotFormIFrame-230889233620154"
              title="Contact Us"
              onLoad={() => { window.parent.scrollTo(0, 0) }}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/230889233620154"
              style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            >
            </iframe>
          </Modal.Body>
        </Modal>

      </main>
    </Layout >
  );
}
