import { __extends } from "tslib";
import { DeletePackagingConfigurationRequest, DeletePackagingConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePackagingConfigurationCommand, serializeAws_restJson1DeletePackagingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeletePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeletePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DeletePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePackagingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeletePackagingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePackagingConfigurationCommand(input) {
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
    DeletePackagingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "DeletePackagingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePackagingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePackagingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePackagingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePackagingConfigurationCommand(input, context);
    };
    DeletePackagingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePackagingConfigurationCommand(output, context);
    };
    return DeletePackagingConfigurationCommand;
}($Command));
export { DeletePackagingConfigurationCommand };
//# sourceMappingURL=DeletePackagingConfigurationCommand.js.map