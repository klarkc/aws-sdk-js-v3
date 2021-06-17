import { __extends } from "tslib";
import { UpdateIdentityProviderRequest, UpdateIdentityProviderResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateIdentityProviderCommand, serializeAws_json1_1UpdateIdentityProviderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates identity provider information for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIdentityProviderCommand = /** @class */ (function (_super) {
    __extends(UpdateIdentityProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIdentityProviderCommand(input) {
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
    UpdateIdentityProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateIdentityProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIdentityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIdentityProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIdentityProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateIdentityProviderCommand(input, context);
    };
    UpdateIdentityProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateIdentityProviderCommand(output, context);
    };
    return UpdateIdentityProviderCommand;
}($Command));
export { UpdateIdentityProviderCommand };
//# sourceMappingURL=UpdateIdentityProviderCommand.js.map