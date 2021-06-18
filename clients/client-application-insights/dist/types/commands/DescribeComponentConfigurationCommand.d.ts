import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeComponentConfigurationRequest, DescribeComponentConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeComponentConfigurationCommandInput extends DescribeComponentConfigurationRequest {}
export interface DescribeComponentConfigurationCommandOutput
  extends DescribeComponentConfigurationResponse,
    __MetadataBearer {}
/**
 * <p>Describes the monitoring configuration of the component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeComponentConfigurationCommand extends $Command<
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  readonly input: DescribeComponentConfigurationCommandInput;
  constructor(input: DescribeComponentConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComponentConfigurationCommandInput, DescribeComponentConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}
