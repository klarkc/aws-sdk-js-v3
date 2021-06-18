import { __extends } from "tslib";
import { GetNetworkProfileRequest, GetNetworkProfileResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetNetworkProfileCommand,
  serializeAws_json1_1GetNetworkProfileCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the network profile details by the network profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link GetNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNetworkProfileCommand = /** @class */ (function (_super) {
  __extends(GetNetworkProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetNetworkProfileCommand(input) {
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
  GetNetworkProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "GetNetworkProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkProfileResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetNetworkProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetNetworkProfileCommand(input, context);
  };
  GetNetworkProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetNetworkProfileCommand(output, context);
  };
  return GetNetworkProfileCommand;
})($Command);
export { GetNetworkProfileCommand };
//# sourceMappingURL=GetNetworkProfileCommand.js.map
