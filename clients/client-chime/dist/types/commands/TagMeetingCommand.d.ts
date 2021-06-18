import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { TagMeetingRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface TagMeetingCommandInput extends TagMeetingRequest {}
export interface TagMeetingCommandOutput extends __MetadataBearer {}
/**
 * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, TagMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, TagMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new TagMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagMeetingCommandInput} for command's `input` shape.
 * @see {@link TagMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagMeetingCommand extends $Command<
  TagMeetingCommandInput,
  TagMeetingCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: TagMeetingCommandInput;
  constructor(input: TagMeetingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagMeetingCommandInput, TagMeetingCommandOutput>;
  private serialize;
  private deserialize;
}
