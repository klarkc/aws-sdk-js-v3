"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOAdmin = void 0;
const SSOAdminClient_1 = require("./SSOAdminClient");
const AttachManagedPolicyToPermissionSetCommand_1 = require("./commands/AttachManagedPolicyToPermissionSetCommand");
const CreateAccountAssignmentCommand_1 = require("./commands/CreateAccountAssignmentCommand");
const CreateInstanceAccessControlAttributeConfigurationCommand_1 = require("./commands/CreateInstanceAccessControlAttributeConfigurationCommand");
const CreatePermissionSetCommand_1 = require("./commands/CreatePermissionSetCommand");
const DeleteAccountAssignmentCommand_1 = require("./commands/DeleteAccountAssignmentCommand");
const DeleteInlinePolicyFromPermissionSetCommand_1 = require("./commands/DeleteInlinePolicyFromPermissionSetCommand");
const DeleteInstanceAccessControlAttributeConfigurationCommand_1 = require("./commands/DeleteInstanceAccessControlAttributeConfigurationCommand");
const DeletePermissionSetCommand_1 = require("./commands/DeletePermissionSetCommand");
const DescribeAccountAssignmentCreationStatusCommand_1 = require("./commands/DescribeAccountAssignmentCreationStatusCommand");
const DescribeAccountAssignmentDeletionStatusCommand_1 = require("./commands/DescribeAccountAssignmentDeletionStatusCommand");
const DescribeInstanceAccessControlAttributeConfigurationCommand_1 = require("./commands/DescribeInstanceAccessControlAttributeConfigurationCommand");
const DescribePermissionSetCommand_1 = require("./commands/DescribePermissionSetCommand");
const DescribePermissionSetProvisioningStatusCommand_1 = require("./commands/DescribePermissionSetProvisioningStatusCommand");
const DetachManagedPolicyFromPermissionSetCommand_1 = require("./commands/DetachManagedPolicyFromPermissionSetCommand");
const GetInlinePolicyForPermissionSetCommand_1 = require("./commands/GetInlinePolicyForPermissionSetCommand");
const ListAccountAssignmentCreationStatusCommand_1 = require("./commands/ListAccountAssignmentCreationStatusCommand");
const ListAccountAssignmentDeletionStatusCommand_1 = require("./commands/ListAccountAssignmentDeletionStatusCommand");
const ListAccountAssignmentsCommand_1 = require("./commands/ListAccountAssignmentsCommand");
const ListAccountsForProvisionedPermissionSetCommand_1 = require("./commands/ListAccountsForProvisionedPermissionSetCommand");
const ListInstancesCommand_1 = require("./commands/ListInstancesCommand");
const ListManagedPoliciesInPermissionSetCommand_1 = require("./commands/ListManagedPoliciesInPermissionSetCommand");
const ListPermissionSetProvisioningStatusCommand_1 = require("./commands/ListPermissionSetProvisioningStatusCommand");
const ListPermissionSetsCommand_1 = require("./commands/ListPermissionSetsCommand");
const ListPermissionSetsProvisionedToAccountCommand_1 = require("./commands/ListPermissionSetsProvisionedToAccountCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ProvisionPermissionSetCommand_1 = require("./commands/ProvisionPermissionSetCommand");
const PutInlinePolicyToPermissionSetCommand_1 = require("./commands/PutInlinePolicyToPermissionSetCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateInstanceAccessControlAttributeConfigurationCommand_1 = require("./commands/UpdateInstanceAccessControlAttributeConfigurationCommand");
const UpdatePermissionSetCommand_1 = require("./commands/UpdatePermissionSetCommand");
class SSOAdmin extends SSOAdminClient_1.SSOAdminClient {
    attachManagedPolicyToPermissionSet(args, optionsOrCb, cb) {
        const command = new AttachManagedPolicyToPermissionSetCommand_1.AttachManagedPolicyToPermissionSetCommand(args);
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
    createAccountAssignment(args, optionsOrCb, cb) {
        const command = new CreateAccountAssignmentCommand_1.CreateAccountAssignmentCommand(args);
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
    createInstanceAccessControlAttributeConfiguration(args, optionsOrCb, cb) {
        const command = new CreateInstanceAccessControlAttributeConfigurationCommand_1.CreateInstanceAccessControlAttributeConfigurationCommand(args);
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
    createPermissionSet(args, optionsOrCb, cb) {
        const command = new CreatePermissionSetCommand_1.CreatePermissionSetCommand(args);
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
    deleteAccountAssignment(args, optionsOrCb, cb) {
        const command = new DeleteAccountAssignmentCommand_1.DeleteAccountAssignmentCommand(args);
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
    deleteInlinePolicyFromPermissionSet(args, optionsOrCb, cb) {
        const command = new DeleteInlinePolicyFromPermissionSetCommand_1.DeleteInlinePolicyFromPermissionSetCommand(args);
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
    deleteInstanceAccessControlAttributeConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteInstanceAccessControlAttributeConfigurationCommand_1.DeleteInstanceAccessControlAttributeConfigurationCommand(args);
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
    deletePermissionSet(args, optionsOrCb, cb) {
        const command = new DeletePermissionSetCommand_1.DeletePermissionSetCommand(args);
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
    describeAccountAssignmentCreationStatus(args, optionsOrCb, cb) {
        const command = new DescribeAccountAssignmentCreationStatusCommand_1.DescribeAccountAssignmentCreationStatusCommand(args);
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
    describeAccountAssignmentDeletionStatus(args, optionsOrCb, cb) {
        const command = new DescribeAccountAssignmentDeletionStatusCommand_1.DescribeAccountAssignmentDeletionStatusCommand(args);
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
    describeInstanceAccessControlAttributeConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeInstanceAccessControlAttributeConfigurationCommand_1.DescribeInstanceAccessControlAttributeConfigurationCommand(args);
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
    describePermissionSet(args, optionsOrCb, cb) {
        const command = new DescribePermissionSetCommand_1.DescribePermissionSetCommand(args);
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
    describePermissionSetProvisioningStatus(args, optionsOrCb, cb) {
        const command = new DescribePermissionSetProvisioningStatusCommand_1.DescribePermissionSetProvisioningStatusCommand(args);
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
    detachManagedPolicyFromPermissionSet(args, optionsOrCb, cb) {
        const command = new DetachManagedPolicyFromPermissionSetCommand_1.DetachManagedPolicyFromPermissionSetCommand(args);
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
    getInlinePolicyForPermissionSet(args, optionsOrCb, cb) {
        const command = new GetInlinePolicyForPermissionSetCommand_1.GetInlinePolicyForPermissionSetCommand(args);
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
    listAccountAssignmentCreationStatus(args, optionsOrCb, cb) {
        const command = new ListAccountAssignmentCreationStatusCommand_1.ListAccountAssignmentCreationStatusCommand(args);
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
    listAccountAssignmentDeletionStatus(args, optionsOrCb, cb) {
        const command = new ListAccountAssignmentDeletionStatusCommand_1.ListAccountAssignmentDeletionStatusCommand(args);
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
    listAccountAssignments(args, optionsOrCb, cb) {
        const command = new ListAccountAssignmentsCommand_1.ListAccountAssignmentsCommand(args);
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
    listAccountsForProvisionedPermissionSet(args, optionsOrCb, cb) {
        const command = new ListAccountsForProvisionedPermissionSetCommand_1.ListAccountsForProvisionedPermissionSetCommand(args);
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
    listInstances(args, optionsOrCb, cb) {
        const command = new ListInstancesCommand_1.ListInstancesCommand(args);
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
    listManagedPoliciesInPermissionSet(args, optionsOrCb, cb) {
        const command = new ListManagedPoliciesInPermissionSetCommand_1.ListManagedPoliciesInPermissionSetCommand(args);
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
    listPermissionSetProvisioningStatus(args, optionsOrCb, cb) {
        const command = new ListPermissionSetProvisioningStatusCommand_1.ListPermissionSetProvisioningStatusCommand(args);
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
    listPermissionSets(args, optionsOrCb, cb) {
        const command = new ListPermissionSetsCommand_1.ListPermissionSetsCommand(args);
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
    listPermissionSetsProvisionedToAccount(args, optionsOrCb, cb) {
        const command = new ListPermissionSetsProvisionedToAccountCommand_1.ListPermissionSetsProvisionedToAccountCommand(args);
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
    provisionPermissionSet(args, optionsOrCb, cb) {
        const command = new ProvisionPermissionSetCommand_1.ProvisionPermissionSetCommand(args);
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
    putInlinePolicyToPermissionSet(args, optionsOrCb, cb) {
        const command = new PutInlinePolicyToPermissionSetCommand_1.PutInlinePolicyToPermissionSetCommand(args);
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
    updateInstanceAccessControlAttributeConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateInstanceAccessControlAttributeConfigurationCommand_1.UpdateInstanceAccessControlAttributeConfigurationCommand(args);
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
    updatePermissionSet(args, optionsOrCb, cb) {
        const command = new UpdatePermissionSetCommand_1.UpdatePermissionSetCommand(args);
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
exports.SSOAdmin = SSOAdmin;
//# sourceMappingURL=SSOAdmin.js.map