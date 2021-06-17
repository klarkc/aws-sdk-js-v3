import { __extends } from "tslib";
import { DescribeAssetPropertyRequest, DescribeAssetPropertyResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAssetPropertyCommand, serializeAws_restJson1DescribeAssetPropertyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an asset property.</p>
 *          <note>
 *             <p>When you call this operation for an attribute property, this response includes the
 *         default attribute value that you define in the asset model. If you update the default value
 *         in the model, this operation's response includes the new default value.</p>
 *          </note>
 *          <p>This operation doesn't return the value of the asset property. To get the value of an
 *       asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeAssetPropertyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssetPropertyCommand = /** @class */ (function (_super) {
    __extends(DescribeAssetPropertyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssetPropertyCommand(input) {
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
    DescribeAssetPropertyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeAssetPropertyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssetPropertyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssetPropertyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssetPropertyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAssetPropertyCommand(input, context);
    };
    DescribeAssetPropertyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAssetPropertyCommand(output, context);
    };
    return DescribeAssetPropertyCommand;
}($Command));
export { DescribeAssetPropertyCommand };
//# sourceMappingURL=DescribeAssetPropertyCommand.js.map