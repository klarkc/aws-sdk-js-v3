import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface DeviceDescription {
    /**
     * <p>The ARN of the device.</p>
     */
    Arn?: string;
    /**
     * <p>An array of zero or more elements of DeviceAttribute objects providing
     *  user specified device attributes.</p>
     */
    Attributes?: {
        [key: string]: string;
    };
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>A Boolean value indicating whether or not the device is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
     *  device.</p>
     */
    RemainingLife?: number;
    /**
     * <p>The type of the device, such as "button".</p>
     */
    Type?: string;
    /**
     * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DeviceDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceDescription) => any;
}
export interface Attributes {
}
export declare namespace Attributes {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Attributes) => any;
}
export interface Device {
    /**
     * <p>The user specified attributes associated with the device for an event.</p>
     */
    Attributes?: Attributes;
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The device type, such as "button".</p>
     */
    Type?: string;
}
export declare namespace Device {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Device) => any;
}
export interface DeviceEvent {
    /**
     * <p>An object representing the device associated with the event.</p>
     */
    Device?: Device;
    /**
     * <p>A serialized JSON object representing the device-type specific event.</p>
     */
    StdEvent?: string;
}
export declare namespace DeviceEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceEvent) => any;
}
export interface DeviceMethod {
    /**
     * <p>The type of the device, such as "button".</p>
     */
    DeviceType?: string;
    /**
     * <p>The name of the method applicable to the deviceType.</p>
     */
    MethodName?: string;
}
export declare namespace DeviceMethod {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceMethod) => any;
}
export interface ClaimDevicesByClaimCodeRequest {
    /**
     * <p>The claim code, starting with "C-", as provided by the device manufacturer.</p>
     */
    ClaimCode: string | undefined;
}
export declare namespace ClaimDevicesByClaimCodeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClaimDevicesByClaimCodeRequest) => any;
}
export interface ClaimDevicesByClaimCodeResponse {
    /**
     * <p>The claim code provided by the device manufacturer.</p>
     */
    ClaimCode?: string;
    /**
     * <p>The total number of devices associated with the claim code that has been processed in
     *  the claim request.</p>
     */
    Total?: number;
}
export declare namespace ClaimDevicesByClaimCodeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClaimDevicesByClaimCodeResponse) => any;
}
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    /**
     * <p>403</p>
     */
    Code?: string;
    /**
     * <p>The 403 error message returned by the web server.</p>
     */
    Message?: string;
}
export declare namespace ForbiddenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ForbiddenException) => any;
}
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
    name: "InternalFailureException";
    $fault: "server";
    /**
     * <p>500</p>
     */
    Code?: string;
    /**
     * <p>The 500 error message returned by the web server.</p>
     */
    Message?: string;
}
export declare namespace InternalFailureException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalFailureException) => any;
}
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    /**
     * <p>400</p>
     */
    Code?: string;
    /**
     * <p>The 400 error message returned by the web server.</p>
     */
    Message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
