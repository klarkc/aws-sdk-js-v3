import { __extends } from "tslib";
import { GetUICustomizationRequest, GetUICustomizationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetUICustomizationCommand, serializeAws_json1_1GetUICustomizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the UI Customization information for a particular app client's app UI, if there
 *             is something set. If nothing is set for the particular client, but there is an existing
 *             pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that
 *             is returned. If nothing is present, then an empty shape is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUICustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link GetUICustomizationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUICustomizationCommand = /** @class */ (function (_super) {
    __extends(GetUICustomizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUICustomizationCommand(input) {
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
    GetUICustomizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetUICustomizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUICustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUICustomizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUICustomizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetUICustomizationCommand(input, context);
    };
    GetUICustomizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetUICustomizationCommand(output, context);
    };
    return GetUICustomizationCommand;
}($Command));
export { GetUICustomizationCommand };
//# sourceMappingURL=GetUICustomizationCommand.js.map