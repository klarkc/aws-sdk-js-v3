import { __extends } from "tslib";
import { MigrationHubClient } from "./MigrationHubClient";
import { AssociateCreatedArtifactCommand, } from "./commands/AssociateCreatedArtifactCommand";
import { AssociateDiscoveredResourceCommand, } from "./commands/AssociateDiscoveredResourceCommand";
import { CreateProgressUpdateStreamCommand, } from "./commands/CreateProgressUpdateStreamCommand";
import { DeleteProgressUpdateStreamCommand, } from "./commands/DeleteProgressUpdateStreamCommand";
import { DescribeApplicationStateCommand, } from "./commands/DescribeApplicationStateCommand";
import { DescribeMigrationTaskCommand, } from "./commands/DescribeMigrationTaskCommand";
import { DisassociateCreatedArtifactCommand, } from "./commands/DisassociateCreatedArtifactCommand";
import { DisassociateDiscoveredResourceCommand, } from "./commands/DisassociateDiscoveredResourceCommand";
import { ImportMigrationTaskCommand, } from "./commands/ImportMigrationTaskCommand";
import { ListApplicationStatesCommand, } from "./commands/ListApplicationStatesCommand";
import { ListCreatedArtifactsCommand, } from "./commands/ListCreatedArtifactsCommand";
import { ListDiscoveredResourcesCommand, } from "./commands/ListDiscoveredResourcesCommand";
import { ListMigrationTasksCommand, } from "./commands/ListMigrationTasksCommand";
import { ListProgressUpdateStreamsCommand, } from "./commands/ListProgressUpdateStreamsCommand";
import { NotifyApplicationStateCommand, } from "./commands/NotifyApplicationStateCommand";
import { NotifyMigrationTaskStateCommand, } from "./commands/NotifyMigrationTaskStateCommand";
import { PutResourceAttributesCommand, } from "./commands/PutResourceAttributesCommand";
/**
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 */
var MigrationHub = /** @class */ (function (_super) {
    __extends(MigrationHub, _super);
    function MigrationHub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MigrationHub.prototype.associateCreatedArtifact = function (args, optionsOrCb, cb) {
        var command = new AssociateCreatedArtifactCommand(args);
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
    MigrationHub.prototype.associateDiscoveredResource = function (args, optionsOrCb, cb) {
        var command = new AssociateDiscoveredResourceCommand(args);
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
    MigrationHub.prototype.createProgressUpdateStream = function (args, optionsOrCb, cb) {
        var command = new CreateProgressUpdateStreamCommand(args);
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
    MigrationHub.prototype.deleteProgressUpdateStream = function (args, optionsOrCb, cb) {
        var command = new DeleteProgressUpdateStreamCommand(args);
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
    MigrationHub.prototype.describeApplicationState = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationStateCommand(args);
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
    MigrationHub.prototype.describeMigrationTask = function (args, optionsOrCb, cb) {
        var command = new DescribeMigrationTaskCommand(args);
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
    MigrationHub.prototype.disassociateCreatedArtifact = function (args, optionsOrCb, cb) {
        var command = new DisassociateCreatedArtifactCommand(args);
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
    MigrationHub.prototype.disassociateDiscoveredResource = function (args, optionsOrCb, cb) {
        var command = new DisassociateDiscoveredResourceCommand(args);
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
    MigrationHub.prototype.importMigrationTask = function (args, optionsOrCb, cb) {
        var command = new ImportMigrationTaskCommand(args);
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
    MigrationHub.prototype.listApplicationStates = function (args, optionsOrCb, cb) {
        var command = new ListApplicationStatesCommand(args);
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
    MigrationHub.prototype.listCreatedArtifacts = function (args, optionsOrCb, cb) {
        var command = new ListCreatedArtifactsCommand(args);
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
    MigrationHub.prototype.listDiscoveredResources = function (args, optionsOrCb, cb) {
        var command = new ListDiscoveredResourcesCommand(args);
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
    MigrationHub.prototype.listMigrationTasks = function (args, optionsOrCb, cb) {
        var command = new ListMigrationTasksCommand(args);
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
    MigrationHub.prototype.listProgressUpdateStreams = function (args, optionsOrCb, cb) {
        var command = new ListProgressUpdateStreamsCommand(args);
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
    MigrationHub.prototype.notifyApplicationState = function (args, optionsOrCb, cb) {
        var command = new NotifyApplicationStateCommand(args);
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
    MigrationHub.prototype.notifyMigrationTaskState = function (args, optionsOrCb, cb) {
        var command = new NotifyMigrationTaskStateCommand(args);
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
    MigrationHub.prototype.putResourceAttributes = function (args, optionsOrCb, cb) {
        var command = new PutResourceAttributesCommand(args);
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
    return MigrationHub;
}(MigrationHubClient));
export { MigrationHub };
//# sourceMappingURL=MigrationHub.js.map