import { __extends } from "tslib";
import { ModifyTrafficMirrorSessionRequest, ModifyTrafficMirrorSessionResult } from "../models/models_4";
import { deserializeAws_ec2ModifyTrafficMirrorSessionCommand, serializeAws_ec2ModifyTrafficMirrorSessionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTrafficMirrorSessionCommand = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTrafficMirrorSessionCommand(input) {
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
    ModifyTrafficMirrorSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTrafficMirrorSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTrafficMirrorSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTrafficMirrorSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTrafficMirrorSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTrafficMirrorSessionCommand(input, context);
    };
    ModifyTrafficMirrorSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTrafficMirrorSessionCommand(output, context);
    };
    return ModifyTrafficMirrorSessionCommand;
}($Command));
export { ModifyTrafficMirrorSessionCommand };
//# sourceMappingURL=ModifyTrafficMirrorSessionCommand.js.map