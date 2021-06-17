import { __extends } from "tslib";
import { CancelBundleTaskRequest, CancelBundleTaskResult } from "../models/models_0";
import { deserializeAws_ec2CancelBundleTaskCommand, serializeAws_ec2CancelBundleTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a bundling operation for an instance store-backed Windows instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelBundleTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelBundleTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelBundleTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBundleTaskCommandInput} for command's `input` shape.
 * @see {@link CancelBundleTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelBundleTaskCommand = /** @class */ (function (_super) {
    __extends(CancelBundleTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelBundleTaskCommand(input) {
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
    CancelBundleTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelBundleTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelBundleTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelBundleTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelBundleTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelBundleTaskCommand(input, context);
    };
    CancelBundleTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelBundleTaskCommand(output, context);
    };
    return CancelBundleTaskCommand;
}($Command));
export { CancelBundleTaskCommand };
//# sourceMappingURL=CancelBundleTaskCommand.js.map