import { __extends } from "tslib";
import { DescribeTemplatePermissionsRequest, DescribeTemplatePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeTemplatePermissionsCommand, serializeAws_restJson1DescribeTemplatePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes read and write permissions on a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTemplatePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeTemplatePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTemplatePermissionsCommand(input) {
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
    DescribeTemplatePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeTemplatePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTemplatePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTemplatePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTemplatePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTemplatePermissionsCommand(input, context);
    };
    DescribeTemplatePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTemplatePermissionsCommand(output, context);
    };
    return DescribeTemplatePermissionsCommand;
}($Command));
export { DescribeTemplatePermissionsCommand };
//# sourceMappingURL=DescribeTemplatePermissionsCommand.js.map