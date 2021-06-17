import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Represents a Service Catalog AppRegistry application that is the top-level node in a hierarchy of related
 *        cloud resource abstractions.</p>
 */
export interface Application {
    /**
     * <p>The identifier of the application.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
     */
    name?: string;
    /**
     * <p>The description of the application.</p>
     */
    description?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
     */
    creationTime?: Date;
    /**
     * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>Key-value pairs you can use to associate with the application.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Application {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Application) => any;
}
/**
 * <p>Summary of a Service Catalog AppRegistry application.</p>
 */
export interface ApplicationSummary {
    /**
     * <p>The identifier of the application.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
     */
    name?: string;
    /**
     * <p>The description of the application.</p>
     */
    description?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
     */
    creationTime?: Date;
    /**
     * <p> The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
     */
    lastUpdateTime?: Date;
}
export declare namespace ApplicationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ApplicationSummary) => any;
}
export interface AssociateAttributeGroupRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
     */
    attributeGroup: string | undefined;
}
export declare namespace AssociateAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAttributeGroupRequest) => any;
}
export interface AssociateAttributeGroupResponse {
    /**
     * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
     */
    applicationArn?: string;
    /**
     * <p>The Amazon resource name (ARN) of the attribute group that contains the application's new attributes.</p>
     */
    attributeGroupArn?: string;
}
export declare namespace AssociateAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAttributeGroupResponse) => any;
}
/**
 * <p>The service is experiencing internal problems.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The specified resource does not exist.</p>
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
/**
 * <p>The maximum number of resources per account has been reached.</p>
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
/**
 * <p>The request has invalid or missing parameters.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export declare enum ResourceType {
    CFN_STACK = "CFN_STACK"
}
export interface AssociateResourceRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The type of resource of which the application will be associated.</p>
     */
    resourceType: ResourceType | string | undefined;
    /**
     * <p>The name or ID of the resource of which the application will be associated.</p>
     */
    resource: string | undefined;
}
export declare namespace AssociateResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceRequest) => any;
}
export interface AssociateResourceResponse {
    /**
     * <p>The Amazon resource name (ARN) of the application that was augmented with attributes.</p>
     */
    applicationArn?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
     */
    resourceArn?: string;
}
export declare namespace AssociateResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateResourceResponse) => any;
}
/**
 * <p>There was a conflict when processing the request (for example, a resource with the given name already
 *       exists within the account).</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>Represents a Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.</p>
 */
export interface AttributeGroup {
    /**
     * <p>The globally unique attribute group identifier of the attribute group.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the attribute group.</p>
     */
    name?: string;
    /**
     * <p>The description of the attribute group that the user provides.</p>
     */
    description?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>Key-value pairs you can use to associate with the attribute group.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace AttributeGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttributeGroup) => any;
}
/**
 * <p>Summary of a Service Catalog AppRegistry attribute group.</p>
 */
