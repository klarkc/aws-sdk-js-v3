import { __extends } from "tslib";
import { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeChannelCommand, serializeAws_restJson1DescribeChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the properties of a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChannelCommand = /** @class */ (function (_super) {
    __extends(DescribeChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeChannelCommand(input) {
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
    DescribeChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DescribeChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeChannelCommand(input, context);
    };
    DescribeChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeChannelCommand(output, context);
    };
    return DescribeChannelCommand;
}($Command));
export { DescribeChannelCommand };
//# sourceMappingURL=DescribeChannelCommand.js.map