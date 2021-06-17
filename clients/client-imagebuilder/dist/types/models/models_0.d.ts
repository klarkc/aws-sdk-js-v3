import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum ImageStatus {
    AVAILABLE = "AVAILABLE",
    BUILDING = "BUILDING",
    CANCELLED = "CANCELLED",
    CREATING = "CREATING",
    DELETED = "DELETED",
    DEPRECATED = "DEPRECATED",
    DISTRIBUTING = "DISTRIBUTING",
    FAILED = "FAILED",
    INTEGRATING = "INTEGRATING",
    PENDING = "PENDING",
    TESTING = "TESTING"
}
/**
 * <p> Image state shows the image status and the reason for that status.</p>
 */
export interface ImageState {
    /**
     * <p>The status of the image.</p>
     */
    status?: ImageStatus | string;
    /**
     * <p>The reason for the image's status.</p>
     */
    reason?: string;
}
export declare namespace ImageState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageState) => any;
}
/**
 * <p> Details of an EC2 AMI.</p>
 */
export interface Ami {
    /**
     * <p>The AWS Region of the EC2 AMI.</p>
     */
    region?: string;
    /**
     * <p>The AMI ID of the EC2 AMI.</p>
     */
    image?: string;
    /**
     * <p>The name of the EC2 AMI.</p>
     */
    name?: string;
    /**
     * <p>The description of the EC2 AMI. Minimum and maximum length are in characters.</p>
     */
    description?: string;
    /**
     * <p> Image state shows the image status and the reason for that status.</p>
     */
    state?: ImageState;
    /**
     * <p>The account ID of the owner of the AMI.</p>
     */
    accountId?: string;
}
export declare namespace Ami {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Ami) => any;
}
/**
 * <p>Describes the configuration for a launch permission. The launch permission modification request is sent to the
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a>
 *       API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public,
 *       set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a>.</p>
 */
export interface LaunchPermissionConfiguration {
    /**
     * <p>The AWS account ID.</p>
     */
    userIds?: string[];
    /**
     * <p>The name of the group.</p>
     */
    userGroups?: string[];
}
export declare namespace LaunchPermissionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchPermissionConfiguration) => any;
}
/**
 * <p> Define and configure the output AMIs of the pipeline.</p>
 */
export interface AmiDistributionConfiguration {
    /**
     * <p>The name of the distribution configuration.</p>
     */
    name?: string;
    /**
     * <p>The description of the distribution configuration. Minimum and maximum length are in characters.</p>
     */
    description?: string;
    /**
     * <p>The ID of an account to which you want to distribute an image.</p>
     */
    targetAccountIds?: string[];
    /**
     * <p>The tags to apply to AMIs distributed to this Region.</p>
     */
    amiTags?: {
        [key: string]: string;
    };
    /**
     * <p>The KMS key identifier used to encrypt the distributed image.</p>
     */
    kmsKeyId?: string;
    /**
     * <p> Launch permissions can be used to configure which AWS accounts can use the AMI to launch
     *       instances.</p>
     */
    launchPermission?: LaunchPermissionConfiguration;
}
export declare namespace AmiDistributionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AmiDistributionConfiguration) => any;
}
/**
 * <p>You have exceeded the permitted request rate for the specific operation.</p>
 */
export interface CallRateLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "CallRateLimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace CallRateLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CallRateLimitExceededException) => any;
}
export interface CancelImageCreationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image whose creation you want to cancel.</p>
     */
    imageBuildVersionArn: string | undefined;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CancelImageCreationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelImageCreationRequest) => any;
}
export interface CancelImageCreationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image whose creation has been cancelled.</p>
     */
    imageBuildVersionArn?: string;
}
export declare namespace CancelImageCreationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelImageCreationResponse) => any;
}
/**
 * <p>These errors are usually caused by a client action, such as using an action or resource on
 *       behalf of a user that doesn't have permissions to use the action or resource, or specifying an
 *       invalid resource identifier.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
    name: "ClientException";
    $fault: "client";
    message?: string;
}
export declare namespace ClientException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientException) => any;
}
/**
 * <p>You are not authorized to perform the requested operation.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    message?: string;
}
export declare namespace ForbiddenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ForbiddenException) => any;
}
/**
 * <p>You have specified a client token for an operation using parameter values that differ from
 *       a previous request that used the same client token.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
    name: "IdempotentParameterMismatchException";
    $fault: "client";
    message?: string;
}
export declare namespace IdempotentParameterMismatchException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdempotentParameterMismatchException) => any;
}
/**
 * <p>You have made a request for an action that is not supported by the service.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The resource that you are trying to operate on is currently in use. Review the message
 *       details and retry later.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
/**
 * <p>This exception is thrown when the service encounters an unrecoverable exception.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    message?: string;
}
export declare namespace ServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceException) => any;
}
/**
 * <p>The service is unable to process your request at this time.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    message?: string;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
export declare enum Platform {
    LINUX = "Linux",
    WINDOWS = "Windows"
}
export declare enum ComponentType {
    BUILD = "BUILD",
    TEST = "TEST"
}
/**
 * <p>A detailed view of a component.</p>
 */
export interface Component {
    /**
     * <p>The Amazon Resource Name (ARN) of the component.</p>
     */
    arn?: string;
    /**
     * <p>The name of the component.</p>
     */
    name?: string;
    /**
     * <p>The version of the component.</p>
     */
    version?: string;
    /**
     * <p>The description of the component.</p>
     */
    description?: string;
    /**
     * <p>The change description of the component.</p>
     */
    changeDescription?: string;
    /**
     * <p>The type of the component denotes whether the component is used to build the image or only
     *       to test it.</p>
     */
    type?: ComponentType | string;
    /**
     * <p>The platform of the component.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The operating system (OS) version supported by the component. If the OS information is
     *       available, a prefix match is performed against the parent image OS version during image recipe
     *       creation.</p>
     */
    supportedOsVersions?: string[];
    /**
     * <p>The owner of the component.</p>
     */
    owner?: string;
    /**
     * <p>The data of the component.</p>
     */
    data?: string;
    /**
     * <p>The KMS key identifier used to encrypt the component.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The encryption status of the component.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The date that the component was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The tags associated with the component.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Component {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Component) => any;
}
/**
 * <p> Configuration details of the component.</p>
 */
export interface ComponentConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the component.</p>
     */
    componentArn: string | undefined;
}
export declare namespace ComponentConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ComponentConfiguration) => any;
}
export declare enum ComponentFormat {
    SHELL = "SHELL"
}
/**
 * <p>A high-level summary of a component.</p>
 */
export interface ComponentSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the component.</p>
     */
    arn?: string;
    /**
     * <p>The name of the component.</p>
     */
    name?: string;
    /**
     * <p>The version of the component.</p>
     */
    version?: string;
    /**
     * <p>The platform of the component.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The operating system (OS) version supported by the component. If the OS information is
     *       available, a prefix match is performed against the parent image OS version during image recipe
     *       creation.</p>
     */
    supportedOsVersions?: string[];
    /**
     * <p>The type of the component denotes whether the component is used to build the image or only
     *       to test it.</p>
     */
    type?: ComponentType | string;
    /**
     * <p>The owner of the component.</p>
     */
    owner?: string;
    /**
     * <p>The description of the component.</p>
     */
    description?: string;
    /**
     * <p>The change description of the component.</p>
     */
    changeDescription?: string;
    /**
     * <p>The date that the component was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The tags associated with the component.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ComponentSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ComponentSummary) => any;
}
/**
 * <p>A high-level overview of a component semantic version.</p>
 */
