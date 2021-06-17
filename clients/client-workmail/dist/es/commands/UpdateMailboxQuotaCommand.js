import { __extends } from "tslib";
import { UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateMailboxQuotaCommand, serializeAws_json1_1UpdateMailboxQuotaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a user's current mailbox quota for a specified organization and
 *          user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMailboxQuotaCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMailboxQuotaCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateMailboxQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMailboxQuotaCommandInput} for command's `input` shape.
 * @see {@link UpdateMailboxQuotaCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMailboxQuotaCommand = /** @class */ (function (_super) {
    __extends(UpdateMailboxQuotaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMailboxQuotaCommand(input) {
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
    UpdateMailboxQuotaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "UpdateMailboxQuotaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMailboxQuotaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMailboxQuotaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMailboxQuotaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMailboxQuotaCommand(input, context);
    };
    UpdateMailboxQuotaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMailboxQuotaCommand(output, context);
    };
    return UpdateMailboxQuotaCommand;
}($Command));
export { UpdateMailboxQuotaCommand };
//# sourceMappingURL=UpdateMailboxQuotaCommand.js.map