import { __extends } from "tslib";
import { DeleteDiskRequest, DeleteDiskResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDiskCommand, serializeAws_json1_1DeleteDiskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code>
 *       state (not attached to a Lightsail instance).</p>
 *          <note>
 *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
 *          </note>
 *          <p>The <code>delete disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiskCommandInput} for command's `input` shape.
 * @see {@link DeleteDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDiskCommand = /** @class */ (function (_super) {
    __extends(DeleteDiskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDiskCommand(input) {
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
    DeleteDiskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteDiskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDiskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDiskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDiskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDiskCommand(input, context);
    };
    DeleteDiskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDiskCommand(output, context);
    };
    return DeleteDiskCommand;
}($Command));
export { DeleteDiskCommand };
//# sourceMappingURL=DeleteDiskCommand.js.map