export interface ComponentVersion {
    /**
     * <p>The Amazon Resource Name (ARN) of the component.</p>
     */
    arn?: string;
    /**
     * <p>The name of the component.</p>
     */
    name?: string;
    /**
     * <p>The semantic version of the component.</p>
     */
    version?: string;
    /**
     * <p>The description of the component.</p>
     */
    description?: string;
    /**
     * <p>The platform of the component.</p>
     */
    platform?: Platform | string;
    /**
     * <p>he operating system (OS) version supported by the component. If the OS information is
     *       available, a prefix match is performed against the parent image OS version during image recipe
     *       creation.</p>
     */
    supportedOsVersions?: string[];
    /**
     * <p>The type of the component denotes whether the component is used to build the image or only
     *       to test it.</p>
     */
    type?: ComponentType | string;
    /**
     * <p>The owner of the component.</p>
     */
    owner?: string;
    /**
     * <p>The date that the component was created.</p>
     */
    dateCreated?: string;
}
export declare namespace ComponentVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ComponentVersion) => any;
}
/**
 * <p>A container encapsulates the runtime environment for an application.</p>
 */
export interface Container {
    /**
     * <p>Containers and container images are Region-specific. This is the Region context for the container.</p>
     */
    region?: string;
    /**
     * <p>A list of URIs for containers created in the context Region.</p>
     */
    imageUris?: string[];
}
export declare namespace Container {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Container) => any;
}
export declare enum ContainerRepositoryService {
    ECR = "ECR"
}
/**
 * <p>The container repository where the output container image is stored.</p>
 */
export interface TargetContainerRepository {
    /**
     * <p>Specifies the service in which this image was registered.</p>
     */
    service: ContainerRepositoryService | string | undefined;
    /**
     * <p>The name of the container repository where the output container image is stored. This name is prefixed by the repository location.</p>
     */
    repositoryName: string | undefined;
}
export declare namespace TargetContainerRepository {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TargetContainerRepository) => any;
}
/**
 * <p>Container distribution settings for encryption, licensing, and sharing in a specific Region.</p>
 */
export interface ContainerDistributionConfiguration {
    /**
     * <p>The description of the container distribution configuration.</p>
     */
    description?: string;
    /**
     * <p>Tags that are attached to the container distribution configuration.</p>
     */
    containerTags?: string[];
    /**
     * <p>The destination repository for the container distribution configuration.</p>
     */
    targetRepository: TargetContainerRepository | undefined;
}
export declare namespace ContainerDistributionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContainerDistributionConfiguration) => any;
}
export declare enum ContainerType {
    DOCKER = "DOCKER"
}
export declare enum EbsVolumeType {
    GP2 = "gp2",
    GP3 = "gp3",
    IO1 = "io1",
    IO2 = "io2",
    SC1 = "sc1",
    ST1 = "st1",
    STANDARD = "standard"
}
/**
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
    /**
     * <p>Use to configure device encryption.</p>
     */
    encrypted?: boolean;
    /**
     * <p>Use to configure delete on termination of the associated device.</p>
     */
    deleteOnTermination?: boolean;
    /**
     * <p>Use to configure device IOPS.</p>
     */
    iops?: number;
    /**
     * <p>Use to configure the KMS key to use when encrypting the device.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The snapshot that defines the device contents.</p>
     */
    snapshotId?: string;
    /**
     * <p>Use to override the device's volume size.</p>
     */
    volumeSize?: number;
    /**
     * <p>Use to override the device's volume type.</p>
     */
    volumeType?: EbsVolumeType | string;
}
export declare namespace EbsInstanceBlockDeviceSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EbsInstanceBlockDeviceSpecification) => any;
}
/**
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 */
export interface InstanceBlockDeviceMapping {
    /**
     * <p>The device to which these mappings apply.</p>
     */
    deviceName?: string;
    /**
     * <p>Use to manage Amazon EBS-specific configuration for this mapping.</p>
     */
    ebs?: EbsInstanceBlockDeviceSpecification;
    /**
     * <p>Use to manage instance ephemeral devices.</p>
     */
    virtualName?: string;
    /**
     * <p>Use to remove a mapping from the parent image.</p>
     */
    noDevice?: string;
}
export declare namespace InstanceBlockDeviceMapping {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceBlockDeviceMapping) => any;
}
/**
 * <p>Defines a custom source AMI and block device mapping configurations of an instance
 *       used for building and testing container images.</p>
 */
export interface InstanceConfiguration {
    /**
     * <p>The AMI ID to use as the base image for a container build and test instance. If not specified,
     *       Image Builder will use the appropriate ECS-optimized AMI as a base image.</p>
     */
    image?: string;
    /**
     * <p>Defines the block devices to attach for building an instance from this Image Builder AMI.</p>
     */
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
}
export declare namespace InstanceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceConfiguration) => any;
}
/**
 * <p>A container recipe.</p>
 */
export interface ContainerRecipe {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
     */
    arn?: string;
    /**
     * <p>Specifies the type of container, such as Docker.</p>
     */
    containerType?: ContainerType | string;
    /**
     * <p>The name of the container recipe.</p>
     */
    name?: string;
    /**
     * <p>The description of the container recipe.</p>
     */
    description?: string;
    /**
     * <p>The system platform for the container, such as Windows or Linux.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The owner of the container recipe.</p>
     */
    owner?: string;
    /**
     * <p>The semantic version of the container recipe (<major>.<minor>.<patch>).</p>
     */
    version?: string;
    /**
     * <p>Components for build and test that are included in the container recipe.</p>
     */
    components?: ComponentConfiguration[];
    /**
     * <p>A group of options that can be used to configure an instance for building and testing container images.</p>
     */
    instanceConfiguration?: InstanceConfiguration;
    /**
     * <p>Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.</p>
     */
    dockerfileTemplateData?: string;
    /**
     * <p>Identifies which KMS key is used to encrypt the container image for distribution to the target Region.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>A flag that indicates if the target container is encrypted.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The source image for the container recipe.</p>
     */
    parentImage?: string;
    /**
     * <p>The date when this container recipe was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>Tags that are attached to the container recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The working directory for use during build and test workflows.</p>
     */
    workingDirectory?: string;
    /**
     * <p>The destination repository for the container image.</p>
     */
    targetRepository?: TargetContainerRepository;
}
export declare namespace ContainerRecipe {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContainerRecipe) => any;
}
/**
 * <p>A summary of a container recipe</p>
 */
export interface ContainerRecipeSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
     */
    arn?: string;
    /**
     * <p>Specifies the type of container, such as "Docker".</p>
     */
    containerType?: ContainerType | string;
    /**
     * <p>The name of the container recipe.</p>
     */
    name?: string;
    /**
     * <p>The system platform for the container, such as Windows or Linux.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The owner of the container recipe.</p>
     */
    owner?: string;
    /**
     * <p>The source image for the container recipe.</p>
     */
    parentImage?: string;
    /**
     * <p>The date when this container recipe was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>Tags that are attached to the container recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ContainerRecipeSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContainerRecipeSummary) => any;
}
export interface CreateComponentRequest {
    /**
     * <p>The name of the component.</p>
     */
    name: string | undefined;
    /**
     * <p>The semantic version of the component. This version follows the semantic version syntax.
     *       For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date
     *       (2019.12.01).</p>
     */
    semanticVersion: string | undefined;
    /**
     * <p>The description of the component. Describes the contents of the component.</p>
     */
    description?: string;
    /**
     * <p>The change description of the component. Describes what change has been made in this
     *       version, or what makes this version different from other versions of this component.</p>
     */
    changeDescription?: string;
    /**
     * <p>The platform of the component.</p>
     */
    platform: Platform | string | undefined;
    /**
     * <p> The operating system (OS) version supported by the component. If the OS information is
     *       available, a prefix match is performed against the parent image OS version during image recipe
     *       creation.</p>
     */
    supportedOsVersions?: string[];
    /**
     * <p>The data of the component. Used to specify the data inline. Either <code>data</code> or
     *       <code>uri</code> can be used to specify the data within the component.</p>
     */
    data?: string;
    /**
     * <p>The uri of the component. Must be an S3 URL and the requester must have permission to
     *       access the S3 bucket. If you use S3, you can specify component content up to your service
     *       quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the
     *       component.</p>
     */
    uri?: string;
    /**
     * <p>The ID of the KMS key that should be used to encrypt this component.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The tags of the component.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The idempotency token of the component.</p>
     */
    clientToken?: string;
}
export declare namespace CreateComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateComponentRequest) => any;
}
export interface CreateComponentResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the component that was created by this request.</p>
     */
    componentBuildVersionArn?: string;
}
export declare namespace CreateComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateComponentResponse) => any;
}
/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message for
 *       details.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterCombinationException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidParameterCombinationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterCombinationException) => any;
}
/**
 * <p>Your version number is out of bounds or does not follow the required syntax.</p>
 */
