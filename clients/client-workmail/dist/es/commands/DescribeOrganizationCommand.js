import { __extends } from "tslib";
import { DescribeOrganizationRequest, DescribeOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationCommand, serializeAws_json1_1DescribeOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides more information regarding a given organization based on its
 *          identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationCommand(input) {
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
    DescribeOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DescribeOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationCommand(input, context);
    };
    DescribeOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationCommand(output, context);
    };
    return DescribeOrganizationCommand;
}($Command));
export { DescribeOrganizationCommand };
//# sourceMappingURL=DescribeOrganizationCommand.js.map