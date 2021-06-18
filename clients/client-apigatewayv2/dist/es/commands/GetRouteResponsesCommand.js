import { __extends } from "tslib";
import { GetRouteResponsesRequest, GetRouteResponsesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRouteResponsesCommand,
  serializeAws_restJson1GetRouteResponsesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the RouteResponses for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRouteResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteResponsesCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponsesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRouteResponsesCommand = /** @class */ (function (_super) {
  __extends(GetRouteResponsesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRouteResponsesCommand(input) {
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
  GetRouteResponsesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetRouteResponsesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRouteResponsesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRouteResponsesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRouteResponsesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRouteResponsesCommand(input, context);
  };
  GetRouteResponsesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRouteResponsesCommand(output, context);
  };
  return GetRouteResponsesCommand;
})($Command);
export { GetRouteResponsesCommand };
//# sourceMappingURL=GetRouteResponsesCommand.js.map
