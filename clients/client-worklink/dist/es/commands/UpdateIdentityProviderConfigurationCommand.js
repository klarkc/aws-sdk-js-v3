import { __extends } from "tslib";
import { UpdateIdentityProviderConfigurationRequest, UpdateIdentityProviderConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand, serializeAws_restJson1UpdateIdentityProviderConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the identity provider configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIdentityProviderConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateIdentityProviderConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIdentityProviderConfigurationCommand(input) {
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
    UpdateIdentityProviderConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "UpdateIdentityProviderConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIdentityProviderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIdentityProviderConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIdentityProviderConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIdentityProviderConfigurationCommand(input, context);
    };
    UpdateIdentityProviderConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand(output, context);
    };
    return UpdateIdentityProviderConfigurationCommand;
}($Command));
export { UpdateIdentityProviderConfigurationCommand };
//# sourceMappingURL=UpdateIdentityProviderConfigurationCommand.js.map