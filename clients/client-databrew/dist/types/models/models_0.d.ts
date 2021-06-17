import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Access to the specified resource was denied.</p>
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
export interface BatchDeleteRecipeVersionRequest {
    /**
     * <p>The name of the recipe whose versions are to be deleted.</p>
     */
    Name: string | undefined;
    /**
     * <p>An array of version identifiers, for the recipe versions to be deleted. You can
     *             specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>.
     *                 <code>LATEST_PUBLISHED</code> is not supported.</p>
     */
    RecipeVersions: string[] | undefined;
}
export declare namespace BatchDeleteRecipeVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteRecipeVersionRequest) => any;
}
/**
 * <p>Represents any errors encountered when attempting to delete multiple recipe
 *             versions.</p>
 */
export interface RecipeVersionErrorDetail {
    /**
     * <p>The HTTP status code for the error.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The text of the error message.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The identifier for the recipe version associated with this error.</p>
     */
    RecipeVersion?: string;
}
export declare namespace RecipeVersionErrorDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecipeVersionErrorDetail) => any;
}
export interface BatchDeleteRecipeVersionResponse {
    /**
     * <p>The name of the recipe that was modified.</p>
     */
    Name: string | undefined;
    /**
     * <p>Errors, if any, that occurred while attempting to delete the recipe versions.</p>
     */
    Errors?: RecipeVersionErrorDetail[];
}
export declare namespace BatchDeleteRecipeVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDeleteRecipeVersionResponse) => any;
}
/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * <p>One or more resources can't be found.</p>
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
 * <p>The input parameters for this request failed validation.</p>
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
export declare enum InputFormat {
    CSV = "CSV",
    EXCEL = "EXCEL",
    JSON = "JSON",
    PARQUET = "PARQUET"
}
/**
 * <p>Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.</p>
 */
export interface CsvOptions {
    /**
     * <p>A single character that specifies the delimiter being used in the CSV file.</p>
     */
    Delimiter?: string;
    /**
     * <p>A variable that specifies whether the first row in the file is parsed as the
     *             header. If this value is false, column names are auto-generated.</p>
     */
    HeaderRow?: boolean;
}
export declare namespace CsvOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CsvOptions) => any;
}
/**
 * <p>Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when
 *             creating a dataset from that file.</p>
 */
export interface ExcelOptions {
    /**
     * <p>One or more named sheets in the Excel file that will be included in the dataset.</p>
     */
    SheetNames?: string[];
    /**
     * <p>One or more sheet numbers in the Excel file that will be included in the
     *             dataset.</p>
     */
    SheetIndexes?: number[];
    /**
     * <p>A variable that specifies whether the first row in the file is parsed as the
     *             header. If this value is false, column names are auto-generated.</p>
     */
    HeaderRow?: boolean;
}
export declare namespace ExcelOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExcelOptions) => any;
}
/**
 * <p>Represents the JSON-specific options that define how input is to be interpreted by AWS
 *             Glue DataBrew.</p>
 */
export interface JsonOptions {
    /**
     * <p>A value that specifies whether JSON input contains embedded new line
     *             characters.</p>
     */
    MultiLine?: boolean;
}
export declare namespace JsonOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JsonOptions) => any;
}
/**
 * <p>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</p>
 */
export interface FormatOptions {
    /**
     * <p>Options that define how JSON input is to be interpreted by DataBrew.</p>
     */
    Json?: JsonOptions;
    /**
     * <p>Options that define how Excel input is to be interpreted by DataBrew.</p>
     */
    Excel?: ExcelOptions;
    /**
     * <p>Options that define how CSV input is to be interpreted by DataBrew.</p>
     */
    Csv?: CsvOptions;
}
export declare namespace FormatOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FormatOptions) => any;
}
/**
 * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
 *             input data, or write output from a job.</p>
 */
export interface S3Location {
    /**
     * <p>The S3 bucket name.</p>
     */
    Bucket: string | undefined;
    /**
     * <p>The unique name of the object in the bucket.</p>
     */
    Key?: string;
}
export declare namespace S3Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Location) => any;
}
/**
 * <p>Connection information for dataset input files stored in a database.</p>
 */
export interface DatabaseInputDefinition {
    /**
     * <p>The AWS Glue Connection that stores the connection information for the target
     *             database.</p>
     */
    GlueConnectionName: string | undefined;
    /**
     * <p>The table within the target database.</p>
     */
    DatabaseTableName: string | undefined;
    /**
     * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
     *             input data, or write output from a job.</p>
     */
    TempDirectory?: S3Location;
}
export declare namespace DatabaseInputDefinition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatabaseInputDefinition) => any;
}
/**
 * <p>Represents how metadata stored in the AWS Glue Data Catalog is defined in a DataBrew
 *             dataset. </p>
 */
export interface DataCatalogInputDefinition {
    /**
     * <p>The unique identifier of the AWS account that holds the Data Catalog that stores the
     *             data.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of a database in the Data Catalog.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of a database table in the Data Catalog. This table corresponds to a DataBrew
     *             dataset.</p>
     */
    TableName: string | undefined;
    /**
     * <p>An Amazon location that AWS Glue Data Catalog can use as a temporary directory.</p>
     */
    TempDirectory?: S3Location;
}
export declare namespace DataCatalogInputDefinition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataCatalogInputDefinition) => any;
}
/**
 * <p>Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or
 *             Amazon S3.</p>
 */
export interface Input {
    /**
     * <p>The Amazon S3 location where the data is stored.</p>
     */
    S3InputDefinition?: S3Location;
    /**
     * <p>The AWS Glue Data Catalog parameters for the data.</p>
     */
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    /**
     * <p>Connection information for dataset input files stored in a database.</p>
     */
    DatabaseInputDefinition?: DatabaseInputDefinition;
}
export declare namespace Input {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Input) => any;
}
export declare enum Order {
    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING"
}
export declare enum OrderedBy {
    LAST_MODIFIED_DATE = "LAST_MODIFIED_DATE"
}
/**
 * <p>Represents a limit imposed on number of S3 files that should be selected for a dataset from a connected
 *             S3 path.</p>
 */
export interface FilesLimit {
    /**
     * <p>The number of S3 files to select.</p>
     */
    MaxFiles: number | undefined;
    /**
     * <p>A criteria to use for S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as
     *             a sorting criteria. Currently it's the only allowed value.</p>
     */
    OrderedBy?: OrderedBy | string;
    /**
     * <p>A criteria to use for S3 files sorting before their selection. By default uses DESCENDING order,
     *             i.e. most recent files are selected first. Anotherpossible value is ASCENDING.</p>
     */
    Order?: Order | string;
}
export declare namespace FilesLimit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FilesLimit) => any;
}
/**
 * <p>Represents a structure for defining parameter conditions.</p>
 */
