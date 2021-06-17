import { __extends } from "tslib";
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/models_0";
import { deserializeAws_queryListGroupsForUserCommand, serializeAws_queryListGroupsForUserCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsForUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsForUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupsForUserCommand = /** @class */ (function (_super) {
    __extends(ListGroupsForUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupsForUserCommand(input) {
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
    ListGroupsForUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListGroupsForUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupsForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupsForUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupsForUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListGroupsForUserCommand(input, context);
    };
    ListGroupsForUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListGroupsForUserCommand(output, context);
    };
    return ListGroupsForUserCommand;
}($Command));
export { ListGroupsForUserCommand };
//# sourceMappingURL=ListGroupsForUserCommand.js.map