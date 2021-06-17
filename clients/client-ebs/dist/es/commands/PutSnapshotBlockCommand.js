import { __extends } from "tslib";
import { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0";
import { deserializeAws_restJson1PutSnapshotBlockCommand, serializeAws_restJson1PutSnapshotBlockCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Writes a block of data to a snapshot. If the specified block contains
 *             data, the existing data is overwritten. The target snapshot must be in the
 *                 <code>pending</code> state.</p>
 *     	    <p>Data written to a snapshot must be aligned with 512-byte sectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, PutSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, PutSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new PutSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link PutSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSnapshotBlockCommand = /** @class */ (function (_super) {
    __extends(PutSnapshotBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSnapshotBlockCommand(input) {
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
    PutSnapshotBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "PutSnapshotBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSnapshotBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutSnapshotBlockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSnapshotBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutSnapshotBlockCommand(input, context);
    };
    PutSnapshotBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutSnapshotBlockCommand(output, context);
    };
    return PutSnapshotBlockCommand;
}($Command));
export { PutSnapshotBlockCommand };
//# sourceMappingURL=PutSnapshotBlockCommand.js.map