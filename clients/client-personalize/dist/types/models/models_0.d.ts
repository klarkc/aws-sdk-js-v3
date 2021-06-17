import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Describes an algorithm image.</p>
 */
export interface AlgorithmImage {
    /**
     * <p>The name of the algorithm image.</p>
     */
    name?: string;
    /**
     * <p>The URI of the Docker container for the algorithm image.</p>
     */
    dockerURI: string | undefined;
}
export declare namespace AlgorithmImage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AlgorithmImage) => any;
}
/**
 * <p>Provides the name and default range of a categorical hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultCategoricalHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>A list of the categories for the hyperparameter.</p>
     */
    values?: string[];
    /**
     * <p>Whether the hyperparameter is tunable.</p>
     */
    isTunable?: boolean;
}
export declare namespace DefaultCategoricalHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultCategoricalHyperParameterRange) => any;
}
/**
 * <p>Provides the name and default range of a continuous hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultContinuousHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>The minimum allowable value for the hyperparameter.</p>
     */
    minValue?: number;
    /**
     * <p>The maximum allowable value for the hyperparameter.</p>
     */
    maxValue?: number;
    /**
     * <p>Whether the hyperparameter is tunable.</p>
     */
    isTunable?: boolean;
}
export declare namespace DefaultContinuousHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultContinuousHyperParameterRange) => any;
}
/**
 * <p>Provides the name and default range of a integer-valued hyperparameter
 *       and whether the hyperparameter is tunable. A tunable hyperparameter can
 *       have its value determined during hyperparameter optimization (HPO).</p>
 */
export interface DefaultIntegerHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>The minimum allowable value for the hyperparameter.</p>
     */
    minValue?: number;
    /**
     * <p>The maximum allowable value for the hyperparameter.</p>
     */
    maxValue?: number;
    /**
     * <p>Indicates whether the hyperparameter is tunable.</p>
     */
    isTunable?: boolean;
}
export declare namespace DefaultIntegerHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultIntegerHyperParameterRange) => any;
}
/**
 * <p>Specifies the hyperparameters and their default ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface DefaultHyperParameterRanges {
    /**
     * <p>The integer-valued hyperparameters and their default ranges.</p>
     */
    integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];
    /**
     * <p>The continuous hyperparameters and their default ranges.</p>
     */
    continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];
    /**
     * <p>The categorical hyperparameters and their default ranges.</p>
     */
    categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];
}
export declare namespace DefaultHyperParameterRanges {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultHyperParameterRanges) => any;
}
/**
 * <p>Describes a custom algorithm.</p>
 */
export interface Algorithm {
    /**
     * <p>The name of the algorithm.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
     */
    algorithmArn?: string;
    /**
     * <p>The URI of the Docker container for the algorithm image.</p>
     */
    algorithmImage?: AlgorithmImage;
    /**
     * <p>Specifies the default hyperparameters.</p>
     */
    defaultHyperParameters?: {
        [key: string]: string;
    };
    /**
     * <p>Specifies the default hyperparameters, their ranges, and whether they
     *       are tunable. A tunable hyperparameter can
     *       have its value determined during hyperparameter optimization (HPO).</p>
     */
    defaultHyperParameterRanges?: DefaultHyperParameterRanges;
    /**
     * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
     */
    defaultResourceConfig?: {
        [key: string]: string;
    };
    /**
     * <p>The training input mode.</p>
     */
    trainingInputMode?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the role.</p>
     */
    roleArn?: string;
    /**
     * <p>The date and time (in Unix time) that the algorithm was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the algorithm was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace Algorithm {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Algorithm) => any;
}
/**
 * <p>The configuration details of a batch inference job.</p>
 */
export interface BatchInferenceJobConfig {
    /**
     * <p>A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and
     *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
     *       recommending items.
     *       See <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>.</p>
     */
    itemExplorationConfig?: {
        [key: string]: string;
    };
}
export declare namespace BatchInferenceJobConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchInferenceJobConfig) => any;
}
/**
 * <p>The configuration details of an Amazon S3 input or output bucket.</p>
 */
export interface S3DataConfig {
    /**
     * <p>The file path of the Amazon S3 bucket.</p>
     */
    path: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon Key Management Service (KMS) key that Amazon Personalize uses to
     *       encrypt or decrypt the input and output files of a batch inference job.</p>
     */
    kmsKeyArn?: string;
}
export declare namespace S3DataConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3DataConfig) => any;
}
/**
 * <p>The input configuration of a batch inference job.</p>
 */
export interface BatchInferenceJobInput {
    /**
     * <p>The URI of the Amazon S3 location that contains your input data. The Amazon S3 bucket must be in the
     *       same region as the API endpoint you are calling.</p>
     */
    s3DataSource: S3DataConfig | undefined;
}
export declare namespace BatchInferenceJobInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchInferenceJobInput) => any;
}
/**
 * <p>The output configuration parameters of a batch inference job.</p>
 */
export interface BatchInferenceJobOutput {
    /**
     * <p>Information on the Amazon S3 bucket in which the batch inference job's output is stored.</p>
     */
    s3DataDestination: S3DataConfig | undefined;
}
export declare namespace BatchInferenceJobOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchInferenceJobOutput) => any;
}
export interface CreateBatchInferenceJobRequest {
    /**
     * <p>The name of the batch inference job to create.</p>
     */
    jobName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version that will be used to generate the
     *       batch inference recommendations.</p>
     */
    solutionVersionArn: string | undefined;
    /**
     * <p>The ARN of the filter to apply to the batch inference job. For more information on using
     *       filters, see
     *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter-batch.html">Filtering Batch Recommendations</a>..</p>
     */
    filterArn?: string;
    /**
     * <p>The number of recommendations to retreive.</p>
     */
    numResults?: number;
    /**
     * <p>The Amazon S3 path that leads to the input file to base your recommendations on. The input
     *       material must be in JSON format.</p>
     */
    jobInput: BatchInferenceJobInput | undefined;
    /**
     * <p>The path to the Amazon S3 bucket where the job's output will be stored.</p>
     */
    jobOutput: BatchInferenceJobOutput | undefined;
    /**
     * <p>The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output
     *       Amazon S3 buckets respectively.</p>
     */
    roleArn: string | undefined;
    /**
     * <p>The configuration details of a batch inference job.</p>
     */
    batchInferenceJobConfig?: BatchInferenceJobConfig;
}
export declare namespace CreateBatchInferenceJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBatchInferenceJobRequest) => any;
}
export interface CreateBatchInferenceJobResponse {
    /**
     * <p>The ARN of the batch inference job.</p>
     */
    batchInferenceJobArn?: string;
}
export declare namespace CreateBatchInferenceJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateBatchInferenceJobResponse) => any;
}
/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidInputException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidInputException) => any;
}
/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
/**
 * <p>Could not find the specified resource.</p>
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
 * <p>The configuration details of a campaign.</p>
 */
