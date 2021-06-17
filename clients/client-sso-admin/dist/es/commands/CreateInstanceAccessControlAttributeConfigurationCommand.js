import { __extends } from "tslib";
import { CreateInstanceAccessControlAttributeConfigurationRequest, CreateInstanceAccessControlAttributeConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand, serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the attributes-based access control (ABAC) feature for the specified AWS SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstanceAccessControlAttributeConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateInstanceAccessControlAttributeConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstanceAccessControlAttributeConfigurationCommand(input) {
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
    CreateInstanceAccessControlAttributeConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "CreateInstanceAccessControlAttributeConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstanceAccessControlAttributeConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand(input, context);
    };
    CreateInstanceAccessControlAttributeConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand(output, context);
    };
    return CreateInstanceAccessControlAttributeConfigurationCommand;
}($Command));
export { CreateInstanceAccessControlAttributeConfigurationCommand };
//# sourceMappingURL=CreateInstanceAccessControlAttributeConfigurationCommand.js.map