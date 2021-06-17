import { __extends } from "tslib";
import { DeleteDistributionConfigurationRequest, DeleteDistributionConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDistributionConfigurationCommand, serializeAws_restJson1DeleteDistributionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDistributionConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteDistributionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDistributionConfigurationCommand(input) {
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
    DeleteDistributionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "DeleteDistributionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDistributionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDistributionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDistributionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDistributionConfigurationCommand(input, context);
    };
    DeleteDistributionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDistributionConfigurationCommand(output, context);
    };
    return DeleteDistributionConfigurationCommand;
}($Command));
export { DeleteDistributionConfigurationCommand };
//# sourceMappingURL=DeleteDistributionConfigurationCommand.js.map