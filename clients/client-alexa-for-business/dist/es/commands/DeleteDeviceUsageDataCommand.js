import { __extends } from "tslib";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDeviceUsageDataCommand,
  serializeAws_json1_1DeleteDeviceUsageDataCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteDeviceUsageDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceUsageDataCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceUsageDataCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceUsageDataCommand = /** @class */ (function (_super) {
  __extends(DeleteDeviceUsageDataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDeviceUsageDataCommand(input) {
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
  DeleteDeviceUsageDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteDeviceUsageDataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDeviceUsageDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceUsageDataResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDeviceUsageDataCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteDeviceUsageDataCommand(input, context);
  };
  DeleteDeviceUsageDataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteDeviceUsageDataCommand(output, context);
  };
  return DeleteDeviceUsageDataCommand;
})($Command);
export { DeleteDeviceUsageDataCommand };
//# sourceMappingURL=DeleteDeviceUsageDataCommand.js.map
