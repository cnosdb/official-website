import React, { useState, useEffect, Fragment } from 'react'
import clsx from 'clsx';
import Select from 'react-select'
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './download.css'

type debType = {
  arm64: {
    cnosdb: string
    "cnosdb-meta": string
  },
  amd64: {
    cnosdb: string
    "cnosdb-meta": string
  }
}

type OriginDataType = {
  latest: string
  version: string[]
  deb?: debType,
  rpm?: debType
  docker?: string
  windows?: string
}

export default function Home(): JSX.Element {
  const [originData, setOriginData] = useState<OriginDataType>();
  const [platform, setPlatform] = useState('docker');
  const [platformContent, setPlatformContent] = useState('');
  const [versions, setVersions] = useState([])
  const [version, setVersion] = useState('')
  const [metaSha256, setMetaSha256] = useState(null)
  const [dataSha256, setDataSha256] = useState(null)
  const [selectedVersion, setSelectedVersion] = useState(null)
  const [status, setStatus] = useState(false)
  const archOptions = [
    { label: 'amd64', value: 'amd64' },
    { label: 'arm64', value: 'arm64' },
  ]
  const [selectedArch, setSelectedArch] = useState(archOptions[0])
  const rpmDebOptions = ['rpm', 'deb']
  const [platformMetaContent, setPlatformMetaContent] = useState(null);
  const [platformDataContent, setPlatformDataContent] = useState(null);
  const [selectedMetaSuffix, setSelectedMetaSuffix] = useState('rpm')
  const [selectedDataSuffix, setSelectedDataSuffix] = useState('rpm')



  const Content = ({ platform, content }) => {
    if (platform === 'eco') {
      return (
        <div>
          <p>We have integrated commonly used tools in the community, and you can obtain more examples of using CnosDB
            by referring to <a href="https://docs.cnosdb.com/en/latest/versatility/" target="_blank"
              rel="noopener noreferrer">the
              official documentation</a>.</p>
          <p><a href="https://docs.influxdata.com/telegraf/v1.26/" target="_blank"
            rel="noopener noreferrer">Telegraf</a>: An open-source data collection agent that can be used to collect
            and send various types of data to the CnosDB database for data analysis and monitoring.
          </p>
          <p><a href="https://grafana.com/" target="_blank" rel="noopener noreferrer">Grafana</a>: An open-source data
            visualization tool that provides data visualization and monitoring capabilities.
          </p>
          <p><a href="https://prometheus.io/" target="_blank" rel="noopener noreferrer">Prometheus</a>: An open-source
            monitoring system that can be used with the CnosDB database to provide data monitoring and alerting
            capabilities.</p>
          <p><a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">TensorFlow</a>: An
            open-source machine learning framework that enables analysis and processing of large-scale data, improving
            the efficiency and accuracy of data mining and machine learning.</p>
          <p><a href="https://python.langchain.com/docs/integrations/providers/cnosdb" target="_blank" rel="noopener noreferrer">LangChain</a>: Build applications with context-awareness and reasoning using LangChain.</p>
          <p><a href="https://www.guandata.com/" target="_blank" rel="noopener noreferrer">观远BI</a>: Integrate with CnosDB for fast IoT decision-making.</p>
          <p><a href="https://www.emqx.io/" target="_blank" rel="noopener noreferrer">EMQX</a>: Large-scale distributed MQTT message server, seamlessly integrate with CnosDB.</p>
          <p><a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>: The most popular message middleware, seamlessly integrate with big data platforms.</p>
          <p><a href="https://vector.dev/" target="_blank" rel="noopener noreferrer">Vector</a>: A lightweight, ultra-fast tool for building observability pipelines.</p>
          <p>Click here to download the installation packages for third-party ecosystem components:</p>
          <p>
            <a href="https://docs.influxdata.com/telegraf/v1.26/install/" target="_blank"
              rel="noopener noreferrer">Telegraf</a>
            <a href="https://grafana.com/grafana/download" target="_blank"
              rel="noopener noreferrer">Grafana</a>
            <a href="https://prometheus.io/download/" target="_blank"
              rel="noopener noreferrer">Prometheus</a>
            <a href="https://www.tensorflow.org/install" target="_blank"
              rel="noopener noreferrer">TensorFlow</a>
            <a href="https://python.langchain.com/docs/integrations/providers/cnosdb" target="_blank"
              rel="noopener noreferrer">LangChain</a>
            <a href="https://www.guandata.com/" target="_blank"
              rel="noopener noreferrer">观远BI</a>
            <a href="https://www.emqx.io/" target="_blank"
              rel="noopener noreferrer">EMQX</a>
            <a href="https://kafka.apache.org/" target="_blank"
              rel="noopener noreferrer">Kafka</a>
            <a href="https://vector.dev/" target="_blank"
              rel="noopener noreferrer">Vector</a>
          </p>
        </div>
      )
    } else {
      if (platform === 'linux') {
        return (<div dangerouslySetInnerHTML={content}></div>)
      } else {
        return (<div>{content}</div>)
      }

    }
  }




  const getData = () => {
    if (status) {
      return false
    }
    fetch("https://dashing-phoenix-f5f7b4.netlify.app/versions.json")
      .then(res => res.json())
      .then(
        (result) => {
          setStatus(true)
          setOriginData(result)
          const _version = result.version
          setVersions(_version.map(version => {
            const versionItem = { value: version, label: version }
            return versionItem
          }))
          setVersion(_version[0])
          setSelectedVersion([
            {
              value: _version[0],
              label: _version[0]
            }
          ])
          const content = result.docker.replace('{{version}}', _version[0])
          setPlatformContent(content)
        },
        (error) => { })
  }

  getData()

  const getSha256 = (version: string, _metaSuffix: string, _dataSuffix: string, _arch: string) => {
    fetch(`https://dashing-phoenix-f5f7b4.netlify.app/sha256/${version}`)
      .then(res => res.json())
      .then(
        (result) => {
          setMetaSha256(result[_metaSuffix][_arch]['cnosdb-meta'])
          setDataSha256(result[_dataSuffix][_arch]['cnosdb'])
        },
        (error) => { })
  }

  const changeLinuxContent = (version: string, arch?: string, metaSuffix?: string, dataSuffix?: string) => {
    console.log('version', version);
    let metaContent = ''
    let dataContent = ''
    const _arch = arch || selectedArch.value
    const _metaSuffix = metaSuffix || selectedMetaSuffix
    const _dataSuffix = dataSuffix || selectedDataSuffix
    const _metaContent = originData[_metaSuffix][_arch]['cnosdb-meta'].replace('{{version}}', version)
    const _metaContentArr = _metaContent.split('/')
    const _dataContent = originData[_dataSuffix][_arch].cnosdb.replace('{{version}}', version)
    const _dataContentArr = _dataContent.split('/')
    metaContent = `wget ${_metaContent} <br/> sudo yum localinstall ${_metaContentArr[_metaContentArr.length - 1]}`
    dataContent = `wget ${_dataContent} <br/> sudo yum localinstall ${_dataContentArr[_dataContentArr.length - 1]}`

    setPlatformMetaContent({ __html: metaContent })
    setPlatformDataContent({ __html: dataContent })
    getSha256(version, _metaSuffix, _dataSuffix, _arch)

  }

  const changeContent = (version: string, _platform: string, arch?: string) => {

    let content = ''
    if (_platform === 'docker') {
      content = originData.docker.replace('{{version}}', version)
    } else if (_platform === 'windows') {
      content = originData.windows.replace('{{version}}', version)
    } else if (_platform === 'linux') {
      changeLinuxContent(version, arch)
    } else {
      content = null
    }
    if (_platform !== 'linux') {
      setPlatformContent(content)
    }
  }

  const changePlatform = (_platform: string) => {
    if (originData) {
      // 每次change要将version重置
      setVersion(versions[0].value)
      setSelectedVersion([versions[0]])
      setPlatform(_platform)
      changeContent(version, _platform)
    }
  }

  const changeVersion = (versionItem) => {
    const version = versionItem.label
    setSelectedVersion([versionItem])
    if (originData) {
      changeContent(version, platform)
    }
  }

  const changeMetaSuffix = (item: string) => {
    setSelectedMetaSuffix(item)
    setSelectedVersion([versions[0]])
    changeLinuxContent(version, null, item)
  }

  const changeDataSuffix = (item: string) => {
    setSelectedDataSuffix(item)
    setSelectedVersion([versions[0]])
    changeLinuxContent(version, null, null, item)
  }

  const changeArch = (item) => {
    setSelectedArch(item)
    changeLinuxContent(version, item.value)

  }


  return (
    <Layout
      title={`Download`}
      description="CnosDB | A high-performance, highly-compressed, highly available distributed cloud-native time-series database - At the time-series database level, it supports: strong scalability; compute/storage separation; balanced storage performance and cost; vectorized query support; support for multiple time-series protocols; and external full ecosystem support. At the cloud-native level, it supports: high availability; multi-tenancy with pay-as-you-go pricing; Change Data Capture (CDC); configurable requirements; cloud-edge coordination; and cloud-native ecosystem integration.">
      <main>
        <main>
          <div className="header">
            <div className="download-inner-container">
              <h1 className="headerTitle">Download</h1>
              <p className="headerDesc">High performance, ultra-stable and open source. Download it now!</p>
            </div>
          </div>
          <Container>
            <Row className="animated fadeInUp">
              <Col className="element-populated" onClick={() => { changePlatform('docker') }}>
                <div className="element-icon-box-icon">
                  <a className="element-icon">
                    <svg viewBox="0 0 1280 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="2820" width="60" height="48">
                      <path
                        d="M699.88718 472.6h-132.2v-118.8h132.2v118.8z m0-408.6h-132.2v121.4h132.2V64z m156.4 289.6H724.08718v118.8h132.2v-118.8z m-312.6-144.2h-132.2v120.2h132.2v-120.2z m156.2 0h-132.2v120.2h132.2v-120.2z m553.6 200c-28.8-19.4-95.2-26.4-146.2-16.8-6.6-48-33.4-89.8-82.2-127.4l-28-18.6-18.6 28c-36.8 55.6-46.8 147.2-7.4 207.6-17.4 9.4-51.6 22.2-96.8 21.4H4.88718c-17.4 101.6 11.6 233.6 88 324.2 74.2 87.8 185.4 132.4 330.8 132.4 314.8 0 547.8-145 656.8-408.4 42.8 0.8 135.2 0.2 182.6-90.4 3-5 13.2-26.4 17-34.2l-26.6-17.8z m-1022.2-55.8h-132v118.8h132.2v-118.8z m156.2 0h-132.2v118.8h132.2v-118.8z m156.2 0h-132.2v118.8h132.2v-118.8z m-156.2-144.2h-132.2v120.2h132.2v-120.2z"
                        p-id="2821"></path>
                    </svg>
                  </a>
                </div>
                <h3 className="element-icon-box-title">
                  <a>Docker</a>
                </h3>
              </Col>
              <Col className="element-populated" onClick={() => { changePlatform('linux') }}>
                <div className="element-icon-box-icon">
                  <a className="element-icon element-animation-grow">
                    <svg viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="3536"
                      width="48" height="48">
                      <path
                        d="M452 234.857143q-6.285714 0.571429-8.857143 6T438.285714 246.285714q-2.857143 0.571429-2.857143-2.857143 0-6.857143 10.857143-8.571428h5.714286z m49.714286 8q-2.285714 0.571429-6.571429-3.714286T485.142857 236.571429q13.714286-6.285714 18.285714 1.142857 1.714286 3.428571-1.714285 5.142857zM301.142857 486.857143q-2.285714-0.571429-3.428571 1.714286t-2.571429 7.142857T292 503.428571t-5.714286 7.428572q-4 5.714286-0.571428 6.857143 2.285714 0.571429 7.142857-4t7.142857-10.285715q0.571429-1.714286 1.142857-4t1.142857-3.428571 0.857143-2.571429 0.285714-2.285714v-1.714286l-0.571428-1.428571-1.714286-1.142857z m488.571429 205.142857q0-10.285714-31.428572-24 2.285714-8.571429 4.285715-15.714286t2.857142-14.857143 1.714286-12.285714 0.285714-12.857143-0.571428-11.142857-2-12.571428-2.285714-11.714286-2.857143-14.285714-3.142857-15.142858q-5.714286-27.428571-26.857143-58.857142t-41.142857-42.857143q13.714286 11.428571 32.571428 47.428571 49.714286 92.571429 30.857143 158.857143-6.285714 22.857143-28.571429 24-17.714286 2.285714-22-10.571429t-4.571428-47.714285-6.571429-61.142857q-5.142857-22.285714-11.142857-39.428572t-11.142857-26-8.857143-14-7.428571-8.571428-4.285715-4q-8-35.428571-17.714285-58.857143t-16.857143-32-13.428572-18.857143-8.571428-22.857143q-2.285714-12 3.428571-30.571429t2.571429-28.285714-25.428572-14.285714q-8.571429-1.714286-25.428571-10.285714T525.714286 239.428571q-4.571429-0.571429-6.285715-14.857142t4.571429-29.142858 20.571429-15.428571q21.142857-1.714286 29.142857 17.142857t2.285714 33.142857q-6.285714 10.857143-1.142857 15.142857t17.142857 0.285715q7.428571-2.285714 7.428571-20.571429v-21.142857q-2.857143-17.142857-7.714285-28.571429t-12-17.428571-13.428572-8.571429-15.428571-4.285714q-61.142857 4.571429-50.857143 76.571429 0 8.571429-0.571429 8.571428-5.142857-5.142857-16.857142-6t-18.857143 0.285715-8.857143-2.857143q0.571429-32.571429-9.142857-51.428572t-25.714286-19.428571q-15.428571-0.571429-23.714286 15.714286T386.857143 200.571429q-0.571429 8.571429 2 21.142857t7.428571 21.428571T405.142857 250.857143q5.714286-1.714286 9.142857-8 2.285714-5.142857-4-4.571429-4 0-8.857143-8.285714T396 210.857143q-0.571429-12.571429 5.142857-21.142857t19.428572-8q9.714286 0 15.428571 12t5.428571 22.285714-0.857142 12.571429q-12.571429 8.571429-17.714286 16.571428-4.571429 6.857143-15.714286 13.428572T395.428571 265.714286q-7.428571 8-8.857142 15.428571t4.285714 10.285714q8 4.571429 14.285714 11.142858t9.142857 10.857142 10.571429 7.428572T445.142857 324.571429q26.857143 1.142857 58.285714-8.571429 1.142857-0.571429 13.142858-4t19.714285-6 16.857143-7.428571 12-10q5.142857-8 11.428572-4.571429 2.857143 1.714286 3.714285 4.857143t-1.714285 6.857143T569.142857 301.142857q-11.428571 3.428571-32.285714 12.285714T510.857143 324.571429q-25.142857 10.857143-40 13.142857-14.285714 2.857143-45.142857-1.142857-5.714286-1.142857-5.142857 1.142857t9.714285 10.857143q14.285714 13.142857 38.285715 12.571428 9.714286-0.571429 20.571428-4t20.571429-8 19.142857-10 17.142857-9.714286 14-6.857142 10-1.428572 4.857143 6.285714q0 1.142857-0.571429 2.571429t-2.285714 2.857143-3.428571 2.571428-4.857143 2.857143-5.142857 2.571429-5.714286 2.857143-5.428572 2.571428q-16 8-38.571428 25.142857T470.857143 396t-28 0.571429q-12-6.285714-36-41.714286-12.571429-17.714286-14.285714-12.571429-0.571429 1.714286-0.571429 5.714286 0 14.285714-8.571429 32.285714T366.571429 412t-12 33.142857 6.571428 36q-13.142857 3.428571-35.714286 51.428572T298.285714 613.142857q-1.142857 10.285714-0.857143 39.428572t-3.142857 33.714285q-4.571429 13.714286-16.571428 1.714286-18.285714-17.714286-20.571429-53.714286-1.142857-16 2.285714-32 2.285714-10.857143-0.571428-10.285714l-2.285714 2.857143q-20.571429 37.142857 5.714285 94.857143 2.857143 6.857143 14.285715 16t13.714285 11.428571q11.428571 13.142857 59.428572 51.714286t53.142857 43.714286q9.142857 8.571429 10 21.714285t-8 24.571429-26 13.142857q4.571429 8.571429 16.571428 25.428571t16 30.857143 4 40.285715q26.285714-13.714286 4-52.571429-2.285714-4.571429-6-9.142857t-5.428571-6.857143-1.142857-3.428571q1.714286-2.857143 7.428571-5.428572t11.428572 1.428572q26.285714 29.714286 94.857143 20.571428 76-8.571429 101.142857-49.714286 13.142857-21.714286 19.428571-17.142857 6.857143 3.428571 5.714286 29.714286-0.571429 14.285714-13.142857 52.571429-5.142857 13.142857-3.428572 21.428571t13.714286 8.857143q1.714286-10.857143 8.285714-44t7.714286-51.428572q1.142857-12-3.714286-42t-4.285714-55.428571 13.142857-40.285714q8.571429-10.285714 29.142857-10.285715 0.571429-21.142857 19.714286-30.285714t41.428571-6 34.285715 12.857143zM430.857143 219.428571q1.714286-9.714286-1.428572-17.142857T422.857143 193.714286q-5.142857-1.142857-5.142857 4 1.142857 2.857143 2.857143 3.428571 5.714286 0 4 8.571429-1.714286 11.428571 4.571428 11.428571 1.714286 0 1.714286-1.714286z m239.428571 112.571429q-1.142857-4.571429-3.714285-6.571429t-7.428572-2.857142-8.285714-3.142858q-2.857143-1.714286-5.428572-4.571428t-4-4.571429-3.142857-3.714285-2.285714-2.285715-2.285714 0.857143q-8 9.142857 4 24.857143t22.285714 18q5.142857 0.571429 8.285714-4.571429t2-11.428571zM568.571429 210.285714q0-6.285714-2.857143-11.142857T559.428571 192t-5.142857-1.714286q-8 0.571429-4 4l2.285715 1.142857q8 2.285714 10.285714 17.714286 0 1.714286 4.571428-1.142857z m30.857142-133.142857q0-1.142857-1.428571-2.857143t-5.142857-4-5.428572-3.428571q-8.571429-8.571429-13.714285-8.571429-5.142857 0.571429-6.571429 4.285715t-0.571428 7.428571-0.285715 7.142857q-0.571429 2.285714-3.428571 6t-3.428572 5.142857 1.714286 4.857143q2.285714 1.714286 4.571429 0t6.285714-5.142857 8.571429-5.142857q0.571429-0.571429 5.142857-0.571429t8.571428-1.142857 5.142857-4z m322.857143 766.285714q11.428571 6.857143 17.714286 14t6.857143 13.714286-1.428572 12.857143-8.857142 12.571429-13.428572 11.142857-17.142857 10.571428-18 9.428572-18.285714 8.857143-15.428572 7.428571q-21.714286 10.857143-48.857143 32t-43.142857 36.571429q-9.714286 9.142857-38.857143 11.142857t-50.857142-8.285715q-10.285714-5.142857-16.857143-13.428571T646.285714 987.428571t-12.571428-11.142857-26.857143-5.428571q-25.142857-0.571429-74.285714-0.571429-10.857143 0-32.571429 0.857143t-33.142857 1.428572q-25.142857 0.571429-45.428572 8.571428t-30.571428 17.142857-24.857143 16.285715T335.428571 1021.142857q-16.571429-0.571429-63.428571-17.714286t-83.428571-24.571428q-10.857143-2.285714-29.142858-5.428572t-28.571428-5.142857-22.571429-5.428571-19.142857-8.285714-9.714286-11.142858q-5.714286-13.142857 4-38t10.285715-31.142857q0.571429-9.142857-2.285715-22.857143t-5.714285-24.285714-2.571429-20.857143 6-15.428571q8-6.857143 32.571429-8t34.285714-6.857143q17.142857-10.285714 24-20t6.857143-29.142857q12 41.714286-18.285714 60.571428-18.285714 11.428571-47.428572 8.571429-19.428571-1.714286-24.571428 5.714286-7.428571 8.571429 2.857142 32.571428 1.142857 3.428571 4.571429 10.285715t4.857143 10.285714 2.571428 9.714286 0.571429 12.571428q0 8.571429-9.714286 28t-8 27.428572q1.714286 9.714286 21.142857 14.857142 11.428571 3.428571 48.285715 10.571429T220.571429 969.714286q13.714286 3.428571 42.285714 12.571428t47.142857 13.142857 31.714286 2.285715q24.571429-3.428571 36.857143-16t13.142857-27.428572-4.285715-33.428571-10.857142-29.714286-11.428572-20.857143q-69.142857-108.571429-96.571428-138.285714-38.857143-42.285714-64.571429-22.857143-6.285714 5.142857-8.571429-8.571428-1.714286-9.142857-1.142857-21.714286 0.571429-16.571429 5.714286-29.714286t13.714286-26.857143 12.571428-24q4.571429-12 15.142857-41.142857t16.857143-44.571428 17.142857-34.857143 22.285715-30.857143q62.857143-81.714286 70.857143-111.428572-6.857143-64-9.142858-177.142857-1.142857-51.428571 13.714286-86.571428T433.714286 12Q456 0 493.142857 0q30.285714-0.571429 60.571429 7.714286t50.857143 23.714285q32.571429 24 52.285714 69.428572T673.714286 185.142857q-2.857143 54.285714 17.142857 122.285714 19.428571 64.571429 76 124.571429 31.428571 33.714286 56.857143 93.142857t34 109.142857q4.571429 28 2.857143 48.285715t-6.857143 31.714285-11.428572 12.571429q-5.714286 1.142857-13.428571 10.857143t-15.428572 20.285714-23.142857 19.142857-34.857143 8q-10.285714-0.571429-18-2.857143t-12.857142-7.714285-7.714286-8.857143-6.571429-11.714286-5.142857-11.142857q-12.571429-21.142857-23.428571-17.142857t-16 28 4 55.428571q11.428571 40 0.571428 111.428572-5.714286 37.142857 10.285715 57.428571t41.714285 18.857143 48.571429-20.285714q33.714286-28 51.142857-38T881.142857 914.285714q30.285714-10.285714 44-20.857143t10.571429-19.714285-14.285715-16.285715-29.428571-13.428571q-18.857143-6.285714-28.285714-27.428571t-8.571429-41.428572 8.857143-27.142857q0.571429 17.714286 4.571429 32.285714t8.285714 23.142857 11.714286 16.285715 12 10.857143 12.285714 7.428571 9.428571 5.428571z"
                        p-id="3537"></path>
                    </svg>
                  </a>
                </div>
                <h3 className="element-icon-box-title">
                  <a>Linux</a>
                </h3>
              </Col>
              <Col className="element-populated" onClick={() => { changePlatform('docker') }}>
                <div className="element-icon-box-icon">
                  <a className="element-icon element-animation-grow">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024" width="48" height="48">
                      <path
                        d="M649.78554 161.505697C707.566573 88.168232 694.232489 8.163725 689.787794 1.496683c-6.667042-6.667042-93.338592 6.667042-153.341972 86.671549-53.336338 73.337465-53.336338 153.341972-46.669296 160.009014C496.443568 254.844289 583.115118 248.177247 649.78554 161.505697L649.78554 161.505697zM649.78554 161.505697">
                      </path>
                      <path
                        d="M794.238123 534.860064c-6.667042-106.672676 93.338592-173.343099 113.339719-186.677183l0-6.667042c0 0-86.671549-106.672676-213.345353-100.005634-80.004507 6.667042-120.006761 46.669296-173.343099 46.669296-66.670423 0-126.673803-46.669296-200.011268-46.669296-60.00338 0-233.346479 53.336338-246.680564 280.015775C63.085821 748.205417 223.094835 959.328422 283.098216 999.330676c60.00338 40.002254 100.005634 26.668169 166.676057-6.667042 33.335211-20.001127 140.007888-26.668169 200.011268 13.334085 73.337465 26.668169 180.010141 6.667042 300.016902-260.014648C934.24601 748.205417 800.905165 714.870205 794.238123 534.860064L794.238123 534.860064zM794.238123 534.860064">
                      </path>
                    </svg>
                  </a>
                </div>
                <h3 className="element-icon-box-title">
                  <a>MacOS</a>
                </h3>
              </Col>
              <Col className="element-populated" onClick={() => { changePlatform('windows') }}>
                <div className="element-icon-box-icon">
                  <a className="element-icon element-animation-grow">
                    <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48" width="48"
                      height="48">
                      <path className="st0"
                        d="M0,6.9l19.5-2.7v18.9H0 M21.9,3.9L48,0v22.8H21.9 M0,25.2h19.5v18.9L0,41.4 M21.9,25.2H48V48l-25.8-3.6" />
                    </svg>
                  </a>
                </div>
                <h3 className="element-icon-box-title">
                  <a>Windows</a>
                </h3>
              </Col>
              <Col className="element-populated" onClick={() => { changePlatform('eco') }}>
                <div className="element-icon-box-icon">
                  <a className="element-icon element-animation-grow">
                    <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg"
                      x="0px" y="0px" viewBox="0 0 48 48"
                      width="48" height="48">
                      <path className="st0" d="M45.9,4.7c-1.4-1.1-3.4-0.4-5.9,1.8c-2.5,2.2-8.6,2.7-13.9,2.7S10.1,12.3,6,19.8c-4.1,7.5-0.7,12.7-0.7,12.7
	l-4.1,3.7C0.1,37.3,0,39.2,1,40.4c1.1,1.3,3.2,1.4,4.4,0.1l3.7-4c0,0,11.5,4.7,20.8,1.3c9.3-3.4,15-9.5,16.8-16
	C48.6,15.2,47.3,5.8,45.9,4.7z M32.4,21.5c-0.1,0-0.2,0-0.3,0c-4,0-7.3,0.7-8.6,1.1c-0.3,0.1-0.6,0.2-0.9,0.3
	c-6.4,2.5-9.1,7.6-9.1,7.6c-0.3,0.6-0.9,0.9-1.5,0.9c-0.3,0-0.5-0.1-0.8-0.2c-0.8-0.4-1.2-1.4-0.8-2.3c0.1-0.3,3.2-6.4,11-9.3
	c0.4-0.2,0.8-0.3,1.2-0.4c1.4-0.4,5.2-1.2,9.8-1.2c0.9,0,1.7,0.8,1.7,1.7C34.1,20.7,33.3,21.5,32.4,21.5z" />
                    </svg>
                  </a>
                </div>
                <h3 className="element-icon-box-title">
                  <a>Eco-integration</a>
                </h3>
              </Col>
            </Row>
            <Row className="element-inner-container">
              {originData ? (
                <Fragment>
                  {platform !== 'eco' && (
                    <Fragment>
                      {
                        platform === 'linux' && (
                          <Col xs={4} className='mb30'>
                            <label htmlFor="Arch" className='flex align-items-center'>
                              <span>Arch:&nbsp;&nbsp;</span>
                              <Select id="Arch" className='flex1' options={archOptions} value={[selectedArch]} onChange={changeArch} />
                            </label>
                          </Col>
                        )
                      }
                      <Col xs={4} className='mb30'>
                        <label htmlFor="Version" className='flex align-items-center'>
                          <span>Version:&nbsp;&nbsp;</span>
                          <Select id="Version" className='flex1' options={versions} value={selectedVersion} onChange={changeVersion} />
                        </label>
                      </Col>
                    </Fragment>
                  )}
                  <Fragment>
                    {
                      platform === 'linux' ? (
                        <Fragment>
                          <h3>CnosDB Meta</h3>
                          <div className="flex justify-content-between align-items-center">
                            <ul className="nav-download servers">
                              {
                                rpmDebOptions.map((item) =>
                                  <li className={clsx(selectedMetaSuffix === item && 'active')} key={item} onClick={() => { changeMetaSuffix(item) }}>{item}</li>
                                )
                              }
                            </ul>
                            <div className="fz-13">
                              <span>SHA256&nbsp;&nbsp;</span>
                              <span className="color-opacity-5 bg-f3">{metaSha256}</span>
                            </div>
                          </div>
                          <div className="download-content">
                            <Content platform={platform} content={platformMetaContent} />
                          </div>
                          <h3>CnosDB Data</h3>
                          <div className="flex justify-content-between align-items-center">
                            <ul className="nav-download servers">
                              {
                                rpmDebOptions.map((item) =>
                                  <li className={clsx(selectedDataSuffix === item && 'active')} key={item} onClick={() => { changeDataSuffix(item) }}>{item}</li>
                                )
                              }
                            </ul>
                            <div className="fz-13">
                              <span>SHA256&nbsp;&nbsp;</span>
                              <span className="color-opacity-5 bg-f3">{dataSha256}</span>
                            </div>
                          </div>
                          <div className="download-content">
                            <Content platform={platform} content={platformDataContent} />
                          </div>
                        </Fragment>
                      ) : (
                        <div className="download-content">
                          <Content platform={platform} content={platformContent} />
                        </div>
                      )
                    }
                  </Fragment>

                </Fragment>
              ) : null}
            </Row>

          </Container>
        </main >
      </main >
    </Layout >
  );
}
