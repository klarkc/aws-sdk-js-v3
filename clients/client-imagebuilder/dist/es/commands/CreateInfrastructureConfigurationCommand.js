import { __extends } from "tslib";
import { CreateInfrastructureConfigurationRequest, CreateInfrastructureConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateInfrastructureConfigurationCommand, serializeAws_restJson1CreateInfrastructureConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the
 *       environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInfrastructureConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateInfrastructureConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInfrastructureConfigurationCommand(input) {
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
    CreateInfrastructureConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateInfrastructureConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInfrastructureConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInfrastructureConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInfrastructureConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInfrastructureConfigurationCommand(input, context);
    };
    CreateInfrastructureConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInfrastructureConfigurationCommand(output, context);
    };
    return CreateInfrastructureConfigurationCommand;
}($Command));
export { CreateInfrastructureConfigurationCommand };
//# sourceMappingURL=CreateInfrastructureConfigurationCommand.js.map