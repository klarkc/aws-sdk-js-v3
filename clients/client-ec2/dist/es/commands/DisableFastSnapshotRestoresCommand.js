import { __extends } from "tslib";
import { DisableFastSnapshotRestoresRequest } from "../models/models_3";
import { DisableFastSnapshotRestoresResult } from "../models/models_4";
import { deserializeAws_ec2DisableFastSnapshotRestoresCommand, serializeAws_ec2DisableFastSnapshotRestoresCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DisableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableFastSnapshotRestoresCommand = /** @class */ (function (_super) {
    __extends(DisableFastSnapshotRestoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableFastSnapshotRestoresCommand(input) {
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
    DisableFastSnapshotRestoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableFastSnapshotRestoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableFastSnapshotRestoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableFastSnapshotRestoresResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableFastSnapshotRestoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableFastSnapshotRestoresCommand(input, context);
    };
    DisableFastSnapshotRestoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableFastSnapshotRestoresCommand(output, context);
    };
    return DisableFastSnapshotRestoresCommand;
}($Command));
export { DisableFastSnapshotRestoresCommand };
//# sourceMappingURL=DisableFastSnapshotRestoresCommand.js.map