import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have permission to perform this operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum ResourceType {
    OUTPOST = "OUTPOST"
}
/**
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
    /**
     * <p>The ID of the resource causing the conflict.</p>
     */
    ResourceId?: string;
    /**
     * <p>The type of the resource causing the conflict.</p>
     */
    ResourceType?: ResourceType | string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface CreateOutpostInput {
    /**
     * <p>The name of the Outpost.</p>
     */
    Name: string | undefined;
    /**
     * <p>The description of the Outpost.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId: string | undefined;
    /**
     * <p>The Availability Zone.</p>
     *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The ID of the Availability Zone.</p>
     *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>The tags to apply to the Outpost.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateOutpostInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOutpostInput) => any;
}
/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
    /**
     * <p>The ID of the Outpost.</p>
     */
    OutpostId?: string;
    /**
     * <p>The AWS account ID of the Outpost owner.</p>
     */
    OwnerId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
     */
    OutpostArn?: string;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The name of the Outpost.</p>
     */
    Name?: string;
    /**
     * <p>The description of the Outpost.</p>
     */
    Description?: string;
    /**
     * <p>The life cycle status.</p>
     */
    LifeCycleStatus?: string;
    /**
     * <p>The Availability Zone.</p>
     *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The ID of the Availability Zone.</p>
     *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>The Outpost tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of the site.</p>
     */
    SiteArn?: string;
}
export declare namespace Outpost {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Outpost) => any;
}
export interface CreateOutpostOutput {
    /**
     * <p>Information about an Outpost.</p>
     */
    Outpost?: Outpost;
}
export declare namespace CreateOutpostOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOutpostOutput) => any;
}
/**
 * <p>An internal error has occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The specified request is not valid.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
/**
 * <p>You have exceeded a service quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>A parameter is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface DeleteOutpostInput {
    /**
     * <p>The ID of the Outpost.</p>
     */
    OutpostId: string | undefined;
}
export declare namespace DeleteOutpostInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutpostInput) => any;
}
export interface DeleteOutpostOutput {
}
export declare namespace DeleteOutpostOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutpostOutput) => any;
}
export interface DeleteSiteInput {
    /**
     * <p>The ID of the site.</p>
     */
    SiteId: string | undefined;
}
export declare namespace DeleteSiteInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSiteInput) => any;
}
export interface DeleteSiteOutput {
}
export declare namespace DeleteSiteOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSiteOutput) => any;
}
export interface GetOutpostInput {
    /**
     * <p>The ID of the Outpost.</p>
     */
    OutpostId: string | undefined;
}
export declare namespace GetOutpostInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutpostInput) => any;
}
export interface GetOutpostOutput {
    /**
     * <p>Information about an Outpost.</p>
     */
    Outpost?: Outpost;
}
export declare namespace GetOutpostOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutpostOutput) => any;
}
export interface GetOutpostInstanceTypesInput {
    /**
     * <p>The ID of the Outpost.</p>
     */
    OutpostId: string | undefined;
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum page size.</p>
     */
    MaxResults?: number;
}
export declare namespace GetOutpostInstanceTypesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutpostInstanceTypesInput) => any;
}
/**
 * <p>Information about an instance type.</p>
 */
export interface InstanceTypeItem {
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: string;
}
export declare namespace InstanceTypeItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceTypeItem) => any;
}
export interface GetOutpostInstanceTypesOutput {
    /**
     * <p>Information about the instance types.</p>
     */
    InstanceTypes?: InstanceTypeItem[];
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the Outpost.</p>
     */
    OutpostId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
     */
    OutpostArn?: string;
}
export declare namespace GetOutpostInstanceTypesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutpostInstanceTypesOutput) => any;
}
export interface ListOutpostsInput {
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum page size.</p>
     */
    MaxResults?: number;
}
export declare namespace ListOutpostsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOutpostsInput) => any;
}
export interface ListOutpostsOutput {
    /**
     * <p>Information about the Outposts.</p>
     */
    Outposts?: Outpost[];
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
}
export declare namespace ListOutpostsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOutpostsOutput) => any;
}
export interface ListSitesInput {
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum page size.</p>
     */
    MaxResults?: number;
}
export declare namespace ListSitesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSitesInput) => any;
}
/**
 * <p>Information about a site.</p>
 */
export interface Site {
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The ID of the AWS account.</p>
     */
    AccountId?: string;
    /**
     * <p>The name of the site.</p>
     */
    Name?: string;
    /**
     * <p>The description of the site.</p>
     */
    Description?: string;
    /**
     * <p>The site tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of the site.</p>
     */
    SiteArn?: string;
}
export declare namespace Site {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Site) => any;
}
export interface ListSitesOutput {
    /**
     * <p>Information about the sites.</p>
     */
    Sites?: Site[];
    /**
     * <p>The pagination token.</p>
     */
    NextToken?: string;
}
export declare namespace ListSitesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSitesOutput) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The resource tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to add to the resource.</p>
     */
    Tags: {
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
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys.</p>
     */
    TagKeys: string[] | undefined;
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
