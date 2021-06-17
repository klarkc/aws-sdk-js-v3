import { __extends } from "tslib";
import { ListUserPoolClientsRequest, ListUserPoolClientsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListUserPoolClientsCommand, serializeAws_json1_1ListUserPoolClientsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the clients that have been created for the specified user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserPoolClientsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolClientsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserPoolClientsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoolClientsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolClientsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserPoolClientsCommand = /** @class */ (function (_super) {
    __extends(ListUserPoolClientsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserPoolClientsCommand(input) {
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
    ListUserPoolClientsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ListUserPoolClientsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserPoolClientsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserPoolClientsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserPoolClientsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUserPoolClientsCommand(input, context);
    };
    ListUserPoolClientsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUserPoolClientsCommand(output, context);
    };
    return ListUserPoolClientsCommand;
}($Command));
export { ListUserPoolClientsCommand };
//# sourceMappingURL=ListUserPoolClientsCommand.js.map