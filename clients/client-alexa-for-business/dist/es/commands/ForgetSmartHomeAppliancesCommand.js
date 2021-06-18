import { __extends } from "tslib";
import { ForgetSmartHomeAppliancesRequest, ForgetSmartHomeAppliancesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ForgetSmartHomeAppliancesCommand,
  serializeAws_json1_1ForgetSmartHomeAppliancesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forgets smart home appliances associated to a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ForgetSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgetSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ForgetSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ForgetSmartHomeAppliancesCommand = /** @class */ (function (_super) {
  __extends(ForgetSmartHomeAppliancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ForgetSmartHomeAppliancesCommand(input) {
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
  ForgetSmartHomeAppliancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ForgetSmartHomeAppliancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ForgetSmartHomeAppliancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ForgetSmartHomeAppliancesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ForgetSmartHomeAppliancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ForgetSmartHomeAppliancesCommand(input, context);
  };
  ForgetSmartHomeAppliancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ForgetSmartHomeAppliancesCommand(output, context);
  };
  return ForgetSmartHomeAppliancesCommand;
})($Command);
export { ForgetSmartHomeAppliancesCommand };
//# sourceMappingURL=ForgetSmartHomeAppliancesCommand.js.map
