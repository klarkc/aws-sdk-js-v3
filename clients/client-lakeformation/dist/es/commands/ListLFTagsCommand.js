import { __extends } from "tslib";
import { ListLFTagsRequest, ListLFTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLFTagsCommand, serializeAws_json1_1ListLFTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists tags that the requester has permission to view. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLFTagsCommandInput} for command's `input` shape.
 * @see {@link ListLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLFTagsCommand = /** @class */ (function (_super) {
    __extends(ListLFTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLFTagsCommand(input) {
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
    ListLFTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "ListLFTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLFTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLFTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLFTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLFTagsCommand(input, context);
    };
    ListLFTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLFTagsCommand(output, context);
    };
    return ListLFTagsCommand;
}($Command));
export { ListLFTagsCommand };
//# sourceMappingURL=ListLFTagsCommand.js.map