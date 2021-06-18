import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetRoomRequest, GetRoomResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRoomCommandInput extends GetRoomRequest {}
export interface GetRoomCommandOutput extends GetRoomResponse, __MetadataBearer {}
/**
 * <p>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoomCommandInput} for command's `input` shape.
 * @see {@link GetRoomCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRoomCommand extends $Command<
  GetRoomCommandInput,
  GetRoomCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetRoomCommandInput;
  constructor(input: GetRoomCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoomCommandInput, GetRoomCommandOutput>;
  private serialize;
  private deserialize;
}
