"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelCapacityReservationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to
 * 			<code>cancelled</code>.</p>
 * 		       <p>Instances running in the reserved capacity continue running until you stop them. Stopped
 * 			instances that target the Capacity Reservation can no longer launch. Modify these instances to either
 * 			target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation
 * 			that has matching attributes and sufficient capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelCapacityReservationCommand extends smithy_client_1.Command {
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
        const commandName = "CancelCapacityReservationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CancelCapacityReservationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CancelCapacityReservationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CancelCapacityReservationCommand(output, context);
    }
}
exports.CancelCapacityReservationCommand = CancelCapacityReservationCommand;
//# sourceMappingURL=CancelCapacityReservationCommand.js.map