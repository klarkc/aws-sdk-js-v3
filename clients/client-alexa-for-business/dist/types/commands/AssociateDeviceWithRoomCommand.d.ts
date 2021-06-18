import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateDeviceWithRoomRequest, AssociateDeviceWithRoomResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociateDeviceWithRoomCommandInput extends AssociateDeviceWithRoomRequest {}
export interface AssociateDeviceWithRoomCommandOutput extends AssociateDeviceWithRoomResponse, __MetadataBearer {}
/**
 * <p>Associates a device with a given room. This applies all the settings from the room
 *          profile to the device, and all the skills in any skill groups added to that room. This
 *          operation requires the device to be online, or else a manual sync is required. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateDeviceWithRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateDeviceWithRoomCommand extends $Command<
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: AssociateDeviceWithRoomCommandInput;
  constructor(input: AssociateDeviceWithRoomCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput>;
  private serialize;
  private deserialize;
}
