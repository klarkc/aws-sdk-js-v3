import { __extends } from "tslib";
import { RotateChannelCredentialsRequest, RotateChannelCredentialsResponse } from "../models/models_0";
import { deserializeAws_restJson1RotateChannelCredentialsCommand, serializeAws_restJson1RotateChannelCredentialsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateChannelCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateChannelCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateChannelCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateChannelCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateChannelCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RotateChannelCredentialsCommand = /** @class */ (function (_super) {
    __extends(RotateChannelCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RotateChannelCredentialsCommand(input) {
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
    RotateChannelCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "RotateChannelCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RotateChannelCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RotateChannelCredentialsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RotateChannelCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RotateChannelCredentialsCommand(input, context);
    };
    RotateChannelCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RotateChannelCredentialsCommand(output, context);
    };
    return RotateChannelCredentialsCommand;
}($Command));
export { RotateChannelCredentialsCommand };
//# sourceMappingURL=RotateChannelCredentialsCommand.js.map