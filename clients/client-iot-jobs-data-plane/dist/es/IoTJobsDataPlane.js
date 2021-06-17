import { __extends } from "tslib";
import { IoTJobsDataPlaneClient } from "./IoTJobsDataPlaneClient";
import { DescribeJobExecutionCommand, } from "./commands/DescribeJobExecutionCommand";
import { GetPendingJobExecutionsCommand, } from "./commands/GetPendingJobExecutionsCommand";
import { StartNextPendingJobExecutionCommand, } from "./commands/StartNextPendingJobExecutionCommand";
import { UpdateJobExecutionCommand, } from "./commands/UpdateJobExecutionCommand";
/**
 * <p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to
 *          and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a
 *          set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform
 *          remote troubleshooting operations.</p>
 *          <p> To create a job, you make a job document which is a description of the remote operations to be
 *          performed, and you specify a list of targets that should perform the operations. The targets can be individual
 *          things, thing groups or both.</p>
 *          <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the
 *          execution of the job by downloading the job document, performing the operations it specifies, and reporting its
 *          progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and
 *          for all the targets of the job</p>
 */
var IoTJobsDataPlane = /** @class */ (function (_super) {
    __extends(IoTJobsDataPlane, _super);
    function IoTJobsDataPlane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoTJobsDataPlane.prototype.describeJobExecution = function (args, optionsOrCb, cb) {
        var command = new DescribeJobExecutionCommand(args);
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
    IoTJobsDataPlane.prototype.getPendingJobExecutions = function (args, optionsOrCb, cb) {
        var command = new GetPendingJobExecutionsCommand(args);
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
    IoTJobsDataPlane.prototype.startNextPendingJobExecution = function (args, optionsOrCb, cb) {
        var command = new StartNextPendingJobExecutionCommand(args);
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
    IoTJobsDataPlane.prototype.updateJobExecution = function (args, optionsOrCb, cb) {
        var command = new UpdateJobExecutionCommand(args);
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
    return IoTJobsDataPlane;
}(IoTJobsDataPlaneClient));
export { IoTJobsDataPlane };
//# sourceMappingURL=IoTJobsDataPlane.js.map