import { __extends } from "tslib";
import { RotateIngestEndpointCredentialsRequest, RotateIngestEndpointCredentialsResponse } from "../models/models_0";
import { deserializeAws_restJson1RotateIngestEndpointCredentialsCommand, serializeAws_restJson1RotateIngestEndpointCredentialsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RotateIngestEndpointCredentialsCommand = /** @class */ (function (_super) {
    __extends(RotateIngestEndpointCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RotateIngestEndpointCredentialsCommand(input) {
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
    RotateIngestEndpointCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "RotateIngestEndpointCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RotateIngestEndpointCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RotateIngestEndpointCredentialsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RotateIngestEndpointCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RotateIngestEndpointCredentialsCommand(input, context);
    };
    RotateIngestEndpointCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RotateIngestEndpointCredentialsCommand(output, context);
    };
    return RotateIngestEndpointCredentialsCommand;
}($Command));
export { RotateIngestEndpointCredentialsCommand };
//# sourceMappingURL=RotateIngestEndpointCredentialsCommand.js.map