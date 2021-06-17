import { __extends } from "tslib";
import { StartSnapshotRequest, StartSnapshotResponse } from "../models/models_0";
import { deserializeAws_restJson1StartSnapshotCommand, serializeAws_restJson1StartSnapshotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state
 *             after the request completes. </p>
 *         <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to
 *             write blocks of data to the snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, StartSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, StartSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new StartSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSnapshotCommandInput} for command's `input` shape.
 * @see {@link StartSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSnapshotCommand = /** @class */ (function (_super) {
    __extends(StartSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSnapshotCommand(input) {
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
    StartSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "StartSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartSnapshotCommand(input, context);
    };
    StartSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartSnapshotCommand(output, context);
    };
    return StartSnapshotCommand;
}($Command));
export { StartSnapshotCommand };
//# sourceMappingURL=StartSnapshotCommand.js.map