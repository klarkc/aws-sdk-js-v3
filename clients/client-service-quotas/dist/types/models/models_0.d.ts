import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have sufficient permission to perform this action.</p>
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
export interface AssociateServiceQuotaTemplateRequest {
}
export declare namespace AssociateServiceQuotaTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceQuotaTemplateRequest) => any;
}
export interface AssociateServiceQuotaTemplateResponse {
}
export declare namespace AssociateServiceQuotaTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceQuotaTemplateResponse) => any;
}
/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is
 *       enabled in your organization.</p>
 */
export interface AWSServiceAccessNotEnabledException extends __SmithyException, $MetadataBearer {
    name: "AWSServiceAccessNotEnabledException";
    $fault: "client";
    Message?: string;
}
export declare namespace AWSServiceAccessNotEnabledException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AWSServiceAccessNotEnabledException) => any;
}
/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 */
export interface DependencyAccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "DependencyAccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace DependencyAccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DependencyAccessDeniedException) => any;
}
/**
 * <p>The account making this call is not a member of an organization.</p>
 */
export interface NoAvailableOrganizationException extends __SmithyException, $MetadataBearer {
    name: "NoAvailableOrganizationException";
    $fault: "client";
    Message?: string;
}
export declare namespace NoAvailableOrganizationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoAvailableOrganizationException) => any;
}
/**
 * <p>The organization that your account belongs to is not in All Features mode.</p>
 */
export interface OrganizationNotInAllFeaturesModeException extends __SmithyException, $MetadataBearer {
    name: "OrganizationNotInAllFeaturesModeException";
    $fault: "client";
    Message?: string;
}
export declare namespace OrganizationNotInAllFeaturesModeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationNotInAllFeaturesModeException) => any;
}
/**
 * <p>Something went wrong.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    Message?: string;
}
export declare namespace ServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceException) => any;
}
/**
 * <p>The Service Quotas template is not available in this AWS Region.</p>
 */
export interface TemplatesNotAvailableInRegionException extends __SmithyException, $MetadataBearer {
    name: "TemplatesNotAvailableInRegionException";
    $fault: "client";
    Message?: string;
}
export declare namespace TemplatesNotAvailableInRegionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TemplatesNotAvailableInRegionException) => any;
}
/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request
 *       an increase for this quota.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>The AWS Region.</p>
     */
    AwsRegion: string | undefined;
}
export declare namespace DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceQuotaIncreaseRequestFromTemplateRequest) => any;
}
export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}
export declare namespace DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceQuotaIncreaseRequestFromTemplateResponse) => any;
}
/**
 * <p>Invalid input was provided.</p>
 */
export interface IllegalArgumentException extends __SmithyException, $MetadataBearer {
    name: "IllegalArgumentException";
    $fault: "client";
    Message?: string;
}
export declare namespace IllegalArgumentException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IllegalArgumentException) => any;
}
/**
 * <p>The specified resource does not exist.</p>
 */
export interface NoSuchResourceException extends __SmithyException, $MetadataBearer {
    name: "NoSuchResourceException";
    $fault: "client";
    Message?: string;
}
export declare namespace NoSuchResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoSuchResourceException) => any;
}
export interface DisassociateServiceQuotaTemplateRequest {
}
export declare namespace DisassociateServiceQuotaTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceQuotaTemplateRequest) => any;
}
export interface DisassociateServiceQuotaTemplateResponse {
}
export declare namespace DisassociateServiceQuotaTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceQuotaTemplateResponse) => any;
}
/**
 * <p>The quota request template is not associated with your organization.</p>
 */
export interface ServiceQuotaTemplateNotInUseException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaTemplateNotInUseException";
    $fault: "client";
    Message?: string;
}
export declare namespace ServiceQuotaTemplateNotInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaTemplateNotInUseException) => any;
}
export declare enum ErrorCode {
    DEPENDENCY_ACCESS_DENIED_ERROR = "DEPENDENCY_ACCESS_DENIED_ERROR",
    DEPENDENCY_SERVICE_ERROR = "DEPENDENCY_SERVICE_ERROR",
    DEPENDENCY_THROTTLING_ERROR = "DEPENDENCY_THROTTLING_ERROR",
    SERVICE_QUOTA_NOT_AVAILABLE_ERROR = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR"
}
/**
 * <p>An error that explains why an action did not succeed.</p>
 */
