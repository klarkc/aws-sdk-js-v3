"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLogGroupFieldsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events
 *     that contain each field. The search is limited to a time period that you specify.</p>
 *          <p>In the results, fields that start with @ are fields generated by CloudWatch Logs. For
 *       example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are
 *       generated by CloudWatch logs, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>
 *          <p>The response results are sorted by the frequency percentage, starting
 *     with the highest percentage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogGroupFieldsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogGroupFieldsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new GetLogGroupFieldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogGroupFieldsCommandInput} for command's `input` shape.
 * @see {@link GetLogGroupFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetLogGroupFieldsCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetLogGroupFieldsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetLogGroupFieldsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetLogGroupFieldsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetLogGroupFieldsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetLogGroupFieldsCommand(output, context);
    }
}
exports.GetLogGroupFieldsCommand = GetLogGroupFieldsCommand;
//# sourceMappingURL=GetLogGroupFieldsCommand.js.map