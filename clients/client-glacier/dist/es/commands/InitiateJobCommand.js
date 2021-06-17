import { __extends } from "tslib";
import { InitiateJobInput, InitiateJobOutput } from "../models/models_0";
import { deserializeAws_restJson1InitiateJobCommand, serializeAws_restJson1InitiateJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
 *          or a vault retrieval. For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
 *             a Job</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateJobCommandInput} for command's `input` shape.
 * @see {@link InitiateJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitiateJobCommand = /** @class */ (function (_super) {
    __extends(InitiateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InitiateJobCommand(input) {
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
    InitiateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "InitiateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InitiateJobInput.filterSensitiveLog,
            outputFilterSensitiveLog: InitiateJobOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InitiateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InitiateJobCommand(input, context);
    };
    InitiateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InitiateJobCommand(output, context);
    };
    return InitiateJobCommand;
}($Command));
export { InitiateJobCommand };
//# sourceMappingURL=InitiateJobCommand.js.map