export interface InvalidVersionNumberException extends __SmithyException, $MetadataBearer {
    name: "InvalidVersionNumberException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidVersionNumberException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidVersionNumberException) => any;
}
/**
 * <p>You have exceeded the number of permitted resources or operations for this service. For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and quotas</a>.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export interface CreateContainerRecipeRequest {
    /**
     * <p>The type of container to create.</p>
     */
    containerType: ContainerType | string | undefined;
    /**
     * <p>The name of the container recipe.</p>
     */
    name: string | undefined;
    /**
     * <p>The description of the container recipe.</p>
     */
    description?: string;
    /**
     * <p>The semantic version of the container recipe (<major>.<minor>.<patch>).</p>
     */
    semanticVersion: string | undefined;
    /**
     * <p>Components for build and test that are included in the container recipe.</p>
     */
    components: ComponentConfiguration[] | undefined;
    /**
     * <p>A group of options that can be used to configure an instance for building and testing container images.</p>
     */
    instanceConfiguration?: InstanceConfiguration;
    /**
     * <p>The Dockerfile template used to build your image as an inline data blob.</p>
     */
    dockerfileTemplateData?: string;
    /**
     * <p>The S3 URI for the Dockerfile that will be used to build your container image.</p>
     */
    dockerfileTemplateUri?: string;
    /**
     * <p>Specifies the operating system platform when you use a custom source image.</p>
     */
    platformOverride?: Platform | string;
    /**
     * <p>Specifies the operating system version for the source image.</p>
     */
    imageOsVersionOverride?: string;
    /**
     * <p>The source image for the container recipe.</p>
     */
    parentImage: string | undefined;
    /**
     * <p>Tags that are attached to the container recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The working directory for use during build and test workflows.</p>
     */
    workingDirectory?: string;
    /**
     * <p>The destination repository for the container image.</p>
     */
    targetRepository: TargetContainerRepository | undefined;
    /**
     * <p>Identifies which KMS key is used to encrypt the container image.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The client token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CreateContainerRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContainerRecipeRequest) => any;
}
export interface CreateContainerRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The client token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>Returns the Amazon Resource Name (ARN) of the container recipe that the request created.</p>
     */
    containerRecipeArn?: string;
}
export declare namespace CreateContainerRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateContainerRecipeResponse) => any;
}
/**
 * <p>The resource that you are trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>Identifies an EC2 launch template to use for a specific account.</p>
 */
export interface LaunchTemplateConfiguration {
    /**
     * <p>Identifies the EC2 launch template to use.</p>
     */
    launchTemplateId: string | undefined;
    /**
     * <p>The account ID that this configuration applies to.</p>
     */
    accountId?: string;
    /**
     * <p>Set the specified EC2 launch template as the default launch template for the specified account.</p>
     */
    setDefaultVersion?: boolean;
}
export declare namespace LaunchTemplateConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateConfiguration) => any;
}
/**
 * <p> Defines the settings for a specific Region.</p>
 */
export interface Distribution {
    /**
     * <p>The target Region.</p>
     */
    region: string | undefined;
    /**
     * <p>The specific AMI settings; for example, launch permissions or AMI tags.</p>
     */
    amiDistributionConfiguration?: AmiDistributionConfiguration;
    /**
     * <p>Container distribution settings for encryption, licensing, and sharing
     *       in a specific Region.</p>
     */
    containerDistributionConfiguration?: ContainerDistributionConfiguration;
    /**
     * <p>The License Manager Configuration to associate with the AMI in the specified
     *       Region.</p>
     */
    licenseConfigurationArns?: string[];
    /**
     * <p>A group of launchTemplateConfiguration settings that apply to image distribution
     *       for specified accounts.</p>
     */
    launchTemplateConfigurations?: LaunchTemplateConfiguration[];
}
export declare namespace Distribution {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Distribution) => any;
}
export interface CreateDistributionConfigurationRequest {
    /**
     * <p> The name of the distribution configuration.</p>
     */
    name: string | undefined;
    /**
     * <p> The description of the distribution configuration.</p>
     */
    description?: string;
    /**
     * <p> The distributions of the distribution configuration.</p>
     */
    distributions: Distribution[] | undefined;
    /**
     * <p> The tags of the distribution configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p> The idempotency token of the distribution configuration.</p>
     */
    clientToken?: string;
}
export declare namespace CreateDistributionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDistributionConfigurationRequest) => any;
}
export interface CreateDistributionConfigurationResponse {
    /**
     * <p> The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p> The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the distribution configuration that was created by this
     *       request.</p>
     */
    distributionConfigurationArn?: string;
}
export declare namespace CreateDistributionConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDistributionConfigurationResponse) => any;
}
/**
 * <p>Image tests configuration.</p>
 */
export interface ImageTestsConfiguration {
    /**
     * <p>Defines if tests should be executed when building this image.</p>
     */
    imageTestsEnabled?: boolean;
    /**
     * <p>The maximum time in minutes that tests are permitted to run.</p>
     */
    timeoutMinutes?: number;
}
export declare namespace ImageTestsConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageTestsConfiguration) => any;
}
export interface CreateImageRequest {
    /**
     * <p> The Amazon Resource Name (ARN) of the image recipe that defines how images are
     *       configured, tested, and assessed.</p>
     */
    imageRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.</p>
     */
    containerRecipeArn?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the distribution configuration that defines and
     *       configures the outputs of your pipeline.</p>
     */
    distributionConfigurationArn?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that defines the
     *       environment in which your image will be built and tested.</p>
     */
    infrastructureConfigurationArn: string | undefined;
    /**
     * <p> The image tests configuration of the image.</p>
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * <p> Collects additional information about the image being created, including the operating
     *       system (OS) version and package list. This information is used to enhance the overall
     *       experience of using EC2 Image Builder. Enabled by default.</p>
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * <p> The tags of the image.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p> The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CreateImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageRequest) => any;
}
export interface CreateImageResponse {
    /**
     * <p> The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p> The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the image that was created by this request.</p>
     */
    imageBuildVersionArn?: string;
}
export declare namespace CreateImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageResponse) => any;
}
export declare enum PipelineExecutionStartCondition {
    EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
    EXPRESSION_MATCH_ONLY = "EXPRESSION_MATCH_ONLY"
}
/**
 * <p>A schedule configures how often and when a pipeline will automatically create a new image.</p>
 */
