import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Access is denied. Your account is not authorized to perform this operation.</p>
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
 * <p>The Data Store is in a transition state and the user requested action can not be performed.</p>
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
export declare enum FHIRVersion {
    R4 = "R4"
}
export declare enum PreloadDataType {
    SYNTHEA = "SYNTHEA"
}
/**
 * <p> The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.</p>
 */
export interface PreloadDataConfig {
    /**
     * <p>The type of preloaded data. Only Synthea preloaded data is supported.</p>
     */
    PreloadDataType: PreloadDataType | string | undefined;
}
export declare namespace PreloadDataConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PreloadDataConfig) => any;
}
export interface CreateFHIRDatastoreRequest {
    /**
     * <p>The user generated name for the Data Store.</p>
     */
    DatastoreName?: string;
    /**
     * <p>The FHIR version of the Data Store. The only supported version is R4.</p>
     */
    DatastoreTypeVersion: FHIRVersion | string | undefined;
    /**
     * <p>Optional parameter to preload data upon creation of the Data Store. Currently, the only
     *          supported preloaded data is synthetic data generated from Synthea.</p>
     */
    PreloadDataConfig?: PreloadDataConfig;
    /**
     * <p>Optional user provided token used for ensuring idempotency.</p>
     */
    ClientToken?: string;
}
export declare namespace CreateFHIRDatastoreRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFHIRDatastoreRequest) => any;
}
export declare enum DatastoreStatus {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING",
    DELETED = "DELETED",
    DELETING = "DELETING"
}
export interface CreateFHIRDatastoreResponse {
    /**
     * <p>The AWS-generated Data Store id. This id is in the output from the initial Data Store
     *          creation call.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The datastore ARN is generated during the creation of the Data Store and can be found in
     *          the output from the initial Data Store creation call.</p>
     */
    DatastoreArn: string | undefined;
    /**
     * <p>The status of the FHIR Data Store. Possible statuses are ‘CREATING’, ‘ACTIVE’, ‘DELETING’,
     *          ‘DELETED’.</p>
     */
    DatastoreStatus: DatastoreStatus | string | undefined;
    /**
     * <p>The AWS endpoint for the created Data Store. For preview, only US-east-1 endpoints are
     *          supported.</p>
     */
    DatastoreEndpoint: string | undefined;
}
export declare namespace CreateFHIRDatastoreResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFHIRDatastoreResponse) => any;
}
/**
 * <p>Unknown error occurs in the service.</p>
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
 * <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
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
 * <p>The user input parameter was invalid.</p>
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
/**
 * <p>The filters applied to Data Store query.</p>
 */
export interface DatastoreFilter {
    /**
     * <p>Allows the user to filter Data Store results by name.</p>
     */
    DatastoreName?: string;
    /**
     * <p>Allows the user to filter Data Store results by status.</p>
     */
    DatastoreStatus?: DatastoreStatus | string;
    /**
     * <p>A filter that allows the user to set cutoff dates for records. All Data Stores created
     *          before the specified date will be included in the results. </p>
     */
    CreatedBefore?: Date;
    /**
     * <p>A filter that allows the user to set cutoff dates for records. All Data Stores created
     *          after the specified date will be included in the results.</p>
     */
    CreatedAfter?: Date;
}
export declare namespace DatastoreFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatastoreFilter) => any;
}
/**
 * <p>Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.</p>
 */
