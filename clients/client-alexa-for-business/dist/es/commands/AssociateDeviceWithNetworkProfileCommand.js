import { __extends } from "tslib";
import {
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithNetworkProfileResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand,
  serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a device with the specified network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateDeviceWithNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateDeviceWithNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateDeviceWithNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDeviceWithNetworkProfileCommand = /** @class */ (function (_super) {
  __extends(AssociateDeviceWithNetworkProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateDeviceWithNetworkProfileCommand(input) {
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
  AssociateDeviceWithNetworkProfileCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "AssociateDeviceWithNetworkProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateDeviceWithNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithNetworkProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateDeviceWithNetworkProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(input, context);
  };
  AssociateDeviceWithNetworkProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(output, context);
  };
  return AssociateDeviceWithNetworkProfileCommand;
})($Command);
export { AssociateDeviceWithNetworkProfileCommand };
//# sourceMappingURL=AssociateDeviceWithNetworkProfileCommand.js.map
