"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScalingPlans = void 0;
const AutoScalingPlansClient_1 = require("./AutoScalingPlansClient");
const CreateScalingPlanCommand_1 = require("./commands/CreateScalingPlanCommand");
const DeleteScalingPlanCommand_1 = require("./commands/DeleteScalingPlanCommand");
const DescribeScalingPlanResourcesCommand_1 = require("./commands/DescribeScalingPlanResourcesCommand");
const DescribeScalingPlansCommand_1 = require("./commands/DescribeScalingPlansCommand");
const GetScalingPlanResourceForecastDataCommand_1 = require("./commands/GetScalingPlanResourceForecastDataCommand");
const UpdateScalingPlanCommand_1 = require("./commands/UpdateScalingPlanCommand");
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
class AutoScalingPlans extends AutoScalingPlansClient_1.AutoScalingPlansClient {
  createScalingPlan(args, optionsOrCb, cb) {
    const command = new CreateScalingPlanCommand_1.CreateScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteScalingPlan(args, optionsOrCb, cb) {
    const command = new DeleteScalingPlanCommand_1.DeleteScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeScalingPlanResources(args, optionsOrCb, cb) {
    const command = new DescribeScalingPlanResourcesCommand_1.DescribeScalingPlanResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeScalingPlans(args, optionsOrCb, cb) {
    const command = new DescribeScalingPlansCommand_1.DescribeScalingPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getScalingPlanResourceForecastData(args, optionsOrCb, cb) {
    const command = new GetScalingPlanResourceForecastDataCommand_1.GetScalingPlanResourceForecastDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateScalingPlan(args, optionsOrCb, cb) {
    const command = new UpdateScalingPlanCommand_1.UpdateScalingPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.AutoScalingPlans = AutoScalingPlans;
//# sourceMappingURL=AutoScalingPlans.js.map
