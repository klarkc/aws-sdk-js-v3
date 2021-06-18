import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateDeviceFromRoomRequest, DisassociateDeviceFromRoomResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DisassociateDeviceFromRoomCommandInput extends DisassociateDeviceFromRoomRequest {}
export interface DisassociateDeviceFromRoomCommandOutput extends DisassociateDeviceFromRoomResponse, __MetadataBearer {}
/**
 * <p>Disassociates a device from its current room. The device continues to be connected to
 *          the Wi-Fi network and is still registered to the account. The device settings and skills
 *          are removed from the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateDeviceFromRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDeviceFromRoomCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDeviceFromRoomCommand extends $Command<
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: DisassociateDeviceFromRoomCommandInput;
  constructor(input: DisassociateDeviceFromRoomCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDeviceFromRoomCommandInput, DisassociateDeviceFromRoomCommandOutput>;
  private serialize;
  private deserialize;
}
