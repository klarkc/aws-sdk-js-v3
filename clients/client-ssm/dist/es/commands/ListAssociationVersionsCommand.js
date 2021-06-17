import { __extends } from "tslib";
import { ListAssociationVersionsRequest, ListAssociationVersionsResult } from "../models/models_1";
import { deserializeAws_json1_1ListAssociationVersionsCommand, serializeAws_json1_1ListAssociationVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all versions of an association for a specific association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListAssociationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociationVersionsCommand = /** @class */ (function (_super) {
    __extends(ListAssociationVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociationVersionsCommand(input) {
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
    ListAssociationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListAssociationVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociationVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociationVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociationVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssociationVersionsCommand(input, context);
    };
    ListAssociationVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssociationVersionsCommand(output, context);
    };
    return ListAssociationVersionsCommand;
}($Command));
export { ListAssociationVersionsCommand };
//# sourceMappingURL=ListAssociationVersionsCommand.js.map