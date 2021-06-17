import { __extends } from "tslib";
import { AdminUpdateAuthEventFeedbackRequest, AdminUpdateAuthEventFeedbackResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand, serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides feedback for an authentication event as to whether it was from a valid user.
 *             This feedback is used for improving the risk evaluation decision for the user pool as
 *             part of Amazon Cognito advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminUpdateAuthEventFeedbackCommand = /** @class */ (function (_super) {
    __extends(AdminUpdateAuthEventFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminUpdateAuthEventFeedbackCommand(input) {
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
    AdminUpdateAuthEventFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminUpdateAuthEventFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminUpdateAuthEventFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminUpdateAuthEventFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminUpdateAuthEventFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(input, context);
    };
    AdminUpdateAuthEventFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(output, context);
    };
    return AdminUpdateAuthEventFeedbackCommand;
}($Command));
export { AdminUpdateAuthEventFeedbackCommand };
//# sourceMappingURL=AdminUpdateAuthEventFeedbackCommand.js.map