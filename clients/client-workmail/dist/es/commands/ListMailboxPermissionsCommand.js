import { __extends } from "tslib";
import { ListMailboxPermissionsRequest, ListMailboxPermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMailboxPermissionsCommand, serializeAws_json1_1ListMailboxPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the mailbox permissions associated with a user, group, or resource
 *          mailbox.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMailboxPermissionsCommand = /** @class */ (function (_super) {
    __extends(ListMailboxPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMailboxPermissionsCommand(input) {
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
    ListMailboxPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListMailboxPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMailboxPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMailboxPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMailboxPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMailboxPermissionsCommand(input, context);
    };
    ListMailboxPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMailboxPermissionsCommand(output, context);
    };
    return ListMailboxPermissionsCommand;
}($Command));
export { ListMailboxPermissionsCommand };
//# sourceMappingURL=ListMailboxPermissionsCommand.js.map