import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UntagMeetingRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UntagMeetingCommandInput extends UntagMeetingRequest {}
export interface UntagMeetingCommandOutput extends __MetadataBearer {}
/**
 * <p>Untags the specified tags from the specified Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UntagMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UntagMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UntagMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagMeetingCommandInput} for command's `input` shape.
 * @see {@link UntagMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagMeetingCommand extends $Command<
  UntagMeetingCommandInput,
  UntagMeetingCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: UntagMeetingCommandInput;
  constructor(input: UntagMeetingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagMeetingCommandInput, UntagMeetingCommandOutput>;
  private serialize;
  private deserialize;
}
