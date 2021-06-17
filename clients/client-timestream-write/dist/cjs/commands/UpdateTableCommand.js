"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_endpoint_discovery_1 = require("@aws-sdk/middleware-endpoint-discovery");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table.
 *          Note that the change in retention duration takes effect immediately.
 *          For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours,
 *          the memory store will be capable of holding 24 hours of data, but will
 *          be populated with 24 hours of data 22 hours after this change was made.
 *          Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
 *          <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, UpdateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, UpdateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateTableCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateTableResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateTableCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateTableCommand(output, context);
    }
}
exports.UpdateTableCommand = UpdateTableCommand;
//# sourceMappingURL=UpdateTableCommand.js.map