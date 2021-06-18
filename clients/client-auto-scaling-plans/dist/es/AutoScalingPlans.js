import { __extends } from "tslib";
import { AutoScalingPlansClient } from "./AutoScalingPlansClient";
import { CreateScalingPlanCommand } from "./commands/CreateScalingPlanCommand";
import { DeleteScalingPlanCommand } from "./commands/DeleteScalingPlanCommand";
import { DescribeScalingPlanResourcesCommand } from "./commands/DescribeScalingPlanResourcesCommand";
import { DescribeScalingPlansCommand } from "./commands/DescribeScalingPlansCommand";
import { GetScalingPlanResourceForecastDataCommand } from "./commands/GetScalingPlanResourceForecastDataCommand";
import { UpdateScalingPlanCommand } from "./commands/UpdateScalingPlanCommand";
/**
 * <fullname>AWS Auto Scaling</fullname>
 *
 *
 *          <p>Use AWS Auto Scaling to create scaling plans for your applications to
 *          automatically scale your scalable AWS resources. </p>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Create and manage scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Define target tracking scaling policies to dynamically scale your resources based
 *                on utilization</p>
 *             </li>
 *             <li>
 *                <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your
 *                Amazon EC2 capacity faster</p>
 *             </li>
 *             <li>
 *                <p>Set minimum and maximum capacity limits</p>
 *             </li>
 *             <li>
 *                <p>Retrieve information on existing scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Access current forecast data and historical forecast data for up to 56 days
 *                previous</p>
 *             </li>
 *          </ul>
 *
 *          <p>To learn more about AWS Auto Scaling, including information about granting IAM users required
 *          permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>
 */
var AutoScalingPlans = /** @class */ (function (_super) {
  __extends(AutoScalingPlans, _super);
  function AutoScalingPlans() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AutoScalingPlans.prototype.createScalingPlan = function (args, optionsOrCb, cb) {
    var command = new CreateScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScalingPlans.prototype.deleteScalingPlan = function (args, optionsOrCb, cb) {
    var command = new DeleteScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScalingPlans.prototype.describeScalingPlanResources = function (args, optionsOrCb, cb) {
    var command = new DescribeScalingPlanResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScalingPlans.prototype.describeScalingPlans = function (args, optionsOrCb, cb) {
    var command = new DescribeScalingPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScalingPlans.prototype.getScalingPlanResourceForecastData = function (args, optionsOrCb, cb) {
    var command = new GetScalingPlanResourceForecastDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScalingPlans.prototype.updateScalingPlan = function (args, optionsOrCb, cb) {
    var command = new UpdateScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AutoScalingPlans;
})(AutoScalingPlansClient);
export { AutoScalingPlans };
//# sourceMappingURL=AutoScalingPlans.js.map
