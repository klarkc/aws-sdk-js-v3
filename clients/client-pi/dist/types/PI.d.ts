import { PIClient } from "./PIClient";
import { DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput } from "./commands/DescribeDimensionKeysCommand";
import { GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput } from "./commands/GetResourceMetricsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon RDS Performance Insights</fullname>
 *
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of
 *       database load based on data captured from a running DB instance. The guide provides detailed
 *       information about Performance Insights data types, parameters and errors.</p>
 *
 *          <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon
 *       CloudWatch provides the authoritative source for AWS service-vended monitoring metrics.  Performance Insights offers a domain-specific
 *       view of DB load. </p>
 *          <p>DB load is measured as Average Active Sessions. Performance Insights provides the data to API consumers as a two-dimensional
 *       time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time
 *       point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include
 *       SQL, Wait event, User, and Host.</p>
 *
 *          <ul>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html">Amazon Aurora User Guide</a>.</p>
 *             </li>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Amazon RDS User Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export declare class PI extends PIClient {
    /**
     * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a
     *       metric.</p>
     *          <note>
     *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
     *         only the first 500 bytes are returned.</p>
     *          </note>
     */
    describeDimensionKeys(args: DescribeDimensionKeysCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDimensionKeysCommandOutput>;
    describeDimensionKeys(args: DescribeDimensionKeysCommandInput, cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void): void;
    describeDimensionKeys(args: DescribeDimensionKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void): void;
    /**
     * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
     *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
     *       each group.</p>
     *          <note>
     *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
     *                only the first 500 bytes are returned.</p>
     *          </note>
     */
    getResourceMetrics(args: GetResourceMetricsCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceMetricsCommandOutput>;
    getResourceMetrics(args: GetResourceMetricsCommandInput, cb: (err: any, data?: GetResourceMetricsCommandOutput) => void): void;
    getResourceMetrics(args: GetResourceMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceMetricsCommandOutput) => void): void;
}