export interface FilterExpression {
    /**
     * <p>The expression which includes condition names followed by substitution variables, possibly grouped
     *             and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and
     *             (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.</p>
     */
    Expression: string | undefined;
    /**
     * <p>The map of substitution variable names to their values used in this filter expression.</p>
     */
    ValuesMap: {
        [key: string]: string;
    } | undefined;
}
export declare namespace FilterExpression {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FilterExpression) => any;
}
/**
 * <p>Represents additional options for correct interpretation of datetime parameters used in the S3 path of a dataset.</p>
 */
export interface DatetimeOptions {
    /**
     * <p>Required option, that defines the datetime format used for a date parameter in the S3 path. Should use only supported datetime specifiers and separation characters, all
     *             litera a-z or A-Z character should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".</p>
     */
    Format: string | undefined;
    /**
     * <p>Optional value for a timezone offset of the datetime parameter value in the S3 path. Shouldn't be used if Format for this parameter includes timezone fields.
     *             If no offset specified, UTC is assumed.</p>
     */
    TimezoneOffset?: string;
    /**
     * <p>Optional value for a non-US locale code, needed for correct interpretation of some date formats.</p>
     */
    LocaleCode?: string;
}
export declare namespace DatetimeOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatetimeOptions) => any;
}
export declare enum ParameterType {
    Datetime = "Datetime",
    Number = "Number",
    String = "String"
}
/**
 * <p>Represents a dataset paramater that defines type and conditions for a parameter in the S3 path of the dataset.</p>
 */
export interface DatasetParameter {
    /**
     * <p>The name of the parameter that is used in the dataset's S3 path.</p>
     */
    Name: string | undefined;
    /**
     * <p>The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.</p>
     */
    Type: ParameterType | string | undefined;
    /**
     * <p>Additional parameter options such as a format and a timezone. Required for datetime parameters.</p>
     */
    DatetimeOptions?: DatetimeOptions;
    /**
     * <p>Optional boolean value that defines whether the captured value of this parameter should be loaded as an additional column in the dataset.</p>
     */
    CreateColumn?: boolean;
    /**
     * <p>The optional filter expression structure to apply additional matching criteria to the parameter.</p>
     */
    Filter?: FilterExpression;
}
export declare namespace DatasetParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatasetParameter) => any;
}
/**
 * <p>Represents a set of options that define how DataBrew selects files for a given S3 path in a dataset.</p>
 */
