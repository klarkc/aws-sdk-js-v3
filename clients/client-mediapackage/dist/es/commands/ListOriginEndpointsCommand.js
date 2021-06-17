import { __extends } from "tslib";
import { ListOriginEndpointsRequest, ListOriginEndpointsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListOriginEndpointsCommand, serializeAws_restJson1ListOriginEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a collection of OriginEndpoint records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListOriginEndpointsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListOriginEndpointsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new ListOriginEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListOriginEndpointsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOriginEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListOriginEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOriginEndpointsCommand(input) {
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
    ListOriginEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "ListOriginEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOriginEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOriginEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOriginEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListOriginEndpointsCommand(input, context);
    };
    ListOriginEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListOriginEndpointsCommand(output, context);
    };
    return ListOriginEndpointsCommand;
}($Command));
export { ListOriginEndpointsCommand };
//# sourceMappingURL=ListOriginEndpointsCommand.js.map