import { __extends } from "tslib";
import { UpdateJobRequest, UpdateJobResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateJobCommand, serializeAws_json1_1UpdateJobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>While a job's <code>JobState</code> value is <code>New</code>, you can update some of
 *       the information associated with a job. Once the job changes to a different job state, usually
 *       within 60 minutes of the job being created, this action is no longer available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobCommand = /** @class */ (function (_super) {
    __extends(UpdateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobCommand(input) {
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
    UpdateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "UpdateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateJobCommand(input, context);
    };
    UpdateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateJobCommand(output, context);
    };
    return UpdateJobCommand;
}($Command));
export { UpdateJobCommand };
//# sourceMappingURL=UpdateJobCommand.js.map