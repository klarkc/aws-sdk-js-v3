import { __extends } from "tslib";
import {
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRecommendationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand,
  serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the recommended monitoring configuration of the component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentConfigurationRecommendationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentConfigurationRecommendationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeComponentConfigurationRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentConfigurationRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentConfigurationRecommendationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComponentConfigurationRecommendationCommand = /** @class */ (function (_super) {
  __extends(DescribeComponentConfigurationRecommendationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeComponentConfigurationRecommendationCommand(input) {
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
  DescribeComponentConfigurationRecommendationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeComponentConfigurationRecommendationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeComponentConfigurationRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComponentConfigurationRecommendationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeComponentConfigurationRecommendationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(input, context);
  };
  DescribeComponentConfigurationRecommendationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(output, context);
  };
  return DescribeComponentConfigurationRecommendationCommand;
})($Command);
export { DescribeComponentConfigurationRecommendationCommand };
//# sourceMappingURL=DescribeComponentConfigurationRecommendationCommand.js.map
