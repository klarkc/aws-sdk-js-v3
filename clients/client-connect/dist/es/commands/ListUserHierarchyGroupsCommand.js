import { __extends } from "tslib";
import { ListUserHierarchyGroupsRequest, ListUserHierarchyGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListUserHierarchyGroupsCommand, serializeAws_restJson1ListUserHierarchyGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUserHierarchyGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUserHierarchyGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListUserHierarchyGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserHierarchyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListUserHierarchyGroupsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserHierarchyGroupsCommand = /** @class */ (function (_super) {
    __extends(ListUserHierarchyGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserHierarchyGroupsCommand(input) {
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
    ListUserHierarchyGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListUserHierarchyGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserHierarchyGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserHierarchyGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserHierarchyGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListUserHierarchyGroupsCommand(input, context);
    };
    ListUserHierarchyGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListUserHierarchyGroupsCommand(output, context);
    };
    return ListUserHierarchyGroupsCommand;
}($Command));
export { ListUserHierarchyGroupsCommand };
//# sourceMappingURL=ListUserHierarchyGroupsCommand.js.map