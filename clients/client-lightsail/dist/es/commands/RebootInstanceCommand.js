import { __extends } from "tslib";
import { RebootInstanceRequest, RebootInstanceResult } from "../models/models_1";
import { deserializeAws_json1_1RebootInstanceCommand, serializeAws_json1_1RebootInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts a specific instance.</p>
 *          <p>The <code>reboot instance</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>instance name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RebootInstanceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RebootInstanceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RebootInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootInstanceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootInstanceCommand = /** @class */ (function (_super) {
    __extends(RebootInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootInstanceCommand(input) {
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
    RebootInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "RebootInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebootInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebootInstanceCommand(input, context);
    };
    RebootInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebootInstanceCommand(output, context);
    };
    return RebootInstanceCommand;
}($Command));
export { RebootInstanceCommand };
//# sourceMappingURL=RebootInstanceCommand.js.map