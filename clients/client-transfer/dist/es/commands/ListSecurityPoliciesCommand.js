import { __extends } from "tslib";
import { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSecurityPoliciesCommand, serializeAws_json1_1ListSecurityPoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the security policies that are attached to your file transfer protocol-enabled
 *       servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListSecurityPoliciesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListSecurityPoliciesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListSecurityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListSecurityPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityPoliciesCommand(input) {
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
    ListSecurityPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "ListSecurityPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSecurityPoliciesCommand(input, context);
    };
    ListSecurityPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSecurityPoliciesCommand(output, context);
    };
    return ListSecurityPoliciesCommand;
}($Command));
export { ListSecurityPoliciesCommand };
//# sourceMappingURL=ListSecurityPoliciesCommand.js.map