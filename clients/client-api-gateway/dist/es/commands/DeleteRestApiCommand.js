import { __extends } from "tslib";
import { DeleteRestApiRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRestApiCommand,
  serializeAws_restJson1DeleteRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRestApiCommandInput} for command's `input` shape.
 * @see {@link DeleteRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRestApiCommand = /** @class */ (function (_super) {
  __extends(DeleteRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRestApiCommand(input) {
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
  DeleteRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRestApiCommand(input, context);
  };
  DeleteRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRestApiCommand(output, context);
  };
  return DeleteRestApiCommand;
})($Command);
export { DeleteRestApiCommand };
//# sourceMappingURL=DeleteRestApiCommand.js.map
