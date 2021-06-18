import { __extends } from "tslib";
import { GetIntegrationResponseRequest, GetIntegrationResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIntegrationResponseCommand,
  serializeAws_restJson1GetIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(GetIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetIntegrationResponseCommand(input) {
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
  GetIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntegrationResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetIntegrationResponseCommand(input, context);
  };
  GetIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetIntegrationResponseCommand(output, context);
  };
  return GetIntegrationResponseCommand;
})($Command);
export { GetIntegrationResponseCommand };
//# sourceMappingURL=GetIntegrationResponseCommand.js.map
