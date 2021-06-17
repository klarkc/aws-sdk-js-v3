import { __extends } from "tslib";
import { ListResourceServersRequest, ListResourceServersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourceServersCommand, serializeAws_json1_1ListResourceServersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resource servers for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListResourceServersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListResourceServersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListResourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceServersCommandInput} for command's `input` shape.
 * @see {@link ListResourceServersCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceServersCommand = /** @class */ (function (_super) {
    __extends(ListResourceServersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceServersCommand(input) {
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
    ListResourceServersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ListResourceServersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceServersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceServersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceServersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceServersCommand(input, context);
    };
    ListResourceServersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceServersCommand(output, context);
    };
    return ListResourceServersCommand;
}($Command));
export { ListResourceServersCommand };
//# sourceMappingURL=ListResourceServersCommand.js.map