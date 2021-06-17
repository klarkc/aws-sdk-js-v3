import { __extends } from "tslib";
import { AddLFTagsToResourceRequest, AddLFTagsToResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1AddLFTagsToResourceCommand, serializeAws_json1_1AddLFTagsToResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches one or more tags to an existing resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, AddLFTagsToResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, AddLFTagsToResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new AddLFTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddLFTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddLFTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddLFTagsToResourceCommand = /** @class */ (function (_super) {
    __extends(AddLFTagsToResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddLFTagsToResourceCommand(input) {
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
    AddLFTagsToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "AddLFTagsToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddLFTagsToResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddLFTagsToResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddLFTagsToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddLFTagsToResourceCommand(input, context);
    };
    AddLFTagsToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddLFTagsToResourceCommand(output, context);
    };
    return AddLFTagsToResourceCommand;
}($Command));
export { AddLFTagsToResourceCommand };
//# sourceMappingURL=AddLFTagsToResourceCommand.js.map