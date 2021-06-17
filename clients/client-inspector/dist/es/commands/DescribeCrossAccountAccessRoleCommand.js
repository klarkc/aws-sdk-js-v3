import { __extends } from "tslib";
import { DescribeCrossAccountAccessRoleResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand, serializeAws_json1_1DescribeCrossAccountAccessRoleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link DescribeCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCrossAccountAccessRoleCommand = /** @class */ (function (_super) {
    __extends(DescribeCrossAccountAccessRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCrossAccountAccessRoleCommand(input) {
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
    DescribeCrossAccountAccessRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeCrossAccountAccessRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: DescribeCrossAccountAccessRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCrossAccountAccessRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCrossAccountAccessRoleCommand(input, context);
    };
    DescribeCrossAccountAccessRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand(output, context);
    };
    return DescribeCrossAccountAccessRoleCommand;
}($Command));
export { DescribeCrossAccountAccessRoleCommand };
//# sourceMappingURL=DescribeCrossAccountAccessRoleCommand.js.map