import { __extends } from "tslib";
import { DeleteArchiveRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteArchiveRuleCommand,
  serializeAws_restJson1DeleteArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified archive rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeleteArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeleteArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new DeleteArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteArchiveRuleCommand = /** @class */ (function (_super) {
  __extends(DeleteArchiveRuleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteArchiveRuleCommand(input) {
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
  DeleteArchiveRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "DeleteArchiveRuleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteArchiveRuleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteArchiveRuleCommand(input, context);
  };
  DeleteArchiveRuleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteArchiveRuleCommand(output, context);
  };
  return DeleteArchiveRuleCommand;
})($Command);
export { DeleteArchiveRuleCommand };
//# sourceMappingURL=DeleteArchiveRuleCommand.js.map
