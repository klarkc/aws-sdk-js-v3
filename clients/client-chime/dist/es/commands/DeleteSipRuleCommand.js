import { __extends } from "tslib";
import { DeleteSipRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSipRuleCommand,
  serializeAws_restJson1DeleteSipRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a SIP rule. You must disable a SIP rule before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSipRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSipRuleCommand = /** @class */ (function (_super) {
  __extends(DeleteSipRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteSipRuleCommand(input) {
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
  DeleteSipRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteSipRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteSipRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteSipRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteSipRuleCommand(input, context);
  };
  DeleteSipRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteSipRuleCommand(output, context);
  };
  return DeleteSipRuleCommand;
})($Command);
export { DeleteSipRuleCommand };
//# sourceMappingURL=DeleteSipRuleCommand.js.map
