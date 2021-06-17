import { __extends } from "tslib";
import { UpdateAuthEventFeedbackRequest, UpdateAuthEventFeedbackResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateAuthEventFeedbackCommand, serializeAws_json1_1UpdateAuthEventFeedbackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the feedback for an authentication event whether it was from a valid user or
 *             not. This feedback is used for improving the risk evaluation decision for the user pool
 *             as part of Amazon Cognito advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAuthEventFeedbackCommand = /** @class */ (function (_super) {
    __extends(UpdateAuthEventFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAuthEventFeedbackCommand(input) {
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
    UpdateAuthEventFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateAuthEventFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAuthEventFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAuthEventFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAuthEventFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAuthEventFeedbackCommand(input, context);
    };
    UpdateAuthEventFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAuthEventFeedbackCommand(output, context);
    };
    return UpdateAuthEventFeedbackCommand;
}($Command));
export { UpdateAuthEventFeedbackCommand };
//# sourceMappingURL=UpdateAuthEventFeedbackCommand.js.map