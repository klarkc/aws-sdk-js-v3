import { __extends } from "tslib";
import { CreateArchiveRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateArchiveRuleCommand,
  serializeAws_restJson1CreateArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive
 *          new findings that meet the criteria you define when you create the rule.</p>
 *          <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">Access Analyzer filter keys</a> in the <b>IAM User
 *          Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CreateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateArchiveRuleCommand = /** @class */ (function (_super) {
  __extends(CreateArchiveRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateArchiveRuleCommand(input) {
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
  CreateArchiveRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "CreateArchiveRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateArchiveRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateArchiveRuleCommand(input, context);
  };
  CreateArchiveRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateArchiveRuleCommand(output, context);
  };
  return CreateArchiveRuleCommand;
})($Command);
export { CreateArchiveRuleCommand };
//# sourceMappingURL=CreateArchiveRuleCommand.js.map
