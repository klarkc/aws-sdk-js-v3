import { __extends } from "tslib";
import { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/models_0";
import { deserializeAws_json1_1InitiateLayerUploadCommand, serializeAws_json1_1InitiateLayerUploadCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
 *         <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer
 *             that has not already been uploaded. Whether or not an image layer has been uploaded is
 *             determined by the BatchCheckLayerAvailability API action.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitiateLayerUploadCommand = /** @class */ (function (_super) {
    __extends(InitiateLayerUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InitiateLayerUploadCommand(input) {
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
    InitiateLayerUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "InitiateLayerUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InitiateLayerUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InitiateLayerUploadResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InitiateLayerUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InitiateLayerUploadCommand(input, context);
    };
    InitiateLayerUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InitiateLayerUploadCommand(output, context);
    };
    return InitiateLayerUploadCommand;
}($Command));
export { InitiateLayerUploadCommand };
//# sourceMappingURL=InitiateLayerUploadCommand.js.map