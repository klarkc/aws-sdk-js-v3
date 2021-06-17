"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePendingMaintenanceActionsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribePendingMaintenanceActionsCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "DescribePendingMaintenanceActionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribePendingMaintenanceActionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PendingMaintenanceActionsMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribePendingMaintenanceActionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribePendingMaintenanceActionsCommand(output, context);
    }
}
exports.DescribePendingMaintenanceActionsCommand = DescribePendingMaintenanceActionsCommand;
//# sourceMappingURL=DescribePendingMaintenanceActionsCommand.js.map