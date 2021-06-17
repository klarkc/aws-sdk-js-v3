import { __extends } from "tslib";
import { CancelMailboxExportJobRequest, CancelMailboxExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelMailboxExportJobCommand, serializeAws_json1_1CancelMailboxExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a mailbox export job.</p>
 *          <note>
 *             <p>If the mailbox export job is near completion, it might not be possible to cancel
 *             it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CancelMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CancelMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CancelMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelMailboxExportJobCommand = /** @class */ (function (_super) {
    __extends(CancelMailboxExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelMailboxExportJobCommand(input) {
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
    CancelMailboxExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "CancelMailboxExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelMailboxExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelMailboxExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelMailboxExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelMailboxExportJobCommand(input, context);
    };
    CancelMailboxExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelMailboxExportJobCommand(output, context);
    };
    return CancelMailboxExportJobCommand;
}($Command));
export { CancelMailboxExportJobCommand };
//# sourceMappingURL=CancelMailboxExportJobCommand.js.map