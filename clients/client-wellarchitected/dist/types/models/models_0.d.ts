import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>User does not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>A choice available to answer question.</p>
 */
export interface Choice {
    /**
     * <p>The ID of a choice.</p>
     */
    ChoiceId?: string;
    /**
     * <p>The title of a choice.</p>
     */
    Title?: string;
    /**
     * <p>The description of a choice.</p>
     */
    Description?: string;
}
export declare namespace Choice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Choice) => any;
}
export declare enum Risk {
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    NONE = "NONE",
    NOT_APPLICABLE = "NOT_APPLICABLE",
    UNANSWERED = "UNANSWERED"
}
/**
 * <p>An answer of the question.</p>
 */
export interface Answer {
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The title of the question.</p>
     */
    QuestionTitle?: string;
    /**
     * <p>The description of the question.</p>
     */
    QuestionDescription?: string;
    /**
     * <p>The improvement plan URL for a question.</p>
     */
    ImprovementPlanUrl?: string;
    /**
     * <p>The helpful resource URL for a question.</p>
     */
    HelpfulResourceUrl?: string;
    /**
     * <p>List of choices available for a question.</p>
     */
    Choices?: Choice[];
    /**
     * <p>List of selected choice IDs in a question answer.</p>
     *         <p>The values entered replace the previously selected choices.</p>
     */
    SelectedChoices?: string[];
    /**
     * <p>Defines whether this question is applicable to a lens review.</p>
     */
    IsApplicable?: boolean;
    /**
     * <p>The risk for a given workload, lens review, pillar, or question.</p>
     */
    Risk?: Risk | string;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
}
export declare namespace Answer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Answer) => any;
}
/**
 * <p>An answer summary of a lens review in a workload.</p>
 */
export interface AnswerSummary {
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The title of the question.</p>
     */
    QuestionTitle?: string;
    /**
     * <p>List of choices available for a question.</p>
     */
    Choices?: Choice[];
    /**
     * <p>List of selected choice IDs in a question answer.</p>
     *         <p>The values entered replace the previously selected choices.</p>
     */
    SelectedChoices?: string[];
    /**
     * <p>Defines whether this question is applicable to a lens review.</p>
     */
    IsApplicable?: boolean;
    /**
     * <p>The risk for a given workload, lens review, pillar, or question.</p>
     */
    Risk?: Risk | string;
}
export declare namespace AnswerSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AnswerSummary) => any;
}
/**
 * <p>Input to associate lens reviews.</p>
 */
export interface AssociateLensesInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>List of lens aliases to associate or disassociate with a workload.</p>
     *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAliases: string[] | undefined;
}
export declare namespace AssociateLensesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateLensesInput) => any;
}
/**
 * <p>The resource already exists.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
    /**
     * <p>Identifier of the resource affected.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>Type of the resource affected.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>There is a problem with the AWS Well-Architected Tool API service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
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
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
    /**
     * <p>Identifier of the resource affected.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>Type of the resource affected.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>Request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
    /**
     * <p>Service Quotas requirement to identify originating quota.</p>
     */
    QuotaCode?: string;
    /**
     * <p>Service Quotas requirement to identify originating service.</p>
     */
    ServiceCode?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
    /**
     * <p>The field name for which validation failed.</p>
     */
    Name: string | undefined;
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
    CANNOT_PARSE = "CANNOT_PARSE",
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
    OTHER = "OTHER",
    UNKNOWN_OPERATION = "UNKNOWN_OPERATION"
}
/**
 * <p>The user input is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
    /**
     * <p>The reason why the request failed validation.</p>
     */
    Reason?: ValidationExceptionReason | string;
    /**
     * <p>The fields that caused the error, if applicable.</p>
     */
    Fields?: ValidationExceptionField[];
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>Input for milestone creation.</p>
 */
export interface CreateMilestoneInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The name of the milestone in a workload.</p>
     *         <p>Milestone names must be unique within a workload.</p>
     */
    MilestoneName: string | undefined;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateMilestoneInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMilestoneInput) => any;
}
/**
 * <p>Output of a create milestone call.</p>
 */
