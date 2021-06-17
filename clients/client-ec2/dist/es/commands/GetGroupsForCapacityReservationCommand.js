import { __extends } from "tslib";
import { GetGroupsForCapacityReservationRequest, GetGroupsForCapacityReservationResult } from "../models/models_4";
import { deserializeAws_ec2GetGroupsForCapacityReservationCommand, serializeAws_ec2GetGroupsForCapacityReservationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resource groups to which a Capacity Reservation has been added.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetGroupsForCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetGroupsForCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetGroupsForCapacityReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupsForCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link GetGroupsForCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupsForCapacityReservationCommand = /** @class */ (function (_super) {
    __extends(GetGroupsForCapacityReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupsForCapacityReservationCommand(input) {
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
    GetGroupsForCapacityReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetGroupsForCapacityReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupsForCapacityReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupsForCapacityReservationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupsForCapacityReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetGroupsForCapacityReservationCommand(input, context);
    };
    GetGroupsForCapacityReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetGroupsForCapacityReservationCommand(output, context);
    };
    return GetGroupsForCapacityReservationCommand;
}($Command));
export { GetGroupsForCapacityReservationCommand };
//# sourceMappingURL=GetGroupsForCapacityReservationCommand.js.map