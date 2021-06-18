import { __extends } from "tslib";
import { CreateRouteResponseRequest, CreateRouteResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRouteResponseCommand,
  serializeAws_restJson1CreateRouteResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a RouteResponse for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link CreateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRouteResponseCommand = /** @class */ (function (_super) {
  __extends(CreateRouteResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRouteResponseCommand(input) {
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
  CreateRouteResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "CreateRouteResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRouteResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRouteResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRouteResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateRouteResponseCommand(input, context);
  };
  CreateRouteResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateRouteResponseCommand(output, context);
  };
  return CreateRouteResponseCommand;
})($Command);
export { CreateRouteResponseCommand };
//# sourceMappingURL=CreateRouteResponseCommand.js.map
