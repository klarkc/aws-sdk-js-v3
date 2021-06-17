import { __extends } from "tslib";
import { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTrafficMirrorFilterCommand, serializeAws_ec2DeleteTrafficMirrorFilterCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Traffic Mirror filter.</p>
 *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrafficMirrorFilterCommand = /** @class */ (function (_super) {
    __extends(DeleteTrafficMirrorFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrafficMirrorFilterCommand(input) {
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
    DeleteTrafficMirrorFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTrafficMirrorFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrafficMirrorFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrafficMirrorFilterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrafficMirrorFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTrafficMirrorFilterCommand(input, context);
    };
    DeleteTrafficMirrorFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTrafficMirrorFilterCommand(output, context);
    };
    return DeleteTrafficMirrorFilterCommand;
}($Command));
export { DeleteTrafficMirrorFilterCommand };
//# sourceMappingURL=DeleteTrafficMirrorFilterCommand.js.map