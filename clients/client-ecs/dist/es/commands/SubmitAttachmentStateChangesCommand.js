import { __extends } from "tslib";
import { SubmitAttachmentStateChangesRequest, SubmitAttachmentStateChangesResponse } from "../models/models_0";
import { deserializeAws_json1_1SubmitAttachmentStateChangesCommand, serializeAws_json1_1SubmitAttachmentStateChangesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that an attachment changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitAttachmentStateChangesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitAttachmentStateChangesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitAttachmentStateChangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitAttachmentStateChangesCommandInput} for command's `input` shape.
 * @see {@link SubmitAttachmentStateChangesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubmitAttachmentStateChangesCommand = /** @class */ (function (_super) {
    __extends(SubmitAttachmentStateChangesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubmitAttachmentStateChangesCommand(input) {
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
    SubmitAttachmentStateChangesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "SubmitAttachmentStateChangesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubmitAttachmentStateChangesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SubmitAttachmentStateChangesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubmitAttachmentStateChangesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SubmitAttachmentStateChangesCommand(input, context);
    };
    SubmitAttachmentStateChangesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SubmitAttachmentStateChangesCommand(output, context);
    };
    return SubmitAttachmentStateChangesCommand;
}($Command));
export { SubmitAttachmentStateChangesCommand };
//# sourceMappingURL=SubmitAttachmentStateChangesCommand.js.map