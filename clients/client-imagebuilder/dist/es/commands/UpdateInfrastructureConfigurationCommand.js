import { __extends } from "tslib";
import { UpdateInfrastructureConfigurationRequest, UpdateInfrastructureConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateInfrastructureConfigurationCommand, serializeAws_restJson1UpdateInfrastructureConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates a new infrastructure configuration. An infrastructure configuration defines the
 *       environment in which your image will be built and tested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInfrastructureConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateInfrastructureConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInfrastructureConfigurationCommand(input) {
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
    UpdateInfrastructureConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "UpdateInfrastructureConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInfrastructureConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInfrastructureConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInfrastructureConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInfrastructureConfigurationCommand(input, context);
    };
    UpdateInfrastructureConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInfrastructureConfigurationCommand(output, context);
    };
    return UpdateInfrastructureConfigurationCommand;
}($Command));
export { UpdateInfrastructureConfigurationCommand };
//# sourceMappingURL=UpdateInfrastructureConfigurationCommand.js.map