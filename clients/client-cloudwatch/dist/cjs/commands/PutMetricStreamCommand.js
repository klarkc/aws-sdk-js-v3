"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutMetricStreamCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics
 * 			to AWS destinations including
 * 			Amazon S3 and to many third-party solutions.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Metric-Streams.html">
 * 		Using Metric Streams</a>.</p>
 * 		       <p>To create a metric stream,
 * 			you must be logged on to an account that has the <code>iam:PassRole</code> permission
 * 			and either the <code>CloudWatchFullAccess</code>
 * 		policy or the <code>cloudwatch:PutMetricStream</code>
 * 		permission.</p>
 * 		       <p>When you create or update a metric stream, you choose one of the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account, except
 * 				for the namespaces that you list in <code>ExcludeFilters</code>.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from only the metric namespaces that you list in
 * 				<code>IncludeFilters</code>.</p>
 *             </li>
 *          </ul>
 *
 * 		       <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream
 * 		is created in the <code>running</code> state. If you use it to update an existing stream,
 * 		the state of the stream is not changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricStreamCommandInput} for command's `input` shape.
 * @see {@link PutMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutMetricStreamCommand extends smithy_client_1.Command {
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
        const commandName = "PutMetricStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutMetricStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutMetricStreamOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPutMetricStreamCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPutMetricStreamCommand(output, context);
    }
}
exports.PutMetricStreamCommand = PutMetricStreamCommand;
//# sourceMappingURL=PutMetricStreamCommand.js.map