import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum AsyncJobStatus {
    CANCELED = "CANCELED",
    CANCEL_IN_PROGRESS = "CANCEL_IN_PROGRESS",
    COMPLETE = "COMPLETE",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    IN_PROGRESS_INITIALIZING = "IN_PROGRESS_INITIALIZING"
}
/**
 * <p>A key and value pair. </p>
 */
export interface Tag {
    /**
     * <p>A tag key.</p>
     */
    key: string | undefined;
    /**
     * <p>A value assigned to a tag key.</p>
     */
    value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>A variable in the list of variables for the batch create variable request.</p>
 */
export interface VariableEntry {
    /**
     * <p>The name of the variable.</p>
     */
    name?: string;
    /**
     * <p>The data type of the variable.</p>
     */
    dataType?: string;
    /**
     * <p>The data source of the variable.</p>
     */
    dataSource?: string;
    /**
     * <p>The default value of the variable.</p>
     */
    defaultValue?: string;
    /**
     * <p>The description of the variable.</p>
     */
    description?: string;
    /**
     * <p>The type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
     *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
     *          </p>
     */
    variableType?: string;
}
export declare namespace VariableEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VariableEntry) => any;
}
export interface BatchCreateVariableRequest {
    /**
     * <p>The list of variables for the batch create variable request.</p>
     */
    variableEntries: VariableEntry[] | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace BatchCreateVariableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchCreateVariableRequest) => any;
}
/**
 * <p>Provides the error of the batch create variable API.</p>
 */
export interface BatchCreateVariableError {
    /**
     * <p>The name.</p>
     */
    name?: string;
    /**
     * <p>The error code. </p>
     */
    code?: number;
    /**
     * <p>The error message.</p>
     */
    message?: string;
}
export declare namespace BatchCreateVariableError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchCreateVariableError) => any;
}
export interface BatchCreateVariableResult {
    /**
     * <p>Provides the errors for the <code>BatchCreateVariable</code> request.</p>
     */
    errors?: BatchCreateVariableError[];
}
export declare namespace BatchCreateVariableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchCreateVariableResult) => any;
}
/**
 * <p>An exception indicating an internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>An exception indicating a throttling error.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>An exception indicating a specified value is not allowed.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface BatchGetVariableRequest {
    /**
     * <p>The list of variable names to get.</p>
     */
    names: string[] | undefined;
}
export declare namespace BatchGetVariableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetVariableRequest) => any;
}
/**
 * <p>Provides the error of the batch get variable API.</p>
 */
export interface BatchGetVariableError {
    /**
     * <p>The error name. </p>
     */
    name?: string;
    /**
     * <p>The error code. </p>
     */
    code?: number;
    /**
     * <p>The error message.</p>
     */
    message?: string;
}
export declare namespace BatchGetVariableError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetVariableError) => any;
}
export declare enum DataSource {
    EVENT = "EVENT",
    EXTERNAL_MODEL_SCORE = "EXTERNAL_MODEL_SCORE",
    MODEL_SCORE = "MODEL_SCORE"
}
export declare enum DataType {
    BOOLEAN = "BOOLEAN",
    FLOAT = "FLOAT",
    INTEGER = "INTEGER",
    STRING = "STRING"
}
/**
 * <p>The variable.</p>
 */
export interface Variable {
    /**
     * <p>The name of the variable.</p>
     */
    name?: string;
    /**
     * <p>The data type of the variable. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
     */
    dataType?: DataType | string;
    /**
     * <p>The data source of the variable.</p>
     */
    dataSource?: DataSource | string;
    /**
     * <p>The default value of the variable.</p>
     */
    defaultValue?: string;
    /**
     * <p>The description of the variable. </p>
     */
    description?: string;
    /**
     * <p>The variable type of the variable.</p>
     *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT </code>
     *          </p>
     */
    variableType?: string;
    /**
     * <p>The time when variable was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The time when the variable was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The ARN of the variable.</p>
     */
    arn?: string;
}
export declare namespace Variable {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Variable) => any;
}
export interface BatchGetVariableResult {
    /**
     * <p>The returned variables.</p>
     */
    variables?: Variable[];
    /**
     * <p>The errors from the request.</p>
     */
    errors?: BatchGetVariableError[];
}
export declare namespace BatchGetVariableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchGetVariableResult) => any;
}
export interface CancelBatchPredictionJobRequest {
    /**
     * <p>The ID of the batch prediction job to cancel.</p>
     */
    jobId: string | undefined;
}
export declare namespace CancelBatchPredictionJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelBatchPredictionJobRequest) => any;
}
export interface CancelBatchPredictionJobResult {
}
export declare namespace CancelBatchPredictionJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelBatchPredictionJobResult) => any;
}
/**
 * <p>An exception indicating the specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface CreateBatchPredictionJobRequest {
    /**
     * <p>The ID of the batch prediction job.</p>
     */
    jobId: string | undefined;
    /**
     * <p>The Amazon S3 location of your training file.</p>
     */
    inputPath: string | undefined;
    /**
     * <p>The Amazon S3 location of your output file.</p>
     */
    outputPath: string | undefined;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName: string | undefined;
    /**
     * <p>The name of the detector.</p>
     */
    detectorName: string | undefined;
    /**
     * <p>The detector version.</p>
     */
    detectorVersion?: string;
    /**
     * <p>The ARN of the IAM role to use for this job request.</p>
     */
    iamRoleArn: string | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateBatchPredictionJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBatchPredictionJobRequest) => any;
}
export interface CreateBatchPredictionJobResult {
}
export declare namespace CreateBatchPredictionJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBatchPredictionJobResult) => any;
}
export declare enum ModelTypeEnum {
    ONLINE_FRAUD_INSIGHTS = "ONLINE_FRAUD_INSIGHTS"
}
/**
 * <p>The model version.</p>
 */
export interface ModelVersion {
    /**
     * <p>The model ID.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber: string | undefined;
    /**
     * <p>The model version ARN.</p>
     */
    arn?: string;
}
export declare namespace ModelVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelVersion) => any;
}
export declare enum RuleExecutionMode {
    ALL_MATCHED = "ALL_MATCHED",
    FIRST_MATCHED = "FIRST_MATCHED"
}
/**
 * <p>A rule.</p>
 */
