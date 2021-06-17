import { __extends } from "tslib";
import { UpdateOpsMetadataRequest, UpdateOpsMetadataResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateOpsMetadataCommand, serializeAws_json1_1UpdateOpsMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Systems Manager calls this API action when you edit OpsMetadata in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOpsMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateOpsMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOpsMetadataCommand(input) {
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
    UpdateOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateOpsMetadataCommand(input, context);
    };
    UpdateOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateOpsMetadataCommand(output, context);
    };
    return UpdateOpsMetadataCommand;
}($Command));
export { UpdateOpsMetadataCommand };
//# sourceMappingURL=UpdateOpsMetadataCommand.js.map