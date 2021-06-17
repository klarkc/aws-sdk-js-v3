import { __extends } from "tslib";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResponse } from "../models/models_0";
import { deserializeAws_json1_1DeprovisionByoipCidrCommand, serializeAws_json1_1DeprovisionByoipCidrCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Releases the specified address range that you provisioned to use with your AWS resources
 * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p>
 * 		       <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
 * 			any accelerators that are using static IP addresses allocated from its address range.
 * 		</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprovisionByoipCidrCommand = /** @class */ (function (_super) {
    __extends(DeprovisionByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprovisionByoipCidrCommand(input) {
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
    DeprovisionByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DeprovisionByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprovisionByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeprovisionByoipCidrResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprovisionByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeprovisionByoipCidrCommand(input, context);
    };
    DeprovisionByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeprovisionByoipCidrCommand(output, context);
    };
    return DeprovisionByoipCidrCommand;
}($Command));
export { DeprovisionByoipCidrCommand };
//# sourceMappingURL=DeprovisionByoipCidrCommand.js.map