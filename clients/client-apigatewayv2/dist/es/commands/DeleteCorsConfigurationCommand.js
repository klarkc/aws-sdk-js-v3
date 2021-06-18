import { __extends } from "tslib";
import { DeleteCorsConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCorsConfigurationCommand,
  serializeAws_restJson1DeleteCorsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a CORS configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteCorsConfigurationCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteCorsConfigurationCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteCorsConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCorsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCorsConfigurationCommand = /** @class */ (function (_super) {
  __extends(DeleteCorsConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteCorsConfigurationCommand(input) {
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
  DeleteCorsConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteCorsConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteCorsConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteCorsConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteCorsConfigurationCommand(input, context);
  };
  DeleteCorsConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteCorsConfigurationCommand(output, context);
  };
  return DeleteCorsConfigurationCommand;
})($Command);
export { DeleteCorsConfigurationCommand };
//# sourceMappingURL=DeleteCorsConfigurationCommand.js.map
