import { __extends } from "tslib";
import { DeleteApiKeyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApiKeyCommand,
  serializeAws_restJson1DeleteApiKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the <a>ApiKey</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteApiKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApiKeyCommand = /** @class */ (function (_super) {
  __extends(DeleteApiKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteApiKeyCommand(input) {
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
  DeleteApiKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteApiKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteApiKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteApiKeyCommand(input, context);
  };
  DeleteApiKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteApiKeyCommand(output, context);
  };
  return DeleteApiKeyCommand;
})($Command);
export { DeleteApiKeyCommand };
//# sourceMappingURL=DeleteApiKeyCommand.js.map
