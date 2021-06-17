import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message?: string;
    /**
     * Resource type that caused the exception
     */
    resourceType?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface AssociateMemberAccountRequest {
    /**
     * <p>The ID of the AWS account that you want to associate with Amazon Macie Classic as a
     *       member account.</p>
     */
    memberAccountId: string | undefined;
}
export declare namespace AssociateMemberAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateMemberAccountRequest) => any;
}
/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
    name: "InternalException";
    $fault: "server";
    /**
     * Error code for the exception
     */
    errorCode?: string;
    message?: string;
}
export declare namespace InternalException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalException) => any;
}
/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter. </p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputException";
    $fault: "client";
    /**
     * Error code for the exception
     */
    errorCode?: string;
    message?: string;
    /**
     * Field that has invalid input
     */
    fieldName?: string;
}
export declare namespace InvalidInputException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidInputException) => any;
}
/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error code describes the limit exceeded. </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    /**
     * Error code for the exception
     */
    errorCode?: string;
    message?: string;
    /**
     * Resource type that caused the exception
     */
    resourceType?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
export declare enum S3ContinuousClassificationType {
    FULL = "FULL"
}
export declare enum S3OneTimeClassificationType {
    FULL = "FULL",
    NONE = "NONE"
}
/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. </p>
 */
export interface ClassificationType {
    /**
     * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
     *     </p>
     */
    oneTime: S3OneTimeClassificationType | string | undefined;
    /**
     * <p>A continuous classification of the objects that are added to a specified S3 bucket.
     *       Amazon Macie Classic begins performing continuous classification after a bucket is
     *       successfully associated with Macie Classic. </p>
     */
    continuous: S3ContinuousClassificationType | string | undefined;
}
export declare namespace ClassificationType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClassificationType) => any;
}
/**
 * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
 *       and data classification. This data type is used as a request parameter in the
 *       AssociateS3Resources action and a response parameter in the ListS3Resources action. </p>
 */
export interface S3ResourceClassification {
    /**
     * <p>The name of the S3 bucket that you want to associate with Amazon Macie
     *       Classic.</p>
     */
    bucketName: string | undefined;
    /**
     * <p>The prefix of the S3 bucket that you want to associate with Amazon Macie
     *       Classic.</p>
     */
    prefix?: string;
    /**
     * <p>The classification type that you want to specify for the resource associated with
     *       Amazon Macie Classic. </p>
     */
    classificationType: ClassificationType | undefined;
}
export declare namespace S3ResourceClassification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ResourceClassification) => any;
}
export interface AssociateS3ResourcesRequest {
    /**
     * <p>The ID of the Amazon Macie Classic member account whose resources you want to associate
     *       with Macie Classic. </p>
     */
    memberAccountId?: string;
    /**
     * <p>The S3 resources that you want to associate with Amazon Macie Classic for monitoring
     *       and data classification. </p>
     */
    s3Resources: S3ResourceClassification[] | undefined;
}
export declare namespace AssociateS3ResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateS3ResourcesRequest) => any;
}
/**
 * <p>Contains information about the S3 resource. This data type is used as a request
 *       parameter in the DisassociateS3Resources action and can be used as a response parameter in the
 *       AssociateS3Resources and UpdateS3Resources actions. </p>
 */
export interface S3Resource {
    /**
     * <p>The name of the S3 bucket.</p>
     */
    bucketName: string | undefined;
    /**
     * <p>The prefix of the S3 bucket. </p>
     */
    prefix?: string;
}
export declare namespace S3Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Resource) => any;
}
/**
 * <p>Includes details about the failed S3 resources.</p>
 */
export interface FailedS3Resource {
    /**
     * <p>The failed S3 resources.</p>
     */
    failedItem?: S3Resource;
    /**
     * <p>The status code of a failed item.</p>
     */
    errorCode?: string;
    /**
     * <p>The error message of a failed item.</p>
     */
    errorMessage?: string;
}
export declare namespace FailedS3Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedS3Resource) => any;
}
export interface AssociateS3ResourcesResult {
    /**
     * <p>S3 resources that couldn't be associated with Amazon Macie Classic. An error code and
     *       an error message are provided for each failed item. </p>
     */
    failedS3Resources?: FailedS3Resource[];
}
export declare namespace AssociateS3ResourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateS3ResourcesResult) => any;
}
/**
 * <p>The classification type that Amazon Macie Classic applies to the associated S3
 *       resources. At least one of the classification types (oneTime or continuous) must be specified.
 *     </p>
 */
