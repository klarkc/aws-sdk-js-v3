import { __extends } from "tslib";
import { GetArchiveRuleRequest, GetArchiveRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetArchiveRuleCommand,
  serializeAws_restJson1GetArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an archive rule.</p>
 *          <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">Access Analyzer filter keys</a> in the <b>IAM User
 *          Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link GetArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetArchiveRuleCommand = /** @class */ (function (_super) {
  __extends(GetArchiveRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetArchiveRuleCommand(input) {
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
  GetArchiveRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "GetArchiveRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetArchiveRuleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetArchiveRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetArchiveRuleCommand(input, context);
  };
  GetArchiveRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetArchiveRuleCommand(output, context);
  };
  return GetArchiveRuleCommand;
})($Command);
export { GetArchiveRuleCommand };
//# sourceMappingURL=GetArchiveRuleCommand.js.map
