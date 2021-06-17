import { __extends } from "tslib";
import { DeleteAutoSnapshotRequest, DeleteAutoSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteAutoSnapshotCommand, serializeAws_json1_1DeleteAutoSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteAutoSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteAutoSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteAutoSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutoSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAutoSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteAutoSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAutoSnapshotCommand(input) {
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
    DeleteAutoSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteAutoSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAutoSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAutoSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAutoSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAutoSnapshotCommand(input, context);
    };
    DeleteAutoSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAutoSnapshotCommand(output, context);
    };
    return DeleteAutoSnapshotCommand;
}($Command));
export { DeleteAutoSnapshotCommand };
//# sourceMappingURL=DeleteAutoSnapshotCommand.js.map