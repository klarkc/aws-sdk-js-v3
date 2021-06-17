"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInsightRulesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of all the Contributor Insights rules in your account.</p>
 *
 * 		       <p>For more information about Contributor Insights, see
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeInsightRulesCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchClient";
        const commandName = "DescribeInsightRulesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeInsightRulesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeInsightRulesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeInsightRulesCommand(output, context);
    }
}
exports.DescribeInsightRulesCommand = DescribeInsightRulesCommand;
//# sourceMappingURL=DescribeInsightRulesCommand.js.map