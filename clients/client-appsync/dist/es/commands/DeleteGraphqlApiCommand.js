import { __extends } from "tslib";
import { DeleteGraphqlApiRequest, DeleteGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteGraphqlApiCommand,
  serializeAws_restJson1DeleteGraphqlApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new DeleteGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link DeleteGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGraphqlApiCommand = /** @class */ (function (_super) {
  __extends(DeleteGraphqlApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteGraphqlApiCommand(input) {
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
  DeleteGraphqlApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "DeleteGraphqlApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteGraphqlApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGraphqlApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteGraphqlApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteGraphqlApiCommand(input, context);
  };
  DeleteGraphqlApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteGraphqlApiCommand(output, context);
  };
  return DeleteGraphqlApiCommand;
})($Command);
export { DeleteGraphqlApiCommand };
//# sourceMappingURL=DeleteGraphqlApiCommand.js.map
