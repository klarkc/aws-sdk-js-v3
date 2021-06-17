import { __extends } from "tslib";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeBundleCommand, serializeAws_restJson1DescribeBundleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBundleCommand = /** @class */ (function (_super) {
    __extends(DescribeBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBundleCommand(input) {
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
    DescribeBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "DescribeBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBundleCommand(input, context);
    };
    DescribeBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBundleCommand(output, context);
    };
    return DescribeBundleCommand;
}($Command));
export { DescribeBundleCommand };
//# sourceMappingURL=DescribeBundleCommand.js.map