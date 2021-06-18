import { __extends } from "tslib";
import { DeleteRequestValidatorRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRequestValidatorCommand,
  serializeAws_restJson1DeleteRequestValidatorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRequestValidatorCommand = /** @class */ (function (_super) {
  __extends(DeleteRequestValidatorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRequestValidatorCommand(input) {
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
  DeleteRequestValidatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteRequestValidatorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRequestValidatorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRequestValidatorCommand(input, context);
  };
  DeleteRequestValidatorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRequestValidatorCommand(output, context);
  };
  return DeleteRequestValidatorCommand;
})($Command);
export { DeleteRequestValidatorCommand };
//# sourceMappingURL=DeleteRequestValidatorCommand.js.map
