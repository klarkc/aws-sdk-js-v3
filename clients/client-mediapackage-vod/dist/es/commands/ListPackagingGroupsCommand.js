import { __extends } from "tslib";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPackagingGroupsCommand, serializeAws_restJson1ListPackagingGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingGroupsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingGroupsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListPackagingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPackagingGroupsCommand = /** @class */ (function (_super) {
    __extends(ListPackagingGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackagingGroupsCommand(input) {
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
    ListPackagingGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "ListPackagingGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackagingGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackagingGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackagingGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackagingGroupsCommand(input, context);
    };
    ListPackagingGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackagingGroupsCommand(output, context);
    };
    return ListPackagingGroupsCommand;
}($Command));
export { ListPackagingGroupsCommand };
//# sourceMappingURL=ListPackagingGroupsCommand.js.map