export interface Rule {
    /**
     * <p>The detector for which the rule is associated.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The rule ID.</p>
     */
    ruleId: string | undefined;
    /**
     * <p>The rule version.</p>
     */
    ruleVersion: string | undefined;
}
export declare namespace Rule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Rule) => any;
}
export interface CreateDetectorVersionRequest {
    /**
     * <p>The ID of the detector under which you want to create a new version.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The description of the detector version.</p>
     */
    description?: string;
    /**
     * <p>The Amazon Sagemaker model endpoints to include in the detector version.</p>
     */
    externalModelEndpoints?: string[];
    /**
     * <p>The rules to include in the detector version.</p>
     */
    rules: Rule[] | undefined;
    /**
     * <p>The model versions to include in the detector version.</p>
     */
    modelVersions?: ModelVersion[];
    /**
     * <p>The rule execution mode for the rules included in the detector version.</p>
     * 	        <p>You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
     * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
     * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. </p>
     *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
     */
    ruleExecutionMode?: RuleExecutionMode | string;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateDetectorVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDetectorVersionRequest) => any;
}
export declare enum DetectorVersionStatus {
    ACTIVE = "ACTIVE",
    DRAFT = "DRAFT",
    INACTIVE = "INACTIVE"
}
export interface CreateDetectorVersionResult {
    /**
     * <p>The ID for the created version's parent detector.</p>
     */
    detectorId?: string;
    /**
     * <p>The ID for the created detector. </p>
     */
    detectorVersionId?: string;
    /**
     * <p>The status of the detector version.</p>
     */
    status?: DetectorVersionStatus | string;
}
export declare namespace CreateDetectorVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDetectorVersionResult) => any;
}
export interface CreateModelRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type. </p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The model description. </p>
     */
    description?: string;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName: string | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateModelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateModelRequest) => any;
}
export interface CreateModelResult {
}
export declare namespace CreateModelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateModelResult) => any;
}
/**
 * <p>Details for the external events data used for model version training.</p>
 */
export interface ExternalEventsDetail {
    /**
     * <p>The Amazon S3 bucket location for the data.</p>
     */
    dataLocation: string | undefined;
    /**
     * <p>The ARN of the role that provides Amazon Fraud Detector access to the data location.</p>
     */
    dataAccessRoleArn: string | undefined;
}
export declare namespace ExternalEventsDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExternalEventsDetail) => any;
}
/**
 * <p>The label schema.</p>
 */
export interface LabelSchema {
    /**
     * <p>The label mapper maps the Amazon Fraud Detector supported model classification labels (<code>FRAUD</code>, <code>LEGIT</code>) to the appropriate event type labels. For example, if "<code>FRAUD</code>" and "<code>LEGIT</code>" are Amazon Fraud Detector supported labels, this mapper could be: <code>{"FRAUD" => ["0"]</code>, <code>"LEGIT" => ["1"]}</code> or <code>{"FRAUD" => ["false"]</code>, <code>"LEGIT" => ["true"]}</code> or <code>{"FRAUD" => ["fraud", "abuse"]</code>, <code>"LEGIT" => ["legit", "safe"]}</code>. The value part of the mapper is a list, because you may have multiple label variants from your event type for a single Amazon Fraud Detector label.
     *         </p>
     */
    labelMapper: {
        [key: string]: string[];
    } | undefined;
}
export declare namespace LabelSchema {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LabelSchema) => any;
}
/**
 * <p>The training data schema.</p>
 */
