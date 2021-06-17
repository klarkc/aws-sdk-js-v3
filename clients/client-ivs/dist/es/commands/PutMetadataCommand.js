import { __extends } from "tslib";
import { PutMetadataRequest } from "../models/models_0";
import { deserializeAws_restJson1PutMetadataCommand, serializeAws_restJson1PutMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Inserts metadata into the active stream of the specified channel. A maximum of 5 requests
 *       per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not
 *       sufficient for your needs, we recommend batching your data into a single PutMetadata call.)
 *
 *       Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata
 *
 *         within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, PutMetadataCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, PutMetadataCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new PutMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetadataCommandInput} for command's `input` shape.
 * @see {@link PutMetadataCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMetadataCommand = /** @class */ (function (_super) {
    __extends(PutMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutMetadataCommand(input) {
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
    PutMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "PutMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutMetadataCommand(input, context);
    };
    PutMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutMetadataCommand(output, context);
    };
    return PutMetadataCommand;
}($Command));
export { PutMetadataCommand };
//# sourceMappingURL=PutMetadataCommand.js.map