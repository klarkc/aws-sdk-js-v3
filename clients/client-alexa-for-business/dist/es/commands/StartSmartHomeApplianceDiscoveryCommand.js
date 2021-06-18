import { __extends } from "tslib";
import { StartSmartHomeApplianceDiscoveryRequest, StartSmartHomeApplianceDiscoveryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
  serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new StartSmartHomeApplianceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSmartHomeApplianceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartSmartHomeApplianceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSmartHomeApplianceDiscoveryCommand = /** @class */ (function (_super) {
  __extends(StartSmartHomeApplianceDiscoveryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartSmartHomeApplianceDiscoveryCommand(input) {
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
  StartSmartHomeApplianceDiscoveryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "StartSmartHomeApplianceDiscoveryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartSmartHomeApplianceDiscoveryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(input, context);
  };
  StartSmartHomeApplianceDiscoveryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(output, context);
  };
  return StartSmartHomeApplianceDiscoveryCommand;
})($Command);
export { StartSmartHomeApplianceDiscoveryCommand };
//# sourceMappingURL=StartSmartHomeApplianceDiscoveryCommand.js.map
