import { __extends } from "tslib";
import { CreateAccountRequest, CreateAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccountCommand,
  serializeAws_restJson1CreateAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code>
 *             account types are currently supported for this action. For more information about
 *             different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
 *                 <i>Amazon Chime Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccountCommand = /** @class */ (function (_super) {
  __extends(CreateAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAccountCommand(input) {
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
  CreateAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAccountCommand(input, context);
  };
  CreateAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAccountCommand(output, context);
  };
  return CreateAccountCommand;
})($Command);
export { CreateAccountCommand };
//# sourceMappingURL=CreateAccountCommand.js.map