export interface ClassificationTypeUpdate {
    /**
     * <p>A one-time classification of all of the existing objects in a specified S3 bucket.
     *     </p>
     */
    oneTime?: S3OneTimeClassificationType | string;
    /**
     * <p>A continuous classification of the objects that are added to a specified S3 bucket.
     *       Amazon Macie Classic begins performing continuous classification after a bucket is
     *       successfully associated with Macie Classic. </p>
     */
    continuous?: S3ContinuousClassificationType | string;
}
export declare namespace ClassificationTypeUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClassificationTypeUpdate) => any;
}
export interface DisassociateMemberAccountRequest {
    /**
     * <p>The ID of the member account that you want to remove from Amazon Macie
     *       Classic.</p>
     */
    memberAccountId: string | undefined;
}
export declare namespace DisassociateMemberAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMemberAccountRequest) => any;
}
export interface DisassociateS3ResourcesRequest {
    /**
     * <p>The ID of the Amazon Macie Classic member account whose resources you want to remove
     *       from being monitored by Macie Classic. </p>
     */
    memberAccountId?: string;
    /**
     * <p>The S3 resources (buckets or prefixes) that you want to remove from being monitored and
     *       classified by Amazon Macie Classic. </p>
     */
    associatedS3Resources: S3Resource[] | undefined;
}
export declare namespace DisassociateS3ResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateS3ResourcesRequest) => any;
}
export interface DisassociateS3ResourcesResult {
    /**
     * <p>S3 resources that couldn't be removed from being monitored and classified by Amazon
     *       Macie Classic. An error code and an error message are provided for each failed item.
     *     </p>
     */
    failedS3Resources?: FailedS3Resource[];
}
export declare namespace DisassociateS3ResourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateS3ResourcesResult) => any;
}
export interface ListMemberAccountsRequest {
    /**
     * <p>Use this parameter when paginating results. Set the value of this parameter to null on
     *       your first call to the ListMemberAccounts action. Subsequent calls to the action fill
     *       nextToken in the request with the value of nextToken from the previous response to continue
     *       listing data. </p>
     */
    nextToken?: string;
    /**
     * <p>Use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 250. </p>
     */
    maxResults?: number;
}
export declare namespace ListMemberAccountsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMemberAccountsRequest) => any;
}
/**
 * <p>Contains information about the Amazon Macie Classic member account.</p>
 */
export interface MemberAccount {
    /**
     * <p>The AWS account ID of the Amazon Macie Classic member account.</p>
     */
    accountId?: string;
}
export declare namespace MemberAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MemberAccount) => any;
}
export interface ListMemberAccountsResult {
    /**
     * <p>A list of the Amazon Macie Classic member accounts returned by the action. The current
     *       Macie Classic administrator account is also included in this list. </p>
     */
    memberAccounts?: MemberAccount[];
    /**
     * <p>When a response is generated, if there is more data to be listed, this parameter is
     *       present in the response and contains the value to use for the nextToken parameter in a
     *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
     *       null. </p>
     */
    nextToken?: string;
}
export declare namespace ListMemberAccountsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMemberAccountsResult) => any;
}
export interface ListS3ResourcesRequest {
    /**
     * <p>The Amazon Macie Classic member account ID whose associated S3 resources you want to
     *       list. </p>
     */
    memberAccountId?: string;
    /**
     * <p>Use this parameter when paginating results. Set its value to null on your first call to
     *       the ListS3Resources action. Subsequent calls to the action fill nextToken in the request with
     *       the value of nextToken from the previous response to continue listing data. </p>
     */
    nextToken?: string;
    /**
     * <p>Use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 250. </p>
     */
    maxResults?: number;
}
export declare namespace ListS3ResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListS3ResourcesRequest) => any;
}
export interface ListS3ResourcesResult {
    /**
     * <p>A list of the associated S3 resources returned by the action.</p>
     */
    s3Resources?: S3ResourceClassification[];
    /**
     * <p>When a response is generated, if there is more data to be listed, this parameter is
     *       present in the response and contains the value to use for the nextToken parameter in a
     *       subsequent pagination request. If there is no more data to be listed, this parameter is set to
     *       null. </p>
     */
    nextToken?: string;
}
export declare namespace ListS3ResourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListS3ResourcesResult) => any;
}
/**
 * <p>The S3 resources whose classification types you want to update. This data type is used
 *       as a request parameter in the UpdateS3Resources action. </p>
 */
export interface S3ResourceClassificationUpdate {
    /**
     * <p>The name of the S3 bucket whose classification types you want to update.</p>
     */
    bucketName: string | undefined;
    /**
     * <p>The prefix of the S3 bucket whose classification types you want to update.</p>
     */
    prefix?: string;
    /**
     * <p>The classification type that you want to update for the resource associated with Amazon
     *       Macie Classic. </p>
     */
    classificationTypeUpdate: ClassificationTypeUpdate | undefined;
}
export declare namespace S3ResourceClassificationUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3ResourceClassificationUpdate) => any;
}
export interface UpdateS3ResourcesRequest {
    /**
     * <p>The AWS ID of the Amazon Macie Classic member account whose S3 resources'
     *       classification types you want to update. </p>
     */
    memberAccountId?: string;
    /**
     * <p>The S3 resources whose classification types you want to update.</p>
     */
    s3ResourcesUpdate: S3ResourceClassificationUpdate[] | undefined;
}
export declare namespace UpdateS3ResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateS3ResourcesRequest) => any;
}
export interface UpdateS3ResourcesResult {
    /**
     * <p>The S3 resources whose classification types can't be updated. An error code and an
     *       error message are provided for each failed item. </p>
     */
    failedS3Resources?: FailedS3Resource[];
}
export declare namespace UpdateS3ResourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateS3ResourcesResult) => any;
}
