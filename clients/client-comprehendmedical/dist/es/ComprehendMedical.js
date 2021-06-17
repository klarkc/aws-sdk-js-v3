import { __extends } from "tslib";
import { ComprehendMedicalClient } from "./ComprehendMedicalClient";
import { DescribeEntitiesDetectionV2JobCommand, } from "./commands/DescribeEntitiesDetectionV2JobCommand";
import { DescribeICD10CMInferenceJobCommand, } from "./commands/DescribeICD10CMInferenceJobCommand";
import { DescribePHIDetectionJobCommand, } from "./commands/DescribePHIDetectionJobCommand";
import { DescribeRxNormInferenceJobCommand, } from "./commands/DescribeRxNormInferenceJobCommand";
import { DetectEntitiesCommand, } from "./commands/DetectEntitiesCommand";
import { DetectEntitiesV2Command, } from "./commands/DetectEntitiesV2Command";
import { DetectPHICommand } from "./commands/DetectPHICommand";
import { InferICD10CMCommand, } from "./commands/InferICD10CMCommand";
import { InferRxNormCommand } from "./commands/InferRxNormCommand";
import { ListEntitiesDetectionV2JobsCommand, } from "./commands/ListEntitiesDetectionV2JobsCommand";
import { ListICD10CMInferenceJobsCommand, } from "./commands/ListICD10CMInferenceJobsCommand";
import { ListPHIDetectionJobsCommand, } from "./commands/ListPHIDetectionJobsCommand";
import { ListRxNormInferenceJobsCommand, } from "./commands/ListRxNormInferenceJobsCommand";
import { StartEntitiesDetectionV2JobCommand, } from "./commands/StartEntitiesDetectionV2JobCommand";
import { StartICD10CMInferenceJobCommand, } from "./commands/StartICD10CMInferenceJobCommand";
import { StartPHIDetectionJobCommand, } from "./commands/StartPHIDetectionJobCommand";
import { StartRxNormInferenceJobCommand, } from "./commands/StartRxNormInferenceJobCommand";
import { StopEntitiesDetectionV2JobCommand, } from "./commands/StopEntitiesDetectionV2JobCommand";
import { StopICD10CMInferenceJobCommand, } from "./commands/StopICD10CMInferenceJobCommand";
import { StopPHIDetectionJobCommand, } from "./commands/StopPHIDetectionJobCommand";
import { StopRxNormInferenceJobCommand, } from "./commands/StopRxNormInferenceJobCommand";
/**
 * <p> Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
var ComprehendMedical = /** @class */ (function (_super) {
    __extends(ComprehendMedical, _super);
    function ComprehendMedical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComprehendMedical.prototype.describeEntitiesDetectionV2Job = function (args, optionsOrCb, cb) {
        var command = new DescribeEntitiesDetectionV2JobCommand(args);
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
    ComprehendMedical.prototype.describeICD10CMInferenceJob = function (args, optionsOrCb, cb) {
        var command = new DescribeICD10CMInferenceJobCommand(args);
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
    ComprehendMedical.prototype.describePHIDetectionJob = function (args, optionsOrCb, cb) {
        var command = new DescribePHIDetectionJobCommand(args);
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
    ComprehendMedical.prototype.describeRxNormInferenceJob = function (args, optionsOrCb, cb) {
        var command = new DescribeRxNormInferenceJobCommand(args);
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
    ComprehendMedical.prototype.detectEntities = function (args, optionsOrCb, cb) {
        var command = new DetectEntitiesCommand(args);
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
    ComprehendMedical.prototype.detectEntitiesV2 = function (args, optionsOrCb, cb) {
        var command = new DetectEntitiesV2Command(args);
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
    ComprehendMedical.prototype.detectPHI = function (args, optionsOrCb, cb) {
        var command = new DetectPHICommand(args);
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
    ComprehendMedical.prototype.inferICD10CM = function (args, optionsOrCb, cb) {
        var command = new InferICD10CMCommand(args);
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
    ComprehendMedical.prototype.inferRxNorm = function (args, optionsOrCb, cb) {
        var command = new InferRxNormCommand(args);
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
    ComprehendMedical.prototype.listEntitiesDetectionV2Jobs = function (args, optionsOrCb, cb) {
        var command = new ListEntitiesDetectionV2JobsCommand(args);
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
    ComprehendMedical.prototype.listICD10CMInferenceJobs = function (args, optionsOrCb, cb) {
        var command = new ListICD10CMInferenceJobsCommand(args);
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
    ComprehendMedical.prototype.listPHIDetectionJobs = function (args, optionsOrCb, cb) {
        var command = new ListPHIDetectionJobsCommand(args);
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
    ComprehendMedical.prototype.listRxNormInferenceJobs = function (args, optionsOrCb, cb) {
        var command = new ListRxNormInferenceJobsCommand(args);
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
    ComprehendMedical.prototype.startEntitiesDetectionV2Job = function (args, optionsOrCb, cb) {
        var command = new StartEntitiesDetectionV2JobCommand(args);
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
    ComprehendMedical.prototype.startICD10CMInferenceJob = function (args, optionsOrCb, cb) {
        var command = new StartICD10CMInferenceJobCommand(args);
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
    ComprehendMedical.prototype.startPHIDetectionJob = function (args, optionsOrCb, cb) {
        var command = new StartPHIDetectionJobCommand(args);
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
    ComprehendMedical.prototype.startRxNormInferenceJob = function (args, optionsOrCb, cb) {
        var command = new StartRxNormInferenceJobCommand(args);
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
    ComprehendMedical.prototype.stopEntitiesDetectionV2Job = function (args, optionsOrCb, cb) {
        var command = new StopEntitiesDetectionV2JobCommand(args);
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
    ComprehendMedical.prototype.stopICD10CMInferenceJob = function (args, optionsOrCb, cb) {
        var command = new StopICD10CMInferenceJobCommand(args);
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
    ComprehendMedical.prototype.stopPHIDetectionJob = function (args, optionsOrCb, cb) {
        var command = new StopPHIDetectionJobCommand(args);
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
    ComprehendMedical.prototype.stopRxNormInferenceJob = function (args, optionsOrCb, cb) {
        var command = new StopRxNormInferenceJobCommand(args);
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
    return ComprehendMedical;
}(ComprehendMedicalClient));
export { ComprehendMedical };
//# sourceMappingURL=ComprehendMedical.js.map