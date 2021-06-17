import { __extends } from "tslib";
import { CopyBackupRequest, CopyBackupResponse } from "../models/models_0";
import { deserializeAws_json1_1CopyBackupCommand, serializeAws_json1_1CopyBackupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies an existing backup within the same AWS account to another Region
 *          (cross-Region copy) or within the same Region (in-Region copy). You can have up to five
 *          backup copy requests in progress to a single destination Region per account.</p>
 *          <p>You can use cross-Region backup copies for cross-region disaster recovery.
 *          You periodically take backups and copy them to another Region so that in the
 *          event of a disaster in the primary Region, you can restore from backup and recover
 *          availability quickly in the other Region. You can make cross-Region copies
 *          only within your AWS partition.</p>
 *          <p> You can also use backup copies to clone your file data set to another Region
 *          or within the same Region.</p>
 *          <p>You can use the <code>SourceRegion</code> parameter to specify the AWS Region
 *          from which the backup will be copied. For example, if you make the call from the
 *          <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code>
 *          Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter
 *          to make a cross-Region copy. If you don't specify a Region, the backup copy is
 *          created in the same Region where the request is sent from (in-Region copy).</p>
 *          <p>For more information on creating backup copies, see
 *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups">
 *             Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i> and
 *          <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a>
 *          in the <i>Amazon FSx for Lustre User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CopyBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CopyBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CopyBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupCommandInput} for command's `input` shape.
 * @see {@link CopyBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyBackupCommand = /** @class */ (function (_super) {
    __extends(CopyBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyBackupCommand(input) {
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
    CopyBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "CopyBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyBackupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopyBackupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CopyBackupCommand(input, context);
    };
    CopyBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CopyBackupCommand(output, context);
    };
    return CopyBackupCommand;
}($Command));
export { CopyBackupCommand };
//# sourceMappingURL=CopyBackupCommand.js.map