export interface CampaignConfig {
    /**
     * <p>A string to string map specifying the exploration configuration hyperparameters, including <code>explorationWeight</code> and
     *       <code>explorationItemAgeCutOff</code>, you want to use to configure the amount of item exploration Amazon Personalize uses when
     *       recommending items. Provide <code>itemExplorationConfig</code> data only if your solution uses the
     *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a> recipe.</p>
     */
    itemExplorationConfig?: {
        [key: string]: string;
    };
}
export declare namespace CampaignConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CampaignConfig) => any;
}
export interface CreateCampaignRequest {
    /**
     * <p>A name for the new campaign. The campaign name must be unique within your account.</p>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version to deploy.</p>
     */
    solutionVersionArn: string | undefined;
    /**
     * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
     *       Amazon Personalize will support.</p>
     */
    minProvisionedTPS: number | undefined;
    /**
     * <p>The configuration details of a campaign.</p>
     */
    campaignConfig?: CampaignConfig;
}
export declare namespace CreateCampaignRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCampaignRequest) => any;
}
export interface CreateCampaignResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign.</p>
     */
    campaignArn?: string;
}
export declare namespace CreateCampaignResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCampaignResponse) => any;
}
export interface CreateDatasetRequest {
    /**
     * <p>The name for the dataset.</p>
     */
    name: string | undefined;
    /**
     * <p>The ARN of the schema to associate with the dataset. The schema defines the dataset
     *       fields.</p>
     */
    schemaArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group to add the dataset to.</p>
     */
    datasetGroupArn: string | undefined;
    /**
     * <p>The type of dataset.</p>
     *          <p>One of the following (case insensitive) values:</p>
     *          <ul>
     *             <li>
     *                <p>Interactions</p>
     *             </li>
     *             <li>
     *                <p>Items</p>
     *             </li>
     *             <li>
     *                <p>Users</p>
     *             </li>
     *          </ul>
     */
    datasetType: string | undefined;
}
export declare namespace CreateDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetRequest) => any;
}
export interface CreateDatasetResponse {
    /**
     * <p>The ARN of the dataset.</p>
     */
    datasetArn?: string;
}
export declare namespace CreateDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetResponse) => any;
}
export declare enum IngestionMode {
    ALL = "ALL",
    BULK = "BULK",
    PUT = "PUT"
}
/**
 * <p>The output configuration parameters of a dataset export job.</p>
 */
export interface DatasetExportJobOutput {
    /**
     * <p>The configuration details of an Amazon S3 input or output bucket.</p>
     */
    s3DataDestination: S3DataConfig | undefined;
}
export declare namespace DatasetExportJobOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetExportJobOutput) => any;
}
export interface CreateDatasetExportJobRequest {
    /**
     * <p>The name for the dataset export job.</p>
     */
    jobName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset that contains the data to export.</p>
     */
    datasetArn: string | undefined;
    /**
     * <p>The data to export, based on how you imported the data. You can choose to export only <code>BULK</code> data that you imported using a dataset import job,
     *       only <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
     *       for both types. The default value is <code>PUT</code>.
     *     </p>
     */
    ingestionMode?: IngestionMode | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management service role that has permissions to add data to your
     *       output Amazon S3 bucket.</p>
     */
    roleArn: string | undefined;
    /**
     * <p>The path to the Amazon S3 bucket where the job's output is stored.</p>
     */
    jobOutput: DatasetExportJobOutput | undefined;
}
export declare namespace CreateDatasetExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetExportJobRequest) => any;
}
export interface CreateDatasetExportJobResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
     */
    datasetExportJobArn?: string;
}
export declare namespace CreateDatasetExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetExportJobResponse) => any;
}
export interface CreateDatasetGroupRequest {
    /**
     * <p>The name for the new dataset group.</p>
     */
    name: string | undefined;
    /**
     * <p>The ARN of the IAM role that has permissions to access the KMS key. Supplying an IAM
     *       role is only valid when also specifying a KMS key.</p>
     */
    roleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of a KMS key used to encrypt the datasets.</p>
     */
    kmsKeyArn?: string;
}
export declare namespace CreateDatasetGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetGroupRequest) => any;
}
export interface CreateDatasetGroupResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the new dataset group.</p>
     */
    datasetGroupArn?: string;
}
export declare namespace CreateDatasetGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetGroupResponse) => any;
}
/**
 * <p>Describes the data source that contains the data to upload to a dataset.</p>
 */
export interface DataSource {
    /**
     * <p>The path to the Amazon S3 bucket where the data that you want to upload to your dataset is
     *       stored. For example: </p>
     *          <p>
     *             <code>s3://bucket-name/folder-name/</code>
     *          </p>
     */
    dataLocation?: string;
}
export declare namespace DataSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataSource) => any;
}
export interface CreateDatasetImportJobRequest {
    /**
     * <p>The name for the dataset import job.</p>
     */
    jobName: string | undefined;
    /**
     * <p>The ARN of the dataset that receives the imported data.</p>
     */
    datasetArn: string | undefined;
    /**
     * <p>The Amazon S3 bucket that contains the training data to import.</p>
     */
    dataSource: DataSource | undefined;
    /**
     * <p>The ARN of the IAM role that has permissions to read from the Amazon S3 data source.</p>
     */
    roleArn: string | undefined;
}
export declare namespace CreateDatasetImportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetImportJobRequest) => any;
}
export interface CreateDatasetImportJobResponse {
    /**
     * <p>The ARN of the dataset import job.</p>
     */
    datasetImportJobArn?: string;
}
export declare namespace CreateDatasetImportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetImportJobResponse) => any;
}
export interface CreateEventTrackerRequest {
    /**
     * <p>The name for the event tracker.</p>
     */
    name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
     */
    datasetGroupArn: string | undefined;
}
export declare namespace CreateEventTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEventTrackerRequest) => any;
}
export interface CreateEventTrackerResponse {
    /**
     * <p>The ARN of the event tracker.</p>
     */
    eventTrackerArn?: string;
    /**
     * <p>The ID of the event tracker. Include this ID in requests to the
     *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
     */
    trackingId?: string;
}
export declare namespace CreateEventTrackerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEventTrackerResponse) => any;
}
export interface CreateFilterRequest {
    /**
     * <p>The name of the filter to create.</p>
     */
    name: string | undefined;
    /**
     * <p>The ARN of the dataset group that the filter will belong to.</p>
     */
    datasetGroupArn: string | undefined;
    /**
     * <p>The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules.
     *             For information about filter expression structure and syntax, see
     *              <a>filter-expressions</a>.</p>
     */
    filterExpression: string | undefined;
}
export declare namespace CreateFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFilterRequest) => any;
}
export interface CreateFilterResponse {
    /**
     * <p>The ARN of the new filter.</p>
     */
    filterArn?: string;
}
export declare namespace CreateFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFilterResponse) => any;
}
export interface CreateSchemaRequest {
    /**
     * <p>The name for the schema.</p>
     */
    name: string | undefined;
    /**
     * <p>A schema in Avro JSON format.</p>
     */
    schema: string | undefined;
}
export declare namespace CreateSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSchemaRequest) => any;
}
export interface CreateSchemaResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the created schema.</p>
     */
    schemaArn?: string;
}
export declare namespace CreateSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSchemaResponse) => any;
}
/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a>CreateSolution</a>), Amazon Personalize
 *       determines which recipe, from the specified list, optimizes the given metric.
 *       Amazon Personalize then uses that recipe for the solution.</p>
 */
export interface AutoMLConfig {
    /**
     * <p>The metric to optimize.</p>
     */
    metricName?: string;
    /**
     * <p>The list of candidate recipes.</p>
     */
    recipeList?: string[];
}
export declare namespace AutoMLConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoMLConfig) => any;
}
/**
 * <p>Provides the name and range of a categorical hyperparameter.</p>
 */
export interface CategoricalHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>A list of the categories for the hyperparameter.</p>
     */
    values?: string[];
}
export declare namespace CategoricalHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CategoricalHyperParameterRange) => any;
}
/**
 * <p>Provides the name and range of a continuous hyperparameter.</p>
 */
export interface ContinuousHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>The minimum allowable value for the hyperparameter.</p>
     */
    minValue?: number;
    /**
     * <p>The maximum allowable value for the hyperparameter.</p>
     */
    maxValue?: number;
}
export declare namespace ContinuousHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ContinuousHyperParameterRange) => any;
}
/**
 * <p>Provides the name and range of an integer-valued hyperparameter.</p>
 */