export interface Schedule {
    /**
     * <p>The cron expression determines how often EC2 Image Builder evaluates your
     *         <code>pipelineExecutionStartCondition</code>.</p>
     *          <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron
     *         expressions in EC2 Image Builder</a>.</p>
     */
    scheduleExpression?: string;
    /**
     * <p>The timezone that applies to the scheduling expression. For example, "Etc/UTC",
     *       "America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA
     *         timezone format</a>. If not specified this defaults to UTC.</p>
     */
    timezone?: string;
    /**
     * <p>The condition configures when the pipeline should trigger a new image build. When the
     *         <code>pipelineExecutionStartCondition</code> is set to
     *         <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic version
     *       filters on the source image or components in your image recipe, EC2 Image Builder will build a
     *       new image only when there are new versions of the image or components in your recipe that
     *       match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it
     *       will build a new image every time the CRON expression matches the current time. For semantic
     *       version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API
     *       Reference</i>.</p>
     */
    pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;
}
export declare namespace Schedule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Schedule) => any;
}
export declare enum PipelineStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export interface CreateImagePipelineRequest {
    /**
     * <p> The name of the image pipeline.</p>
     */
    name: string | undefined;
    /**
     * <p> The description of the image pipeline.</p>
     */
    description?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the image recipe that will be used to configure images
     *       created by this image pipeline.</p>
     */
    imageRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.</p>
     */
    containerRecipeArn?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to
     *       build images created by this image pipeline.</p>
     */
    infrastructureConfigurationArn: string | undefined;
    /**
     * <p> The Amazon Resource Name (ARN) of the distribution configuration that will be used to
     *       configure and distribute images created by this image pipeline.</p>
     */
    distributionConfigurationArn?: string;
    /**
     * <p> The image test configuration of the image pipeline.</p>
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * <p> Collects additional information about the image being created, including the operating
     *       system (OS) version and package list. This information is used to enhance the overall
     *       experience of using EC2 Image Builder. Enabled by default.</p>
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * <p> The schedule of the image pipeline.</p>
     */
    schedule?: Schedule;
    /**
     * <p> The status of the image pipeline.</p>
     */
    status?: PipelineStatus | string;
    /**
     * <p> The tags of the image pipeline.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p> The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CreateImagePipelineRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImagePipelineRequest) => any;
}
export interface CreateImagePipelineResponse {
    /**
     * <p> The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p> The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p> The Amazon Resource Name (ARN) of the image pipeline that was created by this request.</p>
     */
    imagePipelineArn?: string;
}
export declare namespace CreateImagePipelineResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImagePipelineResponse) => any;
}
export interface CreateImageRecipeRequest {
    /**
     * <p> The name of the image recipe.</p>
     */
    name: string | undefined;
    /**
     * <p> The description of the image recipe.</p>
     */
    description?: string;
    /**
     * <p>The semantic version of the image recipe.</p>
     */
    semanticVersion: string | undefined;
    /**
     * <p>The components of the image recipe.</p>
     */
    components: ComponentConfiguration[] | undefined;
    /**
     * <p>The parent image of the image recipe. The value of the string can be the ARN of the parent
     *       image or an AMI ID. The format for the ARN follows this example:
     *         <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>.
     *       You can provide the specific version that you want to use, or you can use a wildcard in all of
     *       the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and
     *       the AMI must be in the same Region in which you are using Image Builder.</p>
     */
    parentImage: string | undefined;
    /**
     * <p>The block device mappings of the image recipe.</p>
     */
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    /**
     * <p> The tags of the image recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The working directory to be used during build and test workflows.</p>
     */
    workingDirectory?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CreateImageRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageRecipeRequest) => any;
}
export interface CreateImageRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that was created by this request.</p>
     */
    imageRecipeArn?: string;
}
export declare namespace CreateImageRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageRecipeResponse) => any;
}
/**
 * <p>Amazon S3 logging configuration.</p>
 */
export interface S3Logs {
    /**
     * <p>The Amazon S3 bucket in which to store the logs.</p>
     */
    s3BucketName?: string;
    /**
     * <p>The Amazon S3 path in which to store the logs.</p>
     */
    s3KeyPrefix?: string;
}
export declare namespace S3Logs {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Logs) => any;
}
/**
 * <p>Logging configuration defines where Image Builder uploads your logs.</p>
 */
export interface Logging {
    /**
     * <p>The Amazon S3 logging configuration.</p>
     */
    s3Logs?: S3Logs;
}
export declare namespace Logging {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Logging) => any;
}
export interface CreateInfrastructureConfigurationRequest {
    /**
     * <p>The name of the infrastructure configuration.</p>
     */
    name: string | undefined;
    /**
     * <p>The description of the infrastructure configuration.</p>
     */
    description?: string;
    /**
     * <p>The instance types of the infrastructure configuration. You can specify one or more
     *       instance types to use for this build. The service will pick one of these instance types based
     *       on availability.</p>
     */
    instanceTypes?: string[];
    /**
     * <p>The instance profile to associate with the instance used to customize your EC2 AMI.</p>
     */
    instanceProfileName: string | undefined;
    /**
     * <p>The security group IDs to associate with the instance used to customize your EC2 AMI.</p>
     */
    securityGroupIds?: string[];
    /**
     * <p>The subnet ID in which to place the instance used to customize your EC2 AMI.</p>
     */
    subnetId?: string;
    /**
     * <p>The logging configuration of the infrastructure configuration.</p>
     */
    logging?: Logging;
    /**
     * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug
     *       the instance used to create your image.</p>
     */
    keyPair?: string;
    /**
     * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
     *       false if you want Image Builder to retain the instance used to configure your AMI if the build
     *       or test phase of your workflow fails.</p>
     */
    terminateInstanceOnFailure?: boolean;
    /**
     * <p>The SNS topic on which to send image build events.</p>
     */
    snsTopicArn?: string;
    /**
     * <p>The tags attached to the resource created by Image Builder.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The tags of the infrastructure configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace CreateInfrastructureConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInfrastructureConfigurationRequest) => any;
}
export interface CreateInfrastructureConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was created by
     *       this request.</p>
     */
    infrastructureConfigurationArn?: string;
}
export declare namespace CreateInfrastructureConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInfrastructureConfigurationResponse) => any;
}
export interface DeleteComponentRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the component build version to delete.</p>
     */
    componentBuildVersionArn: string | undefined;
}
export declare namespace DeleteComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteComponentRequest) => any;
}
export interface DeleteComponentResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the component build version that was deleted.</p>
     */
    componentBuildVersionArn?: string;
}
export declare namespace DeleteComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteComponentResponse) => any;
}
/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits this
 *       action. See the error message for more details.</p>
 */
export interface ResourceDependencyException extends __SmithyException, $MetadataBearer {
    name: "ResourceDependencyException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceDependencyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceDependencyException) => any;
}
export interface DeleteContainerRecipeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe to delete.</p>
     */
    containerRecipeArn: string | undefined;
}
export declare namespace DeleteContainerRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContainerRecipeRequest) => any;
}
export interface DeleteContainerRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that was deleted.</p>
     */
    containerRecipeArn?: string;
}
export declare namespace DeleteContainerRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteContainerRecipeResponse) => any;
}
export interface DeleteDistributionConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete.</p>
     */
    distributionConfigurationArn: string | undefined;
}
export declare namespace DeleteDistributionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDistributionConfigurationRequest) => any;
}
export interface DeleteDistributionConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration that was deleted.</p>
     */
    distributionConfigurationArn?: string;
}
export declare namespace DeleteDistributionConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDistributionConfigurationResponse) => any;
}
export interface DeleteImageRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image to delete.</p>
     */
    imageBuildVersionArn: string | undefined;
}
export declare namespace DeleteImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImageRequest) => any;
}
export interface DeleteImageResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image that was deleted.</p>
     */
    imageBuildVersionArn?: string;
}
export declare namespace DeleteImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImageResponse) => any;
}
export interface DeleteImagePipelineRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline to delete.</p>
     */
    imagePipelineArn: string | undefined;
}
export declare namespace DeleteImagePipelineRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImagePipelineRequest) => any;
}
export interface DeleteImagePipelineResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that was deleted.</p>
     */
    imagePipelineArn?: string;
}
export declare namespace DeleteImagePipelineResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImagePipelineResponse) => any;
}
export interface DeleteImageRecipeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe to delete.</p>
     */
    imageRecipeArn: string | undefined;
}
export declare namespace DeleteImageRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImageRecipeRequest) => any;
}
export interface DeleteImageRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that was deleted.</p>
     */
    imageRecipeArn?: string;
}
export declare namespace DeleteImageRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteImageRecipeResponse) => any;
}
export interface DeleteInfrastructureConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</p>
     */
    infrastructureConfigurationArn: string | undefined;
}
export declare namespace DeleteInfrastructureConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInfrastructureConfigurationRequest) => any;
}
export interface DeleteInfrastructureConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted.</p>
     */
    infrastructureConfigurationArn?: string;
}
export declare namespace DeleteInfrastructureConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInfrastructureConfigurationResponse) => any;
}
/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
     */
    arn?: string;
    /**
     * <p>The name of the distribution configuration.</p>
     */
    name?: string;
    /**
     * <p>The description of the distribution configuration.</p>
     */
    description?: string;
    /**
     * <p>The distribution objects that apply Region-specific
     *       settings for the deployment of the image to targeted Regions.</p>
     */
    distributions?: Distribution[];
    /**
     * <p>The maximum duration in minutes for this distribution configuration.</p>
     */
    timeoutMinutes: number | undefined;
    /**
     * <p>The date on which this distribution configuration was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The date on which this distribution configuration was last updated.</p>
     */
    dateUpdated?: string;
    /**
     * <p>The tags of the distribution configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace DistributionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DistributionConfiguration) => any;
}
/**
 * <p>A high-level overview of a distribution configuration.</p>
 */
