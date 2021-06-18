import { __extends } from "tslib";
import { UpdateRouteResponseRequest, UpdateRouteResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRouteResponseCommand,
  serializeAws_restJson1UpdateRouteResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRouteResponseCommand = /** @class */ (function (_super) {
  __extends(UpdateRouteResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRouteResponseCommand(input) {
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
  UpdateRouteResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "UpdateRouteResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRouteResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRouteResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRouteResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRouteResponseCommand(input, context);
  };
  UpdateRouteResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRouteResponseCommand(output, context);
  };
  return UpdateRouteResponseCommand;
})($Command);
export { UpdateRouteResponseCommand };
//# sourceMappingURL=UpdateRouteResponseCommand.js.map
