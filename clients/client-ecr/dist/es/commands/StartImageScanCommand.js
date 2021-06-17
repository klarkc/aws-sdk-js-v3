import { __extends } from "tslib";
import { StartImageScanRequest, StartImageScanResponse } from "../models/models_0";
import { deserializeAws_json1_1StartImageScanCommand, serializeAws_json1_1StartImageScanCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an image vulnerability scan. An image scan can only be started once per day on
 *             an individual image. This limit includes if an image was scanned on initial push. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image Scanning</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartImageScanCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartImageScanCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new StartImageScanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImageScanCommandInput} for command's `input` shape.
 * @see {@link StartImageScanCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartImageScanCommand = /** @class */ (function (_super) {
    __extends(StartImageScanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartImageScanCommand(input) {
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
    StartImageScanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "StartImageScanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartImageScanRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartImageScanResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartImageScanCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartImageScanCommand(input, context);
    };
    StartImageScanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartImageScanCommand(output, context);
    };
    return StartImageScanCommand;
}($Command));
export { StartImageScanCommand };
//# sourceMappingURL=StartImageScanCommand.js.map