import { __extends } from "tslib";
import { ListConfigurationHistoryRequest, ListConfigurationHistoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListConfigurationHistoryCommand,
  serializeAws_json1_1ListConfigurationHistoryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are:
 *       </p>
 *          <ul>
 *             <li>
 *                <p>INFO: creating a new alarm or updating an alarm threshold.</p>
 *             </li>
 *             <li>
 *                <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p>
 *             </li>
 *             <li>
 *                <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListConfigurationHistoryCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListConfigurationHistoryCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListConfigurationHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationHistoryCommand = /** @class */ (function (_super) {
  __extends(ListConfigurationHistoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConfigurationHistoryCommand(input) {
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
  ListConfigurationHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "ListConfigurationHistoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConfigurationHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationHistoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConfigurationHistoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListConfigurationHistoryCommand(input, context);
  };
  ListConfigurationHistoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListConfigurationHistoryCommand(output, context);
  };
  return ListConfigurationHistoryCommand;
})($Command);
export { ListConfigurationHistoryCommand };
//# sourceMappingURL=ListConfigurationHistoryCommand.js.map
