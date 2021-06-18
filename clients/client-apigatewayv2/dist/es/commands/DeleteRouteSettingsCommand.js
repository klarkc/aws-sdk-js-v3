import { __extends } from "tslib";
import { DeleteRouteSettingsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRouteSettingsCommand,
  serializeAws_restJson1DeleteRouteSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the RouteSettings for a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteSettingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteRouteSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteSettingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRouteSettingsCommand = /** @class */ (function (_super) {
  __extends(DeleteRouteSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRouteSettingsCommand(input) {
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
  DeleteRouteSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteRouteSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRouteSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRouteSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRouteSettingsCommand(input, context);
  };
  DeleteRouteSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRouteSettingsCommand(output, context);
  };
  return DeleteRouteSettingsCommand;
})($Command);
export { DeleteRouteSettingsCommand };
//# sourceMappingURL=DeleteRouteSettingsCommand.js.map
