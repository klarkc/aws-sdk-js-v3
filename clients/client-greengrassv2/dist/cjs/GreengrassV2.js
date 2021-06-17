"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreengrassV2 = void 0;
const GreengrassV2Client_1 = require("./GreengrassV2Client");
const CancelDeploymentCommand_1 = require("./commands/CancelDeploymentCommand");
const CreateComponentVersionCommand_1 = require("./commands/CreateComponentVersionCommand");
const CreateDeploymentCommand_1 = require("./commands/CreateDeploymentCommand");
const DeleteComponentCommand_1 = require("./commands/DeleteComponentCommand");
const DeleteCoreDeviceCommand_1 = require("./commands/DeleteCoreDeviceCommand");
const DescribeComponentCommand_1 = require("./commands/DescribeComponentCommand");
const GetComponentCommand_1 = require("./commands/GetComponentCommand");
const GetComponentVersionArtifactCommand_1 = require("./commands/GetComponentVersionArtifactCommand");
const GetCoreDeviceCommand_1 = require("./commands/GetCoreDeviceCommand");
const GetDeploymentCommand_1 = require("./commands/GetDeploymentCommand");
const ListComponentVersionsCommand_1 = require("./commands/ListComponentVersionsCommand");
const ListComponentsCommand_1 = require("./commands/ListComponentsCommand");
const ListCoreDevicesCommand_1 = require("./commands/ListCoreDevicesCommand");
const ListDeploymentsCommand_1 = require("./commands/ListDeploymentsCommand");
const ListEffectiveDeploymentsCommand_1 = require("./commands/ListEffectiveDeploymentsCommand");
const ListInstalledComponentsCommand_1 = require("./commands/ListInstalledComponentsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ResolveComponentCandidatesCommand_1 = require("./commands/ResolveComponentCandidatesCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
/**
 * <p>AWS IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with AWS IoT Core and export IoT data
 *       to the AWS Cloud. AWS IoT Greengrass developers can use AWS Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>AWS IoT Greengrass Version 2 provides a new major version of the AWS IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the AWS IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is AWS IoT Greengrass?</a> in
 *       the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 */
class GreengrassV2 extends GreengrassV2Client_1.GreengrassV2Client {
    cancelDeployment(args, optionsOrCb, cb) {
        const command = new CancelDeploymentCommand_1.CancelDeploymentCommand(args);
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
    createComponentVersion(args, optionsOrCb, cb) {
        const command = new CreateComponentVersionCommand_1.CreateComponentVersionCommand(args);
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
    createDeployment(args, optionsOrCb, cb) {
        const command = new CreateDeploymentCommand_1.CreateDeploymentCommand(args);
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
    deleteComponent(args, optionsOrCb, cb) {
        const command = new DeleteComponentCommand_1.DeleteComponentCommand(args);
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
    deleteCoreDevice(args, optionsOrCb, cb) {
        const command = new DeleteCoreDeviceCommand_1.DeleteCoreDeviceCommand(args);
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
    describeComponent(args, optionsOrCb, cb) {
        const command = new DescribeComponentCommand_1.DescribeComponentCommand(args);
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
    getComponent(args, optionsOrCb, cb) {
        const command = new GetComponentCommand_1.GetComponentCommand(args);
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
    getComponentVersionArtifact(args, optionsOrCb, cb) {
        const command = new GetComponentVersionArtifactCommand_1.GetComponentVersionArtifactCommand(args);
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
    getCoreDevice(args, optionsOrCb, cb) {
        const command = new GetCoreDeviceCommand_1.GetCoreDeviceCommand(args);
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
    getDeployment(args, optionsOrCb, cb) {
        const command = new GetDeploymentCommand_1.GetDeploymentCommand(args);
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
    listComponents(args, optionsOrCb, cb) {
        const command = new ListComponentsCommand_1.ListComponentsCommand(args);
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
    listComponentVersions(args, optionsOrCb, cb) {
        const command = new ListComponentVersionsCommand_1.ListComponentVersionsCommand(args);
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
    listCoreDevices(args, optionsOrCb, cb) {
        const command = new ListCoreDevicesCommand_1.ListCoreDevicesCommand(args);
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
    listDeployments(args, optionsOrCb, cb) {
        const command = new ListDeploymentsCommand_1.ListDeploymentsCommand(args);
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
    listEffectiveDeployments(args, optionsOrCb, cb) {
        const command = new ListEffectiveDeploymentsCommand_1.ListEffectiveDeploymentsCommand(args);
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
    listInstalledComponents(args, optionsOrCb, cb) {
        const command = new ListInstalledComponentsCommand_1.ListInstalledComponentsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    resolveComponentCandidates(args, optionsOrCb, cb) {
        const command = new ResolveComponentCandidatesCommand_1.ResolveComponentCandidatesCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
exports.GreengrassV2 = GreengrassV2;
//# sourceMappingURL=GreengrassV2.js.map