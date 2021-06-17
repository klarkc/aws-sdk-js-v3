import { __extends } from "tslib";
import { DescribeCreateAccountStatusRequest, DescribeCreateAccountStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCreateAccountStatusCommand, serializeAws_json1_1DescribeCreateAccountStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current status of an asynchronous request to create an account.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCreateAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCreateAccountStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeCreateAccountStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCreateAccountStatusCommand(input) {
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
    DescribeCreateAccountStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribeCreateAccountStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCreateAccountStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCreateAccountStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCreateAccountStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCreateAccountStatusCommand(input, context);
    };
    DescribeCreateAccountStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCreateAccountStatusCommand(output, context);
    };
    return DescribeCreateAccountStatusCommand;
}($Command));
export { DescribeCreateAccountStatusCommand };
//# sourceMappingURL=DescribeCreateAccountStatusCommand.js.map