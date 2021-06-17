import { __extends } from "tslib";
import { DeleteVolumeRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteVolumeCommand, serializeAws_ec2DeleteVolumeCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state
 *       (not attached to an instance).</p>
 *          <p>The volume can remain in the <code>deleting</code> state for several minutes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html">Deleting an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVolumeCommand = /** @class */ (function (_super) {
    __extends(DeleteVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVolumeCommand(input) {
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
    DeleteVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVolumeCommand(input, context);
    };
    DeleteVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVolumeCommand(output, context);
    };
    return DeleteVolumeCommand;
}($Command));
export { DeleteVolumeCommand };
//# sourceMappingURL=DeleteVolumeCommand.js.map