export interface TrainingDataSchema {
    /**
     * <p>The training data schema variables.</p>
     */
    modelVariables: string[] | undefined;
    /**
     * <p>The label schema.</p>
     */
    labelSchema: LabelSchema | undefined;
}
export declare namespace TrainingDataSchema {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TrainingDataSchema) => any;
}
export declare enum TrainingDataSourceEnum {
    EXTERNAL_EVENTS = "EXTERNAL_EVENTS"
}
export interface CreateModelVersionRequest {
    /**
     * <p>The model ID. </p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The training data source location in Amazon S3. </p>
     */
    trainingDataSource: TrainingDataSourceEnum | string | undefined;
    /**
     * <p>The training data schema.</p>
     */
    trainingDataSchema: TrainingDataSchema | undefined;
    /**
     * <p>Details for the external events data used for model version training. Required if <code>trainingDataSource</code> is <code>EXTERNAL_EVENTS</code>.</p>
     */
    externalEventsDetail?: ExternalEventsDetail;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateModelVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateModelVersionRequest) => any;
}
export interface CreateModelVersionResult {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The model version number of the model version created.</p>
     */
    modelVersionNumber?: string;
    /**
     * <p>The model version status. </p>
     */
    status?: string;
}
export declare namespace CreateModelVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateModelVersionResult) => any;
}
export declare enum Language {
    DETECTORPL = "DETECTORPL"
}
export interface CreateRuleRequest {
    /**
     * <p>The rule ID.</p>
     */
    ruleId: string | undefined;
    /**
     * <p>The detector ID for the rule's parent detector.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The rule description.</p>
     */
    description?: string;
    /**
     * <p>The rule expression.</p>
     */
    expression: string | undefined;
    /**
     * <p>The language of the rule.</p>
     */
    language: Language | string | undefined;
    /**
     * <p>The outcome or outcomes returned when the rule expression matches.</p>
     */
    outcomes: string[] | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRuleRequest) => any;
}
export interface CreateRuleResult {
    /**
     * <p>The created rule.</p>
     */
    rule?: Rule;
}
export declare namespace CreateRuleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRuleResult) => any;
}
export interface CreateVariableRequest {
    /**
     * <p>The name of the variable.</p>
     */
    name: string | undefined;
    /**
     * <p>The data type.</p>
     */
    dataType: DataType | string | undefined;
    /**
     * <p>The source of the data.</p>
     */
    dataSource: DataSource | string | undefined;
    /**
     * <p>The default value for the variable when no value is received.</p>
     */
    defaultValue: string | undefined;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.
     * 				</p>
     *          <p>Valid Values: <code>AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT</code>
     *          </p>
     */
    variableType?: string;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateVariableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVariableRequest) => any;
}
export interface CreateVariableResult {
}
export declare namespace CreateVariableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVariableResult) => any;
}
export interface DeleteBatchPredictionJobRequest {
    /**
     * <p>The ID of the batch prediction job to delete.</p>
     */
    jobId: string | undefined;
}
export declare namespace DeleteBatchPredictionJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBatchPredictionJobRequest) => any;
}
export interface DeleteBatchPredictionJobResult {
}
export declare namespace DeleteBatchPredictionJobResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteBatchPredictionJobResult) => any;
}
/**
 * <p>An exception indicating there was a conflict during a delete operation. The following delete operations can cause a conflict exception:</p>
 * 	        <ul>
 *             <li>
 *                <p>DeleteDetector: A conflict exception will occur if the detector has associated <code>Rules</code> or <code>DetectorVersions</code>. You can only delete a detector if it has no <code>Rules</code> or <code>DetectorVersions</code>.</p>
 *             </li>
 *             <li>
 *                <p>DeleteDetectorVersion: A conflict exception will occur if the <code>DetectorVersion</code> status is <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>DeleteRule: A conflict exception will occur if the <code>RuleVersion</code> is in use by an associated <code>ACTIVE</code> or <code>INACTIVE DetectorVersion</code>.</p>
 *             </li>
 *          </ul>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface DeleteDetectorRequest {
    /**
     * <p>The ID of the detector to delete.</p>
     */
    detectorId: string | undefined;
}
export declare namespace DeleteDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorRequest) => any;
}
export interface DeleteDetectorResult {
}
export declare namespace DeleteDetectorResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorResult) => any;
}
export interface DeleteDetectorVersionRequest {
    /**
     * <p>The ID of the parent detector for the detector version to delete.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The ID of the detector version to delete.</p>
     */
    detectorVersionId: string | undefined;
}
export declare namespace DeleteDetectorVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorVersionRequest) => any;
}
export interface DeleteDetectorVersionResult {
}
export declare namespace DeleteDetectorVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorVersionResult) => any;
}
export interface DeleteEntityTypeRequest {
    /**
     * <p>The name of the entity type to delete.</p>
     */
    name: string | undefined;
}
export declare namespace DeleteEntityTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEntityTypeRequest) => any;
}
export interface DeleteEntityTypeResult {
}
export declare namespace DeleteEntityTypeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEntityTypeResult) => any;
}
export interface DeleteEventRequest {
    /**
     * <p>The ID of the event to delete.</p>
     */
    eventId: string | undefined;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName: string | undefined;
}
export declare namespace DeleteEventRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventRequest) => any;
}
export interface DeleteEventResult {
}
export declare namespace DeleteEventResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventResult) => any;
}
export interface DeleteEventTypeRequest {
    /**
     * <p>The name of the event type to delete.</p>
     */
    name: string | undefined;
}
export declare namespace DeleteEventTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventTypeRequest) => any;
}
export interface DeleteEventTypeResult {
}
export declare namespace DeleteEventTypeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventTypeResult) => any;
}
export interface DeleteExternalModelRequest {
    /**
     * <p>The endpoint of the Amazon Sagemaker model to delete.</p>
     */
    modelEndpoint: string | undefined;
}
export declare namespace DeleteExternalModelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteExternalModelRequest) => any;
}
export interface DeleteExternalModelResult {
}
export declare namespace DeleteExternalModelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteExternalModelResult) => any;
}
export interface DeleteLabelRequest {
    /**
     * <p>The name of the label to delete.</p>
     */
    name: string | undefined;
}
export declare namespace DeleteLabelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLabelRequest) => any;
}
export interface DeleteLabelResult {
}
export declare namespace DeleteLabelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLabelResult) => any;
}
export interface DeleteModelRequest {
    /**
     * <p>The model ID of the model to delete.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type of the model to delete.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
}
export declare namespace DeleteModelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteModelRequest) => any;
}
export interface DeleteModelResult {
}
export declare namespace DeleteModelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteModelResult) => any;
}
export interface DeleteModelVersionRequest {
    /**
     * <p>The model ID of the model version to delete.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type of the model version to delete.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The model version number of the model version to delete.</p>
     */
    modelVersionNumber: string | undefined;
}
export declare namespace DeleteModelVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteModelVersionRequest) => any;
}
export interface DeleteModelVersionResult {
}
export declare namespace DeleteModelVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteModelVersionResult) => any;
}
export interface DeleteOutcomeRequest {
    /**
     * <p>The name of the outcome to delete.</p>
     */
    name: string | undefined;
}
export declare namespace DeleteOutcomeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutcomeRequest) => any;
}
export interface DeleteOutcomeResult {
}
export declare namespace DeleteOutcomeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutcomeResult) => any;
}
export interface DeleteRuleRequest {
    /**
     * <p>A rule.</p>
     */
    rule: Rule | undefined;
}
export declare namespace DeleteRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRuleRequest) => any;
}
export interface DeleteRuleResult {
}
export declare namespace DeleteRuleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRuleResult) => any;
}
export interface DeleteVariableRequest {
    /**
     * <p>The name of the variable to delete.</p>
     */
    name: string | undefined;
}
export declare namespace DeleteVariableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVariableRequest) => any;
}
export interface DeleteVariableResult {
}
export declare namespace DeleteVariableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVariableResult) => any;
}
export interface DescribeDetectorRequest {
    /**
     * <p>The detector ID.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The next token from the previous response.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace DescribeDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDetectorRequest) => any;
}
/**
 * <p>The summary of the detector version.</p>
 */
export interface DetectorVersionSummary {
    /**
     * <p>The detector version ID. </p>
     */
    detectorVersionId?: string;
    /**
     * <p>The detector version status. </p>
     */
    status?: DetectorVersionStatus | string;
    /**
     * <p>The detector version description. </p>
     */
    description?: string;
    /**
     * <p>Timestamp of when the detector version was last updated.</p>
     */
    lastUpdatedTime?: string;
}
export declare namespace DetectorVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetectorVersionSummary) => any;
}
export interface DescribeDetectorResult {
    /**
     * <p>The detector ID.</p>
     */
    detectorId?: string;
    /**
     * <p>The status and description for each detector version.</p>
     */
    detectorVersionSummaries?: DetectorVersionSummary[];
    /**
     * <p>The next token to be used for subsequent requests.</p>
     */
    nextToken?: string;
    /**
     * <p>The detector ARN.</p>
     */
    arn?: string;
}
export declare namespace DescribeDetectorResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDetectorResult) => any;
}
export interface DescribeModelVersionsRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The next token from the previous results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    maxResults?: number;
}
export declare namespace DescribeModelVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeModelVersionsRequest) => any;
}
/**
 * <p>The message details.</p>
 */
export interface FieldValidationMessage {
    /**
     * <p>The field name.</p>
     */
    fieldName?: string;
    /**
     * <p>The message ID.</p>
     */
    identifier?: string;
    /**
     * <p>The message title.</p>
     */
    title?: string;
    /**
     * <p>The message content.</p>
     */
    content?: string;
    /**
     * <p>The message type.</p>
     */
    type?: string;
}
export declare namespace FieldValidationMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FieldValidationMessage) => any;
}
/**
 * <p>The message details.</p>
 */
export interface FileValidationMessage {
    /**
     * <p>The message title.</p>
     */
    title?: string;
    /**
     * <p>The message content.</p>
     */
    content?: string;
    /**
     * <p>The message type.</p>
     */
    type?: string;
}
export declare namespace FileValidationMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FileValidationMessage) => any;
}
/**
 * <p>The model training validation messages.</p>
 */
