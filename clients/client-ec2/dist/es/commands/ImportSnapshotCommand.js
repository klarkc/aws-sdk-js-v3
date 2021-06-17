import { __extends } from "tslib";
import { ImportSnapshotRequest, ImportSnapshotResult } from "../models/models_4";
import { deserializeAws_ec2ImportSnapshotCommand, serializeAws_ec2ImportSnapshotCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports a disk into an EBS snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html">Importing a disk as a snapshot using VM Import/Export</a> in the
 *    <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ImportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportSnapshotCommand = /** @class */ (function (_super) {
    __extends(ImportSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportSnapshotCommand(input) {
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
    ImportSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ImportSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ImportSnapshotCommand(input, context);
    };
    ImportSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ImportSnapshotCommand(output, context);
    };
    return ImportSnapshotCommand;
}($Command));
export { ImportSnapshotCommand };
//# sourceMappingURL=ImportSnapshotCommand.js.map