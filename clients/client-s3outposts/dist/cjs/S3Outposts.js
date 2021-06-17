"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Outposts = void 0;
const S3OutpostsClient_1 = require("./S3OutpostsClient");
const CreateEndpointCommand_1 = require("./commands/CreateEndpointCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const ListEndpointsCommand_1 = require("./commands/ListEndpointsCommand");
/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
class S3Outposts extends S3OutpostsClient_1.S3OutpostsClient {
    createEndpoint(args, optionsOrCb, cb) {
        const command = new CreateEndpointCommand_1.CreateEndpointCommand(args);
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
    deleteEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteEndpointCommand_1.DeleteEndpointCommand(args);
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
    listEndpoints(args, optionsOrCb, cb) {
        const command = new ListEndpointsCommand_1.ListEndpointsCommand(args);
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
exports.S3Outposts = S3Outposts;
//# sourceMappingURL=S3Outposts.js.map