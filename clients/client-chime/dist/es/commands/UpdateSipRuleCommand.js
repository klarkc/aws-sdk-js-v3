import { __extends } from "tslib";
import { UpdateSipRuleRequest, UpdateSipRuleResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSipRuleCommand,
  serializeAws_restJson1UpdateSipRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of the specified SIP rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSipRuleCommand = /** @class */ (function (_super) {
  __extends(UpdateSipRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateSipRuleCommand(input) {
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
  UpdateSipRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateSipRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateSipRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipRuleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateSipRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateSipRuleCommand(input, context);
  };
  UpdateSipRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateSipRuleCommand(output, context);
  };
  return UpdateSipRuleCommand;
})($Command);
export { UpdateSipRuleCommand };
//# sourceMappingURL=UpdateSipRuleCommand.js.map
