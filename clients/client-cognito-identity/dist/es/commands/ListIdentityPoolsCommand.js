import { __extends } from "tslib";
import { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListIdentityPoolsCommand, serializeAws_json1_1ListIdentityPoolsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the Cognito identity pools registered for your account.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentityPoolsCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentityPoolsCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new ListIdentityPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityPoolsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIdentityPoolsCommand = /** @class */ (function (_super) {
    __extends(ListIdentityPoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIdentityPoolsCommand(input) {
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
    ListIdentityPoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "ListIdentityPoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIdentityPoolsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListIdentityPoolsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIdentityPoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListIdentityPoolsCommand(input, context);
    };
    ListIdentityPoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListIdentityPoolsCommand(output, context);
    };
    return ListIdentityPoolsCommand;
}($Command));
export { ListIdentityPoolsCommand };
//# sourceMappingURL=ListIdentityPoolsCommand.js.map