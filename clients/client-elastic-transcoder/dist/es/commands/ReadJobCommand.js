import { __extends } from "tslib";
import { ReadJobRequest, ReadJobResponse } from "../models/models_0";
import { deserializeAws_restJson1ReadJobCommand, serializeAws_restJson1ReadJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The ReadJob operation returns detailed information about a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ReadJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReadJobCommandInput} for command's `input` shape.
 * @see {@link ReadJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReadJobCommand = /** @class */ (function (_super) {
    __extends(ReadJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReadJobCommand(input) {
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
    ReadJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "ReadJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReadJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReadJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReadJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ReadJobCommand(input, context);
    };
    ReadJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ReadJobCommand(output, context);
    };
    return ReadJobCommand;
}($Command));
export { ReadJobCommand };
//# sourceMappingURL=ReadJobCommand.js.map