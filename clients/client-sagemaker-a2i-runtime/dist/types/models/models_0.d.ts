import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface DeleteHumanLoopRequest {
    /**
     * <p>The name of the human loop that you want to delete.</p>
     */
    HumanLoopName: string | undefined;
}
export declare namespace DeleteHumanLoopRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteHumanLoopRequest) => any;
}
export interface DeleteHumanLoopResponse {
}
export declare namespace DeleteHumanLoopResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteHumanLoopResponse) => any;
}
/**
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
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
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
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
 * <p>You exceeded
 *       the
 *       maximum number of requests.</p>
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
/**
 * <p>The
 *       request isn't valid. Check the syntax and try again.</p>
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
export interface DescribeHumanLoopRequest {
    /**
     * <p>The name of the human loop that you want information about.</p>
     */
    HumanLoopName: string | undefined;
}
export declare namespace DescribeHumanLoopRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHumanLoopRequest) => any;
}
/**
 * <p>Information about where the human output will be stored.</p>
 */
export interface HumanLoopOutput {
    /**
     * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.</p>
     */
    OutputS3Uri: string | undefined;
}
export declare namespace HumanLoopOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HumanLoopOutput) => any;
}
export declare enum HumanLoopStatus {
    COMPLETED = "Completed",
    FAILED = "Failed",
    IN_PROGRESS = "InProgress",
    STOPPED = "Stopped",
    STOPPING = "Stopping"
}
export interface DescribeHumanLoopResponse {
    /**
     * <p>The creation time when Amazon Augmented AI created the human loop.</p>
     */
    CreationTime: Date | undefined;
    /**
     * <p>The reason why a human loop failed. The failure reason is returned when the status of the
     *       human loop is <code>Failed</code>.</p>
     */
    FailureReason?: string;
    /**
     * <p>A failure code that identifies the type of failure.</p>
     *          <p>Possible values: <code>ValidationError</code>, <code>Expired</code>,
     *         <code>InternalError</code>
     *          </p>
     */
    FailureCode?: string;
    /**
     * <p>The status of the human loop. </p>
     */
    HumanLoopStatus: HumanLoopStatus | string | undefined;
    /**
     * <p>The name of the human loop. The name must be lowercase, unique within the Region in your
     *       account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).</p>
     */
    HumanLoopName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the human loop.</p>
     */
    HumanLoopArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
     */
    FlowDefinitionArn: string | undefined;
    /**
     * <p>An object that contains information about the output of the human loop.</p>
     */
    HumanLoopOutput?: HumanLoopOutput;
}
export declare namespace DescribeHumanLoopResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHumanLoopResponse) => any;
}
export declare enum SortOrder {
    ASCENDING = "Ascending",
    DESCENDING = "Descending"
}
export interface ListHumanLoopsRequest {
    /**
     * <p>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
     */
    CreationTimeAfter?: Date;
    /**
     * <p>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
     */
    CreationTimeBefore?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of a flow definition.</p>
     */
    FlowDefinitionArn: string | undefined;
    /**
     * <p>Optional. The order for displaying results. Valid values: <code>Ascending</code> and
     *         <code>Descending</code>.</p>
     */
    SortOrder?: SortOrder | string;
    /**
     * <p>A token to display the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The total number of items to return. If the total number of available items is more than
     *       the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in
     *       the output. You can use this token to display the next page of results. </p>
     */
    MaxResults?: number;
}
export declare namespace ListHumanLoopsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHumanLoopsRequest) => any;
}
/**
 * <p>Summary information about the human loop.</p>
 */
export interface HumanLoopSummary {
    /**
     * <p>The name of the human loop.</p>
     */
    HumanLoopName?: string;
    /**
     * <p>The status of the human loop. </p>
     */
    HumanLoopStatus?: HumanLoopStatus | string;
    /**
     * <p>When Amazon Augmented AI created the human loop.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The reason why the human loop failed. A failure reason is returned when the status of the
     *       human loop is <code>Failed</code>.</p>
     */
    FailureReason?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the flow definition used to configure the human
     *       loop.</p>
     */
    FlowDefinitionArn?: string;
}
export declare namespace HumanLoopSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HumanLoopSummary) => any;
}
export interface ListHumanLoopsResponse {
    /**
     * <p>An array of objects that contain information about the human loops.</p>
     */
    HumanLoopSummaries: HumanLoopSummary[] | undefined;
    /**
     * <p>A token to display the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListHumanLoopsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHumanLoopsResponse) => any;
}
/**
 * <p>Your request has the same name as another active human loop but has different input data. You cannot start two
 *     human loops with the same name and different input data.</p>
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
/**
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your AWS account. For a list of
 *       Amazon A2I service quotes, see <a href="https://docs.aws.amazon.com/general/latest/gr/a2i.html">Amazon Augmented AI Service Quotes</a>. Delete some resources or request an increase in your
 *       service quota. You can request a quota increase using Service Quotas or the AWS Support
 *       Center. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
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
export declare enum ContentClassifier {
    FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
    FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
}
/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 */
export interface HumanLoopDataAttributes {
    /**
     * <p>Declares that your content is free of personally identifiable information or adult content.</p>
     *          <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>
     */
    ContentClassifiers: (ContentClassifier | string)[] | undefined;
}
export declare namespace HumanLoopDataAttributes {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HumanLoopDataAttributes) => any;
}
/**
 * <p>An object containing the human loop input in JSON format.</p>
 */
export interface HumanLoopInput {
    /**
     * <p>Serialized input from the human loop. The input must be a string representation of a file in JSON format.</p>
     */
    InputContent: string | undefined;
}
export declare namespace HumanLoopInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HumanLoopInput) => any;
}
export interface StartHumanLoopRequest {
    /**
     * <p>The name of the human loop.</p>
     */
    HumanLoopName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the flow definition associated with this human
     *       loop.</p>
     */
    FlowDefinitionArn: string | undefined;
    /**
     * <p>An object that contains information about the human loop.</p>
     */
    HumanLoopInput: HumanLoopInput | undefined;
    /**
     * <p>Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data
     *       is free of personally identifiable information and/or free of adult content.</p>
     */
    DataAttributes?: HumanLoopDataAttributes;
}
export declare namespace StartHumanLoopRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartHumanLoopRequest) => any;
}
export interface StartHumanLoopResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the human loop.</p>
     */
    HumanLoopArn?: string;
}
export declare namespace StartHumanLoopResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartHumanLoopResponse) => any;
}
export interface StopHumanLoopRequest {
    /**
     * <p>The name of the human loop that you want to stop.</p>
     */
    HumanLoopName: string | undefined;
}
export declare namespace StopHumanLoopRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopHumanLoopRequest) => any;
}
export interface StopHumanLoopResponse {
}
export declare namespace StopHumanLoopResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopHumanLoopResponse) => any;
}
