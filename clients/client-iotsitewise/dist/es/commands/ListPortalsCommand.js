import { __extends } from "tslib";
import { ListPortalsRequest, ListPortalsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPortalsCommand, serializeAws_restJson1ListPortalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of AWS IoT SiteWise Monitor portals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListPortalsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListPortalsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPortalsCommand = /** @class */ (function (_super) {
    __extends(ListPortalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPortalsCommand(input) {
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
    ListPortalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListPortalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPortalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPortalsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPortalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPortalsCommand(input, context);
    };
    ListPortalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPortalsCommand(output, context);
    };
    return ListPortalsCommand;
}($Command));
export { ListPortalsCommand };
//# sourceMappingURL=ListPortalsCommand.js.map