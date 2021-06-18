import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetStackPolicyInput, GetStackPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetStackPolicyCommandInput extends GetStackPolicyInput {}
export interface GetStackPolicyCommandOutput extends GetStackPolicyOutput, __MetadataBearer {}
/**
 * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a
 *          null value is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetStackPolicyCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetStackPolicyCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetStackPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStackPolicyCommandInput} for command's `input` shape.
 * @see {@link GetStackPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStackPolicyCommand extends $Command<
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: GetStackPolicyCommandInput;
  constructor(input: GetStackPolicyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStackPolicyCommandInput, GetStackPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
