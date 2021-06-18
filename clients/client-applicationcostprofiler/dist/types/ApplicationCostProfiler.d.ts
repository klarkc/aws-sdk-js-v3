import { ApplicationCostProfilerClient } from "./ApplicationCostProfilerClient";
import {
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
} from "./commands/DeleteReportDefinitionCommand";
import {
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
} from "./commands/GetReportDefinitionCommand";
import {
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
} from "./commands/ImportApplicationUsageCommand";
import {
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "./commands/ListReportDefinitionsCommand";
import {
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "./commands/PutReportDefinitionCommand";
import {
  UpdateReportDefinitionCommandInput,
  UpdateReportDefinitionCommandOutput,
} from "./commands/UpdateReportDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p>
 *          <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete
 *       application cost report definitions, as well as to import your usage data into the Application Cost Profiler
 *       service.</p>
 *          <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost
 *         Profiler User Guide</a>.</p>
 */
export declare class ApplicationCostProfiler extends ApplicationCostProfilerClient {
  /**
   * <p>Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being
   *       generated.</p>
   */
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportDefinitionCommandOutput>;
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;
  deleteReportDefinition(
    args: DeleteReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
   */
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportDefinitionCommandOutput>;
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;
  getReportDefinition(
    args: GetReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportDefinitionCommandOutput) => void
  ): void;
  /**
   * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
   *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
   *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
   *       asynchronously.</p>
   */
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApplicationUsageCommandOutput>;
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;
  importApplicationUsage(
    args: ImportApplicationUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApplicationUsageCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
   *          <p>The maximum number of reports is one.</p>
   */
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportDefinitionsCommandOutput>;
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): void;
  listReportDefinitions(
    args: ListReportDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportDefinitionsCommandOutput) => void
  ): void;
  /**
   * <p>Creates the report definition for a report in Application Cost Profiler.</p>
   */
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutReportDefinitionCommandOutput>;
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): void;
  putReportDefinition(
    args: PutReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutReportDefinitionCommandOutput) => void
  ): void;
  /**
   * <p>Updates existing report in AWS Application Cost Profiler.</p>
   */
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportDefinitionCommandOutput>;
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
  updateReportDefinition(
    args: UpdateReportDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportDefinitionCommandOutput) => void
  ): void;
}
