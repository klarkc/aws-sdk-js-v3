import { __extends } from "tslib";
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDeleteImageCommand, serializeAws_json1_1BatchDeleteImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a list of specified images within a repository in a public registry. Images are
 *          specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *          you remove the last tag from an image, the image is deleted from your repository.</p>
 *          <p>You can completely delete an image (and all of its tags) by specifying the image's
 *          digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteImageCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteImageCommand(input) {
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
    BatchDeleteImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "BatchDeleteImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeleteImageCommand(input, context);
    };
    BatchDeleteImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeleteImageCommand(output, context);
    };
    return BatchDeleteImageCommand;
}($Command));
export { BatchDeleteImageCommand };
//# sourceMappingURL=BatchDeleteImageCommand.js.map