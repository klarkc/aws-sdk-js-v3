import { __extends } from "tslib";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPoliciesCommand, serializeAws_json1_1ListPoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>PolicySummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPoliciesCommand(input) {
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
    ListPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "ListPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPoliciesCommand(input, context);
    };
    ListPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPoliciesCommand(output, context);
    };
    return ListPoliciesCommand;
}($Command));
export { ListPoliciesCommand };
//# sourceMappingURL=ListPoliciesCommand.js.map