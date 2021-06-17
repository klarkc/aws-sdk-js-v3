import { __extends } from "tslib";
import { AdminDeleteUserAttributesRequest, AdminDeleteUserAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminDeleteUserAttributesCommand, serializeAws_json1_1AdminDeleteUserAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the user attributes in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDeleteUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDeleteUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDeleteUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDeleteUserAttributesCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminDeleteUserAttributesCommand = /** @class */ (function (_super) {
    __extends(AdminDeleteUserAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminDeleteUserAttributesCommand(input) {
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
    AdminDeleteUserAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminDeleteUserAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminDeleteUserAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminDeleteUserAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminDeleteUserAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminDeleteUserAttributesCommand(input, context);
    };
    AdminDeleteUserAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminDeleteUserAttributesCommand(output, context);
    };
    return AdminDeleteUserAttributesCommand;
}($Command));
export { AdminDeleteUserAttributesCommand };
//# sourceMappingURL=AdminDeleteUserAttributesCommand.js.map