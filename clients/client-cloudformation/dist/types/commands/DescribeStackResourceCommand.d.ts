import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourceInput, DescribeStackResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeStackResourceCommandInput extends DescribeStackResourceInput {}
export interface DescribeStackResourceCommandOutput extends DescribeStackResourceOutput, __MetadataBearer {}
/**
 * <p>Returns a description of the specified resource in the specified stack.</p>
 *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90
 *          days after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStackResourceCommand extends $Command<
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeStackResourceCommandInput;
  constructor(input: DescribeStackResourceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackResourceCommandInput, DescribeStackResourceCommandOutput>;
  private serialize;
  private deserialize;
}
