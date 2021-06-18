import { __extends } from "tslib";
import { FlushApiCacheRequest, FlushApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1FlushApiCacheCommand,
  serializeAws_restJson1FlushApiCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Flushes an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, FlushApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, FlushApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new FlushApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlushApiCacheCommandInput} for command's `input` shape.
 * @see {@link FlushApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FlushApiCacheCommand = /** @class */ (function (_super) {
  __extends(FlushApiCacheCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function FlushApiCacheCommand(input) {
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
  FlushApiCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "FlushApiCacheCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: FlushApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FlushApiCacheResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  FlushApiCacheCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1FlushApiCacheCommand(input, context);
  };
  FlushApiCacheCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1FlushApiCacheCommand(output, context);
  };
  return FlushApiCacheCommand;
})($Command);
export { FlushApiCacheCommand };
//# sourceMappingURL=FlushApiCacheCommand.js.map
