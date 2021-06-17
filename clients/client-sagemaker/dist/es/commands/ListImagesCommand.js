import { __extends } from "tslib";
import { ListImagesRequest, ListImagesResponse } from "../models/models_2";
import { deserializeAws_json1_1ListImagesCommand, serializeAws_json1_1ListImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the images in your account and their properties. The list can be filtered by
 *         creation time or modified time, and whether the image name contains a specified string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListImagesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListImagesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImagesCommand = /** @class */ (function (_super) {
    __extends(ListImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImagesCommand(input) {
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
    ListImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListImagesCommand(input, context);
    };
    ListImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListImagesCommand(output, context);
    };
    return ListImagesCommand;
}($Command));
export { ListImagesCommand };
//# sourceMappingURL=ListImagesCommand.js.map