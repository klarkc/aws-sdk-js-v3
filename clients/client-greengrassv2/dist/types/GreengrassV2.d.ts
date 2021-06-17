import { GreengrassV2Client } from "./GreengrassV2Client";
import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "./commands/CancelDeploymentCommand";
import { CreateComponentVersionCommandInput, CreateComponentVersionCommandOutput } from "./commands/CreateComponentVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "./commands/DeleteCoreDeviceCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "./commands/DescribeComponentCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import { GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput } from "./commands/GetComponentVersionArtifactCommand";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "./commands/GetCoreDeviceCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { ListComponentVersionsCommandInput, ListComponentVersionsCommandOutput } from "./commands/ListComponentVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "./commands/ListCoreDevicesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import { ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput } from "./commands/ListEffectiveDeploymentsCommand";
import { ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput } from "./commands/ListInstalledComponentsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput } from "./commands/ResolveComponentCandidatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with AWS IoT Core and export IoT data
 *       to the AWS Cloud. AWS IoT Greengrass developers can use AWS Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>AWS IoT Greengrass Version 2 provides a new major version of the AWS IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the AWS IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is AWS IoT Greengrass?</a> in
 *       the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 */
export declare class GreengrassV2 extends GreengrassV2Client {
    /**
     * <p>Cancels a deployment. This operation cancels the deployment for devices that haven't yet
     *       received it. If a device already received the deployment, this operation doesn't change
     *       anything for that device.</p>
     */
    cancelDeployment(args: CancelDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CancelDeploymentCommandOutput>;
    cancelDeployment(args: CancelDeploymentCommandInput, cb: (err: any, data?: CancelDeploymentCommandOutput) => void): void;
    cancelDeployment(args: CancelDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelDeploymentCommandOutput) => void): void;
    /**
     * <p>Creates a component. Components are software that run on AWS IoT Greengrass core devices. After you
     *       develop and test a component on your core device, you can use this operation to upload your
     *       component to AWS IoT Greengrass. Then, you can deploy the component to other core devices.</p>
     *          <p>You can use this operation to do the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Create components from recipes</b>
     *                </p>
     *                <p>Create a component from a recipe, which is a file that defines the component's
     *           metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
     *           more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">AWS IoT Greengrass component recipe
     *             reference</a> in the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
     *                <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call
     *           this operation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Create components from Lambda functions</b>
     *                </p>
     *                <p>Create a component from an AWS Lambda function that runs on AWS IoT Greengrass. This creates a recipe
     *           and artifacts from the Lambda function's deployment package. You can use this operation to
     *           migrate Lambda functions from AWS IoT Greengrass V1 to AWS IoT Greengrass V2.</p>
     *                <p>This function only accepts Lambda functions that use the following runtimes:</p>
     *                <ul>
     *                   <li>
     *                      <p>Python 2.7 – <code>python2.7</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>Python 3.7 – <code>python3.7</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>Python 3.8 – <code>python3.8</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>Java 8 – <code>java8</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>Node.js 10 – <code>nodejs10.x</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                      <p>Node.js 12 – <code>nodejs12.x</code>
     *                      </p>
     *                   </li>
     *                </ul>
     *                <p>To create a component from a Lambda function, specify <code>lambdaFunction</code>
     *           when you call this operation.</p>
     *             </li>
     *          </ul>
     */
    createComponentVersion(args: CreateComponentVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateComponentVersionCommandOutput>;
    createComponentVersion(args: CreateComponentVersionCommandInput, cb: (err: any, data?: CreateComponentVersionCommandOutput) => void): void;
    createComponentVersion(args: CreateComponentVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateComponentVersionCommandOutput) => void): void;
    /**
     * <p>Creates a continuous deployment for a target, which is a AWS IoT Greengrass core device or group of core
     *       devices. When you add a new core device to a group of core devices that has a deployment, AWS IoT Greengrass
     *       deploys that group's deployment to the new device.</p>
     *          <p>You can define one deployment for each target. When you create a new deployment for a
     *       target that has an existing deployment, you replace the previous deployment. AWS IoT Greengrass applies the
     *       new deployment to the target devices.</p>
     *          <p>Every deployment has a revision number that indicates how many deployment revisions you
     *       define for a target. Use this operation to create a new revision of an existing deployment.
     *       This operation returns the revision number of the new deployment when you create it.</p>
     *          <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the
     *         <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
     */
    createDeployment(args: CreateDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentCommandOutput>;
    createDeployment(args: CreateDeploymentCommandInput, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    createDeployment(args: CreateDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    /**
     * <p>Deletes a version of a component from AWS IoT Greengrass.</p>
     *          <note>
     *             <p>This operation deletes the component's recipe and artifacts. As a result, deployments
     *         that refer to this component version will fail. If you have deployments that use this
     *         component version, you can remove the component from the deployment or update the deployment
     *         to use a valid version.</p>
     *          </note>
     */
    deleteComponent(args: DeleteComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteComponentCommandOutput>;
    deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    deleteComponent(args: DeleteComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    /**
     * <p>Deletes a AWS IoT Greengrass core device, which is an AWS IoT thing. This operation removes the core
     *       device from the list of core devices. This operation doesn't delete the AWS IoT thing. For more
     *       information about how to delete the AWS IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the
     *         <i>AWS IoT API Reference</i>.</p>
     */
    deleteCoreDevice(args: DeleteCoreDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCoreDeviceCommandOutput>;
    deleteCoreDevice(args: DeleteCoreDeviceCommandInput, cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void): void;
    deleteCoreDevice(args: DeleteCoreDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for a version of a component.</p>
     */
    describeComponent(args: DescribeComponentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComponentCommandOutput>;
    describeComponent(args: DescribeComponentCommandInput, cb: (err: any, data?: DescribeComponentCommandOutput) => void): void;
    describeComponent(args: DescribeComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComponentCommandOutput) => void): void;
    /**
     * <p>Gets the recipe for a version of a component. Core devices can call this operation to
     *       identify the artifacts and requirements to install a component.</p>
     */
    getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
    getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
    getComponent(args: GetComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
    /**
     * <p>Gets the pre-signed URL to download a public component artifact. Core devices call this
     *       operation to identify the URL that they can use to download an artifact to install.</p>
     */
    getComponentVersionArtifact(args: GetComponentVersionArtifactCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentVersionArtifactCommandOutput>;
    getComponentVersionArtifact(args: GetComponentVersionArtifactCommandInput, cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void): void;
    getComponentVersionArtifact(args: GetComponentVersionArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void): void;
    /**
     * <p>Retrieves metadata for a AWS IoT Greengrass core device.</p>
     */
    getCoreDevice(args: GetCoreDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetCoreDeviceCommandOutput>;
    getCoreDevice(args: GetCoreDeviceCommandInput, cb: (err: any, data?: GetCoreDeviceCommandOutput) => void): void;
    getCoreDevice(args: GetCoreDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCoreDeviceCommandOutput) => void): void;
    /**
     * <p>Gets a deployment. Deployments define the components that run on AWS IoT Greengrass core devices.</p>
     */
    getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
    getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
    getDeployment(args: GetDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of component summaries. This list includes components that you
     *       have permission to view.</p>
     */
    listComponents(args: ListComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListComponentsCommandOutput>;
    listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    listComponents(args: ListComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of all versions for a component.</p>
     */
    listComponentVersions(args: ListComponentVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListComponentVersionsCommandOutput>;
    listComponentVersions(args: ListComponentVersionsCommandInput, cb: (err: any, data?: ListComponentVersionsCommandOutput) => void): void;
    listComponentVersions(args: ListComponentVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComponentVersionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of AWS IoT Greengrass core devices.</p>
     */
    listCoreDevices(args: ListCoreDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListCoreDevicesCommandOutput>;
    listCoreDevices(args: ListCoreDevicesCommandInput, cb: (err: any, data?: ListCoreDevicesCommandOutput) => void): void;
    listCoreDevices(args: ListCoreDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCoreDevicesCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of deployments.</p>
     */
    listDeployments(args: ListDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentsCommandOutput>;
    listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    listDeployments(args: ListDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core
     *       devices.</p>
     */
    listEffectiveDeployments(args: ListEffectiveDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ListEffectiveDeploymentsCommandOutput>;
    listEffectiveDeployments(args: ListEffectiveDeploymentsCommandInput, cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void): void;
    listEffectiveDeployments(args: ListEffectiveDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of the components that a AWS IoT Greengrass core device runs.</p>
     */
    listInstalledComponents(args: ListInstalledComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListInstalledComponentsCommandOutput>;
    listInstalledComponents(args: ListInstalledComponentsCommandInput, cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void): void;
    listInstalledComponents(args: ListInstalledComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of tags for an AWS IoT Greengrass resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of components that meet the component, version, and platform requirements
     *       of a deployment. AWS IoT Greengrass core devices call this operation when they receive a deployment to
     *       identify the components to install.</p>
     *          <p>This operation identifies components that meet all dependency requirements for a
     *       deployment. If the requirements conflict, then this operation returns an error and the
     *       deployment fails. For example, this occurs if component <code>A</code> requires version
     *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
     *       of a component dependency.</p>
     *          <p>When you specify the component candidates to resolve, AWS IoT Greengrass compares each component's
     *       digest from the core device with the component's digest in the AWS Cloud. If the digests don't
     *       match, then AWS IoT Greengrass specifies to use the version from the AWS Cloud.</p>
     *          <important>
     *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
     *         AWS IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">AWS IoT Greengrass endpoints and quotas</a>.</p>
     *          </important>
     */
    resolveComponentCandidates(args: ResolveComponentCandidatesCommandInput, options?: __HttpHandlerOptions): Promise<ResolveComponentCandidatesCommandOutput>;
    resolveComponentCandidates(args: ResolveComponentCandidatesCommandInput, cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void): void;
    resolveComponentCandidates(args: ResolveComponentCandidatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void): void;
    /**
     * <p>Adds tags to an AWS IoT Greengrass resource. If a tag already exists for the resource, this operation
     *       updates the tag's value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from an AWS IoT Greengrass resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
