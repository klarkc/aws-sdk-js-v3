import { __extends } from "tslib";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1CopySnapshotCommand, serializeAws_json1_1CopySnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
 *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
 *       used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to
 *       another in Amazon Lightsail.</p>
 *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
 *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
 *       parameters.</p>
 *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
 *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
 *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
 *         auto snapshot</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CopySnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CopySnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopySnapshotCommand = /** @class */ (function (_super) {
    __extends(CopySnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopySnapshotCommand(input) {
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
    CopySnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CopySnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopySnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopySnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopySnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CopySnapshotCommand(input, context);
    };
    CopySnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CopySnapshotCommand(output, context);
    };
    return CopySnapshotCommand;
}($Command));
export { CopySnapshotCommand };
//# sourceMappingURL=CopySnapshotCommand.js.map