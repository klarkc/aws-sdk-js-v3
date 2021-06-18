import { __extends } from "tslib";
import { BatchClient } from "./BatchClient";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateComputeEnvironmentCommand } from "./commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommand } from "./commands/CreateJobQueueCommand";
import { DeleteComputeEnvironmentCommand } from "./commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommand } from "./commands/DeleteJobQueueCommand";
import { DeregisterJobDefinitionCommand } from "./commands/DeregisterJobDefinitionCommand";
import { DescribeComputeEnvironmentsCommand } from "./commands/DescribeComputeEnvironmentsCommand";
import { DescribeJobDefinitionsCommand } from "./commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommand } from "./commands/DescribeJobQueuesCommand";
import { DescribeJobsCommand } from "./commands/DescribeJobsCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RegisterJobDefinitionCommand } from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommand } from "./commands/SubmitJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TerminateJobCommand } from "./commands/TerminateJobCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateComputeEnvironmentCommand } from "./commands/UpdateComputeEnvironmentCommand";
import { UpdateJobQueueCommand } from "./commands/UpdateJobQueueCommand";
/**
 * <p>Using AWS Batch, you can run batch computing workloads on the AWS Cloud. Batch computing is a common means for
 *    developers, scientists, and engineers to access large amounts of compute resources. AWS Batch uses the advantages of
 *    this computing workload to remove the undifferentiated heavy lifting of configuring and managing required
 *    infrastructure. At the same time, it also adopts a familiar batch computing software approach. Given these
 *    advantages, AWS Batch can help you to efficiently provision resources in response to jobs submitted, thus effectively
 *    helping you to eliminate capacity constraints, reduce compute costs, and deliver your results more quickly.</p>
 *          <p>As a fully managed service, AWS Batch can run batch computing workloads of any scale. AWS Batch automatically
 *    provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific
 *    workloads. With AWS Batch, there's no need to install or manage batch computing software. This means that you can focus
 *    your time and energy on analyzing results and solving your specific problems.</p>
 */
var Batch = /** @class */ (function (_super) {
  __extends(Batch, _super);
  function Batch() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Batch.prototype.cancelJob = function (args, optionsOrCb, cb) {
    var command = new CancelJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.createComputeEnvironment = function (args, optionsOrCb, cb) {
    var command = new CreateComputeEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.createJobQueue = function (args, optionsOrCb, cb) {
    var command = new CreateJobQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.deleteComputeEnvironment = function (args, optionsOrCb, cb) {
    var command = new DeleteComputeEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.deleteJobQueue = function (args, optionsOrCb, cb) {
    var command = new DeleteJobQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.deregisterJobDefinition = function (args, optionsOrCb, cb) {
    var command = new DeregisterJobDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.describeComputeEnvironments = function (args, optionsOrCb, cb) {
    var command = new DescribeComputeEnvironmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.describeJobDefinitions = function (args, optionsOrCb, cb) {
    var command = new DescribeJobDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.describeJobQueues = function (args, optionsOrCb, cb) {
    var command = new DescribeJobQueuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.describeJobs = function (args, optionsOrCb, cb) {
    var command = new DescribeJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.listJobs = function (args, optionsOrCb, cb) {
    var command = new ListJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.registerJobDefinition = function (args, optionsOrCb, cb) {
    var command = new RegisterJobDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.submitJob = function (args, optionsOrCb, cb) {
    var command = new SubmitJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.terminateJob = function (args, optionsOrCb, cb) {
    var command = new TerminateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.updateComputeEnvironment = function (args, optionsOrCb, cb) {
    var command = new UpdateComputeEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Batch.prototype.updateJobQueue = function (args, optionsOrCb, cb) {
    var command = new UpdateJobQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return Batch;
})(BatchClient);
export { Batch };
//# sourceMappingURL=Batch.js.map
