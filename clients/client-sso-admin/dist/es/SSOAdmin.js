import { __extends } from "tslib";
import { SSOAdminClient } from "./SSOAdminClient";
import { AttachManagedPolicyToPermissionSetCommand, } from "./commands/AttachManagedPolicyToPermissionSetCommand";
import { CreateAccountAssignmentCommand, } from "./commands/CreateAccountAssignmentCommand";
import { CreateInstanceAccessControlAttributeConfigurationCommand, } from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import { CreatePermissionSetCommand, } from "./commands/CreatePermissionSetCommand";
import { DeleteAccountAssignmentCommand, } from "./commands/DeleteAccountAssignmentCommand";
import { DeleteInlinePolicyFromPermissionSetCommand, } from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import { DeleteInstanceAccessControlAttributeConfigurationCommand, } from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import { DeletePermissionSetCommand, } from "./commands/DeletePermissionSetCommand";
import { DescribeAccountAssignmentCreationStatusCommand, } from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import { DescribeAccountAssignmentDeletionStatusCommand, } from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import { DescribeInstanceAccessControlAttributeConfigurationCommand, } from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import { DescribePermissionSetCommand, } from "./commands/DescribePermissionSetCommand";
import { DescribePermissionSetProvisioningStatusCommand, } from "./commands/DescribePermissionSetProvisioningStatusCommand";
import { DetachManagedPolicyFromPermissionSetCommand, } from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import { GetInlinePolicyForPermissionSetCommand, } from "./commands/GetInlinePolicyForPermissionSetCommand";
import { ListAccountAssignmentCreationStatusCommand, } from "./commands/ListAccountAssignmentCreationStatusCommand";
import { ListAccountAssignmentDeletionStatusCommand, } from "./commands/ListAccountAssignmentDeletionStatusCommand";
import { ListAccountAssignmentsCommand, } from "./commands/ListAccountAssignmentsCommand";
import { ListAccountsForProvisionedPermissionSetCommand, } from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import { ListInstancesCommand, } from "./commands/ListInstancesCommand";
import { ListManagedPoliciesInPermissionSetCommand, } from "./commands/ListManagedPoliciesInPermissionSetCommand";
import { ListPermissionSetProvisioningStatusCommand, } from "./commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommand, } from "./commands/ListPermissionSetsCommand";
import { ListPermissionSetsProvisionedToAccountCommand, } from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ProvisionPermissionSetCommand, } from "./commands/ProvisionPermissionSetCommand";
import { PutInlinePolicyToPermissionSetCommand, } from "./commands/PutInlinePolicyToPermissionSetCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateInstanceAccessControlAttributeConfigurationCommand, } from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import { UpdatePermissionSetCommand, } from "./commands/UpdatePermissionSetCommand";
var SSOAdmin = /** @class */ (function (_super) {
    __extends(SSOAdmin, _super);
    function SSOAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSOAdmin.prototype.attachManagedPolicyToPermissionSet = function (args, optionsOrCb, cb) {
        var command = new AttachManagedPolicyToPermissionSetCommand(args);
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
    SSOAdmin.prototype.createAccountAssignment = function (args, optionsOrCb, cb) {
        var command = new CreateAccountAssignmentCommand(args);
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
    SSOAdmin.prototype.createInstanceAccessControlAttributeConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateInstanceAccessControlAttributeConfigurationCommand(args);
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
    SSOAdmin.prototype.createPermissionSet = function (args, optionsOrCb, cb) {
        var command = new CreatePermissionSetCommand(args);
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
    SSOAdmin.prototype.deleteAccountAssignment = function (args, optionsOrCb, cb) {
        var command = new DeleteAccountAssignmentCommand(args);
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
    SSOAdmin.prototype.deleteInlinePolicyFromPermissionSet = function (args, optionsOrCb, cb) {
        var command = new DeleteInlinePolicyFromPermissionSetCommand(args);
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
    SSOAdmin.prototype.deleteInstanceAccessControlAttributeConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteInstanceAccessControlAttributeConfigurationCommand(args);
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
    SSOAdmin.prototype.deletePermissionSet = function (args, optionsOrCb, cb) {
        var command = new DeletePermissionSetCommand(args);
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
    SSOAdmin.prototype.describeAccountAssignmentCreationStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountAssignmentCreationStatusCommand(args);
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
    SSOAdmin.prototype.describeAccountAssignmentDeletionStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountAssignmentDeletionStatusCommand(args);
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
    SSOAdmin.prototype.describeInstanceAccessControlAttributeConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceAccessControlAttributeConfigurationCommand(args);
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
    SSOAdmin.prototype.describePermissionSet = function (args, optionsOrCb, cb) {
        var command = new DescribePermissionSetCommand(args);
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
    SSOAdmin.prototype.describePermissionSetProvisioningStatus = function (args, optionsOrCb, cb) {
        var command = new DescribePermissionSetProvisioningStatusCommand(args);
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
    SSOAdmin.prototype.detachManagedPolicyFromPermissionSet = function (args, optionsOrCb, cb) {
        var command = new DetachManagedPolicyFromPermissionSetCommand(args);
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
    SSOAdmin.prototype.getInlinePolicyForPermissionSet = function (args, optionsOrCb, cb) {
        var command = new GetInlinePolicyForPermissionSetCommand(args);
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
    SSOAdmin.prototype.listAccountAssignmentCreationStatus = function (args, optionsOrCb, cb) {
        var command = new ListAccountAssignmentCreationStatusCommand(args);
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
    SSOAdmin.prototype.listAccountAssignmentDeletionStatus = function (args, optionsOrCb, cb) {
        var command = new ListAccountAssignmentDeletionStatusCommand(args);
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
    SSOAdmin.prototype.listAccountAssignments = function (args, optionsOrCb, cb) {
        var command = new ListAccountAssignmentsCommand(args);
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
    SSOAdmin.prototype.listAccountsForProvisionedPermissionSet = function (args, optionsOrCb, cb) {
        var command = new ListAccountsForProvisionedPermissionSetCommand(args);
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
    SSOAdmin.prototype.listInstances = function (args, optionsOrCb, cb) {
        var command = new ListInstancesCommand(args);
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
    SSOAdmin.prototype.listManagedPoliciesInPermissionSet = function (args, optionsOrCb, cb) {
        var command = new ListManagedPoliciesInPermissionSetCommand(args);
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
    SSOAdmin.prototype.listPermissionSetProvisioningStatus = function (args, optionsOrCb, cb) {
        var command = new ListPermissionSetProvisioningStatusCommand(args);
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
    SSOAdmin.prototype.listPermissionSets = function (args, optionsOrCb, cb) {
        var command = new ListPermissionSetsCommand(args);
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
    SSOAdmin.prototype.listPermissionSetsProvisionedToAccount = function (args, optionsOrCb, cb) {
        var command = new ListPermissionSetsProvisionedToAccountCommand(args);
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
    SSOAdmin.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    SSOAdmin.prototype.provisionPermissionSet = function (args, optionsOrCb, cb) {
        var command = new ProvisionPermissionSetCommand(args);
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
    SSOAdmin.prototype.putInlinePolicyToPermissionSet = function (args, optionsOrCb, cb) {
        var command = new PutInlinePolicyToPermissionSetCommand(args);
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
    SSOAdmin.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    SSOAdmin.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    SSOAdmin.prototype.updateInstanceAccessControlAttributeConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceAccessControlAttributeConfigurationCommand(args);
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
    SSOAdmin.prototype.updatePermissionSet = function (args, optionsOrCb, cb) {
        var command = new UpdatePermissionSetCommand(args);
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
    return SSOAdmin;
}(SSOAdminClient));
export { SSOAdmin };
//# sourceMappingURL=SSOAdmin.js.map