export interface PathOptions {
    /**
     * <p>If provided, this structure defines a date range for matching S3 objects based on their LastModifiedDate attribute in S3.</p>
     */
    LastModifiedDateCondition?: FilterExpression;
    /**
     * <p>If provided, this structure imposes a limit on a number of files that should be selected.</p>
     */
    FilesLimit?: FilesLimit;
    /**
     * <p>A structure that maps names of parameters used in the S3 path of a dataset to their definitions.</p>
     */
    Parameters?: {
        [key: string]: DatasetParameter;
    };
}
export declare namespace PathOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PathOptions) => any;
}
export interface CreateDatasetRequest {
    /**
     * <p>The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z,
     *             0-9), hyphen (-), period (.), and space.</p>
     */
    Name: string | undefined;
    /**
     * <p>The file format of a dataset that is created from an S3 file or folder.</p>
     */
    Format?: InputFormat | string;
    /**
     * <p>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</p>
     */
    FormatOptions?: FormatOptions;
    /**
     * <p>Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or
     *             Amazon S3.</p>
     */
    Input: Input | undefined;
    /**
     * <p>A set of options that defines how DataBrew interprets an S3 path of the dataset.</p>
     */
    PathOptions?: PathOptions;
    /**
     * <p>Metadata tags to apply to this dataset.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetRequest) => any;
}
export interface CreateDatasetResponse {
    /**
     * <p>The name of the dataset that you created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDatasetResponse) => any;
}
/**
 * <p>A service quota is exceeded.</p>
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
export declare enum EncryptionMode {
    SSEKMS = "SSE-KMS",
    SSES3 = "SSE-S3"
}
export declare enum SampleMode {
    CUSTOM_ROWS = "CUSTOM_ROWS",
    FULL_DATASET = "FULL_DATASET"
}
/**
 * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
 *             profile job is run. If a <code>JobSample</code> value isn't provided, the
 *             default is used. The default value is CUSTOM_ROWS for the mode parameter and
 *             20,000 for the size parameter.</p>
 */
export interface JobSample {
    /**
     * <p>A value that determines whether the profile job is run on the entire dataset or a
     *             specified number of rows. This value must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>FULL_DATASET - The profile job is run on the entire dataset.</p>
     *             </li>
     *             <li>
     *                 <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the
     *                     <code>Size</code> parameter.</p>
     *             </li>
     *          </ul>
     */
    Mode?: SampleMode | string;
    /**
     * <p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The
     *             profile job is run on the specified number of rows. The maximum value for size is
     *             Long.MAX_VALUE.</p>
     *         <p>Long.MAX_VALUE = 9223372036854775807</p>
     */
    Size?: number;
}
export declare namespace JobSample {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobSample) => any;
}
export declare enum LogSubscription {
    DISABLE = "DISABLE",
    ENABLE = "ENABLE"
}
export interface CreateProfileJobRequest {
    /**
     * <p>The name of the dataset that this job is to act upon.</p>
     */
    DatasetName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
     *             job.</p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with AWS
     *                     KMS-managed keys.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9),
     *             hyphen (-), period (.), and space.</p>
     */
    Name: string | undefined;
    /**
     * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
     *             CloudWatch writes one log stream for each job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of nodes that DataBrew can use when the job processes data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
     *             input data, or write output from a job.</p>
     */
    OutputLocation: S3Location | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
     *             be assumed when DataBrew runs the job.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>Metadata tags to apply to this job.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
    /**
     * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
     *             profile job will be executed. If a JobSample value is not provided, the default value
     *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
     *             size parameter.</p>
     */
    JobSample?: JobSample;
}
export declare namespace CreateProfileJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProfileJobRequest) => any;
}
export interface CreateProfileJobResponse {
    /**
     * <p>The name of the job that was created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateProfileJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProfileJobResponse) => any;
}
export declare enum SampleType {
    FIRST_N = "FIRST_N",
    LAST_N = "LAST_N",
    RANDOM = "RANDOM"
}
/**
 * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
 *             analysis.</p>
 */
export interface Sample {
    /**
     * <p>The number of rows in the sample.</p>
     */
    Size?: number;
    /**
     * <p>The way in which DataBrew obtains rows from a dataset.</p>
     */
    Type: SampleType | string | undefined;
}
export declare namespace Sample {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Sample) => any;
}
export interface CreateProjectRequest {
    /**
     * <p>The name of an existing dataset to associate this project with.</p>
     */
    DatasetName: string | undefined;
    /**
     * <p>A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9),
     *             hyphen (-), period (.), and space.</p>
     */
    Name: string | undefined;
    /**
     * <p>The name of an existing recipe to associate with the project.</p>
     */
    RecipeName: string | undefined;
    /**
     * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
     *             analysis.</p>
     */
    Sample?: Sample;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
     *             be assumed for this request.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>Metadata tags to apply to this project.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectRequest) => any;
}
export interface CreateProjectResponse {
    /**
     * <p>The name of the project that you created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectResponse) => any;
}
/**
 * <p>An internal service failure occurred.</p>
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
 * <p>Represents a transformation and associated parameters that are used to apply a change
 *             to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-structure.html">Recipe structure</a> and <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe
 *                 actions reference</a>.</p>
 */
export interface RecipeAction {
    /**
     * <p>The name of a valid DataBrew transformation to be performed on the data.</p>
     */
    Operation: string | undefined;
    /**
     * <p>Contextual parameters for the transformation.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
}
export declare namespace RecipeAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecipeAction) => any;
}
/**
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *         <p>Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.</p>
 *         <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p>
 */
export interface ConditionExpression {
    /**
     * <p>A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure">Recipe
     *                 structure</a> in the <i>AWS Glue DataBrew Developer
     *             Guide</i>.</p>
     */
    Condition: string | undefined;
    /**
     * <p>A value that the condition must evaluate to for the condition to succeed.</p>
     */
    Value?: string;
    /**
     * <p>A column to apply this condition to.</p>
     */
    TargetColumn: string | undefined;
}
export declare namespace ConditionExpression {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConditionExpression) => any;
}
/**
 * <p>Represents a single step from a DataBrew recipe to be performed.</p>
 */
export interface RecipeStep {
    /**
     * <p>The particular action to be performed in the recipe step.</p>
     */
    Action: RecipeAction | undefined;
    /**
     * <p>One or more conditions that must be met for the recipe step to succeed.</p>
     *         <note>
     *             <p>All of the conditions in the array must be met. In other words, all of the
     *                 conditions must be combined using a logical AND operation.</p>
     *         </note>
     */
    ConditionExpressions?: ConditionExpression[];
}
export declare namespace RecipeStep {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecipeStep) => any;
}
export interface CreateRecipeRequest {
    /**
     * <p>A description for the recipe.</p>
     */
    Description?: string;
    /**
     * <p>A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9),
     *             hyphen (-), period (.), and space.</p>
     */
    Name: string | undefined;
    /**
     * <p>An array containing the steps to be performed by the recipe. Each recipe step consists
     *             of one recipe action and (optionally) an array of condition expressions.</p>
     */
    Steps: RecipeStep[] | undefined;
    /**
     * <p>Metadata tags to apply to this recipe.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRecipeRequest) => any;
}
export interface CreateRecipeResponse {
    /**
     * <p>The name of the recipe that you created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRecipeResponse) => any;
}
export declare enum CompressionFormat {
    BROTLI = "BROTLI",
    BZIP2 = "BZIP2",
    DEFLATE = "DEFLATE",
    GZIP = "GZIP",
    LZ4 = "LZ4",
    LZO = "LZO",
    SNAPPY = "SNAPPY",
    ZLIB = "ZLIB",
    ZSTD = "ZSTD"
}
export declare enum OutputFormat {
    AVRO = "AVRO",
    CSV = "CSV",
    GLUEPARQUET = "GLUEPARQUET",
    JSON = "JSON",
    ORC = "ORC",
    PARQUET = "PARQUET",
    XML = "XML"
}
/**
 * <p>Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.</p>
 */
export interface CsvOutputOptions {
    /**
     * <p>A single character that specifies the delimiter used to create CSV job output.</p>
     */
    Delimiter?: string;
}
export declare namespace CsvOutputOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CsvOutputOptions) => any;
}
/**
 * <p>Represents a set of options that define the structure of comma-separated (CSV) job output.</p>
 */
export interface OutputFormatOptions {
    /**
     * <p>Represents a set of options that define the structure of comma-separated value (CSV)
     *             job output.</p>
     */
    Csv?: CsvOutputOptions;
}
export declare namespace OutputFormatOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutputFormatOptions) => any;
}
/**
 * <p>Represents options that specify how and where DataBrew writes the output generated by
 *             recipe jobs or profile jobs.</p>
 */
export interface Output {
    /**
     * <p>The compression algorithm used to compress the output text of the job.</p>
     */
    CompressionFormat?: CompressionFormat | string;
    /**
     * <p>The data format of the output of the job.</p>
     */
    Format?: OutputFormat | string;
    /**
     * <p>The names of one or more partition columns for the output of the job.</p>
     */
    PartitionColumns?: string[];
    /**
     * <p>The location in Amazon S3 where the job writes its output.</p>
     */
    Location: S3Location | undefined;
    /**
     * <p>A value that, if true, means that any data in the location specified for output is
     *             overwritten with new output.</p>
     */
    Overwrite?: boolean;
    /**
     * <p>Represents options that define how DataBrew formats job output files.</p>
     */
    FormatOptions?: OutputFormatOptions;
}
export declare namespace Output {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Output) => any;
}
/**
 * <p>Represents the name and version of a DataBrew recipe.</p>
 */
