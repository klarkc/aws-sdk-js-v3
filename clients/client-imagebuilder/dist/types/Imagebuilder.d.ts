import { ImagebuilderClient } from "./ImagebuilderClient";
import { CancelImageCreationCommandInput, CancelImageCreationCommandOutput } from "./commands/CancelImageCreationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand";
import { CreateContainerRecipeCommandInput, CreateContainerRecipeCommandOutput } from "./commands/CreateContainerRecipeCommand";
import { CreateDistributionConfigurationCommandInput, CreateDistributionConfigurationCommandOutput } from "./commands/CreateDistributionConfigurationCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import { CreateImagePipelineCommandInput, CreateImagePipelineCommandOutput } from "./commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "./commands/CreateImageRecipeCommand";
import { CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput } from "./commands/CreateInfrastructureConfigurationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import { DeleteContainerRecipeCommandInput, DeleteContainerRecipeCommandOutput } from "./commands/DeleteContainerRecipeCommand";
import { DeleteDistributionConfigurationCommandInput, DeleteDistributionConfigurationCommandOutput } from "./commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import { DeleteImagePipelineCommandInput, DeleteImagePipelineCommandOutput } from "./commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "./commands/DeleteImageRecipeCommand";
import { DeleteInfrastructureConfigurationCommandInput, DeleteInfrastructureConfigurationCommandOutput } from "./commands/DeleteInfrastructureConfigurationCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "./commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "./commands/GetContainerRecipeCommand";
import { GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput } from "./commands/GetContainerRecipePolicyCommand";
import { GetDistributionConfigurationCommandInput, GetDistributionConfigurationCommandOutput } from "./commands/GetDistributionConfigurationCommand";
import { GetImageCommandInput, GetImageCommandOutput } from "./commands/GetImageCommand";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "./commands/GetImagePipelineCommand";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "./commands/GetImagePolicyCommand";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "./commands/GetImageRecipeCommand";
import { GetImageRecipePolicyCommandInput, GetImageRecipePolicyCommandOutput } from "./commands/GetImageRecipePolicyCommand";
import { GetInfrastructureConfigurationCommandInput, GetInfrastructureConfigurationCommandOutput } from "./commands/GetInfrastructureConfigurationCommand";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "./commands/ImportComponentCommand";
import { ListComponentBuildVersionsCommandInput, ListComponentBuildVersionsCommandOutput } from "./commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import { ListContainerRecipesCommandInput, ListContainerRecipesCommandOutput } from "./commands/ListContainerRecipesCommand";
import { ListDistributionConfigurationsCommandInput, ListDistributionConfigurationsCommandOutput } from "./commands/ListDistributionConfigurationsCommand";
import { ListImageBuildVersionsCommandInput, ListImageBuildVersionsCommandOutput } from "./commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "./commands/ListImagePackagesCommand";
import { ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput } from "./commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "./commands/ListImagePipelinesCommand";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "./commands/ListImageRecipesCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import { ListInfrastructureConfigurationsCommandInput, ListInfrastructureConfigurationsCommandOutput } from "./commands/ListInfrastructureConfigurationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "./commands/PutComponentPolicyCommand";
import { PutContainerRecipePolicyCommandInput, PutContainerRecipePolicyCommandOutput } from "./commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "./commands/PutImagePolicyCommand";
import { PutImageRecipePolicyCommandInput, PutImageRecipePolicyCommandOutput } from "./commands/PutImageRecipePolicyCommand";
import { StartImagePipelineExecutionCommandInput, StartImagePipelineExecutionCommandOutput } from "./commands/StartImagePipelineExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDistributionConfigurationCommandInput, UpdateDistributionConfigurationCommandOutput } from "./commands/UpdateDistributionConfigurationCommand";
import { UpdateImagePipelineCommandInput, UpdateImagePipelineCommandOutput } from "./commands/UpdateImagePipelineCommand";
import { UpdateInfrastructureConfigurationCommandInput, UpdateInfrastructureConfigurationCommandOutput } from "./commands/UpdateInfrastructureConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>EC2 Image Builder is a fully managed AWS service that makes it easier to automate the
 *       creation, management, and deployment of customized, secure, and up-to-date "golden" server
 *       images that are pre-installed and pre-configured with software and settings to meet specific
 *       IT standards.</p>
 */
