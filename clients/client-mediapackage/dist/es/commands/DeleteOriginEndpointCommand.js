import { __extends } from "tslib";
import { DeleteOriginEndpointRequest, DeleteOriginEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteOriginEndpointCommand, serializeAws_restJson1DeleteOriginEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DeleteOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DeleteOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DeleteOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOriginEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteOriginEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOriginEndpointCommand(input) {
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
    DeleteOriginEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "DeleteOriginEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOriginEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOriginEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOriginEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteOriginEndpointCommand(input, context);
    };
    DeleteOriginEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteOriginEndpointCommand(output, context);
    };
    return DeleteOriginEndpointCommand;
}($Command));
export { DeleteOriginEndpointCommand };
//# sourceMappingURL=DeleteOriginEndpointCommand.js.map