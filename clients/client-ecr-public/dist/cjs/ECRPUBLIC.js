"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECRPUBLIC = void 0;
const ECRPUBLICClient_1 = require("./ECRPUBLICClient");
const BatchCheckLayerAvailabilityCommand_1 = require("./commands/BatchCheckLayerAvailabilityCommand");
const BatchDeleteImageCommand_1 = require("./commands/BatchDeleteImageCommand");
const CompleteLayerUploadCommand_1 = require("./commands/CompleteLayerUploadCommand");
const CreateRepositoryCommand_1 = require("./commands/CreateRepositoryCommand");
const DeleteRepositoryCommand_1 = require("./commands/DeleteRepositoryCommand");
const DeleteRepositoryPolicyCommand_1 = require("./commands/DeleteRepositoryPolicyCommand");
const DescribeImageTagsCommand_1 = require("./commands/DescribeImageTagsCommand");
const DescribeImagesCommand_1 = require("./commands/DescribeImagesCommand");
const DescribeRegistriesCommand_1 = require("./commands/DescribeRegistriesCommand");
const DescribeRepositoriesCommand_1 = require("./commands/DescribeRepositoriesCommand");
const GetAuthorizationTokenCommand_1 = require("./commands/GetAuthorizationTokenCommand");
const GetRegistryCatalogDataCommand_1 = require("./commands/GetRegistryCatalogDataCommand");
const GetRepositoryCatalogDataCommand_1 = require("./commands/GetRepositoryCatalogDataCommand");
const GetRepositoryPolicyCommand_1 = require("./commands/GetRepositoryPolicyCommand");
const InitiateLayerUploadCommand_1 = require("./commands/InitiateLayerUploadCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutImageCommand_1 = require("./commands/PutImageCommand");
const PutRegistryCatalogDataCommand_1 = require("./commands/PutRegistryCatalogDataCommand");
const PutRepositoryCatalogDataCommand_1 = require("./commands/PutRepositoryCatalogDataCommand");
const SetRepositoryPolicyCommand_1 = require("./commands/SetRepositoryPolicyCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UploadLayerPartCommand_1 = require("./commands/UploadLayerPartCommand");
/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the familiar
 *          Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a
 *          secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI)
 *          images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR
 *          API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
class ECRPUBLIC extends ECRPUBLICClient_1.ECRPUBLICClient {
    batchCheckLayerAvailability(args, optionsOrCb, cb) {
        const command = new BatchCheckLayerAvailabilityCommand_1.BatchCheckLayerAvailabilityCommand(args);
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
    batchDeleteImage(args, optionsOrCb, cb) {
        const command = new BatchDeleteImageCommand_1.BatchDeleteImageCommand(args);
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
    completeLayerUpload(args, optionsOrCb, cb) {
        const command = new CompleteLayerUploadCommand_1.CompleteLayerUploadCommand(args);
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
    createRepository(args, optionsOrCb, cb) {
        const command = new CreateRepositoryCommand_1.CreateRepositoryCommand(args);
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
    deleteRepository(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryCommand_1.DeleteRepositoryCommand(args);
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
    deleteRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryPolicyCommand_1.DeleteRepositoryPolicyCommand(args);
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
    describeImages(args, optionsOrCb, cb) {
        const command = new DescribeImagesCommand_1.DescribeImagesCommand(args);
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
    describeImageTags(args, optionsOrCb, cb) {
        const command = new DescribeImageTagsCommand_1.DescribeImageTagsCommand(args);
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
    describeRegistries(args, optionsOrCb, cb) {
        const command = new DescribeRegistriesCommand_1.DescribeRegistriesCommand(args);
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
    describeRepositories(args, optionsOrCb, cb) {
        const command = new DescribeRepositoriesCommand_1.DescribeRepositoriesCommand(args);
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
    getAuthorizationToken(args, optionsOrCb, cb) {
        const command = new GetAuthorizationTokenCommand_1.GetAuthorizationTokenCommand(args);
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
    getRegistryCatalogData(args, optionsOrCb, cb) {
        const command = new GetRegistryCatalogDataCommand_1.GetRegistryCatalogDataCommand(args);
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
    getRepositoryCatalogData(args, optionsOrCb, cb) {
        const command = new GetRepositoryCatalogDataCommand_1.GetRepositoryCatalogDataCommand(args);
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
    getRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new GetRepositoryPolicyCommand_1.GetRepositoryPolicyCommand(args);
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
    initiateLayerUpload(args, optionsOrCb, cb) {
        const command = new InitiateLayerUploadCommand_1.InitiateLayerUploadCommand(args);
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
    putImage(args, optionsOrCb, cb) {
        const command = new PutImageCommand_1.PutImageCommand(args);
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
    putRegistryCatalogData(args, optionsOrCb, cb) {
        const command = new PutRegistryCatalogDataCommand_1.PutRegistryCatalogDataCommand(args);
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
    putRepositoryCatalogData(args, optionsOrCb, cb) {
        const command = new PutRepositoryCatalogDataCommand_1.PutRepositoryCatalogDataCommand(args);
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
    setRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new SetRepositoryPolicyCommand_1.SetRepositoryPolicyCommand(args);
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
    uploadLayerPart(args, optionsOrCb, cb) {
        const command = new UploadLayerPartCommand_1.UploadLayerPartCommand(args);
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
exports.ECRPUBLIC = ECRPUBLIC;
//# sourceMappingURL=ECRPUBLIC.js.map