export interface DataValidationMetrics {
    /**
     * <p>The file-specific model training validation messages.</p>
     */
    fileLevelMessages?: FileValidationMessage[];
    /**
     * <p>The field-specific model training validation messages.</p>
     */
    fieldLevelMessages?: FieldValidationMessage[];
}
export declare namespace DataValidationMetrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataValidationMetrics) => any;
}
/**
 * <p>Model performance metrics data points.</p>
 */
export interface MetricDataPoint {
    /**
     * <p>The false positive rate. This is the percentage of total legitimate events that are incorrectly predicted as fraud.</p>
     */
    fpr?: number;
    /**
     * <p>The percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent.</p>
     */
    precision?: number;
    /**
     * <p>The true positive rate. This is the percentage of total fraud the model detects. Also known as capture rate.</p>
     */
    tpr?: number;
    /**
     * <p>The model threshold that specifies an acceptable fraud capture rate. For example, a threshold of 500 means any model score 500 or above is labeled as fraud.</p>
     */
    threshold?: number;
}
export declare namespace MetricDataPoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MetricDataPoint) => any;
}
/**
 * <p>The training metric details.</p>
 */
export interface TrainingMetrics {
    /**
     * <p>The area under the curve. This summarizes true positive rate (TPR) and false positive rate (FPR) across all possible model score thresholds. A model with no predictive power has an AUC of 0.5, whereas a perfect model has a score of 1.0.</p>
     */
    auc?: number;
    /**
     * <p>The data points details.</p>
     */
    metricDataPoints?: MetricDataPoint[];
}
export declare namespace TrainingMetrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TrainingMetrics) => any;
}
/**
 * <p>The training result details.</p>
 */
export interface TrainingResult {
    /**
     * <p>The validation metrics.</p>
     */
    dataValidationMetrics?: DataValidationMetrics;
    /**
     * <p>The training metric details.</p>
     */
    trainingMetrics?: TrainingMetrics;
}
export declare namespace TrainingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TrainingResult) => any;
}
/**
 * <p>The details of the model version.</p>
 */
export interface ModelVersionDetail {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber?: string;
    /**
     * <p>The status of the model version.</p>
     */
    status?: string;
    /**
     * <p>The model version training data source.</p>
     */
    trainingDataSource?: TrainingDataSourceEnum | string;
    /**
     * <p>The training data schema.</p>
     */
    trainingDataSchema?: TrainingDataSchema;
    /**
     * <p>The event details.</p>
     */
    externalEventsDetail?: ExternalEventsDetail;
    /**
     * <p>The training results.</p>
     */
    trainingResult?: TrainingResult;
    /**
     * <p>The timestamp when the model was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The timestamp when the model was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The model version ARN.</p>
     */
    arn?: string;
}
export declare namespace ModelVersionDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelVersionDetail) => any;
}
export interface DescribeModelVersionsResult {
    /**
     * <p>The model version details.</p>
     */
    modelVersionDetails?: ModelVersionDetail[];
    /**
     * <p>The next token.</p>
     */
    nextToken?: string;
}
export declare namespace DescribeModelVersionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeModelVersionsResult) => any;
}
export interface GetBatchPredictionJobsRequest {
    /**
     * <p>The batch prediction job for which to get the details.</p>
     */
    jobId?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
    /**
     * <p>The next token from the previous request.</p>
     */
    nextToken?: string;
}
export declare namespace GetBatchPredictionJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBatchPredictionJobsRequest) => any;
}
/**
 * <p>The batch prediction details.</p>
 */
export interface BatchPrediction {
    /**
     * <p>The job ID for the batch prediction.</p>
     */
    jobId?: string;
    /**
     * <p>The batch prediction status.</p>
     */
    status?: AsyncJobStatus | string;
    /**
     * <p>The reason a batch prediction job failed.</p>
     */
    failureReason?: string;
    /**
     * <p>Timestamp of when the batch prediction job started.</p>
     */
    startTime?: string;
    /**
     * <p>Timestamp of when the batch prediction job comleted.</p>
     */
    completionTime?: string;
    /**
     * <p>Timestamp of most recent heartbeat indicating the batch prediction job was making progress.</p>
     */
    lastHeartbeatTime?: string;
    /**
     * <p>The Amazon S3 location of your training file.</p>
     */
    inputPath?: string;
    /**
     * <p>The Amazon S3 location of your output file.</p>
     */
    outputPath?: string;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName?: string;
    /**
     * <p>The name of the detector.</p>
     */
    detectorName?: string;
    /**
     * <p>The detector version. </p>
     */
    detectorVersion?: string;
    /**
     * <p>The ARN of the IAM role to use for this job request.</p>
     */
    iamRoleArn?: string;
    /**
     * <p>The ARN of batch prediction job.</p>
     */
    arn?: string;
    /**
     * <p>The number of records processed by the batch prediction job.</p>
     */
    processedRecordsCount?: number;
    /**
     * <p>The total number of records in the batch prediction job.</p>
     */
    totalRecordsCount?: number;
}
export declare namespace BatchPrediction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchPrediction) => any;
}
export interface GetBatchPredictionJobsResult {
    /**
     * <p>An array containing the details of each batch prediction job.</p>
     */
    batchPredictions?: BatchPrediction[];
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
}
export declare namespace GetBatchPredictionJobsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBatchPredictionJobsResult) => any;
}
export interface GetDetectorsRequest {
    /**
     * <p>The detector ID.</p>
     */
    detectorId?: string;
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetDetectorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorsRequest) => any;
}
/**
 * <p>The detector.</p>
 */
