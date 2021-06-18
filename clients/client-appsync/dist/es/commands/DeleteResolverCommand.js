import { __extends } from "tslib";
import { DeleteResolverRequest, DeleteResolverResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteResolverCommand,
  serializeAws_restJson1DeleteResolverCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteResolverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResolverCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResolverCommand = /** @class */ (function (_super) {
  __extends(DeleteResolverCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteResolverCommand(input) {
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
  DeleteResolverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "DeleteResolverCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteResolverRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResolverResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteResolverCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteResolverCommand(input, context);
  };
  DeleteResolverCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteResolverCommand(output, context);
  };
  return DeleteResolverCommand;
})($Command);
export { DeleteResolverCommand };
//# sourceMappingURL=DeleteResolverCommand.js.map
