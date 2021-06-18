import { __extends } from "tslib";
import {
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
  serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DisassociateSigninDelegateGroupsFromAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSigninDelegateGroupsFromAccountCommand = /** @class */ (function (_super) {
  __extends(DisassociateSigninDelegateGroupsFromAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateSigninDelegateGroupsFromAccountCommand(input) {
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
  DisassociateSigninDelegateGroupsFromAccountCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DisassociateSigninDelegateGroupsFromAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateSigninDelegateGroupsFromAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(input, context);
  };
  DisassociateSigninDelegateGroupsFromAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(output, context);
  };
  return DisassociateSigninDelegateGroupsFromAccountCommand;
})($Command);
export { DisassociateSigninDelegateGroupsFromAccountCommand };
//# sourceMappingURL=DisassociateSigninDelegateGroupsFromAccountCommand.js.map
