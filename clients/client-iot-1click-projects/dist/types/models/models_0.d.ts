import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AssociateDeviceWithPlacementRequest {
    /**
     * <p>The name of the project containing the placement in which to associate the device.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The name of the placement in which to associate the device.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The ID of the physical device to be associated with the given placement in the project.
     *       Note that a mandatory 4 character prefix is required for all <code>deviceId</code>
     *       values.</p>
     */
    deviceId: string | undefined;
    /**
     * <p>The device template name to associate with the device ID.</p>
     */
    deviceTemplateName: string | undefined;
}
export declare namespace AssociateDeviceWithPlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDeviceWithPlacementRequest) => any;
}
export interface AssociateDeviceWithPlacementResponse {
}
export declare namespace AssociateDeviceWithPlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDeviceWithPlacementResponse) => any;
}
/**
 * <p></p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
    name: "InternalFailureException";
    $fault: "server";
    code: string | undefined;
    message: string | undefined;
}
export declare namespace InternalFailureException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalFailureException) => any;
}
/**
 * <p></p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    code: string | undefined;
    message: string | undefined;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p></p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
    name: "ResourceConflictException";
    $fault: "client";
    code: string | undefined;
    message: string | undefined;
}
export declare namespace ResourceConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceConflictException) => any;
}
/**
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    code: string | undefined;
    message: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface CreatePlacementRequest {
    /**
     * <p>The name of the placement to be created.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The name of the project in which to create the placement.</p>
     */
    projectName: string | undefined;
    /**
     * <p>Optional user-defined key/value pairs providing contextual data (such as location or
     *       function) for the placement.</p>
     */
    attributes?: {
        [key: string]: string;
    };
}
export declare namespace CreatePlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePlacementRequest) => any;
}
export interface CreatePlacementResponse {
}
export declare namespace CreatePlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePlacementResponse) => any;
}
/**
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 */
export interface DeviceTemplate {
    /**
     * <p>The device type, which currently must be <code>"button"</code>.</p>
     */
    deviceType?: string;
    /**
     * <p>An optional Lambda function to invoke instead of the default Lambda function provided by
     *       the placement template.</p>
     */
    callbackOverrides?: {
        [key: string]: string;
    };
}
export declare namespace DeviceTemplate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceTemplate) => any;
}
/**
 * <p>An object defining the template for a placement.</p>
 */
export interface PlacementTemplate {
    /**
     * <p>The default attributes (key/value pairs) to be applied to all placements using this
     *       template.</p>
     */
    defaultAttributes?: {
        [key: string]: string;
    };
    /**
     * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
     *         (<a>PlacementTemplate</a>) template.</p>
     */
    deviceTemplates?: {
        [key: string]: DeviceTemplate;
    };
}
export declare namespace PlacementTemplate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlacementTemplate) => any;
}
export interface CreateProjectRequest {
    /**
     * <p>The name of the project to create.</p>
     */
    projectName: string | undefined;
    /**
     * <p>An optional description for the project.</p>
     */
    description?: string;
    /**
     * <p>The schema defining the placement to be created. A placement template defines placement
     *       default attributes and device templates. You cannot add or remove device templates after the
     *       project has been created. However, you can update <code>callbackOverrides</code> for the
     *       device templates using the <code>UpdateProject</code> API.</p>
     */
    placementTemplate?: PlacementTemplate;
    /**
     * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example,
     *         <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
     *         Strategies</a>.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectRequest) => any;
}
export interface CreateProjectResponse {
}
export declare namespace CreateProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectResponse) => any;
}
export interface DeletePlacementRequest {
    /**
     * <p>The name of the empty placement to delete.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The project containing the empty placement to delete.</p>
     */
    projectName: string | undefined;
}
export declare namespace DeletePlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlacementRequest) => any;
}
export interface DeletePlacementResponse {
}
export declare namespace DeletePlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlacementResponse) => any;
}
/**
 * <p></p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    code: string | undefined;
    message: string | undefined;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
export interface DeleteProjectRequest {
    /**
     * <p>The name of the empty project to delete.</p>
     */
    projectName: string | undefined;
}
export declare namespace DeleteProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectRequest) => any;
}
export interface DeleteProjectResponse {
}
export declare namespace DeleteProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectResponse) => any;
}
export interface DescribePlacementRequest {
    /**
     * <p>The name of the placement within a project.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The project containing the placement to be described.</p>
     */
    projectName: string | undefined;
}
export declare namespace DescribePlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePlacementRequest) => any;
}
/**
 * <p>An object describing a project's placement.</p>
 */
export interface PlacementDescription {
    /**
     * <p>The name of the project containing the placement.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The name of the placement.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The user-defined attributes associated with the placement.</p>
     */
    attributes: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
     */
    createdDate: Date | undefined;
    /**
     * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
     *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
     *       same.</p>
     */
    updatedDate: Date | undefined;
}
export declare namespace PlacementDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlacementDescription) => any;
}
export interface DescribePlacementResponse {
    /**
     * <p>An object describing the placement.</p>
     */
    placement: PlacementDescription | undefined;
}
export declare namespace DescribePlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePlacementResponse) => any;
}
export interface DescribeProjectRequest {
    /**
     * <p>The name of the project to be described.</p>
     */
    projectName: string | undefined;
}
export declare namespace DescribeProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectRequest) => any;
}
/**
 * <p>An object providing detailed information for a particular project associated with an AWS
 *       account and region.</p>
 */
