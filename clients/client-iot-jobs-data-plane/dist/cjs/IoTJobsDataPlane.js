"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTJobsDataPlane = void 0;
const IoTJobsDataPlaneClient_1 = require("./IoTJobsDataPlaneClient");
const DescribeJobExecutionCommand_1 = require("./commands/DescribeJobExecutionCommand");
const GetPendingJobExecutionsCommand_1 = require("./commands/GetPendingJobExecutionsCommand");
const StartNextPendingJobExecutionCommand_1 = require("./commands/StartNextPendingJobExecutionCommand");
const UpdateJobExecutionCommand_1 = require("./commands/UpdateJobExecutionCommand");
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
class IoTJobsDataPlane extends IoTJobsDataPlaneClient_1.IoTJobsDataPlaneClient {
    describeJobExecution(args, optionsOrCb, cb) {
        const command = new DescribeJobExecutionCommand_1.DescribeJobExecutionCommand(args);
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
    getPendingJobExecutions(args, optionsOrCb, cb) {
        const command = new GetPendingJobExecutionsCommand_1.GetPendingJobExecutionsCommand(args);
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
    startNextPendingJobExecution(args, optionsOrCb, cb) {
        const command = new StartNextPendingJobExecutionCommand_1.StartNextPendingJobExecutionCommand(args);
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
    updateJobExecution(args, optionsOrCb, cb) {
        const command = new UpdateJobExecutionCommand_1.UpdateJobExecutionCommand(args);
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
exports.IoTJobsDataPlane = IoTJobsDataPlane;
//# sourceMappingURL=IoTJobsDataPlane.js.map