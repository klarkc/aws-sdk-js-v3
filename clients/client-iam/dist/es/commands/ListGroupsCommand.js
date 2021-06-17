import { __extends } from "tslib";
import { ListGroupsRequest, ListGroupsResponse } from "../models/models_0";
import { deserializeAws_queryListGroupsCommand, serializeAws_queryListGroupsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IAM groups that have the specified path prefix.</p>
 *         <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupsCommand = /** @class */ (function (_super) {
    __extends(ListGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupsCommand(input) {
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
    ListGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListGroupsCommand(input, context);
    };
    ListGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListGroupsCommand(output, context);
    };
    return ListGroupsCommand;
}($Command));
export { ListGroupsCommand };
//# sourceMappingURL=ListGroupsCommand.js.map