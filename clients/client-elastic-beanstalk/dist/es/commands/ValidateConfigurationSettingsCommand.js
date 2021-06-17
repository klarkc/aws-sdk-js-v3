import { __extends } from "tslib";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/models_0";
import { deserializeAws_queryValidateConfigurationSettingsCommand, serializeAws_queryValidateConfigurationSettingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ValidateConfigurationSettingsCommand = /** @class */ (function (_super) {
    __extends(ValidateConfigurationSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ValidateConfigurationSettingsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ValidateConfigurationSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ValidateConfigurationSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ValidateConfigurationSettingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigurationSettingsValidationMessages.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ValidateConfigurationSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryValidateConfigurationSettingsCommand(input, context);
    };
    ValidateConfigurationSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryValidateConfigurationSettingsCommand(output, context);
    };
    return ValidateConfigurationSettingsCommand;
}($Command));
export { ValidateConfigurationSettingsCommand };
//# sourceMappingURL=ValidateConfigurationSettingsCommand.js.map