export interface DistributionConfigurationSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
     */
    arn?: string;
    /**
     * <p>The name of the distribution configuration.</p>
     */
    name?: string;
    /**
     * <p>The description of the distribution configuration.</p>
     */
    description?: string;
    /**
     * <p>The date on which the distribution configuration was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The date on which the distribution configuration was updated.</p>
     */
    dateUpdated?: string;
    /**
     * <p>The tags associated with the distribution configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>A list of Regions where the container image is distributed to.</p>
     */
    regions?: string[];
}
export declare namespace DistributionConfigurationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DistributionConfigurationSummary) => any;
}
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a
 *       list operation. Filters can be used to match a set of resources by specific criteria, such as
 *       tags, attributes, or IDs.</p>
 */
export interface Filter {
    /**
     * <p>The name of the filter. Filter names are case-sensitive.</p>
     */
    name?: string;
    /**
     * <p>The filter values. Filter values are case-sensitive.</p>
     */
    values?: string[];
}
export declare namespace Filter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filter) => any;
}
export interface GetComponentRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires
     *       "/\d+$" suffix.</p>
     */
    componentBuildVersionArn: string | undefined;
}
export declare namespace GetComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetComponentRequest) => any;
}
export interface GetComponentResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The component object associated with the specified ARN.</p>
     */
    component?: Component;
}
export declare namespace GetComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetComponentResponse) => any;
}
export interface GetComponentPolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.</p>
     */
    componentArn: string | undefined;
}
export declare namespace GetComponentPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetComponentPolicyRequest) => any;
}
export interface GetComponentPolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The component policy.</p>
     */
    policy?: string;
}
export declare namespace GetComponentPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetComponentPolicyResponse) => any;
}
/**
 * <p>At least one of the resources referenced by your request does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface GetContainerRecipeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe to retrieve.</p>
     */
    containerRecipeArn: string | undefined;
}
export declare namespace GetContainerRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContainerRecipeRequest) => any;
}
export interface GetContainerRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The container recipe object that is returned.</p>
     */
    containerRecipe?: ContainerRecipe;
}
export declare namespace GetContainerRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContainerRecipeResponse) => any;
}
export interface GetContainerRecipePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe for the policy being requested.</p>
     */
    containerRecipeArn: string | undefined;
}
export declare namespace GetContainerRecipePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContainerRecipePolicyRequest) => any;
}
export interface GetContainerRecipePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The container recipe policy object that is returned.</p>
     */
    policy?: string;
}
export declare namespace GetContainerRecipePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetContainerRecipePolicyResponse) => any;
}
export interface GetDistributionConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
     *       retrieve.</p>
     */
    distributionConfigurationArn: string | undefined;
}
export declare namespace GetDistributionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDistributionConfigurationRequest) => any;
}
export interface GetDistributionConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The distribution configuration object.</p>
     */
    distributionConfiguration?: DistributionConfiguration;
}
export declare namespace GetDistributionConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDistributionConfigurationResponse) => any;
}
export interface GetImageRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image that you want to retrieve.</p>
     */
    imageBuildVersionArn: string | undefined;
}
export declare namespace GetImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageRequest) => any;
}
export declare enum ImageType {
    AMI = "AMI",
    DOCKER = "DOCKER"
}
/**
 * <p>An image recipe.</p>
 */
export interface ImageRecipe {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
     */
    arn?: string;
    /**
     * <p>Specifies which type of image is created by the recipe - an AMI or a container image.</p>
     */
    type?: ImageType | string;
    /**
     * <p>The name of the image recipe.</p>
     */
    name?: string;
    /**
     * <p>The description of the image recipe.</p>
     */
    description?: string;
    /**
     * <p>The platform of the image recipe.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The owner of the image recipe.</p>
     */
    owner?: string;
    /**
     * <p>The version of the image recipe.</p>
     */
    version?: string;
    /**
     * <p>The components of the image recipe.</p>
     */
    components?: ComponentConfiguration[];
    /**
     * <p>The parent image of the image recipe.</p>
     */
    parentImage?: string;
    /**
     * <p>The block device mappings to apply when creating images from this recipe.</p>
     */
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    /**
     * <p>The date on which this image recipe was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The tags of the image recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The working directory to be used during build and test workflows.</p>
     */
    workingDirectory?: string;
}
export declare namespace ImageRecipe {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageRecipe) => any;
}
/**
 * <p>Details of the infrastructure configuration.</p>
 */
export interface InfrastructureConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
     */
    arn?: string;
    /**
     * <p>The name of the infrastructure configuration.</p>
     */
    name?: string;
    /**
     * <p>The description of the infrastructure configuration.</p>
     */
    description?: string;
    /**
     * <p>The instance types of the infrastructure configuration.</p>
     */
    instanceTypes?: string[];
    /**
     * <p>The instance profile of the infrastructure configuration.</p>
     */
    instanceProfileName?: string;
    /**
     * <p>The security group IDs of the infrastructure configuration.</p>
     */
    securityGroupIds?: string[];
    /**
     * <p>The subnet ID of the infrastructure configuration.</p>
     */
    subnetId?: string;
    /**
     * <p>The logging configuration of the infrastructure configuration.</p>
     */
    logging?: Logging;
    /**
     * <p>The EC2 key pair of the infrastructure configuration.</p>
     */
    keyPair?: string;
    /**
     * <p>The terminate instance on failure configuration of the infrastructure
     *       configuration.</p>
     */
    terminateInstanceOnFailure?: boolean;
    /**
     * <p>The SNS topic Amazon Resource Name (ARN) of the infrastructure configuration.</p>
     */
    snsTopicArn?: string;
    /**
     * <p>The date on which the infrastructure configuration was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The date on which the infrastructure configuration was last updated.</p>
     */
    dateUpdated?: string;
    /**
     * <p>The tags attached to the resource created by Image Builder.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The tags of the infrastructure configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace InfrastructureConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InfrastructureConfiguration) => any;
}
/**
 * <p>The resources produced by this image.</p>
 */
export interface OutputResources {
    /**
     * <p>The EC2 AMIs created by this image.</p>
     */
    amis?: Ami[];
    /**
     * <p>Container images that the pipeline has generated and stored in the output repository.</p>
     */
    containers?: Container[];
}
export declare namespace OutputResources {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutputResources) => any;
}
/**
 * <p>An image build version.</p>
 */
