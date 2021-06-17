import { __extends } from "tslib";
import { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import { deserializeAws_json1_0CancelQueryCommand, serializeAws_json1_0CancelQueryCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Cancels a query that has been issued. Cancellation is guaranteed only if the query has not
 *         completed execution before the cancellation request was issued. Because cancellation is an idempotent operation,
 *         subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CancelQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CancelQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelQueryCommand = /** @class */ (function (_super) {
    __extends(CancelQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelQueryCommand(input) {
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
    CancelQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamQueryClient";
        var commandName = "CancelQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelQueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelQueryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CancelQueryCommand(input, context);
    };
    CancelQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CancelQueryCommand(output, context);
    };
    return CancelQueryCommand;
}($Command));
export { CancelQueryCommand };
//# sourceMappingURL=CancelQueryCommand.js.map