import { __extends } from "tslib";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResponse } from "../models/models_0";
import { deserializeAws_json1_1WithdrawByoipCidrCommand, serializeAws_json1_1WithdrawByoipCidrCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops advertising an address range that is provisioned as an address pool.
 * 			You can perform this operation at most once every 10 seconds, even if you specify different address
 * 			ranges each time.</p>
 * 		       <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of
 * 			propagation delays.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, WithdrawByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, WithdrawByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var WithdrawByoipCidrCommand = /** @class */ (function (_super) {
    __extends(WithdrawByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function WithdrawByoipCidrCommand(input) {
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
    WithdrawByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "WithdrawByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: WithdrawByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: WithdrawByoipCidrResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    WithdrawByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1WithdrawByoipCidrCommand(input, context);
    };
    WithdrawByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1WithdrawByoipCidrCommand(output, context);
    };
    return WithdrawByoipCidrCommand;
}($Command));
export { WithdrawByoipCidrCommand };
//# sourceMappingURL=WithdrawByoipCidrCommand.js.map