import { __extends } from "tslib";
import { CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUsageReportSubscriptionCommand,
  serializeAws_json1_1CreateUsageReportSubscriptionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUsageReportSubscriptionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUsageReportSubscriptionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateUsageReportSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsageReportSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateUsageReportSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUsageReportSubscriptionCommand = /** @class */ (function (_super) {
  __extends(CreateUsageReportSubscriptionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateUsageReportSubscriptionCommand(input) {
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
  CreateUsageReportSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateUsageReportSubscriptionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateUsageReportSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUsageReportSubscriptionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateUsageReportSubscriptionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateUsageReportSubscriptionCommand(input, context);
  };
  CreateUsageReportSubscriptionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommand(output, context);
  };
  return CreateUsageReportSubscriptionCommand;
})($Command);
export { CreateUsageReportSubscriptionCommand };
//# sourceMappingURL=CreateUsageReportSubscriptionCommand.js.map
