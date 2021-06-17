import { __extends } from "tslib";
import { CancelJobRequest, CancelJobResult } from "../models/models_0";
import { deserializeAws_json1_1CancelJobCommand, serializeAws_json1_1CancelJobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified job. You can only cancel a job before its <code>JobState</code>
 *       value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or
 *         <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the
 *       response element data returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelJobCommand = /** @class */ (function (_super) {
    __extends(CancelJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelJobCommand(input) {
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
    CancelJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "CancelJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelJobCommand(input, context);
    };
    CancelJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelJobCommand(output, context);
    };
    return CancelJobCommand;
}($Command));
export { CancelJobCommand };
//# sourceMappingURL=CancelJobCommand.js.map