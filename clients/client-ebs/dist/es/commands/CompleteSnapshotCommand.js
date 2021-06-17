import { __extends } from "tslib";
import { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0";
import { deserializeAws_restJson1CompleteSnapshotCommand, serializeAws_restJson1CompleteSnapshotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Seals and completes the snapshot after all of the required blocks of data have been
 *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
 *             cannot write new blocks to a snapshot after it has been completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, CompleteSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, CompleteSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new CompleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link CompleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CompleteSnapshotCommand = /** @class */ (function (_super) {
    __extends(CompleteSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CompleteSnapshotCommand(input) {
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
    CompleteSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "CompleteSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CompleteSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CompleteSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CompleteSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CompleteSnapshotCommand(input, context);
    };
    CompleteSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CompleteSnapshotCommand(output, context);
    };
    return CompleteSnapshotCommand;
}($Command));
export { CompleteSnapshotCommand };
//# sourceMappingURL=CompleteSnapshotCommand.js.map