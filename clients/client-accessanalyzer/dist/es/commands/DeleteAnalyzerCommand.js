import { __extends } from "tslib";
import { DeleteAnalyzerRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAnalyzerCommand,
  serializeAws_restJson1DeleteAnalyzerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled for the
 *          account or organization in the current or specific Region. All findings that were generated
 *          by the analyzer are deleted. You cannot undo this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeleteAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeleteAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new DeleteAnalyzerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalyzerCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnalyzerCommand = /** @class */ (function (_super) {
  __extends(DeleteAnalyzerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAnalyzerCommand(input) {
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
  DeleteAnalyzerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "DeleteAnalyzerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAnalyzerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAnalyzerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAnalyzerCommand(input, context);
  };
  DeleteAnalyzerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAnalyzerCommand(output, context);
  };
  return DeleteAnalyzerCommand;
})($Command);
export { DeleteAnalyzerCommand };
//# sourceMappingURL=DeleteAnalyzerCommand.js.map
