import { __extends } from "tslib";
import { MobileClient } from "./MobileClient";
import { CreateProjectCommand, } from "./commands/CreateProjectCommand";
import { DeleteProjectCommand, } from "./commands/DeleteProjectCommand";
import { DescribeBundleCommand, } from "./commands/DescribeBundleCommand";
import { DescribeProjectCommand, } from "./commands/DescribeProjectCommand";
import { ExportBundleCommand, } from "./commands/ExportBundleCommand";
import { ExportProjectCommand, } from "./commands/ExportProjectCommand";
import { ListBundlesCommand } from "./commands/ListBundlesCommand";
import { ListProjectsCommand, } from "./commands/ListProjectsCommand";
import { UpdateProjectCommand, } from "./commands/UpdateProjectCommand";
/**
 * <p>
 *             AWS Mobile Service provides mobile app and website developers with capabilities
 *             required to configure AWS resources and bootstrap their developer desktop projects
 *             with the necessary SDKs, constants, tools and samples to make use of those resources.
 *         </p>
 */
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mobile.prototype.createProject = function (args, optionsOrCb, cb) {
        var command = new CreateProjectCommand(args);
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
    Mobile.prototype.deleteProject = function (args, optionsOrCb, cb) {
        var command = new DeleteProjectCommand(args);
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
    Mobile.prototype.describeBundle = function (args, optionsOrCb, cb) {
        var command = new DescribeBundleCommand(args);
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
    Mobile.prototype.describeProject = function (args, optionsOrCb, cb) {
        var command = new DescribeProjectCommand(args);
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
    Mobile.prototype.exportBundle = function (args, optionsOrCb, cb) {
        var command = new ExportBundleCommand(args);
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
    Mobile.prototype.exportProject = function (args, optionsOrCb, cb) {
        var command = new ExportProjectCommand(args);
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
    Mobile.prototype.listBundles = function (args, optionsOrCb, cb) {
        var command = new ListBundlesCommand(args);
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
    Mobile.prototype.listProjects = function (args, optionsOrCb, cb) {
        var command = new ListProjectsCommand(args);
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
    Mobile.prototype.updateProject = function (args, optionsOrCb, cb) {
        var command = new UpdateProjectCommand(args);
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
    return Mobile;
}(MobileClient));
export { Mobile };
//# sourceMappingURL=Mobile.js.map