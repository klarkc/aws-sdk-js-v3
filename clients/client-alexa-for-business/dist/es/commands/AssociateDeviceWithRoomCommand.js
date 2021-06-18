import { __extends } from "tslib";
import { AssociateDeviceWithRoomRequest, AssociateDeviceWithRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDeviceWithRoomCommand,
  serializeAws_json1_1AssociateDeviceWithRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AssociateDeviceWithRoomCommand = /** @class */ (function (_super) {
  __extends(AssociateDeviceWithRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateDeviceWithRoomCommand(input) {
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
  AssociateDeviceWithRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "AssociateDeviceWithRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateDeviceWithRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateDeviceWithRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateDeviceWithRoomCommand(input, context);
  };
  AssociateDeviceWithRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateDeviceWithRoomCommand(output, context);
  };
  return AssociateDeviceWithRoomCommand;
})($Command);
export { AssociateDeviceWithRoomCommand };
//# sourceMappingURL=AssociateDeviceWithRoomCommand.js.map
