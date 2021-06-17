"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteApplicationCloudWatchLoggingOptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteApplicationCloudWatchLoggingOptionCommand extends smithy_client_1.Command {
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
        const clientName = "KinesisAnalyticsV2Client";
        const commandName = "DeleteApplicationCloudWatchLoggingOptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(output, context);
    }
}
exports.DeleteApplicationCloudWatchLoggingOptionCommand = DeleteApplicationCloudWatchLoggingOptionCommand;
//# sourceMappingURL=DeleteApplicationCloudWatchLoggingOptionCommand.js.map