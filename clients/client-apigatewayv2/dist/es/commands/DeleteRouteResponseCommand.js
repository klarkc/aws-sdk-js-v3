import { __extends } from "tslib";
import { DeleteRouteResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRouteResponseCommand,
  serializeAws_restJson1DeleteRouteResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRouteResponseCommand = /** @class */ (function (_super) {
  __extends(DeleteRouteResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRouteResponseCommand(input) {
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
  DeleteRouteResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteRouteResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRouteResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRouteResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRouteResponseCommand(input, context);
  };
  DeleteRouteResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRouteResponseCommand(output, context);
  };
  return DeleteRouteResponseCommand;
})($Command);
export { DeleteRouteResponseCommand };
//# sourceMappingURL=DeleteRouteResponseCommand.js.map
