import { __extends } from "tslib";
import { CreateAssociationBatchRequest, CreateAssociationBatchResult } from "../models/models_0";
import { deserializeAws_json1_1CreateAssociationBatchCommand, serializeAws_json1_1CreateAssociationBatchCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p>
 *          <p>When you associate a document with one or more instances using instance IDs or tags,
 *    SSM Agent running on the instance processes the document and configures the instance as
 *    specified.</p>
 *          <p>If you associate a document with an instance that already has an associated document, the
 *    system returns the AssociationAlreadyExists exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationBatchCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationBatchCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationBatchCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssociationBatchCommand = /** @class */ (function (_super) {
    __extends(CreateAssociationBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssociationBatchCommand(input) {
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
    CreateAssociationBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateAssociationBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssociationBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssociationBatchResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssociationBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssociationBatchCommand(input, context);
    };
    CreateAssociationBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssociationBatchCommand(output, context);
    };
    return CreateAssociationBatchCommand;
}($Command));
export { CreateAssociationBatchCommand };
//# sourceMappingURL=CreateAssociationBatchCommand.js.map