export interface Detector {
    /**
     * <p>The detector ID.</p>
     */
    detectorId?: string;
    /**
     * <p>The detector description.</p>
     */
    description?: string;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName?: string;
    /**
     * <p>Timestamp of when the detector was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>Timestamp of when the detector was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The detector ARN.</p>
     */
    arn?: string;
}
export declare namespace Detector {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Detector) => any;
}
export interface GetDetectorsResult {
    /**
     * <p>The detectors.</p>
     */
    detectors?: Detector[];
    /**
     * <p>The next page token.</p>
     */
    nextToken?: string;
}
export declare namespace GetDetectorsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorsResult) => any;
}
export interface GetDetectorVersionRequest {
    /**
     * <p>The detector ID.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The detector version ID.</p>
     */
    detectorVersionId: string | undefined;
}
export declare namespace GetDetectorVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorVersionRequest) => any;
}
export interface GetDetectorVersionResult {
    /**
     * <p>The detector ID.</p>
     */
    detectorId?: string;
    /**
     * <p>The detector version ID.</p>
     */
    detectorVersionId?: string;
    /**
     * <p>The detector version description.</p>
     */
    description?: string;
    /**
     * <p>The Amazon SageMaker model endpoints included in the detector version.</p>
     */
    externalModelEndpoints?: string[];
    /**
     * <p>The model versions included in the detector version. </p>
     */
    modelVersions?: ModelVersion[];
    /**
     * <p>The rules included in the detector version.</p>
     */
    rules?: Rule[];
    /**
     * <p>The status of the detector version.</p>
     */
    status?: DetectorVersionStatus | string;
    /**
     * <p>The timestamp when the detector version was last updated.
     *         </p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The timestamp when the detector version was created. </p>
     */
    createdTime?: string;
    /**
     * <p>The execution mode of the rule in the dectector</p>
     * 	        <p>
     *             <code>FIRST_MATCHED</code> indicates that Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
     * 	        <p>
     *             <code>ALL_MATCHED</code> indicates that Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
     */
    ruleExecutionMode?: RuleExecutionMode | string;
    /**
     * <p>The detector version ARN.</p>
     */
    arn?: string;
}
export declare namespace GetDetectorVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorVersionResult) => any;
}
export interface GetEntityTypesRequest {
    /**
     * <p>The name.</p>
     */
    name?: string;
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetEntityTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEntityTypesRequest) => any;
}
/**
 * <p>The entity type details.</p>
 */
export interface EntityType {
    /**
     * <p>The entity type name.</p>
     */
    name?: string;
    /**
     * <p>The entity type description.</p>
     */
    description?: string;
    /**
     * <p>Timestamp of when the entity type was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>Timestamp of when the entity type was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The entity type ARN.</p>
     */
    arn?: string;
}
export declare namespace EntityType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityType) => any;
}
export interface GetEntityTypesResult {
    /**
     * <p>An array of entity types.</p>
     */
    entityTypes?: EntityType[];
    /**
     * <p>The next page token.</p>
     */
    nextToken?: string;
}
export declare namespace GetEntityTypesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEntityTypesResult) => any;
}
/**
 * <p>The entity details. </p>
 */
export interface Entity {
    /**
     * <p>The entity type.</p>
     */
    entityType: string | undefined;
    /**
     * <p>The entity ID. If you do not know the <code>entityId</code>, you can pass <code>unknown</code>, which is areserved string literal.</p>
     */
    entityId: string | undefined;
}
export declare namespace Entity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Entity) => any;
}
/**
 * <p>A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.</p>
 */
export interface ModelEndpointDataBlob {
    /**
     * <p>The byte buffer of the Amazon SageMaker model endpoint input data blob.</p>
     */
    byteBuffer?: Uint8Array;
    /**
     * <p>The content type of the Amazon SageMaker model endpoint input data blob. </p>
     */
    contentType?: string;
}
export declare namespace ModelEndpointDataBlob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelEndpointDataBlob) => any;
}
export interface GetEventPredictionRequest {
    /**
     * <p>The detector ID.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The detector version ID.</p>
     */
    detectorVersionId?: string;
    /**
     * <p>The unique ID used to identify the event.</p>
     */
    eventId: string | undefined;
    /**
     * <p>The event type associated with the detector specified for the prediction.</p>
     */
    eventTypeName: string | undefined;
    /**
     * <p>The entity type (associated with the detector's event type) and specific entity ID representing who performed the event. If an entity id is not available, use "UNKNOWN."</p>
     */
    entities: Entity[] | undefined;
    /**
     * <p>Timestamp that defines when the event under evaluation occurred.</p>
     */
    eventTimestamp: string | undefined;
    /**
     * <p>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</p>
     */
    eventVariables: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The Amazon SageMaker model endpoint input data blobs.</p>
     */
    externalModelEndpointDataBlobs?: {
        [key: string]: ModelEndpointDataBlob;
    };
}
export declare namespace GetEventPredictionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEventPredictionRequest) => any;
}
/**
 * <p>The fraud prediction scores.</p>
 */
export interface ModelScores {
    /**
     * <p>The model version.</p>
     */
    modelVersion?: ModelVersion;
    /**
     * <p>The model's fraud prediction scores.</p>
     */
    scores?: {
        [key: string]: number;
    };
}
export declare namespace ModelScores {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelScores) => any;
}
/**
 * <p>The rule results.</p>
 */
export interface RuleResult {
    /**
     * <p>The rule ID that was matched, based on the rule execution mode.</p>
     */
    ruleId?: string;
    /**
     * <p>The outcomes of the matched rule, based on the rule execution mode.</p>
     */
    outcomes?: string[];
}
export declare namespace RuleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RuleResult) => any;
}
export interface GetEventPredictionResult {
    /**
     * <p>The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.</p>
     */
    modelScores?: ModelScores[];
    /**
     * <p>The results.</p>
     */
    ruleResults?: RuleResult[];
}
export declare namespace GetEventPredictionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEventPredictionResult) => any;
}
export interface GetEventTypesRequest {
    /**
     * <p>The name.</p>
     */
    name?: string;
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetEventTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEventTypesRequest) => any;
}
/**
 * <p>The event type details.</p>
 */
export interface EventType {
    /**
     * <p>The event type name.</p>
     */
    name?: string;
    /**
     * <p>The event type description.</p>
     */
    description?: string;
    /**
     * <p>The event type event variables.</p>
     */
    eventVariables?: string[];
    /**
     * <p>The event type labels.</p>
     */
    labels?: string[];
    /**
     * <p>The event type entity types.</p>
     */
    entityTypes?: string[];
    /**
     * <p>Timestamp of when the event type was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>Timestamp of when the event type was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The entity type ARN.</p>
     */
    arn?: string;
}
export declare namespace EventType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventType) => any;
}
export interface GetEventTypesResult {
    /**
     * <p>An array of event types.</p>
     */
    eventTypes?: EventType[];
    /**
     * <p>The next page token.</p>
     */
    nextToken?: string;
}
export declare namespace GetEventTypesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEventTypesResult) => any;
}
export interface GetExternalModelsRequest {
    /**
     * <p>The Amazon SageMaker model endpoint.</p>
     */
    modelEndpoint?: string;
    /**
     * <p>The next page token for the request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetExternalModelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExternalModelsRequest) => any;
}
export declare enum ModelInputDataFormat {
    CSV = "TEXT_CSV",
    JSON = "APPLICATION_JSON"
}
/**
 * <p>The Amazon SageMaker model input configuration.</p>
 */
export interface ModelInputConfiguration {
    /**
     * <p>The event type name.</p>
     */
    eventTypeName?: string;
    /**
     * <p> The format of the model input configuration. The format differs depending on if it is
     *             passed through to SageMaker or constructed by Amazon Fraud Detector.</p>
     */
    format?: ModelInputDataFormat | string;
    /**
     * <p>The event variables.</p>
     */
    useEventVariables: boolean | undefined;
    /**
     * <p> Template for constructing the JSON input-data sent to SageMaker. At event-evaluation,
     *             the placeholders for variable names in the template will be replaced with the variable
     *             values before being sent to SageMaker. </p>
     */
    jsonInputTemplate?: string;
    /**
     * <p> Template for constructing the CSV input-data sent to SageMaker. At event-evaluation,
     *             the placeholders for variable-names in the template will be replaced with the variable
     *             values before being sent to SageMaker. </p>
     */
    csvInputTemplate?: string;
}
export declare namespace ModelInputConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelInputConfiguration) => any;
}
export declare enum ModelEndpointStatus {
    ASSOCIATED = "ASSOCIATED",
    DISSOCIATED = "DISSOCIATED"
}
export declare enum ModelSource {
    SAGEMAKER = "SAGEMAKER"
}
export declare enum ModelOutputDataFormat {
    CSV = "TEXT_CSV",
    JSONLINES = "APPLICATION_JSONLINES"
}
/**
 * <p>Provides the Amazon Sagemaker model output configuration.</p>
 */
