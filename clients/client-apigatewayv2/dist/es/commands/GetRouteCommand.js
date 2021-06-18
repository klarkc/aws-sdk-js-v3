import { __extends } from "tslib";
import { GetRouteRequest, GetRouteResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetRouteCommand,
  serializeAws_restJson1GetRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteCommandInput} for command's `input` shape.
 * @see {@link GetRouteCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRouteCommand = /** @class */ (function (_super) {
  __extends(GetRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRouteCommand(input) {
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
  GetRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRouteResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRouteCommand(input, context);
  };
  GetRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRouteCommand(output, context);
  };
  return GetRouteCommand;
})($Command);
export { GetRouteCommand };
//# sourceMappingURL=GetRouteCommand.js.map