export interface DatastoreProperties {
    /**
     * <p>The AWS-generated ID number for the Data Store.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The Amazon Resource Name used in the creation of the Data Store.</p>
     */
    DatastoreArn: string | undefined;
    /**
     * <p>The user-generated name for the Data Store.</p>
     */
    DatastoreName?: string;
    /**
     * <p>The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.</p>
     */
    DatastoreStatus: DatastoreStatus | string | undefined;
    /**
     * <p>The time that a Data Store was created. </p>
     */
    CreatedAt?: Date;
    /**
     * <p>The FHIR version. Only R4 version data is supported.</p>
     */
    DatastoreTypeVersion: FHIRVersion | string | undefined;
    /**
     * <p>The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL.</p>
     */
    DatastoreEndpoint: string | undefined;
    /**
     * <p>The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.</p>
     */
    PreloadDataConfig?: PreloadDataConfig;
}
export declare namespace DatastoreProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DatastoreProperties) => any;
}
export interface DeleteFHIRDatastoreRequest {
    /**
     * <p> The AWS-generated ID for the Data Store to be deleted.</p>
     */
    DatastoreId?: string;
}
export declare namespace DeleteFHIRDatastoreRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFHIRDatastoreRequest) => any;
}
export interface DeleteFHIRDatastoreResponse {
    /**
     * <p>The AWS-generated ID for the Data Store to be deleted.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.</p>
     */
    DatastoreArn: string | undefined;
    /**
     * <p>The status of the Data Store that the user has requested to be deleted.
     *       </p>
     */
    DatastoreStatus: DatastoreStatus | string | undefined;
    /**
     * <p>The AWS endpoint for the Data Store the user has requested to be deleted.</p>
     */
    DatastoreEndpoint: string | undefined;
}
export declare namespace DeleteFHIRDatastoreResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFHIRDatastoreResponse) => any;
}
/**
 * <p> The requested Data Store was not found.</p>
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
export interface DescribeFHIRDatastoreRequest {
    /**
     * <p>The AWS-generated Data Store id. This is part of the ‘CreateFHIRDatastore’ output.</p>
     */
    DatastoreId?: string;
}
export declare namespace DescribeFHIRDatastoreRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRDatastoreRequest) => any;
}
export interface DescribeFHIRDatastoreResponse {
    /**
     * <p>All properties associated with a Data Store, including the Data Store ID, Data Store ARN,
     *          Data Store name, Data Store status, created at, Data Store type version, and Data Store
     *          endpoint.</p>
     */
    DatastoreProperties: DatastoreProperties | undefined;
}
export declare namespace DescribeFHIRDatastoreResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRDatastoreResponse) => any;
}
export interface DescribeFHIRExportJobRequest {
    /**
     * <p>The AWS generated ID for the Data Store from which files are being exported from for an export job.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The AWS generated ID for an export job.</p>
     */
    JobId: string | undefined;
}
export declare namespace DescribeFHIRExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRExportJobRequest) => any;
}
export declare enum JobStatus {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SUBMITTED = "SUBMITTED"
}
/**
 * <p>The output data configuration that was supplied when the export job was created.</p>
 */
export declare type OutputDataConfig = OutputDataConfig.S3UriMember | OutputDataConfig.$UnknownMember;
export declare namespace OutputDataConfig {
    /**
     * <p>The S3Uri is the user specified S3 location to which data will be exported from a FHIR Data Store.</p>
     */
    interface S3UriMember {
        S3Uri: string;
        $unknown?: never;
    }
    interface $UnknownMember {
        S3Uri?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        S3Uri: (value: string) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: OutputDataConfig, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutputDataConfig) => any;
}
/**
 * <p>The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 */
export interface ExportJobProperties {
    /**
     * <p>The AWS generated ID for an export job.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The user generated name for an export job.</p>
     */
    JobName?: string;
    /**
     * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
     */
    JobStatus: JobStatus | string | undefined;
    /**
     * <p>The time an export job was initiated.</p>
     */
    SubmitTime: Date | undefined;
    /**
     * <p>The time an export job completed.</p>
     */
    EndTime?: Date;
    /**
     * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The output data configuration that was supplied when the export job was created.</p>
     */
    OutputDataConfig: OutputDataConfig | undefined;
    /**
     * <p>The Amazon Resource Name used during the initiation of the job.</p>
     */
    DataAccessRoleArn?: string;
    /**
     * <p>An explanation of any errors that may have occurred during the export job.</p>
     */
    Message?: string;
}
export declare namespace ExportJobProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportJobProperties) => any;
}
export interface DescribeFHIRExportJobResponse {
    /**
     * <p>Displays the properties of the export job, including the ID, Arn, Name, and the status of the job. </p>
     */
    ExportJobProperties: ExportJobProperties | undefined;
}
export declare namespace DescribeFHIRExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRExportJobResponse) => any;
}
export interface DescribeFHIRImportJobRequest {
    /**
     * <p>The AWS-generated ID of the Data Store.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The AWS-generated job ID.</p>
     */
    JobId: string | undefined;
}
export declare namespace DescribeFHIRImportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRImportJobRequest) => any;
}
/**
 * <p> The input properties for an import job.</p>
 */
export declare type InputDataConfig = InputDataConfig.S3UriMember | InputDataConfig.$UnknownMember;
export declare namespace InputDataConfig {
    /**
     * <p>The S3Uri is the user specified S3 location of the FHIR data to be imported into Amazon HealthLake. </p>
     */
    interface S3UriMember {
        S3Uri: string;
        $unknown?: never;
    }
    interface $UnknownMember {
        S3Uri?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        S3Uri: (value: string) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: InputDataConfig, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InputDataConfig) => any;
}
/**
 * <p>Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.</p>
 */