export interface ModelOutputConfiguration {
    /**
     * <p>The format of the model output configuration.</p>
     */
    format: ModelOutputDataFormat | string | undefined;
    /**
     * <p>A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. </p>
     */
    jsonKeyToVariableMap?: {
        [key: string]: string;
    };
    /**
     * <p>A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. </p>
     */
    csvIndexToVariableMap?: {
        [key: string]: string;
    };
}
export declare namespace ModelOutputConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModelOutputConfiguration) => any;
}
/**
 * <p>The Amazon SageMaker model.</p>
 */
export interface ExternalModel {
    /**
     * <p>The Amazon SageMaker model endpoints.</p>
     */
    modelEndpoint?: string;
    /**
     * <p>The source of the model.</p>
     */
    modelSource?: ModelSource | string;
    /**
     * <p>The role used to invoke the model. </p>
     */
    invokeModelEndpointRoleArn?: string;
    /**
     * <p>The input configuration.</p>
     */
    inputConfiguration?: ModelInputConfiguration;
    /**
     * <p>The output configuration.</p>
     */
    outputConfiguration?: ModelOutputConfiguration;
    /**
     * <p>The Amazon Fraud Detector status for the external model endpoint</p>
     */
    modelEndpointStatus?: ModelEndpointStatus | string;
    /**
     * <p>Timestamp of when the model was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>Timestamp of when the model was last created.</p>
     */
    createdTime?: string;
    /**
     * <p>The model ARN.</p>
     */
    arn?: string;
}
export declare namespace ExternalModel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExternalModel) => any;
}
export interface GetExternalModelsResult {
    /**
     * <p>Gets the Amazon SageMaker models.</p>
     */
    externalModels?: ExternalModel[];
    /**
     * <p>The next page token to be used in subsequent requests.</p>
     */
    nextToken?: string;
}
export declare namespace GetExternalModelsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetExternalModelsResult) => any;
}
/**
 * <p>The KMS key details.</p>
 */
export interface KMSKey {
    /**
     * <p>The encryption key ARN.</p>
     */
    kmsEncryptionKeyArn?: string;
}
export declare namespace KMSKey {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSKey) => any;
}
export interface GetKMSEncryptionKeyResult {
    /**
     * <p>The KMS encryption key.</p>
     */
    kmsKey?: KMSKey;
}
export declare namespace GetKMSEncryptionKeyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetKMSEncryptionKeyResult) => any;
}
export interface GetLabelsRequest {
    /**
     * <p>The name of the label or labels to get.</p>
     */
    name?: string;
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetLabelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLabelsRequest) => any;
}
/**
 * <p>The label details.</p>
 */
export interface Label {
    /**
     * <p>The label name.</p>
     */
    name?: string;
    /**
     * <p>The label description.</p>
     */
    description?: string;
    /**
     * <p>Timestamp of when the label was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>Timestamp of when the event type was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The label ARN.</p>
     */
    arn?: string;
}
export declare namespace Label {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Label) => any;
}
export interface GetLabelsResult {
    /**
     * <p>An array of labels.</p>
     */
    labels?: Label[];
    /**
     * <p>The next page token.</p>
     */
    nextToken?: string;
}
export declare namespace GetLabelsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLabelsResult) => any;
}
export interface GetModelsRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The next token for the subsequent request.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request. </p>
     */
    maxResults?: number;
}
export declare namespace GetModelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetModelsRequest) => any;
}
/**
 * <p>The model.</p>
 */
export interface Model {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The model description.</p>
     */
    description?: string;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName?: string;
    /**
     * <p>Timestamp of when the model was created.</p>
     */
    createdTime?: string;
    /**
     * <p>Timestamp of last time the model was updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The ARN of the model.</p>
     */
    arn?: string;
}
export declare namespace Model {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Model) => any;
}
export interface GetModelsResult {
    /**
     * <p>The next page token to be used in subsequent requests.</p>
     */
    nextToken?: string;
    /**
     * <p>The array of models.</p>
     */
    models?: Model[];
}
export declare namespace GetModelsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetModelsResult) => any;
}
export interface GetModelVersionRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber: string | undefined;
}
export declare namespace GetModelVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetModelVersionRequest) => any;
}
export interface GetModelVersionResult {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber?: string;
    /**
     * <p>The training data source.</p>
     */
    trainingDataSource?: TrainingDataSourceEnum | string;
    /**
     * <p>The training data schema.</p>
     */
    trainingDataSchema?: TrainingDataSchema;
    /**
     * <p>The event details.</p>
     */
    externalEventsDetail?: ExternalEventsDetail;
    /**
     * <p>The model version status.</p>
     * 	        <p>Possible values are:</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>TRAINING_IN_PROGRESS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TRAINING_COMPLETE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ACTIVATE_REQUESTED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ACTIVATE_IN_PROGRESS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ACTIVE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INACTIVATE_REQUESTED</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INACTIVATE_IN_PROGRESS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INACTIVE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ERROR</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The model version ARN.</p>
     */
    arn?: string;
}
export declare namespace GetModelVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetModelVersionResult) => any;
}
export interface GetOutcomesRequest {
    /**
     * <p>The name of the outcome or outcomes to get.</p>
     */
    name?: string;
    /**
     * <p>The next page token for the request. </p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request. </p>
     */
    maxResults?: number;
}
export declare namespace GetOutcomesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutcomesRequest) => any;
}
/**
 * <p>The outcome.</p>
 */
