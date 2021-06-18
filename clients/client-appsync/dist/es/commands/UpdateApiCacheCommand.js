import { __extends } from "tslib";
import { UpdateApiCacheRequest, UpdateApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApiCacheCommand,
  serializeAws_restJson1UpdateApiCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApiCacheCommand = /** @class */ (function (_super) {
  __extends(UpdateApiCacheCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateApiCacheCommand(input) {
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
  UpdateApiCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateApiCacheCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApiCacheResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateApiCacheCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateApiCacheCommand(input, context);
  };
  UpdateApiCacheCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateApiCacheCommand(output, context);
  };
  return UpdateApiCacheCommand;
})($Command);
export { UpdateApiCacheCommand };
//# sourceMappingURL=UpdateApiCacheCommand.js.map
