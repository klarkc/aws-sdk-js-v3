"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutLoggingConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided.</p>
 *          <p>You can access information about all traffic that AWS WAF inspects using the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create an Amazon Kinesis Data
 *             Firehose. </p>
 *                <p>Create the data firehose with a PUT source and in the Region that you are operating. If you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p>
 *                <p>Give the data firehose a name that starts with the prefix <code>aws-waf-logs-</code>. For example, <code>aws-waf-logs-us-east-2-analytics</code>.</p>
 *                <note>
 *                   <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose.  For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutLoggingConfigurationCommand extends smithy_client_1.Command {
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
        const clientName = "WAFV2Client";
        const commandName = "PutLoggingConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutLoggingConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutLoggingConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutLoggingConfigurationCommand(output, context);
    }
}
exports.PutLoggingConfigurationCommand = PutLoggingConfigurationCommand;
//# sourceMappingURL=PutLoggingConfigurationCommand.js.map