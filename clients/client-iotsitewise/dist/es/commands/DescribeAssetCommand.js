import { __extends } from "tslib";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAssetCommand, serializeAws_restJson1DescribeAssetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssetCommand = /** @class */ (function (_super) {
    __extends(DescribeAssetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssetCommand(input) {
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
    DescribeAssetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeAssetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAssetCommand(input, context);
    };
    DescribeAssetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAssetCommand(output, context);
    };
    return DescribeAssetCommand;
}($Command));
export { DescribeAssetCommand };
//# sourceMappingURL=DescribeAssetCommand.js.map