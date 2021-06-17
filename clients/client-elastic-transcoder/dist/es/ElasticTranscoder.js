import { __extends } from "tslib";
import { ElasticTranscoderClient } from "./ElasticTranscoderClient";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreatePipelineCommand, } from "./commands/CreatePipelineCommand";
import { CreatePresetCommand, } from "./commands/CreatePresetCommand";
import { DeletePipelineCommand, } from "./commands/DeletePipelineCommand";
import { DeletePresetCommand, } from "./commands/DeletePresetCommand";
import { ListJobsByPipelineCommand, } from "./commands/ListJobsByPipelineCommand";
import { ListJobsByStatusCommand, } from "./commands/ListJobsByStatusCommand";
import { ListPipelinesCommand, } from "./commands/ListPipelinesCommand";
import { ListPresetsCommand } from "./commands/ListPresetsCommand";
import { ReadJobCommand } from "./commands/ReadJobCommand";
import { ReadPipelineCommand, } from "./commands/ReadPipelineCommand";
import { ReadPresetCommand } from "./commands/ReadPresetCommand";
import { TestRoleCommand } from "./commands/TestRoleCommand";
import { UpdatePipelineCommand, } from "./commands/UpdatePipelineCommand";
import { UpdatePipelineNotificationsCommand, } from "./commands/UpdatePipelineNotificationsCommand";
import { UpdatePipelineStatusCommand, } from "./commands/UpdatePipelineStatusCommand";
/**
 * <fullname>AWS Elastic Transcoder Service</fullname>
 *         <p>The AWS Elastic Transcoder Service.</p>
 */
var ElasticTranscoder = /** @class */ (function (_super) {
    __extends(ElasticTranscoder, _super);
    function ElasticTranscoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticTranscoder.prototype.cancelJob = function (args, optionsOrCb, cb) {
        var command = new CancelJobCommand(args);
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
    ElasticTranscoder.prototype.createJob = function (args, optionsOrCb, cb) {
        var command = new CreateJobCommand(args);
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
    ElasticTranscoder.prototype.createPipeline = function (args, optionsOrCb, cb) {
        var command = new CreatePipelineCommand(args);
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
    ElasticTranscoder.prototype.createPreset = function (args, optionsOrCb, cb) {
        var command = new CreatePresetCommand(args);
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
    ElasticTranscoder.prototype.deletePipeline = function (args, optionsOrCb, cb) {
        var command = new DeletePipelineCommand(args);
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
    ElasticTranscoder.prototype.deletePreset = function (args, optionsOrCb, cb) {
        var command = new DeletePresetCommand(args);
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
    ElasticTranscoder.prototype.listJobsByPipeline = function (args, optionsOrCb, cb) {
        var command = new ListJobsByPipelineCommand(args);
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
    ElasticTranscoder.prototype.listJobsByStatus = function (args, optionsOrCb, cb) {
        var command = new ListJobsByStatusCommand(args);
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
    ElasticTranscoder.prototype.listPipelines = function (args, optionsOrCb, cb) {
        var command = new ListPipelinesCommand(args);
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
    ElasticTranscoder.prototype.listPresets = function (args, optionsOrCb, cb) {
        var command = new ListPresetsCommand(args);
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
    ElasticTranscoder.prototype.readJob = function (args, optionsOrCb, cb) {
        var command = new ReadJobCommand(args);
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
    ElasticTranscoder.prototype.readPipeline = function (args, optionsOrCb, cb) {
        var command = new ReadPipelineCommand(args);
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
    ElasticTranscoder.prototype.readPreset = function (args, optionsOrCb, cb) {
        var command = new ReadPresetCommand(args);
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
    ElasticTranscoder.prototype.testRole = function (args, optionsOrCb, cb) {
        var command = new TestRoleCommand(args);
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
    ElasticTranscoder.prototype.updatePipeline = function (args, optionsOrCb, cb) {
        var command = new UpdatePipelineCommand(args);
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
    ElasticTranscoder.prototype.updatePipelineNotifications = function (args, optionsOrCb, cb) {
        var command = new UpdatePipelineNotificationsCommand(args);
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
    ElasticTranscoder.prototype.updatePipelineStatus = function (args, optionsOrCb, cb) {
        var command = new UpdatePipelineStatusCommand(args);
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
    return ElasticTranscoder;
}(ElasticTranscoderClient));
export { ElasticTranscoder };
//# sourceMappingURL=ElasticTranscoder.js.map