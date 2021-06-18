import { __extends } from "tslib";
import { DeleteMethodResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMethodResponseCommand,
  serializeAws_restJson1DeleteMethodResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMethodResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMethodResponseCommand = /** @class */ (function (_super) {
  __extends(DeleteMethodResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteMethodResponseCommand(input) {
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
  DeleteMethodResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteMethodResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteMethodResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteMethodResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteMethodResponseCommand(input, context);
  };
  DeleteMethodResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteMethodResponseCommand(output, context);
  };
  return DeleteMethodResponseCommand;
})($Command);
export { DeleteMethodResponseCommand };
//# sourceMappingURL=DeleteMethodResponseCommand.js.map
