import { __extends } from "tslib";
import { DeleteInstanceAccessControlAttributeConfigurationRequest, DeleteInstanceAccessControlAttributeConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand, serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the attributes-based access control (ABAC) feature for the specified AWS SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInstanceAccessControlAttributeConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteInstanceAccessControlAttributeConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInstanceAccessControlAttributeConfigurationCommand(input) {
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
    DeleteInstanceAccessControlAttributeConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DeleteInstanceAccessControlAttributeConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInstanceAccessControlAttributeConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand(input, context);
    };
    DeleteInstanceAccessControlAttributeConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand(output, context);
    };
    return DeleteInstanceAccessControlAttributeConfigurationCommand;
}($Command));
export { DeleteInstanceAccessControlAttributeConfigurationCommand };
//# sourceMappingURL=DeleteInstanceAccessControlAttributeConfigurationCommand.js.map