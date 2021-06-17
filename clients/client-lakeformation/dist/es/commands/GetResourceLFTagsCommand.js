import { __extends } from "tslib";
import { GetResourceLFTagsRequest, GetResourceLFTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResourceLFTagsCommand, serializeAws_json1_1GetResourceLFTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the tags applied to a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetResourceLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetResourceLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetResourceLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceLFTagsCommandInput} for command's `input` shape.
 * @see {@link GetResourceLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceLFTagsCommand = /** @class */ (function (_super) {
    __extends(GetResourceLFTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceLFTagsCommand(input) {
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
    GetResourceLFTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "GetResourceLFTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceLFTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceLFTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceLFTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResourceLFTagsCommand(input, context);
    };
    GetResourceLFTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResourceLFTagsCommand(output, context);
    };
    return GetResourceLFTagsCommand;
}($Command));
export { GetResourceLFTagsCommand };
//# sourceMappingURL=GetResourceLFTagsCommand.js.map