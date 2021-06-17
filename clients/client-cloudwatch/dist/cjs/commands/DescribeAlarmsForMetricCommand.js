"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAlarmsForMetricCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the alarms for the specified metric. To
 * 			filter the results, specify a statistic, period, or unit.</p>
 * 		       <p>This operation retrieves only standard alarms that are based on
 * 		the specified metric. It does not return alarms based on math expressions that
 * 		use the specified metric, or composite alarms that use the specified metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsForMetricCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsForMetricCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmsForMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmsForMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsForMetricCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAlarmsForMetricCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeAlarmsForMetricCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAlarmsForMetricInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAlarmsForMetricOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeAlarmsForMetricCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeAlarmsForMetricCommand(output, context);
    }
}
exports.DescribeAlarmsForMetricCommand = DescribeAlarmsForMetricCommand;
//# sourceMappingURL=DescribeAlarmsForMetricCommand.js.map