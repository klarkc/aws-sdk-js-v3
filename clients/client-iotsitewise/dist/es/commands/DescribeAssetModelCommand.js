import { __extends } from "tslib";
import { DescribeAssetModelRequest, DescribeAssetModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAssetModelCommand, serializeAws_restJson1DescribeAssetModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAssetModelCommand = /** @class */ (function (_super) {
    __extends(DescribeAssetModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAssetModelCommand(input) {
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
    DescribeAssetModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeAssetModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssetModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssetModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssetModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAssetModelCommand(input, context);
    };
    DescribeAssetModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAssetModelCommand(output, context);
    };
    return DescribeAssetModelCommand;
}($Command));
export { DescribeAssetModelCommand };
//# sourceMappingURL=DescribeAssetModelCommand.js.map