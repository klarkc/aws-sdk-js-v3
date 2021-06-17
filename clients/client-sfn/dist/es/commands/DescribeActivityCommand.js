import { __extends } from "tslib";
import { DescribeActivityInput, DescribeActivityOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeActivityCommand, serializeAws_json1_0DescribeActivityCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an activity.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivityCommandInput} for command's `input` shape.
 * @see {@link DescribeActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeActivityCommand = /** @class */ (function (_super) {
    __extends(DescribeActivityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeActivityCommand(input) {
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
    DescribeActivityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DescribeActivityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeActivityInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeActivityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeActivityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeActivityCommand(input, context);
    };
    DescribeActivityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeActivityCommand(output, context);
    };
    return DescribeActivityCommand;
}($Command));
export { DescribeActivityCommand };
//# sourceMappingURL=DescribeActivityCommand.js.map