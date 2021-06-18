import { __extends } from "tslib";
import { UpdateResolverRequest, UpdateResolverResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateResolverCommand,
  serializeAws_restJson1UpdateResolverCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateResolverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResolverCommand = /** @class */ (function (_super) {
  __extends(UpdateResolverCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateResolverCommand(input) {
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
  UpdateResolverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateResolverCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateResolverRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResolverResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateResolverCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateResolverCommand(input, context);
  };
  UpdateResolverCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateResolverCommand(output, context);
  };
  return UpdateResolverCommand;
})($Command);
export { UpdateResolverCommand };
//# sourceMappingURL=UpdateResolverCommand.js.map