export interface Image {
    /**
     * <p>The Amazon Resource Name (ARN) of the image.</p>
     */
    arn?: string;
    /**
     * <p>Specifies whether this is an AMI or container image.</p>
     */
    type?: ImageType | string;
    /**
     * <p>The name of the image.</p>
     */
    name?: string;
    /**
     * <p>The semantic version of the image.</p>
     */
    version?: string;
    /**
     * <p>The platform of the image.</p>
     */
    platform?: Platform | string;
    /**
     * <p> Collects additional information about the image being created, including the operating
     *       system (OS) version and package list. This information is used to enhance the overall
     *       experience of using EC2 Image Builder. Enabled by default.</p>
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or
     *       Microsoft Windows Server 2019.</p>
     */
    osVersion?: string;
    /**
     * <p>The state of the image.</p>
     */
    state?: ImageState;
    /**
     * <p>The image recipe used when creating the image.</p>
     */
    imageRecipe?: ImageRecipe;
    /**
     * <p>The container recipe used to create the container image type.</p>
     */
    containerRecipe?: ContainerRecipe;
    /**
     * <p>The name of the image pipeline that created this image.</p>
     */
    sourcePipelineName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
     */
    sourcePipelineArn?: string;
    /**
     * <p>The infrastructure used when creating this image.</p>
     */
    infrastructureConfiguration?: InfrastructureConfiguration;
    /**
     * <p>The distribution configuration used when creating this image.</p>
     */
    distributionConfiguration?: DistributionConfiguration;
    /**
     * <p>The image tests configuration used when creating this image.</p>
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * <p>The date on which this image was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The output resources produced when creating this image.</p>
     */
    outputResources?: OutputResources;
    /**
     * <p>The tags of the image.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Image {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Image) => any;
}
export interface GetImageResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The image object.</p>
     */
    image?: Image;
}
export declare namespace GetImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageResponse) => any;
}
export interface GetImagePipelineRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.</p>
     */
    imagePipelineArn: string | undefined;
}
export declare namespace GetImagePipelineRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImagePipelineRequest) => any;
}
/**
 * <p>Details of an image pipeline.</p>
 */
export interface ImagePipeline {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline.</p>
     */
    arn?: string;
    /**
     * <p>The name of the image pipeline.</p>
     */
    name?: string;
    /**
     * <p>The description of the image pipeline.</p>
     */
    description?: string;
    /**
     * <p>The platform of the image pipeline.</p>
     */
    platform?: Platform | string;
    /**
     * <p> Collects additional information about the image being created, including the operating
     *       system (OS) version and package list. This information is used to enhance the overall
     *       experience of using EC2 Image Builder. Enabled by default.</p>
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image
     *       pipeline.</p>
     */
    imageRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.</p>
     */
    containerRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration associated with this
     *       image pipeline.</p>
     */
    infrastructureConfigurationArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this
     *       image pipeline.</p>
     */
    distributionConfigurationArn?: string;
    /**
     * <p>The image tests configuration of the image pipeline.</p>
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * <p>The schedule of the image pipeline.</p>
     */
    schedule?: Schedule;
    /**
     * <p>The status of the image pipeline.</p>
     */
    status?: PipelineStatus | string;
    /**
     * <p>The date on which this image pipeline was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The date on which this image pipeline was last updated.</p>
     */
    dateUpdated?: string;
    /**
     * <p>The date on which this image pipeline was last run.</p>
     */
    dateLastRun?: string;
    /**
     * <p>The date on which this image pipeline will next be run.</p>
     */
    dateNextRun?: string;
    /**
     * <p>The tags of this image pipeline.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ImagePipeline {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImagePipeline) => any;
}
export interface GetImagePipelineResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The image pipeline object.</p>
     */
    imagePipeline?: ImagePipeline;
}
export declare namespace GetImagePipelineResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImagePipelineResponse) => any;
}
export interface GetImagePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.</p>
     */
    imageArn: string | undefined;
}
export declare namespace GetImagePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImagePolicyRequest) => any;
}
export interface GetImagePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The image policy object.</p>
     */
    policy?: string;
}
export declare namespace GetImagePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImagePolicyResponse) => any;
}
export interface GetImageRecipeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.</p>
     */
    imageRecipeArn: string | undefined;
}
export declare namespace GetImageRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageRecipeRequest) => any;
}
export interface GetImageRecipeResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The image recipe object.</p>
     */
    imageRecipe?: ImageRecipe;
}
export declare namespace GetImageRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageRecipeResponse) => any;
}
export interface GetImageRecipePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.</p>
     */
    imageRecipeArn: string | undefined;
}
export declare namespace GetImageRecipePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageRecipePolicyRequest) => any;
}
export interface GetImageRecipePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The image recipe policy object.</p>
     */
    policy?: string;
}
export declare namespace GetImageRecipePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetImageRecipePolicyResponse) => any;
}
/**
 * <p> GetInfrastructureConfiguration request object.</p>
 */
export interface GetInfrastructureConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
     *       retrieve.</p>
     */
    infrastructureConfigurationArn: string | undefined;
}
export declare namespace GetInfrastructureConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInfrastructureConfigurationRequest) => any;
}
/**
 * <p>GetInfrastructureConfiguration response object.</p>
 */
export interface GetInfrastructureConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The infrastructure configuration object.</p>
     */
    infrastructureConfiguration?: InfrastructureConfiguration;
}
export declare namespace GetInfrastructureConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInfrastructureConfigurationResponse) => any;
}
export interface ImportComponentRequest {
    /**
     * <p> The name of the component.</p>
     */
    name: string | undefined;
    /**
     * <p>The semantic version of the component. This version follows the semantic version syntax.
     *       For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date
     *       (2019.12.01).</p>
     */
    semanticVersion: string | undefined;
    /**
     * <p>The description of the component. Describes the contents of the component.</p>
     */
    description?: string;
    /**
     * <p>The change description of the component. Describes what change has been made in this
     *       version, or what makes this version different from other versions of this component.</p>
     */
    changeDescription?: string;
    /**
     * <p>The type of the component denotes whether the component is used to build the image or only
     *       to test it.</p>
     */
    type: ComponentType | string | undefined;
    /**
     * <p>The format of the resource that you want to import as a component.</p>
     */
    format: ComponentFormat | string | undefined;
    /**
     * <p>The platform of the component.</p>
     */
    platform: Platform | string | undefined;
    /**
     * <p>The data of the component. Used to specify the data inline. Either <code>data</code> or
     *         <code>uri</code> can be used to specify the data within the component.</p>
     */
    data?: string;
    /**
     * <p>The uri of the component. Must be an S3 URL and the requester must have permission to
     *       access the S3 bucket. If you use S3, you can specify component content up to your service
     *       quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the
     *       component.</p>
     */
    uri?: string;
    /**
     * <p>The ID of the KMS key that should be used to encrypt this component.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The tags of the component.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The idempotency token of the component.</p>
     */
    clientToken?: string;
}
export declare namespace ImportComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportComponentRequest) => any;
}
export interface ImportComponentResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the imported component.</p>
     */
    componentBuildVersionArn?: string;
}
export declare namespace ImportComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportComponentResponse) => any;
}
/**
 * <p>You have provided an invalid pagination token in your request.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidPaginationTokenException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidPaginationTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPaginationTokenException) => any;
}
export interface ListComponentBuildVersionsRequest {
    /**
     * <p>The component version Amazon Resource Name (ARN) whose versions you want to list.</p>
     */
    componentVersionArn: string | undefined;
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListComponentBuildVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListComponentBuildVersionsRequest) => any;
}
export interface ListComponentBuildVersionsResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of component summaries for the specified semantic version.</p>
     */
    componentSummaryList?: ComponentSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListComponentBuildVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListComponentBuildVersionsResponse) => any;
}
export declare enum Ownership {
    AMAZON = "Amazon",
    SELF = "Self",
    SHARED = "Shared"
}
export interface ListComponentsRequest {
    /**
     * <p>The owner defines which components you want to list. By default, this request will only
     *       show components owned by your account. You can use this field to specify if you want to view
     *       components owned by yourself, by Amazon, or those components that have been shared with you by
     *       other customers.</p>
     */
    owner?: Ownership | string;
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>Returns the list of component build versions for the specified semantic version.</p>
     */
    byName?: boolean;
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListComponentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListComponentsRequest) => any;
}
export interface ListComponentsResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of component semantic versions.</p>
     */
    componentVersionList?: ComponentVersion[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListComponentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListComponentsResponse) => any;
}
export interface ListContainerRecipesRequest {
    /**
     * <p>Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.</p>
     */
    owner?: Ownership | string;
    /**
     * <p>Request filters that are used to narrow the list of container images that are returned.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum number of results to return in the list.</p>
     */
    maxResults?: number;
    /**
     * <p>Provides a token for pagination, which determines where to begin the next set of results when the current set reaches the maximum for one request.</p>
     */
    nextToken?: string;
}
export declare namespace ListContainerRecipesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContainerRecipesRequest) => any;
}
export interface ListContainerRecipesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of container recipes returned for the request.</p>
     */
    containerRecipeSummaryList?: ContainerRecipeSummary[];
    /**
     * <p>The next token field is used for paginated responses. When this is not empty, there are additional container recipes that the service has not included in this response. Use this token with the next request to retrieve additional list items.</p>
     */
    nextToken?: string;
}
export declare namespace ListContainerRecipesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListContainerRecipesResponse) => any;
}
export interface ListDistributionConfigurationsRequest {
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>name</code> - The name of this distribution configuration.</p>
     *             </li>
     *          </ul>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListDistributionConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDistributionConfigurationsRequest) => any;
}
export interface ListDistributionConfigurationsResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of distributions.</p>
     */
    distributionConfigurationSummaryList?: DistributionConfigurationSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListDistributionConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDistributionConfigurationsResponse) => any;
}
export interface ListImageBuildVersionsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.</p>
     */
    imageVersionArn: string | undefined;
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImageBuildVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImageBuildVersionsRequest) => any;
}
/**
 * <p>An image summary.</p>
 */
