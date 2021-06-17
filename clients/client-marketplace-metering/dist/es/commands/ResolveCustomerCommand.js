import { __extends } from "tslib";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import { deserializeAws_json1_1ResolveCustomerCommand, serializeAws_json1_1ResolveCustomerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>ResolveCustomer is called by a SaaS application during the registration process.
 *             When a buyer visits your website during the registration process, the buyer submits a
 *             registration token through their browser. The registration token is resolved through
 *             this API to obtain a CustomerIdentifier and product code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResolveCustomerCommand = /** @class */ (function (_super) {
    __extends(ResolveCustomerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResolveCustomerCommand(input) {
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
    ResolveCustomerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceMeteringClient";
        var commandName = "ResolveCustomerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResolveCustomerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResolveCustomerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResolveCustomerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResolveCustomerCommand(input, context);
    };
    ResolveCustomerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResolveCustomerCommand(output, context);
    };
    return ResolveCustomerCommand;
}($Command));
export { ResolveCustomerCommand };
//# sourceMappingURL=ResolveCustomerCommand.js.map