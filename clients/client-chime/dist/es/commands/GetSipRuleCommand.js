import { __extends } from "tslib";
import { GetSipRuleRequest, GetSipRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSipRuleCommand,
  serializeAws_restJson1GetSipRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSipRuleCommandInput} for command's `input` shape.
 * @see {@link GetSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSipRuleCommand = /** @class */ (function (_super) {
  __extends(GetSipRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSipRuleCommand(input) {
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
  GetSipRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetSipRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSipRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSipRuleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSipRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSipRuleCommand(input, context);
  };
  GetSipRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSipRuleCommand(output, context);
  };
  return GetSipRuleCommand;
})($Command);
export { GetSipRuleCommand };
//# sourceMappingURL=GetSipRuleCommand.js.map
