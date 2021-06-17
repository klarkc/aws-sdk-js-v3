import { __extends } from "tslib";
import { GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse } from "../models/models_0";
import { deserializeAws_restJson1GetComponentVersionArtifactCommand, serializeAws_restJson1GetComponentVersionArtifactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the pre-signed URL to download a public component artifact. Core devices call this
 *       operation to identify the URL that they can use to download an artifact to install.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentVersionArtifactCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentVersionArtifactCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetComponentVersionArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentVersionArtifactCommandInput} for command's `input` shape.
 * @see {@link GetComponentVersionArtifactCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetComponentVersionArtifactCommand = /** @class */ (function (_super) {
    __extends(GetComponentVersionArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComponentVersionArtifactCommand(input) {
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
    GetComponentVersionArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "GetComponentVersionArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComponentVersionArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComponentVersionArtifactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComponentVersionArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetComponentVersionArtifactCommand(input, context);
    };
    GetComponentVersionArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetComponentVersionArtifactCommand(output, context);
    };
    return GetComponentVersionArtifactCommand;
}($Command));
export { GetComponentVersionArtifactCommand };
//# sourceMappingURL=GetComponentVersionArtifactCommand.js.map