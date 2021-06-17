"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteApplicationVpcConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes a VPC configuration from a Kinesis Data Analytics application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteApplicationVpcConfigurationCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteApplicationVpcConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteApplicationVpcConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteApplicationVpcConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteApplicationVpcConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand(output, context);
    }
}
exports.DeleteApplicationVpcConfigurationCommand = DeleteApplicationVpcConfigurationCommand;
//# sourceMappingURL=DeleteApplicationVpcConfigurationCommand.js.map