export interface RecipeReference {
    /**
     * <p>The name of the recipe.</p>
     */
    Name: string | undefined;
    /**
     * <p>The identifier for the version for the recipe. </p>
     */
    RecipeVersion?: string;
}
export declare namespace RecipeReference {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecipeReference) => any;
}
export interface CreateRecipeJobRequest {
    /**
     * <p>The name of the dataset that this job processes.</p>
     */
    DatasetName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
     *             job.</p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by AWS
     *                     KMS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen
     *             (-), period (.), and space.</p>
     */
    Name: string | undefined;
    /**
     * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
     *             CloudWatch writes one log stream for each job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of nodes that DataBrew can consume when the job processes
     *             data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>One or more artifacts that represent the output from running the job.</p>
     */
    Outputs: Output[] | undefined;
    /**
     * <p>Either the name of an existing project, or a combination of a recipe and a dataset to
     *             associate with the recipe.</p>
     */
    ProjectName?: string;
    /**
     * <p>Represents the name and version of a DataBrew recipe.</p>
     */
    RecipeReference?: RecipeReference;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
     *             be assumed when DataBrew runs the job.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>Metadata tags to apply to this job.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
}
export declare namespace CreateRecipeJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRecipeJobRequest) => any;
}
export interface CreateRecipeJobResponse {
    /**
     * <p>The name of the job that you created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateRecipeJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRecipeJobResponse) => any;
}
export interface CreateScheduleRequest {
    /**
     * <p>The name or names of one or more jobs to be run.</p>
     */
    JobNames?: string[];
    /**
     * <p>The date or dates and time or times when the jobs are to be run. For more information,
     *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
     *                 expressions</a> in the <i>AWS Glue DataBrew Developer
     *             Guide</i>.</p>
     */
    CronExpression: string | undefined;
    /**
     * <p>Metadata tags to apply to this schedule.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9),
     *             hyphen (-), period (.), and space.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateScheduleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateScheduleRequest) => any;
}
export interface CreateScheduleResponse {
    /**
     * <p>The name of the schedule that was created.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateScheduleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateScheduleResponse) => any;
}
export interface DeleteDatasetRequest {
    /**
     * <p>The name of the dataset to be deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDatasetRequest) => any;
}
export interface DeleteDatasetResponse {
    /**
     * <p>The name of the dataset that you deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDatasetResponse) => any;
}
export interface DeleteJobRequest {
    /**
     * <p>The name of the job to be deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteJobRequest) => any;
}
export interface DeleteJobResponse {
    /**
     * <p>The name of the job that you deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteJobResponse) => any;
}
export interface DeleteProjectRequest {
    /**
     * <p>The name of the project to be deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectRequest) => any;
}
export interface DeleteProjectResponse {
    /**
     * <p>The name of the project that you deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectResponse) => any;
}
export interface DeleteRecipeVersionRequest {
    /**
     * <p>The name of the recipe.</p>
     */
    Name: string | undefined;
    /**
     * <p>The version of the recipe to be deleted. You can specify a numeric versions
     *                 (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is
     *             not supported.</p>
     */
    RecipeVersion: string | undefined;
}
export declare namespace DeleteRecipeVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRecipeVersionRequest) => any;
}
export interface DeleteRecipeVersionResponse {
    /**
     * <p>The name of the recipe that was deleted.</p>
     */
    Name: string | undefined;
    /**
     * <p>The version of the recipe that was deleted.</p>
     */
    RecipeVersion: string | undefined;
}
export declare namespace DeleteRecipeVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRecipeVersionResponse) => any;
}
export interface DeleteScheduleRequest {
    /**
     * <p>The name of the schedule to be deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteScheduleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteScheduleRequest) => any;
}
export interface DeleteScheduleResponse {
    /**
     * <p>The name of the schedule that was deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteScheduleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteScheduleResponse) => any;
}
export interface DescribeDatasetRequest {
    /**
     * <p>The name of the dataset to be described.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetRequest) => any;
}
export declare enum Source {
    DATABASE = "DATABASE",
    DATACATALOG = "DATA-CATALOG",
    S3 = "S3"
}
export interface DescribeDatasetResponse {
    /**
     * <p>The identifier (user name) of the user who created the dataset.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the dataset was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The name of the dataset.</p>
     */
    Name: string | undefined;
    /**
     * <p>The file format of a dataset that is created from an S3 file or folder.</p>
     */
    Format?: InputFormat | string;
    /**
     * <p>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</p>
     */
    FormatOptions?: FormatOptions;
    /**
     * <p>Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or
     *             Amazon S3.</p>
     */
    Input: Input | undefined;
    /**
     * <p>The date and time that the dataset was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The identifier (user name) of the user who last modified the dataset.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The location of the data for this dataset, Amazon S3 or the AWS Glue Data
     *             Catalog.</p>
     */
    Source?: Source | string;
    /**
     * <p>A set of options that defines how DataBrew interprets an S3 path of the dataset.</p>
     */
    PathOptions?: PathOptions;
    /**
     * <p>Metadata tags associated with this dataset.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of the dataset.</p>
     */
    ResourceArn?: string;
}
export declare namespace DescribeDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDatasetResponse) => any;
}
export interface DescribeJobRequest {
    /**
     * <p>The name of the job to be described.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRequest) => any;
}
export declare enum JobType {
    PROFILE = "PROFILE",
    RECIPE = "RECIPE"
}
export interface DescribeJobResponse {
    /**
     * <p>The date and time that the job was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The identifier (user name) of the user associated with the creation of the job.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The dataset that the job acts upon.</p>
     */
    DatasetName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
     *             job.</p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by AWS
     *                     KMS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>The name of the job.</p>
     */
    Name: string | undefined;
    /**
     * <p>The job type, which must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>PROFILE</code> - The job analyzes the dataset to determine its size,
     *                     data types, data distribution, and more.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>RECIPE</code> - The job applies one or more transformations to a
     *                     dataset.</p>
     *             </li>
     *          </ul>
     */
    Type?: JobType | string;
    /**
     * <p>The identifier (user name) of the user who last modified the job.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The date and time that the job was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>Indicates whether Amazon CloudWatch logging is enabled for this job.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of compute nodes that DataBrew can consume when the job processes
     *             data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>One or more artifacts that represent the output from running the job.</p>
     */
    Outputs?: Output[];
    /**
     * <p>The DataBrew project associated with this job.</p>
     */
    ProjectName?: string;
    /**
     * <p>Represents the name and version of a DataBrew recipe.</p>
     */
    RecipeReference?: RecipeReference;
    /**
     * <p>The Amazon Resource Name (ARN) of the job.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The ARN of the AWS Identity and Access Management (IAM) role to be assumed when
     *             DataBrew runs the job.</p>
     */
    RoleArn?: string;
    /**
     * <p>Metadata tags associated with this job.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
    /**
     * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
     *             profile job will be executed.</p>
     */
    JobSample?: JobSample;
}
export declare namespace DescribeJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobResponse) => any;
}
export interface DescribeJobRunRequest {
    /**
     * <p>The name of the job being processed during this run.</p>
     */
    Name: string | undefined;
    /**
     * <p>The unique identifier of the job run.</p>
     */
    RunId: string | undefined;
}
export declare namespace DescribeJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRunRequest) => any;
}
export declare enum JobRunState {
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    SUCCEEDED = "SUCCEEDED",
    TIMEOUT = "TIMEOUT"
}
export interface DescribeJobRunResponse {
    /**
     * <p>The number of times that DataBrew has attempted to run the job.</p>
     */
    Attempt?: number;
    /**
     * <p>The date and time when the job completed processing.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The name of the dataset for the job to process.</p>
     */
    DatasetName?: string;
    /**
     * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The amount of time, in seconds, during which the job run consumed resources.</p>
     */
    ExecutionTime?: number;
    /**
     * <p>The name of the job being processed during this run.</p>
     */
    JobName: string | undefined;
    /**
     * <p>The unique identifier of the job run.</p>
     */
    RunId?: string;
    /**
     * <p>The current state of the job run entity itself.</p>
     */
    State?: JobRunState | string;
    /**
     * <p>The current status of Amazon CloudWatch logging for the job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
     *             when it runs.</p>
     */
    LogGroupName?: string;
    /**
     * <p>One or more output artifacts from a job run.</p>
     */
    Outputs?: Output[];
    /**
     * <p>Represents the name and version of a DataBrew recipe.</p>
     */
    RecipeReference?: RecipeReference;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who started the job run.</p>
     */
    StartedBy?: string;
    /**
     * <p>The date and time when the job run began.</p>
     */
    StartedOn?: Date;
    /**
     * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
     *             profile job will be executed. If a JobSample value is not provided, the default value
     *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
     *             size parameter.</p>
     */
    JobSample?: JobSample;
}
export declare namespace DescribeJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRunResponse) => any;
}
export interface DescribeProjectRequest {
    /**
     * <p>The name of the project to be described.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectRequest) => any;
}
export declare enum SessionStatus {
    ASSIGNED = "ASSIGNED",
    FAILED = "FAILED",
    INITIALIZING = "INITIALIZING",
    PROVISIONING = "PROVISIONING",
    READY = "READY",
    RECYCLING = "RECYCLING",
    ROTATING = "ROTATING",
    TERMINATED = "TERMINATED",
    TERMINATING = "TERMINATING",
    UPDATING = "UPDATING"
}
export interface DescribeProjectResponse {
    /**
     * <p>The date and time that the project was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The identifier (user name) of the user who created the project.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The dataset associated with the project.</p>
     */
    DatasetName?: string;
    /**
     * <p>The date and time that the project was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The identifier (user name) of the user who last modified the project.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The name of the project.</p>
     */
    Name: string | undefined;
    /**
     * <p>The recipe associated with this job.</p>
     */
    RecipeName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the project.</p>
     */
    ResourceArn?: string;
    /**
     * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
     *             analysis.</p>
     */
    Sample?: Sample;
    /**
     * <p>The ARN of the AWS Identity and Access Management (IAM) role to be assumed when
     *             DataBrew runs the job.</p>
     */
    RoleArn?: string;
    /**
     * <p>Metadata tags associated with this project.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>Describes the current state of the session:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>PROVISIONING</code> - allocating resources for the session.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>INITIALIZING</code> - getting the session ready for first use.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ASSIGNED</code> - the session is ready for use.</p>
     *             </li>
     *          </ul>
     */
    SessionStatus?: SessionStatus | string;
    /**
     * <p>The identifier (user name) of the user that opened the project for use. </p>
     */
    OpenedBy?: string;
    /**
     * <p>The date and time when the project was opened. </p>
     */
    OpenDate?: Date;
}
export declare namespace DescribeProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectResponse) => any;
}
export interface DescribeRecipeRequest {
    /**
     * <p>The name of the recipe to be described.</p>
     */
    Name: string | undefined;
    /**
     * <p>The recipe version identifier. If this parameter isn't specified, then the latest
     *             published version is returned.</p>
     */
    RecipeVersion?: string;
}
export declare namespace DescribeRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecipeRequest) => any;
}
export interface DescribeRecipeResponse {
    /**
     * <p>The identifier (user name) of the user who created the recipe.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the recipe was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The identifier (user name) of the user who last modified the recipe.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The date and time that the recipe was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The name of the project associated with this recipe.</p>
     */
    ProjectName?: string;
    /**
     * <p>The identifier (user name) of the user who last published the recipe.</p>
     */
    PublishedBy?: string;
    /**
     * <p>The date and time when the recipe was last published.</p>
     */
    PublishedDate?: Date;
    /**
     * <p>The description of the recipe.</p>
     */
    Description?: string;
    /**
     * <p>The name of the recipe.</p>
     */
    Name: string | undefined;
    /**
     * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
     *             the conditions under which the action should succeed.</p>
     */
    Steps?: RecipeStep[];
    /**
     * <p>Metadata tags associated with this project.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The ARN of the recipe.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The recipe version identifier.</p>
     */
    RecipeVersion?: string;
}
export declare namespace DescribeRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecipeResponse) => any;
}
export interface DescribeScheduleRequest {
    /**
     * <p>The name of the schedule to be described.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeScheduleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeScheduleRequest) => any;
}
export interface DescribeScheduleResponse {
    /**
     * <p>The date and time that the schedule was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The identifier (user name) of the user who created the schedule. </p>
     */
    CreatedBy?: string;
    /**
     * <p>The name or names of one or more jobs to be run by using the schedule.</p>
     */
    JobNames?: string[];
    /**
     * <p>The identifier (user name) of the user who last modified the schedule.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The date and time that the schedule was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the schedule.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The date or dates and time or times when the jobs are to be run for the schedule. For
     *             more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the
     *                 <i>AWS Glue DataBrew Developer Guide</i>.</p>
     */
    CronExpression?: string;
    /**
     * <p>Metadata tags associated with this schedule.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the schedule.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeScheduleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeScheduleResponse) => any;
}
export interface ListDatasetsRequest {
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDatasetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetsRequest) => any;
}
/**
 * <p>Represents a dataset that can be processed by DataBrew.</p>
 */
export interface Dataset {
    /**
     * <p>The ID of the AWS account that owns the dataset.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who created the dataset.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the dataset was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The unique name of the dataset.</p>
     */
    Name: string | undefined;
    /**
     * <p>The file format of a dataset that is created from an S3 file or folder.</p>
     */
    Format?: InputFormat | string;
    /**
     * <p>A set of options that define how DataBrew interprets the data in the dataset.</p>
     */
    FormatOptions?: FormatOptions;
    /**
     * <p>Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog
     *             or Amazon S3.</p>
     */
    Input: Input | undefined;
    /**
     * <p>The last modification date and time of the dataset.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who last modified the dataset.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The location of the data for the dataset, either Amazon S3 or the AWS Glue Data
     *             Catalog.</p>
     */
    Source?: Source | string;
    /**
     * <p>A set of options that defines how DataBrew interprets an S3 path of the dataset.</p>
     */
    PathOptions?: PathOptions;
    /**
     * <p>Metadata tags that have been applied to the dataset.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The unique Amazon Resource Name (ARN) for the dataset.</p>
     */
    ResourceArn?: string;
}
export declare namespace Dataset {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Dataset) => any;
}
export interface ListDatasetsResponse {
    /**
     * <p>A list of datasets that are defined.</p>
     */
    Datasets: Dataset[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListDatasetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDatasetsResponse) => any;
}
export interface ListJobRunsRequest {
    /**
     * <p>The name of the job.</p>
     */
    Name: string | undefined;
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobRunsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobRunsRequest) => any;
}
/**
 * <p>Represents one run of a DataBrew job.</p>
 */