export interface IntegerHyperParameterRange {
    /**
     * <p>The name of the hyperparameter.</p>
     */
    name?: string;
    /**
     * <p>The minimum allowable value for the hyperparameter.</p>
     */
    minValue?: number;
    /**
     * <p>The maximum allowable value for the hyperparameter.</p>
     */
    maxValue?: number;
}
export declare namespace IntegerHyperParameterRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IntegerHyperParameterRange) => any;
}
/**
 * <p>Specifies the hyperparameters and their ranges.
 *     Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface HyperParameterRanges {
    /**
     * <p>The integer-valued hyperparameters and their ranges.</p>
     */
    integerHyperParameterRanges?: IntegerHyperParameterRange[];
    /**
     * <p>The continuous hyperparameters and their ranges.</p>
     */
    continuousHyperParameterRanges?: ContinuousHyperParameterRange[];
    /**
     * <p>The categorical hyperparameters and their ranges.</p>
     */
    categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];
}
export declare namespace HyperParameterRanges {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HyperParameterRanges) => any;
}
/**
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         at this time.</p>
 *          </note>
 */
export interface HPOObjective {
    /**
     * <p>The type of the metric. Valid values are <code>Maximize</code> and <code>Minimize</code>.</p>
     */
    type?: string;
    /**
     * <p>The name of the metric.</p>
     */
    metricName?: string;
    /**
     * <p>A regular expression for finding the metric in the training job logs.</p>
     */
    metricRegex?: string;
}
export declare namespace HPOObjective {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HPOObjective) => any;
}
/**
 * <p>Describes the resource configuration for hyperparameter optimization (HPO).</p>
 */
export interface HPOResourceConfig {
    /**
     * <p>The maximum number of training
     *       jobs when you create a
     *       solution
     *       version.
     *       The maximum value for <code>maxNumberOfTrainingJobs</code> is
     *       <code>40</code>.</p>
     */
    maxNumberOfTrainingJobs?: string;
    /**
     * <p>The maximum number of parallel training
     *       jobs when you create a
     *       solution
     *       version.
     *       The maximum value for <code>maxParallelTrainingJobs</code> is
     *       <code>10</code>.</p>
     */
    maxParallelTrainingJobs?: string;
}
export declare namespace HPOResourceConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HPOResourceConfig) => any;
}
/**
 * <p>Describes the properties for hyperparameter optimization (HPO).</p>
 */
export interface HPOConfig {
    /**
     * <p>The metric to optimize during HPO.</p>
     *          <note>
     *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
     *         at this time.</p>
     *          </note>
     */
    hpoObjective?: HPOObjective;
    /**
     * <p>Describes the resource configuration for HPO.</p>
     */
    hpoResourceConfig?: HPOResourceConfig;
    /**
     * <p>The hyperparameters and their allowable ranges.</p>
     */
    algorithmHyperParameterRanges?: HyperParameterRanges;
}
export declare namespace HPOConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HPOConfig) => any;
}
export declare enum ObjectiveSensitivity {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    OFF = "OFF"
}
/**
 * <p>Describes the additional objective for the solution, such as maximizing streaming
 *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
 */
export interface OptimizationObjective {
    /**
     * <p>The numerical metadata column in an Items dataset related to the optimization objective. For example, VIDEO_LENGTH (to maximize streaming minutes), or PRICE (to maximize revenue).</p>
     */
    itemAttribute?: string;
    /**
     * <p>Specifies how Amazon Personalize balances the importance of your optimization objective versus relevance.</p>
     */
    objectiveSensitivity?: ObjectiveSensitivity | string;
}
export declare namespace OptimizationObjective {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OptimizationObjective) => any;
}
/**
 * <p>Describes the configuration properties for the solution.</p>
 */
export interface SolutionConfig {
    /**
     * <p>Only events with a value greater than or equal to this threshold are
     *       used for training a model.</p>
     */
    eventValueThreshold?: string;
    /**
     * <p>Describes the properties for hyperparameter optimization (HPO).</p>
     */
    hpoConfig?: HPOConfig;
    /**
     * <p>Lists the hyperparameter names and ranges.</p>
     */
    algorithmHyperParameters?: {
        [key: string]: string;
    };
    /**
     * <p>Lists the feature transformation parameters.</p>
     */
    featureTransformationParameters?: {
        [key: string]: string;
    };
    /**
     * <p>The <a>AutoMLConfig</a> object containing a list of recipes to search
     *       when AutoML is performed.</p>
     */
    autoMLConfig?: AutoMLConfig;
    /**
     * <p>Describes the additional objective for the solution, such as maximizing streaming
     *       minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.</p>
     */
    optimizationObjective?: OptimizationObjective;
}
export declare namespace SolutionConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SolutionConfig) => any;
}
export interface CreateSolutionRequest {
    /**
     * <p>The name for the solution.</p>
     */
    name: string | undefined;
    /**
     * <p>Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.
     *       The default is <code>false</code>.</p>
     *          <p>When performing AutoML, this parameter is always <code>true</code> and you
     *       should not set it to <code>false</code>.</p>
     */
    performHPO?: boolean;
    /**
     * <p>Whether to perform automated machine learning (AutoML). The default is <code>false</code>.
     *       For this case, you must specify <code>recipeArn</code>.</p>
     *          <p>When set to <code>true</code>, Amazon Personalize analyzes your training data and selects
     *       the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit
     *       <code>recipeArn</code>. Amazon Personalize determines the optimal recipe by running tests with
     *       different values for the hyperparameters.
     *       AutoML lengthens the training process as compared to selecting a specific recipe.</p>
     */
    performAutoML?: boolean;
    /**
     * <p>The ARN of the recipe to use for model training. Only specified when
     *       <code>performAutoML</code> is false.</p>
     */
    recipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
     */
    datasetGroupArn: string | undefined;
    /**
     * <p>When your have multiple event types (using an <code>EVENT_TYPE</code> schema field),
     *       this parameter specifies which event type (for example, 'click' or 'like') is used for
     *       training the model.</p>
     *          <p>If you do not provide an <code>eventType</code>, Amazon Personalize will use all interactions for training with
     *        equal weight regardless of type.</p>
     */
    eventType?: string;
    /**
     * <p>The configuration to use with the solution. When <code>performAutoML</code> is set to
     *       true, Amazon Personalize only evaluates the <code>autoMLConfig</code> section
     *       of the solution configuration.</p>
     *          <note>
     *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
     *         at this time.</p>
     *          </note>
     */
    solutionConfig?: SolutionConfig;
}
export declare namespace CreateSolutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSolutionRequest) => any;
}
export interface CreateSolutionResponse {
    /**
     * <p>The ARN of the solution.</p>
     */
    solutionArn?: string;
}
export declare namespace CreateSolutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSolutionResponse) => any;
}
export declare enum TrainingMode {
    FULL = "FULL",
    UPDATE = "UPDATE"
}
export interface CreateSolutionVersionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution containing the training configuration
     *       information.</p>
     */
    solutionArn: string | undefined;
    /**
     * <p>The scope of training to be performed when creating the solution version. The
     *         <code>FULL</code> option trains the solution version based on the entirety of the input
     *       solution's training data, while the <code>UPDATE</code> option processes only the data that
     *       has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to
     *       incrementally update your solution version instead of creating an entirely new one.</p>
     *          <important>
     *             <p>The <code>UPDATE</code> option can only be used when you already have an active solution
     *         version created from the input solution using the <code>FULL</code> option and the input
     *         solution was trained with the
     *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>
     *         recipe or the
     *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p>
     *          </important>
     */
    trainingMode?: TrainingMode | string;
}
export declare namespace CreateSolutionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSolutionVersionRequest) => any;
}
export interface CreateSolutionVersionResponse {
    /**
     * <p>The ARN of the new solution version.</p>
     */
    solutionVersionArn?: string;
}
export declare namespace CreateSolutionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSolutionVersionResponse) => any;
}
export interface DeleteCampaignRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign to delete.</p>
     */
    campaignArn: string | undefined;
}
export declare namespace DeleteCampaignRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteCampaignRequest) => any;
}
export interface DeleteDatasetRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
     */
    datasetArn: string | undefined;
}
export declare namespace DeleteDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDatasetRequest) => any;
}
export interface DeleteDatasetGroupRequest {
    /**
     * <p>The ARN of the dataset group to delete.</p>
     */
    datasetGroupArn: string | undefined;
}
export declare namespace DeleteDatasetGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDatasetGroupRequest) => any;
}
export interface DeleteEventTrackerRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the event tracker to delete.</p>
     */
    eventTrackerArn: string | undefined;
}
export declare namespace DeleteEventTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEventTrackerRequest) => any;
}
export interface DeleteFilterRequest {
    /**
     * <p>The ARN of the filter to delete.</p>
     */
    filterArn: string | undefined;
}
export declare namespace DeleteFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFilterRequest) => any;
}
export interface DeleteSchemaRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the schema to delete.</p>
     */
    schemaArn: string | undefined;
}
export declare namespace DeleteSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSchemaRequest) => any;
}
export interface DeleteSolutionRequest {
    /**
     * <p>The ARN of the solution to delete.</p>
     */
    solutionArn: string | undefined;
}
export declare namespace DeleteSolutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSolutionRequest) => any;
}
export interface DescribeAlgorithmRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the algorithm to describe.</p>
     */
    algorithmArn: string | undefined;
}
export declare namespace DescribeAlgorithmRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAlgorithmRequest) => any;
}
export interface DescribeAlgorithmResponse {
    /**
     * <p>A listing of the properties of the algorithm.</p>
     */
    algorithm?: Algorithm;
}
export declare namespace DescribeAlgorithmResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAlgorithmResponse) => any;
}
export interface DescribeBatchInferenceJobRequest {
    /**
     * <p>The ARN of the batch inference job to describe.</p>
     */
    batchInferenceJobArn: string | undefined;
}
export declare namespace DescribeBatchInferenceJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBatchInferenceJobRequest) => any;
}
/**
 * <p>Contains information on a batch inference job.</p>
 */
