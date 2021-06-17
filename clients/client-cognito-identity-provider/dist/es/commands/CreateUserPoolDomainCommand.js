import { __extends } from "tslib";
import { CreateUserPoolDomainRequest, CreateUserPoolDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserPoolDomainCommand, serializeAws_json1_1CreateUserPoolDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new domain for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserPoolDomainCommand = /** @class */ (function (_super) {
    __extends(CreateUserPoolDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserPoolDomainCommand(input) {
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
    CreateUserPoolDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "CreateUserPoolDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserPoolDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserPoolDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserPoolDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserPoolDomainCommand(input, context);
    };
    CreateUserPoolDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserPoolDomainCommand(output, context);
    };
    return CreateUserPoolDomainCommand;
}($Command));
export { CreateUserPoolDomainCommand };
//# sourceMappingURL=CreateUserPoolDomainCommand.js.map