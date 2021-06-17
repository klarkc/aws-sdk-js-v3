"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApplicationOutputCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
 *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
 *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 *       Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to
 *       your application using this operation. You can configure one or more outputs for your
 *       application. Each output configuration maps an in-application stream and an external
 *       destination.</p>
 *          <p> You can use one of the output configurations to deliver data from your
 *       in-application error stream to an external destination so that you can analyze the
 *       errors.  </p>
 *          <p> Any configuration update, including adding a streaming source using this
 *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddApplicationOutputCommand extends smithy_client_1.Command {
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
        const commandName = "AddApplicationOutputCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddApplicationOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddApplicationOutputResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddApplicationOutputCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddApplicationOutputCommand(output, context);
    }
}
exports.AddApplicationOutputCommand = AddApplicationOutputCommand;
//# sourceMappingURL=AddApplicationOutputCommand.js.map