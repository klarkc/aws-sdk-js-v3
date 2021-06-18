import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteStackSetInput, DeleteStackSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteStackSetCommandInput extends DeleteStackSetInput {}
export interface DeleteStackSetCommandOutput extends DeleteStackSetOutput, __MetadataBearer {}
/**
 * <p>Deletes a stack set. Before you can delete a stack set, all of its member stack
 *          instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackSetCommandInput} for command's `input` shape.
 * @see {@link DeleteStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStackSetCommand extends $Command<
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DeleteStackSetCommandInput;
  constructor(input: DeleteStackSetCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStackSetCommandInput, DeleteStackSetCommandOutput>;
  private serialize;
  private deserialize;
}
