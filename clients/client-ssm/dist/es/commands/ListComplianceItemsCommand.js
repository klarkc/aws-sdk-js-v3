import { __extends } from "tslib";
import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import { deserializeAws_json1_1ListComplianceItemsCommand, serializeAws_json1_1ListComplianceItemsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For a specified resource ID, this API action returns a list of compliance statuses for
 *    different resource types. Currently, you can only specify one resource ID per call. List results
 *    depend on the criteria specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link ListComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComplianceItemsCommand = /** @class */ (function (_super) {
    __extends(ListComplianceItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComplianceItemsCommand(input) {
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
    ListComplianceItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListComplianceItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComplianceItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComplianceItemsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComplianceItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListComplianceItemsCommand(input, context);
    };
    ListComplianceItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListComplianceItemsCommand(output, context);
    };
    return ListComplianceItemsCommand;
}($Command));
export { ListComplianceItemsCommand };
//# sourceMappingURL=ListComplianceItemsCommand.js.map