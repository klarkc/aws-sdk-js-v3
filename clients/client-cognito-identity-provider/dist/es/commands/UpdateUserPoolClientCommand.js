import { __extends } from "tslib";
import { UpdateUserPoolClientRequest, UpdateUserPoolClientResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateUserPoolClientCommand, serializeAws_json1_1UpdateUserPoolClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified user pool app client with the specified attributes. You can get
 *             a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserPoolClientCommand = /** @class */ (function (_super) {
    __extends(UpdateUserPoolClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserPoolClientCommand(input) {
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
    UpdateUserPoolClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateUserPoolClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserPoolClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserPoolClientResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserPoolClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserPoolClientCommand(input, context);
    };
    UpdateUserPoolClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserPoolClientCommand(output, context);
    };
    return UpdateUserPoolClientCommand;
}($Command));
export { UpdateUserPoolClientCommand };
//# sourceMappingURL=UpdateUserPoolClientCommand.js.map