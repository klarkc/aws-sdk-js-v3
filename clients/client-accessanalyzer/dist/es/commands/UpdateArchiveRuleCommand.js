import { __extends } from "tslib";
import { UpdateArchiveRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateArchiveRuleCommand,
  serializeAws_restJson1UpdateArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the criteria and values for the specified archive rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new UpdateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateArchiveRuleCommand = /** @class */ (function (_super) {
  __extends(UpdateArchiveRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateArchiveRuleCommand(input) {
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
  UpdateArchiveRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "UpdateArchiveRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateArchiveRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateArchiveRuleCommand(input, context);
  };
  UpdateArchiveRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateArchiveRuleCommand(output, context);
  };
  return UpdateArchiveRuleCommand;
})($Command);
export { UpdateArchiveRuleCommand };
//# sourceMappingURL=UpdateArchiveRuleCommand.js.map