export interface JobRun {
    /**
     * <p>The number of times that DataBrew has attempted to run the job.</p>
     */
    Attempt?: number;
    /**
     * <p>The date and time when the job completed processing.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The name of the dataset for the job to process.</p>
     */
    DatasetName?: string;
    /**
     * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The amount of time, in seconds, during which a job run consumed resources.</p>
     */
    ExecutionTime?: number;
    /**
     * <p>The name of the job being processed during this run.</p>
     */
    JobName?: string;
    /**
     * <p>The unique identifier of the job run.</p>
     */
    RunId?: string;
    /**
     * <p>The current state of the job run entity itself.</p>
     */
    State?: JobRunState | string;
    /**
     * <p>The current status of Amazon CloudWatch logging for the job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
     *             when it runs.</p>
     */
    LogGroupName?: string;
    /**
     * <p>One or more output artifacts from a job run.</p>
     */
    Outputs?: Output[];
    /**
     * <p>The set of steps processed by the job.</p>
     */
    RecipeReference?: RecipeReference;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who initiated the job run. </p>
     */
    StartedBy?: string;
    /**
     * <p>The date and time when the job run began. </p>
     */
    StartedOn?: Date;
    /**
     * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
     *             profile job is run. If a <code>JobSample</code> value isn't provided, the default
     *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
     *             size parameter.</p>
     */
    JobSample?: JobSample;
}
export declare namespace JobRun {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobRun) => any;
}
export interface ListJobRunsResponse {
    /**
     * <p>A list of job runs that have occurred for the specified job.</p>
     */
    JobRuns: JobRun[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobRunsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobRunsResponse) => any;
}
export interface ListJobsRequest {
    /**
     * <p>The name of a dataset. Using this parameter indicates to return only those jobs that
     *             act on the specified dataset.</p>
     */
    DatasetName?: string;
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>A token generated by DataBrew that specifies where to continue pagination if a
     *             previous request was truncated. To get the next set of pages, pass in the NextToken
     *             value from the response object of the previous page call. </p>
     */
    NextToken?: string;
    /**
     * <p>The name of a project. Using this parameter indicates to return only those jobs that
     *             are associated with the specified project.</p>
     */
    ProjectName?: string;
}
export declare namespace ListJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsRequest) => any;
}
/**
 * <p>Represents all of the attributes of a DataBrew job.</p>
 */
