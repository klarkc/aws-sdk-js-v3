import { __extends } from "tslib";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDeviceCommand,
  serializeAws_json1_1UpdateDeviceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the device name by device ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceCommand = /** @class */ (function (_super) {
  __extends(UpdateDeviceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDeviceCommand(input) {
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
  UpdateDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateDeviceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDeviceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateDeviceCommand(input, context);
  };
  UpdateDeviceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateDeviceCommand(output, context);
  };
  return UpdateDeviceCommand;
})($Command);
export { UpdateDeviceCommand };
//# sourceMappingURL=UpdateDeviceCommand.js.map
