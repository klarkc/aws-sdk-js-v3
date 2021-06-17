import { __extends } from "tslib";
import { RespondToAuthChallengeRequest, RespondToAuthChallengeResponse } from "../models/models_0";
import { deserializeAws_json1_1RespondToAuthChallengeCommand, serializeAws_json1_1RespondToAuthChallengeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Responds to the authentication challenge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new RespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link RespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RespondToAuthChallengeCommand = /** @class */ (function (_super) {
    __extends(RespondToAuthChallengeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RespondToAuthChallengeCommand(input) {
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
    RespondToAuthChallengeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "RespondToAuthChallengeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RespondToAuthChallengeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RespondToAuthChallengeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RespondToAuthChallengeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RespondToAuthChallengeCommand(input, context);
    };
    RespondToAuthChallengeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RespondToAuthChallengeCommand(output, context);
    };
    return RespondToAuthChallengeCommand;
}($Command));
export { RespondToAuthChallengeCommand };
//# sourceMappingURL=RespondToAuthChallengeCommand.js.map