import { __extends } from "tslib";
import { DescribePolicyRequest, DescribePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePolicyCommand, serializeAws_json1_1DescribePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a policy.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePolicyCommand = /** @class */ (function (_super) {
    __extends(DescribePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePolicyCommand(input) {
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
    DescribePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePolicyCommand(input, context);
    };
    DescribePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePolicyCommand(output, context);
    };
    return DescribePolicyCommand;
}($Command));
export { DescribePolicyCommand };
//# sourceMappingURL=DescribePolicyCommand.js.map