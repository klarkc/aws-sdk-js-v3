import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeTypeCommandInput extends DescribeTypeInput {}
export interface DescribeTypeCommandOutput extends DescribeTypeOutput, __MetadataBearer {}
/**
 * <p>Returns detailed information about an extension that has been registered.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTypeCommand extends $Command<
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeTypeCommandInput;
  constructor(input: DescribeTypeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTypeCommandInput, DescribeTypeCommandOutput>;
  private serialize;
  private deserialize;
}