export interface CreateMilestoneOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
}
export declare namespace CreateMilestoneOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMilestoneOutput) => any;
}
/**
 * <p>The user has reached their resource quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    /**
     * <p>Description of the error.</p>
     */
    Message: string | undefined;
    /**
     * <p>Identifier of the resource affected.</p>
     */
    ResourceId?: string;
    /**
     * <p>Type of the resource affected.</p>
     */
    ResourceType?: string;
    /**
     * <p>Service Quotas requirement to identify originating quota.</p>
     */
    QuotaCode: string | undefined;
    /**
     * <p>Service Quotas requirement to identify originating service.</p>
     */
    ServiceCode: string | undefined;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export declare enum WorkloadEnvironment {
    PREPRODUCTION = "PREPRODUCTION",
    PRODUCTION = "PRODUCTION"
}
/**
 * <p>Input for workload creation.</p>
 */
export interface CreateWorkloadInput {
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName: string | undefined;
    /**
     * <p>The description for the workload.</p>
     */
    Description: string | undefined;
    /**
     * <p>The environment for the workload.</p>
     */
    Environment: WorkloadEnvironment | string | undefined;
    /**
     * <p>The list of AWS account IDs associated with the workload.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The list of AWS Regions associated with the workload, for example,
     *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
     */
    AwsRegions?: string[];
    /**
     * <p> The list of non-AWS Regions associated with the workload.</p>
     */
    NonAwsRegions?: string[];
    /**
     * <p>The priorities of the pillars, which are used to order items in the improvement plan.
     *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarPriorities?: string[];
    /**
     * <p>The URL of the architectural design for the workload.</p>
     */
    ArchitecturalDesign?: string;
    /**
     * <p>The review owner of the workload. The name, email address, or identifier for the
     *             primary group or individual that owns the workload review process.</p>
     */
    ReviewOwner: string | undefined;
    /**
     * <p>The industry type for the workload.</p>
     *         <p>If specified, must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Agriculture</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Automobile</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Defense</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Design and Engineering</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Digital Advertising</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Education</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Environmental Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Financial Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Gaming</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>General Public Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Healthcare</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Hospitality</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>InfoTech</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Justice and Public Safety</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Life Sciences</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Manufacturing</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Media & Entertainment</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Mining & Resources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Oil & Gas</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Power & Utilities</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Professional Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Real Estate & Construction</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Retail & Wholesale</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Social Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Telecommunications</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Travel, Transportation & Logistics</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Other</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    IndustryType?: string;
    /**
     * <p>The industry for the workload.</p>
     */
    Industry?: string;
    /**
     * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    Lenses: string[] | undefined;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
    /**
     * <p>The tags to be associated with the workload.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateWorkloadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkloadInput) => any;
}
/**
 * <p>Output of a create workload call.</p>
 */
export interface CreateWorkloadOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn?: string;
}
export declare namespace CreateWorkloadOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkloadOutput) => any;
}
export declare enum PermissionType {
    CONTRIBUTOR = "CONTRIBUTOR",
    READONLY = "READONLY"
}
/**
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The AWS account ID or IAM role with which the workload is shared.</p>
     */
    SharedWith: string | undefined;
    /**
     * <p>Permission granted on a workload share.</p>
     */
    PermissionType: PermissionType | string | undefined;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateWorkloadShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkloadShareInput) => any;
}
/**
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The ID associated with the workload share.</p>
     */
    ShareId?: string;
}
export declare namespace CreateWorkloadShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkloadShareOutput) => any;
}
/**
 * <p>Input for workload deletion.</p>
 */
export interface DeleteWorkloadInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
}
export declare namespace DeleteWorkloadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkloadInput) => any;
}
/**
 * <p>Input for Delete Workload Share</p>
 */
export interface DeleteWorkloadShareInput {
    /**
     * <p>The ID associated with the workload share.</p>
     */
    ShareId: string | undefined;
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
}
export declare namespace DeleteWorkloadShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkloadShareInput) => any;
}
export declare enum DifferenceStatus {
    DELETED = "DELETED",
    NEW = "NEW",
    UPDATED = "UPDATED"
}
/**
 * <p>Input to disassociate lens reviews.</p>
 */
export interface DisassociateLensesInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>List of lens aliases to associate or disassociate with a workload.</p>
     *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAliases: string[] | undefined;
}
export declare namespace DisassociateLensesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateLensesInput) => any;
}
/**
 * <p>Input to get answer.</p>
 */
export interface GetAnswerInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId: string | undefined;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
}
export declare namespace GetAnswerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAnswerInput) => any;
}
/**
 * <p>Output of a get answer call.</p>
 */
