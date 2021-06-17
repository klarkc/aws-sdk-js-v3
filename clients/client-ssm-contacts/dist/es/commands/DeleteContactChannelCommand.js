import { __extends } from "tslib";
import { DeleteContactChannelRequest, DeleteContactChannelResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteContactChannelCommand, serializeAws_json1_1DeleteContactChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>To no longer receive engagements on a contact channel, you can delete the channel from a
 *          contact. Deleting the contact channel removes it from the contact's engagement plan. If you
 *          delete the only contact channel for a contact, you won't be able to engage that contact
 *          during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeleteContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContactChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteContactChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContactChannelCommand(input) {
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
    DeleteContactChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "DeleteContactChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContactChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContactChannelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContactChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContactChannelCommand(input, context);
    };
    DeleteContactChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContactChannelCommand(output, context);
    };
    return DeleteContactChannelCommand;
}($Command));
export { DeleteContactChannelCommand };
//# sourceMappingURL=DeleteContactChannelCommand.js.map