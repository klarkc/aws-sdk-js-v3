import { __extends } from "tslib";
import { GetRouteResponseRequest, GetRouteResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRouteResponseCommand,
  serializeAws_restJson1GetRouteResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteResponseCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRouteResponseCommand = /** @class */ (function (_super) {
  __extends(GetRouteResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRouteResponseCommand(input) {
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
  GetRouteResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetRouteResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRouteResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRouteResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRouteResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRouteResponseCommand(input, context);
  };
  GetRouteResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRouteResponseCommand(output, context);
  };
  return GetRouteResponseCommand;
})($Command);
export { GetRouteResponseCommand };
//# sourceMappingURL=GetRouteResponseCommand.js.map