export interface GetAnswerOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>An answer of the question.</p>
     */
    Answer?: Answer;
}
export declare namespace GetAnswerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAnswerOutput) => any;
}
/**
 * <p>Input to get lens review.</p>
 */
export interface GetLensReviewInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
}
export declare namespace GetLensReviewInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensReviewInput) => any;
}
export declare enum LensStatus {
    CURRENT = "CURRENT",
    DEPRECATED = "DEPRECATED",
    NOT_CURRENT = "NOT_CURRENT"
}
/**
 * <p>A pillar review summary of a lens review.</p>
 */
export interface PillarReviewSummary {
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The name of the pillar.</p>
     */
    PillarName?: string;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>A map from risk names to the count of how questions have that rating.</p>
     */
    RiskCounts?: {
        [key: string]: number;
    };
}
export declare namespace PillarReviewSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PillarReviewSummary) => any;
}
/**
 * <p>A lens review of a question.</p>
 */
export interface LensReview {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The version of the lens.</p>
     */
    LensVersion?: string;
    /**
     * <p>The full name of the lens.</p>
     */
    LensName?: string;
    /**
     * <p>The status of the lens.</p>
     */
    LensStatus?: LensStatus | string;
    /**
     * <p>List of pillar review summaries of lens review in a workload.</p>
     */
    PillarReviewSummaries?: PillarReviewSummary[];
    /**
     * <p>The date and time recorded.</p>
     */
    UpdatedAt?: Date;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>A map from risk names to the count of how questions have that rating.</p>
     */
    RiskCounts?: {
        [key: string]: number;
    };
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace LensReview {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LensReview) => any;
}
/**
 * <p>Output of a get lens review call.</p>
 */
export interface GetLensReviewOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>A lens review of a question.</p>
     */
    LensReview?: LensReview;
}
export declare namespace GetLensReviewOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensReviewOutput) => any;
}
/**
 * <p>Input to get lens review report.</p>
 */
export interface GetLensReviewReportInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
}
export declare namespace GetLensReviewReportInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensReviewReportInput) => any;
}
/**
 * <p>A report of a lens review.</p>
 */
export interface LensReviewReport {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The Base64-encoded string representation of a lens review report.</p>
     *         <p>This data can be used to create a PDF file.</p>
     */
    Base64String?: string;
}
export declare namespace LensReviewReport {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LensReviewReport) => any;
}
/**
 * <p>Output of a get lens review report call.</p>
 */
export interface GetLensReviewReportOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>A report of a lens review.</p>
     */
    LensReviewReport?: LensReviewReport;
}
export declare namespace GetLensReviewReportOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensReviewReportOutput) => any;
}
export interface GetLensVersionDifferenceInput {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The base version of the lens.</p>
     */
    BaseLensVersion: string | undefined;
}
export declare namespace GetLensVersionDifferenceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensVersionDifferenceInput) => any;
}
/**
 * <p>A question difference return object.</p>
 */
export interface QuestionDifference {
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId?: string;
    /**
     * <p>The title of the question.</p>
     */
    QuestionTitle?: string;
    /**
     * <p>Indicates the type of change to the question.</p>
     */
    DifferenceStatus?: DifferenceStatus | string;
}
export declare namespace QuestionDifference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: QuestionDifference) => any;
}
/**
 * <p>A pillar difference return object.</p>
 */
export interface PillarDifference {
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>Indicates the type of change to the pillar.</p>
     */
    DifferenceStatus?: DifferenceStatus | string;
    /**
     * <p>List of question differences.</p>
     */
    QuestionDifferences?: QuestionDifference[];
}
export declare namespace PillarDifference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PillarDifference) => any;
}
/**
 * <p>The differences between the base and latest versions of the lens.</p>
 */
export interface VersionDifferences {
    /**
     * <p>The differences between the base and latest versions of the lens.</p>
     */
    PillarDifferences?: PillarDifference[];
}
export declare namespace VersionDifferences {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VersionDifferences) => any;
}
export interface GetLensVersionDifferenceOutput {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The base version of the lens.</p>
     */
    BaseLensVersion?: string;
    /**
     * <p>The latest version of the lens.</p>
     */
    LatestLensVersion?: string;
    /**
     * <p>The differences between the base and latest versions of the lens.</p>
     */
    VersionDifferences?: VersionDifferences;
}
export declare namespace GetLensVersionDifferenceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLensVersionDifferenceOutput) => any;
}
/**
 * <p>Input to get a milestone.</p>
 */
