import { __extends } from "tslib";
import { GetCurrentUserRequest, GetCurrentUserResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCurrentUserCommand, serializeAws_restJson1GetCurrentUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details of the current user for whom the authentication token was
 *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *                 WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetCurrentUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetCurrentUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetCurrentUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentUserCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCurrentUserCommand = /** @class */ (function (_super) {
    __extends(GetCurrentUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCurrentUserCommand(input) {
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
    GetCurrentUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetCurrentUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCurrentUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCurrentUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCurrentUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCurrentUserCommand(input, context);
    };
    GetCurrentUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCurrentUserCommand(output, context);
    };
    return GetCurrentUserCommand;
}($Command));
export { GetCurrentUserCommand };
//# sourceMappingURL=GetCurrentUserCommand.js.map