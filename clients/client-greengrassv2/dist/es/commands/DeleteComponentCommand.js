import { __extends } from "tslib";
import { DeleteComponentRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteComponentCommand, serializeAws_restJson1DeleteComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a version of a component from AWS IoT Greengrass.</p>
 *          <note>
 *             <p>This operation deletes the component's recipe and artifacts. As a result, deployments
 *         that refer to this component version will fail. If you have deployments that use this
 *         component version, you can remove the component from the deployment or update the deployment
 *         to use a valid version.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteComponentCommand = /** @class */ (function (_super) {
    __extends(DeleteComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteComponentCommand(input) {
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
    DeleteComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "DeleteComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteComponentCommand(input, context);
    };
    DeleteComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteComponentCommand(output, context);
    };
    return DeleteComponentCommand;
}($Command));
export { DeleteComponentCommand };
//# sourceMappingURL=DeleteComponentCommand.js.map