export interface GetMilestoneInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber: number | undefined;
}
export declare namespace GetMilestoneInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMilestoneInput) => any;
}
export declare enum WorkloadImprovementStatus {
    COMPLETE = "COMPLETE",
    IN_PROGRESS = "IN_PROGRESS",
    NOT_APPLICABLE = "NOT_APPLICABLE",
    NOT_STARTED = "NOT_STARTED",
    RISK_ACKNOWLEDGED = "RISK_ACKNOWLEDGED"
}
/**
 * <p>A workload return object.</p>
 */
export interface Workload {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn?: string;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>The description for the workload.</p>
     */
    Description?: string;
    /**
     * <p>The environment for the workload.</p>
     */
    Environment?: WorkloadEnvironment | string;
    /**
     * <p>The date and time recorded.</p>
     */
    UpdatedAt?: Date;
    /**
     * <p>The list of AWS account IDs associated with the workload.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The list of AWS Regions associated with the workload, for example,
     *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
     */
    AwsRegions?: string[];
    /**
     * <p> The list of non-AWS Regions associated with the workload.</p>
     */
    NonAwsRegions?: string[];
    /**
     * <p>The URL of the architectural design for the workload.</p>
     */
    ArchitecturalDesign?: string;
    /**
     * <p>The review owner of the workload. The name, email address, or identifier for the
     *             primary group or individual that owns the workload review process.</p>
     */
    ReviewOwner?: string;
    /**
     * <p>The date and time recorded.</p>
     */
    ReviewRestrictionDate?: Date;
    /**
     * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
     *                 owner</i> field is required.</p>
     *         <p>If a <b>Review owner</b> is not added to the workload within
     *             60 days of acknowledgement, access to the workload is restricted until an owner is
     *             added.</p>
     */
    IsReviewOwnerUpdateAcknowledged?: boolean;
    /**
     * <p>The industry type for the workload.</p>
     *         <p>If specified, must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Agriculture</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Automobile</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Defense</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Design and Engineering</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Digital Advertising</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Education</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Environmental Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Financial Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Gaming</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>General Public Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Healthcare</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Hospitality</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>InfoTech</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Justice and Public Safety</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Life Sciences</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Manufacturing</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Media & Entertainment</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Mining & Resources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Oil & Gas</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Power & Utilities</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Professional Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Real Estate & Construction</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Retail & Wholesale</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Social Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Telecommunications</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Travel, Transportation & Logistics</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Other</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    IndustryType?: string;
    /**
     * <p>The industry for the workload.</p>
     */
    Industry?: string;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>The improvement status for a workload.</p>
     */
    ImprovementStatus?: WorkloadImprovementStatus | string;
    /**
     * <p>A map from risk names to the count of how questions have that rating.</p>
     */
    RiskCounts?: {
        [key: string]: number;
    };
    /**
     * <p>The priorities of the pillars, which are used to order items in the improvement plan.
     *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarPriorities?: string[];
    /**
     * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    Lenses?: string[];
    /**
     * <p>An AWS account ID.</p>
     */
    Owner?: string;
    /**
     * <p>The ID assigned to the share invitation.</p>
     */
    ShareInvitationId?: string;
    /**
     * <p>The tags associated with the workload.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace Workload {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Workload) => any;
}
/**
 * <p>A milestone return object.</p>
 */
export interface Milestone {
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The name of the milestone in a workload.</p>
     *         <p>Milestone names must be unique within a workload.</p>
     */
    MilestoneName?: string;
    /**
     * <p>The date and time recorded.</p>
     */
    RecordedAt?: Date;
    /**
     * <p>A workload return object.</p>
     */
    Workload?: Workload;
}
export declare namespace Milestone {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Milestone) => any;
}
/**
 * <p>Output of a get milestone call.</p>
 */
export interface GetMilestoneOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>A milestone return object.</p>
     */
    Milestone?: Milestone;
}
export declare namespace GetMilestoneOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMilestoneOutput) => any;
}
/**
 * <p>Input to get a workload.</p>
 */
export interface GetWorkloadInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
}
export declare namespace GetWorkloadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWorkloadInput) => any;
}
/**
 * <p>Output of a get workload call.</p>
 */
