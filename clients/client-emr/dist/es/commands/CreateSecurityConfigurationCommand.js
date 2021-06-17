import { __extends } from "tslib";
import { CreateSecurityConfigurationInput, CreateSecurityConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateSecurityConfigurationCommand, serializeAws_json1_1CreateSecurityConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a security configuration, which is stored in the service and can be specified
 *          when a cluster is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSecurityConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateSecurityConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSecurityConfigurationCommand(input) {
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
    CreateSecurityConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "CreateSecurityConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSecurityConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSecurityConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSecurityConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSecurityConfigurationCommand(input, context);
    };
    CreateSecurityConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSecurityConfigurationCommand(output, context);
    };
    return CreateSecurityConfigurationCommand;
}($Command));
export { CreateSecurityConfigurationCommand };
//# sourceMappingURL=CreateSecurityConfigurationCommand.js.map