export interface DescribeDeviceRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace DescribeDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDeviceRequest) => any;
}
export interface DescribeDeviceResponse {
    /**
     * <p>Device details.</p>
     */
    DeviceDescription?: DeviceDescription;
}
export declare namespace DescribeDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDeviceResponse) => any;
}
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>404</p>
     */
    Code?: string;
    /**
     * <p>The requested device could not be found.</p>
     */
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface FinalizeDeviceClaimRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>A collection of key/value pairs defining the resource tags. For example, {
     *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
     *  Tagging Strategies</a>.</p><p>
     *
     *  </p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace FinalizeDeviceClaimRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FinalizeDeviceClaimRequest) => any;
}
export interface FinalizeDeviceClaimResponse {
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace FinalizeDeviceClaimResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FinalizeDeviceClaimResponse) => any;
}
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
    name: "PreconditionFailedException";
    $fault: "client";
    /**
     * <p>412</p>
     */
    Code?: string;
    /**
     * <p>An error message explaining the error or its remedy.</p>
     */
    Message?: string;
}
export declare namespace PreconditionFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PreconditionFailedException) => any;
}
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
    name: "ResourceConflictException";
    $fault: "client";
    /**
     * <p>409</p>
     */
    Code?: string;
    /**
     * <p>An error message explaining the error or its remedy.</p>
     */
    Message?: string;
}
export declare namespace ResourceConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceConflictException) => any;
}
export interface GetDeviceMethodsRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace GetDeviceMethodsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceMethodsRequest) => any;
}
export interface GetDeviceMethodsResponse {
    /**
     * <p>List of available device APIs.</p>
     */
    DeviceMethods?: DeviceMethod[];
}
export declare namespace GetDeviceMethodsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceMethodsResponse) => any;
}
export interface InitiateDeviceClaimRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace InitiateDeviceClaimRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InitiateDeviceClaimRequest) => any;
}
export interface InitiateDeviceClaimResponse {
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace InitiateDeviceClaimResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InitiateDeviceClaimResponse) => any;
}
export interface InvokeDeviceMethodRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The device method to invoke.</p>
     */
    DeviceMethod?: DeviceMethod;
    /**
     * <p>A JSON encoded string containing the device method request parameters.</p>
     */
    DeviceMethodParameters?: string;
}
export declare namespace InvokeDeviceMethodRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvokeDeviceMethodRequest) => any;
}
export interface InvokeDeviceMethodResponse {
    /**
     * <p>A JSON encoded string containing the device method response.</p>
     */
    DeviceMethodResponse?: string;
}
export declare namespace InvokeDeviceMethodResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvokeDeviceMethodResponse) => any;
}
export interface RangeNotSatisfiableException extends __SmithyException, $MetadataBearer {
    name: "RangeNotSatisfiableException";
    $fault: "client";
    /**
     * <p>416</p>
     */
    Code?: string;
    /**
     * <p>The requested number of results specified by nextToken cannot be
     *  satisfied.</p>
     */
    Message?: string;
}
export declare namespace RangeNotSatisfiableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RangeNotSatisfiableException) => any;
}
export interface ListDeviceEventsRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The start date for the device event query, in ISO8061 format. For example,
     *  2018-03-28T15:45:12.880Z
     *  </p>
     */
    FromTimeStamp: Date | undefined;
    /**
     * <p>The maximum number of results to return per request. If not set, a default value of
     *  100 is used.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The end date for the device event query, in ISO8061 format. For example,
     *  2018-03-28T15:45:12.880Z
     *  </p>
     */
    ToTimeStamp: Date | undefined;
}
export declare namespace ListDeviceEventsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceEventsRequest) => any;
}
export interface ListDeviceEventsResponse {
    /**
     * <p>An array of zero or more elements describing the event(s) associated with the
     *  device.</p>
     */
    Events?: DeviceEvent[];
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDeviceEventsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceEventsResponse) => any;
}
export interface ListDevicesRequest {
    /**
     * <p>The type of the device, such as "button".</p>
     */
    DeviceType?: string;
    /**
     * <p>The maximum number of results to return per request. If not set, a default value of
     *  100 is used.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicesRequest) => any;
}
export interface ListDevicesResponse {
    /**
     * <p>A list of devices.</p>
     */
    Devices?: DeviceDescription[];
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
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
     * <p>A collection of key/value pairs defining the resource tags. For example, {
     *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
     *  Tagging Strategies</a>.</p><p>
     *
     *  </p>
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
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>A collection of key/value pairs defining the resource tags. For example, {
     *  "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
     *  Tagging Strategies</a>.</p><p>
     *
     *  </p>
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
export interface UnclaimDeviceRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace UnclaimDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnclaimDeviceRequest) => any;
}
export interface UnclaimDeviceResponse {
    /**
     * <p>The device's final claim state.</p>
     */
    State?: string;
}
export declare namespace UnclaimDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnclaimDeviceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>A collections of tag keys. For example, {"key1","key2"}</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateDeviceStateRequest {
    /**
     * <p>The unique identifier of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>If true, the device is enabled. If false, the device is
     *  disabled.</p>
     */
    Enabled?: boolean;
}
export declare namespace UpdateDeviceStateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceStateRequest) => any;
}
export interface UpdateDeviceStateResponse {
}
export declare namespace UpdateDeviceStateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceStateResponse) => any;
}
