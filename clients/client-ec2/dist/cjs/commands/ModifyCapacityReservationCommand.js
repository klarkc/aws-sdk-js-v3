"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyCapacityReservationCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You
 * 			cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings,
 * 			platform, Availability Zone, or instance eligibility. If you need to modify any of these
 * 			attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with
 * 			the required attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link ModifyCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyCapacityReservationCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "ModifyCapacityReservationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyCapacityReservationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyCapacityReservationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyCapacityReservationCommand(output, context);
    }
}
exports.ModifyCapacityReservationCommand = ModifyCapacityReservationCommand;
//# sourceMappingURL=ModifyCapacityReservationCommand.js.map