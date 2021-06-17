import { __extends } from "tslib";
import { UpdateInstanceAccessControlAttributeConfigurationRequest, UpdateInstanceAccessControlAttributeConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand, serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the AWS SSO identity store attributes to use with the AWS SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the AWS SSO identity store. If a SAML assertion passes any of these attributes, AWS SSO will replace the attribute value with the value from the AWS SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceAccessControlAttributeConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceAccessControlAttributeConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceAccessControlAttributeConfigurationCommand(input) {
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
    UpdateInstanceAccessControlAttributeConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "UpdateInstanceAccessControlAttributeConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceAccessControlAttributeConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand(input, context);
    };
    UpdateInstanceAccessControlAttributeConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand(output, context);
    };
    return UpdateInstanceAccessControlAttributeConfigurationCommand;
}($Command));
export { UpdateInstanceAccessControlAttributeConfigurationCommand };
//# sourceMappingURL=UpdateInstanceAccessControlAttributeConfigurationCommand.js.map