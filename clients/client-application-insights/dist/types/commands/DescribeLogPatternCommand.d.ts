import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeLogPatternRequest, DescribeLogPatternResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeLogPatternCommandInput extends DescribeLogPatternRequest {}
export interface DescribeLogPatternCommandOutput extends DescribeLogPatternResponse, __MetadataBearer {}
/**
 * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLogPatternCommandInput} for command's `input` shape.
 * @see {@link DescribeLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLogPatternCommand extends $Command<
  DescribeLogPatternCommandInput,
  DescribeLogPatternCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  readonly input: DescribeLogPatternCommandInput;
  constructor(input: DescribeLogPatternCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput>;
  private serialize;
  private deserialize;
}
