
import Layout from '@theme/Layout';
import MainPage from './main';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`CnosDB云原生时序数据库`}
      description="CnosDB | 高性能、高压缩比、高可用的分布式云原生时间序列数据库 - 时序数据库层面支持：超强扩展性；计算存储分离；平衡存储性能与成本；支持矢量化查询；支持多种时序协议；支持外部全生态。云原生层面支持：高可用；多租户, 按量付费；CDC；需求可配置；云边端协同；云上生态融合。">
      <main>
        <MainPage />
      </main>
    </Layout>
  );
}
