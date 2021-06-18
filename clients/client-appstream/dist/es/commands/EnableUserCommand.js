import { __extends } from "tslib";
import { EnableUserRequest, EnableUserResult } from "../models/models_0";
import {
  deserializeAws_json1_1EnableUserCommand,
  serializeAws_json1_1EnableUserCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, EnableUserCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, EnableUserCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new EnableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableUserCommandInput} for command's `input` shape.
 * @see {@link EnableUserCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableUserCommand = /** @class */ (function (_super) {
  __extends(EnableUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function EnableUserCommand(input) {
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
  EnableUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "EnableUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: EnableUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableUserResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  EnableUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1EnableUserCommand(input, context);
  };
  EnableUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1EnableUserCommand(output, context);
  };
  return EnableUserCommand;
})($Command);
export { EnableUserCommand };
//# sourceMappingURL=EnableUserCommand.js.map