export interface ImageSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the image.</p>
     */
    arn?: string;
    /**
     * <p>The name of the image.</p>
     */
    name?: string;
    /**
     * <p>Specifies whether this is an AMI or container image.</p>
     */
    type?: ImageType | string;
    /**
     * <p>The version of the image.</p>
     */
    version?: string;
    /**
     * <p>The platform of the image.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or
     *       Microsoft Windows Server 2019.</p>
     */
    osVersion?: string;
    /**
     * <p>The state of the image.</p>
     */
    state?: ImageState;
    /**
     * <p>The owner of the image.</p>
     */
    owner?: string;
    /**
     * <p>The date on which this image was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The output resources produced when creating this image.</p>
     */
    outputResources?: OutputResources;
    /**
     * <p>The tags of the image.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ImageSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageSummary) => any;
}
export interface ListImageBuildVersionsResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of image build versions.</p>
     */
    imageSummaryList?: ImageSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListImageBuildVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImageBuildVersionsResponse) => any;
}
export interface ListImagePackagesRequest {
    /**
     * <p>Filter results for the ListImagePackages request by the Image Build Version ARN</p>
     */
    imageBuildVersionArn: string | undefined;
    /**
     * <p>The maxiumum number of results to return from the ListImagePackages request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePackagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePackagesRequest) => any;
}
/**
 * <p>Represents a package installed on an Image Builder image.</p>
 */
export interface ImagePackage {
    /**
     * <p>The name of the package as reported to the operating system package manager.</p>
     */
    packageName?: string;
    /**
     * <p>The version of the package as reported to the operating system package manager.</p>
     */
    packageVersion?: string;
}
export declare namespace ImagePackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImagePackage) => any;
}
export interface ListImagePackagesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of Image Packages returned in the response.</p>
     */
    imagePackageList?: ImagePackage[];
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePackagesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePackagesResponse) => any;
}
export interface ListImagePipelineImagesRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.</p>
     */
    imagePipelineArn: string | undefined;
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePipelineImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePipelineImagesRequest) => any;
}
export interface ListImagePipelineImagesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of images built by this pipeline.</p>
     */
    imageSummaryList?: ImageSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePipelineImagesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePipelineImagesResponse) => any;
}
export interface ListImagePipelinesRequest {
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePipelinesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePipelinesRequest) => any;
}
export interface ListImagePipelinesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of image pipelines.</p>
     */
    imagePipelineList?: ImagePipeline[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagePipelinesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagePipelinesResponse) => any;
}
export interface ListImageRecipesRequest {
    /**
     * <p>The owner defines which image recipes you want to list. By default, this request will only
     *       show image recipes owned by your account. You can use this field to specify if you want to
     *       view image recipes owned by yourself, by Amazon, or those image recipes that have been shared
     *       with you by other customers.</p>
     */
    owner?: Ownership | string;
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListImageRecipesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImageRecipesRequest) => any;
}
/**
 * <p>A summary of an image recipe.</p>
 */
export interface ImageRecipeSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
     */
    arn?: string;
    /**
     * <p>The name of the image recipe.</p>
     */
    name?: string;
    /**
     * <p>The platform of the image recipe.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The owner of the image recipe.</p>
     */
    owner?: string;
    /**
     * <p>The parent image of the image recipe.</p>
     */
    parentImage?: string;
    /**
     * <p>The date on which this image recipe was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The tags of the image recipe.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ImageRecipeSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageRecipeSummary) => any;
}
export interface ListImageRecipesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of image pipelines.</p>
     */
    imageRecipeSummaryList?: ImageRecipeSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListImageRecipesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImageRecipesResponse) => any;
}
export interface ListImagesRequest {
    /**
     * <p>The owner defines which images you want to list. By default, this request will only show
     *       images owned by your account. You can use this field to specify if you want to view images
     *       owned by yourself, by Amazon, or those images that have been shared with you by other
     *       customers.</p>
     */
    owner?: Ownership | string;
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>Requests a list of images with a specific recipe name.</p>
     */
    byName?: boolean;
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
    /**
     * <p>Includes deprecated images in the response list.</p>
     */
    includeDeprecated?: boolean;
}
export declare namespace ListImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagesRequest) => any;
}
/**
 * <p>An image semantic version.</p>
 */
export interface ImageVersion {
    /**
     * <p>The Amazon Resource Name (ARN) of the image semantic version.</p>
     */
    arn?: string;
    /**
     * <p>The name of the image semantic version.</p>
     */
    name?: string;
    /**
     * <p>Specifies whether this is an AMI or container image.</p>
     */
    type?: ImageType | string;
    /**
     * <p>The semantic version of the image semantic version.</p>
     */
    version?: string;
    /**
     * <p>The platform of the image semantic version.</p>
     */
    platform?: Platform | string;
    /**
     * <p>The operating system version of the instance. For example, Amazon Linux 2, Ubuntu 18, or
     *       Microsoft Windows Server 2019.</p>
     */
    osVersion?: string;
    /**
     * <p>The owner of the image semantic version.</p>
     */
    owner?: string;
    /**
     * <p>The date at which this image semantic version was created.</p>
     */
    dateCreated?: string;
}
export declare namespace ImageVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageVersion) => any;
}
export interface ListImagesResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of image semantic versions.</p>
     */
    imageVersionList?: ImageVersion[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListImagesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListImagesResponse) => any;
}
export interface ListInfrastructureConfigurationsRequest {
    /**
     * <p>The filters.</p>
     */
    filters?: Filter[];
    /**
     * <p>The maximum items to return in a request.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to specify where to start paginating. This is the NextToken from a previously
     *       truncated response.</p>
     */
    nextToken?: string;
}
export declare namespace ListInfrastructureConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInfrastructureConfigurationsRequest) => any;
}
/**
 * <p>The infrastructure used when building EC2 AMIs.</p>
 */
