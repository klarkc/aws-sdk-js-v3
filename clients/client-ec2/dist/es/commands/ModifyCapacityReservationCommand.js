import { __extends } from "tslib";
import { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/models_4";
import { deserializeAws_ec2ModifyCapacityReservationCommand, serializeAws_ec2ModifyCapacityReservationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ModifyCapacityReservationCommand = /** @class */ (function (_super) {
    __extends(ModifyCapacityReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyCapacityReservationCommand(input) {
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
    ModifyCapacityReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyCapacityReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyCapacityReservationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyCapacityReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyCapacityReservationCommand(input, context);
    };
    ModifyCapacityReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyCapacityReservationCommand(output, context);
    };
    return ModifyCapacityReservationCommand;
}($Command));
export { ModifyCapacityReservationCommand };
//# sourceMappingURL=ModifyCapacityReservationCommand.js.map