import { __extends } from "tslib";
import { GetDeviceRequest, GetDeviceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDeviceCommand,
  serializeAws_restJson1GetDeviceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the devices available in Amazon Braket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetDeviceCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetDeviceCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceCommand = /** @class */ (function (_super) {
  __extends(GetDeviceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDeviceCommand(input) {
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
  GetDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BraketClient";
    var commandName = "GetDeviceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDeviceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDeviceCommand(input, context);
  };
  GetDeviceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDeviceCommand(output, context);
  };
  return GetDeviceCommand;
})($Command);
export { GetDeviceCommand };
//# sourceMappingURL=GetDeviceCommand.js.map
