"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAnomalyDetectorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model
 * 			to display a band of expected normal values when the metric is graphed.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link PutAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutAnomalyDetectorCommand extends smithy_client_1.Command {
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
        const commandName = "PutAnomalyDetectorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutAnomalyDetectorInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutAnomalyDetectorOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPutAnomalyDetectorCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPutAnomalyDetectorCommand(output, context);
    }
}
exports.PutAnomalyDetectorCommand = PutAnomalyDetectorCommand;
//# sourceMappingURL=PutAnomalyDetectorCommand.js.map