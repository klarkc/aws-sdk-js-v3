import { __extends } from "tslib";
import { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelJobCommand, serializeAws_restJson1CancelJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The CancelJob operation cancels an unfinished job.</p>
 *         <note>
 *             <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a
 *             pipeline from starting to process a job while you're getting the job identifier, use
 *                 <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CancelJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CancelJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ElasticTranscoderClient";
        var commandName = "CancelJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelJobCommand(input, context);
    };
    CancelJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelJobCommand(output, context);
    };
    return CancelJobCommand;
}($Command));
export { CancelJobCommand };
//# sourceMappingURL=CancelJobCommand.js.map