import { __extends } from "tslib";
import { DescribeAddressRequest, DescribeAddressResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAddressCommand, serializeAws_json1_1DescribeAddressCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Takes an <code>AddressId</code> and returns specific details about that address in the
 *       form of an <code>Address</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAddressCommand = /** @class */ (function (_super) {
    __extends(DescribeAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAddressCommand(input) {
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
    DescribeAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "DescribeAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAddressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAddressCommand(input, context);
    };
    DescribeAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAddressCommand(output, context);
    };
    return DescribeAddressCommand;
}($Command));
export { DescribeAddressCommand };
//# sourceMappingURL=DescribeAddressCommand.js.map