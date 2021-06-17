import { __extends } from "tslib";
import { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/models_0";
import { deserializeAws_json1_1UploadLayerPartCommand, serializeAws_json1_1UploadLayerPartCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads an image layer part to Amazon ECR.</p>
 *         <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size
 *             of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API
 *             is called once per each new image layer part.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UploadLayerPartCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UploadLayerPartCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new UploadLayerPartCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadLayerPartCommandInput} for command's `input` shape.
 * @see {@link UploadLayerPartCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UploadLayerPartCommand = /** @class */ (function (_super) {
    __extends(UploadLayerPartCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UploadLayerPartCommand(input) {
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
    UploadLayerPartCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "UploadLayerPartCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UploadLayerPartRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UploadLayerPartResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UploadLayerPartCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UploadLayerPartCommand(input, context);
    };
    UploadLayerPartCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UploadLayerPartCommand(output, context);
    };
    return UploadLayerPartCommand;
}($Command));
export { UploadLayerPartCommand };
//# sourceMappingURL=UploadLayerPartCommand.js.map