export interface InfrastructureConfigurationSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
     */
    arn?: string;
    /**
     * <p>The name of the infrastructure configuration.</p>
     */
    name?: string;
    /**
     * <p>The description of the infrastructure configuration.</p>
     */
    description?: string;
    /**
     * <p>The date on which the infrastructure configuration was created.</p>
     */
    dateCreated?: string;
    /**
     * <p>The date on which the infrastructure configuration was last updated.</p>
     */
    dateUpdated?: string;
    /**
     * <p>The tags attached to the image created by Image Builder.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The tags of the infrastructure configuration.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The instance types of the infrastructure configuration.</p>
     */
    instanceTypes?: string[];
    /**
     * <p>The instance profile of the infrastructure configuration.</p>
     */
    instanceProfileName?: string;
}
export declare namespace InfrastructureConfigurationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InfrastructureConfigurationSummary) => any;
}
export interface ListInfrastructureConfigurationsResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The list of infrastructure configurations.</p>
     */
    infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];
    /**
     * <p>The next token used for paginated responses. When this is not empty, there are additional
     *       elements that the service has not included in this request. Use this token with the next
     *       request to retrieve additional objects.</p>
     */
    nextToken?: string;
}
export declare namespace ListInfrastructureConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInfrastructureConfigurationsResponse) => any;
}
/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *       request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The tags for the specified resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
/**
 * <p>The value that you provided for the specified parameter is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterValueException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidParameterValueException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterValueException) => any;
}
export interface PutComponentPolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the component that this policy should be applied to.</p>
     */
    componentArn: string | undefined;
    /**
     * <p>The policy to apply.</p>
     */
    policy: string | undefined;
}
export declare namespace PutComponentPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutComponentPolicyRequest) => any;
}
export interface PutComponentPolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the component that this policy was applied to.</p>
     */
    componentArn?: string;
}
export declare namespace PutComponentPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutComponentPolicyResponse) => any;
}
export interface PutContainerRecipePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.</p>
     */
    containerRecipeArn: string | undefined;
    /**
     * <p>The policy to apply to the container recipe.</p>
     */
    policy: string | undefined;
}
export declare namespace PutContainerRecipePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutContainerRecipePolicyRequest) => any;
}
export interface PutContainerRecipePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container recipe that this policy was applied to.</p>
     */
    containerRecipeArn?: string;
}
export declare namespace PutContainerRecipePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutContainerRecipePolicyResponse) => any;
}
export interface PutImagePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image that this policy should be applied to.</p>
     */
    imageArn: string | undefined;
    /**
     * <p>The policy to apply.</p>
     */
    policy: string | undefined;
}
export declare namespace PutImagePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutImagePolicyRequest) => any;
}
export interface PutImagePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image that this policy was applied to.</p>
     */
    imageArn?: string;
}
export declare namespace PutImagePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutImagePolicyResponse) => any;
}
export interface PutImageRecipePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.</p>
     */
    imageRecipeArn: string | undefined;
    /**
     * <p>The policy to apply.</p>
     */
    policy: string | undefined;
}
export declare namespace PutImageRecipePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutImageRecipePolicyRequest) => any;
}
export interface PutImageRecipePolicyResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that this policy was applied to.</p>
     */
    imageRecipeArn?: string;
}
export declare namespace PutImageRecipePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutImageRecipePolicyResponse) => any;
}
export interface StartImagePipelineExecutionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.</p>
     */
    imagePipelineArn: string | undefined;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace StartImagePipelineExecutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartImagePipelineExecutionRequest) => any;
}
export interface StartImagePipelineExecutionResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image that was created by this request.</p>
     */
    imageBuildVersionArn?: string;
}
export declare namespace StartImagePipelineExecutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartImagePipelineExecutionResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags to apply to the resource.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag keys to remove from the resource.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateDistributionConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to update.</p>
     */
    distributionConfigurationArn: string | undefined;
    /**
     * <p>The description of the distribution configuration.</p>
     */
    description?: string;
    /**
     * <p>The distributions of the distribution configuration.</p>
     */
    distributions: Distribution[] | undefined;
    /**
     * <p>The idempotency token of the distribution configuration.</p>
     */
    clientToken?: string;
}
export declare namespace UpdateDistributionConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDistributionConfigurationRequest) => any;
}
export interface UpdateDistributionConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration that was updated by this
     *       request.</p>
     */
    distributionConfigurationArn?: string;
}
export declare namespace UpdateDistributionConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDistributionConfigurationResponse) => any;
}
export interface UpdateImagePipelineRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to update.</p>
     */
    imagePipelineArn: string | undefined;
    /**
     * <p>The description of the image pipeline.</p>
     */
    description?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure images
     *       updated by this image pipeline.</p>
     */
    imageRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the container pipeline to update.</p>
     */
    containerRecipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to
     *       build images updated by this image pipeline.</p>
     */
    infrastructureConfigurationArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the distribution configuration that will be used to
     *       configure and distribute images updated by this image pipeline.</p>
     */
    distributionConfigurationArn?: string;
    /**
     * <p>The image test configuration of the image pipeline.</p>
     */
    imageTestsConfiguration?: ImageTestsConfiguration;
    /**
     * <p> Collects additional information about the image being created, including the operating
     *       system (OS) version and package list. This information is used to enhance the overall
     *       experience of using EC2 Image Builder. Enabled by default.</p>
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * <p>The schedule of the image pipeline.</p>
     */
    schedule?: Schedule;
    /**
     * <p>The status of the image pipeline.</p>
     */
    status?: PipelineStatus | string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
}
export declare namespace UpdateImagePipelineRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateImagePipelineRequest) => any;
}
export interface UpdateImagePipelineResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the image pipeline that was updated by this request.</p>
     */
    imagePipelineArn?: string;
}
export declare namespace UpdateImagePipelineResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateImagePipelineResponse) => any;
}
export interface UpdateInfrastructureConfigurationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
     *       update.</p>
     */
    infrastructureConfigurationArn: string | undefined;
    /**
     * <p>The description of the infrastructure configuration.</p>
     */
    description?: string;
    /**
     * <p>The instance types of the infrastructure configuration. You can specify one or more
     *       instance types to use for this build. The service will pick one of these instance types based
     *       on availability.</p>
     */
    instanceTypes?: string[];
    /**
     * <p>The instance profile to associate with the instance used to customize your EC2 AMI.</p>
     */
    instanceProfileName: string | undefined;
    /**
     * <p>The security group IDs to associate with the instance used to customize your EC2 AMI.</p>
     */
    securityGroupIds?: string[];
    /**
     * <p>The subnet ID to place the instance used to customize your EC2 AMI in.</p>
     */
    subnetId?: string;
    /**
     * <p>The logging configuration of the infrastructure configuration.</p>
     */
    logging?: Logging;
    /**
     * <p>The key pair of the infrastructure configuration. This can be used to log on to and debug
     *       the instance used to create your image.</p>
     */
    keyPair?: string;
    /**
     * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
     *       false if you want Image Builder to retain the instance used to configure your AMI if the build
     *       or test phase of your workflow fails.</p>
     */
    terminateInstanceOnFailure?: boolean;
    /**
     * <p>The SNS topic on which to send image build events.</p>
     */
    snsTopicArn?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The tags attached to the resource created by Image Builder.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
}
export declare namespace UpdateInfrastructureConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInfrastructureConfigurationRequest) => any;
}
export interface UpdateInfrastructureConfigurationResponse {
    /**
     * <p>The request ID that uniquely identifies this request.</p>
     */
    requestId?: string;
    /**
     * <p>The idempotency token used to make this request idempotent.</p>
     */
    clientToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by
     *       this request.</p>
     */
    infrastructureConfigurationArn?: string;
}
export declare namespace UpdateInfrastructureConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateInfrastructureConfigurationResponse) => any;
}
