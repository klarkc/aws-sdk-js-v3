import { __extends } from "tslib";
import { UpdateAppInstanceUserRequest, UpdateAppInstanceUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAppInstanceUserCommand,
  serializeAws_restJson1UpdateAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(UpdateAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAppInstanceUserCommand(input) {
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
  UpdateAppInstanceUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAppInstanceUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAppInstanceUserCommand(input, context);
  };
  UpdateAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAppInstanceUserCommand(output, context);
  };
  return UpdateAppInstanceUserCommand;
})($Command);
export { UpdateAppInstanceUserCommand };
//# sourceMappingURL=UpdateAppInstanceUserCommand.js.map
