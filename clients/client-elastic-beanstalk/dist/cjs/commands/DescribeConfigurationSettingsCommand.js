"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeConfigurationSettingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a description of the settings for the specified configuration set, that is,
 *       either a configuration template or the configuration set associated with a running
 *       environment.</p>
 *          <p>When describing the settings for the configuration set associated with a running
 *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
 *       configuration set, and the other is a draft configuration of an environment that is either in
 *       the process of deployment or that failed to deploy.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteEnvironmentConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeConfigurationSettingsCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticBeanstalkClient";
        const commandName = "DescribeConfigurationSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeConfigurationSettingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ConfigurationSettingsDescriptions.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeConfigurationSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeConfigurationSettingsCommand(output, context);
    }
}
exports.DescribeConfigurationSettingsCommand = DescribeConfigurationSettingsCommand;
//# sourceMappingURL=DescribeConfigurationSettingsCommand.js.map