"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAlarmHistoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type.
 * 			If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p>
 * 		       <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmHistoryCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmHistoryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAlarmHistoryCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeAlarmHistoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAlarmHistoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAlarmHistoryOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeAlarmHistoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeAlarmHistoryCommand(output, context);
    }
}
exports.DescribeAlarmHistoryCommand = DescribeAlarmHistoryCommand;
//# sourceMappingURL=DescribeAlarmHistoryCommand.js.map