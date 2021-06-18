import { __extends } from "tslib";
import { UpdateFunctionRequest, UpdateFunctionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionCommand,
  serializeAws_restJson1UpdateFunctionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <code>Function</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFunctionCommand = /** @class */ (function (_super) {
  __extends(UpdateFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateFunctionCommand(input) {
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
  UpdateFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFunctionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateFunctionCommand(input, context);
  };
  UpdateFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateFunctionCommand(output, context);
  };
  return UpdateFunctionCommand;
})($Command);
export { UpdateFunctionCommand };
//# sourceMappingURL=UpdateFunctionCommand.js.map
