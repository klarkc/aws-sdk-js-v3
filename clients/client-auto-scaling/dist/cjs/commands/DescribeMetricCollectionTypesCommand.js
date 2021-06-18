"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMetricCollectionTypesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 *         <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must
 *             explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeMetricCollectionTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeMetricCollectionTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMetricCollectionTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCollectionTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeMetricCollectionTypesCommand extends smithy_client_1.Command {
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
    const clientName = "AutoScalingClient";
    const commandName = "DescribeMetricCollectionTypesCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input) => input,
      outputFilterSensitiveLog: models_0_1.DescribeMetricCollectionTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeMetricCollectionTypesCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeMetricCollectionTypesCommand(output, context);
  }
}
exports.DescribeMetricCollectionTypesCommand = DescribeMetricCollectionTypesCommand;
//# sourceMappingURL=DescribeMetricCollectionTypesCommand.js.map
