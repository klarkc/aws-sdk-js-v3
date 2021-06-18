import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { TagAttendeeRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface TagAttendeeCommandInput extends TagAttendeeRequest {}
export interface TagAttendeeCommandOutput extends __MetadataBearer {}
/**
 * <p>Applies the specified tags to the specified Amazon Chime SDK attendee.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, TagAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, TagAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new TagAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagAttendeeCommandInput} for command's `input` shape.
 * @see {@link TagAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagAttendeeCommand extends $Command<
  TagAttendeeCommandInput,
  TagAttendeeCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: TagAttendeeCommandInput;
  constructor(input: TagAttendeeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagAttendeeCommandInput, TagAttendeeCommandOutput>;
  private serialize;
  private deserialize;
}
