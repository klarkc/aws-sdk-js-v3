"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
const PIClient_1 = require("./PIClient");
const DescribeDimensionKeysCommand_1 = require("./commands/DescribeDimensionKeysCommand");
const GetResourceMetricsCommand_1 = require("./commands/GetResourceMetricsCommand");
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
class PI extends PIClient_1.PIClient {
    describeDimensionKeys(args, optionsOrCb, cb) {
        const command = new DescribeDimensionKeysCommand_1.DescribeDimensionKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResourceMetrics(args, optionsOrCb, cb) {
        const command = new GetResourceMetricsCommand_1.GetResourceMetricsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.PI = PI;
//# sourceMappingURL=PI.js.map