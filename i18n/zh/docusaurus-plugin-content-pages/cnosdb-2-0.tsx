import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './cnosdb-2-0.module.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home(): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout
      title={`CnosDB 2.0 - CnosDB`}
      description="CnosDB | 高性能、高压缩比、高可用的分布式云原生时间序列数据库 - 时序数据库层面支持：超强扩展性；计算存储分离；平衡存储性能与成本；支持矢量化查询；支持多种时序协议；支持外部全生态。云原生层面支持：高可用；多租户, 按量付费；CDC；需求可配置；云边端协同；云上生态融合。">
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.innerContainer}>
            <h1 className={styles.headerTitle}> 云原生时序数据库​ CnosDB 2.0 <span className={styles.spacerInner}></span></h1>
          </div>
        </div>
        <Container className={clsx(styles.innerContainer, styles.cardBox, styles.flexbox)}>
          <Row>
            <Col lg={6} >
              <div className={styles.widgetWrap}>
                <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/community-4.svg" title="community-4.svg" alt="community-4.svg" />
                <div className={styles.widgetContainer}>
                  <h2 className={styles.cardHeadingTitle}>社区版</h2>
                  <h3 className={styles.cardHeadingSubTitle}>免费，开源，生态友好</h3>
                </div>

                <ul className={styles.iconList}>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>基于Rust语言全面开源产品，融合现有时序生态</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>免费使用分布式集群，无功能限制</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>产品快速迭代，极致的产品特性优先体验</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>广泛的开源社区用户及开发者社区支持</span>
                  </li>
                </ul>
                <div className={styles.flexbox}>
                  <a href="https://github.com/cnosdb/cnosdb" target="_blank" className={styles.buttonLink}>
                    查看源码
                  </a>
                  <Link to="/download" className={clsx(styles.buttonLink, styles.buttonLinkPrimary, styles.ml20)} >
                    下载产品
                  </Link>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <div className={styles.widgetWrap}>
                <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/enterprise-3.svg" title="enterprise-3.svg" alt="enterprise-3.svg" />
                <div className={styles.widgetContainer}>
                  <h2 className={styles.cardHeadingTitle}>企业版</h2>
                  <h3 className={styles.cardHeadingSubTitle}>私有云，专家支持</h3>
                </div>

                <ul className={styles.iconList}>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>云原生友好，支持各种服务器及容器环境</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>高性能、高可用分布式集群，用户可选配置工具及运维工具</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>最高7^24响应级别的产品故障支持</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>灵活的收费模式，低成本使用企业版</span>
                  </li>
                </ul>
                <div className={styles.flexbox}>
                  <a className={styles.buttonLink} onClick={handleShow}>
                    联系咨询
                  </a>
                  <Link to="https://jinshuju.net/f/DzezlJ" className={clsx(styles.buttonLink, styles.buttonLinkPrimary, styles.ml20)} >
                    获取白皮书
                  </Link>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <div className={styles.widgetWrap}>
                <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/CnosDB-Cloud.svg" title="CnosDB-Cloud.svg" alt="CnosDB-Cloud.svg" />
                <div className={styles.widgetContainer}>
                  <h2 className={styles.cardHeadingTitle}>CnosDB Cloud</h2>
                  <h3 className={styles.cardHeadingSubTitle}>Serverless. 开箱即用</h3>
                </div>

                <ul className={styles.iconList}>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>云原生Serverless， 充分利用云基础设置的便捷融入云原生生态</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>开箱即用，弹性规模支持，支持存储与计算双向资源扩展</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>原生多租户与按量付费的模式，成本更低</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>解放运维工程师繁重的工作，云服务轻松搞定</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>融合云上OLAP/CIoudAl 数据生态系统</span>
                  </li>
                </ul>
                <div className={styles.flexbox}>
                  <a href="https://www.cnosdb.com/cnosdb-cloud-waitlist/" target="_blank" className={clsx(styles.buttonLink, styles.buttonLinkPrimary)} >
                    了解更多
                  </a>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <div className={styles.widgetWrap}>
                <img className={styles.cardImg} src="https://cnosdb.com/wp-content/uploads/2023/02/CnosDB-Embeded.svg" title="CnosDB-Embeded.svg" alt="CnosDB-Embeded.svg" />
                <div className={styles.widgetContainer}>
                  <h2 className={styles.cardHeadingTitle}>CnosDB-Embedded</h2>
                  <h3 className={styles.cardHeadingSubTitle}>云边端协同嵌入式时序数据库</h3>
                </div>

                <ul className={styles.iconList}>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>边端嵌入式数据库，超轻内核</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>支持边端ARM/树莓派等架构部署</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>真正实现云边端一体的数据模式</span>
                  </li>
                  <li className={styles.iconListItem}>
                    <img className={styles.correctImg} src={useBaseUrl('/img/correct.svg')} alt="" />
                    <span className={styles.iconListText}>云边端协同，多级存储成本可控</span>
                  </li>
                </ul>
                <div className={styles.flexbox}>
                  <a className={clsx(styles.buttonLink, styles.buttonLinkPrimary, styles.mt56)} onClick={handleShow} >
                    联系咨询
                  </a>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
        <Container className={styles.innerContainer}>
          <h2 className={styles.cardHeadingTitle}>产品优势</h2>
          <Row className={styles.flexbox}>
            <Col lg={6} className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2023/02/icon_High-performance-1.svg" alt="" />
              <h3>高性能</h3>
              <p className={styles.productText}>CnosDB 解决了时间序列膨胀，理论上支持时间序列无上限，支持沿时间线的聚合查询，包括按等间隔划分窗口的查询、按某列枚举值划分窗口的查询、按相邻时序记录的时间间隔长度划分窗口。具备对最新数据的缓存能力，并且可以配置缓存空间，能够高速获取最新数据。</p>
            </Col>
            <Col lg={6} className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2023/02/icon_easy-to-use.svg" alt="" />
              <h3>简单易用</h3>
              <p className={styles.productText}>CnosDB 提供清晰明了的接口，简单的配置项目，支持标准SQL，轻松上手，与第三方工具生态无缝集成，拥有便捷的数据访问功能。支持 schemaless （”无模式”）的写入方式，支持历史数据补录（含乱序写入）。</p>
            </Col>
            <Col lg={6} className={styles.productCard}>
              <img className={clsx(styles.productImg, styles.mb18)} src="https://cnosdb.com/wp-content/uploads/2022/11/icon_yys.svg" alt="" />
              <h3>云原生</h3>
              <p className={styles.productText}>CnosDB 有原生的分布式设计、数据分片和分区、存算分离、Quorum 机制、Kubernetes 部署和完整的可观测性，具有最终一致性，能够部署在公有云、私有云和混合云上。提供多租户的功能，有基于角色的权限控制。支持计算层无状态增减节点，储存层水平扩展提高系统存储容量。</p>
            </Col>
          </Row>
        </Container>

        <div className={clsx(styles.innerContainer, styles.my80)}>
          <h2 className={styles.cardHeadingTitle}>整体架构</h2>
          <img className={clsx(styles.archImg)} src="https://cn.cnosdb.com/wp-content/uploads/2023/02/cnosdb_arch_CN.png" alt="" />
        </div>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <iframe
              title="联系我们"
              onLoad={() => { window.parent.scrollTo(0, 0) }}
              allow="geolocation; microphone; camera"
              src="https://jinshuju.net/f/qrj9lq?background=white&banner=show&embedded=true&inner_redirect=true"
              style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            >
            </iframe>
          </Modal.Body>
        </Modal>

      </main>
    </Layout >
  );
}
