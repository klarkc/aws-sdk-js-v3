import { __extends } from "tslib";
import { CreateAppInstanceUserRequest, CreateAppInstanceUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppInstanceUserCommand,
  serializeAws_restJson1CreateAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and
 * <code>Name</code> for that user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(CreateAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAppInstanceUserCommand(input) {
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
  CreateAppInstanceUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAppInstanceUserCommand(input, context);
  };
  CreateAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAppInstanceUserCommand(output, context);
  };
  return CreateAppInstanceUserCommand;
})($Command);
export { CreateAppInstanceUserCommand };
//# sourceMappingURL=CreateAppInstanceUserCommand.js.map
