import { __extends } from "tslib";
import { StartMailboxExportJobRequest, StartMailboxExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartMailboxExportJobCommand, serializeAws_json1_1StartMailboxExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a mailbox export job to export MIME-format email messages and calendar items
 *          from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3)
 *          bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in
 *          the <i>Amazon WorkMail Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, StartMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, StartMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new StartMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link StartMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMailboxExportJobCommand = /** @class */ (function (_super) {
    __extends(StartMailboxExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMailboxExportJobCommand(input) {
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
    StartMailboxExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "StartMailboxExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMailboxExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMailboxExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMailboxExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMailboxExportJobCommand(input, context);
    };
    StartMailboxExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMailboxExportJobCommand(output, context);
    };
    return StartMailboxExportJobCommand;
}($Command));
export { StartMailboxExportJobCommand };
//# sourceMappingURL=StartMailboxExportJobCommand.js.map