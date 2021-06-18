import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListStackSetOperationResultsCommandInput extends ListStackSetOperationResultsInput {}
export interface ListStackSetOperationResultsCommandOutput
  extends ListStackSetOperationResultsOutput,
    __MetadataBearer {}
/**
 * <p>Returns summary information about the results of a stack set operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStackSetOperationResultsCommand extends $Command<
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListStackSetOperationResultsCommandInput;
  constructor(input: ListStackSetOperationResultsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput>;
  private serialize;
  private deserialize;
}
