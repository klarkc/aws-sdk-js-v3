import { __extends } from "tslib";
import { DescribeFastSnapshotRestoresRequest, DescribeFastSnapshotRestoresResult } from "../models/models_2";
import { deserializeAws_ec2DescribeFastSnapshotRestoresCommand, serializeAws_ec2DescribeFastSnapshotRestoresCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the state of fast snapshot restores for your snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DescribeFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFastSnapshotRestoresCommand = /** @class */ (function (_super) {
    __extends(DescribeFastSnapshotRestoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFastSnapshotRestoresCommand(input) {
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
    DescribeFastSnapshotRestoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeFastSnapshotRestoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFastSnapshotRestoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFastSnapshotRestoresResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFastSnapshotRestoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeFastSnapshotRestoresCommand(input, context);
    };
    DescribeFastSnapshotRestoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeFastSnapshotRestoresCommand(output, context);
    };
    return DescribeFastSnapshotRestoresCommand;
}($Command));
export { DescribeFastSnapshotRestoresCommand };
//# sourceMappingURL=DescribeFastSnapshotRestoresCommand.js.map