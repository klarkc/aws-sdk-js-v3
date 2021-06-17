import { __extends } from "tslib";
import { ModifyInstanceCapacityReservationAttributesRequest, ModifyInstanceCapacityReservationAttributesResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand, serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceCapacityReservationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceCapacityReservationAttributesCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceCapacityReservationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceCapacityReservationAttributesCommand(input) {
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
    ModifyInstanceCapacityReservationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstanceCapacityReservationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceCapacityReservationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(input, context);
    };
    ModifyInstanceCapacityReservationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(output, context);
    };
    return ModifyInstanceCapacityReservationAttributesCommand;
}($Command));
export { ModifyInstanceCapacityReservationAttributesCommand };
//# sourceMappingURL=ModifyInstanceCapacityReservationAttributesCommand.js.map