export interface GetWorkloadOutput {
    /**
     * <p>A workload return object.</p>
     */
    Workload?: Workload;
}
export declare namespace GetWorkloadOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetWorkloadOutput) => any;
}
/**
 * <p>An improvement summary of a lens review in a workload.</p>
 */
export interface ImprovementSummary {
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The title of the question.</p>
     */
    QuestionTitle?: string;
    /**
     * <p>The risk for a given workload, lens review, pillar, or question.</p>
     */
    Risk?: Risk | string;
    /**
     * <p>The improvement plan URL for a question.</p>
     */
    ImprovementPlanUrl?: string;
}
export declare namespace ImprovementSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImprovementSummary) => any;
}
/**
 * <p>A lens review summary of a workload.</p>
 */
export interface LensReviewSummary {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The version of the lens.</p>
     */
    LensVersion?: string;
    /**
     * <p>The full name of the lens.</p>
     */
    LensName?: string;
    /**
     * <p>The status of the lens.</p>
     */
    LensStatus?: LensStatus | string;
    /**
     * <p>The date and time recorded.</p>
     */
    UpdatedAt?: Date;
    /**
     * <p>A map from risk names to the count of how questions have that rating.</p>
     */
    RiskCounts?: {
        [key: string]: number;
    };
}
export declare namespace LensReviewSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LensReviewSummary) => any;
}
/**
 * <p>A lens summary of a lens.</p>
 */
export interface LensSummary {
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The version of the lens.</p>
     */
    LensVersion?: string;
    /**
     * <p>The full name of the lens.</p>
     */
    LensName?: string;
    /**
     * <p>The description of the lens.</p>
     */
    Description?: string;
}
export declare namespace LensSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LensSummary) => any;
}
/**
 * <p>Lens upgrade summary return object.</p>
 */
export interface LensUpgradeSummary {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>The current version of the lens.</p>
     */
    CurrentLensVersion?: string;
    /**
     * <p>The latest version of the lens.</p>
     */
    LatestLensVersion?: string;
}
export declare namespace LensUpgradeSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LensUpgradeSummary) => any;
}
/**
 * <p>Input to list answers.</p>
 */
export interface ListAnswersInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAnswersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAnswersInput) => any;
}
/**
 * <p>Output of a list answers call.</p>
 */
export interface ListAnswersOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>List of answer summaries of lens review in a workload.</p>
     */
    AnswerSummaries?: AnswerSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListAnswersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAnswersOutput) => any;
}
/**
 * <p>Input to list lenses.</p>
 */
export interface ListLensesInput {
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLensesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensesInput) => any;
}
/**
 * <p>Output of a list lenses call.</p>
 */
export interface ListLensesOutput {
    /**
     * <p>List of lens summaries of available lenses.</p>
     */
    LensSummaries?: LensSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLensesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensesOutput) => any;
}
/**
 * <p>Input to list lens review improvements.</p>
 */
export interface ListLensReviewImprovementsInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
     *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLensReviewImprovementsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensReviewImprovementsInput) => any;
}
/**
 * <p>Output of a list lens review improvements call.</p>
 */
export interface ListLensReviewImprovementsOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>List of improvement summaries of lens review in a workload.</p>
     */
    ImprovementSummaries?: ImprovementSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLensReviewImprovementsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensReviewImprovementsOutput) => any;
}
/**
 * <p>Input to list lens reviews.</p>
 */
export interface ListLensReviewsInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListLensReviewsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensReviewsInput) => any;
}
/**
 * <p>Output of a list lens reviews call.</p>
 */
export interface ListLensReviewsOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>List of lens summaries of lens reviews of a workload.</p>
     */
    LensReviewSummaries?: LensReviewSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListLensReviewsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLensReviewsOutput) => any;
}
/**
 * <p>Input to list all milestones for a workload.</p>
 */
export interface ListMilestonesInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListMilestonesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMilestonesInput) => any;
}
/**
 * <p>A workload summary return object.</p>
 */
export interface WorkloadSummary {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn?: string;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>An AWS account ID.</p>
     */
    Owner?: string;
    /**
     * <p>The date and time recorded.</p>
     */
    UpdatedAt?: Date;
    /**
     * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    Lenses?: string[];
    /**
     * <p>A map from risk names to the count of how questions have that rating.</p>
     */
    RiskCounts?: {
        [key: string]: number;
    };
    /**
     * <p>The improvement status for a workload.</p>
     */
    ImprovementStatus?: WorkloadImprovementStatus | string;
}
export declare namespace WorkloadSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkloadSummary) => any;
}
/**
 * <p>A milestone summary return object.</p>
 */
