import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { StopContinuousExportRequest, StopContinuousExportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StopContinuousExportCommandInput extends StopContinuousExportRequest {}
export interface StopContinuousExportCommandOutput extends StopContinuousExportResponse, __MetadataBearer {}
/**
 * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StopContinuousExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StopContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopContinuousExportCommand extends $Command<
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: StopContinuousExportCommandInput;
  constructor(input: StopContinuousExportCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopContinuousExportCommandInput, StopContinuousExportCommandOutput>;
  private serialize;
  private deserialize;
}
