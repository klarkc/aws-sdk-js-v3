import { __extends } from "tslib";
import { DeleteAccessLogSettingsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccessLogSettingsCommand,
  serializeAws_restJson1DeleteAccessLogSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteAccessLogSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessLogSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessLogSettingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessLogSettingsCommand = /** @class */ (function (_super) {
  __extends(DeleteAccessLogSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAccessLogSettingsCommand(input) {
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
  DeleteAccessLogSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteAccessLogSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAccessLogSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAccessLogSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAccessLogSettingsCommand(input, context);
  };
  DeleteAccessLogSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAccessLogSettingsCommand(output, context);
  };
  return DeleteAccessLogSettingsCommand;
})($Command);
export { DeleteAccessLogSettingsCommand };
//# sourceMappingURL=DeleteAccessLogSettingsCommand.js.map
