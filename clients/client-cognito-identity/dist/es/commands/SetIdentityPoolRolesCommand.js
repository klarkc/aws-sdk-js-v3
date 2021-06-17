import { __extends } from "tslib";
import { SetIdentityPoolRolesInput } from "../models/models_0";
import { deserializeAws_json1_1SetIdentityPoolRolesCommand, serializeAws_json1_1SetIdentityPoolRolesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetIdentityPoolRolesCommand = /** @class */ (function (_super) {
    __extends(SetIdentityPoolRolesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetIdentityPoolRolesCommand(input) {
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
    SetIdentityPoolRolesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "SetIdentityPoolRolesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetIdentityPoolRolesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetIdentityPoolRolesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetIdentityPoolRolesCommand(input, context);
    };
    SetIdentityPoolRolesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetIdentityPoolRolesCommand(output, context);
    };
    return SetIdentityPoolRolesCommand;
}($Command));
export { SetIdentityPoolRolesCommand };
//# sourceMappingURL=SetIdentityPoolRolesCommand.js.map