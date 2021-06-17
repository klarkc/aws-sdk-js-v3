import { __extends } from "tslib";
import { DeleteInfrastructureConfigurationRequest, DeleteInfrastructureConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteInfrastructureConfigurationCommand, serializeAws_restJson1DeleteInfrastructureConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInfrastructureConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteInfrastructureConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInfrastructureConfigurationCommand(input) {
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
    DeleteInfrastructureConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "DeleteInfrastructureConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInfrastructureConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInfrastructureConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInfrastructureConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInfrastructureConfigurationCommand(input, context);
    };
    DeleteInfrastructureConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInfrastructureConfigurationCommand(output, context);
    };
    return DeleteInfrastructureConfigurationCommand;
}($Command));
export { DeleteInfrastructureConfigurationCommand };
//# sourceMappingURL=DeleteInfrastructureConfigurationCommand.js.map