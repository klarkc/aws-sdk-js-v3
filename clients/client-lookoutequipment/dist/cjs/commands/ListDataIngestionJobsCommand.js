"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDataIngestionJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 *          of the input data, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDataIngestionJobsCommand extends smithy_client_1.Command {
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
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LookoutEquipmentClient";
        const commandName = "ListDataIngestionJobsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDataIngestionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDataIngestionJobsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0ListDataIngestionJobsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0ListDataIngestionJobsCommand(output, context);
    }
}
exports.ListDataIngestionJobsCommand = ListDataIngestionJobsCommand;
//# sourceMappingURL=ListDataIngestionJobsCommand.js.map