export interface AttributeGroupSummary {
    /**
     * <p>The globally unique attribute group identifier of the attribute group.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the attribute group.</p>
     */
    name?: string;
    /**
     * <p>The description of the attribute group that the user provides.</p>
     */
    description?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
     */
    lastUpdateTime?: Date;
}
export declare namespace AttributeGroupSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttributeGroupSummary) => any;
}
export interface CreateApplicationRequest {
    /**
     * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
     */
    name: string | undefined;
    /**
     * <p>The description of the application.</p>
     */
    description?: string;
    /**
     * <p>Key-value pairs you can use to associate with the application.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
     *       completed successfully using the same client token and the same parameters, the retry succeeds
     *       without performing any further actions. If you retry a successful request using the same
     *       client token, but one or more of the parameters are different, the retry fails.</p>
     */
    clientToken?: string;
}
export declare namespace CreateApplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateApplicationRequest) => any;
}
export interface CreateApplicationResponse {
    /**
     * <p>Information about the application.</p>
     */
    application?: Application;
}
export declare namespace CreateApplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateApplicationResponse) => any;
}
export interface CreateAttributeGroupRequest {
    /**
     * <p>The name of the attribute group.</p>
     */
    name: string | undefined;
    /**
     * <p>The description of the attribute group that the user provides.</p>
     */
    description?: string;
    /**
     * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
     */
    attributes: string | undefined;
    /**
     * <p>Key-value pairs you can use to associate with the attribute group.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If you retry a request that
     *       completed successfully using the same client token and the same parameters, the retry succeeds
     *       without performing any further actions. If you retry a successful request using the same
     *       client token, but one or more of the parameters are different, the retry fails.</p>
     */
    clientToken?: string;
}
export declare namespace CreateAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAttributeGroupRequest) => any;
}
export interface CreateAttributeGroupResponse {
    /**
     * <p>Information about the attribute group.</p>
     */
    attributeGroup?: AttributeGroup;
}
export declare namespace CreateAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAttributeGroupResponse) => any;
}
export interface DeleteApplicationRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
}
export declare namespace DeleteApplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteApplicationRequest) => any;
}
export interface DeleteApplicationResponse {
    /**
     * <p>Information about the deleted application.</p>
     */
    application?: ApplicationSummary;
}
export declare namespace DeleteApplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteApplicationResponse) => any;
}
export interface DeleteAttributeGroupRequest {
    /**
     * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
     */
    attributeGroup: string | undefined;
}
export declare namespace DeleteAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAttributeGroupRequest) => any;
}
export interface DeleteAttributeGroupResponse {
    /**
     * <p>Information about the deleted attribute group.</p>
     */
    attributeGroup?: AttributeGroupSummary;
}
export declare namespace DeleteAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAttributeGroupResponse) => any;
}
export interface DisassociateAttributeGroupRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
     */
    attributeGroup: string | undefined;
}
export declare namespace DisassociateAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateAttributeGroupRequest) => any;
}
export interface DisassociateAttributeGroupResponse {
    /**
     * <p>The Amazon resource name (ARN) that specifies the application.</p>
     */
    applicationArn?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the attribute group.</p>
     */
    attributeGroupArn?: string;
}
export declare namespace DisassociateAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateAttributeGroupResponse) => any;
}
export interface DisassociateResourceRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The type of the resource that is being disassociated.</p>
     */
    resourceType: ResourceType | string | undefined;
    /**
     * <p>The name or ID of the resource.</p>
     */
    resource: string | undefined;
}
export declare namespace DisassociateResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceRequest) => any;
}
export interface DisassociateResourceResponse {
    /**
     * <p>The Amazon resource name (ARN) that specifies the application.</p>
     */
    applicationArn?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
     */
    resourceArn?: string;
}
export declare namespace DisassociateResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateResourceResponse) => any;
}
export interface GetApplicationRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
}
export declare namespace GetApplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetApplicationRequest) => any;
}
export interface GetApplicationResponse {
    /**
     * <p>The identifier of the application.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the application across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the application. The name must be unique in the region in which you are creating the application.</p>
     */
    name?: string;
    /**
     * <p>The description of the application.</p>
     */
    description?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment when the application was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment when the application was last updated.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>The number of top-level resources that were registered as part of this application.</p>
     */
    associatedResourceCount?: number;
    /**
     * <p>Key-value pairs associated with the application.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetApplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetApplicationResponse) => any;
}
export interface GetAttributeGroupRequest {
    /**
     * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
     */
    attributeGroup: string | undefined;
}
export declare namespace GetAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAttributeGroupRequest) => any;
}
export interface GetAttributeGroupResponse {
    /**
     * <p>The identifier of the attribute group.</p>
     */
    id?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the attribute group across services.</p>
     */
    arn?: string;
    /**
     * <p>The name of the attribute group.</p>
     */
    name?: string;
    /**
     * <p>The description of the attribute group that the user provides.</p>
     */
    description?: string;
    /**
     * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
     */
    attributes?: string;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>Key-value pairs associated with the attribute group.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAttributeGroupResponse) => any;
}
export interface ListApplicationsRequest {
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
    /**
     * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
     */
    maxResults?: number;
}
export declare namespace ListApplicationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListApplicationsRequest) => any;
}
export interface ListApplicationsResponse {
    /**
     * <p>This list of applications.</p>
     */
    applications?: ApplicationSummary[];
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
}
export declare namespace ListApplicationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListApplicationsResponse) => any;
}
export interface ListAssociatedAttributeGroupsRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
    /**
     * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
     */
    maxResults?: number;
}
export declare namespace ListAssociatedAttributeGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociatedAttributeGroupsRequest) => any;
}
export interface ListAssociatedAttributeGroupsResponse {
    /**
     * <p>A list of attribute group IDs.</p>
     */
    attributeGroups?: string[];
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
}
export declare namespace ListAssociatedAttributeGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociatedAttributeGroupsResponse) => any;
}
export interface ListAssociatedResourcesRequest {
    /**
     * <p>The name or ID of the application.</p>
     */
    application: string | undefined;
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
    /**
     * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
     */
    maxResults?: number;
}
export declare namespace ListAssociatedResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociatedResourcesRequest) => any;
}
/**
 * <p>Information about the resource.</p>
 */
