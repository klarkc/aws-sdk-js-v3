import { __extends } from "tslib";
import { DeleteApiMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApiMappingCommand,
  serializeAws_restJson1DeleteApiMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApiMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApiMappingCommand = /** @class */ (function (_super) {
  __extends(DeleteApiMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteApiMappingCommand(input) {
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
  DeleteApiMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "DeleteApiMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteApiMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteApiMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteApiMappingCommand(input, context);
  };
  DeleteApiMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteApiMappingCommand(output, context);
  };
  return DeleteApiMappingCommand;
})($Command);
export { DeleteApiMappingCommand };
//# sourceMappingURL=DeleteApiMappingCommand.js.map
