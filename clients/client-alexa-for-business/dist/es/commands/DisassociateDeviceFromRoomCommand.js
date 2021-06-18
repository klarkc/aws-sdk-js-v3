import { __extends } from "tslib";
import { DisassociateDeviceFromRoomRequest, DisassociateDeviceFromRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDeviceFromRoomCommand,
  serializeAws_json1_1DisassociateDeviceFromRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DisassociateDeviceFromRoomCommand = /** @class */ (function (_super) {
  __extends(DisassociateDeviceFromRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateDeviceFromRoomCommand(input) {
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
  DisassociateDeviceFromRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DisassociateDeviceFromRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateDeviceFromRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDeviceFromRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateDeviceFromRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisassociateDeviceFromRoomCommand(input, context);
  };
  DisassociateDeviceFromRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisassociateDeviceFromRoomCommand(output, context);
  };
  return DisassociateDeviceFromRoomCommand;
})($Command);
export { DisassociateDeviceFromRoomCommand };
//# sourceMappingURL=DisassociateDeviceFromRoomCommand.js.map
