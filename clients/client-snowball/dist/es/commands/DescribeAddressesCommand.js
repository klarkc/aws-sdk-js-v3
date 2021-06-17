import { __extends } from "tslib";
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAddressesCommand, serializeAws_json1_1DescribeAddressesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of
 *       the US regions will return addresses from the list of all addresses associated with this
 *       account in all US regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAddressesCommand = /** @class */ (function (_super) {
    __extends(DescribeAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAddressesCommand(input) {
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
    DescribeAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "DescribeAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAddressesCommand(input, context);
    };
    DescribeAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAddressesCommand(output, context);
    };
    return DescribeAddressesCommand;
}($Command));
export { DescribeAddressesCommand };
//# sourceMappingURL=DescribeAddressesCommand.js.map