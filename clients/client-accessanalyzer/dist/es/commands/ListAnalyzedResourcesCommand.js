import { __extends } from "tslib";
import { ListAnalyzedResourcesRequest, ListAnalyzedResourcesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAnalyzedResourcesCommand,
  serializeAws_restJson1ListAnalyzedResourcesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of resources of the specified type that have been analyzed by the
 *          specified analyzer..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzedResourcesCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAnalyzedResourcesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAnalyzedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalyzedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzedResourcesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnalyzedResourcesCommand = /** @class */ (function (_super) {
  __extends(ListAnalyzedResourcesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAnalyzedResourcesCommand(input) {
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
  ListAnalyzedResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ListAnalyzedResourcesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAnalyzedResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnalyzedResourcesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAnalyzedResourcesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAnalyzedResourcesCommand(input, context);
  };
  ListAnalyzedResourcesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAnalyzedResourcesCommand(output, context);
  };
  return ListAnalyzedResourcesCommand;
})($Command);
export { ListAnalyzedResourcesCommand };
//# sourceMappingURL=ListAnalyzedResourcesCommand.js.map
