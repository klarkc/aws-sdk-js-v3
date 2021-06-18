import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { GetReportDefinitionRequest, GetReportDefinitionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetReportDefinitionCommandInput extends GetReportDefinitionRequest {}
export interface GetReportDefinitionCommandOutput extends GetReportDefinitionResult, __MetadataBearer {}
/**
 * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, GetReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, GetReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new GetReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReportDefinitionCommand extends $Command<
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
> {
  readonly input: GetReportDefinitionCommandInput;
  constructor(input: GetReportDefinitionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReportDefinitionCommandInput, GetReportDefinitionCommandOutput>;
  private serialize;
  private deserialize;
}
