import { __extends } from "tslib";
import { CreateSipRuleRequest, CreateSipRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipRuleCommand,
  serializeAws_restJson1CreateSipRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSipRuleCommand = /** @class */ (function (_super) {
  __extends(CreateSipRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateSipRuleCommand(input) {
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
  CreateSipRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateSipRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateSipRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSipRuleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateSipRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateSipRuleCommand(input, context);
  };
  CreateSipRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateSipRuleCommand(output, context);
  };
  return CreateSipRuleCommand;
})($Command);
export { CreateSipRuleCommand };
//# sourceMappingURL=CreateSipRuleCommand.js.map
