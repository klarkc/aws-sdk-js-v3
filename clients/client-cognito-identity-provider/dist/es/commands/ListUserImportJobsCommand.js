import { __extends } from "tslib";
import { ListUserImportJobsRequest, ListUserImportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListUserImportJobsCommand, serializeAws_json1_1ListUserImportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the user import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserImportJobsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserImportJobsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListUserImportJobsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserImportJobsCommand = /** @class */ (function (_super) {
    __extends(ListUserImportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserImportJobsCommand(input) {
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
    ListUserImportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ListUserImportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserImportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserImportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserImportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUserImportJobsCommand(input, context);
    };
    ListUserImportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUserImportJobsCommand(output, context);
    };
    return ListUserImportJobsCommand;
}($Command));
export { ListUserImportJobsCommand };
//# sourceMappingURL=ListUserImportJobsCommand.js.map