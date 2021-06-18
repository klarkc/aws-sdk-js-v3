import { __extends } from "tslib";
import { DescribeComponentConfigurationRequest, DescribeComponentConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComponentConfigurationCommand,
  serializeAws_json1_1DescribeComponentConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the monitoring configuration of the component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComponentConfigurationCommand = /** @class */ (function (_super) {
  __extends(DescribeComponentConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeComponentConfigurationCommand(input) {
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
  DescribeComponentConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeComponentConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeComponentConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComponentConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeComponentConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeComponentConfigurationCommand(input, context);
  };
  DescribeComponentConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeComponentConfigurationCommand(output, context);
  };
  return DescribeComponentConfigurationCommand;
})($Command);
export { DescribeComponentConfigurationCommand };
//# sourceMappingURL=DescribeComponentConfigurationCommand.js.map
