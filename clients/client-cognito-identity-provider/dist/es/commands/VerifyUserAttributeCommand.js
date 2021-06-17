import { __extends } from "tslib";
import { VerifyUserAttributeRequest, VerifyUserAttributeResponse } from "../models/models_1";
import { deserializeAws_json1_1VerifyUserAttributeCommand, serializeAws_json1_1VerifyUserAttributeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Verifies the specified user attributes in the user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifyUserAttributeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifyUserAttributeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifyUserAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyUserAttributeCommandInput} for command's `input` shape.
 * @see {@link VerifyUserAttributeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VerifyUserAttributeCommand = /** @class */ (function (_super) {
    __extends(VerifyUserAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VerifyUserAttributeCommand(input) {
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
    VerifyUserAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "VerifyUserAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VerifyUserAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VerifyUserAttributeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VerifyUserAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1VerifyUserAttributeCommand(input, context);
    };
    VerifyUserAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1VerifyUserAttributeCommand(output, context);
    };
    return VerifyUserAttributeCommand;
}($Command));
export { VerifyUserAttributeCommand };
//# sourceMappingURL=VerifyUserAttributeCommand.js.map