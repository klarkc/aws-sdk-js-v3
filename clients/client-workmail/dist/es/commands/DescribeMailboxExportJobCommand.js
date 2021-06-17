import { __extends } from "tslib";
import { DescribeMailboxExportJobRequest, DescribeMailboxExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeMailboxExportJobCommand, serializeAws_json1_1DescribeMailboxExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the current status of a mailbox export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMailboxExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeMailboxExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMailboxExportJobCommand(input) {
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
    DescribeMailboxExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DescribeMailboxExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMailboxExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMailboxExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMailboxExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMailboxExportJobCommand(input, context);
    };
    DescribeMailboxExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMailboxExportJobCommand(output, context);
    };
    return DescribeMailboxExportJobCommand;
}($Command));
export { DescribeMailboxExportJobCommand };
//# sourceMappingURL=DescribeMailboxExportJobCommand.js.map