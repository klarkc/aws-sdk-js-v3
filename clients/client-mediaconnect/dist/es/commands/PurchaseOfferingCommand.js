import { __extends } from "tslib";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_0";
import { deserializeAws_restJson1PurchaseOfferingCommand, serializeAws_restJson1PurchaseOfferingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, PurchaseOfferingCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, PurchaseOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseOfferingCommand(input) {
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
    PurchaseOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "PurchaseOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseOfferingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PurchaseOfferingCommand(input, context);
    };
    PurchaseOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PurchaseOfferingCommand(output, context);
    };
    return PurchaseOfferingCommand;
}($Command));
export { PurchaseOfferingCommand };
//# sourceMappingURL=PurchaseOfferingCommand.js.map