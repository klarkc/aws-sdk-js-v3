"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLM = void 0;
const DLMClient_1 = require("./DLMClient");
const CreateLifecyclePolicyCommand_1 = require("./commands/CreateLifecyclePolicyCommand");
const DeleteLifecyclePolicyCommand_1 = require("./commands/DeleteLifecyclePolicyCommand");
const GetLifecyclePoliciesCommand_1 = require("./commands/GetLifecyclePoliciesCommand");
const GetLifecyclePolicyCommand_1 = require("./commands/GetLifecyclePolicyCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLifecyclePolicyCommand_1 = require("./commands/UpdateLifecyclePolicyCommand");
/**
 * <fullname>Amazon Data Lifecycle Manager</fullname>
 * 		       <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create
 * 			lifecycle policies, which are used to automate operations on the specified
 * 			resources.</p>
 * 		       <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM
 * 			with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">Automating the Amazon EBS
 * 				Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
class DLM extends DLMClient_1.DLMClient {
    createLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new CreateLifecyclePolicyCommand_1.CreateLifecyclePolicyCommand(args);
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
    deleteLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new DeleteLifecyclePolicyCommand_1.DeleteLifecyclePolicyCommand(args);
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
    getLifecyclePolicies(args, optionsOrCb, cb) {
        const command = new GetLifecyclePoliciesCommand_1.GetLifecyclePoliciesCommand(args);
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
    getLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new GetLifecyclePolicyCommand_1.GetLifecyclePolicyCommand(args);
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
    updateLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new UpdateLifecyclePolicyCommand_1.UpdateLifecyclePolicyCommand(args);
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
exports.DLM = DLM;
//# sourceMappingURL=DLM.js.map