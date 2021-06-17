import { __extends } from "tslib";
import { BatchGetImageRequest, BatchGetImageResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGetImageCommand, serializeAws_json1_1BatchGetImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information for an image. Images are specified with either an
 *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
 *             manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetImageCommandInput} for command's `input` shape.
 * @see {@link BatchGetImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetImageCommand = /** @class */ (function (_super) {
    __extends(BatchGetImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetImageCommand(input) {
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
    BatchGetImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "BatchGetImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetImageCommand(input, context);
    };
    BatchGetImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetImageCommand(output, context);
    };
    return BatchGetImageCommand;
}($Command));
export { BatchGetImageCommand };
//# sourceMappingURL=BatchGetImageCommand.js.map