export interface BatchInferenceJob {
    /**
     * <p>The name of the batch inference job.</p>
     */
    jobName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
     */
    batchInferenceJobArn?: string;
    /**
     * <p>The ARN of the filter used on the batch inference job.</p>
     */
    filterArn?: string;
    /**
     * <p>If the batch inference job failed, the reason for the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference job
     *       was created.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>The number of recommendations generated by the batch inference job. This number includes
     *       the error messages generated for failed input records.</p>
     */
    numResults?: number;
    /**
     * <p>The Amazon S3 path that leads to the input data used to generate the batch inference
     *       job.</p>
     */
    jobInput?: BatchInferenceJobInput;
    /**
     * <p>The Amazon S3 bucket that contains the output data generated by the batch inference job.</p>
     */
    jobOutput?: BatchInferenceJobOutput;
    /**
     * <p>A string to string map of the configuration details of a batch inference job.</p>
     */
    batchInferenceJobConfig?: BatchInferenceJobConfig;
    /**
     * <p>The ARN of the Amazon Identity and Access Management (IAM) role that requested the batch inference job.</p>
     */
    roleArn?: string;
    /**
     * <p>The status of the batch inference job. The status is one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>PENDING</p>
     *             </li>
     *             <li>
     *                <p>IN PROGRESS</p>
     *             </li>
     *             <li>
     *                <p>ACTIVE</p>
     *             </li>
     *             <li>
     *                <p>CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The time at which the batch inference job was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The time at which the batch inference job was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace BatchInferenceJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchInferenceJob) => any;
}
export interface DescribeBatchInferenceJobResponse {
    /**
     * <p>Information on the specified batch inference job.</p>
     */
    batchInferenceJob?: BatchInferenceJob;
}
export declare namespace DescribeBatchInferenceJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBatchInferenceJobResponse) => any;
}
export interface DescribeCampaignRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign.</p>
     */
    campaignArn: string | undefined;
}
export declare namespace DescribeCampaignRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCampaignRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
 *       <a>DescribeCampaign</a> API.</p>
 */
export interface CampaignUpdateSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the deployed solution version.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
     *       Amazon Personalize will support.</p>
     */
    minProvisionedTPS?: number;
    /**
     * <p>The configuration details of a campaign.</p>
     */
    campaignConfig?: CampaignConfig;
    /**
     * <p>The status of the campaign update.</p>
     *          <p>A campaign update can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>If a campaign update fails, the reason behind the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The date and time (in Unix time) that the campaign update was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the campaign update was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace CampaignUpdateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CampaignUpdateSummary) => any;
}
/**
 * <p>Describes a deployed solution version, otherwise known as a campaign.
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export interface Campaign {
    /**
     * <p>The name of the campaign.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign. </p>
     */
    campaignArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of a specific version of the solution.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>Specifies the requested minimum provisioned transactions (recommendations) per second.</p>
     */
    minProvisionedTPS?: number;
    /**
     * <p>The configuration details of a campaign.</p>
     */
    campaignConfig?: CampaignConfig;
    /**
     * <p>The status of the campaign.</p>
     *          <p>A campaign can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>If a campaign fails, the reason behind the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The date and time (in Unix format) that the campaign was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix format) that the campaign was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the
     *       <a>DescribeCampaign</a> API.</p>
     */
    latestCampaignUpdate?: CampaignUpdateSummary;
}
export declare namespace Campaign {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Campaign) => any;
}
export interface DescribeCampaignResponse {
    /**
     * <p>The properties of the campaign.</p>
     */
    campaign?: Campaign;
}
export declare namespace DescribeCampaignResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCampaignResponse) => any;
}
export interface DescribeDatasetRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset to describe.</p>
     */
    datasetArn: string | undefined;
}
export declare namespace DescribeDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetRequest) => any;
}
/**
 * <p>Provides metadata for a dataset.</p>
 */
export interface Dataset {
    /**
     * <p>The name of the dataset.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset that you want metadata for.</p>
     */
    datasetArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>One of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>Interactions</p>
     *             </li>
     *             <li>
     *                <p>Items</p>
     *             </li>
     *             <li>
     *                <p>Users</p>
     *             </li>
     *          </ul>
     */
    datasetType?: string;
    /**
     * <p>The ARN of the associated schema.</p>
     */
    schemaArn?: string;
    /**
     * <p>The status of the dataset.</p>
     *          <p>A dataset can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The creation date and time (in Unix time) of the dataset.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>A time stamp that shows when the dataset was updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace Dataset {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Dataset) => any;
}
export interface DescribeDatasetResponse {
    /**
     * <p>A listing of the dataset's properties.</p>
     */
    dataset?: Dataset;
}
export declare namespace DescribeDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetResponse) => any;
}
export interface DescribeDatasetExportJobRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset export job to describe.</p>
     */
    datasetExportJobArn: string | undefined;
}
export declare namespace DescribeDatasetExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetExportJobRequest) => any;
}
/**
 * <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a>CreateDatasetExportJob</a>.</p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 */
