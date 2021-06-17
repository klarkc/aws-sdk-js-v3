import { __extends } from "tslib";
import { ConfirmProductInstanceRequest, ConfirmProductInstanceResult } from "../models/models_0";
import { deserializeAws_ec2ConfirmProductInstanceCommand, serializeAws_ec2ConfirmProductInstanceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Determines whether a product code is associated with an instance. This action can only
 *             be used by the owner of the product code. It is useful when a product code owner must
 *             verify whether another user's instance is eligible for support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ConfirmProductInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ConfirmProductInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmProductInstanceCommandInput} for command's `input` shape.
 * @see {@link ConfirmProductInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmProductInstanceCommand = /** @class */ (function (_super) {
    __extends(ConfirmProductInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmProductInstanceCommand(input) {
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
    ConfirmProductInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ConfirmProductInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmProductInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmProductInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmProductInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ConfirmProductInstanceCommand(input, context);
    };
    ConfirmProductInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ConfirmProductInstanceCommand(output, context);
    };
    return ConfirmProductInstanceCommand;
}($Command));
export { ConfirmProductInstanceCommand };
//# sourceMappingURL=ConfirmProductInstanceCommand.js.map