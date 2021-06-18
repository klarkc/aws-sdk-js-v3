import { __extends } from "tslib";
import { DeleteUsagePlanRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteUsagePlanCommand,
  serializeAws_restJson1DeleteUsagePlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a usage plan of a given plan Id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteUsagePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsagePlanCommandInput} for command's `input` shape.
 * @see {@link DeleteUsagePlanCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUsagePlanCommand = /** @class */ (function (_super) {
  __extends(DeleteUsagePlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteUsagePlanCommand(input) {
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
  DeleteUsagePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteUsagePlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteUsagePlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteUsagePlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteUsagePlanCommand(input, context);
  };
  DeleteUsagePlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteUsagePlanCommand(output, context);
  };
  return DeleteUsagePlanCommand;
})($Command);
export { DeleteUsagePlanCommand };
//# sourceMappingURL=DeleteUsagePlanCommand.js.map
