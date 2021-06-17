import { __extends } from "tslib";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { deserializeAws_queryListUsersCommand, serializeAws_queryListUsersCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IAM users that have the specified path prefix. If no path prefix is
 *             specified, the operation returns all users in the AWS account. If there are none, the
 *             operation returns an empty list.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUsersCommand = /** @class */ (function (_super) {
    __extends(ListUsersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUsersCommand(input) {
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
    ListUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListUsersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUsersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUsersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUsersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListUsersCommand(input, context);
    };
    ListUsersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListUsersCommand(output, context);
    };
    return ListUsersCommand;
}($Command));
export { ListUsersCommand };
//# sourceMappingURL=ListUsersCommand.js.map