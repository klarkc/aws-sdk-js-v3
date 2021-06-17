import { __extends } from "tslib";
import { BatchGetStreamKeyRequest, BatchGetStreamKeyResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchGetStreamKeyCommand, serializeAws_restJson1BatchGetStreamKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchGetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchGetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new BatchGetStreamKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link BatchGetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetStreamKeyCommand = /** @class */ (function (_super) {
    __extends(BatchGetStreamKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetStreamKeyCommand(input) {
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
    BatchGetStreamKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "BatchGetStreamKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetStreamKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetStreamKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetStreamKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetStreamKeyCommand(input, context);
    };
    BatchGetStreamKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetStreamKeyCommand(output, context);
    };
    return BatchGetStreamKeyCommand;
}($Command));
export { BatchGetStreamKeyCommand };
//# sourceMappingURL=BatchGetStreamKeyCommand.js.map