import { __extends } from "tslib";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTrafficMirrorTargetCommand, serializeAws_ec2DeleteTrafficMirrorTargetCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Traffic Mirror target.</p>
 *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrafficMirrorTargetCommand = /** @class */ (function (_super) {
    __extends(DeleteTrafficMirrorTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrafficMirrorTargetCommand(input) {
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
    DeleteTrafficMirrorTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTrafficMirrorTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrafficMirrorTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrafficMirrorTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrafficMirrorTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTrafficMirrorTargetCommand(input, context);
    };
    DeleteTrafficMirrorTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTrafficMirrorTargetCommand(output, context);
    };
    return DeleteTrafficMirrorTargetCommand;
}($Command));
export { DeleteTrafficMirrorTargetCommand };
//# sourceMappingURL=DeleteTrafficMirrorTargetCommand.js.map