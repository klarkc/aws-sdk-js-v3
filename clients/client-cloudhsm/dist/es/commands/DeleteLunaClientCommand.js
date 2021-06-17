import { __extends } from "tslib";
import { DeleteLunaClientRequest, DeleteLunaClientResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteLunaClientCommand, serializeAws_json1_1DeleteLunaClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Deletes a client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DeleteLunaClientCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DeleteLunaClientCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new DeleteLunaClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLunaClientCommandInput} for command's `input` shape.
 * @see {@link DeleteLunaClientCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLunaClientCommand = /** @class */ (function (_super) {
    __extends(DeleteLunaClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLunaClientCommand(input) {
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
    DeleteLunaClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudHSMClient";
        var commandName = "DeleteLunaClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLunaClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLunaClientResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLunaClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLunaClientCommand(input, context);
    };
    DeleteLunaClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLunaClientCommand(output, context);
    };
    return DeleteLunaClientCommand;
}($Command));
export { DeleteLunaClientCommand };
//# sourceMappingURL=DeleteLunaClientCommand.js.map