export interface ErrorReason {
    /**
     * <p>Service Quotas returns the following error values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> - The caller does not have the required
     *           permissions to complete the action. To resolve the error, you must have permission to
     *           access the service or quota.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DEPENDENCY_THROTTLING_ERROR</code> - The service is throttling Service
     *           Quotas.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DEPENDENCY_SERVICE_ERROR</code> - The service is not available.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> - There was an error in Service
     *           Quotas.</p>
     *             </li>
     *          </ul>
     */
    ErrorCode?: ErrorCode | string;
    /**
     * <p>The error message.</p>
     */
    ErrorMessage?: string;
}
export declare namespace ErrorReason {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ErrorReason) => any;
}
export interface GetAssociationForServiceQuotaTemplateRequest {
}
export declare namespace GetAssociationForServiceQuotaTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAssociationForServiceQuotaTemplateRequest) => any;
}
export declare enum ServiceQuotaTemplateAssociationStatus {
    ASSOCIATED = "ASSOCIATED",
    DISASSOCIATED = "DISASSOCIATED"
}
export interface GetAssociationForServiceQuotaTemplateResponse {
    /**
     * <p>The association status. If the status is <code>ASSOCIATED</code>, the quota increase
     *       requests in the template are automatically applied to new accounts in your
     *       organization.</p>
     */
    ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus | string;
}
export declare namespace GetAssociationForServiceQuotaTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAssociationForServiceQuotaTemplateResponse) => any;
}
export interface GetAWSDefaultServiceQuotaRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
}
export declare namespace GetAWSDefaultServiceQuotaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAWSDefaultServiceQuotaRequest) => any;
}
export declare enum PeriodUnit {
    DAY = "DAY",
    HOUR = "HOUR",
    MICROSECOND = "MICROSECOND",
    MILLISECOND = "MILLISECOND",
    MINUTE = "MINUTE",
    SECOND = "SECOND",
    WEEK = "WEEK"
}
/**
 * <p>Information about the quota period.</p>
 */
export interface QuotaPeriod {
    /**
     * <p>The value.</p>
     */
    PeriodValue?: number;
    /**
     * <p>The time unit.</p>
     */
    PeriodUnit?: PeriodUnit | string;
}
export declare namespace QuotaPeriod {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuotaPeriod) => any;
}
/**
 * <p>Information about the CloudWatch metric that reflects quota usage.</p>
 */
export interface MetricInfo {
    /**
     * <p>The namespace of the metric.</p>
     */
    MetricNamespace?: string;
    /**
     * <p>The name of the metric.</p>
     */
    MetricName?: string;
    /**
     * <p>The metric dimension. This is a name/value pair that is part of the identity of a
     *       metric.</p>
     */
    MetricDimensions?: {
        [key: string]: string;
    };
    /**
     * <p>The metric statistic that we recommend you use when determining quota usage.</p>
     */
    MetricStatisticRecommendation?: string;
}
export declare namespace MetricInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MetricInfo) => any;
}
/**
 * <p>Information about a quota.</p>
 */
export interface ServiceQuota {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The service name.</p>
     */
    ServiceName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the quota.</p>
     */
    QuotaArn?: string;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode?: string;
    /**
     * <p>The quota name.</p>
     */
    QuotaName?: string;
    /**
     * <p>The quota value.</p>
     */
    Value?: number;
    /**
     * <p>The unit of measurement.</p>
     */
    Unit?: string;
    /**
     * <p>Indicates whether the quota value can be increased.</p>
     */
    Adjustable?: boolean;
    /**
     * <p>Indicates whether the quota is global.</p>
     */
    GlobalQuota?: boolean;
    /**
     * <p>Information about the measurement.</p>
     */
    UsageMetric?: MetricInfo;
    /**
     * <p>The period of time.</p>
     */
    Period?: QuotaPeriod;
    /**
     * <p>The error code and error reason.</p>
     */
    ErrorReason?: ErrorReason;
}
export declare namespace ServiceQuota {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuota) => any;
}
export interface GetAWSDefaultServiceQuotaResponse {
    /**
     * <p>Information about the quota.</p>
     */
    Quota?: ServiceQuota;
}
export declare namespace GetAWSDefaultServiceQuotaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAWSDefaultServiceQuotaResponse) => any;
}
export interface GetRequestedServiceQuotaChangeRequest {
    /**
     * <p>The ID of the quota increase request.</p>
     */
    RequestId: string | undefined;
}
export declare namespace GetRequestedServiceQuotaChangeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRequestedServiceQuotaChangeRequest) => any;
}
export declare enum RequestStatus {
    APPROVED = "APPROVED",
    CASE_CLOSED = "CASE_CLOSED",
    CASE_OPENED = "CASE_OPENED",
    DENIED = "DENIED",
    PENDING = "PENDING"
}
/**
 * <p>Information about a quota increase request.</p>
 */
