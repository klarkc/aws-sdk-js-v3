import { __extends } from "tslib";
import { ListNodegroupsRequest, ListNodegroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListNodegroupsCommand, serializeAws_restJson1ListNodegroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon EKS managed node groups associated with the specified cluster in your
 *             AWS account in the specified Region. Self-managed node groups are not listed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListNodegroupsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListNodegroupsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListNodegroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodegroupsCommandInput} for command's `input` shape.
 * @see {@link ListNodegroupsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNodegroupsCommand = /** @class */ (function (_super) {
    __extends(ListNodegroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNodegroupsCommand(input) {
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
    ListNodegroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "ListNodegroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNodegroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListNodegroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNodegroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNodegroupsCommand(input, context);
    };
    ListNodegroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNodegroupsCommand(output, context);
    };
    return ListNodegroupsCommand;
}($Command));
export { ListNodegroupsCommand };
//# sourceMappingURL=ListNodegroupsCommand.js.map