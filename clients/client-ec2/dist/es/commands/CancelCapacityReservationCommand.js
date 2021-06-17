import { __extends } from "tslib";
import { CancelCapacityReservationRequest, CancelCapacityReservationResult } from "../models/models_0";
import { deserializeAws_ec2CancelCapacityReservationCommand, serializeAws_ec2CancelCapacityReservationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CancelCapacityReservationCommand = /** @class */ (function (_super) {
    __extends(CancelCapacityReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelCapacityReservationCommand(input) {
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
    CancelCapacityReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelCapacityReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelCapacityReservationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelCapacityReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelCapacityReservationCommand(input, context);
    };
    CancelCapacityReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelCapacityReservationCommand(output, context);
    };
    return CancelCapacityReservationCommand;
}($Command));
export { CancelCapacityReservationCommand };
//# sourceMappingURL=CancelCapacityReservationCommand.js.map