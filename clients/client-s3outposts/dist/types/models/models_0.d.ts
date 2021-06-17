import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Access was denied for this action.</p>
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
/**
 * <p>There was a conflict with this action, and it could not be completed.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface CreateEndpointRequest {
    /**
     * <p>The ID of the AWS Outpost. </p>
     */
    OutpostId: string | undefined;
    /**
     * <p>The ID of the subnet in the selected VPC.</p>
     */
    SubnetId: string | undefined;
    /**
     * <p>The ID of the security group to use with the endpoint.</p>
     */
    SecurityGroupId: string | undefined;
}
export declare namespace CreateEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEndpointRequest) => any;
}
export interface CreateEndpointResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
     */
    EndpointArn?: string;
}
export declare namespace CreateEndpointResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEndpointResult) => any;
}
/**
 * <p>There was an exception with the internal server.</p>
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
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>There was an exception validating this data.</p>
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
export interface DeleteEndpointRequest {
    /**
     * <p>The ID of the end point.</p>
     */
    EndpointId: string | undefined;
    /**
     * <p>The ID of the AWS Outpost. </p>
     */
    OutpostId: string | undefined;
}
export declare namespace DeleteEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEndpointRequest) => any;
}
/**
 * <p>The container for the network interface.</p>
 */
export interface NetworkInterface {
    /**
     * <p>The ID for the network interface.</p>
     */
    NetworkInterfaceId?: string;
}
export declare namespace NetworkInterface {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NetworkInterface) => any;
}
export declare enum EndpointStatus {
    AVAILABLE = "AVAILABLE",
    PENDING = "PENDING"
}
/**
 * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
 *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
 *             actions within your virtual private cloud (VPC). </p>
 */
export interface Endpoint {
    /**
     * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
     */
    EndpointArn?: string;
    /**
     * <p>The ID of the AWS Outpost.</p>
     */
    OutpostsId?: string;
    /**
     * <p>The VPC CIDR committed by this endpoint.</p>
     */
    CidrBlock?: string;
    /**
     * <p>The status of the endpoint.</p>
     */
    Status?: EndpointStatus | string;
    /**
     * <p>The time the endpoint was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The network interface of the endpoint.</p>
     */
    NetworkInterfaces?: NetworkInterface[];
}
export declare namespace Endpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Endpoint) => any;
}
export interface ListEndpointsRequest {
    /**
     * <p>The next endpoint requested in the list.</p>
     */
    NextToken?: string;
    /**
     * <p>The max number of endpoints that can be returned on the request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListEndpointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEndpointsRequest) => any;
}
export interface ListEndpointsResult {
    /**
     * <p>Returns an array of endpoints associated with AWS Outpost.</p>
     */
    Endpoints?: Endpoint[];
    /**
     * <p>The next endpoint returned in the list.</p>
     */
    NextToken?: string;
}
export declare namespace ListEndpointsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEndpointsResult) => any;
}
