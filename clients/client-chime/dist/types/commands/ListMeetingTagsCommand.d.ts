import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListMeetingTagsRequest, ListMeetingTagsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListMeetingTagsCommandInput extends ListMeetingTagsRequest {}
export interface ListMeetingTagsCommandOutput extends ListMeetingTagsResponse, __MetadataBearer {}
/**
 * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingTagsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingTagsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMeetingTagsCommand extends $Command<
  ListMeetingTagsCommandInput,
  ListMeetingTagsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListMeetingTagsCommandInput;
  constructor(input: ListMeetingTagsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMeetingTagsCommandInput, ListMeetingTagsCommandOutput>;
  private serialize;
  private deserialize;
}
