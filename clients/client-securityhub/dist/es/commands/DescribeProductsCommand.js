import { __extends } from "tslib";
import { DescribeProductsRequest, DescribeProductsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeProductsCommand, serializeAws_restJson1DescribeProductsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about product integrations in Security Hub.</p>
 *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
 *          the results only include that integration.</p>
 *          <p>If you do not provide an integration ARN, then the results include all of the available
 *          product integrations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeProductsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeProductsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeProductsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProductsCommand = /** @class */ (function (_super) {
    __extends(DescribeProductsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProductsCommand(input) {
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
    DescribeProductsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeProductsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProductsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProductsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProductsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeProductsCommand(input, context);
    };
    DescribeProductsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeProductsCommand(output, context);
    };
    return DescribeProductsCommand;
}($Command));
export { DescribeProductsCommand };
//# sourceMappingURL=DescribeProductsCommand.js.map