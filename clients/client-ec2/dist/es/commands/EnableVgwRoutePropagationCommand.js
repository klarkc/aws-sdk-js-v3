import { __extends } from "tslib";
import { EnableVgwRoutePropagationRequest } from "../models/models_4";
import { deserializeAws_ec2EnableVgwRoutePropagationCommand, serializeAws_ec2EnableVgwRoutePropagationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableVgwRoutePropagationCommand = /** @class */ (function (_super) {
    __extends(EnableVgwRoutePropagationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableVgwRoutePropagationCommand(input) {
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
    EnableVgwRoutePropagationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableVgwRoutePropagationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableVgwRoutePropagationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableVgwRoutePropagationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableVgwRoutePropagationCommand(input, context);
    };
    EnableVgwRoutePropagationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableVgwRoutePropagationCommand(output, context);
    };
    return EnableVgwRoutePropagationCommand;
}($Command));
export { EnableVgwRoutePropagationCommand };
//# sourceMappingURL=EnableVgwRoutePropagationCommand.js.map