import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeVersionsInput, ListTypeVersionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListTypeVersionsCommandInput extends ListTypeVersionsInput {}
export interface ListTypeVersionsCommandOutput extends ListTypeVersionsOutput, __MetadataBearer {}
/**
 * <p>Returns summary information about the versions of an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeVersionsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeVersionsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTypeVersionsCommand extends $Command<
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: ListTypeVersionsCommandInput;
  constructor(input: ListTypeVersionsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
