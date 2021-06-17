import { __extends } from "tslib";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateResourceCommand, serializeAws_json1_1UpdateResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates data for the resource. To have the latest information, it must be preceded by
 *          a <a>DescribeResource</a> call. The dataset in the request should be the one
 *          expected when performing another <code>DescribeResource</code> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceCommand(input) {
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
    UpdateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "UpdateResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResourceCommand(input, context);
    };
    UpdateResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResourceCommand(output, context);
    };
    return UpdateResourceCommand;
}($Command));
export { UpdateResourceCommand };
//# sourceMappingURL=UpdateResourceCommand.js.map