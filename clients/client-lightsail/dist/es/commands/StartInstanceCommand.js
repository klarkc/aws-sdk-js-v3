import { __extends } from "tslib";
import { StartInstanceRequest, StartInstanceResult } from "../models/models_1";
import { deserializeAws_json1_1StartInstanceCommand, serializeAws_json1_1StartInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance,
 *       use the <code>reboot instance</code> operation.</p>
 *          <note>
 *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
 *         instance. To use the same IP address after stopping and starting an instance, create a
 *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
 *          </note>
 *          <p>The <code>start instance</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>instance name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StartInstanceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StartInstanceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StartInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInstanceCommandInput} for command's `input` shape.
 * @see {@link StartInstanceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartInstanceCommand = /** @class */ (function (_super) {
    __extends(StartInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartInstanceCommand(input) {
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
    StartInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "StartInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartInstanceCommand(input, context);
    };
    StartInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartInstanceCommand(output, context);
    };
    return StartInstanceCommand;
}($Command));
export { StartInstanceCommand };
//# sourceMappingURL=StartInstanceCommand.js.map