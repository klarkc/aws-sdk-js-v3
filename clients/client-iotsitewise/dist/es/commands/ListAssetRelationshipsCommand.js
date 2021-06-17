import { __extends } from "tslib";
import { ListAssetRelationshipsRequest, ListAssetRelationshipsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssetRelationshipsCommand, serializeAws_restJson1ListAssetRelationshipsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
 *       to identify an asset's root asset and all associated assets between that asset and its
 *       root.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetRelationshipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListAssetRelationshipsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssetRelationshipsCommand = /** @class */ (function (_super) {
    __extends(ListAssetRelationshipsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssetRelationshipsCommand(input) {
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
    ListAssetRelationshipsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListAssetRelationshipsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssetRelationshipsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssetRelationshipsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssetRelationshipsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssetRelationshipsCommand(input, context);
    };
    ListAssetRelationshipsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssetRelationshipsCommand(output, context);
    };
    return ListAssetRelationshipsCommand;
}($Command));
export { ListAssetRelationshipsCommand };
//# sourceMappingURL=ListAssetRelationshipsCommand.js.map