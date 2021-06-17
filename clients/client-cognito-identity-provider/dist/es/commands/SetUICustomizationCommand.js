import { __extends } from "tslib";
import { SetUICustomizationRequest, SetUICustomizationResponse } from "../models/models_0";
import { deserializeAws_json1_1SetUICustomizationCommand, serializeAws_json1_1SetUICustomizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the UI customization information for a user pool's built-in app UI.</p>
 *         <p>You can specify app UI customization settings for a single client (with a specific
 *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
 *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will
 *             be used for every client that has no UI customization set previously. If you specify UI
 *             customization settings for a particular client, it will no longer fall back to the
 *                 <code>ALL</code> configuration. </p>
 *         <note>
 *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
 *                 there is no place to host the app's pages, and the service will throw an
 *                 error.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUICustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link SetUICustomizationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetUICustomizationCommand = /** @class */ (function (_super) {
    __extends(SetUICustomizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetUICustomizationCommand(input) {
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
    SetUICustomizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "SetUICustomizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetUICustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetUICustomizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetUICustomizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetUICustomizationCommand(input, context);
    };
    SetUICustomizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetUICustomizationCommand(output, context);
    };
    return SetUICustomizationCommand;
}($Command));
export { SetUICustomizationCommand };
//# sourceMappingURL=SetUICustomizationCommand.js.map