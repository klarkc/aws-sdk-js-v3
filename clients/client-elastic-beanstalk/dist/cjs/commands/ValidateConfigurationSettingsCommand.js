"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateConfigurationSettingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Takes a set of configuration settings and either a configuration template or
 *       environment, and determines whether those values are valid.</p>
 *          <p>This action returns a list of messages indicating any errors or warnings associated
 *       with the selection of option values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ValidateConfigurationSettingsCommand extends smithy_client_1.Command {
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
        const commandName = "ValidateConfigurationSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ValidateConfigurationSettingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ConfigurationSettingsValidationMessages.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryValidateConfigurationSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryValidateConfigurationSettingsCommand(output, context);
    }
}
exports.ValidateConfigurationSettingsCommand = ValidateConfigurationSettingsCommand;
//# sourceMappingURL=ValidateConfigurationSettingsCommand.js.map