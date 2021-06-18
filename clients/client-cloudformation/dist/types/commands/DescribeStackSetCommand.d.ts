import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackSetInput, DescribeStackSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeStackSetCommandInput extends DescribeStackSetInput {}
export interface DescribeStackSetCommandOutput extends DescribeStackSetOutput, __MetadataBearer {}
/**
 * <p>Returns the description of the specified stack set. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackSetCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackSetCommand extends $Command<
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeStackSetCommandInput;
  constructor(input: DescribeStackSetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackSetCommandInput, DescribeStackSetCommandOutput>;
  private serialize;
  private deserialize;
}
