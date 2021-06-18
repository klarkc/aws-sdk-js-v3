import { __extends } from "tslib";
import { DisableUserRequest, DisableUserResult } from "../models/models_0";
import {
  deserializeAws_json1_1DisableUserCommand,
  serializeAws_json1_1DisableUserCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisableUserCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisableUserCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DisableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableUserCommandInput} for command's `input` shape.
 * @see {@link DisableUserCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableUserCommand = /** @class */ (function (_super) {
  __extends(DisableUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisableUserCommand(input) {
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
  DisableUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DisableUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisableUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableUserResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisableUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DisableUserCommand(input, context);
  };
  DisableUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DisableUserCommand(output, context);
  };
  return DisableUserCommand;
})($Command);
export { DisableUserCommand };
//# sourceMappingURL=DisableUserCommand.js.map
