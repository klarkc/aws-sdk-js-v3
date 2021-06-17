import { __extends } from "tslib";
import { GetSigningCertificateRequest, GetSigningCertificateResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSigningCertificateCommand, serializeAws_json1_1GetSigningCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This method takes a user pool ID, and returns the signing certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetSigningCertificateCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetSigningCertificateCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link GetSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSigningCertificateCommand = /** @class */ (function (_super) {
    __extends(GetSigningCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSigningCertificateCommand(input) {
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
    GetSigningCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetSigningCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSigningCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSigningCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSigningCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSigningCertificateCommand(input, context);
    };
    GetSigningCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSigningCertificateCommand(output, context);
    };
    return GetSigningCertificateCommand;
}($Command));
export { GetSigningCertificateCommand };
//# sourceMappingURL=GetSigningCertificateCommand.js.map