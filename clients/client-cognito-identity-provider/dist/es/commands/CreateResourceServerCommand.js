import { __extends } from "tslib";
import { CreateResourceServerRequest, CreateResourceServerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateResourceServerCommand, serializeAws_json1_1CreateResourceServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new OAuth2.0 resource server and defines custom scopes in it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceServerCommandInput} for command's `input` shape.
 * @see {@link CreateResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceServerCommand = /** @class */ (function (_super) {
    __extends(CreateResourceServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceServerCommand(input) {
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
    CreateResourceServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "CreateResourceServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResourceServerCommand(input, context);
    };
    CreateResourceServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResourceServerCommand(output, context);
    };
    return CreateResourceServerCommand;
}($Command));
export { CreateResourceServerCommand };
//# sourceMappingURL=CreateResourceServerCommand.js.map