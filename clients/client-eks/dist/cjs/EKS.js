"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EKS = void 0;
const EKSClient_1 = require("./EKSClient");
const AssociateEncryptionConfigCommand_1 = require("./commands/AssociateEncryptionConfigCommand");
const AssociateIdentityProviderConfigCommand_1 = require("./commands/AssociateIdentityProviderConfigCommand");
const CreateAddonCommand_1 = require("./commands/CreateAddonCommand");
const CreateClusterCommand_1 = require("./commands/CreateClusterCommand");
const CreateFargateProfileCommand_1 = require("./commands/CreateFargateProfileCommand");
const CreateNodegroupCommand_1 = require("./commands/CreateNodegroupCommand");
const DeleteAddonCommand_1 = require("./commands/DeleteAddonCommand");
const DeleteClusterCommand_1 = require("./commands/DeleteClusterCommand");
const DeleteFargateProfileCommand_1 = require("./commands/DeleteFargateProfileCommand");
const DeleteNodegroupCommand_1 = require("./commands/DeleteNodegroupCommand");
const DescribeAddonCommand_1 = require("./commands/DescribeAddonCommand");
const DescribeAddonVersionsCommand_1 = require("./commands/DescribeAddonVersionsCommand");
const DescribeClusterCommand_1 = require("./commands/DescribeClusterCommand");
const DescribeFargateProfileCommand_1 = require("./commands/DescribeFargateProfileCommand");
const DescribeIdentityProviderConfigCommand_1 = require("./commands/DescribeIdentityProviderConfigCommand");
const DescribeNodegroupCommand_1 = require("./commands/DescribeNodegroupCommand");
const DescribeUpdateCommand_1 = require("./commands/DescribeUpdateCommand");
const DisassociateIdentityProviderConfigCommand_1 = require("./commands/DisassociateIdentityProviderConfigCommand");
const ListAddonsCommand_1 = require("./commands/ListAddonsCommand");
const ListClustersCommand_1 = require("./commands/ListClustersCommand");
const ListFargateProfilesCommand_1 = require("./commands/ListFargateProfilesCommand");
const ListIdentityProviderConfigsCommand_1 = require("./commands/ListIdentityProviderConfigsCommand");
const ListNodegroupsCommand_1 = require("./commands/ListNodegroupsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListUpdatesCommand_1 = require("./commands/ListUpdatesCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAddonCommand_1 = require("./commands/UpdateAddonCommand");
const UpdateClusterConfigCommand_1 = require("./commands/UpdateClusterConfigCommand");
const UpdateClusterVersionCommand_1 = require("./commands/UpdateClusterVersionCommand");
const UpdateNodegroupConfigCommand_1 = require("./commands/UpdateNodegroupConfigCommand");
const UpdateNodegroupVersionCommand_1 = require("./commands/UpdateNodegroupVersionCommand");
/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             AWS without needing to stand up or maintain your own Kubernetes control plane.
 *             Kubernetes is an open-source system for automating the deployment, scaling, and
 *             management of containerized applications. </p>
 *         <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use
 *             all the existing plugins and tooling from the Kubernetes community. Applications running
 *             on Amazon EKS are fully compatible with applications running on any standard Kubernetes
 *             environment, whether running in on-premises data centers or public clouds. This means
 *             that you can easily migrate any standard Kubernetes application to Amazon EKS without any
 *             code modification required.</p>
 */
class EKS extends EKSClient_1.EKSClient {
    associateEncryptionConfig(args, optionsOrCb, cb) {
        const command = new AssociateEncryptionConfigCommand_1.AssociateEncryptionConfigCommand(args);
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
    associateIdentityProviderConfig(args, optionsOrCb, cb) {
        const command = new AssociateIdentityProviderConfigCommand_1.AssociateIdentityProviderConfigCommand(args);
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
    createAddon(args, optionsOrCb, cb) {
        const command = new CreateAddonCommand_1.CreateAddonCommand(args);
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
    createCluster(args, optionsOrCb, cb) {
        const command = new CreateClusterCommand_1.CreateClusterCommand(args);
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
    createFargateProfile(args, optionsOrCb, cb) {
        const command = new CreateFargateProfileCommand_1.CreateFargateProfileCommand(args);
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
    createNodegroup(args, optionsOrCb, cb) {
        const command = new CreateNodegroupCommand_1.CreateNodegroupCommand(args);
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
    deleteAddon(args, optionsOrCb, cb) {
        const command = new DeleteAddonCommand_1.DeleteAddonCommand(args);
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
    deleteCluster(args, optionsOrCb, cb) {
        const command = new DeleteClusterCommand_1.DeleteClusterCommand(args);
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
    deleteFargateProfile(args, optionsOrCb, cb) {
        const command = new DeleteFargateProfileCommand_1.DeleteFargateProfileCommand(args);
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
    deleteNodegroup(args, optionsOrCb, cb) {
        const command = new DeleteNodegroupCommand_1.DeleteNodegroupCommand(args);
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
    describeAddon(args, optionsOrCb, cb) {
        const command = new DescribeAddonCommand_1.DescribeAddonCommand(args);
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
    describeAddonVersions(args, optionsOrCb, cb) {
        const command = new DescribeAddonVersionsCommand_1.DescribeAddonVersionsCommand(args);
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
    describeCluster(args, optionsOrCb, cb) {
        const command = new DescribeClusterCommand_1.DescribeClusterCommand(args);
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
    describeFargateProfile(args, optionsOrCb, cb) {
        const command = new DescribeFargateProfileCommand_1.DescribeFargateProfileCommand(args);
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
    describeIdentityProviderConfig(args, optionsOrCb, cb) {
        const command = new DescribeIdentityProviderConfigCommand_1.DescribeIdentityProviderConfigCommand(args);
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
    describeNodegroup(args, optionsOrCb, cb) {
        const command = new DescribeNodegroupCommand_1.DescribeNodegroupCommand(args);
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
    describeUpdate(args, optionsOrCb, cb) {
        const command = new DescribeUpdateCommand_1.DescribeUpdateCommand(args);
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
    disassociateIdentityProviderConfig(args, optionsOrCb, cb) {
        const command = new DisassociateIdentityProviderConfigCommand_1.DisassociateIdentityProviderConfigCommand(args);
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
    listAddons(args, optionsOrCb, cb) {
        const command = new ListAddonsCommand_1.ListAddonsCommand(args);
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
    listClusters(args, optionsOrCb, cb) {
        const command = new ListClustersCommand_1.ListClustersCommand(args);
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
    listFargateProfiles(args, optionsOrCb, cb) {
        const command = new ListFargateProfilesCommand_1.ListFargateProfilesCommand(args);
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
    listIdentityProviderConfigs(args, optionsOrCb, cb) {
        const command = new ListIdentityProviderConfigsCommand_1.ListIdentityProviderConfigsCommand(args);
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
    listNodegroups(args, optionsOrCb, cb) {
        const command = new ListNodegroupsCommand_1.ListNodegroupsCommand(args);
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
    listUpdates(args, optionsOrCb, cb) {
        const command = new ListUpdatesCommand_1.ListUpdatesCommand(args);
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
    updateAddon(args, optionsOrCb, cb) {
        const command = new UpdateAddonCommand_1.UpdateAddonCommand(args);
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
    updateClusterConfig(args, optionsOrCb, cb) {
        const command = new UpdateClusterConfigCommand_1.UpdateClusterConfigCommand(args);
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
    updateClusterVersion(args, optionsOrCb, cb) {
        const command = new UpdateClusterVersionCommand_1.UpdateClusterVersionCommand(args);
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
    updateNodegroupConfig(args, optionsOrCb, cb) {
        const command = new UpdateNodegroupConfigCommand_1.UpdateNodegroupConfigCommand(args);
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
    updateNodegroupVersion(args, optionsOrCb, cb) {
        const command = new UpdateNodegroupVersionCommand_1.UpdateNodegroupVersionCommand(args);
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
exports.EKS = EKS;
//# sourceMappingURL=EKS.js.map