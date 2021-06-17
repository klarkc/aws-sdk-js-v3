import { __extends } from "tslib";
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_4";
import { deserializeAws_ec2GetCapacityReservationUsageCommand, serializeAws_ec2GetCapacityReservationUsageCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner
 * 			and each AWS account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only
 * 			the Capacity Reservation owner's usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityReservationUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCapacityReservationUsageCommand = /** @class */ (function (_super) {
    __extends(GetCapacityReservationUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCapacityReservationUsageCommand(input) {
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
    GetCapacityReservationUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetCapacityReservationUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCapacityReservationUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCapacityReservationUsageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCapacityReservationUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetCapacityReservationUsageCommand(input, context);
    };
    GetCapacityReservationUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetCapacityReservationUsageCommand(output, context);
    };
    return GetCapacityReservationUsageCommand;
}($Command));
export { GetCapacityReservationUsageCommand };
//# sourceMappingURL=GetCapacityReservationUsageCommand.js.map