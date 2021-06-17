import { __extends } from "tslib";
import { UpdateDistributionConfigurationRequest, UpdateDistributionConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDistributionConfigurationCommand, serializeAws_restJson1UpdateDistributionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates a new distribution configuration. Distribution configurations define and
 *       configure the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDistributionConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateDistributionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDistributionConfigurationCommand(input) {
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
    UpdateDistributionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "UpdateDistributionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDistributionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDistributionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDistributionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDistributionConfigurationCommand(input, context);
    };
    UpdateDistributionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDistributionConfigurationCommand(output, context);
    };
    return UpdateDistributionConfigurationCommand;
}($Command));
export { UpdateDistributionConfigurationCommand };
//# sourceMappingURL=UpdateDistributionConfigurationCommand.js.map