import { __extends } from "tslib";
import { AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminListUserAuthEventsCommand, serializeAws_json1_1AdminListUserAuthEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists a history of user activity and any risks detected as part of Amazon Cognito
 *             advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListUserAuthEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListUserAuthEventsCommandInput} for command's `input` shape.
 * @see {@link AdminListUserAuthEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminListUserAuthEventsCommand = /** @class */ (function (_super) {
    __extends(AdminListUserAuthEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminListUserAuthEventsCommand(input) {
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
    AdminListUserAuthEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminListUserAuthEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminListUserAuthEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminListUserAuthEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminListUserAuthEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminListUserAuthEventsCommand(input, context);
    };
    AdminListUserAuthEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminListUserAuthEventsCommand(output, context);
    };
    return AdminListUserAuthEventsCommand;
}($Command));
export { AdminListUserAuthEventsCommand };
//# sourceMappingURL=AdminListUserAuthEventsCommand.js.map