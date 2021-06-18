import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListChannelMessagesRequest, ListChannelMessagesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListChannelMessagesCommandInput extends ListChannelMessagesRequest {}
export interface ListChannelMessagesCommandOutput extends ListChannelMessagesResponse, __MetadataBearer {}
/**
 * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>.
 *             By default, sorted by creation timestamp in descending
 *             order.</p>
 *
 *          <note>
 *             <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted.
 *                 Deleted messages do not appear in the results. This action always returns the latest
 *                 version of an edited message.</p>
 *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the
 *         value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelMessagesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelMessagesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelMessagesCommandInput} for command's `input` shape.
 * @see {@link ListChannelMessagesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListChannelMessagesCommand extends $Command<
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListChannelMessagesCommandInput;
  constructor(input: ListChannelMessagesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelMessagesCommandInput, ListChannelMessagesCommandOutput>;
  private serialize;
  private deserialize;
}