export interface DatasetExportJob {
    /**
     * <p>The name of the export job.</p>
     */
    jobName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
     */
    datasetExportJobArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset to export.</p>
     */
    datasetArn?: string;
    /**
     * <p>The data to export, based on how you imported the data. You can choose to export <code>BULK</code> data that you imported using a dataset import job,
     *       <code>PUT</code> data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or <code>ALL</code>
     *       for both types. The default value is <code>PUT</code>.
     *     </p>
     */
    ingestionMode?: IngestionMode | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management service role that has permissions to add data to your
     *       output Amazon S3 bucket.</p>
     */
    roleArn?: string;
    /**
     * <p>The status of the dataset export job.</p>
     *          <p>A dataset export job can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The path to the Amazon S3 bucket where the job's output is stored.  For example:</p>
     *          <p>
     *             <code>s3://bucket-name/folder-name/</code>
     *          </p>
     */
    jobOutput?: DatasetExportJobOutput;
    /**
     * <p>The creation date and time (in Unix time) of the dataset export job.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) the status of the dataset export job was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a dataset export job fails, provides the reason why.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetExportJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetExportJob) => any;
}
export interface DescribeDatasetExportJobResponse {
    /**
     * <p>Information about the dataset export job, including the status.</p>
     *          <p>The status is one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING</p>
     *             </li>
     *             <li>
     *                <p>CREATE IN_PROGRESS</p>
     *             </li>
     *             <li>
     *                <p>ACTIVE</p>
     *             </li>
     *             <li>
     *                <p>CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    datasetExportJob?: DatasetExportJob;
}
export declare namespace DescribeDatasetExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetExportJobResponse) => any;
}
export interface DescribeDatasetGroupRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group to describe.</p>
     */
    datasetGroupArn: string | undefined;
}
export declare namespace DescribeDatasetGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetGroupRequest) => any;
}
/**
 * <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You
 *       create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a
 *       dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset
 *       group is used to create and train a solution by calling <a>CreateSolution</a>. A
 *       dataset group can contain only one of each type of dataset.</p>
 *          <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p>
 */
export interface DatasetGroup {
    /**
     * <p>The name of the dataset group.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>The current status of the dataset group.</p>
     *          <p>A dataset group can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The ARN of the IAM role that has permissions to create the dataset group.</p>
     */
    roleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the datasets.</p>
     */
    kmsKeyArn?: string;
    /**
     * <p>The creation date and time (in Unix time) of the dataset group.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The last update date and time (in Unix time) of the dataset group.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If creating a dataset group fails, provides the reason why.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetGroup) => any;
}
export interface DescribeDatasetGroupResponse {
    /**
     * <p>A listing of the dataset group's properties.</p>
     */
    datasetGroup?: DatasetGroup;
}
export declare namespace DescribeDatasetGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetGroupResponse) => any;
}
export interface DescribeDatasetImportJobRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset import job to describe.</p>
     */
    datasetImportJobArn: string | undefined;
}
export declare namespace DescribeDatasetImportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetImportJobRequest) => any;
}
/**
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an
 *       Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 */
export interface DatasetImportJob {
    /**
     * <p>The name of the import job.</p>
     */
    jobName?: string;
    /**
     * <p>The ARN of the dataset import job.</p>
     */
    datasetImportJobArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset that receives the imported data.</p>
     */
    datasetArn?: string;
    /**
     * <p>The Amazon S3 bucket that contains the training data to import.</p>
     */
    dataSource?: DataSource;
    /**
     * <p>The ARN of the AWS Identity and Access Management (IAM) role that has permissions to read from the Amazon S3 data
     *       source.</p>
     */
    roleArn?: string;
    /**
     * <p>The status of the dataset import job.</p>
     *          <p>A dataset import job can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The creation date and time (in Unix time) of the dataset import job.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) the dataset was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a dataset import job fails, provides the reason why.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetImportJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetImportJob) => any;
}
export interface DescribeDatasetImportJobResponse {
    /**
     * <p>Information about the dataset import job, including the status.</p>
     *          <p>The status is one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING</p>
     *             </li>
     *             <li>
     *                <p>CREATE IN_PROGRESS</p>
     *             </li>
     *             <li>
     *                <p>ACTIVE</p>
     *             </li>
     *             <li>
     *                <p>CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    datasetImportJob?: DatasetImportJob;
}
export declare namespace DescribeDatasetImportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetImportJobResponse) => any;
}
export interface DescribeEventTrackerRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the event tracker to describe.</p>
     */
    eventTrackerArn: string | undefined;
}
export declare namespace DescribeEventTrackerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventTrackerRequest) => any;
}
/**
 * <p>Provides information about an event tracker.</p>
 */
export interface EventTracker {
    /**
     * <p>The name of the event tracker.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the event tracker.</p>
     */
    eventTrackerArn?: string;
    /**
     * <p>The Amazon AWS account that owns the event tracker.</p>
     */
    accountId?: string;
    /**
     * <p>The ID of the event tracker. Include this ID in requests to the
     *     <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
     */
    trackingId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group that receives the event data.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>The status of the event tracker.</p>
     *          <p>An event tracker can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix format) that the event tracker was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace EventTracker {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventTracker) => any;
}
export interface DescribeEventTrackerResponse {
    /**
     * <p>An object that describes the event tracker.</p>
     */
    eventTracker?: EventTracker;
}
export declare namespace DescribeEventTrackerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventTrackerResponse) => any;
}
export interface DescribeFeatureTransformationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the feature transformation to describe.</p>
     */
    featureTransformationArn: string | undefined;
}
export declare namespace DescribeFeatureTransformationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFeatureTransformationRequest) => any;
}
/**
 * <p>Provides feature transformation information. Feature transformation is the process
 *       of modifying raw input data into a form more suitable for model training.</p>
 */
export interface FeatureTransformation {
    /**
     * <p>The name of the feature transformation.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the FeatureTransformation object.</p>
     */
    featureTransformationArn?: string;
    /**
     * <p>Provides the default parameters for feature transformation.</p>
     */
    defaultParameters?: {
        [key: string]: string;
    };
    /**
     * <p>The creation date and time (in Unix time) of the feature transformation.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The last update date and time (in Unix time) of the feature transformation.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>The status of the feature transformation.</p>
     *          <p>A feature transformation can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
}
export declare namespace FeatureTransformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FeatureTransformation) => any;
}
export interface DescribeFeatureTransformationResponse {
    /**
     * <p>A listing of the FeatureTransformation properties.</p>
     */
    featureTransformation?: FeatureTransformation;
}
export declare namespace DescribeFeatureTransformationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFeatureTransformationResponse) => any;
}
export interface DescribeFilterRequest {
    /**
     * <p>The ARN of the filter to describe.</p>
     */
    filterArn: string | undefined;
}
export declare namespace DescribeFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFilterRequest) => any;
}
/**
 * <p>Contains information on a recommendation filter, including its ARN, status, and filter
 *             expression.</p>
 */
export interface Filter {
    /**
     * <p>The name of the filter.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the filter.</p>
     */
    filterArn?: string;
    /**
     * <p>The time at which the filter was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The time at which the filter was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>The ARN of the dataset group to which the filter belongs.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>If the filter failed, the reason for its failure.</p>
     */
    failureReason?: string;
    /**
     * <p>Specifies the type of item interactions to filter out of recommendation results. The
     *             filter expression must follow specific format rules. For information about filter expression structure and syntax, see
     *             <a>filter-expressions</a>.</p>
     */
    filterExpression?: string;
    /**
     * <p>The status of the filter.</p>
     */
    status?: string;
}
export declare namespace Filter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filter) => any;
}
export interface DescribeFilterResponse {
    /**
     * <p>The filter's details.</p>
     */
    filter?: Filter;
}
export declare namespace DescribeFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFilterResponse) => any;
}
export interface DescribeRecipeRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the recipe to describe.</p>
     */
    recipeArn: string | undefined;
}
export declare namespace DescribeRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecipeRequest) => any;
}
/**
 * <p>Provides information about a recipe. Each recipe provides an algorithm
 *       that Amazon Personalize uses in model training when you use the <a>CreateSolution</a>
 *       operation. </p>
 */
