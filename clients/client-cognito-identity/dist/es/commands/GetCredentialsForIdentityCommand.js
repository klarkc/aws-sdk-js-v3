import { __extends } from "tslib";
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCredentialsForIdentityCommand, serializeAws_json1_1GetCredentialsForIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCredentialsForIdentityCommand = /** @class */ (function (_super) {
    __extends(GetCredentialsForIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCredentialsForIdentityCommand(input) {
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
    GetCredentialsForIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "GetCredentialsForIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCredentialsForIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCredentialsForIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCredentialsForIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCredentialsForIdentityCommand(input, context);
    };
    GetCredentialsForIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCredentialsForIdentityCommand(output, context);
    };
    return GetCredentialsForIdentityCommand;
}($Command));
export { GetCredentialsForIdentityCommand };
//# sourceMappingURL=GetCredentialsForIdentityCommand.js.map