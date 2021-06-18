import { __extends } from "tslib";
import { GetMethodRequest, Method } from "../models/models_0";
import {
  deserializeAws_restJson1GetMethodCommand,
  serializeAws_restJson1GetMethodCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMethodCommandInput} for command's `input` shape.
 * @see {@link GetMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMethodCommand = /** @class */ (function (_super) {
  __extends(GetMethodCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetMethodCommand(input) {
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
  GetMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetMethodCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Method.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetMethodCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetMethodCommand(input, context);
  };
  GetMethodCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetMethodCommand(output, context);
  };
  return GetMethodCommand;
})($Command);
export { GetMethodCommand };
//# sourceMappingURL=GetMethodCommand.js.map
