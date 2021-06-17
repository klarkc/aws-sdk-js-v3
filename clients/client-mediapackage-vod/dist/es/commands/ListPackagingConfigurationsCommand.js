import { __extends } from "tslib";
import { ListPackagingConfigurationsRequest, ListPackagingConfigurationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPackagingConfigurationsCommand, serializeAws_restJson1ListPackagingConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingConfigurationsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingConfigurationsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListPackagingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPackagingConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListPackagingConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackagingConfigurationsCommand(input) {
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
    ListPackagingConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "ListPackagingConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackagingConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackagingConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackagingConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackagingConfigurationsCommand(input, context);
    };
    ListPackagingConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackagingConfigurationsCommand(output, context);
    };
    return ListPackagingConfigurationsCommand;
}($Command));
export { ListPackagingConfigurationsCommand };
//# sourceMappingURL=ListPackagingConfigurationsCommand.js.map