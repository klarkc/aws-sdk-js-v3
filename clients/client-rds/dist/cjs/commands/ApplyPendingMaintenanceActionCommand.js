"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyPendingMaintenanceActionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ApplyPendingMaintenanceActionCommand extends smithy_client_1.Command {
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
        const commandName = "ApplyPendingMaintenanceActionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ApplyPendingMaintenanceActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ApplyPendingMaintenanceActionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
    }
}
exports.ApplyPendingMaintenanceActionCommand = ApplyPendingMaintenanceActionCommand;
//# sourceMappingURL=ApplyPendingMaintenanceActionCommand.js.map