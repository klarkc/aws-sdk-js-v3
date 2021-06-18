import { __extends } from "tslib";
import { DeleteTypeRequest, DeleteTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTypeCommand,
  serializeAws_restJson1DeleteTypeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTypeCommand = /** @class */ (function (_super) {
  __extends(DeleteTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteTypeCommand(input) {
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
  DeleteTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "DeleteTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTypeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteTypeCommand(input, context);
  };
  DeleteTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteTypeCommand(output, context);
  };
  return DeleteTypeCommand;
})($Command);
export { DeleteTypeCommand };
//# sourceMappingURL=DeleteTypeCommand.js.map
