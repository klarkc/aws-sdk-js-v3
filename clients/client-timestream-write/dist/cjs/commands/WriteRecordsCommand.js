"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteRecordsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_endpoint_discovery_1 = require("@aws-sdk/middleware-endpoint-discovery");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class WriteRecordsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_endpoint_discovery_1.getEndpointDiscoveryRequiredPlugin(configuration, { clientStack, options }));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "TimestreamWriteClient";
        const commandName = "WriteRecordsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.WriteRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0WriteRecordsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0WriteRecordsCommand(output, context);
    }
}
exports.WriteRecordsCommand = WriteRecordsCommand;
//# sourceMappingURL=WriteRecordsCommand.js.map