export interface ResourceInfo {
    /**
     * <p>The name of the resource.</p>
     */
    name?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource across services.</p>
     */
    arn?: string;
}
export declare namespace ResourceInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInfo) => any;
}
export interface ListAssociatedResourcesResponse {
    /**
     * <p>Information about the resources.</p>
     */
    resources?: ResourceInfo[];
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
}
export declare namespace ListAssociatedResourcesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssociatedResourcesResponse) => any;
}
export interface ListAttributeGroupsRequest {
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
    /**
     * <p>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</p>
     */
    maxResults?: number;
}
export declare namespace ListAttributeGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttributeGroupsRequest) => any;
}
export interface ListAttributeGroupsResponse {
    /**
     * <p>This list of attribute groups.</p>
     */
    attributeGroups?: AttributeGroupSummary[];
    /**
     * <p>The token to use to get the next page of results after a previous API call. </p>
     */
    nextToken?: string;
}
export declare namespace ListAttributeGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttributeGroupsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
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
     * <p>The tags on the resource.</p>
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
export interface SyncResourceRequest {
    /**
     * <p>The type of resource of which the application will be associated.</p>
     */
    resourceType: ResourceType | string | undefined;
    /**
     * <p>An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an AWS CloudFormation stack, or an Amazon S3 bucket.</p>
     */
    resource: string | undefined;
}
export declare namespace SyncResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SyncResourceRequest) => any;
}
export declare enum SyncAction {
    NO_ACTION = "NO_ACTION",
    START_SYNC = "START_SYNC"
}
export interface SyncResourceResponse {
    /**
     * <p>The Amazon resource name (ARN) that specifies the application.</p>
     */
    applicationArn?: string;
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
     */
    resourceArn?: string;
    /**
     * <p>The results of the output if an application is associated with an ARN value, which could be <code>syncStarted</code> or None.</p>
     */
    actionTaken?: SyncAction | string;
}
export declare namespace SyncResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SyncResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The new or modified tags for the resource.</p>
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
     * <p>The Amazon resource name (ARN) that specifies the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>A list of the tag keys to remove from the specified resource.</p>
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
export interface UpdateApplicationRequest {
    /**
     * <p>The name or ID of the application that will be updated.</p>
     */
    application: string | undefined;
    /**
     * <p>The new name of the application. The name must be unique in the region in which you are updating the application.</p>
     */
    name?: string;
    /**
     * <p>The new description of the application.</p>
     */
    description?: string;
}
export declare namespace UpdateApplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApplicationRequest) => any;
}
export interface UpdateApplicationResponse {
    /**
     * <p>The updated information of the application.</p>
     */
    application?: Application;
}
export declare namespace UpdateApplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateApplicationResponse) => any;
}
export interface UpdateAttributeGroupRequest {
    /**
     * <p>The name or ID of the attribute group that holds the attributes to describe the application.</p>
     */
    attributeGroup: string | undefined;
    /**
     * <p>The new name of the attribute group. The name must be unique in the region in which you are
     *        updating the attribute group.</p>
     */
    name?: string;
    /**
     * <p>The description of the attribute group that the user provides.</p>
     */
    description?: string;
    /**
     * <p>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.</p>
     */
    attributes?: string;
}
export declare namespace UpdateAttributeGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAttributeGroupRequest) => any;
}
export interface UpdateAttributeGroupResponse {
    /**
     * <p>The updated information of the attribute group.</p>
     */
    attributeGroup?: AttributeGroup;
}
export declare namespace UpdateAttributeGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAttributeGroupResponse) => any;
}
