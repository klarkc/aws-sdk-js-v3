import { __extends } from "tslib";
import { DeleteBasePathMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBasePathMappingCommand,
  serializeAws_restJson1DeleteBasePathMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the <a>BasePathMapping</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteBasePathMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBasePathMappingCommand = /** @class */ (function (_super) {
  __extends(DeleteBasePathMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBasePathMappingCommand(input) {
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
  DeleteBasePathMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteBasePathMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBasePathMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBasePathMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBasePathMappingCommand(input, context);
  };
  DeleteBasePathMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBasePathMappingCommand(output, context);
  };
  return DeleteBasePathMappingCommand;
})($Command);
export { DeleteBasePathMappingCommand };
//# sourceMappingURL=DeleteBasePathMappingCommand.js.map
