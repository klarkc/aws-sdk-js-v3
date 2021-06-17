import { __extends } from "tslib";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDownloadUrlForLayerCommand, serializeAws_json1_1GetDownloadUrlForLayerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You
 *             can only get URLs for image layers that are referenced in an image.</p>
 *         <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDownloadUrlForLayerCommand = /** @class */ (function (_super) {
    __extends(GetDownloadUrlForLayerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDownloadUrlForLayerCommand(input) {
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
    GetDownloadUrlForLayerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "GetDownloadUrlForLayerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDownloadUrlForLayerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDownloadUrlForLayerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDownloadUrlForLayerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDownloadUrlForLayerCommand(input, context);
    };
    GetDownloadUrlForLayerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDownloadUrlForLayerCommand(output, context);
    };
    return GetDownloadUrlForLayerCommand;
}($Command));
export { GetDownloadUrlForLayerCommand };
//# sourceMappingURL=GetDownloadUrlForLayerCommand.js.map