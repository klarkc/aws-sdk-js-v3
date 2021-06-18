import { __extends } from "tslib";
import { UpdateTypeRequest, UpdateTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateTypeCommand,
  serializeAws_restJson1UpdateTypeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTypeCommand = /** @class */ (function (_super) {
  __extends(UpdateTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateTypeCommand(input) {
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
  UpdateTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTypeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateTypeCommand(input, context);
  };
  UpdateTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateTypeCommand(output, context);
  };
  return UpdateTypeCommand;
})($Command);
export { UpdateTypeCommand };
//# sourceMappingURL=UpdateTypeCommand.js.map
