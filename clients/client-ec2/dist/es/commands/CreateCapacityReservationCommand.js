import { __extends } from "tslib";
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/models_0";
import { deserializeAws_ec2CreateCapacityReservationCommand, serializeAws_ec2CreateCapacityReservationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Capacity Reservation with the specified attributes.</p>
 * 		       <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This
 * 			gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage.
 * 			By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *
 * 		       <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to
 * 			fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try
 * 			again at a later time, try in a different Availability Zone, or request a smaller
 * 			capacity reservation. If your application is flexible across instance types and sizes,
 * 			try to create a Capacity Reservation with different instance attributes.</p>
 *
 * 		       <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance
 * 			limit for the selected instance type. If your request fails due to limit constraints,
 * 			increase your On-Demand Instance limit for the required instance type and try again. For
 * 			more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service
 * 				Quotas</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCapacityReservationCommand = /** @class */ (function (_super) {
    __extends(CreateCapacityReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCapacityReservationCommand(input) {
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
    CreateCapacityReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateCapacityReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCapacityReservationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCapacityReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateCapacityReservationCommand(input, context);
    };
    CreateCapacityReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateCapacityReservationCommand(output, context);
    };
    return CreateCapacityReservationCommand;
}($Command));
export { CreateCapacityReservationCommand };
//# sourceMappingURL=CreateCapacityReservationCommand.js.map