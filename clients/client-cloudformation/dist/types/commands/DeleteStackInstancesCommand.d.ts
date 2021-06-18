import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeleteStackInstancesInput, DeleteStackInstancesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteStackInstancesCommandInput extends DeleteStackInstancesInput {}
export interface DeleteStackInstancesCommandOutput extends DeleteStackInstancesOutput, __MetadataBearer {}
/**
 * <p>Deletes stack instances for the specified accounts, in the specified Regions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStackInstancesCommand extends $Command<
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: DeleteStackInstancesCommandInput;
  constructor(input: DeleteStackInstancesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStackInstancesCommandInput, DeleteStackInstancesCommandOutput>;
  private serialize;
  private deserialize;
}
