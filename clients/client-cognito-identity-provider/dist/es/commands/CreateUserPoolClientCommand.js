import { __extends } from "tslib";
import { CreateUserPoolClientRequest, CreateUserPoolClientResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserPoolClientCommand, serializeAws_json1_1CreateUserPoolClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the user pool client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserPoolClientCommand = /** @class */ (function (_super) {
    __extends(CreateUserPoolClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserPoolClientCommand(input) {
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
    CreateUserPoolClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "CreateUserPoolClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserPoolClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserPoolClientResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserPoolClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserPoolClientCommand(input, context);
    };
    CreateUserPoolClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserPoolClientCommand(output, context);
    };
    return CreateUserPoolClientCommand;
}($Command));
export { CreateUserPoolClientCommand };
//# sourceMappingURL=CreateUserPoolClientCommand.js.map