export interface MilestoneSummary {
    /**
     * <p>The milestone number.</p>
     *         <p>A workload can have a maximum of 100 milestones.</p>
     */
    MilestoneNumber?: number;
    /**
     * <p>The name of the milestone in a workload.</p>
     *         <p>Milestone names must be unique within a workload.</p>
     */
    MilestoneName?: string;
    /**
     * <p>The date and time recorded.</p>
     */
    RecordedAt?: Date;
    /**
     * <p>A workload summary return object.</p>
     */
    WorkloadSummary?: WorkloadSummary;
}
export declare namespace MilestoneSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MilestoneSummary) => any;
}
/**
 * <p>Output of a list milestones call.</p>
 */
export interface ListMilestonesOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>A list of milestone summaries.</p>
     */
    MilestoneSummaries?: MilestoneSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListMilestonesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMilestonesOutput) => any;
}
export interface ListNotificationsInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListNotificationsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNotificationsInput) => any;
}
export declare enum NotificationType {
    LENS_VERSION_DEPRECATED = "LENS_VERSION_DEPRECATED",
    LENS_VERSION_UPGRADED = "LENS_VERSION_UPGRADED"
}
/**
 * <p>A notification summary return object.</p>
 */
export interface NotificationSummary {
    /**
     * <p>The type of notification.</p>
     */
    Type?: NotificationType | string;
    /**
     * <p>Summary of lens upgrade.</p>
     */
    LensUpgradeSummary?: LensUpgradeSummary;
}
export declare namespace NotificationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotificationSummary) => any;
}
export interface ListNotificationsOutput {
    /**
     * <p>List of lens notification summaries in a workload.</p>
     */
    NotificationSummaries?: NotificationSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListNotificationsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNotificationsOutput) => any;
}
/**
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsInput {
    /**
     * <p>An optional string added to the beginning of each workload name returned in the
     *             results.</p>
     */
    WorkloadNamePrefix?: string;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListShareInvitationsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListShareInvitationsInput) => any;
}
/**
 * <p>A share invitation summary return object.</p>
 */
export interface ShareInvitationSummary {
    /**
     * <p>The ID assigned to the share invitation.</p>
     */
    ShareInvitationId?: string;
    /**
     * <p>An AWS account ID.</p>
     */
    SharedBy?: string;
    /**
     * <p>The AWS account ID or IAM role with which the workload is shared.</p>
     */
    SharedWith?: string;
    /**
     * <p>Permission granted on a workload share.</p>
     */
    PermissionType?: PermissionType | string;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
}
export declare namespace ShareInvitationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareInvitationSummary) => any;
}
/**
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsOutput {
    /**
     * <p>List of share invitation summaries in a workload.</p>
     */
    ShareInvitationSummaries?: ShareInvitationSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListShareInvitationsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListShareInvitationsOutput) => any;
}
export interface ListTagsForResourceInput {
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn: string | undefined;
}
export declare namespace ListTagsForResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceInput) => any;
}
export interface ListTagsForResourceOutput {
    /**
     * <p>The tags for the resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceOutput) => any;
}
/**
 * <p>Input to list all workloads.</p>
 */
export interface ListWorkloadsInput {
    /**
     * <p>An optional string added to the beginning of each workload name returned in the
     *             results.</p>
     */
    WorkloadNamePrefix?: string;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListWorkloadsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWorkloadsInput) => any;
}
/**
 * <p>Output of a list workloads call.</p>
 */
export interface ListWorkloadsOutput {
    /**
     * <p>A list of workload summaries.</p>
     */
    WorkloadSummaries?: WorkloadSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListWorkloadsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWorkloadsOutput) => any;
}
/**
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The AWS account ID or IAM role with which the workload is shared.</p>
     */
    SharedWithPrefix?: string;
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for this request.</p>
     */
    MaxResults?: number;
}
export declare namespace ListWorkloadSharesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWorkloadSharesInput) => any;
}
export declare enum ShareStatus {
    ACCEPTED = "ACCEPTED",
    EXPIRED = "EXPIRED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    REVOKED = "REVOKED"
}
/**
 * <p>A workload share summary return object.</p>
 */
