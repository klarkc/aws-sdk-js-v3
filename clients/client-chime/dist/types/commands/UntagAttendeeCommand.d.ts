import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UntagAttendeeRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UntagAttendeeCommandInput extends UntagAttendeeRequest {}
export interface UntagAttendeeCommandOutput extends __MetadataBearer {}
/**
 * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UntagAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UntagAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UntagAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagAttendeeCommandInput} for command's `input` shape.
 * @see {@link UntagAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagAttendeeCommand extends $Command<
  UntagAttendeeCommandInput,
  UntagAttendeeCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: UntagAttendeeCommandInput;
  constructor(input: UntagAttendeeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagAttendeeCommandInput, UntagAttendeeCommandOutput>;
  private serialize;
  private deserialize;
}
