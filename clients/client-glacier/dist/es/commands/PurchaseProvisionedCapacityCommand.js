import { __extends } from "tslib";
import { PurchaseProvisionedCapacityInput, PurchaseProvisionedCapacityOutput } from "../models/models_0";
import { deserializeAws_restJson1PurchaseProvisionedCapacityCommand, serializeAws_restJson1PurchaseProvisionedCapacityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, PurchaseProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, PurchaseProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link PurchaseProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseProvisionedCapacityCommand = /** @class */ (function (_super) {
    __extends(PurchaseProvisionedCapacityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseProvisionedCapacityCommand(input) {
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
    PurchaseProvisionedCapacityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "PurchaseProvisionedCapacityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseProvisionedCapacityInput.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseProvisionedCapacityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseProvisionedCapacityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PurchaseProvisionedCapacityCommand(input, context);
    };
    PurchaseProvisionedCapacityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PurchaseProvisionedCapacityCommand(output, context);
    };
    return PurchaseProvisionedCapacityCommand;
}($Command));
export { PurchaseProvisionedCapacityCommand };
//# sourceMappingURL=PurchaseProvisionedCapacityCommand.js.map