import { __extends } from "tslib";
import { GetUserRequest, GetUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetUserCommand,
  serializeAws_restJson1GetUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p>
 *
 *          <p>
 * To retrieve user details with an email address instead of a user ID, use the
 * <a>ListUsers</a>
 * action, and then filter by email address.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserCommand = /** @class */ (function (_super) {
  __extends(GetUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUserCommand(input) {
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
  GetUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUserCommand(input, context);
  };
  GetUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUserCommand(output, context);
  };
  return GetUserCommand;
})($Command);
export { GetUserCommand };
//# sourceMappingURL=GetUserCommand.js.map
