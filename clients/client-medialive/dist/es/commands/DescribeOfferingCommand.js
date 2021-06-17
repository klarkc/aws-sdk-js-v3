import { __extends } from "tslib";
import { DescribeOfferingRequest, DescribeOfferingResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeOfferingCommand, serializeAws_restJson1DescribeOfferingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Get details for an offering.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeOfferingCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeOfferingCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOfferingCommandInput} for command's `input` shape.
 * @see {@link DescribeOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOfferingCommand = /** @class */ (function (_super) {
    __extends(DescribeOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOfferingCommand(input) {
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
    DescribeOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOfferingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeOfferingCommand(input, context);
    };
    DescribeOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeOfferingCommand(output, context);
    };
    return DescribeOfferingCommand;
}($Command));
export { DescribeOfferingCommand };
//# sourceMappingURL=DescribeOfferingCommand.js.map