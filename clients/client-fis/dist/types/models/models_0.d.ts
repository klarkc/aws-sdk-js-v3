import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Describes a parameter for an action.</p>
 */
export interface ActionParameter {
    /**
     * <p>The parameter description.</p>
     */
    description?: string;
    /**
     * <p>Indicates whether the parameter is required.</p>
     */
    required?: boolean;
}
export declare namespace ActionParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActionParameter) => any;
}
/**
 * <p>Describes a target for an action.</p>
 */
export interface ActionTarget {
    /**
     * <p>The resource type of the target.</p>
     */
    resourceType?: string;
}
export declare namespace ActionTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActionTarget) => any;
}
/**
 * <p>Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">AWS FIS actions</a>
 *          in the <i>AWS Fault Injection Simulator User Guide</i>.</p>
 */
export interface Action {
    /**
     * <p>The ID of the action.</p>
     */
    id?: string;
    /**
     * <p>The description for the action.</p>
     */
    description?: string;
    /**
     * <p>The action parameters, if applicable.</p>
     */
    parameters?: {
        [key: string]: ActionParameter;
    };
    /**
     * <p>The supported targets for the action.</p>
     */
    targets?: {
        [key: string]: ActionTarget;
    };
    /**
     * <p>The tags for the action.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Action {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Action) => any;
}
/**
 * <p>Provides a summary of an action.</p>
 */
export interface ActionSummary {
    /**
     * <p>The ID of the action.</p>
     */
    id?: string;
    /**
     * <p>The description for the action.</p>
     */
    description?: string;
    /**
     * <p>The targets for the action.</p>
     */
    targets?: {
        [key: string]: ActionTarget;
    };
    /**
     * <p>The tags for the action.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ActionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActionSummary) => any;
}
/**
 * <p>The request could not be processed because of a conflict.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>Specifies an action for an experiment template.</p>
 */
export interface CreateExperimentTemplateActionInput {
    /**
     * <p>The ID of the action.</p>
     */
    actionId: string | undefined;
    /**
     * <p>A description for the action.</p>
     */
    description?: string;
    /**
     * <p>The parameters for the action, if applicable.</p>
     */
    parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The targets for the action.</p>
     */
    targets?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
     */
    startAfter?: string[];
}
export declare namespace CreateExperimentTemplateActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateExperimentTemplateActionInput) => any;
}
/**
 * <p>Specifies a stop condition for an experiment template.</p>
 */
export interface CreateExperimentTemplateStopConditionInput {
    /**
     * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
     *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
     *          condition.</p>
     */
    source: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is
     *          a CloudWatch alarm.</p>
     */
    value?: string;
}
export declare namespace CreateExperimentTemplateStopConditionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateExperimentTemplateStopConditionInput) => any;
}
/**
 * <p>Describes a filter used for the target resource input in an experiment template.</p>
 */
export interface ExperimentTemplateTargetInputFilter {
    /**
     * <p>The attribute path for the filter.</p>
     */
    path: string | undefined;
    /**
     * <p>The attribute values for the filter.</p>
     */
    values: string[] | undefined;
}
export declare namespace ExperimentTemplateTargetInputFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateTargetInputFilter) => any;
}
/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or
 *          at least one resource tag. You cannot specify both ARNs and tags.</p>
 */