export interface ProjectDescription {
    /**
     * <p>The ARN of the project.</p>
     */
    arn?: string;
    /**
     * <p>The name of the project for which to obtain information from.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The description of the project.</p>
     */
    description?: string;
    /**
     * <p>The date when the project was originally created, in UNIX epoch time format.</p>
     */
    createdDate: Date | undefined;
    /**
     * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
     *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
     */
    updatedDate: Date | undefined;
    /**
     * <p>An object describing the project's placement specifications.</p>
     */
    placementTemplate?: PlacementTemplate;
    /**
     * <p>The tags (metadata key/value pairs) associated with the project.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ProjectDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectDescription) => any;
}
export interface DescribeProjectResponse {
    /**
     * <p>An object describing the project.</p>
     */
    project: ProjectDescription | undefined;
}
export declare namespace DescribeProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectResponse) => any;
}
export interface DisassociateDeviceFromPlacementRequest {
    /**
     * <p>The name of the project that contains the placement.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The name of the placement that the device should be removed from.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The device ID that should be removed from the placement.</p>
     */
    deviceTemplateName: string | undefined;
}
export declare namespace DisassociateDeviceFromPlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDeviceFromPlacementRequest) => any;
}
export interface DisassociateDeviceFromPlacementResponse {
}
export declare namespace DisassociateDeviceFromPlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDeviceFromPlacementResponse) => any;
}
export interface GetDevicesInPlacementRequest {
    /**
     * <p>The name of the project containing the placement.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The name of the placement to get the devices from.</p>
     */
    placementName: string | undefined;
}
export declare namespace GetDevicesInPlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicesInPlacementRequest) => any;
}
export interface GetDevicesInPlacementResponse {
    /**
     * <p>An object containing the devices (zero or more) within the placement.</p>
     */
    devices: {
        [key: string]: string;
    } | undefined;
}
export declare namespace GetDevicesInPlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicesInPlacementResponse) => any;
}
export interface ListPlacementsRequest {
    /**
     * <p>The project containing the placements to be listed.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return per request. If not set, a default value of 100 is
     *       used.</p>
     */
    maxResults?: number;
}
export declare namespace ListPlacementsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlacementsRequest) => any;
}
/**
 * <p>An object providing summary information for a particular placement.</p>
 */
export interface PlacementSummary {
    /**
     * <p>The name of the project containing the placement.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The name of the placement being summarized.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
     */
    createdDate: Date | undefined;
    /**
     * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
     *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
     *       same.</p>
     */
    updatedDate: Date | undefined;
}
export declare namespace PlacementSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlacementSummary) => any;
}
export interface ListPlacementsResponse {
    /**
     * <p>An object listing the requested placements.</p>
     */
    placements: PlacementSummary[] | undefined;
    /**
     * <p>The token used to retrieve the next set of results - will be effectively empty if there
     *       are no further results.</p>
     */
    nextToken?: string;
}
export declare namespace ListPlacementsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlacementsResponse) => any;
}
export interface ListProjectsRequest {
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return per request. If not set, a default value of 100 is
     *       used.</p>
     */
    maxResults?: number;
}
export declare namespace ListProjectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsRequest) => any;
}
/**
 * <p>An object providing summary information for a particular project for an associated AWS
 *       account and region.</p>
 */
export interface ProjectSummary {
    /**
     * <p>The ARN of the project.</p>
     */
    arn?: string;
    /**
     * <p>The name of the project being summarized.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The date when the project was originally created, in UNIX epoch time format.</p>
     */
    createdDate: Date | undefined;
    /**
     * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
     *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
     */
    updatedDate: Date | undefined;
    /**
     * <p>The tags (metadata key/value pairs) associated with the project.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ProjectSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectSummary) => any;
}
export interface ListProjectsResponse {
    /**
     * <p>An object containing the list of projects.</p>
     */
    projects: ProjectSummary[] | undefined;
    /**
     * <p>The token used to retrieve the next set of results - will be effectively empty if there
     *       are no further results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProjectsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource whose tags you want to list.</p>
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
     * <p>The tags (metadata key/value pairs) which you have assigned to the resource.</p>
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
export interface TagResourceRequest {
    /**
     * <p>The ARN of the resouce for which tag(s) should be added or modified.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
     *       resource.</p>
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
     * <p>The ARN of the resource whose tag you want to remove.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The keys of those tags which you want to remove.</p>
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
export interface UpdatePlacementRequest {
    /**
     * <p>The name of the placement to update.</p>
     */
    placementName: string | undefined;
    /**
     * <p>The name of the project containing the placement to be updated.</p>
     */
    projectName: string | undefined;
    /**
     * <p>The user-defined object of attributes used to update the placement. The maximum number of
     *       key/value pairs is 50.</p>
     */
    attributes?: {
        [key: string]: string;
    };
}
export declare namespace UpdatePlacementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePlacementRequest) => any;
}
export interface UpdatePlacementResponse {
}
export declare namespace UpdatePlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePlacementResponse) => any;
}
export interface UpdateProjectRequest {
    /**
     * <p>The name of the project to be updated.</p>
     */
    projectName: string | undefined;
    /**
     * <p>An optional user-defined description for the project.</p>
     */
    description?: string;
    /**
     * <p>An object defining the project update. Once a project has been created, you cannot add
     *       device template names to the project. However, for a given <code>placementTemplate</code>, you
     *       can update the associated <code>callbackOverrides</code> for the device definition using this
     *       API.</p>
     */
    placementTemplate?: PlacementTemplate;
}
export declare namespace UpdateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectRequest) => any;
}
export interface UpdateProjectResponse {
}
export declare namespace UpdateProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectResponse) => any;
}
