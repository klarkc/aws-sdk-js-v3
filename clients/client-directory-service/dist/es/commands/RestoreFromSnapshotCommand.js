import { __extends } from "tslib";
import { RestoreFromSnapshotRequest, RestoreFromSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1RestoreFromSnapshotCommand, serializeAws_json1_1RestoreFromSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a directory using an existing directory snapshot.</p>
 *          <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p>
 *          <p>This action returns as soon as the restore operation is initiated. You can monitor the
 *          progress of the restore operation by calling the <a>DescribeDirectories</a> operation with
 *          the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to
 *             <code>Active</code>, the restore operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RestoreFromSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RestoreFromSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreFromSnapshotCommand = /** @class */ (function (_super) {
    __extends(RestoreFromSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreFromSnapshotCommand(input) {
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
    RestoreFromSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "RestoreFromSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreFromSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreFromSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RestoreFromSnapshotCommand(input, context);
    };
    RestoreFromSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RestoreFromSnapshotCommand(output, context);
    };
    return RestoreFromSnapshotCommand;
}($Command));
export { RestoreFromSnapshotCommand };
//# sourceMappingURL=RestoreFromSnapshotCommand.js.map