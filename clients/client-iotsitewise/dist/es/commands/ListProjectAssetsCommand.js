import { __extends } from "tslib";
import { ListProjectAssetsRequest, ListProjectAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProjectAssetsCommand, serializeAws_restJson1ListProjectAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link ListProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProjectAssetsCommand = /** @class */ (function (_super) {
    __extends(ListProjectAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProjectAssetsCommand(input) {
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
    ListProjectAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListProjectAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProjectAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProjectAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProjectAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProjectAssetsCommand(input, context);
    };
    ListProjectAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProjectAssetsCommand(output, context);
    };
    return ListProjectAssetsCommand;
}($Command));
export { ListProjectAssetsCommand };
//# sourceMappingURL=ListProjectAssetsCommand.js.map