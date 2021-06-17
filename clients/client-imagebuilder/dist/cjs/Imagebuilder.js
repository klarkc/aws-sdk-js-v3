"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagebuilder = void 0;
const ImagebuilderClient_1 = require("./ImagebuilderClient");
const CancelImageCreationCommand_1 = require("./commands/CancelImageCreationCommand");
const CreateComponentCommand_1 = require("./commands/CreateComponentCommand");
const CreateContainerRecipeCommand_1 = require("./commands/CreateContainerRecipeCommand");
const CreateDistributionConfigurationCommand_1 = require("./commands/CreateDistributionConfigurationCommand");
const CreateImageCommand_1 = require("./commands/CreateImageCommand");
const CreateImagePipelineCommand_1 = require("./commands/CreateImagePipelineCommand");
const CreateImageRecipeCommand_1 = require("./commands/CreateImageRecipeCommand");
const CreateInfrastructureConfigurationCommand_1 = require("./commands/CreateInfrastructureConfigurationCommand");
const DeleteComponentCommand_1 = require("./commands/DeleteComponentCommand");
const DeleteContainerRecipeCommand_1 = require("./commands/DeleteContainerRecipeCommand");
const DeleteDistributionConfigurationCommand_1 = require("./commands/DeleteDistributionConfigurationCommand");
const DeleteImageCommand_1 = require("./commands/DeleteImageCommand");
const DeleteImagePipelineCommand_1 = require("./commands/DeleteImagePipelineCommand");
const DeleteImageRecipeCommand_1 = require("./commands/DeleteImageRecipeCommand");
const DeleteInfrastructureConfigurationCommand_1 = require("./commands/DeleteInfrastructureConfigurationCommand");
const GetComponentCommand_1 = require("./commands/GetComponentCommand");
const GetComponentPolicyCommand_1 = require("./commands/GetComponentPolicyCommand");
const GetContainerRecipeCommand_1 = require("./commands/GetContainerRecipeCommand");
const GetContainerRecipePolicyCommand_1 = require("./commands/GetContainerRecipePolicyCommand");
const GetDistributionConfigurationCommand_1 = require("./commands/GetDistributionConfigurationCommand");
const GetImageCommand_1 = require("./commands/GetImageCommand");
const GetImagePipelineCommand_1 = require("./commands/GetImagePipelineCommand");
const GetImagePolicyCommand_1 = require("./commands/GetImagePolicyCommand");
const GetImageRecipeCommand_1 = require("./commands/GetImageRecipeCommand");
const GetImageRecipePolicyCommand_1 = require("./commands/GetImageRecipePolicyCommand");
const GetInfrastructureConfigurationCommand_1 = require("./commands/GetInfrastructureConfigurationCommand");
const ImportComponentCommand_1 = require("./commands/ImportComponentCommand");
const ListComponentBuildVersionsCommand_1 = require("./commands/ListComponentBuildVersionsCommand");
const ListComponentsCommand_1 = require("./commands/ListComponentsCommand");
const ListContainerRecipesCommand_1 = require("./commands/ListContainerRecipesCommand");
const ListDistributionConfigurationsCommand_1 = require("./commands/ListDistributionConfigurationsCommand");
const ListImageBuildVersionsCommand_1 = require("./commands/ListImageBuildVersionsCommand");
const ListImagePackagesCommand_1 = require("./commands/ListImagePackagesCommand");
const ListImagePipelineImagesCommand_1 = require("./commands/ListImagePipelineImagesCommand");
const ListImagePipelinesCommand_1 = require("./commands/ListImagePipelinesCommand");
const ListImageRecipesCommand_1 = require("./commands/ListImageRecipesCommand");
const ListImagesCommand_1 = require("./commands/ListImagesCommand");
const ListInfrastructureConfigurationsCommand_1 = require("./commands/ListInfrastructureConfigurationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutComponentPolicyCommand_1 = require("./commands/PutComponentPolicyCommand");
const PutContainerRecipePolicyCommand_1 = require("./commands/PutContainerRecipePolicyCommand");
const PutImagePolicyCommand_1 = require("./commands/PutImagePolicyCommand");
const PutImageRecipePolicyCommand_1 = require("./commands/PutImageRecipePolicyCommand");
const StartImagePipelineExecutionCommand_1 = require("./commands/StartImagePipelineExecutionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDistributionConfigurationCommand_1 = require("./commands/UpdateDistributionConfigurationCommand");
const UpdateImagePipelineCommand_1 = require("./commands/UpdateImagePipelineCommand");
const UpdateInfrastructureConfigurationCommand_1 = require("./commands/UpdateInfrastructureConfigurationCommand");
/**
 * <p>EC2 Image Builder is a fully managed AWS service that makes it easier to automate the
 *       creation, management, and deployment of customized, secure, and up-to-date "golden" server
 *       images that are pre-installed and pre-configured with software and settings to meet specific
 *       IT standards.</p>
 */
class Imagebuilder extends ImagebuilderClient_1.ImagebuilderClient {
    cancelImageCreation(args, optionsOrCb, cb) {
        const command = new CancelImageCreationCommand_1.CancelImageCreationCommand(args);
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
    createComponent(args, optionsOrCb, cb) {
        const command = new CreateComponentCommand_1.CreateComponentCommand(args);
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
    createContainerRecipe(args, optionsOrCb, cb) {
        const command = new CreateContainerRecipeCommand_1.CreateContainerRecipeCommand(args);
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
    createDistributionConfiguration(args, optionsOrCb, cb) {
        const command = new CreateDistributionConfigurationCommand_1.CreateDistributionConfigurationCommand(args);
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
    createImage(args, optionsOrCb, cb) {
        const command = new CreateImageCommand_1.CreateImageCommand(args);
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
    createImagePipeline(args, optionsOrCb, cb) {
        const command = new CreateImagePipelineCommand_1.CreateImagePipelineCommand(args);
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
    createImageRecipe(args, optionsOrCb, cb) {
        const command = new CreateImageRecipeCommand_1.CreateImageRecipeCommand(args);
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
    createInfrastructureConfiguration(args, optionsOrCb, cb) {
        const command = new CreateInfrastructureConfigurationCommand_1.CreateInfrastructureConfigurationCommand(args);
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
    deleteComponent(args, optionsOrCb, cb) {
        const command = new DeleteComponentCommand_1.DeleteComponentCommand(args);
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
    deleteContainerRecipe(args, optionsOrCb, cb) {
        const command = new DeleteContainerRecipeCommand_1.DeleteContainerRecipeCommand(args);
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
    deleteDistributionConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteDistributionConfigurationCommand_1.DeleteDistributionConfigurationCommand(args);
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
    deleteImage(args, optionsOrCb, cb) {
        const command = new DeleteImageCommand_1.DeleteImageCommand(args);
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
    deleteImagePipeline(args, optionsOrCb, cb) {
        const command = new DeleteImagePipelineCommand_1.DeleteImagePipelineCommand(args);
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
    deleteImageRecipe(args, optionsOrCb, cb) {
        const command = new DeleteImageRecipeCommand_1.DeleteImageRecipeCommand(args);
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
    deleteInfrastructureConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteInfrastructureConfigurationCommand_1.DeleteInfrastructureConfigurationCommand(args);
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
    getComponent(args, optionsOrCb, cb) {
        const command = new GetComponentCommand_1.GetComponentCommand(args);
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
    getComponentPolicy(args, optionsOrCb, cb) {
        const command = new GetComponentPolicyCommand_1.GetComponentPolicyCommand(args);
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
    getContainerRecipe(args, optionsOrCb, cb) {
        const command = new GetContainerRecipeCommand_1.GetContainerRecipeCommand(args);
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
    getContainerRecipePolicy(args, optionsOrCb, cb) {
        const command = new GetContainerRecipePolicyCommand_1.GetContainerRecipePolicyCommand(args);
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
    getDistributionConfiguration(args, optionsOrCb, cb) {
        const command = new GetDistributionConfigurationCommand_1.GetDistributionConfigurationCommand(args);
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
    getImage(args, optionsOrCb, cb) {
        const command = new GetImageCommand_1.GetImageCommand(args);
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
    getImagePipeline(args, optionsOrCb, cb) {
        const command = new GetImagePipelineCommand_1.GetImagePipelineCommand(args);
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
    getImagePolicy(args, optionsOrCb, cb) {
        const command = new GetImagePolicyCommand_1.GetImagePolicyCommand(args);
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
    getImageRecipe(args, optionsOrCb, cb) {
        const command = new GetImageRecipeCommand_1.GetImageRecipeCommand(args);
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
    getImageRecipePolicy(args, optionsOrCb, cb) {
        const command = new GetImageRecipePolicyCommand_1.GetImageRecipePolicyCommand(args);
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
    getInfrastructureConfiguration(args, optionsOrCb, cb) {
        const command = new GetInfrastructureConfigurationCommand_1.GetInfrastructureConfigurationCommand(args);
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
    importComponent(args, optionsOrCb, cb) {
        const command = new ImportComponentCommand_1.ImportComponentCommand(args);
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
    listComponentBuildVersions(args, optionsOrCb, cb) {
        const command = new ListComponentBuildVersionsCommand_1.ListComponentBuildVersionsCommand(args);
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
    listComponents(args, optionsOrCb, cb) {
        const command = new ListComponentsCommand_1.ListComponentsCommand(args);
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
    listContainerRecipes(args, optionsOrCb, cb) {
        const command = new ListContainerRecipesCommand_1.ListContainerRecipesCommand(args);
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
    listDistributionConfigurations(args, optionsOrCb, cb) {
        const command = new ListDistributionConfigurationsCommand_1.ListDistributionConfigurationsCommand(args);
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
    listImageBuildVersions(args, optionsOrCb, cb) {
        const command = new ListImageBuildVersionsCommand_1.ListImageBuildVersionsCommand(args);
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
    listImagePackages(args, optionsOrCb, cb) {
        const command = new ListImagePackagesCommand_1.ListImagePackagesCommand(args);
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
    listImagePipelineImages(args, optionsOrCb, cb) {
        const command = new ListImagePipelineImagesCommand_1.ListImagePipelineImagesCommand(args);
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
    listImagePipelines(args, optionsOrCb, cb) {
        const command = new ListImagePipelinesCommand_1.ListImagePipelinesCommand(args);
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
    listImageRecipes(args, optionsOrCb, cb) {
        const command = new ListImageRecipesCommand_1.ListImageRecipesCommand(args);
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
    listImages(args, optionsOrCb, cb) {
        const command = new ListImagesCommand_1.ListImagesCommand(args);
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
    listInfrastructureConfigurations(args, optionsOrCb, cb) {
        const command = new ListInfrastructureConfigurationsCommand_1.ListInfrastructureConfigurationsCommand(args);
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
    putComponentPolicy(args, optionsOrCb, cb) {
        const command = new PutComponentPolicyCommand_1.PutComponentPolicyCommand(args);
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
    putContainerRecipePolicy(args, optionsOrCb, cb) {
        const command = new PutContainerRecipePolicyCommand_1.PutContainerRecipePolicyCommand(args);
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
    putImagePolicy(args, optionsOrCb, cb) {
        const command = new PutImagePolicyCommand_1.PutImagePolicyCommand(args);
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
    putImageRecipePolicy(args, optionsOrCb, cb) {
        const command = new PutImageRecipePolicyCommand_1.PutImageRecipePolicyCommand(args);
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
    startImagePipelineExecution(args, optionsOrCb, cb) {
        const command = new StartImagePipelineExecutionCommand_1.StartImagePipelineExecutionCommand(args);
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
    updateDistributionConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateDistributionConfigurationCommand_1.UpdateDistributionConfigurationCommand(args);
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
    updateImagePipeline(args, optionsOrCb, cb) {
        const command = new UpdateImagePipelineCommand_1.UpdateImagePipelineCommand(args);
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
    updateInfrastructureConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateInfrastructureConfigurationCommand_1.UpdateInfrastructureConfigurationCommand(args);
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
exports.Imagebuilder = Imagebuilder;
//# sourceMappingURL=Imagebuilder.js.map