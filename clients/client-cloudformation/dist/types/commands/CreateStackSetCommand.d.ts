import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CreateStackSetInput, CreateStackSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateStackSetCommandInput extends CreateStackSetInput {}
export interface CreateStackSetCommandOutput extends CreateStackSetOutput, __MetadataBearer {}
/**
 * <p>Creates a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStackSetCommandInput} for command's `input` shape.
 * @see {@link CreateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStackSetCommand extends $Command<
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: CreateStackSetCommandInput;
  constructor(input: CreateStackSetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStackSetCommandInput, CreateStackSetCommandOutput>;
  private serialize;
  private deserialize;
}
