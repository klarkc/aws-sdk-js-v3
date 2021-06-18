"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeComponentConfigurationRecommendationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeComponentConfigurationRecommendationCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeComponentConfigurationRecommendationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeComponentConfigurationRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeComponentConfigurationRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(output, context);
  }
}
exports.DescribeComponentConfigurationRecommendationCommand = DescribeComponentConfigurationRecommendationCommand;
//# sourceMappingURL=DescribeComponentConfigurationRecommendationCommand.js.map
