import { __extends } from "tslib";
import { ListBusinessReportSchedulesRequest, ListBusinessReportSchedulesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListBusinessReportSchedulesCommand,
  serializeAws_json1_1ListBusinessReportSchedulesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListBusinessReportSchedulesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListBusinessReportSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBusinessReportSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListBusinessReportSchedulesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBusinessReportSchedulesCommand = /** @class */ (function (_super) {
  __extends(ListBusinessReportSchedulesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBusinessReportSchedulesCommand(input) {
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
  ListBusinessReportSchedulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "ListBusinessReportSchedulesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBusinessReportSchedulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBusinessReportSchedulesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBusinessReportSchedulesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListBusinessReportSchedulesCommand(input, context);
  };
  ListBusinessReportSchedulesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListBusinessReportSchedulesCommand(output, context);
  };
  return ListBusinessReportSchedulesCommand;
})($Command);
export { ListBusinessReportSchedulesCommand };
//# sourceMappingURL=ListBusinessReportSchedulesCommand.js.map
