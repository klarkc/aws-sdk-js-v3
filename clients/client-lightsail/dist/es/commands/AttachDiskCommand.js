import { __extends } from "tslib";
import { AttachDiskRequest, AttachDiskResult } from "../models/models_0";
import { deserializeAws_json1_1AttachDiskCommand, serializeAws_json1_1AttachDiskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it
 *       to the instance with the specified disk name.</p>
 *          <p>The <code>attach disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachDiskCommandInput} for command's `input` shape.
 * @see {@link AttachDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachDiskCommand = /** @class */ (function (_super) {
    __extends(AttachDiskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachDiskCommand(input) {
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
    AttachDiskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "AttachDiskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachDiskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachDiskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachDiskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachDiskCommand(input, context);
    };
    AttachDiskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachDiskCommand(output, context);
    };
    return AttachDiskCommand;
}($Command));
export { AttachDiskCommand };
//# sourceMappingURL=AttachDiskCommand.js.map