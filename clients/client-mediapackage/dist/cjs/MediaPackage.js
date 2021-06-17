"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPackage = void 0;
const MediaPackageClient_1 = require("./MediaPackageClient");
const ConfigureLogsCommand_1 = require("./commands/ConfigureLogsCommand");
const CreateChannelCommand_1 = require("./commands/CreateChannelCommand");
const CreateHarvestJobCommand_1 = require("./commands/CreateHarvestJobCommand");
const CreateOriginEndpointCommand_1 = require("./commands/CreateOriginEndpointCommand");
const DeleteChannelCommand_1 = require("./commands/DeleteChannelCommand");
const DeleteOriginEndpointCommand_1 = require("./commands/DeleteOriginEndpointCommand");
const DescribeChannelCommand_1 = require("./commands/DescribeChannelCommand");
const DescribeHarvestJobCommand_1 = require("./commands/DescribeHarvestJobCommand");
const DescribeOriginEndpointCommand_1 = require("./commands/DescribeOriginEndpointCommand");
const ListChannelsCommand_1 = require("./commands/ListChannelsCommand");
const ListHarvestJobsCommand_1 = require("./commands/ListHarvestJobsCommand");
const ListOriginEndpointsCommand_1 = require("./commands/ListOriginEndpointsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RotateChannelCredentialsCommand_1 = require("./commands/RotateChannelCredentialsCommand");
const RotateIngestEndpointCredentialsCommand_1 = require("./commands/RotateIngestEndpointCredentialsCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateChannelCommand_1 = require("./commands/UpdateChannelCommand");
const UpdateOriginEndpointCommand_1 = require("./commands/UpdateOriginEndpointCommand");
/**
 * AWS Elemental MediaPackage
 */
class MediaPackage extends MediaPackageClient_1.MediaPackageClient {
    configureLogs(args, optionsOrCb, cb) {
        const command = new ConfigureLogsCommand_1.ConfigureLogsCommand(args);
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
    createChannel(args, optionsOrCb, cb) {
        const command = new CreateChannelCommand_1.CreateChannelCommand(args);
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
    createHarvestJob(args, optionsOrCb, cb) {
        const command = new CreateHarvestJobCommand_1.CreateHarvestJobCommand(args);
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
    createOriginEndpoint(args, optionsOrCb, cb) {
        const command = new CreateOriginEndpointCommand_1.CreateOriginEndpointCommand(args);
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
    deleteChannel(args, optionsOrCb, cb) {
        const command = new DeleteChannelCommand_1.DeleteChannelCommand(args);
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
    deleteOriginEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteOriginEndpointCommand_1.DeleteOriginEndpointCommand(args);
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
    describeChannel(args, optionsOrCb, cb) {
        const command = new DescribeChannelCommand_1.DescribeChannelCommand(args);
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
    describeHarvestJob(args, optionsOrCb, cb) {
        const command = new DescribeHarvestJobCommand_1.DescribeHarvestJobCommand(args);
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
    describeOriginEndpoint(args, optionsOrCb, cb) {
        const command = new DescribeOriginEndpointCommand_1.DescribeOriginEndpointCommand(args);
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
    listChannels(args, optionsOrCb, cb) {
        const command = new ListChannelsCommand_1.ListChannelsCommand(args);
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
    listHarvestJobs(args, optionsOrCb, cb) {
        const command = new ListHarvestJobsCommand_1.ListHarvestJobsCommand(args);
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
    listOriginEndpoints(args, optionsOrCb, cb) {
        const command = new ListOriginEndpointsCommand_1.ListOriginEndpointsCommand(args);
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
    rotateChannelCredentials(args, optionsOrCb, cb) {
        const command = new RotateChannelCredentialsCommand_1.RotateChannelCredentialsCommand(args);
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
    rotateIngestEndpointCredentials(args, optionsOrCb, cb) {
        const command = new RotateIngestEndpointCredentialsCommand_1.RotateIngestEndpointCredentialsCommand(args);
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
    updateChannel(args, optionsOrCb, cb) {
        const command = new UpdateChannelCommand_1.UpdateChannelCommand(args);
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
    updateOriginEndpoint(args, optionsOrCb, cb) {
        const command = new UpdateOriginEndpointCommand_1.UpdateOriginEndpointCommand(args);
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
exports.MediaPackage = MediaPackage;
//# sourceMappingURL=MediaPackage.js.map