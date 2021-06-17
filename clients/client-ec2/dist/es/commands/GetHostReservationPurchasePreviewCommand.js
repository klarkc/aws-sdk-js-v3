import { __extends } from "tslib";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/models_4";
import { deserializeAws_ec2GetHostReservationPurchasePreviewCommand, serializeAws_ec2GetHostReservationPurchasePreviewCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Preview a reservation purchase with configurations that match those of your
 *             Dedicated Host. You must have active Dedicated Hosts in your account before you purchase
 *             a reservation.</p>
 *         <p>This is a preview of the <a>PurchaseHostReservation</a> action and does
 *             not result in the offering being purchased.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetHostReservationPurchasePreviewCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetHostReservationPurchasePreviewCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetHostReservationPurchasePreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostReservationPurchasePreviewCommandInput} for command's `input` shape.
 * @see {@link GetHostReservationPurchasePreviewCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostReservationPurchasePreviewCommand = /** @class */ (function (_super) {
    __extends(GetHostReservationPurchasePreviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostReservationPurchasePreviewCommand(input) {
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
    GetHostReservationPurchasePreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetHostReservationPurchasePreviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostReservationPurchasePreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostReservationPurchasePreviewResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostReservationPurchasePreviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetHostReservationPurchasePreviewCommand(input, context);
    };
    GetHostReservationPurchasePreviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetHostReservationPurchasePreviewCommand(output, context);
    };
    return GetHostReservationPurchasePreviewCommand;
}($Command));
export { GetHostReservationPurchasePreviewCommand };
//# sourceMappingURL=GetHostReservationPurchasePreviewCommand.js.map