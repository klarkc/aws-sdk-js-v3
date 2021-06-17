import { __extends } from "tslib";
import { CreateDomainConfigurationRequest, CreateDomainConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDomainConfigurationCommand, serializeAws_restJson1CreateDomainConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDomainConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateDomainConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDomainConfigurationCommand(input) {
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
    CreateDomainConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateDomainConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDomainConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDomainConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDomainConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDomainConfigurationCommand(input, context);
    };
    CreateDomainConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDomainConfigurationCommand(output, context);
    };
    return CreateDomainConfigurationCommand;
}($Command));
export { CreateDomainConfigurationCommand };
//# sourceMappingURL=CreateDomainConfigurationCommand.js.map