export interface Outcome {
    /**
     * <p>The outcome name.</p>
     */
    name?: string;
    /**
     * <p>The outcome description.</p>
     */
    description?: string;
    /**
     * <p>The timestamp when the outcome was last updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The timestamp when the outcome was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The outcome ARN.</p>
     */
    arn?: string;
}
export declare namespace Outcome {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Outcome) => any;
}
export interface GetOutcomesResult {
    /**
     * <p>The outcomes. </p>
     */
    outcomes?: Outcome[];
    /**
     * <p>The next page token for subsequent requests.</p>
     */
    nextToken?: string;
}
export declare namespace GetOutcomesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOutcomesResult) => any;
}
export interface GetRulesRequest {
    /**
     * <p>The rule ID.</p>
     */
    ruleId?: string;
    /**
     * <p>The detector ID.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The rule version.</p>
     */
    ruleVersion?: string;
    /**
     * <p>The next page token.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of rules to return for the request.</p>
     */
    maxResults?: number;
}
export declare namespace GetRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRulesRequest) => any;
}
/**
 * <p>The details of the rule.</p>
 */
export interface RuleDetail {
    /**
     * <p>The rule ID.</p>
     */
    ruleId?: string;
    /**
     * <p>The rule description.</p>
     */
    description?: string;
    /**
     * <p>The detector for which the rule is associated.</p>
     */
    detectorId?: string;
    /**
     * <p>The rule version.</p>
     */
    ruleVersion?: string;
    /**
     * <p>The rule expression.</p>
     */
    expression?: string;
    /**
     * <p>The rule language.</p>
     */
    language?: Language | string;
    /**
     * <p>The rule outcomes.</p>
     */
    outcomes?: string[];
    /**
     * <p>Timestamp of the last time the rule was updated.</p>
     */
    lastUpdatedTime?: string;
    /**
     * <p>The timestamp of when the rule was created.</p>
     */
    createdTime?: string;
    /**
     * <p>The rule ARN.</p>
     */
    arn?: string;
}
export declare namespace RuleDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RuleDetail) => any;
}
export interface GetRulesResult {
    /**
     * <p>The details of the requested rule.</p>
     */
    ruleDetails?: RuleDetail[];
    /**
     * <p>The next page token to be used in subsequent requests.</p>
     */
    nextToken?: string;
}
export declare namespace GetRulesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRulesResult) => any;
}
export interface GetVariablesRequest {
    /**
     * <p>The name of the variable. </p>
     */
    name?: string;
    /**
     * <p>The next page token of the get variable request. </p>
     */
    nextToken?: string;
    /**
     * <p>The max size per page determined for the get variable request. </p>
     */
    maxResults?: number;
}
export declare namespace GetVariablesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetVariablesRequest) => any;
}
export interface GetVariablesResult {
    /**
     * <p>The names of the variables returned. </p>
     */
    variables?: Variable[];
    /**
     * <p>The next page token to be used in subsequent requests. </p>
     */
    nextToken?: string;
}
export declare namespace GetVariablesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetVariablesResult) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN that specifies the resource whose tags you want to list.</p>
     */
    resourceARN: string | undefined;
    /**
     * <p>The next token from the previous results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of objects to return for the request. </p>
     */
    maxResults?: number;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResult {
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
    /**
     * <p>The next token for subsequent requests. </p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResult) => any;
}
export interface PutDetectorRequest {
    /**
     * <p>The detector ID. </p>
     */
    detectorId: string | undefined;
    /**
     * <p>The description of the detector.</p>
     */
    description?: string;
    /**
     * <p>The name of the event type.</p>
     */
    eventTypeName: string | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace PutDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutDetectorRequest) => any;
}
export interface PutDetectorResult {
}
export declare namespace PutDetectorResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutDetectorResult) => any;
}
export interface PutEntityTypeRequest {
    /**
     * <p>The name of the entity type.</p>
     */
    name: string | undefined;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace PutEntityTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutEntityTypeRequest) => any;
}
export interface PutEntityTypeResult {
}
export declare namespace PutEntityTypeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutEntityTypeResult) => any;
}
export interface PutEventTypeRequest {
    /**
     * <p>The name.</p>
     */
    name: string | undefined;
    /**
     * <p>The description of the event type.</p>
     */
    description?: string;
    /**
     * <p>The event type variables.</p>
     */
    eventVariables: string[] | undefined;
    /**
     * <p>The event type labels.</p>
     */
    labels?: string[];
    /**
     * <p>The entity type for the event type. Example entity types: customer, merchant, account.</p>
     */
    entityTypes: string[] | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace PutEventTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutEventTypeRequest) => any;
}
export interface PutEventTypeResult {
}
export declare namespace PutEventTypeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutEventTypeResult) => any;
}
export interface PutExternalModelRequest {
    /**
     * <p>The model endpoints name.</p>
     */
    modelEndpoint: string | undefined;
    /**
     * <p>The source of the model.</p>
     */
    modelSource: ModelSource | string | undefined;
    /**
     * <p>The IAM role used to invoke the model endpoint.</p>
     */
    invokeModelEndpointRoleArn: string | undefined;
    /**
     * <p>The model endpoint input configuration.</p>
     */
    inputConfiguration: ModelInputConfiguration | undefined;
    /**
     * <p>The model endpoint output configuration.</p>
     */
    outputConfiguration: ModelOutputConfiguration | undefined;
    /**
     * <p>The model endpoint’s status in Amazon Fraud Detector.</p>
     */
    modelEndpointStatus: ModelEndpointStatus | string | undefined;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace PutExternalModelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutExternalModelRequest) => any;
}
export interface PutExternalModelResult {
}
export declare namespace PutExternalModelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutExternalModelResult) => any;
}
export interface PutKMSEncryptionKeyRequest {
    /**
     * <p>The KMS encryption key ARN.</p>
     */
    kmsEncryptionKeyArn: string | undefined;
}
export declare namespace PutKMSEncryptionKeyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutKMSEncryptionKeyRequest) => any;
}
export interface PutKMSEncryptionKeyResult {
}
export declare namespace PutKMSEncryptionKeyResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutKMSEncryptionKeyResult) => any;
}
export interface PutLabelRequest {
    /**
     * <p>The label name.</p>
     */
    name: string | undefined;
    /**
     * <p>The label description.</p>
     */
    description?: string;
    /**
     * <p></p>
     */
    tags?: Tag[];
}
export declare namespace PutLabelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutLabelRequest) => any;
}
export interface PutLabelResult {
}
export declare namespace PutLabelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutLabelResult) => any;
}
export interface PutOutcomeRequest {
    /**
     * <p>The name of the outcome.</p>
     */
    name: string | undefined;
    /**
     * <p>The outcome description.</p>
     */
    description?: string;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace PutOutcomeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutOutcomeRequest) => any;
}
export interface PutOutcomeResult {
}
export declare namespace PutOutcomeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutOutcomeResult) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    resourceARN: string | undefined;
    /**
     * <p>The tags to assign to the resource.</p>
     */
    tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResult {
}
export declare namespace TagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResult) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The ARN of the resource from which to remove the tag.</p>
     */
    resourceARN: string | undefined;
    /**
     * <p>The resource ARN.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResult {
}
export declare namespace UntagResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResult) => any;
}
export interface UpdateDetectorVersionRequest {
    /**
     * <p>The parent detector ID for the detector version you want to update.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The detector version ID. </p>
     */
    detectorVersionId: string | undefined;
    /**
     * <p>The Amazon SageMaker model endpoints to include in the detector version.</p>
     */
    externalModelEndpoints: string[] | undefined;
    /**
     * <p>The rules to include in the detector version.</p>
     */
    rules: Rule[] | undefined;
    /**
     * <p>The detector version description. </p>
     */
    description?: string;
    /**
     * <p>The model versions to include in the detector version.</p>
     */
    modelVersions?: ModelVersion[];
    /**
     * <p>The rule execution mode to add to the detector.</p>
     * 	        <p>If you specify <code>FIRST_MATCHED</code>, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.</p>
     * 	        <p>If you specifiy <code>ALL_MATCHED</code>, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules. You can define and edit the rule mode at the detector version level, when it is in draft status.</p>
     *          <p>The default behavior is <code>FIRST_MATCHED</code>.</p>
     */
    ruleExecutionMode?: RuleExecutionMode | string;
}
export declare namespace UpdateDetectorVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionRequest) => any;
}
export interface UpdateDetectorVersionResult {
}
export declare namespace UpdateDetectorVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionResult) => any;
}
export interface UpdateDetectorVersionMetadataRequest {
    /**
     * <p>The detector ID.</p>
     */
    detectorId: string | undefined;
    /**
     * <p>The detector version ID. </p>
     */
    detectorVersionId: string | undefined;
    /**
     * <p>The description.</p>
     */
    description: string | undefined;
}
export declare namespace UpdateDetectorVersionMetadataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionMetadataRequest) => any;
}
export interface UpdateDetectorVersionMetadataResult {
}
export declare namespace UpdateDetectorVersionMetadataResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionMetadataResult) => any;
}
export interface UpdateDetectorVersionStatusRequest {
    /**
     * <p>The detector ID. </p>
     */
    detectorId: string | undefined;
    /**
     * <p>The detector version ID. </p>
     */
    detectorVersionId: string | undefined;
    /**
     * <p>The new status.</p>
     */
    status: DetectorVersionStatus | string | undefined;
}
export declare namespace UpdateDetectorVersionStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionStatusRequest) => any;
}
export interface UpdateDetectorVersionStatusResult {
}
export declare namespace UpdateDetectorVersionStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorVersionStatusResult) => any;
}
export interface UpdateModelRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The new model description.</p>
     */
    description?: string;
}
export declare namespace UpdateModelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelRequest) => any;
}
export interface UpdateModelResult {
}
export declare namespace UpdateModelResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelResult) => any;
}
export interface UpdateModelVersionRequest {
    /**
     * <p>The model ID.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The major version number.</p>
     */
    majorVersionNumber: string | undefined;
    /**
     * <p>The event details.</p>
     */
    externalEventsDetail?: ExternalEventsDetail;
    /**
     * <p>A collection of key and value pairs.</p>
     */
    tags?: Tag[];
}
export declare namespace UpdateModelVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelVersionRequest) => any;
}
export interface UpdateModelVersionResult {
    /**
     * <p>The model ID.</p>
     */
    modelId?: string;
    /**
     * <p>The model type.</p>
     */
    modelType?: ModelTypeEnum | string;
    /**
     * <p>The model version number of the model version updated.</p>
     */
    modelVersionNumber?: string;
    /**
     * <p>The status of the updated model version.</p>
     */
    status?: string;
}
export declare namespace UpdateModelVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelVersionResult) => any;
}
export declare enum ModelVersionStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    TRAINING_CANCELLED = "TRAINING_CANCELLED"
}
export interface UpdateModelVersionStatusRequest {
    /**
     * <p>The model ID of the model version to update.</p>
     */
    modelId: string | undefined;
    /**
     * <p>The model type.</p>
     */
    modelType: ModelTypeEnum | string | undefined;
    /**
     * <p>The model version number.</p>
     */
    modelVersionNumber: string | undefined;
    /**
     * <p>The model version status.</p>
     */
    status: ModelVersionStatus | string | undefined;
}
export declare namespace UpdateModelVersionStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelVersionStatusRequest) => any;
}
export interface UpdateModelVersionStatusResult {
}
export declare namespace UpdateModelVersionStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateModelVersionStatusResult) => any;
}
export interface UpdateRuleMetadataRequest {
    /**
     * <p>The rule to update.</p>
     */
    rule: Rule | undefined;
    /**
     * <p>The rule description.</p>
     */
    description: string | undefined;
}
export declare namespace UpdateRuleMetadataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRuleMetadataRequest) => any;
}
export interface UpdateRuleMetadataResult {
}
export declare namespace UpdateRuleMetadataResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRuleMetadataResult) => any;
}
export interface UpdateRuleVersionRequest {
    /**
     * <p>The rule to update.</p>
     */
    rule: Rule | undefined;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The rule expression.</p>
     */
    expression: string | undefined;
    /**
     * <p>The language.</p>
     */
    language: Language | string | undefined;
    /**
     * <p>The outcomes.</p>
     */
    outcomes: string[] | undefined;
    /**
     * <p>The tags to assign to the rule version.</p>
     */
    tags?: Tag[];
}
export declare namespace UpdateRuleVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRuleVersionRequest) => any;
}
export interface UpdateRuleVersionResult {
    /**
     * <p>The new rule version that was created.</p>
     */
    rule?: Rule;
}
export declare namespace UpdateRuleVersionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRuleVersionResult) => any;
}
export interface UpdateVariableRequest {
    /**
     * <p>The name of the variable.</p>
     */
    name: string | undefined;
    /**
     * <p>The new default value of the variable.</p>
     */
    defaultValue?: string;
    /**
     * <p>The new description.</p>
     */
    description?: string;
    /**
     * <p>The variable type. For more information see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types">Variable types</a>.</p>
     */
    variableType?: string;
}
export declare namespace UpdateVariableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateVariableRequest) => any;
}
export interface UpdateVariableResult {
}
export declare namespace UpdateVariableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateVariableResult) => any;
}
