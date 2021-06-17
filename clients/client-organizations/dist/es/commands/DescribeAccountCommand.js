import { __extends } from "tslib";
import { DescribeAccountRequest, DescribeAccountResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccountCommand, serializeAws_json1_1DescribeAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves AWS Organizations-related information about the specified account.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountCommand(input) {
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
    DescribeAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribeAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccountCommand(input, context);
    };
    DescribeAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccountCommand(output, context);
    };
    return DescribeAccountCommand;
}($Command));
export { DescribeAccountCommand };
//# sourceMappingURL=DescribeAccountCommand.js.map