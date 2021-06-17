import { __extends } from "tslib";
import { DescribeSourceLocationRequest, DescribeSourceLocationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSourceLocationCommand, serializeAws_restJson1DescribeSourceLocationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the properties of the requested source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSourceLocationCommand = /** @class */ (function (_super) {
    __extends(DescribeSourceLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSourceLocationCommand(input) {
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
    DescribeSourceLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DescribeSourceLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSourceLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSourceLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSourceLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSourceLocationCommand(input, context);
    };
    DescribeSourceLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSourceLocationCommand(output, context);
    };
    return DescribeSourceLocationCommand;
}($Command));
export { DescribeSourceLocationCommand };
//# sourceMappingURL=DescribeSourceLocationCommand.js.map