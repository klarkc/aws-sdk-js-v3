import { __extends } from "tslib";
import { BatchUpdateUserRequest, BatchUpdateUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateUserCommand,
  serializeAws_restJson1BatchUpdateUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Updates user details within the
 * <a>UpdateUserRequestItem</a>
 * object for up to 20 users for the specified Amazon Chime account.
 * Currently, only <code>LicenseType</code>
 * updates are supported for this action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdateUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdateUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateUserCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdateUserCommand = /** @class */ (function (_super) {
  __extends(BatchUpdateUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchUpdateUserCommand(input) {
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
  BatchUpdateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchUpdateUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchUpdateUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchUpdateUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchUpdateUserCommand(input, context);
  };
  BatchUpdateUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchUpdateUserCommand(output, context);
  };
  return BatchUpdateUserCommand;
})($Command);
export { BatchUpdateUserCommand };
//# sourceMappingURL=BatchUpdateUserCommand.js.map
