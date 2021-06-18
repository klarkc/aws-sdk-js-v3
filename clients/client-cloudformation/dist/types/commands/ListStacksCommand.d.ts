import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStacksInput, ListStacksOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListStacksCommandInput extends ListStacksInput {}
export interface ListStacksCommandOutput extends ListStacksOutput, __MetadataBearer {}
/**
 * <p>Returns the summary information for stacks whose status matches the specified
 *          StackStatusFilter. Summary information for stacks that have been deleted is kept for 90
 *          days after the stack is deleted. If no StackStatusFilter is specified, summary information
 *          for all stacks is returned (including existing stacks and stacks that have been
 *          deleted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStacksCommandInput} for command's `input` shape.
 * @see {@link ListStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStacksCommand extends $Command<
  ListStacksCommandInput,
  ListStacksCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListStacksCommandInput;
  constructor(input: ListStacksCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStacksCommandInput, ListStacksCommandOutput>;
  private serialize;
  private deserialize;
}
