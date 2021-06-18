import { __extends } from "tslib";
import { CreateApiCacheRequest, CreateApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateApiCacheCommand,
  serializeAws_restJson1CreateApiCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiCacheCommandInput} for command's `input` shape.
 * @see {@link CreateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApiCacheCommand = /** @class */ (function (_super) {
  __extends(CreateApiCacheCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateApiCacheCommand(input) {
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
  CreateApiCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "CreateApiCacheCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApiCacheResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateApiCacheCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateApiCacheCommand(input, context);
  };
  CreateApiCacheCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateApiCacheCommand(output, context);
  };
  return CreateApiCacheCommand;
})($Command);
export { CreateApiCacheCommand };
//# sourceMappingURL=CreateApiCacheCommand.js.map
