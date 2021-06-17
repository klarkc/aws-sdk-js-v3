import { __extends } from "tslib";
import { DescribePortalRequest, DescribePortalResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePortalCommand, serializeAws_restJson1DescribePortalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortalCommandInput} for command's `input` shape.
 * @see {@link DescribePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePortalCommand = /** @class */ (function (_super) {
    __extends(DescribePortalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePortalCommand(input) {
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
    DescribePortalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribePortalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePortalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePortalResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePortalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePortalCommand(input, context);
    };
    DescribePortalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePortalCommand(output, context);
    };
    return DescribePortalCommand;
}($Command));
export { DescribePortalCommand };
//# sourceMappingURL=DescribePortalCommand.js.map