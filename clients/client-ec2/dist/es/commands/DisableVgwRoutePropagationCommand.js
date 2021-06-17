import { __extends } from "tslib";
import { DisableVgwRoutePropagationRequest } from "../models/models_4";
import { deserializeAws_ec2DisableVgwRoutePropagationCommand, serializeAws_ec2DisableVgwRoutePropagationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableVgwRoutePropagationCommand = /** @class */ (function (_super) {
    __extends(DisableVgwRoutePropagationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableVgwRoutePropagationCommand(input) {
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
    DisableVgwRoutePropagationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableVgwRoutePropagationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableVgwRoutePropagationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableVgwRoutePropagationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableVgwRoutePropagationCommand(input, context);
    };
    DisableVgwRoutePropagationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableVgwRoutePropagationCommand(output, context);
    };
    return DisableVgwRoutePropagationCommand;
}($Command));
export { DisableVgwRoutePropagationCommand };
//# sourceMappingURL=DisableVgwRoutePropagationCommand.js.map