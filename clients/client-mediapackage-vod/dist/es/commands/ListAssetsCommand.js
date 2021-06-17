import { __extends } from "tslib";
import { ListAssetsRequest, ListAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAssetsCommand, serializeAws_restJson1ListAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a collection of MediaPackage VOD Asset resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListAssetsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListAssetsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssetsCommand = /** @class */ (function (_super) {
    __extends(ListAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssetsCommand(input) {
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
    ListAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "ListAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAssetsCommand(input, context);
    };
    ListAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAssetsCommand(output, context);
    };
    return ListAssetsCommand;
}($Command));
export { ListAssetsCommand };
//# sourceMappingURL=ListAssetsCommand.js.map