import { __extends } from "tslib";
import { UpdateFileSystemRequest, UpdateFileSystemResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateFileSystemCommand, serializeAws_json1_1UpdateFileSystemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to update the configuration of an existing Amazon FSx file system.
 *       You can update multiple properties in a single request.</p>
 *          <p>For Amazon FSx for Windows File Server file systems, you can update the following
 *     properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>SelfManagedActiveDirectoryConfiguration</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>ThroughputCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 *          <p>For Amazon FSx for Lustre file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutoImportPolicy</p>
 *             </li>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>DataCompressionType</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFileSystemCommand = /** @class */ (function (_super) {
    __extends(UpdateFileSystemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFileSystemCommand(input) {
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
    UpdateFileSystemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "UpdateFileSystemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFileSystemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFileSystemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFileSystemCommand(input, context);
    };
    UpdateFileSystemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFileSystemCommand(output, context);
    };
    return UpdateFileSystemCommand;
}($Command));
export { UpdateFileSystemCommand };
//# sourceMappingURL=UpdateFileSystemCommand.js.map