import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListAccountsRequest, ListAccountsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAccountsCommandInput extends ListAccountsRequest {}
export interface ListAccountsCommandOutput extends ListAccountsResponse, __MetadataBearer {}
/**
 * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
 *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
 *             filter by the user's email address, which returns one account result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAccountsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAccountsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountsCommand extends $Command<
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListAccountsCommandInput;
  constructor(input: ListAccountsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountsCommandInput, ListAccountsCommandOutput>;
  private serialize;
  private deserialize;
}
