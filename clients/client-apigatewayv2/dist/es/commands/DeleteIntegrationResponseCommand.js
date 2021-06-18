import { __extends } from "tslib";
import { DeleteIntegrationResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIntegrationResponseCommand,
  serializeAws_restJson1DeleteIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(DeleteIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteIntegrationResponseCommand(input) {
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
  DeleteIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteIntegrationResponseCommand(input, context);
  };
  DeleteIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteIntegrationResponseCommand(output, context);
  };
  return DeleteIntegrationResponseCommand;
})($Command);
export { DeleteIntegrationResponseCommand };
//# sourceMappingURL=DeleteIntegrationResponseCommand.js.map
