import { __extends } from "tslib";
import { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPendingInvitationResourcesCommand, serializeAws_restJson1ListPendingInvitationResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resources in a resource share that is shared with you but that the invitation is still pending for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPendingInvitationResourcesCommand = /** @class */ (function (_super) {
    __extends(ListPendingInvitationResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPendingInvitationResourcesCommand(input) {
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
    ListPendingInvitationResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "ListPendingInvitationResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPendingInvitationResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPendingInvitationResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPendingInvitationResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPendingInvitationResourcesCommand(input, context);
    };
    ListPendingInvitationResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPendingInvitationResourcesCommand(output, context);
    };
    return ListPendingInvitationResourcesCommand;
}($Command));
export { ListPendingInvitationResourcesCommand };
//# sourceMappingURL=ListPendingInvitationResourcesCommand.js.map