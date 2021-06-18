import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListAttendeeTagsRequest, ListAttendeeTagsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAttendeeTagsCommandInput extends ListAttendeeTagsRequest {}
export interface ListAttendeeTagsCommandOutput extends ListAttendeeTagsResponse, __MetadataBearer {}
/**
 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAttendeeTagsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAttendeeTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAttendeeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttendeeTagsCommandInput} for command's `input` shape.
 * @see {@link ListAttendeeTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttendeeTagsCommand extends $Command<
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListAttendeeTagsCommandInput;
  constructor(input: ListAttendeeTagsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput>;
  private serialize;
  private deserialize;
}
