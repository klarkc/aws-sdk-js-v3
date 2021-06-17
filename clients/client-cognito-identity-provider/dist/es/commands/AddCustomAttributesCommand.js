import { __extends } from "tslib";
import { AddCustomAttributesRequest, AddCustomAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1AddCustomAttributesCommand, serializeAws_json1_1AddCustomAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds additional user attributes to the user pool schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AddCustomAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AddCustomAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCustomAttributesCommandInput} for command's `input` shape.
 * @see {@link AddCustomAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddCustomAttributesCommand = /** @class */ (function (_super) {
    __extends(AddCustomAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddCustomAttributesCommand(input) {
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
    AddCustomAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AddCustomAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddCustomAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddCustomAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddCustomAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddCustomAttributesCommand(input, context);
    };
    AddCustomAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddCustomAttributesCommand(output, context);
    };
    return AddCustomAttributesCommand;
}($Command));
export { AddCustomAttributesCommand };
//# sourceMappingURL=AddCustomAttributesCommand.js.map