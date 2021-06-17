import { __extends } from "tslib";
import { SyntheticsClient } from "./SyntheticsClient";
import { CreateCanaryCommand, } from "./commands/CreateCanaryCommand";
import { DeleteCanaryCommand, } from "./commands/DeleteCanaryCommand";
import { DescribeCanariesCommand, } from "./commands/DescribeCanariesCommand";
import { DescribeCanariesLastRunCommand, } from "./commands/DescribeCanariesLastRunCommand";
import { DescribeRuntimeVersionsCommand, } from "./commands/DescribeRuntimeVersionsCommand";
import { GetCanaryCommand } from "./commands/GetCanaryCommand";
import { GetCanaryRunsCommand, } from "./commands/GetCanaryRunsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StartCanaryCommand } from "./commands/StartCanaryCommand";
import { StopCanaryCommand } from "./commands/StopCanaryCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateCanaryCommand, } from "./commands/UpdateCanaryCommand";
/**
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 */
var Synthetics = /** @class */ (function (_super) {
    __extends(Synthetics, _super);
    function Synthetics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Synthetics.prototype.createCanary = function (args, optionsOrCb, cb) {
        var command = new CreateCanaryCommand(args);
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
    Synthetics.prototype.deleteCanary = function (args, optionsOrCb, cb) {
        var command = new DeleteCanaryCommand(args);
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
    Synthetics.prototype.describeCanaries = function (args, optionsOrCb, cb) {
        var command = new DescribeCanariesCommand(args);
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
    Synthetics.prototype.describeCanariesLastRun = function (args, optionsOrCb, cb) {
        var command = new DescribeCanariesLastRunCommand(args);
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
    Synthetics.prototype.describeRuntimeVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeRuntimeVersionsCommand(args);
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
    Synthetics.prototype.getCanary = function (args, optionsOrCb, cb) {
        var command = new GetCanaryCommand(args);
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
    Synthetics.prototype.getCanaryRuns = function (args, optionsOrCb, cb) {
        var command = new GetCanaryRunsCommand(args);
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
    Synthetics.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    Synthetics.prototype.startCanary = function (args, optionsOrCb, cb) {
        var command = new StartCanaryCommand(args);
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
    Synthetics.prototype.stopCanary = function (args, optionsOrCb, cb) {
        var command = new StopCanaryCommand(args);
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
    Synthetics.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    Synthetics.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    Synthetics.prototype.updateCanary = function (args, optionsOrCb, cb) {
        var command = new UpdateCanaryCommand(args);
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
    return Synthetics;
}(SyntheticsClient));
export { Synthetics };
//# sourceMappingURL=Synthetics.js.map