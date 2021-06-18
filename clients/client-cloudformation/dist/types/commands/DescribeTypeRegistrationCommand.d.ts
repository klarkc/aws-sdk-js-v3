import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DescribeTypeRegistrationCommandInput extends DescribeTypeRegistrationInput {}
export interface DescribeTypeRegistrationCommandOutput extends DescribeTypeRegistrationOutput, __MetadataBearer {}
/**
 * <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p>
 *          <p>When you initiate a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can then use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to monitor the progress of that registration request.</p>
 *          <p>Once the registration request has completed, use <code>
 *                <a>DescribeType</a>
 *             </code> to return detailed information about an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeRegistrationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeRegistrationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeRegistrationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTypeRegistrationCommand extends $Command<
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DescribeTypeRegistrationCommandInput;
  constructor(input: DescribeTypeRegistrationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput>;
  private serialize;
  private deserialize;
}
