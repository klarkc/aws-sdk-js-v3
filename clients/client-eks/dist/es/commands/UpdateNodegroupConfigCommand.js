import { __extends } from "tslib";
import { UpdateNodegroupConfigRequest, UpdateNodegroupConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateNodegroupConfigCommand, serializeAws_restJson1UpdateNodegroupConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your node group update with the <a>DescribeUpdate</a>
 *             API operation. Currently you can update the Kubernetes labels for a node group or the
 *             scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateNodegroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodegroupConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNodegroupConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNodegroupConfigCommand(input) {
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
    UpdateNodegroupConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "UpdateNodegroupConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNodegroupConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNodegroupConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNodegroupConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateNodegroupConfigCommand(input, context);
    };
    UpdateNodegroupConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateNodegroupConfigCommand(output, context);
    };
    return UpdateNodegroupConfigCommand;
}($Command));
export { UpdateNodegroupConfigCommand };
//# sourceMappingURL=UpdateNodegroupConfigCommand.js.map