export interface CreateExperimentTemplateTargetInput {
    /**
     * <p>The AWS resource type. The resource type must be supported for the specified action.</p>
     */
    resourceType: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The tags for the target resources.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The filters to apply to identify target resources using specific attributes.</p>
     */
    filters?: ExperimentTemplateTargetInputFilter[];
    /**
     * <p>Scopes the identified resources to a specific count of the resources at random, or a percentage of the resources. All identified resources are included in the target.</p>
     *          <ul>
     *             <li>
     *                <p>ALL - Run the action on all identified targets. This is the default.</p>
     *             </li>
     *             <li>
     *                <p>COUNT(n) - Run the action on the specified number of targets, chosen from the identified targets at random.
     *                 For example, COUNT(1) selects one of the targets.</p>
     *             </li>
     *             <li>
     *                <p>PERCENT(n) - Run the action on the specified percentage of targets, chosen from the identified targets
     *                at random. For example, PERCENT(25) selects 25% of the targets.</p>
     *             </li>
     *          </ul>
     */
    selectionMode: string | undefined;
}
export declare namespace CreateExperimentTemplateTargetInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateExperimentTemplateTargetInput) => any;
}
export interface CreateExperimentTemplateRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
    /**
     * <p>A description for the experiment template. Can contain up to 64 letters (A-Z and a-z).</p>
     */
    description: string | undefined;
    /**
     * <p>The stop conditions.</p>
     */
    stopConditions: CreateExperimentTemplateStopConditionInput[] | undefined;
    /**
     * <p>The targets for the experiment.</p>
     */
    targets?: {
        [key: string]: CreateExperimentTemplateTargetInput;
    };
    /**
     * <p>The actions for the experiment.</p>
     */
    actions: {
        [key: string]: CreateExperimentTemplateActionInput;
    } | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.</p>
     */
    roleArn: string | undefined;
    /**
     * <p>The tags to apply to the experiment template.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateExperimentTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateExperimentTemplateRequest) => any;
}
/**
 * <p>Describes an action for an experiment template.</p>
 */
export interface ExperimentTemplateAction {
    /**
     * <p>The ID of the action.</p>
     */
    actionId?: string;
    /**
     * <p>A description for the action.</p>
     */
    description?: string;
    /**
     * <p>The parameters for the action.</p>
     */
    parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The targets for the action.</p>
     */
    targets?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the action that must be completed before the current action starts.</p>
     */
    startAfter?: string[];
}
export declare namespace ExperimentTemplateAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateAction) => any;
}
/**
 * <p>Describes a stop condition for an experiment template.</p>
 */
export interface ExperimentTemplateStopCondition {
    /**
     * <p>The source for the stop condition.</p>
     */
    source?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
     */
    value?: string;
}
export declare namespace ExperimentTemplateStopCondition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateStopCondition) => any;
}
/**
 * <p>Describes a filter used for the target resources in an experiment template.</p>
 */
export interface ExperimentTemplateTargetFilter {
    /**
     * <p>The attribute path for the filter.</p>
     */
    path?: string;
    /**
     * <p>The attribute values for the filter.</p>
     */
    values?: string[];
}
export declare namespace ExperimentTemplateTargetFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateTargetFilter) => any;
}
/**
 * <p>Describes a target for an experiment template.</p>
 */
export interface ExperimentTemplateTarget {
    /**
     * <p>The resource type.</p>
     */
    resourceType?: string;
    /**
     * <p>The Amazon Resource Names (ARNs) of the targets.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The tags for the target resources.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The filters to apply to identify target resources using specific attributes.</p>
     */
    filters?: ExperimentTemplateTargetFilter[];
    /**
     * <p>Scopes the identified resources to a specific count or percentage.</p>
     */
    selectionMode?: string;
}
export declare namespace ExperimentTemplateTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateTarget) => any;
}
/**
 * <p>Describes an experiment template.</p>
 */
