import { __extends } from "tslib";
import { CreateUserPoolRequest, CreateUserPoolResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserPoolCommand, serializeAws_json1_1CreateUserPoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon Cognito user pool and sets the password policy for the
 *             pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserPoolCommand = /** @class */ (function (_super) {
    __extends(CreateUserPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserPoolCommand(input) {
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
    CreateUserPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "CreateUserPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserPoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserPoolResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserPoolCommand(input, context);
    };
    CreateUserPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserPoolCommand(output, context);
    };
    return CreateUserPoolCommand;
}($Command));
export { CreateUserPoolCommand };
//# sourceMappingURL=CreateUserPoolCommand.js.map