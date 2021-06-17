import { __extends } from "tslib";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import { deserializeAws_json1_1CompleteLayerUploadCommand, serializeAws_json1_1CompleteLayerUploadCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry,
 *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
 *          the image layer for data validation purposes.</p>
 *          <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
 *          layer to verify that the upload has completed.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CompleteLayerUploadCommand = /** @class */ (function (_super) {
    __extends(CompleteLayerUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CompleteLayerUploadCommand(input) {
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
    CompleteLayerUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "CompleteLayerUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CompleteLayerUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CompleteLayerUploadResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CompleteLayerUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CompleteLayerUploadCommand(input, context);
    };
    CompleteLayerUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CompleteLayerUploadCommand(output, context);
    };
    return CompleteLayerUploadCommand;
}($Command));
export { CompleteLayerUploadCommand };
//# sourceMappingURL=CompleteLayerUploadCommand.js.map