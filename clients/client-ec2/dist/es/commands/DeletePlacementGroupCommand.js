import { __extends } from "tslib";
import { DeletePlacementGroupRequest } from "../models/models_2";
import { deserializeAws_ec2DeletePlacementGroupCommand, serializeAws_ec2DeletePlacementGroupCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified placement group. You must terminate all instances in the
 *             placement group before you can delete the placement group. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeletePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeletePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeletePlacementGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlacementGroupCommand = /** @class */ (function (_super) {
    __extends(DeletePlacementGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlacementGroupCommand(input) {
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
    DeletePlacementGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeletePlacementGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlacementGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlacementGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeletePlacementGroupCommand(input, context);
    };
    DeletePlacementGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeletePlacementGroupCommand(output, context);
    };
    return DeletePlacementGroupCommand;
}($Command));
export { DeletePlacementGroupCommand };
//# sourceMappingURL=DeletePlacementGroupCommand.js.map