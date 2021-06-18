import { __extends } from "tslib";
import { GetApiCacheRequest, GetApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetApiCacheCommand,
  serializeAws_restJson1GetApiCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiCacheCommandInput} for command's `input` shape.
 * @see {@link GetApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiCacheCommand = /** @class */ (function (_super) {
  __extends(GetApiCacheCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiCacheCommand(input) {
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
  GetApiCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetApiCacheCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiCacheResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiCacheCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiCacheCommand(input, context);
  };
  GetApiCacheCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiCacheCommand(output, context);
  };
  return GetApiCacheCommand;
})($Command);
export { GetApiCacheCommand };
//# sourceMappingURL=GetApiCacheCommand.js.map
