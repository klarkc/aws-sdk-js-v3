import { __extends } from "tslib";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/models_0";
import { deserializeAws_json1_1GetHostnameSuggestionCommand, serializeAws_json1_1GetHostnameSuggestionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostnameSuggestionCommand = /** @class */ (function (_super) {
    __extends(GetHostnameSuggestionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostnameSuggestionCommand(input) {
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
    GetHostnameSuggestionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "GetHostnameSuggestionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostnameSuggestionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostnameSuggestionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostnameSuggestionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetHostnameSuggestionCommand(input, context);
    };
    GetHostnameSuggestionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetHostnameSuggestionCommand(output, context);
    };
    return GetHostnameSuggestionCommand;
}($Command));
export { GetHostnameSuggestionCommand };
//# sourceMappingURL=GetHostnameSuggestionCommand.js.map