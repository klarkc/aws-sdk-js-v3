import { __extends } from "tslib";
import { DeleteDeviceRequest, DeleteDeviceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDeviceCommand,
  serializeAws_json1_1DeleteDeviceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a device from Alexa For Business.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceCommand = /** @class */ (function (_super) {
  __extends(DeleteDeviceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDeviceCommand(input) {
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
  DeleteDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteDeviceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDeviceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteDeviceCommand(input, context);
  };
  DeleteDeviceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteDeviceCommand(output, context);
  };
  return DeleteDeviceCommand;
})($Command);
export { DeleteDeviceCommand };
//# sourceMappingURL=DeleteDeviceCommand.js.map