export declare class Imagebuilder extends ImagebuilderClient {
    /**
     * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on
     *       images in a non-terminal state.</p>
     */
    cancelImageCreation(args: CancelImageCreationCommandInput, options?: __HttpHandlerOptions): Promise<CancelImageCreationCommandOutput>;
    cancelImageCreation(args: CancelImageCreationCommandInput, cb: (err: any, data?: CancelImageCreationCommandOutput) => void): void;
    cancelImageCreation(args: CancelImageCreationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelImageCreationCommandOutput) => void): void;
    /**
     * <p>Creates a new component that can be used to build, validate, test, and assess your
     *       image.</p>
     */
    createComponent(args: CreateComponentCommandInput, options?: __HttpHandlerOptions): Promise<CreateComponentCommandOutput>;
    createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
    createComponent(args: CreateComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
    /**
     * <p>Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.</p>
     */
    createContainerRecipe(args: CreateContainerRecipeCommandInput, options?: __HttpHandlerOptions): Promise<CreateContainerRecipeCommandOutput>;
    createContainerRecipe(args: CreateContainerRecipeCommandInput, cb: (err: any, data?: CreateContainerRecipeCommandOutput) => void): void;
    createContainerRecipe(args: CreateContainerRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContainerRecipeCommandOutput) => void): void;
    /**
     * <p>Creates a new distribution configuration. Distribution configurations define and configure
     *       the outputs of your pipeline.</p>
     */
    createDistributionConfiguration(args: CreateDistributionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateDistributionConfigurationCommandOutput>;
    createDistributionConfiguration(args: CreateDistributionConfigurationCommandInput, cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void): void;
    createDistributionConfiguration(args: CreateDistributionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void): void;
    /**
     * <p> Creates a new image. This request will create a new image along with all of the
     *       configured output resources defined in the distribution configuration. You must specify
     *       exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.</p>
     */
    createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
    createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
    createImage(args: CreateImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
    /**
     * <p> Creates a new image pipeline. Image pipelines enable you to automate the creation and
     *       distribution of images.</p>
     */
    createImagePipeline(args: CreateImagePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreateImagePipelineCommandOutput>;
    createImagePipeline(args: CreateImagePipelineCommandInput, cb: (err: any, data?: CreateImagePipelineCommandOutput) => void): void;
    createImagePipeline(args: CreateImagePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImagePipelineCommandOutput) => void): void;
    /**
     * <p> Creates a new image recipe. Image recipes define how images are configured, tested, and
     *       assessed.</p>
     */
    createImageRecipe(args: CreateImageRecipeCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageRecipeCommandOutput>;
    createImageRecipe(args: CreateImageRecipeCommandInput, cb: (err: any, data?: CreateImageRecipeCommandOutput) => void): void;
    createImageRecipe(args: CreateImageRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageRecipeCommandOutput) => void): void;
    /**
     * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the
     *       environment in which your image will be built and tested.</p>
     */
    createInfrastructureConfiguration(args: CreateInfrastructureConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateInfrastructureConfigurationCommandOutput>;
    createInfrastructureConfiguration(args: CreateInfrastructureConfigurationCommandInput, cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void): void;
    createInfrastructureConfiguration(args: CreateInfrastructureConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void): void;
    /**
     * <p> Deletes a component build version.</p>
     */
    deleteComponent(args: DeleteComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteComponentCommandOutput>;
    deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    deleteComponent(args: DeleteComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    /**
     * <p>Deletes a container recipe.</p>
     */
    deleteContainerRecipe(args: DeleteContainerRecipeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContainerRecipeCommandOutput>;
    deleteContainerRecipe(args: DeleteContainerRecipeCommandInput, cb: (err: any, data?: DeleteContainerRecipeCommandOutput) => void): void;
    deleteContainerRecipe(args: DeleteContainerRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContainerRecipeCommandOutput) => void): void;
    /**
     * <p> Deletes a distribution configuration.</p>
     */
    deleteDistributionConfiguration(args: DeleteDistributionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDistributionConfigurationCommandOutput>;
    deleteDistributionConfiguration(args: DeleteDistributionConfigurationCommandInput, cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void): void;
    deleteDistributionConfiguration(args: DeleteDistributionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void): void;
    /**
     * <p> Deletes an image.</p>
     */
    deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
    deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    deleteImage(args: DeleteImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    /**
     * <p> Deletes an image pipeline.</p>
     */
    deleteImagePipeline(args: DeleteImagePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImagePipelineCommandOutput>;
    deleteImagePipeline(args: DeleteImagePipelineCommandInput, cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void): void;
    deleteImagePipeline(args: DeleteImagePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void): void;
    /**
     * <p> Deletes an image recipe.</p>
     */
    deleteImageRecipe(args: DeleteImageRecipeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageRecipeCommandOutput>;
    deleteImageRecipe(args: DeleteImageRecipeCommandInput, cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void): void;
    deleteImageRecipe(args: DeleteImageRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void): void;
    /**
     * <p> Deletes an infrastructure configuration.</p>
     */
    deleteInfrastructureConfiguration(args: DeleteInfrastructureConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInfrastructureConfigurationCommandOutput>;
    deleteInfrastructureConfiguration(args: DeleteInfrastructureConfigurationCommandInput, cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void): void;
    deleteInfrastructureConfiguration(args: DeleteInfrastructureConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void): void;
    /**
     * <p> Gets a component object.</p>
     */
    getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
    getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
    getComponent(args: GetComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
    /**
     * <p> Gets a component policy.</p>
     */
    getComponentPolicy(args: GetComponentPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentPolicyCommandOutput>;
    getComponentPolicy(args: GetComponentPolicyCommandInput, cb: (err: any, data?: GetComponentPolicyCommandOutput) => void): void;
    getComponentPolicy(args: GetComponentPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComponentPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves a container recipe.</p>
     */
    getContainerRecipe(args: GetContainerRecipeCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerRecipeCommandOutput>;
    getContainerRecipe(args: GetContainerRecipeCommandInput, cb: (err: any, data?: GetContainerRecipeCommandOutput) => void): void;
    getContainerRecipe(args: GetContainerRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerRecipeCommandOutput) => void): void;
    /**
     * <p>Retrieves the policy for a container recipe.</p>
     */
    getContainerRecipePolicy(args: GetContainerRecipePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerRecipePolicyCommandOutput>;
    getContainerRecipePolicy(args: GetContainerRecipePolicyCommandInput, cb: (err: any, data?: GetContainerRecipePolicyCommandOutput) => void): void;
    getContainerRecipePolicy(args: GetContainerRecipePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerRecipePolicyCommandOutput) => void): void;
    /**
     * <p> Gets a distribution configuration.</p>
     */
    getDistributionConfiguration(args: GetDistributionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionConfigurationCommandOutput>;
    getDistributionConfiguration(args: GetDistributionConfigurationCommandInput, cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void): void;
    getDistributionConfiguration(args: GetDistributionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void): void;
    /**
     * <p> Gets an image.</p>
     */
    getImage(args: GetImageCommandInput, options?: __HttpHandlerOptions): Promise<GetImageCommandOutput>;
    getImage(args: GetImageCommandInput, cb: (err: any, data?: GetImageCommandOutput) => void): void;
    getImage(args: GetImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetImageCommandOutput) => void): void;
    /**
     * <p> Gets an image pipeline.</p>
     */
    getImagePipeline(args: GetImagePipelineCommandInput, options?: __HttpHandlerOptions): Promise<GetImagePipelineCommandOutput>;
    getImagePipeline(args: GetImagePipelineCommandInput, cb: (err: any, data?: GetImagePipelineCommandOutput) => void): void;
    getImagePipeline(args: GetImagePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetImagePipelineCommandOutput) => void): void;
    /**
     * <p> Gets an image policy.</p>
     */
    getImagePolicy(args: GetImagePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetImagePolicyCommandOutput>;
    getImagePolicy(args: GetImagePolicyCommandInput, cb: (err: any, data?: GetImagePolicyCommandOutput) => void): void;
    getImagePolicy(args: GetImagePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetImagePolicyCommandOutput) => void): void;
    /**
     * <p> Gets an image recipe.</p>
     */
    getImageRecipe(args: GetImageRecipeCommandInput, options?: __HttpHandlerOptions): Promise<GetImageRecipeCommandOutput>;
    getImageRecipe(args: GetImageRecipeCommandInput, cb: (err: any, data?: GetImageRecipeCommandOutput) => void): void;
    getImageRecipe(args: GetImageRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetImageRecipeCommandOutput) => void): void;
    /**
     * <p> Gets an image recipe policy.</p>
     */
    getImageRecipePolicy(args: GetImageRecipePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetImageRecipePolicyCommandOutput>;
    getImageRecipePolicy(args: GetImageRecipePolicyCommandInput, cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void): void;
    getImageRecipePolicy(args: GetImageRecipePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void): void;
    /**
     * <p> Gets an infrastructure configuration.</p>
     */
    getInfrastructureConfiguration(args: GetInfrastructureConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetInfrastructureConfigurationCommandOutput>;
    getInfrastructureConfiguration(args: GetInfrastructureConfigurationCommandInput, cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void): void;
    getInfrastructureConfiguration(args: GetInfrastructureConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void): void;
    /**
     * <p>Imports a component and transforms its data into a component document.</p>
     */
    importComponent(args: ImportComponentCommandInput, options?: __HttpHandlerOptions): Promise<ImportComponentCommandOutput>;
    importComponent(args: ImportComponentCommandInput, cb: (err: any, data?: ImportComponentCommandOutput) => void): void;
    importComponent(args: ImportComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportComponentCommandOutput) => void): void;
    /**
     * <p> Returns the list of component build versions for the specified semantic version.</p>
     */
    listComponentBuildVersions(args: ListComponentBuildVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListComponentBuildVersionsCommandOutput>;
    listComponentBuildVersions(args: ListComponentBuildVersionsCommandInput, cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void): void;
    listComponentBuildVersions(args: ListComponentBuildVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void): void;
    /**
     * <p>Returns the list of component build versions for the specified semantic version.</p>
     */
    listComponents(args: ListComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListComponentsCommandOutput>;
    listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    listComponents(args: ListComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    /**
     * <p>Returns a list of container recipes.</p>
     */
    listContainerRecipes(args: ListContainerRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListContainerRecipesCommandOutput>;
    listContainerRecipes(args: ListContainerRecipesCommandInput, cb: (err: any, data?: ListContainerRecipesCommandOutput) => void): void;
    listContainerRecipes(args: ListContainerRecipesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContainerRecipesCommandOutput) => void): void;
    /**
     * <p>Returns a list of distribution configurations.</p>
     */
    listDistributionConfigurations(args: ListDistributionConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListDistributionConfigurationsCommandOutput>;
    listDistributionConfigurations(args: ListDistributionConfigurationsCommandInput, cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void): void;
    listDistributionConfigurations(args: ListDistributionConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void): void;
    /**
     * <p> Returns a list of image build versions.</p>
     */
    listImageBuildVersions(args: ListImageBuildVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListImageBuildVersionsCommandOutput>;
    listImageBuildVersions(args: ListImageBuildVersionsCommandInput, cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void): void;
    listImageBuildVersions(args: ListImageBuildVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void): void;
    /**
     * <p>List the Packages that are associated with an Image Build Version, as determined by AWS Systems Manager Inventory at build time.</p>
     */
    listImagePackages(args: ListImagePackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagePackagesCommandOutput>;
    listImagePackages(args: ListImagePackagesCommandInput, cb: (err: any, data?: ListImagePackagesCommandOutput) => void): void;
    listImagePackages(args: ListImagePackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagePackagesCommandOutput) => void): void;
    /**
     * <p> Returns a list of images created by the specified pipeline.</p>
     */
    listImagePipelineImages(args: ListImagePipelineImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagePipelineImagesCommandOutput>;
    listImagePipelineImages(args: ListImagePipelineImagesCommandInput, cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void): void;
    listImagePipelineImages(args: ListImagePipelineImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void): void;
    /**
     * <p>Returns a list of image pipelines.</p>
     */
    listImagePipelines(args: ListImagePipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagePipelinesCommandOutput>;
    listImagePipelines(args: ListImagePipelinesCommandInput, cb: (err: any, data?: ListImagePipelinesCommandOutput) => void): void;
    listImagePipelines(args: ListImagePipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagePipelinesCommandOutput) => void): void;
    /**
     * <p> Returns a list of image recipes.</p>
     */
    listImageRecipes(args: ListImageRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListImageRecipesCommandOutput>;
    listImageRecipes(args: ListImageRecipesCommandInput, cb: (err: any, data?: ListImageRecipesCommandOutput) => void): void;
    listImageRecipes(args: ListImageRecipesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImageRecipesCommandOutput) => void): void;
    /**
     * <p> Returns the list of images that you have access to.</p>
     */
    listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
    listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    listImages(args: ListImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    /**
     * <p> Returns a list of infrastructure configurations.</p>
     */
    listInfrastructureConfigurations(args: ListInfrastructureConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInfrastructureConfigurationsCommandOutput>;
    listInfrastructureConfigurations(args: ListInfrastructureConfigurationsCommandInput, cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void): void;
    listInfrastructureConfigurations(args: ListInfrastructureConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void): void;
    /**
     * <p> Returns the list of tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p> Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
     *         <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
     *       all principals with whom the resource is shared.</p>
     */
    putComponentPolicy(args: PutComponentPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutComponentPolicyCommandOutput>;
    putComponentPolicy(args: PutComponentPolicyCommandInput, cb: (err: any, data?: PutComponentPolicyCommandOutput) => void): void;
    putComponentPolicy(args: PutComponentPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutComponentPolicyCommandOutput) => void): void;
    /**
     * <p>Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.</p>
     */
    putContainerRecipePolicy(args: PutContainerRecipePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutContainerRecipePolicyCommandOutput>;
    putContainerRecipePolicy(args: PutContainerRecipePolicyCommandInput, cb: (err: any, data?: PutContainerRecipePolicyCommandOutput) => void): void;
    putContainerRecipePolicy(args: PutContainerRecipePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutContainerRecipePolicyCommandOutput) => void): void;
    /**
     * <p>Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
     *         <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
     *       all principals with whom the resource is shared.</p>
     */
    putImagePolicy(args: PutImagePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutImagePolicyCommandOutput>;
    putImagePolicy(args: PutImagePolicyCommandInput, cb: (err: any, data?: PutImagePolicyCommandOutput) => void): void;
    putImagePolicy(args: PutImagePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImagePolicyCommandOutput) => void): void;
    /**
     * <p> Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
     *         <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
     *       all principals with whom the resource is shared.</p>
     */
    putImageRecipePolicy(args: PutImageRecipePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutImageRecipePolicyCommandOutput>;
    putImageRecipePolicy(args: PutImageRecipePolicyCommandInput, cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void): void;
    putImageRecipePolicy(args: PutImageRecipePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void): void;
    /**
     * <p> Manually triggers a pipeline to create an image.</p>
     */
    startImagePipelineExecution(args: StartImagePipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartImagePipelineExecutionCommandOutput>;
    startImagePipelineExecution(args: StartImagePipelineExecutionCommandInput, cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void): void;
    startImagePipelineExecution(args: StartImagePipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void): void;
    /**
     * <p> Adds a tag to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p> Removes a tag from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p> Updates a new distribution configuration. Distribution configurations define and
     *       configure the outputs of your pipeline.</p>
     */
    updateDistributionConfiguration(args: UpdateDistributionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDistributionConfigurationCommandOutput>;
    updateDistributionConfiguration(args: UpdateDistributionConfigurationCommandInput, cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void): void;
    updateDistributionConfiguration(args: UpdateDistributionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void): void;
    /**
     * <p> Updates an image pipeline. Image pipelines enable you to automate the creation and
     *       distribution of images.</p>
     *   	      <note>
     *             <p>UpdateImagePipeline does not support selective updates for the pipeline.
     *   		You must specify all of the required properties in the update request, not just
     *   		the properties that have changed.</p>
     *          </note>
     */
    updateImagePipeline(args: UpdateImagePipelineCommandInput, options?: __HttpHandlerOptions): Promise<UpdateImagePipelineCommandOutput>;
    updateImagePipeline(args: UpdateImagePipelineCommandInput, cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void): void;
    updateImagePipeline(args: UpdateImagePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void): void;
    /**
     * <p> Updates a new infrastructure configuration. An infrastructure configuration defines the
     *       environment in which your image will be built and tested.</p>
     */
    updateInfrastructureConfiguration(args: UpdateInfrastructureConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInfrastructureConfigurationCommandOutput>;
    updateInfrastructureConfiguration(args: UpdateInfrastructureConfigurationCommandInput, cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void): void;
    updateInfrastructureConfiguration(args: UpdateInfrastructureConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void): void;
}
