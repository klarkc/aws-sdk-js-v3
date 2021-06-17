import { __extends } from "tslib";
import { ListOpsMetadataRequest, ListOpsMetadataResult } from "../models/models_1";
import { deserializeAws_json1_1ListOpsMetadataCommand, serializeAws_json1_1ListOpsMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Systems Manager calls this API action when displaying all Application Manager OpsMetadata objects or
 *    blobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link ListOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOpsMetadataCommand = /** @class */ (function (_super) {
    __extends(ListOpsMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOpsMetadataCommand(input) {
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
    ListOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsMetadataCommand(input, context);
    };
    ListOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsMetadataCommand(output, context);
    };
    return ListOpsMetadataCommand;
}($Command));
export { ListOpsMetadataCommand };
//# sourceMappingURL=ListOpsMetadataCommand.js.map