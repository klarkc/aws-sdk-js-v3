import { __extends } from "tslib";
import { DeleteUsageReportSubscriptionRequest, DeleteUsageReportSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteUsageReportSubscriptionCommand,
  serializeAws_json1_1DeleteUsageReportSubscriptionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables usage report generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteUsageReportSubscriptionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteUsageReportSubscriptionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteUsageReportSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsageReportSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageReportSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUsageReportSubscriptionCommand = /** @class */ (function (_super) {
  __extends(DeleteUsageReportSubscriptionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteUsageReportSubscriptionCommand(input) {
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
  DeleteUsageReportSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DeleteUsageReportSubscriptionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteUsageReportSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteUsageReportSubscriptionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteUsageReportSubscriptionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteUsageReportSubscriptionCommand(input, context);
  };
  DeleteUsageReportSubscriptionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteUsageReportSubscriptionCommand(output, context);
  };
  return DeleteUsageReportSubscriptionCommand;
})($Command);
export { DeleteUsageReportSubscriptionCommand };
//# sourceMappingURL=DeleteUsageReportSubscriptionCommand.js.map
