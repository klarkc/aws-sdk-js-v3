import { __extends } from "tslib";
import { DescribeVodSourceRequest, DescribeVodSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeVodSourceCommand, serializeAws_restJson1DescribeVodSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides details about a specific VOD source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVodSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVodSourceCommand = /** @class */ (function (_super) {
    __extends(DescribeVodSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVodSourceCommand(input) {
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
    DescribeVodSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DescribeVodSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVodSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVodSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVodSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeVodSourceCommand(input, context);
    };
    DescribeVodSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeVodSourceCommand(output, context);
    };
    return DescribeVodSourceCommand;
}($Command));
export { DescribeVodSourceCommand };
//# sourceMappingURL=DescribeVodSourceCommand.js.map