export interface ImportJobProperties {
    /**
     * <p>The AWS-generated id number for the Import job.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The user-generated name for an Import job.</p>
     */
    JobName?: string;
    /**
     * <p>The job status for an Import job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, FAILED.</p>
     */
    JobStatus: JobStatus | string | undefined;
    /**
     * <p>The time that the Import job was submitted for processing.</p>
     */
    SubmitTime: Date | undefined;
    /**
     * <p>The time that the Import job was completed.</p>
     */
    EndTime?: Date;
    /**
     * <p>The datastore id used when the Import job was created. </p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The input data configuration that was supplied when  the Import job was created.</p>
     */
    InputDataConfig: InputDataConfig | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access to your input data.</p>
     */
    DataAccessRoleArn?: string;
    /**
     * <p>An explanation of any errors that may have occurred during the FHIR import job. </p>
     */
    Message?: string;
}
export declare namespace ImportJobProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportJobProperties) => any;
}
export interface DescribeFHIRImportJobResponse {
    /**
     * <p>The properties of the Import job request, including the ID, ARN, name, and the status of the job.</p>
     */
    ImportJobProperties: ImportJobProperties | undefined;
}
export declare namespace DescribeFHIRImportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFHIRImportJobResponse) => any;
}
export interface ListFHIRDatastoresRequest {
    /**
     * <p>Lists all filters associated with a FHIR Data Store request.</p>
     */
    Filter?: DatastoreFilter;
    /**
     * <p>Fetches the next page of Data Stores when results are paginated.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of Data Stores returned in a single page of a
     *          ListFHIRDatastoresRequest call.</p>
     */
    MaxResults?: number;
}
export declare namespace ListFHIRDatastoresRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFHIRDatastoresRequest) => any;
}
export interface ListFHIRDatastoresResponse {
    /**
     * <p>All properties associated with the listed Data Stores.</p>
     */
    DatastorePropertiesList: DatastoreProperties[] | undefined;
    /**
     * <p>Pagination token that can be used to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListFHIRDatastoresResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFHIRDatastoresResponse) => any;
}
export interface StartFHIRExportJobRequest {
    /**
     * <p>The user generated name for an export job.</p>
     */
    JobName?: string;
    /**
     * <p>The output data configuration that was supplied when the export job was created.</p>
     */
    OutputDataConfig: OutputDataConfig | undefined;
    /**
     * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The Amazon Resource Name used during the initiation of the job.</p>
     */
    DataAccessRoleArn: string | undefined;
    /**
     * <p>An optional user provided token used for ensuring idempotency.</p>
     */
    ClientToken?: string;
}
export declare namespace StartFHIRExportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartFHIRExportJobRequest) => any;
}
export interface StartFHIRExportJobResponse {
    /**
     * <p>The AWS generated ID for an export job.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The status of a FHIR export job. Possible statuses are SUBMITTED, IN_PROGRESS, COMPLETED, or FAILED.</p>
     */
    JobStatus: JobStatus | string | undefined;
    /**
     * <p>The AWS generated ID for the Data Store from which files are being exported for an export job.</p>
     */
    DatastoreId?: string;
}
export declare namespace StartFHIRExportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartFHIRExportJobResponse) => any;
}
export interface StartFHIRImportJobRequest {
    /**
     * <p>The name of the FHIR Import job in the StartFHIRImport job request.</p>
     */
    JobName?: string;
    /**
     * <p>The input properties of the FHIR Import job in the StartFHIRImport job request.</p>
     */
    InputDataConfig: InputDataConfig | undefined;
    /**
     * <p>The AWS-generated Data Store ID.</p>
     */
    DatastoreId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) that gives Amazon HealthLake access permission.</p>
     */
    DataAccessRoleArn: string | undefined;
    /**
     * <p>Optional user provided token used for ensuring idempotency.</p>
     */
    ClientToken?: string;
}
export declare namespace StartFHIRImportJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartFHIRImportJobRequest) => any;
}
export interface StartFHIRImportJobResponse {
    /**
     * <p>The AWS-generated job ID.</p>
     */
    JobId: string | undefined;
    /**
     * <p>The status of an import job.</p>
     */
    JobStatus: JobStatus | string | undefined;
    /**
     * <p>The AWS-generated Data Store ID.</p>
     */
    DatastoreId?: string;
}
export declare namespace StartFHIRImportJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartFHIRImportJobResponse) => any;
}
