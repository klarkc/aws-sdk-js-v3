import { __extends } from "tslib";
import { ReadPresetRequest, ReadPresetResponse } from "../models/models_0";
import { deserializeAws_restJson1ReadPresetCommand, serializeAws_restJson1ReadPresetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The ReadPreset operation gets detailed information about a preset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadPresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReadPresetCommandInput} for command's `input` shape.
 * @see {@link ReadPresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReadPresetCommand = /** @class */ (function (_super) {
    __extends(ReadPresetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReadPresetCommand(input) {
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
    ReadPresetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "ReadPresetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReadPresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReadPresetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReadPresetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ReadPresetCommand(input, context);
    };
    ReadPresetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ReadPresetCommand(output, context);
    };
    return ReadPresetCommand;
}($Command));
export { ReadPresetCommand };
//# sourceMappingURL=ReadPresetCommand.js.map