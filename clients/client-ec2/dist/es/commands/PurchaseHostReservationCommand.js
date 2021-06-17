import { __extends } from "tslib";
import { PurchaseHostReservationRequest, PurchaseHostReservationResult } from "../models/models_4";
import { deserializeAws_ec2PurchaseHostReservationCommand, serializeAws_ec2PurchaseHostReservationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Purchase a reservation with configurations that match those of your Dedicated Host.
 *             You must have active Dedicated Hosts in your account before you purchase a reservation.
 *             This action results in the specified reservation being purchased and charged to your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseHostReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseHostReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseHostReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseHostReservationCommandInput} for command's `input` shape.
 * @see {@link PurchaseHostReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseHostReservationCommand = /** @class */ (function (_super) {
    __extends(PurchaseHostReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseHostReservationCommand(input) {
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
    PurchaseHostReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "PurchaseHostReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseHostReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseHostReservationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseHostReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2PurchaseHostReservationCommand(input, context);
    };
    PurchaseHostReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2PurchaseHostReservationCommand(output, context);
    };
    return PurchaseHostReservationCommand;
}($Command));
export { PurchaseHostReservationCommand };
//# sourceMappingURL=PurchaseHostReservationCommand.js.map