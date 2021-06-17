import { __extends } from "tslib";
import { DescribeReturnShippingLabelRequest, DescribeReturnShippingLabelResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeReturnShippingLabelCommand, serializeAws_json1_1DescribeReturnShippingLabelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information on the shipping label of a Snow device that is being returned to AWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReturnShippingLabelCommand = /** @class */ (function (_super) {
    __extends(DescribeReturnShippingLabelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReturnShippingLabelCommand(input) {
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
    DescribeReturnShippingLabelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "DescribeReturnShippingLabelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReturnShippingLabelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReturnShippingLabelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReturnShippingLabelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReturnShippingLabelCommand(input, context);
    };
    DescribeReturnShippingLabelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReturnShippingLabelCommand(output, context);
    };
    return DescribeReturnShippingLabelCommand;
}($Command));
export { DescribeReturnShippingLabelCommand };
//# sourceMappingURL=DescribeReturnShippingLabelCommand.js.map