export interface ExperimentTemplate {
    /**
     * <p>The ID of the experiment template.</p>
     */
    id?: string;
    /**
     * <p>The description for the experiment template.</p>
     */
    description?: string;
    /**
     * <p>The targets for the experiment.</p>
     */
    targets?: {
        [key: string]: ExperimentTemplateTarget;
    };
    /**
     * <p>The actions for the experiment.</p>
     */
    actions?: {
        [key: string]: ExperimentTemplateAction;
    };
    /**
     * <p>The stop conditions for the experiment.</p>
     */
    stopConditions?: ExperimentTemplateStopCondition[];
    /**
     * <p>The time the experiment template was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time the experiment template was last updated.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of an IAM role.</p>
     */
    roleArn?: string;
    /**
     * <p>The tags for the experiment template.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ExperimentTemplate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplate) => any;
}
export interface CreateExperimentTemplateResponse {
    /**
     * <p>Information about the experiment template.</p>
     */
    experimentTemplate?: ExperimentTemplate;
}
export declare namespace CreateExperimentTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateExperimentTemplateResponse) => any;
}
/**
 * <p>The specified resource cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>You have exceeded your service quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface DeleteExperimentTemplateRequest {
    /**
     * <p>The ID of the experiment template.</p>
     */
    id: string | undefined;
}
export declare namespace DeleteExperimentTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteExperimentTemplateRequest) => any;
}
export interface DeleteExperimentTemplateResponse {
    /**
     * <p>Information about the experiment template.</p>
     */
    experimentTemplate?: ExperimentTemplate;
}
export declare namespace DeleteExperimentTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteExperimentTemplateResponse) => any;
}
export declare enum ExperimentActionStatus {
    cancelled = "cancelled",
    completed = "completed",
    failed = "failed",
    initiating = "initiating",
    pending = "pending",
    running = "running",
    stopped = "stopped",
    stopping = "stopping"
}
/**
 * <p>Describes the state of an action.</p>
 */
export interface ExperimentActionState {
    /**
     * <p>The state of the action.</p>
     */
    status?: ExperimentActionStatus | string;
    /**
     * <p>The reason for the state.</p>
     */
    reason?: string;
}
export declare namespace ExperimentActionState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentActionState) => any;
}
/**
 * <p>Describes the action for an experiment.</p>
 */
export interface ExperimentAction {
    /**
     * <p>The ID of the action.</p>
     */
    actionId?: string;
    /**
     * <p>The description for the action.</p>
     */
    description?: string;
    /**
     * <p>The parameters for the action.</p>
     */
    parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The targets for the action.</p>
     */
    targets?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the action that must be completed before this action starts.</p>
     */
    startAfter?: string[];
    /**
     * <p>The state of the action.</p>
     */
    state?: ExperimentActionState;
}
export declare namespace ExperimentAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentAction) => any;
}
export declare enum ExperimentStatus {
    completed = "completed",
    failed = "failed",
    initiating = "initiating",
    pending = "pending",
    running = "running",
    stopped = "stopped",
    stopping = "stopping"
}
/**
 * <p>Describes the state of an experiment.</p>
 */
export interface ExperimentState {
    /**
     * <p>The state of the experiment.</p>
     */
    status?: ExperimentStatus | string;
    /**
     * <p>The reason for the state.</p>
     */
    reason?: string;
}
export declare namespace ExperimentState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentState) => any;
}
/**
 * <p>Describes the stop condition for an experiment.</p>
 */
export interface ExperimentStopCondition {
    /**
     * <p>The source for the stop condition.</p>
     */
    source?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
     */
    value?: string;
}
export declare namespace ExperimentStopCondition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentStopCondition) => any;
}
/**
 * <p>Describes a filter used for the target resources in an experiment.</p>
 */
export interface ExperimentTargetFilter {
    /**
     * <p>The attribute path for the filter.</p>
     */
    path?: string;
    /**
     * <p>The attribute values for the filter.</p>
     */
    values?: string[];
}
export declare namespace ExperimentTargetFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTargetFilter) => any;
}
/**
 * <p>Describes a target for an experiment.</p>
 */
export interface ExperimentTarget {
    /**
     * <p>The resource type.</p>
     */
    resourceType?: string;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The tags for the target resources.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The filters to apply to identify target resources using specific attributes.</p>
     */
    filters?: ExperimentTargetFilter[];
    /**
     * <p>Scopes the identified resources to a specific count or percentage.</p>
     */
    selectionMode?: string;
}
export declare namespace ExperimentTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTarget) => any;
}
/**
 * <p>Describes an experiment.</p>
 */
