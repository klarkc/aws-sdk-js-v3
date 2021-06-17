import { __extends } from "tslib";
import { UpdateDataRetentionInput, UpdateDataRetentionOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateDataRetentionCommand, serializeAws_restJson1UpdateDataRetentionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Increases or decreases the stream's data retention period by the value that you
 *             specify. To indicate whether you want to increase or decrease the data retention period,
 *             specify the <code>Operation</code> parameter in the request body. In the request, you
 *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 *         <note>
 *             <p>The retention period that you specify replaces the current value.</p>
 *         </note>
 *
 *         <p>This operation requires permission for the
 *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
 *
 *         <p>Changing the data retention period affects the data in the stream as
 *             follows:</p>
 *         <ul>
 *             <li>
 *                 <p>If the data retention period is increased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is increased
 *                     from one hour to seven hours, all existing data is retained for seven
 *                     hours.</p>
 *             </li>
 *             <li>
 *                 <p>If the data retention period is decreased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is decreased
 *                     from seven hours to one hour, all existing data is retained for one hour, and
 *                     any data older than one hour is deleted immediately.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateDataRetentionCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateDataRetentionCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateDataRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataRetentionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataRetentionCommand = /** @class */ (function (_super) {
    __extends(UpdateDataRetentionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataRetentionCommand(input) {
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
    UpdateDataRetentionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "UpdateDataRetentionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataRetentionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataRetentionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataRetentionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDataRetentionCommand(input, context);
    };
    UpdateDataRetentionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDataRetentionCommand(output, context);
    };
    return UpdateDataRetentionCommand;
}($Command));
export { UpdateDataRetentionCommand };
//# sourceMappingURL=UpdateDataRetentionCommand.js.map