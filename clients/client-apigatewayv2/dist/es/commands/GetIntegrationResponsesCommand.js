import { __extends } from "tslib";
import { GetIntegrationResponsesRequest, GetIntegrationResponsesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIntegrationResponsesCommand,
  serializeAws_restJson1GetIntegrationResponsesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the IntegrationResponses for an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetIntegrationResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationResponsesCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponsesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntegrationResponsesCommand = /** @class */ (function (_super) {
  __extends(GetIntegrationResponsesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetIntegrationResponsesCommand(input) {
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
  GetIntegrationResponsesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetIntegrationResponsesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetIntegrationResponsesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntegrationResponsesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetIntegrationResponsesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetIntegrationResponsesCommand(input, context);
  };
  GetIntegrationResponsesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetIntegrationResponsesCommand(output, context);
  };
  return GetIntegrationResponsesCommand;
})($Command);
export { GetIntegrationResponsesCommand };
//# sourceMappingURL=GetIntegrationResponsesCommand.js.map
