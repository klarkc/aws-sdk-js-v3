import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartDeviceSyncRequest, StartDeviceSyncResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartDeviceSyncCommandInput extends StartDeviceSyncRequest {}
export interface StartDeviceSyncCommandOutput extends StartDeviceSyncResponse, __MetadataBearer {}
/**
 * <p>Resets a device and its account to the known default settings. This clears all
 *          information and settings set by previous users in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Bluetooth - This unpairs all bluetooth devices paired with your echo
 *                device.</p>
 *             </li>
 *             <li>
 *                <p>Volume - This resets the echo device's volume to the default value.</p>
 *             </li>
 *             <li>
 *                <p>Notifications - This clears all notifications from your echo device.</p>
 *             </li>
 *             <li>
 *                <p>Lists - This clears all to-do items from your echo device.</p>
 *             </li>
 *             <li>
 *                <p>Settings - This internally syncs the room's profile (if the device is assigned to
 *                a room), contacts, address books, delegation access for account linking, and
 *                communications (if enabled on the room profile).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartDeviceSyncCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartDeviceSyncCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new StartDeviceSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeviceSyncCommandInput} for command's `input` shape.
 * @see {@link StartDeviceSyncCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDeviceSyncCommand extends $Command<
  StartDeviceSyncCommandInput,
  StartDeviceSyncCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: StartDeviceSyncCommandInput;
  constructor(input: StartDeviceSyncCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput>;
  private serialize;
  private deserialize;
}
