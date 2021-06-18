import { __extends } from "tslib";
import { ApplyArchiveRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ApplyArchiveRuleCommand,
  serializeAws_restJson1ApplyArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retroactively applies the archive rule to existing findings that meet the archive rule
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ApplyArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ApplyArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ApplyArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link ApplyArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplyArchiveRuleCommand = /** @class */ (function (_super) {
  __extends(ApplyArchiveRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ApplyArchiveRuleCommand(input) {
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
  ApplyArchiveRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ApplyArchiveRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ApplyArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ApplyArchiveRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ApplyArchiveRuleCommand(input, context);
  };
  ApplyArchiveRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ApplyArchiveRuleCommand(output, context);
  };
  return ApplyArchiveRuleCommand;
})($Command);
export { ApplyArchiveRuleCommand };
//# sourceMappingURL=ApplyArchiveRuleCommand.js.map
