import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { UpdateComponentConfigurationRequest, UpdateComponentConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateComponentConfigurationCommandInput extends UpdateComponentConfigurationRequest {}
export interface UpdateComponentConfigurationCommandOutput
  extends UpdateComponentConfigurationResponse,
    __MetadataBearer {}
/**
 * <p>Updates the monitoring configurations for the component. The configuration input parameter
 *          is an escaped JSON of the configuration and should match the schema of what is returned
 *          by <code>DescribeComponentConfigurationRecommendation</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new UpdateComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateComponentConfigurationCommand extends $Command<
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  readonly input: UpdateComponentConfigurationCommandInput;
  constructor(input: UpdateComponentConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateComponentConfigurationCommandInput, UpdateComponentConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}
