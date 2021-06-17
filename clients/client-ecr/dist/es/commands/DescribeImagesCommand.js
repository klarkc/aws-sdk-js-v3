import { __extends } from "tslib";
import { DescribeImagesRequest, DescribeImagesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeImagesCommand, serializeAws_json1_1DescribeImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about the images in a repository.</p>
 *         <note>
 *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
 *                 before pushing them to a V2 Docker registry. The output of the <code>docker
 *                     images</code> command shows the uncompressed image size, so it may return a
 *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImagesCommand = /** @class */ (function (_super) {
    __extends(DescribeImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImagesCommand(input) {
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
    DescribeImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "DescribeImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeImagesCommand(input, context);
    };
    DescribeImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeImagesCommand(output, context);
    };
    return DescribeImagesCommand;
}($Command));
export { DescribeImagesCommand };
//# sourceMappingURL=DescribeImagesCommand.js.map