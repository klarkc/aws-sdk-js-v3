import { __extends } from "tslib";
import { GetMonitoringSubscriptionRequest, GetMonitoringSubscriptionResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetMonitoringSubscriptionCommand,
  serializeAws_restXmlGetMonitoringSubscriptionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about whether additional CloudWatch metrics are enabled for the specified
 * 			CloudFront distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMonitoringSubscriptionCommand = /** @class */ (function (_super) {
  __extends(GetMonitoringSubscriptionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetMonitoringSubscriptionCommand(input) {
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
  GetMonitoringSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetMonitoringSubscriptionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetMonitoringSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMonitoringSubscriptionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetMonitoringSubscriptionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetMonitoringSubscriptionCommand(input, context);
  };
  GetMonitoringSubscriptionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetMonitoringSubscriptionCommand(output, context);
  };
  return GetMonitoringSubscriptionCommand;
})($Command);
export { GetMonitoringSubscriptionCommand };
//# sourceMappingURL=GetMonitoringSubscriptionCommand.js.map
