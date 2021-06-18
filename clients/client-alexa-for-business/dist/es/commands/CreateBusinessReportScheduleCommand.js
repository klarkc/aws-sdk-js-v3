import { __extends } from "tslib";
import { CreateBusinessReportScheduleRequest, CreateBusinessReportScheduleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBusinessReportScheduleCommand,
  serializeAws_json1_1CreateBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
 *          location with a specified daily or weekly interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new CreateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBusinessReportScheduleCommand = /** @class */ (function (_super) {
  __extends(CreateBusinessReportScheduleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBusinessReportScheduleCommand(input) {
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
  CreateBusinessReportScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "CreateBusinessReportScheduleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBusinessReportScheduleResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBusinessReportScheduleCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateBusinessReportScheduleCommand(input, context);
  };
  CreateBusinessReportScheduleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateBusinessReportScheduleCommand(output, context);
  };
  return CreateBusinessReportScheduleCommand;
})($Command);
export { CreateBusinessReportScheduleCommand };
//# sourceMappingURL=CreateBusinessReportScheduleCommand.js.map
