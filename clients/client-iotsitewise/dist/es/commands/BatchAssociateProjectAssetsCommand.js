import { __extends } from "tslib";
import { BatchAssociateProjectAssetsRequest, BatchAssociateProjectAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchAssociateProjectAssetsCommand, serializeAws_restJson1BatchAssociateProjectAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchAssociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchAssociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateProjectAssetsCommand = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchAssociateProjectAssetsCommand(input) {
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
    BatchAssociateProjectAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "BatchAssociateProjectAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchAssociateProjectAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchAssociateProjectAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchAssociateProjectAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchAssociateProjectAssetsCommand(input, context);
    };
    BatchAssociateProjectAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchAssociateProjectAssetsCommand(output, context);
    };
    return BatchAssociateProjectAssetsCommand;
}($Command));
export { BatchAssociateProjectAssetsCommand };
//# sourceMappingURL=BatchAssociateProjectAssetsCommand.js.map