import { __extends } from "tslib";
import {
  AssociateSigninDelegateGroupsWithAccountRequest,
  AssociateSigninDelegateGroupsWithAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
  serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociateSigninDelegateGroupsWithAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociateSigninDelegateGroupsWithAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateSigninDelegateGroupsWithAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSigninDelegateGroupsWithAccountCommand = /** @class */ (function (_super) {
  __extends(AssociateSigninDelegateGroupsWithAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateSigninDelegateGroupsWithAccountCommand(input) {
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
  AssociateSigninDelegateGroupsWithAccountCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "AssociateSigninDelegateGroupsWithAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSigninDelegateGroupsWithAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateSigninDelegateGroupsWithAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(input, context);
  };
  AssociateSigninDelegateGroupsWithAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand(output, context);
  };
  return AssociateSigninDelegateGroupsWithAccountCommand;
})($Command);
export { AssociateSigninDelegateGroupsWithAccountCommand };
//# sourceMappingURL=AssociateSigninDelegateGroupsWithAccountCommand.js.map
