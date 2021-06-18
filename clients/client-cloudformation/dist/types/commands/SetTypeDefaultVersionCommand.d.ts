import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface SetTypeDefaultVersionCommandInput extends SetTypeDefaultVersionInput {}
export interface SetTypeDefaultVersionCommandOutput extends SetTypeDefaultVersionOutput, __MetadataBearer {}
/**
 * <p>Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetTypeDefaultVersionCommand extends $Command<
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: SetTypeDefaultVersionCommandInput;
  constructor(input: SetTypeDefaultVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput>;
  private serialize;
  private deserialize;
}
