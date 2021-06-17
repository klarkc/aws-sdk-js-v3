import { __extends } from "tslib";
import { GetStreamingSessionStreamRequest, GetStreamingSessionStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStreamingSessionStreamCommand, serializeAws_restJson1GetStreamingSessionStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamingSessionStreamCommand = /** @class */ (function (_super) {
    __extends(GetStreamingSessionStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStreamingSessionStreamCommand(input) {
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
    GetStreamingSessionStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStreamingSessionStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStreamingSessionStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStreamingSessionStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStreamingSessionStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStreamingSessionStreamCommand(input, context);
    };
    GetStreamingSessionStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStreamingSessionStreamCommand(output, context);
    };
    return GetStreamingSessionStreamCommand;
}($Command));
export { GetStreamingSessionStreamCommand };
//# sourceMappingURL=GetStreamingSessionStreamCommand.js.map