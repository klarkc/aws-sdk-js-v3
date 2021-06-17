import { __extends } from "tslib";
import { DescribeTemplateAliasRequest, DescribeTemplateAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeTemplateAliasCommand, serializeAws_restJson1DescribeTemplateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTemplateAliasCommand = /** @class */ (function (_super) {
    __extends(DescribeTemplateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTemplateAliasCommand(input) {
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
    DescribeTemplateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeTemplateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTemplateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTemplateAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTemplateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTemplateAliasCommand(input, context);
    };
    DescribeTemplateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTemplateAliasCommand(output, context);
    };
    return DescribeTemplateAliasCommand;
}($Command));
export { DescribeTemplateAliasCommand };
//# sourceMappingURL=DescribeTemplateAliasCommand.js.map