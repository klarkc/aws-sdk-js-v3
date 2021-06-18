import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListMeetingsRequest, ListMeetingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListMeetingsCommandInput extends ListMeetingsRequest {}
export interface ListMeetingsCommandOutput extends ListMeetingsResponse, __MetadataBearer {}
/**
 * <p>
 * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListMeetingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMeetingsCommand extends $Command<
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: ListMeetingsCommandInput;
  constructor(input: ListMeetingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMeetingsCommandInput, ListMeetingsCommandOutput>;
  private serialize;
  private deserialize;
}