export interface Recipe {
    /**
     * <p>The name of the recipe.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the recipe.</p>
     */
    recipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train
     *       the model.</p>
     */
    algorithmArn?: string;
    /**
     * <p>The ARN of the FeatureTransformation object.</p>
     */
    featureTransformationArn?: string;
    /**
     * <p>The status of the recipe.</p>
     */
    status?: string;
    /**
     * <p>The description of the recipe.</p>
     */
    description?: string;
    /**
     * <p>The date and time (in Unix format) that the recipe was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>One of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>PERSONALIZED_RANKING</p>
     *             </li>
     *             <li>
     *                <p>RELATED_ITEMS</p>
     *             </li>
     *             <li>
     *                <p>USER_PERSONALIZATION</p>
     *             </li>
     *          </ul>
     */
    recipeType?: string;
    /**
     * <p>The date and time (in Unix format) that the recipe was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace Recipe {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Recipe) => any;
}
export interface DescribeRecipeResponse {
    /**
     * <p>An object that describes the recipe.</p>
     */
    recipe?: Recipe;
}
export declare namespace DescribeRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecipeResponse) => any;
}
export interface DescribeSchemaRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the schema to retrieve.</p>
     */
    schemaArn: string | undefined;
}
export declare namespace DescribeSchemaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSchemaRequest) => any;
}
/**
 * <p>Describes the schema for a dataset. For more information on schemas, see
 *       <a>CreateSchema</a>.</p>
 */
export interface DatasetSchema {
    /**
     * <p>The name of the schema.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the schema.</p>
     */
    schemaArn?: string;
    /**
     * <p>The schema.</p>
     */
    schema?: string;
    /**
     * <p>The date and time (in Unix time) that the schema was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the schema was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace DatasetSchema {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetSchema) => any;
}
export interface DescribeSchemaResponse {
    /**
     * <p>The requested schema.</p>
     */
    schema?: DatasetSchema;
}
export declare namespace DescribeSchemaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSchemaResponse) => any;
}
export interface DescribeSolutionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution to describe.</p>
     */
    solutionArn: string | undefined;
}
export declare namespace DescribeSolutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSolutionRequest) => any;
}
/**
 * <p>When the solution performs AutoML (<code>performAutoML</code> is true in
 *       <a>CreateSolution</a>), specifies the recipe that best optimized the
 *       specified metric.</p>
 */
export interface AutoMLResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the best recipe.</p>
     */
    bestRecipeArn?: string;
}
export declare namespace AutoMLResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoMLResult) => any;
}
/**
 * <p>Provides a summary of the properties of a solution version. For a complete listing, call the
 *       <a>DescribeSolutionVersion</a> API.</p>
 */
export interface SolutionVersionSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>The status of the solution version.</p>
     *          <p>A solution version can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that this version of a solution was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the solution version was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a solution version fails, the reason behind the failure.</p>
     */
    failureReason?: string;
}
export declare namespace SolutionVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SolutionVersionSummary) => any;
}
/**
 * <p>An object that provides information about a solution. A solution is a trained model
 *       that can be deployed as a campaign.</p>
 */
export interface Solution {
    /**
     * <p>The name of the solution.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the solution.</p>
     */
    solutionArn?: string;
    /**
     * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The
     *       default is <code>false</code>.</p>
     */
    performHPO?: boolean;
    /**
     * <p>When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from
     *       the list specified in the solution configuration (<code>recipeArn</code> must not be specified).
     *       When false (the default), Amazon Personalize uses <code>recipeArn</code> for training.</p>
     */
    performAutoML?: boolean;
    /**
     * <p>The ARN of the recipe used to create the solution.</p>
     */
    recipeArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>The event type (for example, 'click' or 'like') that is used for training the model.
     *       If no <code>eventType</code> is provided, Amazon Personalize uses all interactions for training with
     *       equal weight regardless of type.</p>
     */
    eventType?: string;
    /**
     * <p>Describes the configuration properties for the solution.</p>
     */
    solutionConfig?: SolutionConfig;
    /**
     * <p>When <code>performAutoML</code> is true, specifies the best recipe found.</p>
     */
    autoMLResult?: AutoMLResult;
    /**
     * <p>The status of the solution.</p>
     *          <p>A solution can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The creation date and time (in Unix time) of the solution.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the solution was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>Describes the latest version of the solution, including the status and the ARN.</p>
     */
    latestSolutionVersion?: SolutionVersionSummary;
}
export declare namespace Solution {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Solution) => any;
}
export interface DescribeSolutionResponse {
    /**
     * <p>An object that describes the solution.</p>
     */
    solution?: Solution;
}
export declare namespace DescribeSolutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSolutionResponse) => any;
}
export interface DescribeSolutionVersionRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version.</p>
     */
    solutionVersionArn: string | undefined;
}
export declare namespace DescribeSolutionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSolutionVersionRequest) => any;
}
/**
 * <p>If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of
 *       the best performing model.</p>
 */
export interface TunedHPOParams {
    /**
     * <p>A list of the hyperparameter values of the best performing model.</p>
     */
    algorithmHyperParameters?: {
        [key: string]: string;
    };
}
export declare namespace TunedHPOParams {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TunedHPOParams) => any;
}
/**
 * <p>An object that provides information about a specific version of a <a>Solution</a>.</p>
 */
export interface SolutionVersion {
    /**
     * <p>The ARN of the solution version.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>The ARN of the solution.</p>
     */
    solutionArn?: string;
    /**
     * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is
     *         <code>false</code>.</p>
     */
    performHPO?: boolean;
    /**
     * <p>When true, Amazon Personalize searches for the most optimal recipe according to the solution
     *       configuration. When false (the default), Amazon Personalize uses <code>recipeArn</code>.</p>
     */
    performAutoML?: boolean;
    /**
     * <p>The ARN of the recipe used in the solution.</p>
     */
    recipeArn?: string;
    /**
     * <p>The event type (for example, 'click' or 'like') that is used for training the
     *       model.</p>
     */
    eventType?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group providing the training data.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>Describes the configuration properties for the solution.</p>
     */
    solutionConfig?: SolutionConfig;
    /**
     * <p>The time used to train the model. You are billed for the time it takes to train a model.
     *       This field is visible only after Amazon Personalize successfully trains a model.</p>
     */
    trainingHours?: number;
    /**
     * <p>The scope of training to be performed when creating the solution version. The
     *       <code>FULL</code> option trains the solution version based on the entirety of the input
     *       solution's training data, while the <code>UPDATE</code> option processes only the data that
     *       has changed in comparison to the input solution. Choose <code>UPDATE</code> when you want to
     *       incrementally update your solution version instead of creating an entirely new one.</p>
     *          <important>
     *             <p>The <code>UPDATE</code> option can only be used when you already have an active solution
     *         version created from the input solution using the <code>FULL</code> option and the input
     *         solution was trained with the
     *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html">User-Personalization</a>
     *         recipe or the
     *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-hrnn-coldstart.html">HRNN-Coldstart</a> recipe.</p>
     *          </important>
     */
    trainingMode?: TrainingMode | string;
    /**
     * <p>If hyperparameter optimization was performed, contains the hyperparameter values of the
     *       best performing model.</p>
     */
    tunedHPOParams?: TunedHPOParams;
    /**
     * <p>The status of the solution version.</p>
     *          <p>A solution version can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING</p>
     *             </li>
     *             <li>
     *                <p>CREATE IN_PROGRESS</p>
     *             </li>
     *             <li>
     *                <p>ACTIVE</p>
     *             </li>
     *             <li>
     *                <p>CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>CREATE STOPPING</p>
     *             </li>
     *             <li>
     *                <p>CREATE STOPPED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>If training a solution version fails, the reason for the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The date and
     *       time
     *       (in Unix time) that this version of the solution was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in
     *       Unix
     *       time) that the solution was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace SolutionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SolutionVersion) => any;
}
export interface DescribeSolutionVersionResponse {
    /**
     * <p>The solution version.</p>
     */
    solutionVersion?: SolutionVersion;
}
export declare namespace DescribeSolutionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSolutionVersionResponse) => any;
}
export interface GetSolutionMetricsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version for which to get metrics.</p>
     */
    solutionVersionArn: string | undefined;
}
export declare namespace GetSolutionMetricsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSolutionMetricsRequest) => any;
}
export interface GetSolutionMetricsResponse {
    /**
     * <p>The same solution version ARN as specified in the request.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>The metrics for the solution version.</p>
     */
    metrics?: {
        [key: string]: number;
    };
}
export declare namespace GetSolutionMetricsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSolutionMetricsResponse) => any;
}
/**
 * <p>The token is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidNextTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
export interface ListBatchInferenceJobsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs
     *       were created.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>The token to request the next page of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of batch inference job results to return in each page. The default
     *       value is 100.</p>
     */
    maxResults?: number;
}
export declare namespace ListBatchInferenceJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBatchInferenceJobsRequest) => any;
}
/**
 * <p>A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job
 *       summaries.</p>
 */