export interface Job {
    /**
     * <p>The ID of the AWS account that owns the job.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who created the job.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the job was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>A dataset that the job is to process.</p>
     */
    DatasetName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job
     *             output. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html">Encrypting data
     *                 written by DataBrew jobs</a>
     *          </p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by AWS KMS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>The unique name of the job.</p>
     */
    Name: string | undefined;
    /**
     * <p>The job type of the job, which must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>PROFILE</code> - A job to analyze a dataset, to determine its size, data
     *                     types, data distribution, and more.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>RECIPE</code> - A job to apply one or more transformations to a
     *                     dataset.</p>
     *             </li>
     *          </ul>
     */
    Type?: JobType | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who last modified the job.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The modification date and time of the job.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The current status of Amazon CloudWatch logging for the job.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of nodes that can be consumed when the job processes data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>One or more artifacts that represent output from running the job.</p>
     */
    Outputs?: Output[];
    /**
     * <p>The name of the project that the job is associated with.</p>
     */
    ProjectName?: string;
    /**
     * <p>A set of steps that the job runs.</p>
     */
    RecipeReference?: RecipeReference;
    /**
     * <p>The unique Amazon Resource Name (ARN) for the job.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the role to be assumed for this job.</p>
     */
    RoleArn?: string;
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
    /**
     * <p>Metadata tags that have been applied to the job.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
     *             profile job is run. If a <code>JobSample</code> value isn't provided, the default value
     *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
     *             size parameter.</p>
     */
    JobSample?: JobSample;
}
export declare namespace Job {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Job) => any;
}
export interface ListJobsResponse {
    /**
     * <p>A list of jobs that are defined.</p>
     */
    Jobs: Job[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsResponse) => any;
}
export interface ListProjectsRequest {
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
}
export declare namespace ListProjectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsRequest) => any;
}
/**
 * <p>Represents all of the attributes of a DataBrew project.</p>
 */
export interface Project {
    /**
     * <p>The ID of the AWS account that owns the project.</p>
     */
    AccountId?: string;
    /**
     * <p>The date and time that the project was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who crated the project.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The dataset that the project is to act upon.</p>
     */
    DatasetName?: string;
    /**
     * <p>The last modification date and time for the project.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who last modified the project.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The unique name of a project.</p>
     */
    Name: string | undefined;
    /**
     * <p>The name of a recipe that will be developed during a project session.</p>
     */
    RecipeName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the project.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The sample size and sampling type to apply to the data. If this parameter isn't
     *             specified, then the sample consists of the first 500 rows from the dataset.</p>
     */
    Sample?: Sample;
    /**
     * <p>Metadata tags that have been applied to the project.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this
     *             project.</p>
     */
    RoleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user that opened the project for use.</p>
     */
    OpenedBy?: string;
    /**
     * <p>The date and time when the project was opened.</p>
     */
    OpenDate?: Date;
}
export declare namespace Project {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Project) => any;
}
export interface ListProjectsResponse {
    /**
     * <p>A list of projects that are defined .</p>
     */
    Projects: Project[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListProjectsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsResponse) => any;
}
export interface ListRecipesRequest {
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or
     *                 <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted,
     *                 <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe
     *             versions.</p>
     *         <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code>
     *          </p>
     */
    RecipeVersion?: string;
}
export declare namespace ListRecipesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipesRequest) => any;
}
/**
 * <p>Represents one or more actions to be performed on a DataBrew dataset.</p>
 */
