import { __extends } from "tslib";
import { ModifySnapshotAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifySnapshotAttributeCommand, serializeAws_ec2ModifySnapshotAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or removes permission settings for the specified snapshot. You may add or remove
 *       specified AWS account IDs from a snapshot's list of create volume permissions, but you cannot
 *       do both in a single operation. If you need to both add and remove account IDs for a snapshot,
 *       you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p>
 *          <p>Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be made
 *       public. Snapshots encrypted with your default CMK cannot be shared with other accounts.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifySnapshotAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifySnapshotAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifySnapshotAttributeCommand(input) {
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
    ModifySnapshotAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifySnapshotAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifySnapshotAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifySnapshotAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifySnapshotAttributeCommand(input, context);
    };
    ModifySnapshotAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifySnapshotAttributeCommand(output, context);
    };
    return ModifySnapshotAttributeCommand;
}($Command));
export { ModifySnapshotAttributeCommand };
//# sourceMappingURL=ModifySnapshotAttributeCommand.js.map