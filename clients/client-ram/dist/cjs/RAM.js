"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAM = void 0;
const RAMClient_1 = require("./RAMClient");
const AcceptResourceShareInvitationCommand_1 = require("./commands/AcceptResourceShareInvitationCommand");
const AssociateResourceShareCommand_1 = require("./commands/AssociateResourceShareCommand");
const AssociateResourceSharePermissionCommand_1 = require("./commands/AssociateResourceSharePermissionCommand");
const CreateResourceShareCommand_1 = require("./commands/CreateResourceShareCommand");
const DeleteResourceShareCommand_1 = require("./commands/DeleteResourceShareCommand");
const DisassociateResourceShareCommand_1 = require("./commands/DisassociateResourceShareCommand");
const DisassociateResourceSharePermissionCommand_1 = require("./commands/DisassociateResourceSharePermissionCommand");
const EnableSharingWithAwsOrganizationCommand_1 = require("./commands/EnableSharingWithAwsOrganizationCommand");
const GetPermissionCommand_1 = require("./commands/GetPermissionCommand");
const GetResourcePoliciesCommand_1 = require("./commands/GetResourcePoliciesCommand");
const GetResourceShareAssociationsCommand_1 = require("./commands/GetResourceShareAssociationsCommand");
const GetResourceShareInvitationsCommand_1 = require("./commands/GetResourceShareInvitationsCommand");
const GetResourceSharesCommand_1 = require("./commands/GetResourceSharesCommand");
const ListPendingInvitationResourcesCommand_1 = require("./commands/ListPendingInvitationResourcesCommand");
const ListPermissionsCommand_1 = require("./commands/ListPermissionsCommand");
const ListPrincipalsCommand_1 = require("./commands/ListPrincipalsCommand");
const ListResourceSharePermissionsCommand_1 = require("./commands/ListResourceSharePermissionsCommand");
const ListResourceTypesCommand_1 = require("./commands/ListResourceTypesCommand");
const ListResourcesCommand_1 = require("./commands/ListResourcesCommand");
const PromoteResourceShareCreatedFromPolicyCommand_1 = require("./commands/PromoteResourceShareCreatedFromPolicyCommand");
const RejectResourceShareInvitationCommand_1 = require("./commands/RejectResourceShareInvitationCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateResourceShareCommand_1 = require("./commands/UpdateResourceShareCommand");
/**
 * <p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you
 *           create a resource share, associate the resource with the resource share, and specify the principals that
 *           can access the resources associated with the resource share. The following principals are supported:
 *           AWS accounts, organizational units (OU) from AWS Organizations, and organizations from
 *           AWS Organizations.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/ram/latest/userguide/">AWS Resource Access Manager User Guide</a>.</p>
 */
class RAM extends RAMClient_1.RAMClient {
    acceptResourceShareInvitation(args, optionsOrCb, cb) {
        const command = new AcceptResourceShareInvitationCommand_1.AcceptResourceShareInvitationCommand(args);
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
    associateResourceShare(args, optionsOrCb, cb) {
        const command = new AssociateResourceShareCommand_1.AssociateResourceShareCommand(args);
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
    associateResourceSharePermission(args, optionsOrCb, cb) {
        const command = new AssociateResourceSharePermissionCommand_1.AssociateResourceSharePermissionCommand(args);
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
    createResourceShare(args, optionsOrCb, cb) {
        const command = new CreateResourceShareCommand_1.CreateResourceShareCommand(args);
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
    deleteResourceShare(args, optionsOrCb, cb) {
        const command = new DeleteResourceShareCommand_1.DeleteResourceShareCommand(args);
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
    disassociateResourceShare(args, optionsOrCb, cb) {
        const command = new DisassociateResourceShareCommand_1.DisassociateResourceShareCommand(args);
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
    disassociateResourceSharePermission(args, optionsOrCb, cb) {
        const command = new DisassociateResourceSharePermissionCommand_1.DisassociateResourceSharePermissionCommand(args);
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
    enableSharingWithAwsOrganization(args, optionsOrCb, cb) {
        const command = new EnableSharingWithAwsOrganizationCommand_1.EnableSharingWithAwsOrganizationCommand(args);
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
    getPermission(args, optionsOrCb, cb) {
        const command = new GetPermissionCommand_1.GetPermissionCommand(args);
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
    getResourcePolicies(args, optionsOrCb, cb) {
        const command = new GetResourcePoliciesCommand_1.GetResourcePoliciesCommand(args);
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
    getResourceShareAssociations(args, optionsOrCb, cb) {
        const command = new GetResourceShareAssociationsCommand_1.GetResourceShareAssociationsCommand(args);
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
    getResourceShareInvitations(args, optionsOrCb, cb) {
        const command = new GetResourceShareInvitationsCommand_1.GetResourceShareInvitationsCommand(args);
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
    getResourceShares(args, optionsOrCb, cb) {
        const command = new GetResourceSharesCommand_1.GetResourceSharesCommand(args);
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
    listPendingInvitationResources(args, optionsOrCb, cb) {
        const command = new ListPendingInvitationResourcesCommand_1.ListPendingInvitationResourcesCommand(args);
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
    listPermissions(args, optionsOrCb, cb) {
        const command = new ListPermissionsCommand_1.ListPermissionsCommand(args);
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
    listPrincipals(args, optionsOrCb, cb) {
        const command = new ListPrincipalsCommand_1.ListPrincipalsCommand(args);
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
    listResources(args, optionsOrCb, cb) {
        const command = new ListResourcesCommand_1.ListResourcesCommand(args);
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
    listResourceSharePermissions(args, optionsOrCb, cb) {
        const command = new ListResourceSharePermissionsCommand_1.ListResourceSharePermissionsCommand(args);
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
    listResourceTypes(args, optionsOrCb, cb) {
        const command = new ListResourceTypesCommand_1.ListResourceTypesCommand(args);
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
    promoteResourceShareCreatedFromPolicy(args, optionsOrCb, cb) {
        const command = new PromoteResourceShareCreatedFromPolicyCommand_1.PromoteResourceShareCreatedFromPolicyCommand(args);
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
    rejectResourceShareInvitation(args, optionsOrCb, cb) {
        const command = new RejectResourceShareInvitationCommand_1.RejectResourceShareInvitationCommand(args);
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
    updateResourceShare(args, optionsOrCb, cb) {
        const command = new UpdateResourceShareCommand_1.UpdateResourceShareCommand(args);
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
exports.RAM = RAM;
//# sourceMappingURL=RAM.js.map