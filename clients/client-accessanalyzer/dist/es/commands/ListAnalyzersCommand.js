import { __extends } from "tslib";
import { ListAnalyzersRequest, ListAnalyzersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAnalyzersCommand,
  serializeAws_restJson1ListAnalyzersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of analyzers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzersCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAnalyzersCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAnalyzersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalyzersCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzersCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnalyzersCommand = /** @class */ (function (_super) {
  __extends(ListAnalyzersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAnalyzersCommand(input) {
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
  ListAnalyzersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ListAnalyzersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAnalyzersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnalyzersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAnalyzersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAnalyzersCommand(input, context);
  };
  ListAnalyzersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAnalyzersCommand(output, context);
  };
  return ListAnalyzersCommand;
})($Command);
export { ListAnalyzersCommand };
//# sourceMappingURL=ListAnalyzersCommand.js.map
