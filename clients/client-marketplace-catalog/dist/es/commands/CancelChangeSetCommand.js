import { __extends } from "tslib";
import { CancelChangeSetRequest, CancelChangeSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelChangeSetCommand, serializeAws_restJson1CancelChangeSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to cancel an open change request. Must be sent before the status of the request
 *             changes to <code>APPLYING</code>, the final stage of completing your change request. You
 *             can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, CancelChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, CancelChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new CancelChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelChangeSetCommandInput} for command's `input` shape.
 * @see {@link CancelChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelChangeSetCommand = /** @class */ (function (_super) {
    __extends(CancelChangeSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelChangeSetCommand(input) {
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
    CancelChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "CancelChangeSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelChangeSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelChangeSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelChangeSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelChangeSetCommand(input, context);
    };
    CancelChangeSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelChangeSetCommand(output, context);
    };
    return CancelChangeSetCommand;
}($Command));
export { CancelChangeSetCommand };
//# sourceMappingURL=CancelChangeSetCommand.js.map