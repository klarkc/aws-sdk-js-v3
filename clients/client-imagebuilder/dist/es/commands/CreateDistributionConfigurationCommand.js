import { __extends } from "tslib";
import { CreateDistributionConfigurationRequest, CreateDistributionConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDistributionConfigurationCommand, serializeAws_restJson1CreateDistributionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new distribution configuration. Distribution configurations define and configure
 *       the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDistributionConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateDistributionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDistributionConfigurationCommand(input) {
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
    CreateDistributionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CreateDistributionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDistributionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDistributionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDistributionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDistributionConfigurationCommand(input, context);
    };
    CreateDistributionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDistributionConfigurationCommand(output, context);
    };
    return CreateDistributionConfigurationCommand;
}($Command));
export { CreateDistributionConfigurationCommand };
//# sourceMappingURL=CreateDistributionConfigurationCommand.js.map