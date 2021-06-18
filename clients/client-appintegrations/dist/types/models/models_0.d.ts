import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event filter.</p>
 */
export interface EventFilter {
  /**
   * <p>The source of the events.</p>
   */
  Source: string | undefined;
}
export declare namespace EventFilter {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EventFilter) => any;
}
export interface CreateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;
  /**
   * <p>The description of the event integration.</p>
   */
  Description?: string;
  /**
   * <p>The event filter.</p>
   */
  EventFilter: EventFilter | undefined;
  /**
   * <p>The Eventbridge bus.</p>
   */
  EventBridgeBus: string | undefined;
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
  /**
   * <p>One or more tags.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateEventIntegrationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateEventIntegrationRequest) => any;
}
export interface CreateEventIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration. </p>
   */
  EventIntegrationArn?: string;
}
export declare namespace CreateEventIntegrationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateEventIntegrationResponse) => any;
}
/**
 * <p>A resource with the specified name already exists.</p>
 */
export interface DuplicateResourceException extends __SmithyException, $MetadataBearer {
  name: "DuplicateResourceException";
  $fault: "client";
  Message?: string;
}
export declare namespace DuplicateResourceException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DuplicateResourceException) => any;
}
/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export interface InternalServiceError extends __SmithyException, $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message?: string;
}
export declare namespace InternalServiceError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServiceError) => any;
}
/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}
export declare namespace InvalidRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The allowed quota for the resource has been exceeded.</p>
 */
export interface ResourceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceQuotaExceededException";
  $fault: "client";
  Message?: string;
}
export declare namespace ResourceQuotaExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceQuotaExceededException) => any;
}
/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}
export declare namespace ThrottlingException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export interface DeleteEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;
}
export declare namespace DeleteEventIntegrationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteEventIntegrationRequest) => any;
}
export interface DeleteEventIntegrationResponse {}
export declare namespace DeleteEventIntegrationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteEventIntegrationResponse) => any;
}
/**
 * <p>The specified resource was not found.</p>
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
export interface GetEventIntegrationRequest {
  /**
   * <p>The name of the event integration. </p>
   */
  Name: string | undefined;
}
export declare namespace GetEventIntegrationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEventIntegrationRequest) => any;
}
export interface GetEventIntegrationResponse {
  /**
   * <p>The name of the event integration. </p>
   */
  Name?: string;
  /**
   * <p>The description of the event integration.</p>
   */
  Description?: string;
  /**
   * <p>The Amazon Resource Name (ARN) for the event integration.</p>
   */
  EventIntegrationArn?: string;
  /**
   * <p>The Eventbridge bus.</p>
   */
  EventBridgeBus?: string;
  /**
   * <p>The event filter.</p>
   */
  EventFilter?: EventFilter;
  /**
   * <p>One or more tags.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace GetEventIntegrationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEventIntegrationResponse) => any;
}
export interface ListEventIntegrationAssociationsRequest {
  /**
   * <p>The name of the event integration. </p>
   */
  EventIntegrationName: string | undefined;
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}
export declare namespace ListEventIntegrationAssociationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListEventIntegrationAssociationsRequest) => any;
}
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event integration association.</p>
 */
export interface EventIntegrationAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) for the event integration association.</p>
   */
  EventIntegrationAssociationArn?: string;
  /**
   * <p>The identifier for the event integration association.</p>
   */
  EventIntegrationAssociationId?: string;
  /**
   * <p>The name of the event integration.</p>
   */
  EventIntegrationName?: string;
  /**
   * <p>The identifier for the client that is associated with the event integration.</p>
   */
  ClientId?: string;
  /**
   * <p>The name of the Eventbridge rule.</p>
   */
  EventBridgeRuleName?: string;
  /**
   * <p>The metadata associated with the client.</p>
   */
  ClientAssociationMetadata?: {
    [key: string]: string;
  };
}
export declare namespace EventIntegrationAssociation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EventIntegrationAssociation) => any;
}
export interface ListEventIntegrationAssociationsResponse {
  /**
   * <p>The event integration associations.</p>
   */
  EventIntegrationAssociations?: EventIntegrationAssociation[];
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListEventIntegrationAssociationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListEventIntegrationAssociationsResponse) => any;
}
export interface ListEventIntegrationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}
export declare namespace ListEventIntegrationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListEventIntegrationsRequest) => any;
}
/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event integration.</p>
 */
export interface EventIntegration {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration.</p>
   */
  EventIntegrationArn?: string;
  /**
   * <p>The name of the event integration.</p>
   */
  Name?: string;
  /**
   * <p>The event integration description.</p>
   */
  Description?: string;
  /**
   * <p>The event integration filter.</p>
   */
  EventFilter?: EventFilter;
  /**
   * <p>The Amazon Eventbridge bus for the event integration.</p>
   */
  EventBridgeBus?: string;
  /**
   * <p>The tags.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace EventIntegration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EventIntegration) => any;
}
export interface ListEventIntegrationsResponse {
  /**
   * <p>The event integrations.</p>
   */
  EventIntegrations?: EventIntegration[];
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListEventIntegrationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListEventIntegrationsResponse) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
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
   * <p>Information about the tags.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
  /**
   * <p>One or more tags. </p>
   */
  tags:
    | {
        [key: string]: string;
      }
    | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {}
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
  resourceArn: string | undefined;
  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {}
export declare namespace UntagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;
  /**
   * <p>The description of the event inegration.</p>
   */
  Description?: string;
}
export declare namespace UpdateEventIntegrationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateEventIntegrationRequest) => any;
}
export interface UpdateEventIntegrationResponse {}
export declare namespace UpdateEventIntegrationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateEventIntegrationResponse) => any;
}
