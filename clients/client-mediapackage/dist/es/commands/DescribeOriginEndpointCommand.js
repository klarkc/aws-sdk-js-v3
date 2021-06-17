import { __extends } from "tslib";
import { DescribeOriginEndpointRequest, DescribeOriginEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeOriginEndpointCommand, serializeAws_restJson1DescribeOriginEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Gets details about an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DescribeOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOriginEndpointCommand = /** @class */ (function (_super) {
    __extends(DescribeOriginEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOriginEndpointCommand(input) {
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
    DescribeOriginEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "DescribeOriginEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOriginEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOriginEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOriginEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeOriginEndpointCommand(input, context);
    };
    DescribeOriginEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeOriginEndpointCommand(output, context);
    };
    return DescribeOriginEndpointCommand;
}($Command));
export { DescribeOriginEndpointCommand };
//# sourceMappingURL=DescribeOriginEndpointCommand.js.map