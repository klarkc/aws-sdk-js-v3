import { __extends } from "tslib";
import { UpdateBusinessReportScheduleRequest, UpdateBusinessReportScheduleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateBusinessReportScheduleCommand,
  serializeAws_json1_1UpdateBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of the report delivery schedule with the specified schedule
 *          ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new UpdateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBusinessReportScheduleCommand = /** @class */ (function (_super) {
  __extends(UpdateBusinessReportScheduleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBusinessReportScheduleCommand(input) {
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
  UpdateBusinessReportScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "UpdateBusinessReportScheduleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBusinessReportScheduleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBusinessReportScheduleCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateBusinessReportScheduleCommand(input, context);
  };
  UpdateBusinessReportScheduleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateBusinessReportScheduleCommand(output, context);
  };
  return UpdateBusinessReportScheduleCommand;
})($Command);
export { UpdateBusinessReportScheduleCommand };
//# sourceMappingURL=UpdateBusinessReportScheduleCommand.js.map
