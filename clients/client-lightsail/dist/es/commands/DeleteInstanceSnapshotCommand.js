import { __extends } from "tslib";
import { DeleteInstanceSnapshotRequest, DeleteInstanceSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteInstanceSnapshotCommand, serializeAws_json1_1DeleteInstanceSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific snapshot of a virtual private server (or
 *       <i>instance</i>).</p>
 *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instance snapshot name</code>. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInstanceSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteInstanceSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInstanceSnapshotCommand(input) {
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
    DeleteInstanceSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteInstanceSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInstanceSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInstanceSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInstanceSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInstanceSnapshotCommand(input, context);
    };
    DeleteInstanceSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInstanceSnapshotCommand(output, context);
    };
    return DeleteInstanceSnapshotCommand;
}($Command));
export { DeleteInstanceSnapshotCommand };
//# sourceMappingURL=DeleteInstanceSnapshotCommand.js.map