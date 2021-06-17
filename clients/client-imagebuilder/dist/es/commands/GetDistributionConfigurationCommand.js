import { __extends } from "tslib";
import { GetDistributionConfigurationRequest, GetDistributionConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDistributionConfigurationCommand, serializeAws_restJson1GetDistributionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetDistributionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDistributionConfigurationCommand(input) {
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
    GetDistributionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetDistributionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDistributionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDistributionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDistributionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDistributionConfigurationCommand(input, context);
    };
    GetDistributionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDistributionConfigurationCommand(output, context);
    };
    return GetDistributionConfigurationCommand;
}($Command));
export { GetDistributionConfigurationCommand };
//# sourceMappingURL=GetDistributionConfigurationCommand.js.map