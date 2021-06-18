import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListStackSetOperationsCommandInput extends ListStackSetOperationsInput {}
export interface ListStackSetOperationsCommandOutput extends ListStackSetOperationsOutput, __MetadataBearer {}
/**
 * <p>Returns summary information about operations performed on a stack set. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStackSetOperationsCommand extends $Command<
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListStackSetOperationsCommandInput;
  constructor(input: ListStackSetOperationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput>;
  private serialize;
  private deserialize;
}