export interface Experiment {
    /**
     * <p>The ID of the experiment.</p>
     */
    id?: string;
    /**
     * <p>The ID of the experiment template.</p>
     */
    experimentTemplateId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.</p>
     */
    roleArn?: string;
    /**
     * <p>The state of the experiment.</p>
     */
    state?: ExperimentState;
    /**
     * <p>The targets for the experiment.</p>
     */
    targets?: {
        [key: string]: ExperimentTarget;
    };
    /**
     * <p>The actions for the experiment.</p>
     */
    actions?: {
        [key: string]: ExperimentAction;
    };
    /**
     * <p>The stop conditions for the experiment.</p>
     */
    stopConditions?: ExperimentStopCondition[];
    /**
     * <p>The time the experiment was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time that the experiment was started.</p>
     */
    startTime?: Date;
    /**
     * <p>The time that the experiment ended.</p>
     */
    endTime?: Date;
    /**
     * <p>The tags for the experiment.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace Experiment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Experiment) => any;
}
/**
 * <p>Provides a summary of an experiment.</p>
 */
export interface ExperimentSummary {
    /**
     * <p>The ID of the experiment.</p>
     */
    id?: string;
    /**
     * <p>The ID of the experiment template.</p>
     */
    experimentTemplateId?: string;
    /**
     * <p>The state of the experiment.</p>
     */
    state?: ExperimentState;
    /**
     * <p>The time that the experiment was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The tags for the experiment.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ExperimentSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentSummary) => any;
}
/**
 * <p>Provides a summary of an experiment template.</p>
 */
export interface ExperimentTemplateSummary {
    /**
     * <p>The ID of the experiment template.</p>
     */
    id?: string;
    /**
     * <p>The description of the experiment template.</p>
     */
    description?: string;
    /**
     * <p>The time that the experiment template was created.</p>
     */
    creationTime?: Date;
    /**
     * <p>The time that the experiment template was last updated.</p>
     */
    lastUpdateTime?: Date;
    /**
     * <p>The tags for the experiment template.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ExperimentTemplateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExperimentTemplateSummary) => any;
}
export interface GetActionRequest {
    /**
     * <p>The ID of the action.</p>
     */
    id: string | undefined;
}
export declare namespace GetActionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetActionRequest) => any;
}
export interface GetActionResponse {
    /**
     * <p>Information about the action.</p>
     */
    action?: Action;
}
export declare namespace GetActionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetActionResponse) => any;
}
export interface GetExperimentRequest {
    /**
     * <p>The ID of the experiment.</p>
     */
    id: string | undefined;
}
export declare namespace GetExperimentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExperimentRequest) => any;
}
export interface GetExperimentResponse {
    /**
     * <p>Information about the experiment.</p>
     */
    experiment?: Experiment;
}
export declare namespace GetExperimentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExperimentResponse) => any;
}
export interface GetExperimentTemplateRequest {
    /**
     * <p>The ID of the experiment template.</p>
     */
    id: string | undefined;
}
export declare namespace GetExperimentTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExperimentTemplateRequest) => any;
}
export interface GetExperimentTemplateResponse {
    /**
     * <p>Information about the experiment template.</p>
     */
    experimentTemplate?: ExperimentTemplate;
}
export declare namespace GetExperimentTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExperimentTemplateResponse) => any;
}
export interface ListActionsRequest {
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListActionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActionsRequest) => any;
}
export interface ListActionsResponse {
    /**
     * <p>The actions.</p>
     */
    actions?: ActionSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListActionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActionsResponse) => any;
}
export interface ListExperimentsRequest {
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListExperimentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListExperimentsRequest) => any;
}
export interface ListExperimentsResponse {
    /**
     * <p>The experiments.</p>
     */
    experiments?: ExperimentSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListExperimentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListExperimentsResponse) => any;
}
export interface ListExperimentTemplatesRequest {
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListExperimentTemplatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListExperimentTemplatesRequest) => any;
}
export interface ListExperimentTemplatesResponse {
    /**
     * <p>The experiment templates.</p>
     */
    experimentTemplates?: ExperimentTemplateSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListExperimentTemplatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListExperimentTemplatesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
     * <p>The tags for the resource.</p>
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
export interface StartExperimentRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
     */
    clientToken?: string;
    /**
     * <p>The ID of the experiment template.</p>
     */
    experimentTemplateId: string | undefined;
    /**
     * <p>The tags to apply to the experiment.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StartExperimentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartExperimentRequest) => any;
}
export interface StartExperimentResponse {
    /**
     * <p>Information about the experiment.</p>
     */
    experiment?: Experiment;
}
export declare namespace StartExperimentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartExperimentResponse) => any;
}
export interface StopExperimentRequest {
    /**
     * <p>The ID of the experiment.</p>
     */
    id: string | undefined;
}
export declare namespace StopExperimentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopExperimentRequest) => any;
}
export interface StopExperimentResponse {
    /**
     * <p>Information about the experiment.</p>
     */
    experiment?: Experiment;
}
export declare namespace StopExperimentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopExperimentResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags for the resource.</p>
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
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tag keys to remove.</p>
     */
    tagKeys?: string[];
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
/**
 * <p>Specifies an action for an experiment template.</p>
 */
