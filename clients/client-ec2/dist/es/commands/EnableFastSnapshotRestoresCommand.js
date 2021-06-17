import { __extends } from "tslib";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/models_4";
import { deserializeAws_ec2EnableFastSnapshotRestoresCommand, serializeAws_ec2EnableFastSnapshotRestoresCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link EnableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableFastSnapshotRestoresCommand = /** @class */ (function (_super) {
    __extends(EnableFastSnapshotRestoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableFastSnapshotRestoresCommand(input) {
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
    EnableFastSnapshotRestoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableFastSnapshotRestoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableFastSnapshotRestoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableFastSnapshotRestoresResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableFastSnapshotRestoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableFastSnapshotRestoresCommand(input, context);
    };
    EnableFastSnapshotRestoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableFastSnapshotRestoresCommand(output, context);
    };
    return EnableFastSnapshotRestoresCommand;
}($Command));
export { EnableFastSnapshotRestoresCommand };
//# sourceMappingURL=EnableFastSnapshotRestoresCommand.js.map