import { __extends } from "tslib";
import { WriteRecordsRequest } from "../models/models_0";
import { deserializeAws_json1_0WriteRecordsCommand, serializeAws_json1_0WriteRecordsCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The WriteRecords operation enables you to write your time series
 *       data into Timestream. You can specify a single data point or a batch
 *       of data points to be inserted into the system. Timestream offers you
 *       with a flexible schema that auto detects the column names and data types
 *       for your Timestream tables based on the dimension names and data types of
 *       the data points you specify when invoking writes into the database.
 *       Timestream support eventual consistency read semantics. This means that
 *       when you query data immediately after writing a batch of data into Timestream,
 *       the query results might not reflect the results of a recently completed write
 *       operation. The results may also include some stale data. If you repeat the
 *       query request after a short time, the results should return the latest data.
 *       Service quotas apply. For more information,
 *       see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, WriteRecordsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, WriteRecordsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new WriteRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WriteRecordsCommandInput} for command's `input` shape.
 * @see {@link WriteRecordsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var WriteRecordsCommand = /** @class */ (function (_super) {
    __extends(WriteRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function WriteRecordsCommand(input) {
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
    WriteRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "WriteRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: WriteRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    WriteRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0WriteRecordsCommand(input, context);
    };
    WriteRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0WriteRecordsCommand(output, context);
    };
    return WriteRecordsCommand;
}($Command));
export { WriteRecordsCommand };
//# sourceMappingURL=WriteRecordsCommand.js.map