import { __extends } from "tslib";
import { StartDeviceSyncRequest, StartDeviceSyncResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartDeviceSyncCommand,
  serializeAws_json1_1StartDeviceSyncCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var StartDeviceSyncCommand = /** @class */ (function (_super) {
  __extends(StartDeviceSyncCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartDeviceSyncCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  StartDeviceSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "StartDeviceSyncCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartDeviceSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDeviceSyncResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartDeviceSyncCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartDeviceSyncCommand(input, context);
  };
  StartDeviceSyncCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartDeviceSyncCommand(output, context);
  };
  return StartDeviceSyncCommand;
})($Command);
export { StartDeviceSyncCommand };
//# sourceMappingURL=StartDeviceSyncCommand.js.map
