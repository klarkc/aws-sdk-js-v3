import { __extends } from "tslib";
import { DescribeTemplateRequest, DescribeTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeTemplateCommand, serializeAws_restJson1DescribeTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a template's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTemplateCommand = /** @class */ (function (_super) {
    __extends(DescribeTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTemplateCommand(input) {
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
    DescribeTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTemplateCommand(input, context);
    };
    DescribeTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTemplateCommand(output, context);
    };
    return DescribeTemplateCommand;
}($Command));
export { DescribeTemplateCommand };
//# sourceMappingURL=DescribeTemplateCommand.js.map