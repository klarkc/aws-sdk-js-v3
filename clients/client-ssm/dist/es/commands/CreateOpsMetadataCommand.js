import { __extends } from "tslib";
import { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1CreateOpsMetadataCommand, serializeAws_json1_1CreateOpsMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>If you create a new application in Application Manager, Systems Manager calls this API action to specify
 *    information about the new application, including the application type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOpsMetadataCommand = /** @class */ (function (_super) {
    __extends(CreateOpsMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOpsMetadataCommand(input) {
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
    CreateOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOpsMetadataCommand(input, context);
    };
    CreateOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOpsMetadataCommand(output, context);
    };
    return CreateOpsMetadataCommand;
}($Command));
export { CreateOpsMetadataCommand };
//# sourceMappingURL=CreateOpsMetadataCommand.js.map