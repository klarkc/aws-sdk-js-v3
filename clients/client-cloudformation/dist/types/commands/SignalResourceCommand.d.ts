import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SignalResourceInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface SignalResourceCommandInput extends SignalResourceInput {}
export interface SignalResourceCommandOutput extends __MetadataBearer {}
/**
 * <p>Sends a signal to the specified resource with a success or failure status. You can
 *          use the SignalResource API in conjunction with a creation policy or update policy. AWS
 *          CloudFormation doesn't proceed with a stack creation or update until resources receive the
 *          required number of signals or the timeout period is exceeded. The SignalResource API is
 *          useful in cases where you want to send signals from anywhere other than an Amazon EC2
 *          instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SignalResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SignalResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SignalResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignalResourceCommandInput} for command's `input` shape.
 * @see {@link SignalResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SignalResourceCommand extends $Command<
  SignalResourceCommandInput,
  SignalResourceCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: SignalResourceCommandInput;
  constructor(input: SignalResourceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SignalResourceCommandInput, SignalResourceCommandOutput>;
  private serialize;
  private deserialize;
}
