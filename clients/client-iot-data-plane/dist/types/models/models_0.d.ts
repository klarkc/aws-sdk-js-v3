import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The specified version does not match the version of the document.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The input for the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
    /**
     * <p>The name of the shadow.</p>
     */
    shadowName?: string;
}
export declare namespace DeleteThingShadowRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteThingShadowRequest) => any;
}
/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse {
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload: Uint8Array | undefined;
}
export declare namespace DeleteThingShadowResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteThingShadowResponse) => any;
}
/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
    name: "InternalFailureException";
    $fault: "server";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace InternalFailureException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalFailureException) => any;
}
/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException extends __SmithyException, $MetadataBearer {
    name: "MethodNotAllowedException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace MethodNotAllowedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MethodNotAllowedException) => any;
}
/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace UnauthorizedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnauthorizedException) => any;
}
/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedDocumentEncodingException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace UnsupportedDocumentEncodingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedDocumentEncodingException) => any;
}
/**
 * <p>The input for the GetThingShadow operation.</p>
 */
export interface GetThingShadowRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
    /**
     * <p>The name of the shadow.</p>
     */
    shadowName?: string;
}
export declare namespace GetThingShadowRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThingShadowRequest) => any;
}
/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse {
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
}
export declare namespace GetThingShadowResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThingShadowResponse) => any;
}
export interface ListNamedShadowsForThingRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
}
export declare namespace ListNamedShadowsForThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNamedShadowsForThingRequest) => any;
}
export interface ListNamedShadowsForThingResponse {
    /**
     * <p>The list of shadows for the specified thing.</p>
     */
    results?: string[];
    /**
     * <p>The token for the next set of results, or null if there are no additional results.</p>
     */
    nextToken?: string;
    /**
     * <p>The Epoch date and time the response was generated by AWS IoT.</p>
     */
    timestamp?: number;
}
export declare namespace ListNamedShadowsForThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNamedShadowsForThingResponse) => any;
}
/**
 * <p>The input for the Publish operation.</p>
 */
export interface PublishRequest {
    /**
     * <p>The name of the MQTT topic.</p>
     */
    topic: string | undefined;
    /**
     * <p>The Quality of Service (QoS) level.</p>
     */
    qos?: number;
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
}
export declare namespace PublishRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishRequest) => any;
}
/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException extends __SmithyException, $MetadataBearer {
    name: "RequestEntityTooLargeException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace RequestEntityTooLargeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestEntityTooLargeException) => any;
}
/**
 * <p>The input for the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
    /**
     * <p>The name of the shadow.</p>
     */
    shadowName?: string;
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload: Uint8Array | undefined;
}
export declare namespace UpdateThingShadowRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThingShadowRequest) => any;
}
/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse {
    /**
     * <p>The state information, in JSON format.</p>
     */
    payload?: Uint8Array;
}
export declare namespace UpdateThingShadowResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThingShadowResponse) => any;
}
