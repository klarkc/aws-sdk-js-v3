import { __extends } from "tslib";
import { DeleteFunctionRequest, DeleteFunctionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFunctionCommand,
  serializeAws_restJson1DeleteFunctionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>Function</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFunctionCommand = /** @class */ (function (_super) {
  __extends(DeleteFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteFunctionCommand(input) {
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
  DeleteFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "DeleteFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFunctionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteFunctionCommand(input, context);
  };
  DeleteFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteFunctionCommand(output, context);
  };
  return DeleteFunctionCommand;
})($Command);
export { DeleteFunctionCommand };
//# sourceMappingURL=DeleteFunctionCommand.js.map
