import { __extends } from "tslib";
import { AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminUpdateUserAttributesCommand, serializeAws_json1_1AdminUpdateUserAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified user's attributes, including developer attributes, as an
 *             administrator. Works on any user.</p>
 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
 *             attribute name.</p>
 *         <p>In addition to updating user attributes, this API can also be used to mark phone and
 *             email as verified.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminUpdateUserAttributesCommand = /** @class */ (function (_super) {
    __extends(AdminUpdateUserAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminUpdateUserAttributesCommand(input) {
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
    AdminUpdateUserAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminUpdateUserAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminUpdateUserAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminUpdateUserAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminUpdateUserAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminUpdateUserAttributesCommand(input, context);
    };
    AdminUpdateUserAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminUpdateUserAttributesCommand(output, context);
    };
    return AdminUpdateUserAttributesCommand;
}($Command));
export { AdminUpdateUserAttributesCommand };
//# sourceMappingURL=AdminUpdateUserAttributesCommand.js.map