export interface UpdateExperimentTemplateActionInputItem {
    /**
     * <p>The ID of the action.</p>
     */
    actionId?: string;
    /**
     * <p>A description for the action.</p>
     */
    description?: string;
    /**
     * <p>The parameters for the action, if applicable.</p>
     */
    parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The targets for the action.</p>
     */
    targets?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
     */
    startAfter?: string[];
}
export declare namespace UpdateExperimentTemplateActionInputItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateExperimentTemplateActionInputItem) => any;
}
/**
 * <p>Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.</p>
 */
export interface UpdateExperimentTemplateStopConditionInput {
    /**
     * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
     *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
     *          condition.</p>
     */
    source: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm.</p>
     */
    value?: string;
}
export declare namespace UpdateExperimentTemplateStopConditionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateExperimentTemplateStopConditionInput) => any;
}
/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.</p>
 */
export interface UpdateExperimentTemplateTargetInput {
    /**
     * <p>The AWS resource type. The resource type must be supported for the specified action.</p>
     */
    resourceType: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARNs) of the targets.</p>
     */
    resourceArns?: string[];
    /**
     * <p>The tags for the target resources.</p>
     */
    resourceTags?: {
        [key: string]: string;
    };
    /**
     * <p>The filters to apply to identify target resources using specific attributes.</p>
     */
    filters?: ExperimentTemplateTargetInputFilter[];
    /**
     * <p>Scopes the identified resources to a specific count or percentage.</p>
     */
    selectionMode: string | undefined;
}
export declare namespace UpdateExperimentTemplateTargetInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateExperimentTemplateTargetInput) => any;
}
export interface UpdateExperimentTemplateRequest {
    /**
     * <p>The ID of the experiment template.</p>
     */
    id: string | undefined;
    /**
     * <p>A description for the template.</p>
     */
    description?: string;
    /**
     * <p>The stop conditions for the experiment.</p>
     */
    stopConditions?: UpdateExperimentTemplateStopConditionInput[];
    /**
     * <p>The targets for the experiment.</p>
     */
    targets?: {
        [key: string]: UpdateExperimentTemplateTargetInput;
    };
    /**
     * <p>The actions for the experiment.</p>
     */
    actions?: {
        [key: string]: UpdateExperimentTemplateActionInputItem;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.</p>
     */
    roleArn?: string;
}
export declare namespace UpdateExperimentTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateExperimentTemplateRequest) => any;
}
export interface UpdateExperimentTemplateResponse {
    /**
     * <p>Information about the experiment template.</p>
     */
    experimentTemplate?: ExperimentTemplate;
}
export declare namespace UpdateExperimentTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateExperimentTemplateResponse) => any;
}