export interface BatchInferenceJobSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
     */
    batchInferenceJobArn?: string;
    /**
     * <p>The name of the batch inference job.</p>
     */
    jobName?: string;
    /**
     * <p>The status of the batch inference job. The status is one of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>PENDING</p>
     *             </li>
     *             <li>
     *                <p>IN PROGRESS</p>
     *             </li>
     *             <li>
     *                <p>ACTIVE</p>
     *             </li>
     *             <li>
     *                <p>CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The time at which the batch inference job was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The time at which the batch inference job was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If the batch inference job failed, the reason for the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The ARN of the solution version used by the batch inference job.</p>
     */
    solutionVersionArn?: string;
}
export declare namespace BatchInferenceJobSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchInferenceJobSummary) => any;
}
export interface ListBatchInferenceJobsResponse {
    /**
     * <p>A list containing information on each job that is returned.</p>
     */
    batchInferenceJobs?: BatchInferenceJobSummary[];
    /**
     * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when
     *       there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListBatchInferenceJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBatchInferenceJobsResponse) => any;
}
export interface ListCampaignsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution to list the campaigns for. When
     *         a solution is not specified, all the campaigns associated with the account are listed.</p>
     */
    solutionArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListCampaigns</code> for getting
     *       the next set of campaigns (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of campaigns to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListCampaignsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCampaignsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a campaign. For a complete listing, call the
 *       <a>DescribeCampaign</a> API.</p>
 */
export interface CampaignSummary {
    /**
     * <p>The name of the campaign.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign.</p>
     */
    campaignArn?: string;
    /**
     * <p>The status of the campaign.</p>
     *          <p>A campaign can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the campaign was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the campaign was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a campaign fails, the reason behind the failure.</p>
     */
    failureReason?: string;
}
export declare namespace CampaignSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CampaignSummary) => any;
}
export interface ListCampaignsResponse {
    /**
     * <p>A list of the campaigns.</p>
     */
    campaigns?: CampaignSummary[];
    /**
     * <p>A token for getting the next set of campaigns (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListCampaignsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCampaignsResponse) => any;
}
export interface ListDatasetExportJobsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset export jobs for.</p>
     */
    datasetArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListDatasetExportJobs</code> for getting
     *       the next set of dataset export jobs (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of dataset export jobs to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListDatasetExportJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetExportJobsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a dataset export job. For a complete listing, call the
 *       <a>DescribeDatasetExportJob</a> API.</p>
 */
export interface DatasetExportJobSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset export job.</p>
     */
    datasetExportJobArn?: string;
    /**
     * <p>The name of the dataset export job.</p>
     */
    jobName?: string;
    /**
     * <p>The status of the dataset export job.</p>
     *          <p>A dataset export job can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the dataset export job was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the dataset export job status was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a dataset export job fails, the reason behind the failure.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetExportJobSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetExportJobSummary) => any;
}
export interface ListDatasetExportJobsResponse {
    /**
     * <p>The list of dataset export jobs.</p>
     */
    datasetExportJobs?: DatasetExportJobSummary[];
    /**
     * <p>A token for getting the next set of dataset export jobs (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListDatasetExportJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetExportJobsResponse) => any;
}
export interface ListDatasetGroupsRequest {
    /**
     * <p>A token returned from the previous call to <code>ListDatasetGroups</code> for getting the
     *       next set of dataset groups (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of dataset groups to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListDatasetGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetGroupsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a dataset group. For a complete listing, call the
 *       <a>DescribeDatasetGroup</a> API.</p>
 */
export interface DatasetGroupSummary {
    /**
     * <p>The name of the dataset group.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>The status of the dataset group.</p>
     *          <p>A dataset group can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the dataset group was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the dataset group was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If creating a dataset group fails, the reason behind the failure.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetGroupSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetGroupSummary) => any;
}
export interface ListDatasetGroupsResponse {
    /**
     * <p>The list of your dataset groups.</p>
     */
    datasetGroups?: DatasetGroupSummary[];
    /**
     * <p>A token for getting the next set of dataset groups (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListDatasetGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetGroupsResponse) => any;
}
export interface ListDatasetImportJobsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset to list the dataset import jobs for.</p>
     */
    datasetArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting
     *       the next set of dataset import jobs (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of dataset import jobs to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListDatasetImportJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetImportJobsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a dataset import job. For a complete listing, call the
 *       <a>DescribeDatasetImportJob</a> API.</p>
 */
export interface DatasetImportJobSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
     */
    datasetImportJobArn?: string;
    /**
     * <p>The name of the dataset import job.</p>
     */
    jobName?: string;
    /**
     * <p>The status of the dataset import job.</p>
     *          <p>A dataset import job can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the dataset import job was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the dataset import job status was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>If a dataset import job fails, the reason behind the failure.</p>
     */
    failureReason?: string;
}
export declare namespace DatasetImportJobSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetImportJobSummary) => any;
}
export interface ListDatasetImportJobsResponse {
    /**
     * <p>The list of dataset import jobs.</p>
     */
    datasetImportJobs?: DatasetImportJobSummary[];
    /**
     * <p>A token for getting the next set of dataset import jobs (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListDatasetImportJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetImportJobsResponse) => any;
}
export interface ListDatasetsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group that contains the datasets to
     *       list.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListDatasetImportJobs</code> for getting
     *       the next set of dataset import jobs (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of datasets to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListDatasetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a dataset. For a complete listing, call the
 *       <a>DescribeDataset</a> API.</p>
 */
export interface DatasetSummary {
    /**
     * <p>The name of the dataset.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset.</p>
     */
    datasetArn?: string;
    /**
     * <p>The dataset type. One of the following values:</p>
     *          <ul>
     *             <li>
     *                <p>Interactions</p>
     *             </li>
     *             <li>
     *                <p>Items</p>
     *             </li>
     *             <li>
     *                <p>Users</p>
     *             </li>
     *             <li>
     *                <p>Event-Interactions</p>
     *             </li>
     *          </ul>
     */
    datasetType?: string;
    /**
     * <p>The status of the dataset.</p>
     *          <p>A dataset can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the dataset was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the dataset was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace DatasetSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetSummary) => any;
}
export interface ListDatasetsResponse {
    /**
     * <p>An array of <code>Dataset</code> objects. Each object provides metadata
     *       information.</p>
     */
    datasets?: DatasetSummary[];
    /**
     * <p>A token for getting the next set of datasets (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListDatasetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetsResponse) => any;
}
export interface ListEventTrackersRequest {
    /**
     * <p>The ARN of a dataset group used to filter the response.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListEventTrackers</code> for getting
     *       the next set of event trackers (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of event trackers to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListEventTrackersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventTrackersRequest) => any;
}
/**
 * <p>Provides a summary of the properties of an event tracker. For a complete listing, call the
 *       <a>DescribeEventTracker</a> API.</p>
 */
export interface EventTrackerSummary {
    /**
     * <p>The name of the event tracker.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the event tracker.</p>
     */
    eventTrackerArn?: string;
    /**
     * <p>The status of the event tracker.</p>
     *          <p>An event tracker can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the event tracker was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the event tracker was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace EventTrackerSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventTrackerSummary) => any;
}
export interface ListEventTrackersResponse {
    /**
     * <p>A list of event trackers.</p>
     */
    eventTrackers?: EventTrackerSummary[];
    /**
     * <p>A token for getting the next set of event trackers (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListEventTrackersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventTrackersResponse) => any;
}
export interface ListFiltersRequest {
    /**
     * <p>The ARN of the dataset group that contains the filters.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListFilters</code> for getting the
     *             next set of filters (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of filters to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListFiltersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFiltersRequest) => any;
}
/**
 * <p>A short summary of a filter's attributes.</p>
 */
export interface FilterSummary {
    /**
     * <p>The name of the filter.</p>
     */
    name?: string;
    /**
     * <p>The ARN of the filter.</p>
     */
    filterArn?: string;
    /**
     * <p>The time at which the filter was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The time at which the filter was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
    /**
     * <p>The ARN of the dataset group to which the filter belongs.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>If the filter failed, the reason for the failure.</p>
     */
    failureReason?: string;
    /**
     * <p>The status of the filter.</p>
     */
    status?: string;
}
export declare namespace FilterSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FilterSummary) => any;
}
export interface ListFiltersResponse {
    /**
     * <p>A list of returned filters.</p>
     */
    Filters?: FilterSummary[];
    /**
     * <p>A token for getting the next set of filters (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListFiltersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFiltersResponse) => any;
}
export declare enum RecipeProvider {
    SERVICE = "SERVICE"
}
export interface ListRecipesRequest {
    /**
     * <p>The default is <code>SERVICE</code>.</p>
     */
    recipeProvider?: RecipeProvider | string;
    /**
     * <p>A token returned from the previous call to <code>ListRecipes</code> for getting
     *       the next set of recipes (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of recipes to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListRecipesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipesRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a recipe. For a complete listing, call the
 *       <a>DescribeRecipe</a> API.</p>
 */
export interface RecipeSummary {
    /**
     * <p>The name of the recipe.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the recipe.</p>
     */
    recipeArn?: string;
    /**
     * <p>The status of the recipe.</p>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the recipe was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the recipe was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace RecipeSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecipeSummary) => any;
}
export interface ListRecipesResponse {
    /**
     * <p>The list of available recipes.</p>
     */
    recipes?: RecipeSummary[];
    /**
     * <p>A token for getting the next set of recipes.</p>
     */
    nextToken?: string;
}
export declare namespace ListRecipesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipesResponse) => any;
}
export interface ListSchemasRequest {
    /**
     * <p>A token returned from the previous call to <code>ListSchemas</code> for getting
     *       the next set of schemas (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of schemas to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListSchemasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemasRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a dataset schema. For a complete listing, call the
 *       <a>DescribeSchema</a> API.</p>
 */
export interface DatasetSchemaSummary {
    /**
     * <p>The name of the schema.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the schema.</p>
     */
    schemaArn?: string;
    /**
     * <p>The date and time (in Unix time) that the schema was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the schema was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace DatasetSchemaSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetSchemaSummary) => any;
}
export interface ListSchemasResponse {
    /**
     * <p>A list of schemas.</p>
     */
    schemas?: DatasetSchemaSummary[];
    /**
     * <p>A token used to get the next set of schemas (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListSchemasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemasResponse) => any;
}
export interface ListSolutionsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
     */
    datasetGroupArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListSolutions</code> for getting
     *       the next set of solutions (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of solutions to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListSolutionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSolutionsRequest) => any;
}
/**
 * <p>Provides a summary of the properties of a solution. For a complete listing, call the
 *       <a>DescribeSolution</a> API.</p>
 */
export interface SolutionSummary {
    /**
     * <p>The name of the solution.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the solution.</p>
     */
    solutionArn?: string;
    /**
     * <p>The status of the solution.</p>
     *          <p>A solution can be in one of the following states:</p>
     *          <ul>
     *             <li>
     *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
     *             </li>
     *             <li>
     *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
     *             </li>
     *          </ul>
     */
    status?: string;
    /**
     * <p>The date and time (in Unix time) that the solution was created.</p>
     */
    creationDateTime?: Date;
    /**
     * <p>The date and time (in Unix time) that the solution was last updated.</p>
     */
    lastUpdatedDateTime?: Date;
}
export declare namespace SolutionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SolutionSummary) => any;
}
export interface ListSolutionsResponse {
    /**
     * <p>A list of the current solutions.</p>
     */
    solutions?: SolutionSummary[];
    /**
     * <p>A token for getting the next set of solutions (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListSolutionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSolutionsResponse) => any;
}
export interface ListSolutionVersionsRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution.</p>
     */
    solutionArn?: string;
    /**
     * <p>A token returned from the previous call to <code>ListSolutionVersions</code> for getting
     *       the next set of solution versions (if they exist).</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of solution versions to return.</p>
     */
    maxResults?: number;
}
export declare namespace ListSolutionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSolutionVersionsRequest) => any;
}
export interface ListSolutionVersionsResponse {
    /**
     * <p>A list of solution versions describing the version properties.</p>
     */
    solutionVersions?: SolutionVersionSummary[];
    /**
     * <p>A token for getting the next set of solution versions (if they exist).</p>
     */
    nextToken?: string;
}
export declare namespace ListSolutionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSolutionVersionsResponse) => any;
}
export interface StopSolutionVersionCreationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the solution version you want to stop creating.</p>
     */
    solutionVersionArn: string | undefined;
}
export declare namespace StopSolutionVersionCreationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopSolutionVersionCreationRequest) => any;
}
export interface UpdateCampaignRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the campaign.</p>
     */
    campaignArn: string | undefined;
    /**
     * <p>The ARN of a new solution version to deploy.</p>
     */
    solutionVersionArn?: string;
    /**
     * <p>Specifies the requested minimum provisioned transactions (recommendations) per second that
     *       Amazon Personalize will support.</p>
     */
    minProvisionedTPS?: number;
    /**
     * <p>The configuration details of a campaign.</p>
     */
    campaignConfig?: CampaignConfig;
}
export declare namespace UpdateCampaignRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCampaignRequest) => any;
}
export interface UpdateCampaignResponse {
    /**
     * <p>The same campaign ARN as given in the request.</p>
     */
    campaignArn?: string;
}
export declare namespace UpdateCampaignResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCampaignResponse) => any;
}