export interface WorkloadShareSummary {
    /**
     * <p>The ID associated with the workload share.</p>
     */
    ShareId?: string;
    /**
     * <p>The AWS account ID or IAM role with which the workload is shared.</p>
     */
    SharedWith?: string;
    /**
     * <p>Permission granted on a workload share.</p>
     */
    PermissionType?: PermissionType | string;
    /**
     * <p>The status of a workload share.</p>
     */
    Status?: ShareStatus | string;
}
export declare namespace WorkloadShareSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkloadShareSummary) => any;
}
/**
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>A list of workload share summaries.</p>
     */
    WorkloadShareSummaries?: WorkloadShareSummary[];
    /**
     * <p>The token to use to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListWorkloadSharesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWorkloadSharesOutput) => any;
}
/**
 * <p>The share invitation.</p>
 */
export interface ShareInvitation {
    /**
     * <p>The ID assigned to the share invitation.</p>
     */
    ShareInvitationId?: string;
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
}
export declare namespace ShareInvitation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareInvitation) => any;
}
export declare enum ShareInvitationAction {
    ACCEPT = "ACCEPT",
    REJECT = "REJECT"
}
export interface TagResourceInput {
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn: string | undefined;
    /**
     * <p>The tags for the resource.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceInput) => any;
}
export interface TagResourceOutput {
}
export declare namespace TagResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceOutput) => any;
}
export interface UntagResourceInput {
    /**
     * <p>The ARN for the workload.</p>
     */
    WorkloadArn: string | undefined;
    /**
     * <p>The keys of the tags to be removed.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceInput) => any;
}
export interface UntagResourceOutput {
}
export declare namespace UntagResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceOutput) => any;
}
/**
 * <p>Input to update answer.</p>
 */
export interface UpdateAnswerInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The ID of the question.</p>
     */
    QuestionId: string | undefined;
    /**
     * <p>List of selected choice IDs in a question answer.</p>
     *         <p>The values entered replace the previously selected choices.</p>
     */
    SelectedChoices?: string[];
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>Defines whether this question is applicable to a lens review.</p>
     */
    IsApplicable?: boolean;
}
export declare namespace UpdateAnswerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAnswerInput) => any;
}
/**
 * <p>Output of a update answer call.</p>
 */
export interface UpdateAnswerOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias?: string;
    /**
     * <p>An answer of the question.</p>
     */
    Answer?: Answer;
}
export declare namespace UpdateAnswerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAnswerOutput) => any;
}
/**
 * <p>Input for update lens review.</p>
 */
export interface UpdateLensReviewInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The notes associated with the workload.</p>
     */
    LensNotes?: string;
    /**
     * <p>List of pillar notes of a lens review in a workload.</p>
     */
    PillarNotes?: {
        [key: string]: string;
    };
}
export declare namespace UpdateLensReviewInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLensReviewInput) => any;
}
/**
 * <p>Output of a update lens review call.</p>
 */
export interface UpdateLensReviewOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>A lens review of a question.</p>
     */
    LensReview?: LensReview;
}
export declare namespace UpdateLensReviewOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLensReviewOutput) => any;
}
/**
 * <p>Input for Update Share Invitation</p>
 */
export interface UpdateShareInvitationInput {
    /**
     * <p>The ID assigned to the share invitation.</p>
     */
    ShareInvitationId: string | undefined;
    /**
     * <p>Share invitation action taken by contributor.</p>
     */
    ShareInvitationAction: ShareInvitationAction | string | undefined;
}
export declare namespace UpdateShareInvitationInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateShareInvitationInput) => any;
}
export interface UpdateShareInvitationOutput {
    /**
     * <p>The updated workload share invitation.</p>
     */
    ShareInvitation?: ShareInvitation;
}
export declare namespace UpdateShareInvitationOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateShareInvitationOutput) => any;
}
/**
 * <p>Input to update a workload.</p>
 */