export interface Recipe {
    /**
     * <p>The Amazon Resource Name (ARN) of the user who created the recipe.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the recipe was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who last modified the recipe.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The last modification date and time of the recipe.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The name of the project that the recipe is associated with.</p>
     */
    ProjectName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who published the recipe.</p>
     */
    PublishedBy?: string;
    /**
     * <p>The date and time when the recipe was published.</p>
     */
    PublishedDate?: Date;
    /**
     * <p>The description of the recipe.</p>
     */
    Description?: string;
    /**
     * <p>The unique name for the recipe.</p>
     */
    Name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) for the recipe.</p>
     */
    ResourceArn?: string;
    /**
     * <p>A list of steps that are defined by the recipe.</p>
     */
    Steps?: RecipeStep[];
    /**
     * <p>Metadata tags that have been applied to the recipe.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The identifier for the version for the recipe. Must be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>Numeric version (<code>X.Y</code>) - <code>X</code> and <code>Y</code> stand
     *                     for major and minor version numbers. The maximum length of each is 6 digits, and
     *                     neither can be negative values. Both <code>X</code> and <code>Y</code> are
     *                     required, and "0.0" isn't a valid version.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>LATEST_WORKING</code> - the most recent valid version being developed in
     *                     a DataBrew project.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>LATEST_PUBLISHED</code> - the most recent published version.</p>
     *             </li>
     *          </ul>
     */
    RecipeVersion?: string;
}
export declare namespace Recipe {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Recipe) => any;
}
export interface ListRecipesResponse {
    /**
     * <p>A list of recipes that are defined.</p>
     */
    Recipes: Recipe[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListRecipesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipesResponse) => any;
}
export interface ListRecipeVersionsRequest {
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the recipe for which to return version information.</p>
     */
    Name: string | undefined;
}
export declare namespace ListRecipeVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipeVersionsRequest) => any;
}
export interface ListRecipeVersionsResponse {
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of versions for the specified recipe.</p>
     */
    Recipes: Recipe[] | undefined;
}
export declare namespace ListRecipeVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecipeVersionsResponse) => any;
}
export interface ListSchedulesRequest {
    /**
     * <p>The name of the job that these schedules apply to.</p>
     */
    JobName?: string;
    /**
     * <p>The maximum number of results to return in this request. </p>
     */
    MaxResults?: number;
    /**
     * <p>The token returned by a previous call to retrieve the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSchedulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchedulesRequest) => any;
}
/**
 * <p>Represents one or more dates and times when a job is to run.</p>
 */
export interface Schedule {
    /**
     * <p>The ID of the AWS account that owns the schedule.</p>
     */
    AccountId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the user who created the schedule.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The date and time that the schedule was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>A list of jobs to be run, according to the schedule.</p>
     */
    JobNames?: string[];
    /**
     * <p>The Amazon Resource Name (ARN) of the user who last modified the schedule.</p>
     */
    LastModifiedBy?: string;
    /**
     * <p>The date and time when the schedule was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the schedule.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The dates and times when the job is to run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
     *                 expressions</a> in the <i>AWS Glue DataBrew Developer
     *             Guide</i>.</p>
     */
    CronExpression?: string;
    /**
     * <p>Metadata tags that have been applied to the schedule.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the schedule.</p>
     */
    Name: string | undefined;
}
export declare namespace Schedule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Schedule) => any;
}
export interface ListSchedulesResponse {
    /**
     * <p>A list of schedules that are defined.</p>
     */
    Schedules: Schedule[] | undefined;
    /**
     * <p>A token that you can use in a subsequent call to retrieve the next set of
     *             results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSchedulesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchedulesResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
     *         </p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>A list of tags associated with the DataBrew resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface PublishRecipeRequest {
    /**
     * <p>A description of the recipe to be published, for this version of the recipe.</p>
     */
    Description?: string;
    /**
     * <p>The name of the recipe to be published.</p>
     */
    Name: string | undefined;
}
export declare namespace PublishRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishRecipeRequest) => any;
}
export interface PublishRecipeResponse {
    /**
     * <p>The name of the recipe that you published.</p>
     */
    Name: string | undefined;
}
export declare namespace PublishRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishRecipeResponse) => any;
}
/**
 * <p>Represents the data being transformed during an action.</p>
 */
