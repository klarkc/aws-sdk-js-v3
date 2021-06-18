import { __extends } from "tslib";
import { DeleteUsagePlanKeyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteUsagePlanKeyCommand,
  serializeAws_restJson1DeleteUsagePlanKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a usage plan key  and remove the underlying API key from the associated usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteUsagePlanKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUsagePlanKeyCommand = /** @class */ (function (_super) {
  __extends(DeleteUsagePlanKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteUsagePlanKeyCommand(input) {
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
  DeleteUsagePlanKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteUsagePlanKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteUsagePlanKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteUsagePlanKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteUsagePlanKeyCommand(input, context);
  };
  DeleteUsagePlanKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteUsagePlanKeyCommand(output, context);
  };
  return DeleteUsagePlanKeyCommand;
})($Command);
export { DeleteUsagePlanKeyCommand };
//# sourceMappingURL=DeleteUsagePlanKeyCommand.js.map
