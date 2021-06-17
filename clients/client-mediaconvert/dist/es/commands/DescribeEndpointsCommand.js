import { __extends } from "tslib";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeEndpointsCommand, serializeAws_restJson1DescribeEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DescribeEndpointsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DescribeEndpointsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointsCommand(input) {
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
    DescribeEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "DescribeEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeEndpointsCommand(input, context);
    };
    DescribeEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeEndpointsCommand(output, context);
    };
    return DescribeEndpointsCommand;
}($Command));
export { DescribeEndpointsCommand };
//# sourceMappingURL=DescribeEndpointsCommand.js.map