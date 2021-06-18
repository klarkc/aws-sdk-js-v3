import { __extends } from "tslib";
import { DeleteApiCacheRequest, DeleteApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApiCacheCommand,
  serializeAws_restJson1DeleteApiCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApiCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApiCacheCommand = /** @class */ (function (_super) {
  __extends(DeleteApiCacheCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteApiCacheCommand(input) {
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
  DeleteApiCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "DeleteApiCacheCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApiCacheResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteApiCacheCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteApiCacheCommand(input, context);
  };
  DeleteApiCacheCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteApiCacheCommand(output, context);
  };
  return DeleteApiCacheCommand;
})($Command);
export { DeleteApiCacheCommand };
//# sourceMappingURL=DeleteApiCacheCommand.js.map
