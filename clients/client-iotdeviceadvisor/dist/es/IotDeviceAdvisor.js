import { __extends } from "tslib";
import { IotDeviceAdvisorClient } from "./IotDeviceAdvisorClient";
import { CreateSuiteDefinitionCommand, } from "./commands/CreateSuiteDefinitionCommand";
import { DeleteSuiteDefinitionCommand, } from "./commands/DeleteSuiteDefinitionCommand";
import { GetSuiteDefinitionCommand, } from "./commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommand } from "./commands/GetSuiteRunCommand";
import { GetSuiteRunReportCommand, } from "./commands/GetSuiteRunReportCommand";
import { ListSuiteDefinitionsCommand, } from "./commands/ListSuiteDefinitionsCommand";
import { ListSuiteRunsCommand, } from "./commands/ListSuiteRunsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StartSuiteRunCommand, } from "./commands/StartSuiteRunCommand";
import { StopSuiteRunCommand, } from "./commands/StopSuiteRunCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateSuiteDefinitionCommand, } from "./commands/UpdateSuiteDefinitionCommand";
/**
 * <p>AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested.</p>
 */
var IotDeviceAdvisor = /** @class */ (function (_super) {
    __extends(IotDeviceAdvisor, _super);
    function IotDeviceAdvisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IotDeviceAdvisor.prototype.createSuiteDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateSuiteDefinitionCommand(args);
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
    IotDeviceAdvisor.prototype.deleteSuiteDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteSuiteDefinitionCommand(args);
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
    IotDeviceAdvisor.prototype.getSuiteDefinition = function (args, optionsOrCb, cb) {
        var command = new GetSuiteDefinitionCommand(args);
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
    IotDeviceAdvisor.prototype.getSuiteRun = function (args, optionsOrCb, cb) {
        var command = new GetSuiteRunCommand(args);
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
    IotDeviceAdvisor.prototype.getSuiteRunReport = function (args, optionsOrCb, cb) {
        var command = new GetSuiteRunReportCommand(args);
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
    IotDeviceAdvisor.prototype.listSuiteDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListSuiteDefinitionsCommand(args);
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
    IotDeviceAdvisor.prototype.listSuiteRuns = function (args, optionsOrCb, cb) {
        var command = new ListSuiteRunsCommand(args);
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
    IotDeviceAdvisor.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    IotDeviceAdvisor.prototype.startSuiteRun = function (args, optionsOrCb, cb) {
        var command = new StartSuiteRunCommand(args);
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
    IotDeviceAdvisor.prototype.stopSuiteRun = function (args, optionsOrCb, cb) {
        var command = new StopSuiteRunCommand(args);
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
    IotDeviceAdvisor.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    IotDeviceAdvisor.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    IotDeviceAdvisor.prototype.updateSuiteDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateSuiteDefinitionCommand(args);
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
    return IotDeviceAdvisor;
}(IotDeviceAdvisorClient));
export { IotDeviceAdvisor };
//# sourceMappingURL=IotDeviceAdvisor.js.map