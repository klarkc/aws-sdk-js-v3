import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListChannelsRequest, ListChannelsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListChannelsCommandInput extends ListChannelsRequest {}
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}
/**
 * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p>
 *
 *          <p class="title">
 *             <b>Functionality & restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p>
 *             </li>
 *             <li>
 *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the
 *                     private channels in an account.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListChannelsCommand extends $Command<
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListChannelsCommandInput;
  constructor(input: ListChannelsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelsCommandInput, ListChannelsCommandOutput>;
  private serialize;
  private deserialize;
}
