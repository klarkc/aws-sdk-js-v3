"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReservationUtilizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts.
 * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
 * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetReservationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetReservationUtilizationCommand extends smithy_client_1.Command {
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
        const clientName = "CostExplorerClient";
        const commandName = "GetReservationUtilizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetReservationUtilizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetReservationUtilizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetReservationUtilizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetReservationUtilizationCommand(output, context);
    }
}
exports.GetReservationUtilizationCommand = GetReservationUtilizationCommand;
//# sourceMappingURL=GetReservationUtilizationCommand.js.map