export interface ViewFrame {
    /**
     * <p>The starting index for the range of columns to return in the view frame.</p>
     */
    StartColumnIndex: number | undefined;
    /**
     * <p>The number of columns to include in the view frame, beginning with the
     *                 <code>StartColumnIndex</code> value and ignoring any columns in the
     *                 <code>HiddenColumns</code> list.</p>
     */
    ColumnRange?: number;
    /**
     * <p>A list of columns to hide in the view frame.</p>
     */
    HiddenColumns?: string[];
}
export declare namespace ViewFrame {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ViewFrame) => any;
}
export interface SendProjectSessionActionRequest {
    /**
     * <p>If true, the result of the recipe step will be returned, but not applied.</p>
     */
    Preview?: boolean;
    /**
     * <p>The name of the project to apply the action to.</p>
     */
    Name: string | undefined;
    /**
     * <p>Represents a single step from a DataBrew recipe to be performed.</p>
     */
    RecipeStep?: RecipeStep;
    /**
     * <p>The index from which to preview a step. This index is used to preview the result of
     *             steps that have already been applied, so that the resulting view frame is from earlier
     *             in the view frame stack.</p>
     */
    StepIndex?: number;
    /**
     * <p>A unique identifier for an interactive session that's currently open and ready for
     *             work. The action will be performed on this session.</p>
     */
    ClientSessionId?: string;
    /**
     * <p>Represents the data being transformed during an action.</p>
     */
    ViewFrame?: ViewFrame;
}
export declare namespace SendProjectSessionActionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendProjectSessionActionRequest) => any;
}
export interface SendProjectSessionActionResponse {
    /**
     * <p>A message indicating the result of performing the action.</p>
     */
    Result?: string;
    /**
     * <p>The name of the project that was affected by the action.</p>
     */
    Name: string | undefined;
    /**
     * <p>A unique identifier for the action that was performed.</p>
     */
    ActionId?: number;
}
export declare namespace SendProjectSessionActionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SendProjectSessionActionResponse) => any;
}
export interface StartJobRunRequest {
    /**
     * <p>The name of the job to be run.</p>
     */
    Name: string | undefined;
}
export declare namespace StartJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartJobRunRequest) => any;
}
export interface StartJobRunResponse {
    /**
     * <p>A system-generated identifier for this particular job run.</p>
     */
    RunId: string | undefined;
}
export declare namespace StartJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartJobRunResponse) => any;
}
export interface StartProjectSessionRequest {
    /**
     * <p>The name of the project to act upon.</p>
     */
    Name: string | undefined;
    /**
     * <p>A value that, if true, enables you to take control of a session, even if a different
     *             client is currently accessing the project.</p>
     */
    AssumeControl?: boolean;
}
export declare namespace StartProjectSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartProjectSessionRequest) => any;
}
export interface StartProjectSessionResponse {
    /**
     * <p>The name of the project to be acted upon.</p>
     */
    Name: string | undefined;
    /**
     * <p>A system-generated identifier for the session.</p>
     */
    ClientSessionId?: string;
}
export declare namespace StartProjectSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartProjectSessionResponse) => any;
}
export interface StopJobRunRequest {
    /**
     * <p>The name of the job to be stopped.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ID of the job run to be stopped.</p>
     */
    RunId: string | undefined;
}
export declare namespace StopJobRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopJobRunRequest) => any;
}
export interface StopJobRunResponse {
    /**
     * <p>The ID of the job run that you stopped.</p>
     */
    RunId: string | undefined;
}
export declare namespace StopJobRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopJobRunResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The DataBrew resource to which tags should be added. The value for this parameter is
     *             an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or
     *             a recipe.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>One or more tags to be assigned to the resource.</p>
     */
    Tags: {
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
     * <p>A DataBrew resource from which you want to remove a tag or tags. The value for this
     *             parameter is an Amazon Resource Name (ARN). </p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys (names) of one or more tags to be removed.</p>
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
export interface UpdateDatasetRequest {
    /**
     * <p>The name of the dataset to be updated.</p>
     */
    Name: string | undefined;
    /**
     * <p>The file format of a dataset that is created from an S3 file or folder.</p>
     */
    Format?: InputFormat | string;
    /**
     * <p>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</p>
     */
    FormatOptions?: FormatOptions;
    /**
     * <p>Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or
     *             Amazon S3.</p>
     */
    Input: Input | undefined;
    /**
     * <p>A set of options that defines how DataBrew interprets an S3 path of the dataset.</p>
     */
    PathOptions?: PathOptions;
}
export declare namespace UpdateDatasetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDatasetRequest) => any;
}
export interface UpdateDatasetResponse {
    /**
     * <p>The name of the dataset that you updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateDatasetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDatasetResponse) => any;
}
export interface UpdateProfileJobRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
     *             job.</p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by AWS
     *                     KMS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>The name of the job to be updated.</p>
     */
    Name: string | undefined;
    /**
     * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
     *             CloudWatch writes one log stream for each job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of compute nodes that DataBrew can use when the job processes
     *             data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
     *             input data, or write output from a job.</p>
     */
    OutputLocation: S3Location | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
     *             be assumed when DataBrew runs the job.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
    /**
     * <p>Sample configuration for Profile Jobs only. Determines the number of rows on which the
     *             Profile job will be executed. If a JobSample value is not provided for profile jobs, the
     *             default value will be used. The default value is CUSTOM_ROWS for the mode parameter and
     *             20000 for the size parameter.</p>
     */
    JobSample?: JobSample;
}
export declare namespace UpdateProfileJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProfileJobRequest) => any;
}
export interface UpdateProfileJobResponse {
    /**
     * <p>The name of the job that was updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateProfileJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProfileJobResponse) => any;
}
export interface UpdateProjectRequest {
    /**
     * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
     *             analysis.</p>
     */
    Sample?: Sample;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The name of the project to be updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectRequest) => any;
}
export interface UpdateProjectResponse {
    /**
     * <p>The date and time that the project was last modified.</p>
     */
    LastModifiedDate?: Date;
    /**
     * <p>The name of the project that you updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateProjectResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectResponse) => any;
}
export interface UpdateRecipeRequest {
    /**
     * <p>A description of the recipe.</p>
     */
    Description?: string;
    /**
     * <p>The name of the recipe to be updated.</p>
     */
    Name: string | undefined;
    /**
     * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
     *             the conditions under which the action should succeed.</p>
     */
    Steps?: RecipeStep[];
}
export declare namespace UpdateRecipeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRecipeRequest) => any;
}
export interface UpdateRecipeResponse {
    /**
     * <p>The name of the recipe that was updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateRecipeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRecipeResponse) => any;
}
export interface UpdateRecipeJobRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
     *             job.</p>
     */
    EncryptionKeyArn?: string;
    /**
     * <p>The encryption mode for the job, which can be one of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by AWS
     *                     KMS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
     *                     S3.</p>
     *             </li>
     *          </ul>
     */
    EncryptionMode?: EncryptionMode | string;
    /**
     * <p>The name of the job to update.</p>
     */
    Name: string | undefined;
    /**
     * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
     *             CloudWatch writes one log stream for each job run.</p>
     */
    LogSubscription?: LogSubscription | string;
    /**
     * <p>The maximum number of nodes that DataBrew can consume when the job processes
     *             data.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry the job after a job run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>One or more artifacts that represent the output from running the job. </p>
     */
    Outputs: Output[] | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
     *             be assumed when DataBrew runs the job.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
     *             period ends with a status of <code>TIMEOUT</code>.</p>
     */
    Timeout?: number;
}
export declare namespace UpdateRecipeJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRecipeJobRequest) => any;
}
export interface UpdateRecipeJobResponse {
    /**
     * <p>The name of the job that you updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateRecipeJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRecipeJobResponse) => any;
}
export interface UpdateScheduleRequest {
    /**
     * <p>The name or names of one or more jobs to be run for this schedule.</p>
     */
    JobNames?: string[];
    /**
     * <p>The date or dates and time or times when the jobs are to be run. For more information,
     *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
     *                 expressions</a> in the <i>AWS Glue DataBrew Developer
     *             Guide</i>.</p>
     */
    CronExpression: string | undefined;
    /**
     * <p>The name of the schedule to update.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateScheduleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateScheduleRequest) => any;
}
export interface UpdateScheduleResponse {
    /**
     * <p>The name of the schedule that was updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateScheduleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateScheduleResponse) => any;
}
