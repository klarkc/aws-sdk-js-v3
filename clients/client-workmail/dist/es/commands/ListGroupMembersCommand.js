import { __extends } from "tslib";
import { ListGroupMembersRequest, ListGroupMembersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListGroupMembersCommand, serializeAws_json1_1ListGroupMembersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an overview of the members of a group. Users and groups can be members of a
 *          group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListGroupMembersCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListGroupMembersCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupMembersCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupMembersCommand = /** @class */ (function (_super) {
    __extends(ListGroupMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupMembersCommand(input) {
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
    ListGroupMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListGroupMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGroupMembersCommand(input, context);
    };
    ListGroupMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGroupMembersCommand(output, context);
    };
    return ListGroupMembersCommand;
}($Command));
export { ListGroupMembersCommand };
//# sourceMappingURL=ListGroupMembersCommand.js.map