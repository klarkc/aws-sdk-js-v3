import { __extends } from "tslib";
import { UpdateOriginEndpointRequest, UpdateOriginEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateOriginEndpointCommand, serializeAws_restJson1UpdateOriginEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, UpdateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, UpdateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOriginEndpointCommand = /** @class */ (function (_super) {
    __extends(UpdateOriginEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOriginEndpointCommand(input) {
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
    UpdateOriginEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "UpdateOriginEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOriginEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOriginEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOriginEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateOriginEndpointCommand(input, context);
    };
    UpdateOriginEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateOriginEndpointCommand(output, context);
    };
    return UpdateOriginEndpointCommand;
}($Command));
export { UpdateOriginEndpointCommand };
//# sourceMappingURL=UpdateOriginEndpointCommand.js.map