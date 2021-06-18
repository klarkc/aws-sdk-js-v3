import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have permission to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}
export declare namespace AccessDeniedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface DeleteReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to delete.</p>
   */
  reportId: string | undefined;
}
export declare namespace DeleteReportDefinitionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteReportDefinitionRequest) => any;
}
export interface DeleteReportDefinitionResult {
  /**
   * <p>ID of the report that was deleted.</p>
   */
  reportId?: string;
}
export declare namespace DeleteReportDefinitionResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteReportDefinitionResult) => any;
}
/**
 * <p>An internal server error occurred. Retry your request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}
export declare namespace InternalServerException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}
export declare namespace ThrottlingException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>The input fails to satisfy the constraints for the API.</p>
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
export interface GetReportDefinitionRequest {
  /**
   * <p>ID of the report to retrieve.</p>
   */
  reportId: string | undefined;
}
export declare namespace GetReportDefinitionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetReportDefinitionRequest) => any;
}
/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler
 *       reports are generated and then written to.</p>
 */
export interface S3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucket: string | undefined;
  /**
   * <p>Prefix for the location to write to.</p>
   */
  prefix: string | undefined;
}
export declare namespace S3Location {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: S3Location) => any;
}
export declare enum Format {
  CSV = "CSV",
  PARQUET = "PARQUET",
}
export declare enum ReportFrequency {
  ALL = "ALL",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
}
export interface GetReportDefinitionResult {
  /**
   * <p>ID of the report retrieved.</p>
   */
  reportId: string | undefined;
  /**
   * <p>Description of the report.</p>
   */
  reportDescription: string | undefined;
  /**
   * <p>Cadence used to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;
  /**
   * <p>Format of the generated report.</p>
   */
  format: Format | string | undefined;
  /**
   * <p>Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.</p>
   */
  destinationS3Location: S3Location | undefined;
  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   */
  createdAt: Date | undefined;
  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   */
  lastUpdated: Date | undefined;
}
export declare namespace GetReportDefinitionResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetReportDefinitionResult) => any;
}
export declare enum S3BucketRegion {
  AF_SOUTH_1 = "af-south-1",
  AP_EAST_1 = "ap-east-1",
  EU_SOUTH_1 = "eu-south-1",
  ME_SOUTH_1 = "me-south-1",
}
/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read
 *       from.</p>
 */
export interface SourceS3Location {
  /**
   * <p>Name of the bucket.</p>
   */
  bucket: string | undefined;
  /**
   * <p>Key of the object.</p>
   */
  key: string | undefined;
  /**
   * <p>Region of the bucket. Only required for Regions that are disabled by default.
   *         For more infomration about Regions that are disabled by default, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">
   *           Enabling a Region</a> in the <i>AWS General Reference guide</i>.</p>
   */
  region?: S3BucketRegion | string;
}
export declare namespace SourceS3Location {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SourceS3Location) => any;
}
export interface ImportApplicationUsageRequest {
  /**
   * <p>Amazon S3 location to import application usage data from.</p>
   */
  sourceS3Location: SourceS3Location | undefined;
}
export declare namespace ImportApplicationUsageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ImportApplicationUsageRequest) => any;
}
export interface ImportApplicationUsageResult {
  /**
   * <p>ID of the import request.</p>
   */
  importId: string | undefined;
}
export declare namespace ImportApplicationUsageResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ImportApplicationUsageResult) => any;
}
export interface ListReportDefinitionsRequest {
  /**
   * <p>The token value from a previous call to access the next page of results.</p>
   */
  nextToken?: string;
  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}
export declare namespace ListReportDefinitionsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListReportDefinitionsRequest) => any;
}
/**
 * <p>The configuration of a report in AWS Application Cost Profiler.</p>
 */
export interface ReportDefinition {
  /**
   * <p>The ID of the report.</p>
   */
  reportId?: string;
  /**
   * <p>Description of the report</p>
   */
  reportDescription?: string;
  /**
   * <p>The cadence at which the report is generated.</p>
   */
  reportFrequency?: ReportFrequency | string;
  /**
   * <p>The format used for the generated reports.</p>
   */
  format?: Format | string;
  /**
   * <p>The location in Amazon Simple Storage Service (Amazon S3) the reports should be saved to.</p>
   */
  destinationS3Location?: S3Location;
  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   */
  createdAt?: Date;
  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   */
  lastUpdatedAt?: Date;
}
export declare namespace ReportDefinition {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ReportDefinition) => any;
}
export interface ListReportDefinitionsResult {
  /**
   * <p>The retrieved reports.</p>
   */
  reportDefinitions?: ReportDefinition[];
  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  nextToken?: string;
}
export declare namespace ListReportDefinitionsResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListReportDefinitionsResult) => any;
}
export interface PutReportDefinitionRequest {
  /**
   * <p>Required. ID of the report. You can choose any valid string matching the pattern for the
   *       ID.</p>
   */
  reportId: string | undefined;
  /**
   * <p>Required. Description of the report.</p>
   */
  reportDescription: string | undefined;
  /**
   * <p>Required. The cadence to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;
  /**
   * <p>Required. The format to use for the generated report.</p>
   */
  format: Format | string | undefined;
  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   */
  destinationS3Location: S3Location | undefined;
}
export declare namespace PutReportDefinitionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutReportDefinitionRequest) => any;
}
export interface PutReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}
export declare namespace PutReportDefinitionResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutReportDefinitionResult) => any;
}
/**
 * <p>Your request exceeds one or more of the service quotas.</p>
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
export interface UpdateReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to update.</p>
   */
  reportId: string | undefined;
  /**
   * <p>Required. Description of the report.</p>
   */
  reportDescription: string | undefined;
  /**
   * <p>Required. The cadence to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;
  /**
   * <p>Required. The format to use for the generated report.</p>
   */
  format: Format | string | undefined;
  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   */
  destinationS3Location: S3Location | undefined;
}
export declare namespace UpdateReportDefinitionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateReportDefinitionRequest) => any;
}
export interface UpdateReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}
export declare namespace UpdateReportDefinitionResult {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateReportDefinitionResult) => any;
}
