import { __extends } from "tslib";
import { GetInfrastructureConfigurationRequest, GetInfrastructureConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetInfrastructureConfigurationCommand, serializeAws_restJson1GetInfrastructureConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an infrastructure configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInfrastructureConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInfrastructureConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetInfrastructureConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInfrastructureConfigurationCommand(input) {
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
    GetInfrastructureConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetInfrastructureConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInfrastructureConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInfrastructureConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInfrastructureConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInfrastructureConfigurationCommand(input, context);
    };
    GetInfrastructureConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInfrastructureConfigurationCommand(output, context);
    };
    return GetInfrastructureConfigurationCommand;
}($Command));
export { GetInfrastructureConfigurationCommand };
//# sourceMappingURL=GetInfrastructureConfigurationCommand.js.map