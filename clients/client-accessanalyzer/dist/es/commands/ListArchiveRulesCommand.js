import { __extends } from "tslib";
import { ListArchiveRulesRequest, ListArchiveRulesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListArchiveRulesCommand,
  serializeAws_restJson1ListArchiveRulesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListArchiveRulesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListArchiveRulesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListArchiveRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArchiveRulesCommandInput} for command's `input` shape.
 * @see {@link ListArchiveRulesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListArchiveRulesCommand = /** @class */ (function (_super) {
  __extends(ListArchiveRulesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListArchiveRulesCommand(input) {
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
  ListArchiveRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ListArchiveRulesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListArchiveRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListArchiveRulesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListArchiveRulesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListArchiveRulesCommand(input, context);
  };
  ListArchiveRulesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListArchiveRulesCommand(output, context);
  };
  return ListArchiveRulesCommand;
})($Command);
export { ListArchiveRulesCommand };
//# sourceMappingURL=ListArchiveRulesCommand.js.map
