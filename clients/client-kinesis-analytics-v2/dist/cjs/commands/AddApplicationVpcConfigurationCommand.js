"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApplicationVpcConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 *         and access resources securely.</p>
 *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
 *          <ul>
 *             <li>
 *                <p>VPC configurations are not supported for SQL applications.</p>
 *             </li>
 *             <li>
 *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
 *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddApplicationVpcConfigurationCommand extends smithy_client_1.Command {
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
        const commandName = "AddApplicationVpcConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddApplicationVpcConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddApplicationVpcConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddApplicationVpcConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddApplicationVpcConfigurationCommand(output, context);
    }
}
exports.AddApplicationVpcConfigurationCommand = AddApplicationVpcConfigurationCommand;
//# sourceMappingURL=AddApplicationVpcConfigurationCommand.js.map