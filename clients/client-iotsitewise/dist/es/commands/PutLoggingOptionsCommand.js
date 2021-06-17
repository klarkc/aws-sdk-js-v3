import { __extends } from "tslib";
import { PutLoggingOptionsRequest, PutLoggingOptionsResponse } from "../models/models_0";
import { deserializeAws_restJson1PutLoggingOptionsCommand, serializeAws_restJson1PutLoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets logging options for AWS IoT SiteWise.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutLoggingOptionsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutLoggingOptionsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new PutLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLoggingOptionsCommand(input) {
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
    PutLoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "PutLoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutLoggingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutLoggingOptionsCommand(input, context);
    };
    PutLoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutLoggingOptionsCommand(output, context);
    };
    return PutLoggingOptionsCommand;
}($Command));
export { PutLoggingOptionsCommand };
//# sourceMappingURL=PutLoggingOptionsCommand.js.map