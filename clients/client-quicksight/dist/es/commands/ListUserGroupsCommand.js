import { __extends } from "tslib";
import { ListUserGroupsRequest, ListUserGroupsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListUserGroupsCommand, serializeAws_restJson1ListUserGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListUserGroupsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListUserGroupsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListUserGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserGroupsCommandInput} for command's `input` shape.
 * @see {@link ListUserGroupsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserGroupsCommand = /** @class */ (function (_super) {
    __extends(ListUserGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserGroupsCommand(input) {
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
    ListUserGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListUserGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListUserGroupsCommand(input, context);
    };
    ListUserGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListUserGroupsCommand(output, context);
    };
    return ListUserGroupsCommand;
}($Command));
export { ListUserGroupsCommand };
//# sourceMappingURL=ListUserGroupsCommand.js.map