export interface UpdateWorkloadInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>The description for the workload.</p>
     */
    Description?: string;
    /**
     * <p>The environment for the workload.</p>
     */
    Environment?: WorkloadEnvironment | string;
    /**
     * <p>The list of AWS account IDs associated with the workload.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The list of AWS Regions associated with the workload, for example,
     *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
     */
    AwsRegions?: string[];
    /**
     * <p> The list of non-AWS Regions associated with the workload.</p>
     */
    NonAwsRegions?: string[];
    /**
     * <p>The priorities of the pillars, which are used to order items in the improvement plan.
     *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    PillarPriorities?: string[];
    /**
     * <p>The URL of the architectural design for the workload.</p>
     */
    ArchitecturalDesign?: string;
    /**
     * <p>The review owner of the workload. The name, email address, or identifier for the
     *             primary group or individual that owns the workload review process.</p>
     */
    ReviewOwner?: string;
    /**
     * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
     *                 owner</i> field is required.</p>
     *         <p>If a <b>Review owner</b> is not added to the workload within
     *             60 days of acknowledgement, access to the workload is restricted until an owner is
     *             added.</p>
     */
    IsReviewOwnerUpdateAcknowledged?: boolean;
    /**
     * <p>The industry type for the workload.</p>
     *         <p>If specified, must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Agriculture</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Automobile</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Defense</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Design and Engineering</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Digital Advertising</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Education</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Environmental Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Financial Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Gaming</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>General Public Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Healthcare</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Hospitality</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>InfoTech</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Justice and Public Safety</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Life Sciences</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Manufacturing</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Media & Entertainment</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Mining & Resources</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Oil & Gas</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Power & Utilities</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Professional Services</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Real Estate & Construction</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Retail & Wholesale</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Social Protection</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Telecommunications</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Travel, Transportation & Logistics</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Other</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    IndustryType?: string;
    /**
     * <p>The industry for the workload.</p>
     */
    Industry?: string;
    /**
     * <p>The notes associated with the workload.</p>
     */
    Notes?: string;
    /**
     * <p>The improvement status for a workload.</p>
     */
    ImprovementStatus?: WorkloadImprovementStatus | string;
}
export declare namespace UpdateWorkloadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkloadInput) => any;
}
/**
 * <p>Output of an update workload call.</p>
 */
export interface UpdateWorkloadOutput {
    /**
     * <p>A workload return object.</p>
     */
    Workload?: Workload;
}
export declare namespace UpdateWorkloadOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkloadOutput) => any;
}
/**
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareInput {
    /**
     * <p>The ID associated with the workload share.</p>
     */
    ShareId: string | undefined;
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>Permission granted on a workload share.</p>
     */
    PermissionType: PermissionType | string | undefined;
}
export declare namespace UpdateWorkloadShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkloadShareInput) => any;
}
/**
 * <p>A workload share return object.</p>
 */
export interface WorkloadShare {
    /**
     * <p>The ID associated with the workload share.</p>
     */
    ShareId?: string;
    /**
     * <p>An AWS account ID.</p>
     */
    SharedBy?: string;
    /**
     * <p>The AWS account ID or IAM role with which the workload is shared.</p>
     */
    SharedWith?: string;
    /**
     * <p>Permission granted on a workload share.</p>
     */
    PermissionType?: PermissionType | string;
    /**
     * <p>The status of a workload share.</p>
     */
    Status?: ShareStatus | string;
    /**
     * <p>The name of the workload.</p>
     *         <p>The name must be unique within an account within a Region. Spaces and capitalization
     *             are ignored when checking for uniqueness.</p>
     */
    WorkloadName?: string;
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
}
export declare namespace WorkloadShare {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkloadShare) => any;
}
/**
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareOutput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId?: string;
    /**
     * <p>A workload share return object.</p>
     */
    WorkloadShare?: WorkloadShare;
}
export declare namespace UpdateWorkloadShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkloadShareOutput) => any;
}
export interface UpgradeLensReviewInput {
    /**
     * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
     */
    WorkloadId: string | undefined;
    /**
     * <p>The alias of the lens, for example, <code>serverless</code>.</p>
     *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    LensAlias: string | undefined;
    /**
     * <p>The name of the milestone in a workload.</p>
     *         <p>Milestone names must be unique within a workload.</p>
     */
    MilestoneName: string | undefined;
    /**
     * <p>A unique case-sensitive string used to ensure that this request is idempotent
     *             (executes only once).</p>
     *         <p>You should not reuse the same token for other requests. If you retry a request with
     *             the same client request token and the same parameters after it has completed
     *             successfully, the result of the original request is returned. </p>
     *         <important>
     *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
     *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
     *                 you must provide this token or the request will fail.</p>
     *         </important>
     */
    ClientRequestToken?: string;
}
export declare namespace UpgradeLensReviewInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpgradeLensReviewInput) => any;
}
