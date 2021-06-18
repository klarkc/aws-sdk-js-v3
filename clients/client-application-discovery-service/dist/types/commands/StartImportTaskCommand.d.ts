import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { StartImportTaskRequest, StartImportTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartImportTaskCommandInput extends StartImportTaskRequest {}
export interface StartImportTaskCommandOutput extends StartImportTaskResponse, __MetadataBearer {}
/**
 * <p>Starts an import task, which allows you to import details of your on-premises environment
 *       directly into AWS Migration Hub without having to use the Application Discovery Service (ADS)
 *       tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform
 *       migration assessment and planning directly from your imported data, including the ability to
 *       group your devices as applications and track their migration status.</p>
 *
 *          <p>To start an import request, do this:</p>
 *
 *          <ol>
 *             <li>
 *                <p>Download the specially formatted comma separated value (CSV) import template, which
 *           you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p>
 *             </li>
 *             <li>
 *                <p>Fill out the template with your server and application data.</p>
 *             </li>
 *             <li>
 *                <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
 *           Your import file must be in the CSV format.</p>
 *             </li>
 *             <li>
 *                <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of
 *           the AWS SDKs to import the records from your file.</p>
 *             </li>
 *          </ol>
 *
 *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub
 *         Import</a> in the <i>AWS Application Discovery Service User
 *       Guide</i>.</p>
 *
 *          <note>
 *             <p>There are limits to the number of import tasks you can create (and delete) in an AWS
 *         account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application
 *           Discovery Service Limits</a> in the <i>AWS Application Discovery Service User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartImportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartImportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartImportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartImportTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartImportTaskCommand extends $Command<
  StartImportTaskCommandInput,
  StartImportTaskCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: StartImportTaskCommandInput;
  constructor(input: StartImportTaskCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartImportTaskCommandInput, StartImportTaskCommandOutput>;
  private serialize;
  private deserialize;
}
