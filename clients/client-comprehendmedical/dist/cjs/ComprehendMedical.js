"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprehendMedical = void 0;
const ComprehendMedicalClient_1 = require("./ComprehendMedicalClient");
const DescribeEntitiesDetectionV2JobCommand_1 = require("./commands/DescribeEntitiesDetectionV2JobCommand");
const DescribeICD10CMInferenceJobCommand_1 = require("./commands/DescribeICD10CMInferenceJobCommand");
const DescribePHIDetectionJobCommand_1 = require("./commands/DescribePHIDetectionJobCommand");
const DescribeRxNormInferenceJobCommand_1 = require("./commands/DescribeRxNormInferenceJobCommand");
const DetectEntitiesCommand_1 = require("./commands/DetectEntitiesCommand");
const DetectEntitiesV2Command_1 = require("./commands/DetectEntitiesV2Command");
const DetectPHICommand_1 = require("./commands/DetectPHICommand");
const InferICD10CMCommand_1 = require("./commands/InferICD10CMCommand");
const InferRxNormCommand_1 = require("./commands/InferRxNormCommand");
const ListEntitiesDetectionV2JobsCommand_1 = require("./commands/ListEntitiesDetectionV2JobsCommand");
const ListICD10CMInferenceJobsCommand_1 = require("./commands/ListICD10CMInferenceJobsCommand");
const ListPHIDetectionJobsCommand_1 = require("./commands/ListPHIDetectionJobsCommand");
const ListRxNormInferenceJobsCommand_1 = require("./commands/ListRxNormInferenceJobsCommand");
const StartEntitiesDetectionV2JobCommand_1 = require("./commands/StartEntitiesDetectionV2JobCommand");
const StartICD10CMInferenceJobCommand_1 = require("./commands/StartICD10CMInferenceJobCommand");
const StartPHIDetectionJobCommand_1 = require("./commands/StartPHIDetectionJobCommand");
const StartRxNormInferenceJobCommand_1 = require("./commands/StartRxNormInferenceJobCommand");
const StopEntitiesDetectionV2JobCommand_1 = require("./commands/StopEntitiesDetectionV2JobCommand");
const StopICD10CMInferenceJobCommand_1 = require("./commands/StopICD10CMInferenceJobCommand");
const StopPHIDetectionJobCommand_1 = require("./commands/StopPHIDetectionJobCommand");
const StopRxNormInferenceJobCommand_1 = require("./commands/StopRxNormInferenceJobCommand");
/**
 * <p> Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
class ComprehendMedical extends ComprehendMedicalClient_1.ComprehendMedicalClient {
    describeEntitiesDetectionV2Job(args, optionsOrCb, cb) {
        const command = new DescribeEntitiesDetectionV2JobCommand_1.DescribeEntitiesDetectionV2JobCommand(args);
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
    describeICD10CMInferenceJob(args, optionsOrCb, cb) {
        const command = new DescribeICD10CMInferenceJobCommand_1.DescribeICD10CMInferenceJobCommand(args);
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
    describePHIDetectionJob(args, optionsOrCb, cb) {
        const command = new DescribePHIDetectionJobCommand_1.DescribePHIDetectionJobCommand(args);
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
    describeRxNormInferenceJob(args, optionsOrCb, cb) {
        const command = new DescribeRxNormInferenceJobCommand_1.DescribeRxNormInferenceJobCommand(args);
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
    detectEntities(args, optionsOrCb, cb) {
        const command = new DetectEntitiesCommand_1.DetectEntitiesCommand(args);
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
    detectEntitiesV2(args, optionsOrCb, cb) {
        const command = new DetectEntitiesV2Command_1.DetectEntitiesV2Command(args);
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
    detectPHI(args, optionsOrCb, cb) {
        const command = new DetectPHICommand_1.DetectPHICommand(args);
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
    inferICD10CM(args, optionsOrCb, cb) {
        const command = new InferICD10CMCommand_1.InferICD10CMCommand(args);
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
    inferRxNorm(args, optionsOrCb, cb) {
        const command = new InferRxNormCommand_1.InferRxNormCommand(args);
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
    listEntitiesDetectionV2Jobs(args, optionsOrCb, cb) {
        const command = new ListEntitiesDetectionV2JobsCommand_1.ListEntitiesDetectionV2JobsCommand(args);
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
    listICD10CMInferenceJobs(args, optionsOrCb, cb) {
        const command = new ListICD10CMInferenceJobsCommand_1.ListICD10CMInferenceJobsCommand(args);
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
    listPHIDetectionJobs(args, optionsOrCb, cb) {
        const command = new ListPHIDetectionJobsCommand_1.ListPHIDetectionJobsCommand(args);
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
    listRxNormInferenceJobs(args, optionsOrCb, cb) {
        const command = new ListRxNormInferenceJobsCommand_1.ListRxNormInferenceJobsCommand(args);
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
    startEntitiesDetectionV2Job(args, optionsOrCb, cb) {
        const command = new StartEntitiesDetectionV2JobCommand_1.StartEntitiesDetectionV2JobCommand(args);
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
    startICD10CMInferenceJob(args, optionsOrCb, cb) {
        const command = new StartICD10CMInferenceJobCommand_1.StartICD10CMInferenceJobCommand(args);
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
    startPHIDetectionJob(args, optionsOrCb, cb) {
        const command = new StartPHIDetectionJobCommand_1.StartPHIDetectionJobCommand(args);
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
    startRxNormInferenceJob(args, optionsOrCb, cb) {
        const command = new StartRxNormInferenceJobCommand_1.StartRxNormInferenceJobCommand(args);
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
    stopEntitiesDetectionV2Job(args, optionsOrCb, cb) {
        const command = new StopEntitiesDetectionV2JobCommand_1.StopEntitiesDetectionV2JobCommand(args);
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
    stopICD10CMInferenceJob(args, optionsOrCb, cb) {
        const command = new StopICD10CMInferenceJobCommand_1.StopICD10CMInferenceJobCommand(args);
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
    stopPHIDetectionJob(args, optionsOrCb, cb) {
        const command = new StopPHIDetectionJobCommand_1.StopPHIDetectionJobCommand(args);
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
    stopRxNormInferenceJob(args, optionsOrCb, cb) {
        const command = new StopRxNormInferenceJobCommand_1.StopRxNormInferenceJobCommand(args);
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
exports.ComprehendMedical = ComprehendMedical;
//# sourceMappingURL=ComprehendMedical.js.map