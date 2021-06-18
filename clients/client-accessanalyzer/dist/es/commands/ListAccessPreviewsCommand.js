import { __extends } from "tslib";
import { ListAccessPreviewsRequest, ListAccessPreviewsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccessPreviewsCommand,
  serializeAws_restJson1ListAccessPreviewsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of access previews for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAccessPreviewsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAccessPreviewsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAccessPreviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessPreviewsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPreviewsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccessPreviewsCommand = /** @class */ (function (_super) {
  __extends(ListAccessPreviewsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAccessPreviewsCommand(input) {
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
  ListAccessPreviewsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "ListAccessPreviewsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAccessPreviewsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessPreviewsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAccessPreviewsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAccessPreviewsCommand(input, context);
  };
  ListAccessPreviewsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAccessPreviewsCommand(output, context);
  };
  return ListAccessPreviewsCommand;
})($Command);
export { ListAccessPreviewsCommand };
//# sourceMappingURL=ListAccessPreviewsCommand.js.map
