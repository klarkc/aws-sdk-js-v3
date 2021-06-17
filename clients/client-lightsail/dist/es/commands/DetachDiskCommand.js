import { __extends } from "tslib";
import { DetachDiskRequest, DetachDiskResult } from "../models/models_0";
import { deserializeAws_json1_1DetachDiskCommand, serializeAws_json1_1DetachDiskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
 *       any file systems on the device within your operating system before stopping the instance and
 *       detaching the disk.</p>
 *          <p>The <code>detach disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachDiskCommandInput} for command's `input` shape.
 * @see {@link DetachDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachDiskCommand = /** @class */ (function (_super) {
    __extends(DetachDiskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachDiskCommand(input) {
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
    DetachDiskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DetachDiskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachDiskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachDiskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachDiskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachDiskCommand(input, context);
    };
    DetachDiskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachDiskCommand(output, context);
    };
    return DetachDiskCommand;
}($Command));
export { DetachDiskCommand };
//# sourceMappingURL=DetachDiskCommand.js.map