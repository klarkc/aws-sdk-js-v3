import { __extends } from "tslib";
import { ListUserPoolsRequest, ListUserPoolsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListUserPoolsCommand, serializeAws_json1_1ListUserPoolsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the user pools associated with an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserPoolsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoolsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserPoolsCommand = /** @class */ (function (_super) {
    __extends(ListUserPoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserPoolsCommand(input) {
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
    ListUserPoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ListUserPoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserPoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserPoolsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserPoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUserPoolsCommand(input, context);
    };
    ListUserPoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUserPoolsCommand(output, context);
    };
    return ListUserPoolsCommand;
}($Command));
export { ListUserPoolsCommand };
//# sourceMappingURL=ListUserPoolsCommand.js.map