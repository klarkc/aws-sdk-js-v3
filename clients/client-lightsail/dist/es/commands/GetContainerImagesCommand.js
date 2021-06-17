import { __extends } from "tslib";
import { GetContainerImagesRequest, GetContainerImagesResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerImagesCommand, serializeAws_json1_1GetContainerImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the container images that are registered to your Amazon Lightsail container
 *       service.</p>
 *
 *          <note>
 *             <p>If you created a deployment on your Lightsail container service that uses container
 *         images from a public registry like Docker Hub, those images are not returned as part of this
 *         action. Those images are not registered to your Lightsail container service.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerImagesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerImagesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerImagesCommandInput} for command's `input` shape.
 * @see {@link GetContainerImagesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerImagesCommand = /** @class */ (function (_super) {
    __extends(GetContainerImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerImagesCommand(input) {
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
    GetContainerImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerImagesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerImagesCommand(input, context);
    };
    GetContainerImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerImagesCommand(output, context);
    };
    return GetContainerImagesCommand;
}($Command));
export { GetContainerImagesCommand };
//# sourceMappingURL=GetContainerImagesCommand.js.map