import { __extends } from "tslib";
import { UpdateIntegrationResponseRequest, UpdateIntegrationResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIntegrationResponseCommand,
  serializeAws_restJson1UpdateIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(UpdateIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateIntegrationResponseCommand(input) {
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
  UpdateIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "UpdateIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateIntegrationResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateIntegrationResponseCommand(input, context);
  };
  UpdateIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommand(output, context);
  };
  return UpdateIntegrationResponseCommand;
})($Command);
export { UpdateIntegrationResponseCommand };
//# sourceMappingURL=UpdateIntegrationResponseCommand.js.map
