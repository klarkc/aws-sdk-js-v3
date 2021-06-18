import { __extends } from "tslib";
import { DeleteBusinessReportScheduleRequest, DeleteBusinessReportScheduleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBusinessReportScheduleCommand,
  serializeAws_json1_1DeleteBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the recurring report delivery schedule with the specified schedule
 *          ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBusinessReportScheduleCommand = /** @class */ (function (_super) {
  __extends(DeleteBusinessReportScheduleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBusinessReportScheduleCommand(input) {
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
  DeleteBusinessReportScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteBusinessReportScheduleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBusinessReportScheduleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBusinessReportScheduleCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteBusinessReportScheduleCommand(input, context);
  };
  DeleteBusinessReportScheduleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteBusinessReportScheduleCommand(output, context);
  };
  return DeleteBusinessReportScheduleCommand;
})($Command);
export { DeleteBusinessReportScheduleCommand };
//# sourceMappingURL=DeleteBusinessReportScheduleCommand.js.map