export interface RequestedServiceQuotaChange {
    /**
     * <p>The unique identifier.</p>
     */
    Id?: string;
    /**
     * <p>The case ID.</p>
     */
    CaseId?: string;
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The service name.</p>
     */
    ServiceName?: string;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode?: string;
    /**
     * <p>The quota name.</p>
     */
    QuotaName?: string;
    /**
     * <p>The new, increased value for the quota.</p>
     */
    DesiredValue?: number;
    /**
     * <p>The state of the quota increase request.</p>
     */
    Status?: RequestStatus | string;
    /**
     * <p>The date and time when the quota increase request was received and the case ID was
     *       created.</p>
     */
    Created?: Date;
    /**
     * <p>The date and time of the most recent change.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The IAM identity of the requester.</p>
     */
    Requester?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the quota.</p>
     */
    QuotaArn?: string;
    /**
     * <p>Indicates whether the quota is global.</p>
     */
    GlobalQuota?: boolean;
    /**
     * <p>The unit of measurement.</p>
     */
    Unit?: string;
}
export declare namespace RequestedServiceQuotaChange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestedServiceQuotaChange) => any;
}
export interface GetRequestedServiceQuotaChangeResponse {
    /**
     * <p>Information about the quota increase request.</p>
     */
    RequestedQuota?: RequestedServiceQuotaChange;
}
export declare namespace GetRequestedServiceQuotaChangeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRequestedServiceQuotaChangeResponse) => any;
}
export interface GetServiceQuotaRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
}
export declare namespace GetServiceQuotaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceQuotaRequest) => any;
}
export interface GetServiceQuotaResponse {
    /**
     * <p>Information about the quota.</p>
     */
    Quota?: ServiceQuota;
}
export declare namespace GetServiceQuotaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceQuotaResponse) => any;
}
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>The AWS Region.</p>
     */
    AwsRegion: string | undefined;
}
export declare namespace GetServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceQuotaIncreaseRequestFromTemplateRequest) => any;
}
/**
 * <p>Information about a quota increase request.</p>
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The service name.</p>
     */
    ServiceName?: string;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode?: string;
    /**
     * <p>The quota name.</p>
     */
    QuotaName?: string;
    /**
     * <p>The new, increased value of the quota.</p>
     */
    DesiredValue?: number;
    /**
     * <p>The AWS Region.</p>
     */
    AwsRegion?: string;
    /**
     * <p>The unit of measurement.</p>
     */
    Unit?: string;
    /**
     * <p>Indicates whether the quota is global.</p>
     */
    GlobalQuota?: boolean;
}
export declare namespace ServiceQuotaIncreaseRequestInTemplate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaIncreaseRequestInTemplate) => any;
}
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
    /**
     * <p>Information about the quota increase request.</p>
     */
    ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}
export declare namespace GetServiceQuotaIncreaseRequestFromTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceQuotaIncreaseRequestFromTemplateResponse) => any;
}
/**
 * <p>A complex data type that contains a tag key and tag value.</p>
 */
