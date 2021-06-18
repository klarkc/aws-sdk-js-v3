"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartDeviceSyncCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class StartDeviceSyncCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "StartDeviceSyncCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.StartDeviceSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.StartDeviceSyncResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1StartDeviceSyncCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1StartDeviceSyncCommand(output, context);
  }
}
exports.StartDeviceSyncCommand = StartDeviceSyncCommand;
//# sourceMappingURL=StartDeviceSyncCommand.js.map
