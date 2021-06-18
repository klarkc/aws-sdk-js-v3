import { __extends } from "tslib";
import { ListLogPatternsRequest, ListLogPatternsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListLogPatternsCommand,
  serializeAws_json1_1ListLogPatternsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the log patterns in the specific log <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListLogPatternsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListLogPatternsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLogPatternsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLogPatternsCommand = /** @class */ (function (_super) {
  __extends(ListLogPatternsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListLogPatternsCommand(input) {
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
  ListLogPatternsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "ListLogPatternsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListLogPatternsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLogPatternsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListLogPatternsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListLogPatternsCommand(input, context);
  };
  ListLogPatternsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListLogPatternsCommand(output, context);
  };
  return ListLogPatternsCommand;
})($Command);
export { ListLogPatternsCommand };
//# sourceMappingURL=ListLogPatternsCommand.js.map
