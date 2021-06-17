import { __extends } from "tslib";
import { DescribeOrganizationalUnitRequest, DescribeOrganizationalUnitResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationalUnitCommand, serializeAws_json1_1DescribeOrganizationalUnitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an organizational unit (OU).</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationalUnitCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationalUnitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationalUnitCommand(input) {
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
    DescribeOrganizationalUnitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribeOrganizationalUnitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationalUnitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationalUnitResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationalUnitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationalUnitCommand(input, context);
    };
    DescribeOrganizationalUnitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationalUnitCommand(output, context);
    };
    return DescribeOrganizationalUnitCommand;
}($Command));
export { DescribeOrganizationalUnitCommand };
//# sourceMappingURL=DescribeOrganizationalUnitCommand.js.map