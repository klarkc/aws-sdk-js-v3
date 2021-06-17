import { __extends } from "tslib";
import { DLMClient } from "./DLMClient";
import { CreateLifecyclePolicyCommand, } from "./commands/CreateLifecyclePolicyCommand";
import { DeleteLifecyclePolicyCommand, } from "./commands/DeleteLifecyclePolicyCommand";
import { GetLifecyclePoliciesCommand, } from "./commands/GetLifecyclePoliciesCommand";
import { GetLifecyclePolicyCommand, } from "./commands/GetLifecyclePolicyCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateLifecyclePolicyCommand, } from "./commands/UpdateLifecyclePolicyCommand";
/**
 * <fullname>Amazon Data Lifecycle Manager</fullname>
 * 		       <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create
 * 			lifecycle policies, which are used to automate operations on the specified
 * 			resources.</p>
 * 		       <p>Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM
 * 			with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">Automating the Amazon EBS
 * 				Snapshot Lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
var DLM = /** @class */ (function (_super) {
    __extends(DLM, _super);
    function DLM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DLM.prototype.createLifecyclePolicy = function (args, optionsOrCb, cb) {
        var command = new CreateLifecyclePolicyCommand(args);
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
    DLM.prototype.deleteLifecyclePolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteLifecyclePolicyCommand(args);
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
    DLM.prototype.getLifecyclePolicies = function (args, optionsOrCb, cb) {
        var command = new GetLifecyclePoliciesCommand(args);
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
    DLM.prototype.getLifecyclePolicy = function (args, optionsOrCb, cb) {
        var command = new GetLifecyclePolicyCommand(args);
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
    DLM.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    DLM.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    DLM.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    DLM.prototype.updateLifecyclePolicy = function (args, optionsOrCb, cb) {
        var command = new UpdateLifecyclePolicyCommand(args);
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
    return DLM;
}(DLMClient));
export { DLM };
//# sourceMappingURL=DLM.js.map