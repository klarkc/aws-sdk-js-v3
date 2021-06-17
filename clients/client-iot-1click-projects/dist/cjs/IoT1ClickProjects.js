"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoT1ClickProjects = void 0;
const IoT1ClickProjectsClient_1 = require("./IoT1ClickProjectsClient");
const AssociateDeviceWithPlacementCommand_1 = require("./commands/AssociateDeviceWithPlacementCommand");
const CreatePlacementCommand_1 = require("./commands/CreatePlacementCommand");
const CreateProjectCommand_1 = require("./commands/CreateProjectCommand");
const DeletePlacementCommand_1 = require("./commands/DeletePlacementCommand");
const DeleteProjectCommand_1 = require("./commands/DeleteProjectCommand");
const DescribePlacementCommand_1 = require("./commands/DescribePlacementCommand");
const DescribeProjectCommand_1 = require("./commands/DescribeProjectCommand");
const DisassociateDeviceFromPlacementCommand_1 = require("./commands/DisassociateDeviceFromPlacementCommand");
const GetDevicesInPlacementCommand_1 = require("./commands/GetDevicesInPlacementCommand");
const ListPlacementsCommand_1 = require("./commands/ListPlacementsCommand");
const ListProjectsCommand_1 = require("./commands/ListProjectsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdatePlacementCommand_1 = require("./commands/UpdatePlacementCommand");
const UpdateProjectCommand_1 = require("./commands/UpdateProjectCommand");
/**
 * <p>The AWS IoT 1-Click Projects API Reference</p>
 */
class IoT1ClickProjects extends IoT1ClickProjectsClient_1.IoT1ClickProjectsClient {
    associateDeviceWithPlacement(args, optionsOrCb, cb) {
        const command = new AssociateDeviceWithPlacementCommand_1.AssociateDeviceWithPlacementCommand(args);
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
    createPlacement(args, optionsOrCb, cb) {
        const command = new CreatePlacementCommand_1.CreatePlacementCommand(args);
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
    createProject(args, optionsOrCb, cb) {
        const command = new CreateProjectCommand_1.CreateProjectCommand(args);
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
    deletePlacement(args, optionsOrCb, cb) {
        const command = new DeletePlacementCommand_1.DeletePlacementCommand(args);
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
    deleteProject(args, optionsOrCb, cb) {
        const command = new DeleteProjectCommand_1.DeleteProjectCommand(args);
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
    describePlacement(args, optionsOrCb, cb) {
        const command = new DescribePlacementCommand_1.DescribePlacementCommand(args);
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
    describeProject(args, optionsOrCb, cb) {
        const command = new DescribeProjectCommand_1.DescribeProjectCommand(args);
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
    disassociateDeviceFromPlacement(args, optionsOrCb, cb) {
        const command = new DisassociateDeviceFromPlacementCommand_1.DisassociateDeviceFromPlacementCommand(args);
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
    getDevicesInPlacement(args, optionsOrCb, cb) {
        const command = new GetDevicesInPlacementCommand_1.GetDevicesInPlacementCommand(args);
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
    listPlacements(args, optionsOrCb, cb) {
        const command = new ListPlacementsCommand_1.ListPlacementsCommand(args);
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
    listProjects(args, optionsOrCb, cb) {
        const command = new ListProjectsCommand_1.ListProjectsCommand(args);
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
    updatePlacement(args, optionsOrCb, cb) {
        const command = new UpdatePlacementCommand_1.UpdatePlacementCommand(args);
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
    updateProject(args, optionsOrCb, cb) {
        const command = new UpdateProjectCommand_1.UpdateProjectCommand(args);
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
exports.IoT1ClickProjects = IoT1ClickProjects;
//# sourceMappingURL=IoT1ClickProjects.js.map