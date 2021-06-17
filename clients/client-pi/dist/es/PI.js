import { __extends } from "tslib";
import { PIClient } from "./PIClient";
import { DescribeDimensionKeysCommand, } from "./commands/DescribeDimensionKeysCommand";
import { GetResourceMetricsCommand, } from "./commands/GetResourceMetricsCommand";
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
var PI = /** @class */ (function (_super) {
    __extends(PI, _super);
    function PI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PI.prototype.describeDimensionKeys = function (args, optionsOrCb, cb) {
        var command = new DescribeDimensionKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    PI.prototype.getResourceMetrics = function (args, optionsOrCb, cb) {
        var command = new GetResourceMetricsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return PI;
}(PIClient));
export { PI };
//# sourceMappingURL=PI.js.map