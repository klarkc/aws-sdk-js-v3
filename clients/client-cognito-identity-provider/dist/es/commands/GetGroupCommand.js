import { __extends } from "tslib";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1GetGroupCommand, serializeAws_json1_1GetGroupCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupCommand = /** @class */ (function (_super) {
    __extends(GetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupCommand(input) {
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
    GetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetGroupCommand(input, context);
    };
    GetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetGroupCommand(output, context);
    };
    return GetGroupCommand;
}($Command));
export { GetGroupCommand };
//# sourceMappingURL=GetGroupCommand.js.map