export interface Tag {
    /**
     * <p>A string that contains a tag key. The string length should be between 1 and 128
     *       characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . :
     *       / = + @.</p>
     */
    Key: string | undefined;
    /**
     * <p>A string that contains an optional tag value. The string length should be between 0 and
     *       256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ -
     *       . : / = + @.</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>Invalid input was provided.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidPaginationTokenException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidPaginationTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPaginationTokenException) => any;
}
/**
 * <p>The resource is in an invalid state.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidResourceStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceStateException) => any;
}
export interface ListAWSDefaultServiceQuotasRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAWSDefaultServiceQuotasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAWSDefaultServiceQuotasRequest) => any;
}
export interface ListAWSDefaultServiceQuotasResponse {
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the quotas.</p>
     */
    Quotas?: ServiceQuota[];
}
export declare namespace ListAWSDefaultServiceQuotasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAWSDefaultServiceQuotasResponse) => any;
}
export interface ListRequestedServiceQuotaChangeHistoryRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The status of the quota increase request.</p>
     */
    Status?: RequestStatus | string;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListRequestedServiceQuotaChangeHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRequestedServiceQuotaChangeHistoryRequest) => any;
}
export interface ListRequestedServiceQuotaChangeHistoryResponse {
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the quota increase requests.</p>
     */
    RequestedQuotas?: RequestedServiceQuotaChange[];
}
export declare namespace ListRequestedServiceQuotaChangeHistoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRequestedServiceQuotaChangeHistoryResponse) => any;
}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>The status value of the quota increase request.</p>
     */
    Status?: RequestStatus | string;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRequestedServiceQuotaChangeHistoryByQuotaRequest) => any;
}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the quota increase requests.</p>
     */
    RequestedQuotas?: RequestedServiceQuotaChange[];
}
export declare namespace ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRequestedServiceQuotaChangeHistoryByQuotaResponse) => any;
}
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The AWS Region.</p>
     */
    AwsRegion?: string;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListServiceQuotaIncreaseRequestsInTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceQuotaIncreaseRequestsInTemplateRequest) => any;
}
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
    /**
     * <p>Information about the quota increase requests.</p>
     */
    ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListServiceQuotaIncreaseRequestsInTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceQuotaIncreaseRequestsInTemplateResponse) => any;
}
export interface ListServiceQuotasRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListServiceQuotasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceQuotasRequest) => any;
}
export interface ListServiceQuotasResponse {
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the quotas.</p>
     */
    Quotas?: ServiceQuota[];
}
export declare namespace ListServiceQuotasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceQuotasResponse) => any;
}
export interface ListServicesRequest {
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining
     *       results, if any, make another call with the token returned from this call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListServicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServicesRequest) => any;
}
/**
 * <p>Information about a service.</p>
 */
export interface ServiceInfo {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode?: string;
    /**
     * <p>The service name.</p>
     */
    ServiceName?: string;
}
export declare namespace ServiceInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceInfo) => any;
}
export interface ListServicesResponse {
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are
     *       no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the services.</p>
     */
    Services?: ServiceInfo[];
}
export declare namespace ListServicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServicesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the applied quota for which you want to list tags. You
     *       can get this information by using the Service Quotas console, or by listing the quotas using the
     *         <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
     */
    ResourceARN: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>A complex data type that contains zero or more tag elements.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The AWS Region.</p>
     */
    AwsRegion: string | undefined;
    /**
     * <p>The new, increased value for the quota.</p>
     */
    DesiredValue: number | undefined;
}
export declare namespace PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutServiceQuotaIncreaseRequestIntoTemplateRequest) => any;
}
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    /**
     * <p>Information about the quota increase request.</p>
     */
    ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}
export declare namespace PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutServiceQuotaIncreaseRequestIntoTemplateResponse) => any;
}
/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export interface QuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "QuotaExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace QuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuotaExceededException) => any;
}
export interface RequestServiceQuotaIncreaseRequest {
    /**
     * <p>The service identifier.</p>
     */
    ServiceCode: string | undefined;
    /**
     * <p>The quota identifier.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>The new, increased value for the quota.</p>
     */
    DesiredValue: number | undefined;
}
export declare namespace RequestServiceQuotaIncreaseRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestServiceQuotaIncreaseRequest) => any;
}
export interface RequestServiceQuotaIncreaseResponse {
    /**
     * <p>Information about the quota increase request.</p>
     */
    RequestedQuota?: RequestedServiceQuotaChange;
}
export declare namespace RequestServiceQuotaIncreaseResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestServiceQuotaIncreaseResponse) => any;
}
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
    name: "TagPolicyViolationException";
    $fault: "client";
    Message?: string;
}
export declare namespace TagPolicyViolationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagPolicyViolationException) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the applied quota. You can get this information by
     *       using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The tags that you want to add to the resource.</p>
     */
    Tags: Tag[] | undefined;
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
/**
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *         <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *         restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
    name: "TooManyTagsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyTagsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can get
     *       this information by using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The keys of the tags that you want to remove from the resource.</p>
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
