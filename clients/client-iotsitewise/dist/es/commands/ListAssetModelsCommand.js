import { __extends } from "tslib";
import { ListAssetModelsRequest, ListAssetModelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssetModelsCommand, serializeAws_restJson1ListAssetModelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of summaries of all asset models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetModelsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetModelsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetModelsCommandInput} for command's `input` shape.
 * @see {@link ListAssetModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssetModelsCommand = /** @class */ (function (_super) {
    __extends(ListAssetModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssetModelsCommand(input) {
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
    ListAssetModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListAssetModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssetModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssetModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssetModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssetModelsCommand(input, context);
    };
    ListAssetModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssetModelsCommand(output, context);
    };
    return ListAssetModelsCommand;
}($Command));
export { ListAssetModelsCommand };
//# sourceMappingURL=ListAssetModelsCommand.js.map