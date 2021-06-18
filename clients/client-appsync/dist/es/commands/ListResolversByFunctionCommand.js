import { __extends } from "tslib";
import { ListResolversByFunctionRequest, ListResolversByFunctionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListResolversByFunctionCommand,
  serializeAws_restJson1ListResolversByFunctionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the resolvers that are associated with a specific function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversByFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversByFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListResolversByFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolversByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListResolversByFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolversByFunctionCommand = /** @class */ (function (_super) {
  __extends(ListResolversByFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListResolversByFunctionCommand(input) {
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
  ListResolversByFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "ListResolversByFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListResolversByFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolversByFunctionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListResolversByFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListResolversByFunctionCommand(input, context);
  };
  ListResolversByFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListResolversByFunctionCommand(output, context);
  };
  return ListResolversByFunctionCommand;
})($Command);
export { ListResolversByFunctionCommand };
//# sourceMappingURL=ListResolversByFunctionCommand.js.map
