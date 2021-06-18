import { __extends } from "tslib";
import { GetMethodResponseRequest, MethodResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMethodResponseCommand,
  serializeAws_restJson1GetMethodResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMethodResponseCommandInput} for command's `input` shape.
 * @see {@link GetMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMethodResponseCommand = /** @class */ (function (_super) {
  __extends(GetMethodResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetMethodResponseCommand(input) {
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
  GetMethodResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetMethodResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetMethodResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MethodResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetMethodResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetMethodResponseCommand(input, context);
  };
  GetMethodResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetMethodResponseCommand(output, context);
  };
  return GetMethodResponseCommand;
})($Command);
export { GetMethodResponseCommand };
//# sourceMappingURL=GetMethodResponseCommand.js.map
