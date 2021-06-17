import { __extends } from "tslib";
import { ListPlaybackKeyPairsRequest, ListPlaybackKeyPairsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPlaybackKeyPairsCommand, serializeAws_restJson1ListPlaybackKeyPairsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private
 *         Channels</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListPlaybackKeyPairsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListPlaybackKeyPairsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new ListPlaybackKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaybackKeyPairsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlaybackKeyPairsCommand = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlaybackKeyPairsCommand(input) {
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
    ListPlaybackKeyPairsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "ListPlaybackKeyPairsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlaybackKeyPairsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlaybackKeyPairsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlaybackKeyPairsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPlaybackKeyPairsCommand(input, context);
    };
    ListPlaybackKeyPairsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPlaybackKeyPairsCommand(output, context);
    };
    return ListPlaybackKeyPairsCommand;
}($Command));
export { ListPlaybackKeyPairsCommand };
//# sourceMappingURL=ListPlaybackKeyPairsCommand.js.map