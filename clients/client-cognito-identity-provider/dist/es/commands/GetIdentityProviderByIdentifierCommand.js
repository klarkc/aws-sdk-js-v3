import { __extends } from "tslib";
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/models_0";
import { deserializeAws_json1_1GetIdentityProviderByIdentifierCommand, serializeAws_json1_1GetIdentityProviderByIdentifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the specified identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetIdentityProviderByIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityProviderByIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderByIdentifierCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIdentityProviderByIdentifierCommand = /** @class */ (function (_super) {
    __extends(GetIdentityProviderByIdentifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIdentityProviderByIdentifierCommand(input) {
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
    GetIdentityProviderByIdentifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetIdentityProviderByIdentifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIdentityProviderByIdentifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIdentityProviderByIdentifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIdentityProviderByIdentifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetIdentityProviderByIdentifierCommand(input, context);
    };
    GetIdentityProviderByIdentifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetIdentityProviderByIdentifierCommand(output, context);
    };
    return GetIdentityProviderByIdentifierCommand;
}($Command));
export { GetIdentityProviderByIdentifierCommand };
//# sourceMappingURL=GetIdentityProviderByIdentifierCommand.js.map