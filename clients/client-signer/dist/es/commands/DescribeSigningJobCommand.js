import { __extends } from "tslib";
import { DescribeSigningJobRequest, DescribeSigningJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSigningJobCommand, serializeAws_restJson1DescribeSigningJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific code signing job. You specify the job by using
 * 			the <code>jobId</code> value that is returned by the <a>StartSigningJob</a>
 * 			operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, DescribeSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, DescribeSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new DescribeSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSigningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSigningJobCommand = /** @class */ (function (_super) {
    __extends(DescribeSigningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSigningJobCommand(input) {
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
    DescribeSigningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "DescribeSigningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSigningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSigningJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSigningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSigningJobCommand(input, context);
    };
    DescribeSigningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSigningJobCommand(output, context);
    };
    return DescribeSigningJobCommand;
}($Command));
export { DescribeSigningJobCommand };
//# sourceMappingURL=DescribeSigningJobCommand.js.map