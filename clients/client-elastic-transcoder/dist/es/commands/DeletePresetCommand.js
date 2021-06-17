import { __extends } from "tslib";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePresetCommand, serializeAws_restJson1DeletePresetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p>
 *         <note>
 *             <p>You can't delete the default presets that are included with Elastic Transcoder.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, DeletePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, DeletePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new DeletePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePresetCommandInput} for command's `input` shape.
 * @see {@link DeletePresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePresetCommand = /** @class */ (function (_super) {
    __extends(DeletePresetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePresetCommand(input) {
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
    DeletePresetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "DeletePresetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePresetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePresetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePresetCommand(input, context);
    };
    DeletePresetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePresetCommand(output, context);
    };
    return DeletePresetCommand;
}($Command));
export { DeletePresetCommand };
//# sourceMappingURL=DeletePresetCommand.js.map