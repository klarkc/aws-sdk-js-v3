import { __extends } from "tslib";
import { DeleteMonitoringSubscriptionRequest, DeleteMonitoringSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteMonitoringSubscriptionCommand,
  serializeAws_restXmlDeleteMonitoringSubscriptionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables additional CloudWatch metrics for the specified CloudFront distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMonitoringSubscriptionCommand = /** @class */ (function (_super) {
  __extends(DeleteMonitoringSubscriptionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteMonitoringSubscriptionCommand(input) {
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
  DeleteMonitoringSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteMonitoringSubscriptionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteMonitoringSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMonitoringSubscriptionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteMonitoringSubscriptionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteMonitoringSubscriptionCommand(input, context);
  };
  DeleteMonitoringSubscriptionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteMonitoringSubscriptionCommand(output, context);
  };
  return DeleteMonitoringSubscriptionCommand;
})($Command);
export { DeleteMonitoringSubscriptionCommand };
//# sourceMappingURL=DeleteMonitoringSubscriptionCommand.js.map
