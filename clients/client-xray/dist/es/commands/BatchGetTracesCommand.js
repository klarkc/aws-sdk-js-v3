import { __extends } from "tslib";
import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/models_0";
import { deserializeAws_restJson1BatchGetTracesCommand, serializeAws_restJson1BatchGetTracesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetTracesCommand = /** @class */ (function (_super) {
    __extends(BatchGetTracesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetTracesCommand(input) {
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
    BatchGetTracesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "BatchGetTracesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetTracesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetTracesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetTracesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetTracesCommand(input, context);
    };
    BatchGetTracesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetTracesCommand(output, context);
    };
    return BatchGetTracesCommand;
}($Command));
export { BatchGetTracesCommand };
//# sourceMappingURL=BatchGetTracesCommand.js.map