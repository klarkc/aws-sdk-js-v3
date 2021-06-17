import { __extends } from "tslib";
import { StopStreamRequest, StopStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1StopStreamCommand, serializeAws_restJson1StopStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in
 *       conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a
 *       channel.</p>
 *          <note>
 *             <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS
 *         session, so to stop the stream permanently, you may want to first revoke the
 *           <code>streamKey</code> attached to the channel.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StopStreamCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StopStreamCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new StopStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStreamCommandInput} for command's `input` shape.
 * @see {@link StopStreamCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopStreamCommand = /** @class */ (function (_super) {
    __extends(StopStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopStreamCommand(input) {
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
    StopStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "StopStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopStreamCommand(input, context);
    };
    StopStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopStreamCommand(output, context);
    };
    return StopStreamCommand;
}($Command));
export { StopStreamCommand };
//# sourceMappingURL=StopStreamCommand.js.map