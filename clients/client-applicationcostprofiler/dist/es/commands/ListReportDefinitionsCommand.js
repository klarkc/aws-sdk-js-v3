import { __extends } from "tslib";
import { ListReportDefinitionsRequest, ListReportDefinitionsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListReportDefinitionsCommand,
  serializeAws_restJson1ListReportDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
 *          <p>The maximum number of reports is one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ListReportDefinitionsCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ListReportDefinitionsCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ListReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReportDefinitionsCommand = /** @class */ (function (_super) {
  __extends(ListReportDefinitionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListReportDefinitionsCommand(input) {
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
  ListReportDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "ListReportDefinitionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListReportDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReportDefinitionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListReportDefinitionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListReportDefinitionsCommand(input, context);
  };
  ListReportDefinitionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListReportDefinitionsCommand(output, context);
  };
  return ListReportDefinitionsCommand;
})($Command);
export { ListReportDefinitionsCommand };
//# sourceMappingURL=ListReportDefinitionsCommand.js.map
