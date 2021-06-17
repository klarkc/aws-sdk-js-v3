import { __extends } from "tslib";
import { QueryRequest, QueryResponse } from "../models/models_0";
import { deserializeAws_json1_0QueryCommand, serializeAws_json1_0QueryCommand } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Query is a synchronous operation that enables you to execute a query. Query will timeout after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. The result set will be truncated to 1MB. Service quotas apply. For more information, see Quotas in the Timestream Developer Guide.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, QueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, QueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var QueryCommand = /** @class */ (function (_super) {
    __extends(QueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function QueryCommand(input) {
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
    QueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamQueryClient";
        var commandName = "QueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: QueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: QueryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    QueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0QueryCommand(input, context);
    };
    QueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0QueryCommand(output, context);
    };
    return QueryCommand;
}($Command));
export { QueryCommand };
//# sourceMappingURL=QueryCommand.js.map